/**
 * Sub-Category Metadata
 *
 * Mood, energy, decade, and description for every sub-category in the dictionary.
 * Kept separate so pillar files stay clean artist lists.
 *
 * mood        — emotional character of the music (array, can have multiple)
 * energy      — playback intensity: "low" | "medium" | "high"
 * decades     — eras the sub-category primarily covers
 * description — one-line definition shown in the agent's sub-genre picker
 */

export interface SubCategoryMeta {
  mood: string[];
  energy: 'low' | 'medium' | 'high';
  decades: string[];
  description: string;
}

export const SUB_CATEGORY_META: Record<string, SubCategoryMeta> = {

  // ── Studio Perfection ───────────────────────────────────────────────────────
  'Curated Override': {
    mood: ['audiophile', 'pristine', 'cerebral', 'timeless', 'reference-grade'],
    energy: 'medium',
    decades: ['1960s', '1970s', '1980s', '1990s', '2000s'],
    description: 'Hand-picked audiophile reference tracks across all genres.',
  },

  // ── Amazing Vocals ──────────────────────────────────────────────────────────
  'Jazz & Soul Powerhouses': {
    mood: ['passionate', 'virtuosic', 'soulful', 'powerful', 'theatrical'],
    energy: 'high',
    decades: ['1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s'],
    description: 'Vocalists with operatic range and gravitational emotional weight.',
  },
  'Intimate Singer-Songwriter': {
    mood: ['intimate', 'melancholic', 'honest', 'vulnerable', 'confessional'],
    energy: 'low',
    decades: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s'],
    description: 'Voice and acoustic guitar — confessional, vulnerable storytelling.',
  },
  'Atmospheric / Art Pop': {
    mood: ['atmospheric', 'ethereal', 'cinematic', 'avant-garde', 'dramatic'],
    energy: 'low',
    decades: ['1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Cinematic, theatrical vocalists pushing the edges of pop.',
  },
  'Spoken / Poetic Flow': {
    mood: ['cerebral', 'intense', 'poetic', 'literary', 'observational'],
    energy: 'medium',
    decades: ['1970s', '1980s', '1990s', '2000s', '2010s'],
    description: 'Sung-spoken delivery treating lyrics as literature.',
  },

  // ── Classical ───────────────────────────────────────────────────────────────
  'Symphonic / Orchestral': {
    mood: ['epic', 'dramatic', 'majestic', 'sweeping', 'monumental'],
    energy: 'high',
    decades: ['1700s', '1800s', '1900s'],
    description: 'Full-orchestra works from Baroque through late Romantic.',
  },
  'Solo Instrumental / Sonata': {
    mood: ['focused', 'meditative', 'precise', 'introspective', 'virtuosic'],
    energy: 'low',
    decades: ['1700s', '1800s', '1900s'],
    description: 'Piano, violin, and chamber works built around a soloist.',
  },
  'Contemporary / Minimalist': {
    mood: ['meditative', 'sparse', 'hypnotic', 'avant-garde', 'repetitive'],
    energy: 'low',
    decades: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s'],
    description: 'Repetitive structures and meditative process music.',
  },
  'Opera / Choral': {
    mood: ['dramatic', 'powerful', 'emotional', 'transcendent', 'operatic'],
    energy: 'high',
    decades: ['1700s', '1800s', '1900s'],
    description: 'Sung drama with orchestra and choir — voice as instrument.',
  },

  // ── Electronic ──────────────────────────────────────────────────────────────
  'Minimal / Microhouse': {
    mood: ['hypnotic', 'focused', 'cold', 'subtle', 'rhythmic'],
    energy: 'medium',
    decades: ['1990s', '2000s', '2010s'],
    description: 'Stripped-down house with hypnotic micro-detail and cold precision.',
  },
  'Progressive / Melodic House': {
    mood: ['euphoric', 'uplifting', 'emotional', 'driving', 'cinematic'],
    energy: 'high',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'Long, building house tracks with euphoric melodic peaks.',
  },
  'IDM / Leftfield / Electronica': {
    mood: ['cerebral', 'experimental', 'complex', 'glitchy', 'unpredictable'],
    energy: 'medium',
    decades: ['1990s', '2000s', '2010s'],
    description: 'Brainy, glitched-out home-listening electronics.',
  },
  'Deep & Tech House': {
    mood: ['groovy', 'sensual', 'late-night', 'warm', 'pulsing'],
    energy: 'medium',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'Warm, groove-led house for late-night dance floors.',
  },
  'Ambient / Downtempo': {
    mood: ['meditative', 'introspective', 'cinematic', 'drifting', 'lush'],
    energy: 'low',
    decades: ['1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Slow, textural electronics — atmosphere over rhythm.',
  },
  'Synthpop / Electronic Pop': {
    mood: ['nostalgic', 'melancholic', 'danceable', 'synthetic', 'romantic'],
    energy: 'medium',
    decades: ['1980s', '1990s', '2000s'],
    description: 'Pop songcraft built on synthesizers and drum machines.',
  },
  'Drum & Bass / Jungle': {
    mood: ['intense', 'kinetic', 'urgent', 'bass-heavy', 'frenetic'],
    energy: 'high',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'Frenetic breakbeats over rolling sub-bass.',
  },
  'Breakbeat / Big Beat': {
    mood: ['energetic', 'brash', 'fun', 'distorted', 'explosive'],
    energy: 'high',
    decades: ['1990s', '2000s'],
    description: 'Sample-heavy electronics with rock-band swagger.',
  },

  // ── Hip-Hop / Rap ───────────────────────────────────────────────────────────
  'Core / Golden Age': {
    mood: ['confident', 'raw', 'nostalgic', 'lyrical', 'boom-bap'],
    energy: 'high',
    decades: ['1980s', '1990s'],
    description: 'Foundational rap from the late-80s to mid-90s boom-bap era.',
  },
  'East Coast': {
    mood: ['gritty', 'lyrical', 'street', 'menacing', 'sample-heavy'],
    energy: 'high',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'New York lyricism, gritty samples, dense rhyme schemes.',
  },
  'Current / Trap': {
    mood: ['dark', 'aggressive', 'menacing', 'narcotic', 'heavy'],
    energy: 'high',
    decades: ['2010s', '2020s'],
    description: '808-driven modern rap with hi-hat triplets.',
  },
  'West Coast': {
    mood: ['laid-back', 'sunny', 'gangsta', 'funky', 'bouncy'],
    energy: 'medium',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'Funk-rooted California rap with laid-back grooves.',
  },
  'Conscious / Alternative': {
    mood: ['thoughtful', 'rebellious', 'introspective', 'literary', 'soulful'],
    energy: 'medium',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'Rap built on social commentary and lyrical introspection.',
  },

  // ── Jazz & Acoustics ────────────────────────────────────────────────────────
  'Bebop / Hard Bop': {
    mood: ['swinging', 'soulful', 'virtuosic', 'urgent', 'bluesy'],
    energy: 'high',
    decades: ['1940s', '1950s', '1960s', '1970s'],
    description: 'Foundational Blue Note and Prestige hard bop — bebop\'s muscular evolution.',
  },
  'Cool / Modal': {
    mood: ['introspective', 'spacious', 'lyrical', 'contemplative', 'sophisticated'],
    energy: 'low',
    decades: ['1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s'],
    description: 'Cool jazz and modal exploration — Kind of Blue, ECM, late-night atmosphere.',
  },
  'Free / Avant-Garde': {
    mood: ['intense', 'searching', 'spiritual', 'unbound', 'collective'],
    energy: 'high',
    decades: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Free jazz, AACM, ESP-Disk, spiritual fire — improvisation past every boundary.',
  },
  'Fusion / Jazz-Funk': {
    mood: ['groovy', 'electric', 'virtuosic', 'funky', 'cinematic'],
    energy: 'high',
    decades: ['1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Electric jazz-rock and jazz-funk — Headhunters, Weather Report, modern jazz-hop.',
  },
  'Vocal Jazz': {
    mood: ['intimate', 'romantic', 'sophisticated', 'expressive', 'timeless'],
    energy: 'medium',
    decades: ['1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Standards, ballads, and storytelling — voice as lead instrument.',
  },
  'Acoustic / Bossa Nova': {
    mood: ['warm', 'sensual', 'breezy', 'intimate', 'understated'],
    energy: 'low',
    decades: ['1950s', '1960s', '1970s', '1980s', '1990s', '2000s'],
    description: 'Brazilian-rooted acoustic warmth — voice and nylon guitar.',
  },

  // ── Latin ───────────────────────────────────────────────────────────────────
  'Latin Pop': {
    mood: ['romantic', 'upbeat', 'glossy', 'passionate', 'danceable'],
    energy: 'medium',
    decades: ['1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Glossy, romantic Spanish-language radio pop.',
  },
  'Salsa / Merengue': {
    mood: ['festive', 'passionate', 'danceable', 'rhythmic', 'fiery'],
    energy: 'high',
    decades: ['1960s', '1970s', '1980s', '1990s', '2000s'],
    description: 'Caribbean dance music — brass-driven and percussive.',
  },
  'Bachata / Bolero': {
    mood: ['romantic', 'melancholic', 'sensual', 'heartbroken', 'acoustic'],
    energy: 'low',
    decades: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s'],
    description: 'Romantic Spanish-language ballads built around guitar.',
  },
  'Flamenco / Español': {
    mood: ['passionate', 'dramatic', 'raw', 'virtuosic', 'intense'],
    energy: 'high',
    decades: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Spanish guitar virtuosity and palmas-driven rhythm.',
  },
  'Cumbia / Norteño / Regional': {
    mood: ['festive', 'nostalgic', 'earthy', 'rural', 'storytelling'],
    energy: 'medium',
    decades: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Mexican and Colombian folk-rooted dance traditions.',
  },
  'Pop en Español': {
    mood: ['romantic', 'upbeat', 'polished', 'melodic', 'accessible'],
    energy: 'medium',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'Spanish-language mainstream pop and crossover hits.',
  },
  'Rock en Español': {
    mood: ['passionate', 'energetic', 'rebellious', 'anthemic', 'poetic'],
    energy: 'high',
    decades: ['1980s', '1990s', '2000s', '2010s'],
    description: 'Latin American and Spanish rock from the 80s onward.',
  },

  // ── Metal / Hard Rock ───────────────────────────────────────────────────────
  'Heavy Metal / Hard Rock': {
    mood: ['aggressive', 'powerful', 'rebellious', 'driving', 'theatrical'],
    energy: 'high',
    decades: ['1970s', '1980s', '1990s', '2000s'],
    description: 'Loud, riff-driven rock with attitude and volume.',
  },
  'Classic Heavy Metal / NWOBHM': {
    mood: ['epic', 'dark', 'dramatic', 'mythic', 'galloping'],
    energy: 'high',
    decades: ['1970s', '1980s'],
    description: "British metal's foundational early-80s wave.",
  },
  'Doom / Stoner / Sludge': {
    mood: ['heavy', 'bleak', 'hypnotic', 'fuzz-drenched', 'monolithic'],
    energy: 'medium',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'Slow, fuzz-soaked, Sabbath-descended heaviness.',
  },
  'Death / Black / Extreme Metal': {
    mood: ['brutal', 'dark', 'intense', 'chaotic', 'nihilistic'],
    energy: 'high',
    decades: ['1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Brutal vocals, blast beats, the underground edge.',
  },
  'Progressive Metal': {
    mood: ['complex', 'cerebral', 'technical', 'sprawling', 'virtuosic'],
    energy: 'high',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'Technical, long-form metal with prog-rock complexity.',
  },

  // ── Pop ─────────────────────────────────────────────────────────────────────
  'Mainstream Pop': {
    mood: ['upbeat', 'feel-good', 'glossy', 'catchy', 'anthemic'],
    energy: 'high',
    decades: ['1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Top-40 radio pop — hooks engineered for mass appeal.',
  },
  'Pop R&B Crossover': {
    mood: ['sensual', 'smooth', 'romantic', 'sleek', 'groove-driven'],
    energy: 'medium',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'Pop with R&B groove and sensual production.',
  },
  'Indie Pop / Alt Pop': {
    mood: ['quirky', 'introspective', 'dreamy', 'bittersweet', 'lo-fi'],
    energy: 'medium',
    decades: ['2000s', '2010s', '2020s'],
    description: 'Quirky, off-center pop from the indie ecosystem.',
  },
  'K-Pop': {
    mood: ['maximalist', 'euphoric', 'polished', 'dynamic', 'theatrical'],
    energy: 'high',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'South Korean pop — maximalist production and choreography.',
  },

  // ── Reggae / Dub ────────────────────────────────────────────────────────────
  'Roots Reggae': {
    mood: ['spiritual', 'conscious', 'laid-back', 'militant', 'earthy'],
    energy: 'low',
    decades: ['1960s', '1970s', '1980s', '1990s'],
    description: 'Spiritual Jamaican reggae rooted in Rastafarian consciousness.',
  },
  'Dancehall': {
    mood: ['energetic', 'party', 'raw', 'aggressive', 'rhythmic'],
    energy: 'high',
    decades: ['1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Up-tempo Jamaican dance music — MC-driven and rhythmic.',
  },
  'Lovers Rock': {
    mood: ['romantic', 'smooth', 'warm', 'sweet', 'gentle'],
    energy: 'low',
    decades: ['1970s', '1980s', '1990s'],
    description: 'Sweet, romantic reggae for slow nights.',
  },
  'Studio Dub': {
    mood: ['hypnotic', 'spacious', 'psychedelic', 'heavy', 'echoing'],
    energy: 'low',
    decades: ['1970s', '1980s', '1990s', '2000s'],
    description: 'Reggae instrumentals reshaped through tape effects and echo.',
  },

  // ── Reggaeton / Urbano ──────────────────────────────────────────────────────
  'Reggaeton / Urbano': {
    mood: ['party', 'sensual', 'confident', 'heavy-bass', 'club-ready'],
    energy: 'high',
    decades: ['2000s', '2010s', '2020s'],
    description: 'Latin urban music built on the dembow rhythm.',
  },
  'Latin Trap / Urbano Moderno': {
    mood: ['dark', 'aggressive', 'street', 'narcotic', 'trap-influenced'],
    energy: 'high',
    decades: ['2010s', '2020s'],
    description: 'Spanish-language trap with reggaeton DNA.',
  },

  // ── R&B / Soul ──────────────────────────────────────────────────────────────
  'Modern R&B': {
    mood: ['introspective', 'sensual', 'melancholic', 'atmospheric', 'moody'],
    energy: 'low',
    decades: ['2010s', '2020s'],
    description: 'Atmospheric, moody contemporary soul.',
  },
  'Classic Soul / Motown': {
    mood: ['soulful', 'warm', 'timeless', 'joyful', 'heartbroken'],
    energy: 'medium',
    decades: ['1960s', '1970s', '1980s'],
    description: 'Foundational 60s-70s soul and Motown hits.',
  },
  'Neo Soul': {
    mood: ['soulful', 'organic', 'introspective', 'jazzy', 'laid-back'],
    energy: 'medium',
    decades: ['1990s', '2000s', '2010s'],
    description: 'Late-90s soul revival fused with hip-hop and jazz.',
  },
  'Contemporary R&B': {
    mood: ['smooth', 'sensual', 'polished', 'club-ready', 'slick'],
    energy: 'medium',
    decades: ['1990s', '2000s', '2010s', '2020s'],
    description: 'Slick, polished mainstream R&B for radio and clubs.',
  },

  // ── Rock ────────────────────────────────────────────────────────────────────
  'Alternative / Indie': {
    mood: ['introspective', 'raw', 'guitar-driven', 'angsty', 'melodic'],
    energy: 'medium',
    decades: ['1980s', '1990s', '2000s', '2010s', '2020s'],
    description: 'Guitar rock outside the mainstream — moody and melodic.',
  },
  'Classic Rock / Arena Rock': {
    mood: ['anthemic', 'powerful', 'nostalgic', 'driving', 'stadium-sized'],
    energy: 'high',
    decades: ['1960s', '1970s', '1980s'],
    description: 'Stadium-sized rock from the 60s and 70s.',
  },
  'Post-Punk / New Wave': {
    mood: ['angular', 'cold', 'danceable', 'gothic', 'synthetic'],
    energy: 'medium',
    decades: ['1970s', '1980s', '1990s'],
    description: 'Angular post-punk and early-80s synth-driven rock.',
  },
  'Progressive / Experimental': {
    mood: ['cerebral', 'complex', 'ambitious', 'theatrical', 'unpredictable'],
    energy: 'medium',
    decades: ['1970s', '1980s', '1990s', '2000s'],
    description: 'Long-form, ambitious rock with conceptual scope.',
  },
  'Shoegaze / Dream Pop': {
    mood: ['dreamy', 'ethereal', 'melancholic', 'fuzz-drenched', 'swirling'],
    energy: 'low',
    decades: ['1980s', '1990s', '2000s', '2010s'],
    description: 'Walls of fuzz guitar with ethereal, buried vocals.',
  },
  'Grunge': {
    mood: ['raw', 'angst', 'heavy', 'sludgy', 'cynical'],
    energy: 'high',
    decades: ['1980s', '1990s'],
    description: 'Pacific Northwest fusion of metal heaviness and punk attitude.',
  },
  'Punk / Post-Hardcore': {
    mood: ['aggressive', 'rebellious', 'urgent', 'fast', 'political'],
    energy: 'high',
    decades: ['1970s', '1980s', '1990s', '2000s'],
    description: 'Fast, raw, often political guitar music.',
  },
};

/**
 * Look up metadata for a sub-category.
 * Returns null if the sub-category isn't mapped (shouldn't happen in practice).
 */
export function getSubCategoryMeta(subCategory: string): SubCategoryMeta | null {
  return SUB_CATEGORY_META[subCategory] ?? null;
}

/**
 * Look up the description for a sub-category, or fall back to a default label.
 */
export function getSubCategoryDescription(subCategory: string): string {
  return SUB_CATEGORY_META[subCategory]?.description ?? 'ALCHEMY SUB-GENRE';
}
