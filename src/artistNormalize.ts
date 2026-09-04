// ─────────────────────────────────────────────────────────────────────────────
// Shared artist-name normalization for the classification engines
// (alchemyDictionary.lookupArtist + studioPerfection.isStudioPerfectionArtist).
//
// History, so nobody regresses this: the old normalizer ran
// `.replace(/feat\.?|ft\.?/g, '&')` — an UNBOUNDED pattern that mangled every
// name containing the letters "ft" ("Daft Punk" → "da& punk", "Kraftwerk" →
// "kra&werk", "Taylor Swift" → "taylor swi&") before lookup, so those artists
// could NEVER match their own curated entries. It then split on bare [,;&/],
// while dictionary names were never tokenized the same way — so
// "Earth, Wind & Fire" tokenized to "earth" and matched the METAL band Earth.
// The roll-call harness (scripts/verify-classifier.mjs) counted 45 self-match
// failures and 4 cross-pillar leaks from these two lines. Delimiters here are
// SPACE-FLANKED (the LibraryScanner ARTIST_JOINER discipline), and lookups try
// the WHOLE normalized string before any tokenization.
// ─────────────────────────────────────────────────────────────────────────────

/// Canonical key form: NFC (pillar files are NFC; NFD tags would silently
/// miss), lowercased, trimmed. Used for BOTH index keys and lookup inputs —
/// the two sides must always agree.
export const normalizeArtistKey = (s: string): string =>
  s.normalize('NFC').toLowerCase().trim();

/// Leading "(YYYY) " junk some rips carry: "(1998) Lisa Gerrard".
export const YEAR_PREFIX = /^\(\d{4}\)\s*/;

/// A FEATURING clause: everything from a delimited feat/ft/featuring marker to
/// the end is a guest credit. Delimited = preceded by whitespace (optionally
/// with an opening bracket), so letters inside names never match: Daft Punk,
/// Kraftwerk, Taylor Swift, Deftones, Soft Cell survive intact.
/// A literal dot needs no trailing space — "Rihanna feat.Calvin Harris" is a
/// glued-tag shape real rips carry, and the dot alone already disambiguates
/// from name fragments (the leading \s+ keeps "Daft"/"Soft"/"Deftones" safe).
export const FEAT_CLAUSE = /\s+[([]?\s*(?:feat|ft|featuring)(?:\.\s*|\s+).*$/i;

/// Multi-artist credit joiners — the LibraryScanner discipline: bare
/// punctuation [,;&+] joins regardless of spacing, but WORD joiners
/// (and/x/vs) and dash/slash join ONLY when space-flanked, so "Jay-Z",
/// "Blink-182", "AC/DC", "De/Vision" are never cut. feat/ft/featuring follow
/// the FEAT_CLAUSE rule: dot-glued counts too ("A feat.B" splits), since the
/// dot disambiguates and the leading \s+ still protects in-name letters.
export const ARTIST_TOKEN_JOINER =
  /\s*[,;&+]\s*|\s+(?:and|x|vs\.?)\s+|\s+(?:feat|ft|featuring)(?:\.\s*|\s+)|\s+[-–—/]\s+/i;

/// Tokenize a normalized credit string into candidate artist names, in credit
/// order (primary artist first). Pure-numeric tokens (track numbers, years)
/// are dropped.
export const tokenizeArtistCredit = (normalized: string): string[] =>
  normalized
    .split(ARTIST_TOKEN_JOINER)
    .map(t => t.trim())
    .filter(t => t.length > 0 && !/^\d+$/.test(t));
