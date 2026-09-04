#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Classify messy tags — the 30-second demo.
//
//   node examples/classify.mjs
//   node examples/classify.mjs "Daft Punk" "Rihanna feat. Calvin Harris"
//
// Every default below is a real-world tag shape that breaks naive matchers.
// ─────────────────────────────────────────────────────────────────────────────
import { build } from './_bundle.mjs';

const { classifyTrack, getDictionaryStats } = await build();

const SAMPLES = process.argv.slice(2).length
  ? process.argv.slice(2).map((artist) => ({ artist }))
  : [
      { artist: 'Daft Punk',                    note: 'contains "ft" — the classic false-split' },
      { artist: 'Kraftwerk',                    note: 'contains "ft" mid-word' },
      { artist: 'Earth, Wind & Fire',           note: 'commas and & INSIDE the name' },
      { artist: 'Calvin Harris feat. Rihanna',  note: 'unknown primary, known guest' },
      { artist: 'Rihanna feat.Calvin Harris',   note: 'glued feat. with no space' },
      { artist: '(1998) Lisa Gerrard',          note: 'year-prefixed rip' },
      { artist: 'AC/DC',                        note: 'slash inside the name' },
      { artist: 'Miles Davis', genre: 'jazz',   note: 'genre tag + artist agree' },
      { artist: 'Some Local Band',              note: 'genuinely unknown → Unmatched' },
    ];

const stats = getDictionaryStats();
console.log(
  `\nalchemy — ${stats.artists} artists · ${stats.subCategories} sub-categories · ` +
  `${stats.pillars} pillars · ${stats.indexedNames} indexed names\n`,
);

const pad = (s, n) => String(s).padEnd(n);
console.log(pad('ARTIST', 32) + pad('PILLAR', 20) + pad('SUB-CATEGORY', 30) + 'VIA');
console.log('─'.repeat(100));

for (const s of SAMPLES) {
  const r = classifyTrack({ id: s.artist, title: '—', artist: s.artist, genre: s.genre });
  const unmatched = r.pillar === 'Unmatched';
  console.log(
    pad(s.artist, 32) +
    pad(unmatched ? '—' : r.pillar, 20) +
    pad(unmatched ? '—' : r.subCategory, 30) +
    r.classifiedBy +
    (s.note ? `   ← ${s.note}` : ''),
  );
}
console.log();
