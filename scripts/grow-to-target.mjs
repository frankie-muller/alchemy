#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// GROW-TO-TARGET — bring every sub-category up to roughly the same size by
// repeatedly driving grow.mjs + merge-proposal.mjs, respecting the provider's
// rate limit. Fully resumable: it only ever trusts what's on disk, so killing
// and restarting it just picks up wherever the dictionary actually is.
//
//   ALCHEMY_PROVIDER=gemini ALCHEMY_API_KEY=... node scripts/grow-to-target.mjs --target 132
//
//   --models "openai/gpt-oss-120b,openai/gpt-oss-20b,groq/compound-mini"
//     Round-robins across models that share one ALCHEMY_PROVIDER/API_URL but
//     have SEPARATE quota buckets (true of Groq's per-model daily caps).
//     When a model fails, cycles to the next one automatically rather than
//     stalling the whole run on a single provider's clock. Cross-provider
//     cycling isn't supported here — ALCHEMY_PROVIDER/ALCHEMY_API_URL are
//     fixed for the whole run, only the model name rotates. Falls back to
//     ALCHEMY_MODEL (or its provider default) if --models is omitted.
//
// Per sub-category: ask for a batch, merge what's accepted, repeat until it
// reaches --target OR two consecutive batches land zero new artists (the
// niche is exhausted — padding further would mean forcing fabrication, which
// is exactly what grow.mjs's own rejection filter and this stopping rule
// both exist to avoid).
// ─────────────────────────────────────────────────────────────────────────────
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}
const TARGET = Number(arg('--target', 132));
const BATCH = Number(arg('--batch', 12));
const PACE_MS = Number(arg('--pace-ms', 7000));
const MAX_ROUNDS_PER_SUB = Number(arg('--max-rounds', 40));
const TRENDING_FILE = arg('--trending-file', null);
const baseEnv = TRENDING_FILE ? { ...process.env, ALCHEMY_TRENDING_FILE: TRENDING_FILE } : { ...process.env };

// ── Model cycling ────────────────────────────────────────────────────────────
// --models "a,b,c" round-robins across models with SEPARATE quota buckets
// (different models, or the same model via different providers). grow.mjs
// already retries 429/503 internally with backoff, so if a call still fails
// by the time it reaches here, that model is genuinely spent for now (daily
// cap, sustained congestion, or a hard error) — move to the next one rather
// than stall the whole run waiting on a single provider's clock.
const MODELS = (arg('--models', null) || process.env.ALCHEMY_MODEL || '').split(',').map((s) => s.trim()).filter(Boolean);
if (MODELS.length === 0) {
  console.error('No model configured. Pass --models "model1,model2,..." or set ALCHEMY_MODEL.');
  process.exit(1);
}
let modelIndex = 0;

