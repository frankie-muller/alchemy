import { jazzAcoustics } from './pillars/jazzAcoustics.js';
import { classical } from './pillars/classical.js';
import { hipHopRap } from './pillars/hipHopRap.js';
import { reggaeDub } from './pillars/reggaeDub.js';
import { reggaeton } from './pillars/reggaeton.js';
import { latin } from './pillars/latin.js';
import { electronic } from './pillars/electronic.js';
import { rock } from './pillars/rock.js';
import { metalHardRock } from './pillars/metalHardRock.js';
import { amazingVocals } from './pillars/amazingVocals.js';
import { pop } from './pillars/pop.js';
import { rnbSoul } from './pillars/rnbSoul.js';
import type { Pillar } from './types.js';
import {
  normalizeArtistKey,
  tokenizeArtistCredit,
  FEAT_CLAUSE,
  YEAR_PREFIX,
} from './artistNormalize.js';

export const ALCHEMY_DICTIONARY: Pillar[] = [
  jazzAcoustics,
  classical,
  hipHopRap,
  reggaeDub,
  reggaeton,
  latin,
  electronic,
  rock,
  metalHardRock,
  amazingVocals,
  pop,
  rnbSoul,
];

type AlchemyHit = { pillar: string; subCategory: string };
type IndexEntry = AlchemyHit & { isPrimary: boolean };

/**
 * DISTINCT normalized keys claimed by more than one entry — counted the same
 * way `npm run verify` reports them, so the two numbers always agree (counting
 * every re-claim instead would over-report keys owned by three or more).
 * Declared BEFORE the index IIFE that assigns it — a `let` below the IIFE would
 * sit in the temporal dead zone and throw at module load.
 */
let COLLISION_COUNT = 0;

// ── The name index ───────────────────────────────────────────────────────────
// Built ONCE at module load from the ~25k curated names+aliases. Replaces the
// old per-track triple-nested scan (two of them per track — measured 5.6s per
// 10k tracks); a lookup is now a Map.get. Pure static data, cannot throw at
// bundle eval (boot-crash discipline).
//
// COLLISION POLICY (~780 duplicate normalized keys exist across pillars):
// deterministic instead of iteration-order luck — a PRIMARY name beats an
// alias; otherwise the FIRST entry in dictionary order keeps the key (stable
// across runs). `getDictionaryStats()` reports the count; the roll-call
// harness (`npm run verify`) names every contested key.
const NAME_INDEX: Map<string, IndexEntry> = (() => {
  const index = new Map<string, IndexEntry>();
  const contested = new Set<string>();
  for (const pillar of ALCHEMY_DICTIONARY) {
    for (const [subCategory, artistsObj] of Object.entries(pillar.subCategories)) {
      for (const [primaryName, data] of Object.entries(artistsObj)) {
        const names: Array<[string, boolean]> = [
          [primaryName, true],
          ...(data.aliases || []).map((a): [string, boolean] => [a, false]),
        ];
        for (const [name, isPrimary] of names) {
          const key = normalizeArtistKey(name);
          if (!key) { continue; }
          const existing = index.get(key);
          if (!existing) {
            index.set(key, { pillar: pillar.name, subCategory, isPrimary });
            continue;
          }
          contested.add(key);
          if (isPrimary && !existing.isPrimary) {
            index.set(key, { pillar: pillar.name, subCategory, isPrimary });
          }
          // else: first-in-dictionary-order keeps the key.
        }
      }
    }
  }
  COLLISION_COUNT = contested.size;
  return index;
})();

/**
 * Index statistics. `collisions` counts normalized names claimed by more than
 * one entry — resolved deterministically by the policy above, and enumerated
 * by `npm run verify`. A non-zero count is a curation backlog, not an error.
 */
export function getDictionaryStats(): {
  pillars: number;
  subCategories: number;
  artists: number;
  indexedNames: number;
  collisions: number;
} {
  let subCategories = 0;
  let artists = 0;
  for (const pillar of ALCHEMY_DICTIONARY) {
    const subs = Object.values(pillar.subCategories);
    subCategories += subs.length;
    for (const sub of subs) { artists += Object.keys(sub).length; }
  }
  return {
    pillars: ALCHEMY_DICTIONARY.length,
    subCategories,
    artists,
    indexedNames: NAME_INDEX.size,
    collisions: COLLISION_COUNT,
  };
}

/**
 * Given a raw artist string, returns the matching { pillar, subCategory }
 * or null. Two-tier strategy:
 *
 *   1. WHOLE-STRING match first — the common case for clean tags, and the
 *      only correct path for names the tokenizer would carve up
 *      ("Earth, Wind & Fire", "Chase & Status", "AC/DC", "&ME").
 *   1b. Whole string with the FEATURING clause dropped:
 *      "Daft Punk feat. Todd Edwards" → "daft punk".
 *   2. Tokenized fallback for genuine multi-artist credits, tried in CREDIT
 *      ORDER (primary artist first — deterministic, unlike the old
 *      dictionary-order scan).
 */
export function lookupArtist(
  artist: string
): { pillar: string; subCategory: string } | null {
  if (!artist) { return null; }

  const cleaned = normalizeArtistKey(artist.replace(YEAR_PREFIX, ''));
  if (!cleaned) { return null; }

  // 1. Whole string.
  const whole = NAME_INDEX.get(cleaned);
  if (whole) { return { pillar: whole.pillar, subCategory: whole.subCategory }; }

  // 1b. Whole string minus the featuring clause.
  const head = cleaned.replace(FEAT_CLAUSE, '').trim();
  if (head !== cleaned) {
    const headHit = NAME_INDEX.get(head);
    if (headHit) { return { pillar: headHit.pillar, subCategory: headHit.subCategory }; }
  }

  // 2. Tokenized credit, primary artist first. Tokenize the FULL cleaned
  // string (not the feat-stripped head): the joiner splits at the featuring
  // marker anyway, so a dictionary-known GUEST can still rescue an unknown
  // primary ("Calvin Harris feat. Rihanna" → Rihanna's pillar) — credit order
  // guarantees the primary still wins whenever it IS known.
  for (const token of tokenizeArtistCredit(cleaned)) {
    const hit = NAME_INDEX.get(token);
    if (hit) { return { pillar: hit.pillar, subCategory: hit.subCategory }; }
  }

  return null;
}
