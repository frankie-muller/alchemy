// Harness entry — bundles the REAL modules (the exact files this package
// exports) for the roll-call script. Not part of the published surface.
export { lookupArtist, ALCHEMY_DICTIONARY } from '../src/alchemyDictionary.js';
export { isStudioPerfectionArtist, studioPerfection } from '../src/pillars/studioPerfection.js';
export { classifyTrack } from '../src/pipeline.js';
