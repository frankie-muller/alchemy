import { ALCHEMY_DICTIONARY, lookupArtist } from './alchemyDictionary.js';
import { resolveAlias } from './aliasMap.js';
import { isStudioPerfectionArtist } from './pillars/studioPerfection.js';
import type { RawTrack, ClassifiedTrack, ClassifiedLibrary } from './types.js';

const UNMATCHED_PILLAR = 'Unmatched';
const UNMATCHED_SUB = 'Unmatched';

/**
 * Sub-category → owning pillar, indexed once at module load (was a linear
 * scan per classified track). First pillar in dictionary order wins a
 * duplicated sub-category name, matching the old scan's behavior exactly.
 */
const SUBCAT_TO_PILLAR: Map<string, string> = (() => {
  const map = new Map<string, string>();
  for (const pillar of ALCHEMY_DICTIONARY) {
    for (const sub of Object.keys(pillar.subCategories)) {
      if (!map.has(sub)) { map.set(sub, pillar.name); }
    }
  }
  return map;
})();

function findPillarBySubCategory(subCategory: string): string | null {
  return SUBCAT_TO_PILLAR.get(subCategory) ?? null;
}

// ── The Waterfall ────────────────────────────────────────────────────────────

/**
 * Runs one track through the three-step waterfall:
 *
 * 1. Alias Washer        — normalise the TagLib genre tag to a canonical sub-cat (highest priority)
 *    + Alchemy enrichment — if the artist also has an alchemy hit, its sub-category overwrites alias's
 * 2. Alchemy Dictionary  — artist lookup fallback when genre tag is absent or unrecognised
 * 3. Unmatched           — neither worked; quarantine for manual curation
 */
export function classifyTrack(raw: RawTrack): ClassifiedTrack {
  const alchemyHit = lookupArtist(raw.artist);
  const isStudioPerfection = isStudioPerfectionArtist(raw.artist);

  // ── Step 1: TagLib + Alias Washer (genre tag normalisation) ─────────────
  if (raw.genre) {
    const canonicalSub = resolveAlias(raw.genre);
    if (canonicalSub) {
      const pillar = findPillarBySubCategory(canonicalSub);
      if (pillar) {
        // Known artist wins outright: its curated pillar+sub is a matched pair,
        // so trust it over the genre tag (taking pillar from genre but sub from
        // the artist produced incoherent cross-pillar pairings when they disagreed).
        if (alchemyHit) {
          return {
            ...raw,
            pillar: alchemyHit.pillar,
            subCategory: alchemyHit.subCategory,
            classifiedBy: 'alias+alchemy',
            isStudioPerfection,
          };
        }
        return {
          ...raw,
          pillar,
          subCategory: canonicalSub,
          classifiedBy: 'alias',
          isStudioPerfection,
        };
      }
    }
  }

  // ── Step 2: Alchemy Dictionary (artist lookup fallback) ──────────────────
  if (alchemyHit) {
    return {
      ...raw,
      pillar: alchemyHit.pillar,
      subCategory: alchemyHit.subCategory,
      classifiedBy: 'alchemy',
      isStudioPerfection,
    };
  }

  // ── Step 3: Unmatched ────────────────────────────────────────────────────
  return {
    ...raw,
    pillar: UNMATCHED_PILLAR,
    subCategory: UNMATCHED_SUB,
    classifiedBy: 'unmatched',
    isStudioPerfection,
  };
}

/**
 * Runs an entire library through the waterfall and returns the tracks
 * grouped by Pillar → SubCategory, ready for <LibraryDashboard />.
 */
export function classifyLibrary(tracks: RawTrack[]): ClassifiedLibrary {
  const library: ClassifiedLibrary = {};

  for (const raw of tracks) {
    const classified = classifyTrack(raw);
    const { pillar, subCategory } = classified;

    if (!library[pillar]) {library[pillar] = {};}
    if (!library[pillar][subCategory]) {library[pillar][subCategory] = [];}

    library[pillar][subCategory].push(classified);
  }

  return library;
}

/** Flat list variant — useful for debugging or passing to a FlatList */
export function classifyLibraryFlat(tracks: RawTrack[]): ClassifiedTrack[] {
  return tracks.map(classifyTrack);
}
