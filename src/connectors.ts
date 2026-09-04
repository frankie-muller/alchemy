/**
 * Cross-Pillar Connectors
 *
 * Artists who authentically bridge two or more pillars.
 * These are not classification errors — they are genuinely genre-fluid artists
 * whose work spans multiple worlds.
 *
 * Use this to power "genre fusion" discovery, related pillar suggestions,
 * or a special "Bridge" badge in the UI.
 */

export interface Connector {
  artist: string;
  pillars: string[];
  description: string;
}

export const CONNECTORS: Connector[] = [

  // ── Electronic ↔ Rock ───────────────────────────────────────────────────────
  {
    artist: 'Radiohead',
    pillars: ['Studio Perfection', 'Rock', 'Electronic'],
    description: 'Evolved from alt-rock icons into electronic experimentalists — \'Kid A\' is as much Warp Records as it is rock, blurring the line between organic instrumentation and digital synthesis.',
  },
  {
    artist: 'Nine Inch Nails',
    pillars: ['Metal / Hard Rock', 'Electronic', 'Studio Perfection'],
    description: 'Industrial metal at its core, but Trent Reznor\'s obsessive use of analog synthesizers and immaculate sequencing makes his work equally at home in both worlds.',
  },
  {
    artist: 'Depeche Mode',
    pillars: ['Studio Perfection', 'Electronic', 'Rock'],
    description: 'Synthpop pioneers whose dark, cinematic songwriting grew into stadium rock territory while never abandoning their foundational electronic DNA.',
  },
  {
    artist: 'New Order',
    pillars: ['Electronic', 'Rock'],
    description: 'The ultimate bridge between two eras — the gothic post-punk of Joy Division dissolved directly into sequencer-driven, house-influenced electronic pop.',
  },
  {
    artist: 'The Prodigy',
    pillars: ['Electronic', 'Rock', 'Metal / Hard Rock'],
    description: 'Rave-era breakbeat that absorbed punk aggression and metal energy — Liam Howlett\'s furious productions live in all three worlds simultaneously.',
  },
  {
    artist: 'LCD Soundsystem',
    pillars: ['Rock', 'Electronic'],
    description: 'James Murphy\'s dance-punk project fused the raw energy of CBGB-era post-punk with the relentless, synthesized pulse of Detroit techno and Chicago house.',
  },
  {
    artist: 'Deftones',
    pillars: ['Metal / Hard Rock', 'Rock'],
    description: 'Brought the ethereal, textural wash of shoegaze and dream pop to the crushing, down-tuned aggression of alternative metal.',
  },
  {
    artist: 'Tool',
    pillars: ['Metal / Hard Rock', 'Rock', 'Studio Perfection'],
    description: 'Math-metal titans whose obsessive rhythmic complexity and audiophile-grade studio engineering bridge crushing alternative metal with expansive progressive rock.',
  },

  // ── Hip-Hop ↔ Other ─────────────────────────────────────────────────────────
  {
    artist: 'Kendrick Lamar',
    pillars: ['Hip-Hop / Rap', 'R&B / Soul', 'Jazz & Acoustics'],
    description: 'A West Coast lyricist whose masterworks fuse free jazz, neo-soul, and P-Funk into hip-hop with the emotional depth and live-instrumentation of classic R&B.',
  },
  {
    artist: 'Kanye West',
    pillars: ['Hip-Hop / Rap', 'Electronic', 'R&B / Soul'],
    description: 'A soul-sampling visionary who has moved fluidly through gospel, electronic minimalism, and orchestral rap, forever altering the sonic boundaries of hip-hop.',
  },
  {
    artist: 'Lauryn Hill',
    pillars: ['Hip-Hop / Rap', 'R&B / Soul', 'Reggae / Dub'],
    description: 'Her lone solo studio album is simultaneously the greatest neo-soul record, a reggae-infused masterpiece, and one of hip-hop\'s finest lyrical achievements.',
  },
  {
    artist: 'Childish Gambino',
    pillars: ['Hip-Hop / Rap', 'R&B / Soul', 'Pop'],
    description: 'Moves from underground rap mixtapes to sprawling P-Funk/neo-soul odysseys to glitchy funk-pop with genuine, auteur-level mastery of each lane.',
  },
  {
    artist: 'Tyler, the Creator',
    pillars: ['Hip-Hop / Rap', 'R&B / Soul', 'Pop'],
    description: 'Evolved from a shock-rap provocateur into a lush, jazz-inflected orchestral pop and neo-soul composer across a remarkably inventive catalog.',
  },
  {
    artist: 'The Roots',
    pillars: ['Hip-Hop / Rap', 'Jazz & Acoustics', 'R&B / Soul'],
    description: 'The legendary Philadelphia crew who proved live jazz-funk instrumentation could match the grit of sampled boom-bap, anchoring the entire neo-soul movement.',
  },
  {
    artist: 'Fugees',
    pillars: ['Hip-Hop / Rap', 'R&B / Soul', 'Reggae / Dub'],
    description: 'Fused razor-sharp New York boom-bap lyricism with deep Caribbean soul and reggae rhythms in a way that transcended all genre boundaries.',
  },
  {
    artist: 'Mac Miller',
    pillars: ['Hip-Hop / Rap', 'R&B / Soul', 'Jazz & Acoustics'],
    description: 'Evolved into a deeply introspective musician, weaving live jazz instrumentation, neo-soul, and funk into his late-career masterworks.',
  },
  {
    artist: 'A Tribe Called Quest',
    pillars: ['Hip-Hop / Rap', 'Jazz & Acoustics'],
    description: 'The Queens trailblazers who proved that crate-digging for obscure hard bop and cool jazz loops could create the most sophisticated, enduring boom-bap in hip-hop history.',
  },

  // ── R&B / Soul ↔ Other ──────────────────────────────────────────────────────
  {
    artist: 'Frank Ocean',
    pillars: ['R&B / Soul', 'Pop', 'Electronic'],
    description: 'Redefined contemporary R&B by infusing it with indie pop song structures, ambient electronic textures, and devastating confessional lyricism.',
  },
  {
    artist: 'Erykah Badu',
    pillars: ['R&B / Soul', 'Hip-Hop / Rap', 'Jazz & Acoustics'],
    description: 'The neo-soul empress whose Afrocentric sound seamlessly fuses jazz improvisation, hip-hop cadence, and classic soul warmth.',
  },
  {
    artist: 'FKA twigs',
    pillars: ['R&B / Soul', 'Electronic', 'Pop'],
    description: 'Pushed alternative R&B into the avant-garde, fusing operatic vocals and choreographic pop with jarring, industrial-leaning electronic production.',
  },
  {
    artist: 'Thundercat',
    pillars: ['Jazz & Acoustics', 'R&B / Soul', 'Electronic'],
    description: 'A bass virtuoso who anchors the modern LA jazz scene while writing yacht-rock and funk-infused R&B anthems beloved by the electronic underground.',
  },
  {
    artist: 'The Weeknd',
    pillars: ['R&B / Soul', 'Electronic', 'Pop'],
    description: 'Transformed the narcotic, pitch-black aesthetic of underground alternative R&B into a glistening, synth-drenched global pop empire.',
  },

  // ── Rock ↔ Other ────────────────────────────────────────────────────────────
  {
    artist: 'Prince',
    pillars: ['R&B / Soul', 'Pop', 'Rock', 'Amazing Vocals'],
    description: 'Transcended every genre he touched — funk, rock, pop, soul — acting as a one-man studio virtuoso whose Minneapolis sound reshaped the musical landscape.',
  },
  {
    artist: 'David Bowie',
    pillars: ['Studio Perfection', 'Rock', 'Electronic', 'Amazing Vocals'],
    description: 'Reinvented himself from glam rock to Berlin-era electronic to soul pop — the ultimate cross-genre shapeshifter and studio obsessive.',
  },
  {
    artist: 'Steely Dan',
    pillars: ['Rock', 'Jazz & Acoustics', 'Studio Perfection'],
    description: 'The ultimate jazz-rock fusionists; their obsessive studio perfectionism and complex, bop-derived chord voicings make them the bridge between AOR rock and jazz.',
  },
  {
    artist: 'Grace Jones',
    pillars: ['Studio Perfection', 'Electronic', 'R&B / Soul', 'Reggae / Dub'],
    description: 'Fused reggae rhythms, new wave, disco, and performance art into an alien, dub-inflected aesthetic that influenced decades of pop.',
  },
  {
    artist: 'Beck',
    pillars: ['Rock', 'Hip-Hop / Rap', 'Electronic'],
    description: 'A sonic chameleon whose catalog bridges Loser-era lo-fi hip-hop collage, melancholic acoustic songwriting, and vibrant electronic production.',
  },
  {
    artist: 'PJ Harvey',
    pillars: ['Rock', 'Amazing Vocals'],
    description: 'A raw, blues-drenched rock guitarist and songwriter whose staggering vocal intensity places her equally in alt-rock and vocal artistry.',
  },
  {
    artist: 'Nick Cave',
    pillars: ['Rock', 'Amazing Vocals', 'Classical'],
    description: 'A post-punk gothic storyteller who has evolved toward sweeping orchestral chamber pop, minimal piano ballads, and spoken word narrative.',
  },
  {
    artist: 'Tom Waits',
    pillars: ['Rock', 'Jazz & Acoustics', 'Amazing Vocals'],
    description: 'Beat poet, jazz barroom balladeer, and avant-rock experimentalist — three careers housed in one unmistakable gravel-throated voice.',
  },
  {
    artist: 'Sade',
    pillars: ['Studio Perfection', 'R&B / Soul', 'Jazz & Acoustics'],
    description: 'Quiet storm soul with jazz restraint, pop accessibility, and audiophile-grade studio polish — impossible to classify and instantly recognizable.',
  },
  {
    artist: 'The Clash',
    pillars: ['Rock', 'Reggae / Dub'],
    description: 'Punk architects who absorbed reggae and dub deeply enough to release \'Sandinista!\' — a genuine, sprawling cross-genre statement.',
  },
  {
    artist: 'Gorillaz',
    pillars: ['Rock', 'Electronic', 'Hip-Hop / Rap', 'Pop'],
    description: 'Damon Albarn\'s virtual band seamlessly collides Britpop, underground hip-hop, dub, and electronic pop into a cohesive, cartoon-fronted universe.',
  },
  {
    artist: 'Bad Brains',
    pillars: ['Reggae / Dub', 'Rock', 'Metal / Hard Rock'],
    description: 'The untouchable hardcore punk pioneers who possessed the musicianship to pivot flawlessly mid-set from breakneck thrash to deep, authentic roots dub.',
  },

  // ── Latin ↔ Other ───────────────────────────────────────────────────────────
  {
    artist: 'Shakira',
    pillars: ['Latin', 'Pop', 'Reggaeton / Urbano'],
    description: 'A Colombian rock singer-songwriter who became a global pop sensation and later fully embraced reggaeton — fluent in three musical languages.',
  },
  {
    artist: 'Bad Bunny',
    pillars: ['Reggaeton / Urbano', 'Latin', 'Pop'],
    description: 'Transformed reggaeton\'s sonic palette by pulling in indie, synth-pop, rock, and bolero influences without losing street credibility, becoming a global pop monolith.',
  },
  {
    artist: 'Rosalía',
    pillars: ['Latin', 'Electronic', 'Pop', 'Amazing Vocals'],
    description: 'A classically trained flamenco vocalist who fuses traditional Spanish forms with 808s, electronic production, and massive global pop ambition.',
  },
  {
    artist: 'Calle 13',
    pillars: ['Reggaeton / Urbano', 'Latin', 'Hip-Hop / Rap'],
    description: 'Politically charged Puerto Rican duo who vastly expanded reggaeton\'s vocabulary by integrating salsa, traditional folk, and conscious rap.',
  },
  {
    artist: 'Santana',
    pillars: ['Latin', 'Rock', 'Jazz & Acoustics'],
    description: 'Fused blues-rock guitar with Afro-Cuban percussion, creating a fiery, improvisational Latin rock hybrid that bridged Woodstock and the salsa explosion.',
  },
  {
    artist: 'C. Tangana',
    pillars: ['Latin', 'Pop', 'Hip-Hop / Rap'],
    description: 'Synthesized traditional flamenco, Cuban son, and Spanish folk with modern urban and trap production, redefining the boundaries of Latin crossover.',
  },
  {
    artist: 'Tito Puente',
    pillars: ['Latin', 'Jazz & Acoustics'],
    description: 'The King of Timbales whose dazzling big band orchestrations fundamentally linked Afro-Cuban rhythms with the harmonic vocabulary of American jazz.',
  },

  // ── Jazz ↔ Other ────────────────────────────────────────────────────────────
  {
    artist: 'Miles Davis',
    pillars: ['Jazz & Acoustics', 'Rock', 'Electronic'],
    description: 'The restless jazz visionary whose electric period (\'Bitches Brew\') ripped up the acoustic rulebook, bringing funk rhythms and rock amplification to jazz.',
  },
  {
    artist: 'Herbie Hancock',
    pillars: ['Jazz & Acoustics', 'Electronic', 'R&B / Soul'],
    description: 'A jazz piano prodigy who pioneered the use of synthesizers and drum machines, essentially helping invent electro-funk and hip-hop with \'Rockit\'.',
  },
  {
    artist: 'Robert Glasper',
    pillars: ['Jazz & Acoustics', 'Hip-Hop / Rap', 'R&B / Soul'],
    description: 'The pianist who definitively dissolved the wall between modern post-bop and hip-hop, whose \'Black Radio\' sessions became the gold standard of modern crossover.',
  },
  {
    artist: 'Kamasi Washington',
    pillars: ['Jazz & Acoustics', 'Hip-Hop / Rap'],
    description: 'The colossal tenor voice of the Los Angeles scene whose massive, spiritual-jazz epics reconnected jazz with its grand, cosmic 1970s ambitions while anchoring Kendrick Lamar\'s masterworks.',
  },
  {
    artist: 'Hiatus Kaiyote',
    pillars: ['Jazz & Acoustics', 'R&B / Soul'],
    description: 'The Australian pioneers of \'future soul,\' weaving staggeringly complex time signatures and jazz voicings into wildly inventive, Grammy-nominated neo-R&B.',
  },
  {
    artist: 'BadBadNotGood',
    pillars: ['Jazz & Acoustics', 'Hip-Hop / Rap'],
    description: 'The Toronto trio who bridged ominous 1970s library funk with modern hip-hop production, becoming the most vital rhythm section in contemporary crossover music.',
  },
  {
    artist: 'Snarky Puppy',
    pillars: ['Jazz & Acoustics', 'Pop'],
    description: 'The sprawling collective that revived instrumental jazz-funk for a new generation with staggering compositional rigor, massive horn arrangements, and undeniable pop-adjacent hooks.',
  },
  {
    artist: 'Nina Simone',
    pillars: ['Jazz & Acoustics', 'R&B / Soul', 'Classical'],
    description: 'The High Priestess of Soul whose commanding, classically trained piano and ferocious, unvarnished contralto channeled jazz, soul, and Bach into undeniable art.',
  },
  {
    artist: 'Flying Lotus',
    pillars: ['Electronic', 'Hip-Hop / Rap', 'Jazz & Acoustics'],
    description: 'Coltrane\'s great-nephew who fused the LA beat scene with spiritual jazz and experimental IDM, creating a dizzying, bass-heavy cosmic lineage.',
  },

  // ── Classical & Electronic ↔ Other ──────────────────────────────────────────
  {
    artist: 'Ennio Morricone',
    pillars: ['Classical', 'Jazz & Acoustics', 'Rock'],
    description: 'A legendary film composer who fused traditional orchestral writing with jazz, surf-rock guitars, and avant-garde experimentation across 500 scores.',
  },
  {
    artist: 'Brian Eno',
    pillars: ['Studio Perfection', 'Electronic', 'Rock', 'Classical'],
    description: 'Invented ambient music, produced landmark rock albums, and collaborated with classical minimalists — genre definition made flesh.',
  },
  {
    artist: 'Ryuichi Sakamoto',
    pillars: ['Studio Perfection', 'Electronic', 'Classical'],
    description: 'Yellow Magic Orchestra synth pioneer who became a celebrated classical film composer and pianist — technology and tradition unified.',
  },
  {
    artist: 'Max Richter',
    pillars: ['Classical', 'Electronic'],
    description: 'A post-minimalist composer who seamlessly layers analogue electronics and strings to soundtrack grief, memory, and sleep.',
  },
  {
    artist: 'Nils Frahm',
    pillars: ['Classical', 'Electronic'],
    description: 'A neo-classical pianist who treats grand pianos and analog synthesizers as equals, building pulsing, techno-inspired crescendos from acoustic instruments.',
  },
  {
    artist: 'Massive Attack',
    pillars: ['Studio Perfection', 'Electronic', 'Reggae / Dub'],
    description: 'Invented trip-hop by fusing dub reggae basslines, soul samples, and electronic production into something that defined 90s cinematic paranoia.',
  },
  {
    artist: 'Portishead',
    pillars: ['Studio Perfection', 'Electronic', 'Amazing Vocals'],
    description: 'Trip-hop\'s most cinematic voice — scratchy hip-hop breaks and spy-movie orchestrations wrapped around Beth Gibbons\'s haunting, jazz-inflected vocals.',
  },
  {
    artist: 'Björk',
    pillars: ['Amazing Vocals', 'Electronic', 'Pop'],
    description: 'An Icelandic visionary who bridges avant-garde electronic composition, sweeping string arrangements, and club beats with an entirely singular vocal instrument.',
  },
  {
    artist: 'Roni Size',
    pillars: ['Electronic', 'Jazz & Acoustics'],
    description: 'His masterpiece \'New Forms\' brought live jazz improvisation and upright bass into drum & bass, winning the Mercury Prize and blurring both genres.',
  },
  {
    artist: 'SOPHIE',
    pillars: ['Electronic', 'Pop', 'Studio Perfection'],
    description: 'A visionary producer whose plasticity-as-texture sound design essentially invented hyperpop, bringing avant-garde electronic manipulation to mainstream pop hooks.',
  },
  {
    artist: 'Daft Punk',
    pillars: ['Electronic', 'Pop', 'Studio Perfection'],
    description: 'French house pioneers whose journey from raw drum machines to immaculate, analog-recorded disco epics bridged the underground club and the global pop stadium.',
  },
  {
    artist: 'Sigur Rós',
    pillars: ['Rock', 'Classical', 'Studio Perfection'],
    description: 'Icelandic post-rock architects who construct glacial, bowed-guitar symphonies that sit comfortably alongside modern classical orchestration.',
  },
];

/**
 * Returns all connectors that include a given pillar.
 */
export function getConnectorsByPillar(pillarName: string): Connector[] {
  return CONNECTORS.filter(c => c.pillars.includes(pillarName));
}

/**
 * Returns the connector entry for a specific artist, or null.
 */
export function getConnector(artistName: string): Connector | null {
  return CONNECTORS.find(
    c => c.artist.toLowerCase() === artistName.toLowerCase()
  ) ?? null;
}