async function loadDictionary() {
  const workDir = mkdtempSync(join(tmpdir(), 'alchemy-orchestrate-'));
  try {
    const bundlePath = join(workDir, 'alchemy.mjs');
    execFileSync('npx', ['esbuild', 'src/index.ts', '--bundle', '--format=esm', '--platform=node', `--outfile=${bundlePath}`], { cwd: root, stdio: ['ignore', 'ignore', 'inherit'] });
    // Cache-bust: re-importing the same path would hit Node's ESM cache.
    return await import(pathToFileURL(bundlePath).href + `?t=${Date.now()}`);
  } finally {
    rmSync(workDir, { recursive: true, force: true });
  }
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

const log = (msg) => console.log(`[${new Date().toISOString().slice(11, 19)}] ${msg}`);

// ── Build the work list once; re-measure counts live as we go ───────────────
const initial = await loadDictionary();
const jobs = [];
for (const pillar of initial.ALCHEMY_DICTIONARY) {
  if (pillar.name === 'Studio Perfection') { continue; }
  for (const sub of Object.keys(pillar.subCategories)) {
    jobs.push({ pillar: pillar.name, sub });
  }
}
log(`${jobs.length} sub-categories, target ${TARGET} each, batch size ${BATCH}, ${PACE_MS}ms between calls`);

let totalMerged = 0;
let totalCallsMade = 0;
let mergedSincePillarCommit = 0;

function commitPillarProgress(pillarName) {
  if (mergedSincePillarCommit === 0) { return; }
  try {
    const status = execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' });
    if (!status.trim()) { return; }
    execFileSync('git', ['add', '-A'], { cwd: root });
    execFileSync('git', ['commit', '-q', '-m', `Grow ${pillarName}: +${mergedSincePillarCommit} artists toward ${TARGET}/sub-category\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`], { cwd: root });
    execFileSync('git', ['push', 'origin', 'main'], { cwd: root, stdio: 'pipe' });
    log(`  COMMITTED + pushed: ${pillarName} (+${mergedSincePillarCommit} this pillar)`);
  } catch (err) {
    log(`  !!! commit/push failed for ${pillarName}: ${(err.stdout || err.message || '').toString().slice(0, 300)} — continuing, progress stays uncommitted locally.`);
  }
  mergedSincePillarCommit = 0;
}

for (let i = 0; i < jobs.length; i++) {
  const job = jobs[i];
  let dict = await loadDictionary();
  const pillar = dict.ALCHEMY_DICTIONARY.find((p) => p.name === job.pillar);
  let current = Object.keys(pillar.subCategories[job.sub]).length;

  if (current >= TARGET) {
    log(`SKIP  ${job.pillar} › ${job.sub}  (already ${current} >= ${TARGET})`);
    continue;
  }

  log(`START ${job.pillar} › ${job.sub}  ${current} -> ${TARGET}`);
  let consecutiveEmpty = 0;
  let rounds = 0;

  while (current < TARGET && consecutiveEmpty < 2 && rounds < MAX_ROUNDS_PER_SUB) {
    rounds++;
    const need = Math.min(BATCH, TARGET - current + 3);

    // Try each model at most once this round; grow.mjs already retries
    // transient errors internally, so a failure here means THIS model is
    // spent for now — cycle to the next rather than stall on it.
    let growOutput = null;
    for (let attempt = 0; attempt < MODELS.length; attempt++) {
      const model = MODELS[modelIndex];
      try {
        growOutput = execFileSync('node', ['scripts/grow.mjs', '--pillar', job.pillar, '--sub', job.sub, '-n', String(need)], {
          cwd: root, encoding: 'utf8', env: { ...baseEnv, ALCHEMY_MODEL: model },
        });
        break;
      } catch (err) {
        const out = (err.stdout || '') + (err.stderr || '');
        const nextModel = MODELS[(modelIndex + 1) % MODELS.length];
        log(`  model ${model} failed (${out.slice(0, 150).replace(/\n/g, ' ')}) — switching to ${nextModel}`);
        modelIndex = (modelIndex + 1) % MODELS.length;
      }
    }

    if (growOutput === null) {
      consecutiveEmpty++;
      log(`  round ${rounds}: every configured model failed (now ${current}/${TARGET})  [${consecutiveEmpty} empty in a row]`);
      await sleep(PACE_MS);
      continue;
    }
    totalCallsMade++;

    const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const proposalPath = join(root, 'proposals', `${slug(job.pillar)}__${slug(job.sub)}.json`);

    let merged = 0;
    try {
      const mergeOutput = execFileSync('node', ['scripts/merge-proposal.mjs', proposalPath], { cwd: root, encoding: 'utf8' });
      merged = (mergeOutput.match(/^\s*\+ /gm) || []).length;
    } catch (err) {
      log(`  merge failed: ${(err.stdout || err.message || '').slice(0, 300)}`);
    }

    current += merged;
    totalMerged += merged;
    mergedSincePillarCommit += merged;
    consecutiveEmpty = merged === 0 ? consecutiveEmpty + 1 : 0;
    log(`  round ${rounds} [${MODELS[modelIndex]}]: +${merged} (now ${current}/${TARGET})${consecutiveEmpty ? `  [${consecutiveEmpty} empty in a row]` : ''}`);

    await sleep(PACE_MS);
  }

  if (consecutiveEmpty >= 2) { log(`STOP  ${job.pillar} › ${job.sub}  ran dry at ${current} (target was ${TARGET})`); }
  else if (rounds >= MAX_ROUNDS_PER_SUB) { log(`STOP  ${job.pillar} › ${job.sub}  hit round cap at ${current}`); }
  else { log(`DONE  ${job.pillar} › ${job.sub}  reached ${current}`); }

  // Verify after every sub-category, not just at the end — fail fast.
  try {
    execFileSync('npm', ['test'], { cwd: root, stdio: 'pipe' });
  } catch (err) {
    log(`  !!! npm test FAILED after ${job.pillar} › ${job.sub} — stopping the whole run.`);
    log((err.stdout || '').toString().slice(-2000));
    process.exit(1);
  }

  // Commit + push at each pillar boundary (not every sub-category — that
  // would be a lot of tiny commits) so a run spanning hours never risks
  // losing more than one pillar's worth of API-purchased progress.
  const nextPillar = jobs[i + 1]?.pillar;
  if (nextPillar !== job.pillar) { commitPillarProgress(job.pillar); }
}

log(`FINISHED. ${totalCallsMade} API calls, ${totalMerged} artists merged.`);
