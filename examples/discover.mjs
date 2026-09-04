#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// The Artist Discovery Robot — recommendation by neighbourhood, fully offline.
//
//   node examples/discover.mjs
//   node examples/discover.mjs "Electronic" "Detroit Techno / Chicago House"
//
// Call it repeatedly on one engine and it keeps walking outward instead of
// repeating itself — sub-category → cross-pillar bridges → parent pillar.
// ─────────────────────────────────────────────────────────────────────────────
import { build } from './_bundle.mjs';

const { DiscoveryEngine, ALCHEMY_DICTIONARY } = await build();

const pillar = process.argv[2] || 'Electronic';
const sub = process.argv[3] || 'Ambient / Downtempo';

const known = ALCHEMY_DICTIONARY.find((p) => p.name === pillar);
if (!known) {
  console.error(`\nUnknown pillar: "${pillar}"\n\nAvailable:`);
  for (const p of ALCHEMY_DICTIONARY) { console.error(`  ${p.name}`); }
  process.exit(1);
}
if (!known.subCategories[sub]) {
  console.error(`\nUnknown sub-category: "${sub}"\n\nAvailable in ${pillar}:`);
  for (const s of Object.keys(known.subCategories)) { console.error(`  ${s}`); }
  process.exit(1);
}

const engine = new DiscoveryEngine();

for (let round = 1; round <= 3; round++) {
  const { recommendations, exhausted } = engine.discover(pillar, sub);
  console.log(`\n── ROUND ${round} — seed: ${pillar} › ${sub}${exhausted ? '  (pool exhausted, memory reset)' : ''}`);
  for (const r of recommendations) {
    const tag = r.isConnector ? ' [bridge]' : '';
    console.log(`\n  ${r.name}${tag}`);
    console.log(`    ${r.subCategory} · ${r.energy} energy · ${r.mood.join(' / ')}`);
    console.log(`    ${r.description}`);
  }
}
console.log(`\n(${engine.seenCount} artists shown across 3 rounds — no repeats)\n`);
