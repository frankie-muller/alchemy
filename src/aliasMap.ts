/**
 * Alias Washer — normalizes raw ID3 genre tags to canonical sub-category names.
 * Keys are lowercased for case-insensitive matching.
 *
 * Sub-category names here must exactly match what's defined in the pillar files.
 * All sub-category names are unique across pillars to prevent misclassification.
 */
export const ALIAS_MAP: Record<string, string> = {

  // ── Electronic: Minimal / Microhouse ─────────────────────────────────────
  'minimal':                            'Minimal / Microhouse',
  'minimal techno':                     'Minimal / Microhouse',
  'minimal tech':                       'Minimal / Microhouse',
  'minimal tech-house':                 'Minimal / Microhouse',
  'minimal tech house':                 'Minimal / Microhouse',
  'mintech':                            'Minimal / Microhouse',
  'micro-house':                        'Minimal / Microhouse',
  'microhouse':                         'Minimal / Microhouse',
  'micro house':                        'Minimal / Microhouse',
  'rominimal':                          'Minimal / Microhouse',
  'ro-minimal':                         'Minimal / Microhouse',
  'romanian minimal':                   'Minimal / Microhouse',
  'click house':                        'Minimal / Microhouse',
  'minimal dub':                        'Minimal / Microhouse',
  'minimal house':                      'Minimal / Microhouse',

  // ── Electronic: Progressive / Melodic House ──────────────────────────────
  'progressive house':                  'Progressive / Melodic House',
  'prog house':                         'Progressive / Melodic House',
  'melodic house':                      'Progressive / Melodic House',
  'melodic techno':                     'Progressive / Melodic House',
  'melodic techno/house':               'Progressive / Melodic House',
  'melodic house & techno':             'Progressive / Melodic House',
  'melodic tech':                       'Progressive / Melodic House',
  'indie dance':                        'Progressive / Melodic House',
  'anjunadeep':                         'Progressive / Melodic House',
  'progressive trance':                 'Trance',
  'trance':                             'Trance',
  'progressive breaks':                 'Progressive / Melodic House',

  // ── Electronic: Beatport / Modern Club ───────────────────────────────────
  'techno':                             'Deep & Tech House',
  'techno (peak time / driving)':       'Deep & Tech House',
  'techno (raw / deep / hypnotic)':     'Minimal / Microhouse',
  'hard techno':                        'Deep & Tech House',
  'bass house':                         'Deep & Tech House',
  'tech house / bass house':            'Deep & Tech House',
  'electro house / bass house':         'Deep & Tech House',
  'slap house':                         'Deep & Tech House',
  'future house':                       'Deep & Tech House',

  // ── Electronic: IDM / Leftfield / Electronica ────────────────────────────
  'idm':                                'IDM / Leftfield / Electronica',
  'intelligent dance music':            'IDM / Leftfield / Electronica',
  'electronica':                        'IDM / Leftfield / Electronica',
  'electronic':                         'IDM / Leftfield / Electronica', // Catch-all
  'leftfield':                          'IDM / Leftfield / Electronica',
  'left field':                         'IDM / Leftfield / Electronica',
  'experimental electronic':            'IDM / Leftfield / Electronica',
  'abstract':                           'IDM / Leftfield / Electronica',
  'abstract electronic':                'IDM / Leftfield / Electronica',
  'glitch':                             'IDM / Leftfield / Electronica',
  'glitch hop':                         'IDM / Leftfield / Electronica',
  'braindance':                         'IDM / Leftfield / Electronica',
  'wonky':                              'IDM / Leftfield / Electronica',
  'folktronica':                        'IDM / Leftfield / Electronica',
  'illbient':                           'IDM / Leftfield / Electronica',
  'indietronica':                       'IDM / Leftfield / Electronica',
  'idm/glitch':                         'IDM / Leftfield / Electronica',
  'electroacoustic':                    'IDM / Leftfield / Electronica',

  // ── Electronic: Deep & Tech House ────────────────────────────────────────
  'deep house':                         'Deep & Tech House',
  'tech house':                         'Deep & Tech House',
  'tech-house':                         'Deep & Tech House',
  'techhouse':                          'Deep & Tech House',
  'house':                              'Deep & Tech House',
  'afro house':                         'Deep & Tech House',
  'afro tech':                          'Deep & Tech House',
  'organic house':                      'Deep & Tech House',
  'french house':                       'Deep & Tech House',
  'french touch':                       'Deep & Tech House',
  'nu disco':                           'Disco / Nu-Disco',
  'nu-disco':                           'Disco / Nu-Disco',
  'chicago house':                      'Detroit Techno / Chicago House',
  'detroit house':                      'Detroit Techno / Chicago House',
  'detroit techno':                     'Detroit Techno / Chicago House',
  'dub techno':                         'Deep & Tech House',
  'lo-fi house':                        'Deep & Tech House',
  'lofi house':                         'Deep & Tech House',
  'outsider house':                     'Deep & Tech House',
  'soulful house':                      'Deep & Tech House',
  'jackin house':                       'Deep & Tech House',
  'tribal house':                       'Deep & Tech House',
  'acid house':                         'Acid House',
  'acid':                               'Acid House',
  'vocal house':                        'Deep & Tech House',
  'electro house':                      'Deep & Tech House',
  'amapiano':                           'Deep & Tech House',
  'balearic beat':                      'Deep & Tech House',

  // ── Electronic: Ambient / Downtempo ──────────────────────────────────────
  'ambient':                            'Ambient / Downtempo',
  'ambient electronic':                 'Ambient / Downtempo',
  'dark ambient':                       'Ambient / Downtempo',
  'drone':                              'Ambient / Downtempo',
  'downtempo':                          'Ambient / Downtempo',
  'chillout':                           'Ambient / Downtempo',
  'chill out':                          'Ambient / Downtempo',
  'chill':                              'Ambient / Downtempo',
  'trip hop':                           'Ambient / Downtempo',
  'trip-hop':                           'Ambient / Downtempo',
  'triphop':                            'Ambient / Downtempo',
  'bristol sound':                      'Ambient / Downtempo',
  'psychill':                           'Ambient / Downtempo',
  'psydub':                             'Ambient / Downtempo',
  'ambient techno':                     'Ambient / Downtempo',
  'ambient house':                      'Ambient / Downtempo',
  'space music':                        'Ambient / Downtempo',
  'soundscape':                         'Ambient / Downtempo',
  'new age':                            'Ambient / Downtempo',
  'lounge':                             'Ambient / Downtempo',
  'chillwave':                          'Ambient / Downtempo',
  'vaporwave':                          'Ambient / Downtempo',

  // ── Electronic: Synthpop / Electronic Pop ────────────────────────────────
  'synth pop':                          'Synthpop / Electronic Pop',
  'synthpop':                           'Synthpop / Electronic Pop',
  'synth-pop':                          'Synthpop / Electronic Pop',
  'electropop':                         'Synthpop / Electronic Pop',
  'electro pop':                        'Synthpop / Electronic Pop',
  'electronic pop':                     'Synthpop / Electronic Pop',
  'new wave':                           'Synthpop / Electronic Pop',
  'new-wave':                           'Synthpop / Electronic Pop',
  'darkwave':                           'Synthpop / Electronic Pop',
  'dark wave':                          'Synthpop / Electronic Pop',
  'coldwave':                           'Synthpop / Electronic Pop',
  'minimal wave':                       'Synthpop / Electronic Pop',
  'synthwave':                          'Synthpop / Electronic Pop',
  'retrowave':                          'Synthpop / Electronic Pop',
  'outrun':                             'Synthpop / Electronic Pop',
  'futurepop':                          'Synthpop / Electronic Pop',
  'electroclash':                       'Synthpop / Electronic Pop',
  'italo disco':                        'Synthpop / Electronic Pop',
  'new romantic':                       'Synthpop / Electronic Pop',

  // ── Electronic: Drum & Bass / Jungle ─────────────────────────────────────
  'drum and bass':                      'Drum & Bass / Jungle',
  'drum & bass':                        'Drum & Bass / Jungle',
  'drum n bass':                        'Drum & Bass / Jungle',
  'dnb':                                'Drum & Bass / Jungle',
  'd&b':                                'Drum & Bass / Jungle',
  'd\'n\'b':                              'Drum & Bass / Jungle',
  'jungle':                             'Drum & Bass / Jungle',
  'liquid funk':                        'Drum & Bass / Jungle',
  'liquid dnb':                         'Drum & Bass / Jungle',
  'neurofunk':                          'Drum & Bass / Jungle',
  'ragga jungle':                       'Drum & Bass / Jungle',
  'jump up':                            'Drum & Bass / Jungle',
  'techstep':                           'Drum & Bass / Jungle',
  'darkstep':                           'Drum & Bass / Jungle',
  'hardstep':                           'Drum & Bass / Jungle',
  'drumstep':                           'Drum & Bass / Jungle',
  'sambass':                            'Drum & Bass / Jungle',

  // ── Electronic: Breakbeat / Big Beat ─────────────────────────────────────
  'breakbeat':                          'Breakbeat / Big Beat',
  'break beat':                         'Breakbeat / Big Beat',
  'big beat':                           'Breakbeat / Big Beat',
  'breaks':                             'Breakbeat / Big Beat',
  'nu skool breaks':                    'Breakbeat / Big Beat',
  'chemical beats':                     'Breakbeat / Big Beat',
  'electro':                            'Breakbeat / Big Beat',
  'florida breaks':                     'Breakbeat / Big Beat',
  'miami bass':                         'Breakbeat / Big Beat',
  'uk bass':                            'Breakbeat / Big Beat',
  'bass music':                         'Breakbeat / Big Beat',
  'uk garage':                          'Breakbeat / Big Beat',
  'ukg':                                'Breakbeat / Big Beat',
  '2-step':                             'Breakbeat / Big Beat',
  'dubstep':                            'Breakbeat / Big Beat',
  'brostep':                            'Breakbeat / Big Beat',
  'grime':                              'Breakbeat / Big Beat',

  // ── Electronic: Detroit Techno / Chicago House ───────────────────────────
  'ghetto house':                       'Detroit Techno / Chicago House',

  // ── Electronic: Trance ───────────────────────────────────────────────────
  'psytrance':                          'Trance',
  'psy trance':                         'Trance',
  'psychedelic trance':                 'Trance',
  'goa':                                'Trance',
  'goa trance':                         'Trance',
  'uplifting trance':                   'Trance',
  'vocal trance':                       'Trance',
  'tech trance':                        'Trance',
  'hard trance':                        'Trance',
  'progressive psytrance':              'Trance',

  // ── Electronic: Acid House ───────────────────────────────────────────────
  'acid techno':                        'Acid House',

  // ── Electronic: EBM / Industrial ─────────────────────────────────────────
  'ebm':                                'EBM / Industrial',
  'electronic body music':              'EBM / Industrial',
  'electro-industrial':                 'EBM / Industrial',
  'aggrotech':                          'EBM / Industrial',
  'dark electro':                       'EBM / Industrial',
  'rhythmic noise':                     'EBM / Industrial',
  'powernoise':                         'EBM / Industrial',
  'power noise':                        'EBM / Industrial',

  // ── Electronic: Disco / Nu-Disco ─────────────────────────────────────────
  'eurodisco':                          'Disco / Nu-Disco',
  'euro disco':                         'Disco / Nu-Disco',
  'euro-disco':                         'Disco / Nu-Disco',
  'space disco':                        'Disco / Nu-Disco',
  'cosmic disco':                       'Disco / Nu-Disco',
  'hi-nrg':                             'Disco / Nu-Disco',
  'hi nrg':                             'Disco / Nu-Disco',
  'hinrg':                              'Disco / Nu-Disco',

  // ── Rock: Alternative / Indie ────────────────────────────────────────────
  'indie':                              'Alternative / Indie',
  'indie rock':                         'Alternative / Indie',
  'indie-rock':                         'Alternative / Indie',
  'alternative':                        'Alternative / Indie',
  'alternative rock':                   'Alternative / Indie',
  'alt rock':                           'Alternative / Indie',
  'alt-rock':                           'Alternative / Indie',
  'college rock':                       'Alternative / Indie',
  'jangle pop':                         'Alternative / Indie',
  'noise pop':                          'Alternative / Indie',
  'slacker rock':                       'Alternative / Indie',
  'post-rock':                          'Alternative / Indie',
  'math rock':                          'Alternative / Indie',
  'lo-fi indie':                        'Alternative / Indie',
  'lofi':                               'Alternative / Indie',
  'slowcore':                           'Alternative / Indie',
  'sadcore':                            'Alternative / Indie',
  'britpop':                            'Alternative / Indie',
  'madchester':                         'Alternative / Indie',

  // ── Rock: Classic Rock / Arena Rock ──────────────────────────────────────
  'classic rock':                       'Classic Rock / Arena Rock',
  'rock':                               'Classic Rock / Arena Rock',
  'rock and roll':                      'Classic Rock / Arena Rock',
  'rock & roll':                        'Classic Rock / Arena Rock',
  'rock n roll':                        'Classic Rock / Arena Rock',
  'rock \'n\' roll':                      'Classic Rock / Arena Rock',
  'rock n\' roll':                       'Classic Rock / Arena Rock',
  'arena rock':                         'Classic Rock / Arena Rock',
  'stadium rock':                       'Classic Rock / Arena Rock',
  'hard rock':                          'Classic Rock / Arena Rock',
  'blues rock':                         'Classic Rock / Arena Rock',
  'southern rock':                      'Classic Rock / Arena Rock',
  'roots rock':                         'Classic Rock / Arena Rock',
  'heartland rock':                     'Classic Rock / Arena Rock',
  'pub rock':                           'Classic Rock / Arena Rock',
  'boogie rock':                        'Classic Rock / Arena Rock',
  'yacht rock':                         'Classic Rock / Arena Rock',
  'soft rock':                          'Classic Rock / Arena Rock',
  'aor':                                'Classic Rock / Arena Rock',
  'album oriented rock':                'Classic Rock / Arena Rock',

  // ── Rock: Post-Punk / New Wave ────────────────────────────────────────────
  'post-punk':                          'Post-Punk / New Wave',
  'post punk':                          'Post-Punk / New Wave',
  'new wave rock':                      'Post-Punk / New Wave',
  'no wave':                            'Post-Punk / New Wave',
  'gothic rock':                        'Post-Punk / New Wave',
  'goth rock':                          'Post-Punk / New Wave',
  'dance-punk':                         'Post-Punk / New Wave',

  // ── Rock: Progressive / Experimental ────────────────────────────────────
  'prog':                               'Progressive / Experimental',
  'prog rock':                          'Progressive / Experimental',
  'prog-rock':                          'Progressive / Experimental',
  'progressive rock':                   'Progressive / Experimental',
  'progressive':                        'Progressive / Experimental',
  'experimental rock':                  'Progressive / Experimental',
  'experimental':                       'Progressive / Experimental',
  'art rock':                           'Progressive / Experimental',
  'art-rock':                           'Progressive / Experimental',
  'avant-garde rock':                   'Progressive / Experimental',
  'avant-garde':                        'Progressive / Experimental',
  'avant-prog':                         'Progressive / Experimental',
  'krautrock':                          'Progressive / Experimental',
  'psychedelic rock':                   'Progressive / Experimental',
  'psychedelic':                        'Progressive / Experimental',
  'psych rock':                         'Progressive / Experimental',
  'space rock':                         'Progressive / Experimental',
  'acid rock':                          'Progressive / Experimental',
  'neo-psychedelia':                    'Progressive / Experimental',
  'symphonic rock':                     'Progressive / Experimental',
  'canterbury scene':                   'Progressive / Experimental',
  'zeuhl':                              'Progressive / Experimental',
  'noise rock':                         'Progressive / Experimental',

  // ── Rock: Shoegaze / Dream Pop ───────────────────────────────────────────
  'shoegaze':                           'Shoegaze / Dream Pop',
  'shoegazing':                         'Shoegaze / Dream Pop',
  'shoegazer':                          'Shoegaze / Dream Pop',
  'dream pop':                          'Shoegaze / Dream Pop',
  'dream-pop':                          'Shoegaze / Dream Pop',
  'nugaze':                             'Shoegaze / Dream Pop',
  'blackgaze':                          'Shoegaze / Dream Pop',
  'space pop':                          'Shoegaze / Dream Pop',

  // ── Rock: Grunge ─────────────────────────────────────────────────────────
  'grunge':                             'Grunge',
  'post-grunge':                        'Grunge',
  'seattle sound':                      'Grunge',

  // ── Rock: Punk / Post-Hardcore ───────────────────────────────────────────
  'punk':                               'Punk / Post-Hardcore',
  'punk rock':                          'Punk / Post-Hardcore',
  'post-hardcore':                      'Punk / Post-Hardcore',
  'post hardcore':                      'Punk / Post-Hardcore',
  'hardcore punk':                      'Punk / Post-Hardcore',
  'hardcore':                           'Punk / Post-Hardcore',
  'melodic hardcore':                   'Punk / Post-Hardcore',
  'emo':                                'Punk / Post-Hardcore',
  'emo rock':                           'Punk / Post-Hardcore',
  'screamo':                            'Punk / Post-Hardcore',
  'pop punk':                           'Punk / Post-Hardcore',
  'pop-punk':                           'Punk / Post-Hardcore',
  'skate punk':                         'Punk / Post-Hardcore',
  'riot grrrl':                         'Punk / Post-Hardcore',
  'crust punk':                         'Punk / Post-Hardcore',
  'street punk':                        'Punk / Post-Hardcore',
  'd-beat':                             'Punk / Post-Hardcore',
  'oi!':                                'Punk / Post-Hardcore',

  // ── Latin: Rock en Español ─────────────────────────────────────────────────
  'rock en español':                    'Rock en Español',
  'rock en espanol':                    'Rock en Español',
  'rock latino':                        'Rock en Español',
  'latin rock':                         'Rock en Español',
  'rock argentino':                     'Rock en Español',
  'rock mexicano':                      'Rock en Español',
  'rock chileno':                       'Rock en Español',
  'rock nacional':                      'Rock en Español',
  'alterlatino':                        'Rock en Español',
  'latin alternative':                  'Rock en Español',

  // ── Latin: Latin Pop ─────────────────────────────────────────────────────
  'latin pop':                          'Latin Pop',
  'pop latinoamericano':                'Latin Pop',
  'latin ballad':                       'Latin Pop',
  'balada romántica':                   'Latin Pop',

  // ── Latin: Salsa / Merengue ──────────────────────────────────────────────
  'salsa':                              'Salsa / Merengue',
  'merengue':                           'Salsa / Merengue',
  'salsa romantica':                    'Salsa / Merengue',
  'salsa dura':                         'Salsa / Merengue',
  'tropical':                           'Salsa / Merengue',
  'mambo':                              'Salsa / Merengue',
  'cha-cha-cha':                        'Salsa / Merengue',
  'chachacha':                          'Salsa / Merengue',
  'guaguanco':                          'Salsa / Merengue',
  'son montuno':                        'Salsa / Merengue',
  'timba':                              'Salsa / Merengue',

  // ── Latin: Bachata / Bolero ──────────────────────────────────────────────
  'bachata':                            'Bachata / Bolero',
  'bachata urbana':                     'Bachata / Bolero',
  'bolero':                             'Bachata / Bolero',
  'trova':                              'Bachata / Bolero',
  'son cubano':                         'Bachata / Bolero',

  // ── Latin: Flamenco / Español ────────────────────────────────────────────
  'flamenco':                           'Flamenco / Español',
  'spanish':                            'Flamenco / Español',
  'nuevo flamenco':                     'Flamenco / Español',
  'flamenco pop':                       'Flamenco / Español',
  'rumba':                              'Flamenco / Español',
  'rumba catalana':                     'Flamenco / Español',
  'sevillanas':                          'Flamenco / Español',
  'sevillana':                          'Flamenco / Español',
  'copla':                              'Flamenco / Español',
  'spanish guitar':                      'Flamenco / Español',
  'cante jondo':                        'Flamenco / Español',

  // ── Latin: Cumbia / Norteño / Regional ───────────────────────────────────
  'cumbia':                             'Cumbia / Norteño / Regional',
  'cumbia sonidera':                    'Cumbia / Norteño / Regional',
  'cumbia villera':                     'Cumbia / Norteño / Regional',
  'norteño':                            'Cumbia / Norteño / Regional',
  'norteno':                            'Cumbia / Norteño / Regional',
  'banda':                              'Cumbia / Norteño / Regional',
  'banda sinaloense':                   'Cumbia / Norteño / Regional',
  'regional mexicano':                  'Cumbia / Norteño / Regional',
  'corridos':                           'Cumbia / Norteño / Regional',
  'corridos tumbados':                  'Cumbia / Norteño / Regional',
  'narcocorridos':                      'Cumbia / Norteño / Regional',
  'ranchera':                           'Cumbia / Norteño / Regional',
  'rancheras':                          'Cumbia / Norteño / Regional',
  'mariachi':                           'Cumbia / Norteño / Regional',
  'sierreño':                           'Cumbia / Norteño / Regional',
  'huapango':                           'Cumbia / Norteño / Regional',
  'tejano':                             'Cumbia / Norteño / Regional',
  'tex-mex':                            'Cumbia / Norteño / Regional',
  'vallenato':                          'Cumbia / Norteño / Regional',

  // ── Latin: Pop en Español ────────────────────────────────────────────────
  'pop en español':                     'Pop en Español',
  'pop en espanol':                     'Pop en Español',
  'pop latino':                         'Pop en Español',

  // ── Latin: Brazilian / MPB ───────────────────────────────────────────────
  'mpb':                                'Brazilian / MPB',
  'musica popular brasileira':          'Brazilian / MPB',
  'música popular brasileira':          'Brazilian / MPB',
  'samba':                              'Brazilian / MPB',
  'pagode':                             'Brazilian / MPB',
  'tropicalia':                         'Brazilian / MPB',
  'tropicália':                         'Brazilian / MPB',
  'tropicalismo':                       'Brazilian / MPB',
  'forró':                              'Brazilian / MPB',
  'forro':                              'Brazilian / MPB',
  'axé':                                'Brazilian / MPB',
  'axe music':                          'Brazilian / MPB',

  // ── Latin: Tango ─────────────────────────────────────────────────────────
  'tango':                              'Tango',
  'nuevo tango':                        'Tango',
  'tango nuevo':                        'Tango',
  'neotango':                           'Tango',
  'electrotango':                       'Tango',
  'electro tango':                      'Tango',
  'milonga':                            'Tango',

  // ── Metal / Hard Rock: Heavy Metal / Hard Rock ───────────────────────────
  'metal':                              'Heavy Metal / Hard Rock',
  'heavy metal':                        'Heavy Metal / Hard Rock',
  'traditional metal':                  'Heavy Metal / Hard Rock',
  'thrash metal':                       'Heavy Metal / Hard Rock',
  'thrash':                             'Heavy Metal / Hard Rock',
  'nu metal':                           'Heavy Metal / Hard Rock',
  'nu-metal':                           'Heavy Metal / Hard Rock',
  'numetal':                            'Heavy Metal / Hard Rock',
  'groove metal':                       'Heavy Metal / Hard Rock',
  'speed metal':                        'Heavy Metal / Hard Rock',
  'alternative metal':                  'Heavy Metal / Hard Rock',
  'funk metal':                         'Heavy Metal / Hard Rock',

  // ── Metal: Classic Heavy Metal / NWOBHM ──────────────────────────────────
  'nwobhm':                             'Classic Heavy Metal / NWOBHM',
  'british metal':                      'Classic Heavy Metal / NWOBHM',
  'classic metal':                      'Classic Heavy Metal / NWOBHM',

  // ── Metal: Doom / Stoner / Sludge ────────────────────────────────────────
  'doom metal':                         'Doom / Stoner / Sludge',
  'doom':                               'Doom / Stoner / Sludge',
  'stoner rock':                        'Doom / Stoner / Sludge',
  'stoner metal':                       'Doom / Stoner / Sludge',
  'stoner doom':                        'Doom / Stoner / Sludge',
  'sludge metal':                       'Doom / Stoner / Sludge',
  'sludge':                             'Doom / Stoner / Sludge',
  'desert rock':                        'Doom / Stoner / Sludge',
  'drone metal':                        'Doom / Stoner / Sludge',
  'funeral doom':                       'Doom / Stoner / Sludge',

  // ── Metal: Death / Black / Extreme Metal ─────────────────────────────────
  'death metal':                        'Death / Black / Extreme Metal',
  'black metal':                        'Death / Black / Extreme Metal',
  'extreme metal':                      'Death / Black / Extreme Metal',
  'brutal death metal':                 'Death / Black / Extreme Metal',
  'melodic death metal':                'Death / Black / Extreme Metal',
  'melodeath':                          'Death / Black / Extreme Metal',
  'blackened death':                    'Death / Black / Extreme Metal',
  'tech death':                         'Death / Black / Extreme Metal',
  'grindcore':                          'Death / Black / Extreme Metal',
  'metalcore':                          'Death / Black / Extreme Metal',
  'mathcore':                           'Death / Black / Extreme Metal',
  'deathcore':                          'Death / Black / Extreme Metal',
  'symphonic black metal':              'Death / Black / Extreme Metal',
  'war metal':                          'Death / Black / Extreme Metal',
  'industrial metal':                   'Death / Black / Extreme Metal',
  'industrial':                         'Death / Black / Extreme Metal',
  'cyber metal':                        'Death / Black / Extreme Metal',

  // ── Metal: Progressive Metal ─────────────────────────────────────────────
  'progressive metal':                  'Progressive Metal',
  'prog metal':                         'Progressive Metal',
  'djent':                              'Progressive Metal',
  'math metal':                         'Progressive Metal',
  'technical death metal':              'Progressive Metal',
  'avant-garde metal':                  'Progressive Metal',

  // ── Metal: Power / Symphonic Metal ───────────────────────────────────────
  'power metal':                        'Power / Symphonic Metal',
  'symphonic metal':                    'Power / Symphonic Metal',
  'melodic power metal':                'Power / Symphonic Metal',
  'symphonic power metal':              'Power / Symphonic Metal',
  'neoclassical metal':                 'Power / Symphonic Metal',
  'neo-classical metal':                'Power / Symphonic Metal',
  'epic metal':                         'Power / Symphonic Metal',
  'fantasy metal':                      'Power / Symphonic Metal',

  // ── R&B / Soul: Modern R&B ───────────────────────────────────────────────
  'r&b':                                'Modern R&B',
  'rnb':                                'Modern R&B',
  'modern r&b':                         'Modern R&B',
  'rhythm and blues':                   'Modern R&B',
  'rhythm & blues':                     'Modern R&B',
  'alternative r&b':                    'Modern R&B',
  'alt r&b':                            'Modern R&B',
  'pbr&b':                              'Modern R&B',
  'pbrnb':                              'Modern R&B',
  'indie r&b':                          'Modern R&B',

  // ── R&B / Soul: Neo Soul ─────────────────────────────────────────────────
  'neo soul':                           'Neo Soul',
  'neo-soul':                           'Neo Soul',
  'nu soul':                            'Neo Soul',
  'progressive soul':                   'Neo Soul',

  // ── R&B / Soul: Classic Soul / Motown ────────────────────────────────────
  'soul':                               'Classic Soul / Motown',
  'motown':                             'Classic Soul / Motown',
  'stax':                               'Classic Soul / Motown',
  'classic soul':                       'Classic Soul / Motown',
  'northern soul':                      'Classic Soul / Motown',
  'southern soul':                      'Classic Soul / Motown',
  'deep soul':                          'Classic Soul / Motown',
  'sweet soul':                         'Classic Soul / Motown',
  'philly soul':                        'Classic Soul / Motown',
  'classic r&b':                        'Classic Soul / Motown',
  'gospel':                             'Classic Soul / Motown',
  'funk':                               'Funk',
  'p-funk':                             'Funk',
  'p funk':                             'Funk',
  'funk soul':                          'Funk',
  'disco':                              'Disco / Nu-Disco',
  'boogie':                             'Classic Soul / Motown',
  'quiet storm':                        'Classic Soul / Motown',

  // ── R&B / Soul: Contemporary R&B ────────────────────────────────────────
  'contemporary r&b':                   'Contemporary R&B',
  '90s r&b':                            'Contemporary R&B',
  'y2k r&b':                            'Contemporary R&B',
  'urban contemporary':                 'Contemporary R&B',
  'pop r&b':                            'Contemporary R&B',
  'pop soul':                           'Contemporary R&B',
  'new jack swing':                     'Contemporary R&B',
  'hip hop soul':                       'Contemporary R&B',

  // ── Pop: Mainstream Pop ──────────────────────────────────────────────────
  'pop':                                'Mainstream Pop',
  'dance pop':                          'Mainstream Pop',
  'dance-pop':                          'Mainstream Pop',
  'teen pop':                           'Mainstream Pop',
  'bubblegum pop':                      'Mainstream Pop',
  'europop':                            'Mainstream Pop',
  'eurodance':                          'Mainstream Pop',
  'j-pop':                              'Mainstream Pop',
  'c-pop':                              'Mainstream Pop',
  'schlager':                           'Mainstream Pop',

  // ── Pop: Indie Pop / Alt Pop ─────────────────────────────────────────────
  'indie pop':                          'Indie Pop / Alt Pop',
  'indie-pop':                          'Indie Pop / Alt Pop',
  'art pop':                            'Indie Pop / Alt Pop',
  'art-pop':                            'Indie Pop / Alt Pop',
  'chamber pop':                        'Indie Pop / Alt Pop',
  'sophisti-pop':                       'Indie Pop / Alt Pop',
  'sophisti pop':                       'Indie Pop / Alt Pop',
  'bedroom pop':                        'Indie Pop / Alt Pop',
  'twee pop':                           'Indie Pop / Alt Pop',
  'hyperpop':                           'Indie Pop / Alt Pop',
  'anti-pop':                           'Indie Pop / Alt Pop',

  // ── Pop: K-Pop ───────────────────────────────────────────────────────────
  'k-pop':                              'K-Pop',
  'kpop':                               'K-Pop',
  'korean pop':                         'K-Pop',
  'k-pop girl group':                   'K-Pop',
  'k-pop boy group':                    'K-Pop',

  // ── Reggae / Dub: Roots Reggae ───────────────────────────────────────────
  'reggae':                             'Roots Reggae',
  'roots reggae':                       'Roots Reggae',
  'dub reggae':                         'Roots Reggae',

  // ── Reggae / Dub: Ska & Rocksteady ───────────────────────────────────────
  'ska':                                'Ska & Rocksteady',
  'rocksteady':                         'Ska & Rocksteady',
  'rock steady':                        'Ska & Rocksteady',
  'bluebeat':                           'Ska & Rocksteady',
  'blue beat':                          'Ska & Rocksteady',
  '2 tone':                             'Ska & Rocksteady',
  '2-tone':                             'Ska & Rocksteady',
  'two tone':                           'Ska & Rocksteady',

  // ── Reggae / Dub: Dancehall ──────────────────────────────────────────────
  'dancehall':                          'Dancehall',
  'dance hall':                         'Dancehall',
  'bashment':                           'Dancehall',
  'ragga':                              'Dancehall',
  'soca':                               'Dancehall',

  // ── Reggae / Dub: Studio Dub ─────────────────────────────────────────────
  'dub':                                'Studio Dub',
  'studio dub':                         'Studio Dub',
  'dub music':                          'Studio Dub',
  'uk dub':                             'Studio Dub',
  'steppers':                           'Studio Dub',

  // ── Reggae / Dub: Lovers Rock ────────────────────────────────────────────
  'lovers rock':                        'Lovers Rock',
  'lovers':                             'Lovers Rock',

  // ── Jazz & Acoustics: Bebop / Hard Bop ─────────────────────────────────────
  'be-bop':                             'Bebop / Hard Bop',
  'bebop':                              'Bebop / Hard Bop',
  'hard bop':                           'Bebop / Hard Bop',
  'trad jazz':                          'Bebop / Hard Bop',
  'dixieland':                          'Bebop / Hard Bop',
  'soul jazz':                          'Bebop / Hard Bop',

  // ── Jazz & Acoustics: Cool / Modal ─────────────────────────────────────────
  'jazz':                               'Cool / Modal',
  'cool jazz':                          'Cool / Modal',
  'modal jazz':                         'Cool / Modal',
  'post-bop':                           'Cool / Modal',
  'straight-ahead jazz':                'Cool / Modal',
  'modern jazz':                        'Cool / Modal',
  'contemporary jazz':                  'Cool / Modal',
  'jazz standards':                     'Cool / Modal',
  'ecm':                                'Cool / Modal',
  'chamber jazz':                       'Cool / Modal',

  // ── Jazz & Acoustics: Free / Avant-Garde ───────────────────────────────────
  'free jazz':                          'Free / Avant-Garde',
  'avant-garde jazz':                   'Free / Avant-Garde',
  'spiritual jazz':                     'Free / Avant-Garde',
  'creative music':                     'Free / Avant-Garde',
  'improvised music':                   'Free / Avant-Garde',

  // ── Jazz & Acoustics: Fusion / Jazz-Funk ───────────────────────────────────
  'jazz fusion':                        'Fusion / Jazz-Funk',
  'fusion':                             'Fusion / Jazz-Funk',
  'jazz-rock':                          'Fusion / Jazz-Funk',
  'jazz rock':                          'Fusion / Jazz-Funk',
  'jazz-funk':                          'Fusion / Jazz-Funk',
  'jazz funk':                          'Fusion / Jazz-Funk',
  'acid jazz':                          'Fusion / Jazz-Funk',
  'smooth jazz':                        'Fusion / Jazz-Funk',
  'nu jazz':                            'Fusion / Jazz-Funk',
  'electric jazz':                      'Fusion / Jazz-Funk',

  // ── Jazz & Acoustics: Vocal Jazz ───────────────────────────────────────────
  // Note: 'vocal jazz', 'jazz vocal', 'big band', 'swing' are reserved for the
  // Amazing Vocals pillar (Jazz & Soul Powerhouses) — see below.
  'jazz vocals':                        'Vocal Jazz',
  'standards':                          'Vocal Jazz',
  'great american songbook':            'Vocal Jazz',
  'crooner':                            'Vocal Jazz',

  // ── Jazz & Acoustics: Acoustic / Bossa Nova ──────────────────────────────────────────
  'bossa nova':                         'Acoustic / Bossa Nova',
  'bossanova':                          'Acoustic / Bossa Nova',
  'acoustic':                           'Acoustic / Bossa Nova',
  'acoustic jazz':                      'Acoustic / Bossa Nova',
  'brazilian jazz':                     'Acoustic / Bossa Nova',

  // ── Jazz & Acoustics: Latin Jazz ─────────────────────────────────────────
  'latin jazz':                         'Latin Jazz',
  'afro-cuban jazz':                    'Latin Jazz',
  'afro cuban jazz':                    'Latin Jazz',
  'cuban jazz':                         'Latin Jazz',

  // ── Jazz & Acoustics: Acoustic Guitar ────────────────────────────────────
  'acoustic guitar':                    'Acoustic Guitar',
  'fingerstyle':                        'Acoustic Guitar',
  'fingerstyle guitar':                 'Acoustic Guitar',
  'fingerpicking':                      'Acoustic Guitar',

  // ── Classical: Symphonic / Orchestral ────────────────────────────────────
  'classical':                          'Symphonic / Orchestral',
  'orchestral':                         'Symphonic / Orchestral',
  'symphony':                           'Symphonic / Orchestral',
  'symphonic':                          'Symphonic / Orchestral',
  'concerto':                           'Symphonic / Orchestral',
  'chamber music':                      'Symphonic / Orchestral',
  'chamber':                            'Symphonic / Orchestral',
  'string quartet':                     'Symphonic / Orchestral',
  'romantic':                           'Symphonic / Orchestral',
  'classical period':                   'Symphonic / Orchestral',

  // ── Classical: Period Performance / Early Music ──────────────────────────
  'baroque':                            'Period Performance / Early Music',
  'early music':                        'Period Performance / Early Music',
  'renaissance':                        'Period Performance / Early Music',
  'medieval':                           'Period Performance / Early Music',
  'period instrument':                  'Period Performance / Early Music',
  'period instruments':                 'Period Performance / Early Music',
  'historically informed':              'Period Performance / Early Music',

  // ── Classical: Solo Instrumental / Sonata ────────────────────────────────
  'piano':                              'Solo Instrumental / Sonata',
  'piano solo':                         'Solo Instrumental / Sonata',
  'solo piano':                         'Solo Instrumental / Sonata',
  'classical piano':                    'Solo Instrumental / Sonata',
  'sonata':                             'Solo Instrumental / Sonata',
  'cello':                              'Solo Instrumental / Sonata',
  'violin':                             'Solo Instrumental / Sonata',
  'solo instrumental':                  'Solo Instrumental / Sonata',
  'classical guitar':                   'Solo Instrumental / Sonata',
  'solo guitar':                        'Solo Instrumental / Sonata',
  'harp':                               'Solo Instrumental / Sonata',

  // ── Classical: Contemporary / Minimalist ─────────────────────────────────
  'minimalist':                         'Contemporary / Minimalist',
  'minimalism':                         'Contemporary / Minimalist',
  'contemporary classical':             'Contemporary / Minimalist',
  'contemporary':                       'Contemporary / Minimalist',
  'neoclassical':                       'Contemporary / Minimalist',
  'neo-classical':                      'Contemporary / Minimalist',
  'modern classical':                   'Contemporary / Minimalist',
  'post-minimalism':                    'Contemporary / Minimalist',
  'post minimalism':                    'Contemporary / Minimalist',
  'avant-garde classical':              'Contemporary / Minimalist',
  'serialism':                          'Contemporary / Minimalist',

  // ── Classical: Opera / Choral ────────────────────────────────────────────
  'opera':                              'Opera / Choral',
  'choral':                             'Opera / Choral',
  'choir':                              'Opera / Choral',
  'gregorian chant':                    'Opera / Choral',
  'sacred':                             'Opera / Choral',
  'oratorio':                           'Opera / Choral',
  'cantata':                            'Opera / Choral',
  'vocal classical':                    'Opera / Choral',
  'lieder':                             'Opera / Choral',
  'art song':                           'Opera / Choral',
  'aria':                               'Opera / Choral',

  // ── Hip-Hop / Rap: Core / Golden Age ─────────────────────────────────────
  'hip hop':                            'Core / Golden Age',
  'hip-hop':                            'Core / Golden Age',
  'hiphop':                             'Core / Golden Age',
  'rap':                                'Core / Golden Age',
  'rap music':                          'Core / Golden Age',
  'golden age hip hop':                 'Core / Golden Age',
  '90s hip hop':                        'Core / Golden Age',
  'old school hip hop':                 'Core / Golden Age',
  'boom bap':                           'Core / Golden Age',
  'turntablism':                        'Core / Golden Age',

  // ── Hip-Hop / Rap: East Coast ─────────────────────────────────────────────
  'east coast hip hop':                 'East Coast',
  'east coast rap':                     'East Coast',
  'new york hip hop':                   'East Coast',
  'nyc rap':                            'East Coast',
  'ny drill':                           'East Coast',

  // ── Hip-Hop / Rap: Current / Trap ────────────────────────────────────────
  'trap':                               'Current / Trap',
  'trap music':                         'Current / Trap',
  'trap rap':                           'Current / Trap',
  'mumble rap':                         'Current / Trap',
  'cloud rap':                          'Current / Trap',
  'emo rap':                            'Current / Trap',
  'soundcloud rap':                     'Current / Trap',
  'drill':                              'Current / Trap',
  'uk drill':                           'Current / Trap',
  'southern hip hop':                   'Current / Trap',
  'atlanta rap':                        'Current / Trap',

  // ── Hip-Hop / Rap: West Coast ────────────────────────────────────────────
  'west coast hip hop':                 'West Coast',
  'west coast rap':                     'West Coast',
  'gangsta rap':                        'West Coast',
  'g-funk':                             'West Coast',
  'hyphy':                              'West Coast',
  'bay area hip hop':                   'West Coast',
  'chicano rap':                        'West Coast',

  // ── Hip-Hop / Rap: Conscious / Alternative ───────────────────────────────
  'conscious rap':                      'Conscious / Alternative',
  'underground hip-hop':                'Conscious / Alternative',
  'underground hip hop':                'Conscious / Alternative',
  'underground rap':                    'Conscious / Alternative',
  'alternative hip hop':                'Conscious / Alternative',
  'alternative hip-hop':                'Conscious / Alternative',
  'abstract hip hop':                   'Conscious / Alternative',
  'lo-fi hip hop':                      'Conscious / Alternative',
  'lofi rap':                           'Conscious / Alternative',
  'jazz rap':                           'Conscious / Alternative',
  'jazz hip-hop':                       'Conscious / Alternative',
  'jazz hip hop':                       'Conscious / Alternative',

  // ── Amazing Vocals: Jazz & Soul Powerhouses ───────────────────────────────
  'vocal jazz':                         'Jazz & Soul Powerhouses',
  'jazz vocal':                         'Jazz & Soul Powerhouses',
  'soul vocal':                         'Jazz & Soul Powerhouses',
  'big band':                           'Jazz & Soul Powerhouses',
  'vocal big band':                     'Jazz & Soul Powerhouses',
  'swing':                              'Jazz & Soul Powerhouses',
  'torch song':                         'Jazz & Soul Powerhouses',
  'cabaret':                            'Jazz & Soul Powerhouses',
  'show tunes':                         'Jazz & Soul Powerhouses',

  // ── Amazing Vocals: Intimate Singer-Songwriter ───────────────────────────
  'singer-songwriter':                  'Intimate Singer-Songwriter',
  'singer songwriter':                  'Intimate Singer-Songwriter',
  'folk':                               'Intimate Singer-Songwriter',
  'contemporary folk':                  'Intimate Singer-Songwriter',
  'indie folk':                         'Intimate Singer-Songwriter',
  'freak folk':                         'Intimate Singer-Songwriter',
  'traditional folk':                   'Intimate Singer-Songwriter',
  'folk pop':                           'Intimate Singer-Songwriter',
  'folk rock':                          'Intimate Singer-Songwriter',
  'acoustic folk':                      'Intimate Singer-Songwriter',
  'americana':                          'Intimate Singer-Songwriter',
  'roots':                              'Intimate Singer-Songwriter',
  'country':                            'Intimate Singer-Songwriter',
  'alt-country':                        'Intimate Singer-Songwriter',
  'alt country':                        'Intimate Singer-Songwriter',
  'bluegrass':                          'Intimate Singer-Songwriter',

  // ── Amazing Vocals: Atmospheric / Art Pop ────────────────────────────────
  'atmospheric':                        'Atmospheric / Art Pop',
  'atmospheric pop':                    'Atmospheric / Art Pop',
  'ethereal pop':                       'Atmospheric / Art Pop',
  'ethereal wave':                      'Atmospheric / Art Pop',
  'glam rock':                          'Atmospheric / Art Pop',

  // ── Amazing Vocals: Spoken / Poetic Flow ─────────────────────────────────
  'spoken word':                        'Spoken / Poetic Flow',
  'spoken':                             'Spoken / Poetic Flow',
  'speech':                             'Spoken / Poetic Flow',
  'audiobook':                          'Spoken / Poetic Flow',
  'poetry':                             'Spoken / Poetic Flow',
  'spoken poetry':                      'Spoken / Poetic Flow',
  'comedy':                             'Spoken / Poetic Flow',
  'stand-up':                           'Spoken / Poetic Flow',

};

