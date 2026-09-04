export interface ArtistData {
  bio: string;
  aliases: string[];
}

// A single sub-category maps an Artist Name -> ArtistData
export type SubCategory = Record<string, ArtistData>;

export interface Pillar {
  name: string;
  // The pillar holds a dictionary of SubCategories
  subCategories: Record<string, SubCategory>;
}

// ── Sub-category metadata ────────────────────────────────────────────────────

export interface SubCategoryMeta {
  mood: string[];
  energy: 'low' | 'medium' | 'high';
  decades: string[];
  description: string;
}

// ── Cross-pillar connectors ──────────────────────────────────────────────────

export interface Connector {
  artist: string;
  pillars: string[];
  description: string;
}

// ── Track shapes ────────────────────────────────────────────────────────────

/** What NativeModules / TagLib hands you */
export interface RawTrack {
  id: string;
  title: string;
  artist: string;
  album?: string;
  genre?: string; // raw ID3 tag — may be messy
}

/** What the waterfall produces */
export interface ClassifiedTrack extends RawTrack {
  pillar: string;
  subCategory: string;
  /** Which step of the waterfall made the call */
  classifiedBy: 'alchemy' | 'alias' | 'alias+alchemy' | 'unmatched';
  /** True when the artist is in the Studio Perfection curated list */
  isStudioPerfection?: boolean;
}

// ── Library shape ───────────────────────────────────────────────────────────

/** Final grouped output: Pillar → SubCategory → tracks */
export type ClassifiedLibrary = Record<string, Record<string, ClassifiedTrack[]>>;
