import { ALCHEMY_DICTIONARY } from './alchemyDictionary.js';
import { getConnectorsByPillar } from './connectors.js';
import { SUB_CATEGORY_META } from './subCategoryMeta.js';

/**
 * The discovery engine — "the Artist Discovery Robot".
 *
 * Recommends artists by NEIGHBOURHOOD rather than by scraping an API: given a
 * seed (the pillar + sub-category of whatever is playing), it walks outward
 * through the curated taxonomy in four widening tiers. No network, no model,
 * no telemetry — just the dictionary and a memory of what it already showed you.
 *
 * Framework-agnostic by design: this is a plain class. Wire it to React,
 * Svelte, a CLI, or a server route yourself; see `examples/`.
 */

export interface Recommendation {
  /** Stable within a batch — useful as a list key. */
  id: string;
  name: string;
  pillar: string;
  subCategory: string;
  /** The curated bio, or the connector's bridge description. */
  description: string;
  mood: string[];
  energy: 'low' | 'medium' | 'high' | 'unknown';
  /** True when this artist bridges pillars rather than sitting inside one. */
  isConnector: boolean;
}

export interface DiscoverOptions {
  /** How many recommendations to return. Default 7. */
  slots?: number;
  /** Deterministic shuffling for tests/reproducibility. Default Math.random. */
  random?: () => number;
}

export interface DiscoverResult {
  recommendations: Recommendation[];
  /**
   * True when the seed's entire neighbourhood had already been shown and the
   * engine wiped its memory to keep going (the "ouroboros" reset). Surface it
   * if you want to tell the user they've seen everything here.
   */
  exhausted: boolean;
}

function shuffle<T>(array: T[], random: () => number): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export class DiscoveryEngine {
  /** Normalized names already recommended, so repeat calls keep moving. */
  private seen = new Set<string>();
  private readonly slots: number;
  private readonly random: () => number;

  constructor(options: DiscoverOptions = {}) {
    this.slots = options.slots ?? 7;
    this.random = options.random ?? Math.random;
  }

  /** Forget everything shown so far — the pool becomes fully available again. */
  reset(): void {
    this.seen.clear();
  }

  /** Names shown since the last reset. */
  get seenCount(): number {
    return this.seen.size;
  }

  /**
   * Recommend from a seed. Walks four widening tiers, stopping as soon as the
   * slots are full:
   *
   *   1. The local neighbourhood — other artists in the same sub-category.
   *   2. The bridges — connectors that link this pillar to another.
   *   3. The metropolitan area — the rest of the parent pillar.
   *   4. Ouroboros — everything here has been seen; wipe memory and re-walk once.
   *
   * Returns an empty list for an unknown pillar rather than throwing.
   */
  discover(seedPillar: string, seedSubCategory: string): DiscoverResult {
    return this.run(seedPillar, seedSubCategory, 0);
  }

  private run(seedPillar: string, seedSubCategory: string, depth: number): DiscoverResult {
    const pillarData = ALCHEMY_DICTIONARY.find((p) => p.name === seedPillar);
    if (!pillarData) { return { recommendations: [], exhausted: false }; }

    const out: Recommendation[] = [];
    // Batch-local so a single call never repeats itself even before `seen` updates.
    const localSeen = new Set<string>(this.seen);

    const add = (
      name: string,
      subCategory: string,
      pillar: string,
      isConnector: boolean,
      description?: string,
    ): void => {
      if (out.length >= this.slots) { return; }
      const key = name.toLowerCase();
      if (localSeen.has(key)) { return; }
      localSeen.add(key);

      // A connector belongs to no single sub-category, so it inherits the seed's
      // mood/energy rather than rendering as UNKNOWN.
      const meta = SUB_CATEGORY_META[isConnector ? seedSubCategory : subCategory];
      const mood = meta?.mood ? shuffle(meta.mood, this.random).slice(0, 2) : ['DYNAMIC', 'FUSION'];

      out.push({
        id: `alchemy_${Date.now()}_${key}`,
        name,
        pillar,
        subCategory,
        description: description || `A defining voice in ${subCategory}.`,
        mood,
        energy: meta?.energy || 'medium',
        isConnector,
      });
    };

    // ── Tier 1: the local neighbourhood ──────────────────────────────────────
    const localSub = pillarData.subCategories[seedSubCategory];
    if (localSub) {
      for (const name of shuffle(Object.keys(localSub), this.random)) {
        add(name, seedSubCategory, seedPillar, false, localSub[name].bio);
        if (out.length === this.slots) { break; }
      }
    }

    // ── Tier 2: the bridges ──────────────────────────────────────────────────
    if (out.length < this.slots) {
      for (const conn of shuffle(getConnectorsByPillar(seedPillar), this.random)) {
        add(conn.artist, 'Cross-Genre', seedPillar, true, conn.description);
        if (out.length === this.slots) { break; }
      }
    }

    // ── Tier 3: the metropolitan area ────────────────────────────────────────
    if (out.length < this.slots) {
      const metro: { name: string; subCategory: string; bio: string }[] = [];
      for (const [subCategory, artists] of Object.entries(pillarData.subCategories)) {
        if (subCategory === seedSubCategory) { continue; }
        for (const [name, data] of Object.entries(artists)) {
          metro.push({ name, subCategory, bio: data.bio });
        }
      }
      for (const a of shuffle(metro, this.random)) {
        add(a.name, a.subCategory, seedPillar, false, a.bio);
        if (out.length === this.slots) { break; }
      }
    }

    // ── Tier 4: ouroboros ────────────────────────────────────────────────────
    // Everything reachable from this seed has been shown. Wipe memory and walk
    // once more. Guarded on depth (never recurse twice) and on the pool being
    // mathematically large enough to fill the slots — otherwise a small pillar
    // would spin forever chasing a target it can't reach.
    if (out.length < this.slots && depth === 0) {
      let poolSize = getConnectorsByPillar(seedPillar).length;
      for (const artists of Object.values(pillarData.subCategories)) {
        poolSize += Object.keys(artists).length;
      }
      if (poolSize >= this.slots) {
        this.seen.clear();
        const retry = this.run(seedPillar, seedSubCategory, depth + 1);
        return { recommendations: retry.recommendations, exhausted: true };
      }
    }

    this.seen = localSeen;
    return { recommendations: out, exhausted: false };
  }
}

/**
 * One-shot convenience wrapper — a fresh engine per call, so it has no memory
 * of previous results. Use `new DiscoveryEngine()` when you want the walk to
 * keep moving across repeated calls.
 */
export function discover(
  seedPillar: string,
  seedSubCategory: string,
  options: DiscoverOptions = {},
): Recommendation[] {
  return new DiscoveryEngine(options).discover(seedPillar, seedSubCategory).recommendations;
}
