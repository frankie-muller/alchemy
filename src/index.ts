/**
 * Alchemy — music genre alchemy.
 *
 * A genre taxonomy, an artist classifier built for the tags real files actually
 * carry, and an offline discovery engine. No network, no accounts, no
 * telemetry, zero runtime dependencies at classification time.
 *
 * The dataset was built LLM-assisted under human review; `scripts/grow.mjs` is
 * the tool that did it. See README › How this was built.
 *
 * Extracted from OCTOPUS — https://www.singularcontinuum.com/octopus
 */

// ── Classification ───────────────────────────────────────────────────────────
export { classifyTrack, classifyLibrary, classifyLibraryFlat } from './pipeline.js';
export { lookupArtist, getDictionaryStats, ALCHEMY_DICTIONARY } from './alchemyDictionary.js';
export { resolveAlias, ALIAS_MAP } from './aliasMap.js';
export { isStudioPerfectionArtist } from './pillars/studioPerfection.js';

// ── Normalization (exported so you can reuse the tag-cleaning rules) ─────────
export {
  normalizeArtistKey,
  tokenizeArtistCredit,
  FEAT_CLAUSE,
  YEAR_PREFIX,
  ARTIST_TOKEN_JOINER,
} from './artistNormalize.js';

// ── Discovery ────────────────────────────────────────────────────────────────
export { DiscoveryEngine, discover } from './discover.js';
export type { Recommendation, DiscoverOptions, DiscoverResult } from './discover.js';

// ── Taxonomy metadata ────────────────────────────────────────────────────────
export {
  CONNECTORS,
  getConnectorsByPillar,
  getConnector,
} from './connectors.js';
export {
  SUB_CATEGORY_META,
  getSubCategoryMeta,
  getSubCategoryDescription,
} from './subCategoryMeta.js';

// ── Types ────────────────────────────────────────────────────────────────────
export type {
  ArtistData,
  SubCategory,
  Pillar,
  SubCategoryMeta,
  Connector,
  RawTrack,
  ClassifiedTrack,
  ClassifiedLibrary,
} from './types.js';
