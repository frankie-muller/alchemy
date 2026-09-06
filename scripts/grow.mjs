#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// GROW — propose new dictionary entries with the LLM of your choice.
//
// This is the tool the dictionary was actually built with. It does NOT write to
// the pillar files. It writes a reviewable JSON proposal, you read it, you paste
// what you agree with, and `npm run verify` decides whether it may live.
//
//   ALCHEMY_API_KEY=sk-... node scripts/grow.mjs --pillar Electronic --sub "Acid House"
//   ALCHEMY_PROVIDER=gemini ALCHEMY_API_KEY=... node scripts/grow.mjs --pillar Latin --sub Tango -n 15
//   ALCHEMY_PROVIDER=grok ALCHEMY_API_KEY=xai-... node scripts/grow.mjs --pillar Rock --sub "Krautrock"
//
// ENV
//   ALCHEMY_PROVIDER  anthropic (default) | openai | gemini | grok | custom
//   ALCHEMY_API_KEY   required
//   ALCHEMY_MODEL     overrides the per-provider default
//   ALCHEMY_API_URL   required for `custom` — any OpenAI-compatible /chat/completions
//                     endpoint (llama.cpp, Ollama, vLLM, OpenRouter, Together, …)
//   ALCHEMY_TRENDING_FILE  optional — path to JSON ([{pillar, trending:[{name,note}]}])
//                     from a web-search sweep for currently-trending artists per
//                     pillar. The model still decides which (if any) fit this
//                     specific sub-category; this only widens what it considers.
//
// Nothing here is Anthropic-specific by design. `custom` covers a local model,
// so you can grow the dictionary with no API key and no network at all.
// ─────────────────────────────────────────────────────────────────────────────
import { execSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { jsonrepair } from 'jsonrepair';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// ── Args ─────────────────────────────────────────────────────────────────────
function arg(...names) {
  for (const name of names) {
    const i = process.argv.indexOf(name);
    if (i !== -1 && process.argv[i + 1]) { return process.argv[i + 1]; }
  }
  return undefined;
}

const pillarName = arg('--pillar', '-p');
const subName = arg('--sub', '-s');
const count = Number(arg('--count', '-n') || 10);

if (!pillarName || !subName) {
  console.error(`
Usage: node scripts/grow.mjs --pillar <Pillar> --sub <Sub-category> [-n 10]

Example:
  ALCHEMY_API_KEY=... node scripts/grow.mjs --pillar Electronic --sub "Acid House"
`);
  process.exit(1);
}

// ── Providers ────────────────────────────────────────────────────────────────
// Each entry turns a prompt into { url, headers, body } and pulls the text back
// out of that provider's response shape. Add one to support anything else.
//
// max_tokens is deliberately modest (2048), not generous: some free-tier
// providers (Groq's smaller models) enforce a combined prompt+max_tokens
// tokens-per-minute ceiling, so requesting more headroom than this task
// actually needs (a short JSON array of names/bios) can get the request
// rejected as "too large" before generation even starts, on a sub-category
// with a long existing-artist list. 2048 comfortably covers a real batch of
// 15+ entries while leaving room under a tight per-minute budget.
const PROVIDERS = {
  anthropic: {
    defaultModel: 'claude-sonnet-5',
    request: (model, prompt, key) => ({
      url: 'https://api.anthropic.com/v1/messages',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      },
      body: { model, max_tokens: 2048, messages: [{ role: 'user', content: prompt }] },
    }),
    extract: (json) => json?.content?.[0]?.text,
  },
  openai: {
    defaultModel: 'gpt-4o',
    request: (model, prompt, key) => ({
      url: 'https://api.openai.com/v1/chat/completions',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
      body: { model, max_tokens: 2048, messages: [{ role: 'user', content: prompt }] },
    }),
    extract: (json) => json?.choices?.[0]?.message?.content,
  },
  gemini: {
    defaultModel: 'gemini-3.6-flash',
    request: (model, prompt, key) => ({
      url: `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
      body: { contents: [{ parts: [{ text: prompt }] }], generationConfig: { maxOutputTokens: 2048 } },
    }),
    extract: (json) => json?.candidates?.[0]?.content?.parts?.[0]?.text,
  },
  // xAI's API is OpenAI-compatible (same request/response shape, just a
  // different base URL) — grok-4.3 is xAI's cheapest general-purpose text
  // model as of writing ($1.25/$2.50 per M tokens in/out, 1M context).
  // Cheaper tiers exist (grok-build-0.1, coding-specialized) but aren't a
  // better fit for short factual JSON like this. Override with
  // ALCHEMY_MODEL if xAI's lineup or pricing has moved since.
  grok: {
    defaultModel: 'grok-4.3',
    request: (model, prompt, key) => ({
      url: 'https://api.x.ai/v1/chat/completions',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
      body: { model, max_tokens: 2048, messages: [{ role: 'user', content: prompt }] },
    }),
    extract: (json) => json?.choices?.[0]?.message?.content,
  },
  // Any OpenAI-compatible endpoint, including a local model with a dummy key.
  custom: {
    defaultModel: 'local',
    request: (model, prompt, key) => {
      const url = process.env.ALCHEMY_API_URL;
      if (!url) { throw new Error('ALCHEMY_PROVIDER=custom requires ALCHEMY_API_URL'); }
      return {
        url,
        headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
        body: { model, max_tokens: 2048, messages: [{ role: 'user', content: prompt }] },
      };
    },
    extract: (json) => json?.choices?.[0]?.message?.content,
  },
};

const providerName = process.env.ALCHEMY_PROVIDER || 'anthropic';
const provider = PROVIDERS[providerName];
if (!provider) {
  console.error(`Unknown ALCHEMY_PROVIDER "${providerName}". Options: ${Object.keys(PROVIDERS).join(', ')}`);
  process.exit(1);
}
const apiKey = process.env.ALCHEMY_API_KEY;
if (!apiKey) {
  console.error('ALCHEMY_API_KEY is not set. (Use ALCHEMY_PROVIDER=custom with a local model to avoid one.)');
  process.exit(1);
}
const model = process.env.ALCHEMY_MODEL || provider.defaultModel;

// ── Load the real dictionary, so we can dedupe against it ────────────────────
const workDir = mkdtempSync(join(tmpdir(), 'alchemy-grow-'));
let alchemy;
try {
  const bundlePath = join(workDir, 'alchemy.mjs');
  execSync(
    `npx esbuild src/index.ts --bundle --format=esm --platform=node --outfile=${JSON.stringify(bundlePath)}`,
    { cwd: root, stdio: ['ignore', 'ignore', 'inherit'] },
  );
  alchemy = await import(pathToFileURL(bundlePath).href);
} finally {
  rmSync(workDir, { recursive: true, force: true });
}

const { ALCHEMY_DICTIONARY, lookupArtist, getSubCategoryMeta } = alchemy;

const pillar = ALCHEMY_DICTIONARY.find((p) => p.name === pillarName);
if (!pillar) {
  console.error(`\nUnknown pillar "${pillarName}". Available:`);
  for (const p of ALCHEMY_DICTIONARY) { console.error(`  ${p.name}`); }
  process.exit(1);
}
const existing = pillar.subCategories[subName];
if (!existing) {
  console.error(`\nUnknown sub-category "${subName}". Available in ${pillarName}:`);
  for (const s of Object.keys(pillar.subCategories)) { console.error(`  ${s}`); }
  process.exit(1);
}

const existingNames = Object.keys(existing);
const meta = getSubCategoryMeta(subName);

// ── Optional trending context ────────────────────────────────────────────────
// A base model's training data goes stale; it will under-propose acts who
// broke out after its cutoff. ALCHEMY_TRENDING_FILE points at JSON written by
// a web-search sweep (scripts run this per pillar, not per sub-category — the
// model itself decides which trending names, if any, actually fit THIS
// sub-category rather than an adjacent one in the same pillar).
let trendingBlock = '';
const trendingFile = process.env.ALCHEMY_TRENDING_FILE;
if (trendingFile) {
  try {
    const all = JSON.parse(readFileSync(trendingFile, 'utf8'));
    const forPillar = all.find((p) => p.pillar === pillarName);
    if (forPillar?.trending?.length) {
      trendingBlock = `\nCURRENTLY TRENDING IN THIS PILLAR (found via live web search — only use ones that genuinely fit THIS sub-category, not just the pillar):\n${forPillar.trending.map((t) => `- ${t.name} — ${t.note}`).join('\n')}\n`;
    }
  } catch (err) {
    console.error(`Warning: could not read ALCHEMY_TRENDING_FILE (${err.message}) — continuing without it.`);
  }
}

// ── The prompt ───────────────────────────────────────────────────────────────
// Sending the artists already present is what keeps proposals additive and on
// register — the model is matching a demonstrated standard, not guessing at one.
const prompt = `You are helping curate a music genre taxonomy.

PILLAR: ${pillarName}
SUB-CATEGORY: ${subName}
${meta ? `INTENT: ${meta.description}\nMOOD: ${meta.mood.join(', ')} · ENERGY: ${meta.energy} · ERAS: ${meta.decades.join(', ')}` : '(no metadata defined for this sub-category yet)'}
${trendingBlock}
Artists ALREADY in this sub-category (${existingNames.length}) — do not repeat any of them:
${existingNames.join(', ')}

Propose ${count} artists that genuinely belong in this exact sub-category and are missing above.

Rules:
- Real, verifiable artists only. If you are not confident an artist exists and fits, omit it — a short list is correct, a padded one is not.
- The artist's CENTRE OF GRAVITY must be this sub-category, not merely an adjacent one.
- "aliases" = real alternative spellings/renderings that appear in file tags
  (accents dropped, "&" vs "and", stage-name variants, common misspellings).
  Empty array if there are none. Do not invent aliases.
- "bio" = one sentence, max 30 words, saying what makes them belong here.

Return ONLY a JSON array, no prose, no markdown fence:
[{"name":"Artist Name","bio":"One sentence.","aliases":["variant"]}]`;

// ── Call ─────────────────────────────────────────────────────────────────────
console.log(`\nGROW  ${pillarName} › ${subName}`);
console.log(`      provider=${providerName} model=${model} · ${existingNames.length} artists already present`);
console.log(`      asking for ${count}…\n`);

const { url, headers, body } = provider.request(model, prompt, apiKey);

// Capacity errors (503/429) are the provider being busy, not the request
// being wrong — retrying with backoff belongs here so every caller (this
// script standalone, or an orchestrator driving hundreds of these) gets it
// for free, instead of an orchestrator mistaking "provider is overloaded"
// for "this sub-category ran out of real artists."
const MAX_ATTEMPTS = 5;
let res;
let networkError;
for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  networkError = undefined;
  try {
    // fetch() itself can throw (DNS, TLS, connect timeout) instead of
    // returning a response — that's not a 5xx to check res.status on, but
    // it's exactly as transient, so it gets the same retry treatment rather
    // than crashing the process with a raw stack trace.
    res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
  } catch (err) {
    networkError = err;
  }
  const shouldRetry = networkError || (!res.ok && [429, 500, 502, 503, 504].includes(res.status));
  if (!shouldRetry || attempt === MAX_ATTEMPTS) { break; }
  const backoffMs = Math.min(5000 * 2 ** (attempt - 1), 60000);
  const reason = networkError ? networkError.cause?.code || networkError.message : res.status;
  console.error(`  provider busy (${reason}), retrying in ${Math.round(backoffMs / 1000)}s… (attempt ${attempt}/${MAX_ATTEMPTS})`);
  await new Promise((r) => setTimeout(r, backoffMs));
}
if (networkError) {
  console.error(`Network error reaching ${url}: ${networkError.cause?.code || networkError.message}`);
  process.exit(1);
}
if (!res.ok) {
  console.error(`API error ${res.status} ${res.statusText}\n${(await res.text()).slice(0, 800)}`);
  process.exit(1);
}
const text = provider.extract(await res.json());
if (!text) {
  console.error('Could not extract text from the response — check the provider adapter.');
  process.exit(1);
}

// Models fence JSON even when told not to; tolerate it rather than fail.
// Reasoning models (Qwen3, DeepSeek-R1-style) also leak a <think>...</think>
// block into plain content instead of a separate field — strip it before
// trying to parse. Falls back to the raw text for models that do neither.
let cleaned = text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
const fenced = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/);
let candidate = (fenced ? fenced[1] : cleaned).trim();
// Last resort: an unclosed <think> (truncated before </think> ever showed
// up) or stray prose before/after — grab the outermost [...] array instead
// of trusting the whole string is JSON.
if (!candidate.startsWith('[')) {
  const arrayMatch = candidate.match(/\[[\s\S]*\]/);
  if (arrayMatch) { candidate = arrayMatch[0]; }
}
// Try to parse a JSON value two ways: as-is, then through jsonrepair (fixes
// the common LLM slips — trailing commas, unquoted keys, single quotes).
// jsonrepair can't infer a MISPLACED bracket (a model writing a stray ']'
// mid-string, say) since that's a semantic error, not a syntax one — that
// case falls through to per-object salvage below.
function parseLoose(str) {
  try { return JSON.parse(str); } catch { /* fall through */ }
  return JSON.parse(jsonrepair(str));
}

let proposals;
try {
  proposals = parseLoose(candidate);
} catch {
  // The array as a whole is broken (stray trailing bracket, one truncated
  // entry, a misplaced bracket jsonrepair can't infer) but the individual
  // {...} objects in it are usually still fine — salvage whichever ones
  // parse instead of discarding a batch of otherwise good, real artists
  // over one malformed entry.
  const objectMatches = candidate.match(/\{[^{}]*\}/g) || [];
  const salvaged = [];
  for (const objText of objectMatches) {
    try {
      const obj = parseLoose(objText);
      if (obj && typeof obj.name === 'string') { salvaged.push(obj); }
    } catch { /* skip the one that's actually broken */ }
  }
  if (salvaged.length === 0) {
    console.error(`Response was not valid JSON:\n${text.slice(0, 800)}`);
    process.exit(1);
  }
  console.error(`Note: response array wasn't valid JSON as a whole; salvaged ${salvaged.length} of ${objectMatches.length} individual entries.`);
  proposals = salvaged;
}
if (!Array.isArray(proposals)) {
  console.error('Expected a JSON array of proposals.');
  process.exit(1);
}

// ── Filter ───────────────────────────────────────────────────────────────────
// A proposal is dropped if the name resolves ANYWHERE in the dictionary — a
// duplicate in another pillar is exactly the collision the harness complains
// about, so it gets caught here rather than after it is pasted in.
const accepted = [];
const rejected = [];
const seenThisBatch = new Set(); // a model can repeat itself within one response
for (const p of proposals) {
  if (!p || typeof p.name !== 'string' || !p.name.trim()) { continue; }
  const name = p.name.trim();
  const key = name.toLowerCase();
  if (seenThisBatch.has(key)) { continue; }
  seenThisBatch.add(key);
  // A truncated/malformed entry (salvaged individually above, or just a
  // model skimping on the one field that matters) with no bio is worse than
  // not adding that artist this round — there will be another round.
  if (!String(p.bio || '').trim()) {
    rejected.push({ ...p, reason: 'missing/empty bio (malformed or truncated entry)' });
    continue;
  }
  const hit = lookupArtist(name);
  if (hit) {
    rejected.push({ ...p, reason: `already resolves to ${hit.pillar} › ${hit.subCategory}` });
  } else {
    accepted.push({ name, bio: String(p.bio || '').trim(), aliases: Array.isArray(p.aliases) ? p.aliases : [] });
  }
}

// ── Write the proposal ───────────────────────────────────────────────────────
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const outDir = join(root, 'proposals');
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, `${slug(pillarName)}__${slug(subName)}.json`);
writeFileSync(outFile, `${JSON.stringify({
  pillar: pillarName,
  subCategory: subName,
  generatedAt: new Date().toISOString(),
  provider: providerName,
  model,
  accepted,
  rejected,
}, null, 2)}\n`);

for (const a of accepted) {
  console.log(`  + ${a.name}${a.aliases.length ? `  (${a.aliases.join(', ')})` : ''}`);
  console.log(`      ${a.bio}`);
}
for (const r of rejected) { console.log(`  – ${r.name} — ${r.reason}`); }

console.log(`\n${accepted.length} new · ${rejected.length} already known`);
console.log(`Written to  proposals/${slug(pillarName)}__${slug(subName)}.json\n`);
console.log(`NEXT: read it, delete what you disagree with, paste the rest into`);
console.log(`      src/pillars/${slug(pillarName)}.ts, then run:  npm test\n`);
console.log(`An LLM will confidently invent artists. The harness catches structural`);
console.log(`breakage, not fiction — that part is on you.\n`);
