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
//
// ENV
//   ALCHEMY_PROVIDER  anthropic (default) | openai | gemini | custom
//   ALCHEMY_API_KEY   required
//   ALCHEMY_MODEL     overrides the per-provider default
//   ALCHEMY_API_URL   required for `custom` — any OpenAI-compatible /chat/completions
//                     endpoint (llama.cpp, Ollama, vLLM, OpenRouter, Together, …)
//
// Nothing here is Anthropic-specific by design. `custom` covers a local model,
// so you can grow the dictionary with no API key and no network at all.
// ─────────────────────────────────────────────────────────────────────────────
import { execSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

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
      body: { model, max_tokens: 4096, messages: [{ role: 'user', content: prompt }] },
    }),
    extract: (json) => json?.content?.[0]?.text,
  },
  openai: {
    defaultModel: 'gpt-4o',
    request: (model, prompt, key) => ({
      url: 'https://api.openai.com/v1/chat/completions',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
      body: { model, messages: [{ role: 'user', content: prompt }] },
    }),
    extract: (json) => json?.choices?.[0]?.message?.content,
  },
  gemini: {
    defaultModel: 'gemini-2.5-flash',
    request: (model, prompt, key) => ({
      url: `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
      body: { contents: [{ parts: [{ text: prompt }] }] },
    }),
    extract: (json) => json?.candidates?.[0]?.content?.parts?.[0]?.text,
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
        body: { model, messages: [{ role: 'user', content: prompt }] },
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

// ── The prompt ───────────────────────────────────────────────────────────────
// Sending the artists already present is what keeps proposals additive and on
// register — the model is matching a demonstrated standard, not guessing at one.
const prompt = `You are helping curate a music genre taxonomy.

PILLAR: ${pillarName}
SUB-CATEGORY: ${subName}
${meta ? `INTENT: ${meta.description}\nMOOD: ${meta.mood.join(', ')} · ENERGY: ${meta.energy} · ERAS: ${meta.decades.join(', ')}` : '(no metadata defined for this sub-category yet)'}

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
const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
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
const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
let proposals;
try {
  proposals = JSON.parse((fenced ? fenced[1] : text).trim());
} catch {
  console.error(`Response was not valid JSON:\n${text.slice(0, 800)}`);
  process.exit(1);
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
for (const p of proposals) {
  if (!p || typeof p.name !== 'string' || !p.name.trim()) { continue; }
  const hit = lookupArtist(p.name);
  if (hit) {
    rejected.push({ ...p, reason: `already resolves to ${hit.pillar} › ${hit.subCategory}` });
  } else {
    accepted.push({ name: p.name.trim(), bio: String(p.bio || '').trim(), aliases: Array.isArray(p.aliases) ? p.aliases : [] });
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