// eslint-disable-next-line no-control-regex
const GENRE_SPLIT_REGEX = /[,/;&|]|\\\\|\x00/;

/**
 * Returns the canonical sub-category name for a raw genre tag,
 * or null if no alias exists.
 * 🚀 UPGRADE: Now aggressively splits dirty genre tags (e.g. "Rock, Pop", "Alternative/Indie", "Techno (Peak Time / Driving)")
 * handling modern null-bytes, double backslashes, pipes, and traditional delimiters.
 */
export function resolveAlias(rawGenre: string): string | null {
  if (!rawGenre) { return null; }

  // NFC-normalize: NFD-encoded tags (é as e+combining accent) never match the
  // NFC-encoded alias keys otherwise — see lookupArtist for the full rationale.
  const cleanRaw = rawGenre.normalize('NFC').toLowerCase().trim();

  // 1. Try a direct match first (fastest path for clean tags like 'rock' or exact Beatport strings)
  if (ALIAS_MAP[cleanRaw]) {
    return ALIAS_MAP[cleanRaw];
  }

  // 2. If it failed, split the string by common delimiters (commas, slashes, semicolons, pipes, null-bytes)
  const tokens = cleanRaw
    .split(GENRE_SPLIT_REGEX)
    .map(t => t.trim())
    .filter(t => t.length > 0);

  // 3. Check each extracted chunk against the map. First match wins.
  for (const token of tokens) {
    if (ALIAS_MAP[token]) {
      return ALIAS_MAP[token];
    }
  }

  // 4. No alias found. It falls through to the 'Unmatched' quarantine.
  return null;
}
