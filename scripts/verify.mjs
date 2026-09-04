#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// THE ROLL CALL — classifier correctness harness.
//
// Bundles the REAL dictionary + lookup code (the exact modules the app ships)
// and asserts, for every curated artist in every pillar:
//   1. lookupArtist(primaryName) finds an entry (no self-match failures);
//   2. it lands on its OWN pillar — unless the name is a known cross-pillar
//      collision, in which case the deterministic policy winner is accepted
//      and the collision is reported for future dictionary curation;
//   3. every Studio Perfection curated name (and alias) passes
//      isStudioPerfectionArtist.
// Plus golden regression cases for the historical failures (the "ft" massacre
// and the tokenizer mismatch).
//
// Run:  node npm run verify
// Exit: 0 = all green; 1 = failures (named in output).
// ─────────────────────────────────────────────────────────────────────────────
import { execSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const workDir = mkdtempSync(join(tmpdir(), 'alchemy-verify-'));
const bundlePath = join(workDir, 'classifier.mjs');

try {
  execSync(
    `npx esbuild scripts/verify-entry.ts --bundle --format=esm --platform=node ` +
    `--outfile=${JSON.stringify(bundlePath)}`,
    { cwd: root, stdio: ['ignore', 'ignore', 'inherit'] },
  );

  const { lookupArtist, ALCHEMY_DICTIONARY, isStudioPerfectionArtist, studioPerfection } =
    await import(pathToFileURL(bundlePath).href);

  // ── Build the collision map (same normalization as the app: NFC+lowercase) ──
  const norm = (s) => s.normalize('NFC').toLowerCase().trim();
  const owners = new Map(); // key -> [{pillar, sub, primary, isPrimary}]
  for (const pillar of ALCHEMY_DICTIONARY) {
    for (const [sub, artists] of Object.entries(pillar.subCategories)) {
      for (const [primary, data] of Object.entries(artists)) {
        for (const [name, isPrimary] of [[primary, true], ...(data.aliases || []).map(a => [a, false])]) {
          const key = norm(name);
          if (!owners.has(key)) owners.set(key, []);
          owners.get(key).push({ pillar: pillar.name, sub, primary, isPrimary });
        }
      }
    }
  }
  const collisions = [...owners.entries()].filter(([, list]) => list.length > 1);

  // ── Roll call: every primary must self-match ──
  let total = 0, selfMatchFail = [], wrongPillar = [], collisionAccepted = 0;
  for (const pillar of ALCHEMY_DICTIONARY) {
    for (const [sub, artists] of Object.entries(pillar.subCategories)) {
      for (const primary of Object.keys(artists)) {
        total++;
        const hit = lookupArtist(primary);
        if (!hit) { selfMatchFail.push(`${primary}  [${pillar.name} › ${sub}]`); continue; }
        if (hit.pillar !== pillar.name) {
          const contested = (owners.get(norm(primary)) || []).length > 1;
          if (contested) { collisionAccepted++; }
          else { wrongPillar.push(`${primary}: filed ${pillar.name} → matched ${hit.pillar} › ${hit.subCategory}`); }
        }
      }
    }
  }

  // ── Studio Perfection roll call (primaries + aliases) ──
  let spTotal = 0; const spFail = [];
  const curated = studioPerfection.subCategories['Curated Override'] || {};
  for (const [primary, data] of Object.entries(curated)) {
    for (const name of [primary, ...(data.aliases || [])]) {
      spTotal++;
      if (!isStudioPerfectionArtist(name)) { spFail.push(name); }
    }
  }

  // ── Golden regression cases (the historical massacres) ──
  const golden = [];
  const expectHit = (input, note) => {
    const hit = lookupArtist(input);
    if (!hit) golden.push(`MISS: ${input}  (${note})`);
    return hit;
  };
  expectHit('Daft Punk', 'ft-regex victim');
  expectHit('Kraftwerk', 'ft-regex victim');
  expectHit('Taylor Swift', 'ft-regex victim');
  expectHit('Deftones', 'ft-regex victim');
  const ewf = expectHit('Earth, Wind & Fire', 'tokenizer victim');
  if (ewf && /metal/i.test(ewf.pillar)) golden.push(`LEAK: Earth, Wind & Fire → ${ewf.pillar} (the Metal misfile lives)`);
  const featCase = lookupArtist('Daft Punk feat. Todd Edwards');
  if (!featCase) golden.push('MISS: "Daft Punk feat. Todd Edwards" (featuring-clause strip)');
  if (!isStudioPerfectionArtist('Daft Punk')) golden.push('SP-MISS: Daft Punk not Studio Perfection (same regex, second engine)');

  // ── Report ──
  const pad = (n) => String(n).padStart(5);
  console.log('─'.repeat(64));
  console.log(`ROLL CALL  ${pad(total - selfMatchFail.length - wrongPillar.length)} / ${total} primaries OK` +
              `   (${collisionAccepted} resolved by collision policy)`);
  console.log(`STUDIO     ${pad(spTotal - spFail.length)} / ${spTotal} curated names OK`);
  console.log(`COLLISIONS ${pad(collisions.length)} duplicate keys in dictionary (curation backlog)`);
  console.log('─'.repeat(64));
  const dump = (label, arr, cap = 25) => {
    if (!arr.length) return;
    console.log(`\n✗ ${label} (${arr.length}):`);
    arr.slice(0, cap).forEach(x => console.log(`   ${x}`));
    if (arr.length > cap) console.log(`   … and ${arr.length - cap} more`);
  };
  dump('SELF-MATCH FAILURES', selfMatchFail);
  dump('WRONG-PILLAR LEAKS', wrongPillar);
  dump('STUDIO PERFECTION FAILURES', spFail);
  dump('GOLDEN CASE FAILURES', golden);

  const failed = selfMatchFail.length + wrongPillar.length + spFail.length + golden.length;
  console.log(failed === 0 ? '\n✅ ALL GREEN' : `\n❌ ${failed} FAILURES`);
  process.exit(failed === 0 ? 0 : 1);
} finally {
  rmSync(workDir, { recursive: true, force: true });
}
