import type { Pillar } from '../types.js';

export const rock: Pillar = {
  name: 'Rock',
  subCategories: {
    'Alternative / Indie': {
      'Radiohead': {
        bio: 'The defining art-rock band of the modern era, whose evolution from 90s guitar anthems to glitchy, electronic masterpieces set the standard for high-fidelity experimentation.',
        aliases: ['Radio Head', 'Radiohead.'],
      },

      'The Strokes': {
        bio: 'The razor-sharp, interlocking guitar architects of the early-2000s New York post-punk revival, whose debut remains a masterclass in compressed, stylish rock.',
        aliases: ['Strokes', 'The Strokes.'],
      },

      'Arctic Monkeys': {
        bio: "Sheffield's sharpest lyricist and his band, evolving from blistering garage rock to sophisticated, cinematic lounge-pop with meticulous studio detailing.",
        aliases: ['arctic monkeys.', 'arcticmonkeys', 'alex turner'],
      },

      'The Killers': {
        bio: "Las Vegas synth-rock titans whose stadium-sized hooks and neon-lit Americana made 'Hot Fuss' and 'Sam\\'s Town' defining alt-rock records of the 2000s.",
        aliases: ['the killers.', 'thekillers', 'brandon flowers'],
      },

      'Bon Iver': {
        bio: "Justin Vernon's project shifted from stark, cabin-in-the-woods folk to lush, vocoder-drenched electronic art-pop, influencing an entire generation of indie and R&B.",
        aliases: ['Justin Vernon', 'bon iver.'],
      },

      'Oasis': {
        bio: 'The titanic, swaggering kings of Britpop whose Beatlesque melodies, wall-of-sound mastering, and massive stadium anthems defined 1990s UK rock.',
        aliases: ['Oasis (Band)', 'Oasis.', 'noel gallagher', 'liam gallagher'],
      },

      'Sigur Rós': {
        bio: 'Icelandic post-rock visionaries whose glacial, bowed-guitar crescendos and invented language create overwhelming, cinematic, and audiophile-grade soundscapes.',
        aliases: ['Sigur Ros', 'Sigur-Ros', 'sigur ros.', 'jónsi'],
      },

      'Animal Collective': {
        bio: 'Psychedelic experimentalists whose sample-heavy, fractured pop pushed 2000s indie rock into wildly inventive electronic territory.',
        aliases: ['AnCo', 'Animal Coll.', 'animal collective.', 'panda bear', 'avey tare'],
      },

      'Nirvana': {
        bio: "The band that broke the underground into the mainstream; Kurt Cobain's melodic genius masked by Steve Albini and Butch Vig's raw, visceral production.",
        aliases: ['Nirvana (Band)', 'Nirvana.', 'Kurt Cobain'],
      },

      'Gustavo Cerati': {
        bio: 'A genius of Latin American rock whose solo work seamlessly integrated sophisticated electronic textures, shoegaze, and art-pop into his peerless guitar playing.',
        aliases: ['Cerati', 'G. Cerati', 'Gustavo Cerati.'],
      },

      'My Bloody Valentine': {
        bio: "The absolute pinnacle of shoegaze; Kevin Shields's 'Loveless' is a studio masterpiece of frequency manipulation, glide-guitar, and reverse reverb.",
        aliases: ['MBV', 'm.b.v.', 'my bloody valentine.', 'mybloodyvalentine', 'kevin shields'],
      },

      'Pixies': {
        bio: 'The loud-quiet-loud architects of alternative rock whose surreal lyrics and jagged basslines directly laid the blueprint for Nirvana and the 90s alt boom.',
        aliases: ['The Pixies', 'pixies.', 'pixies (band)', 'pixxies', 'black francis', 'frank black'],
      },

      'Arcade Fire': {
        bio: "Montreal's indie-rock collective whose soaring, orchestral anthems on 'Funeral' defined the emotive, baroque-pop sound of 2000s indie.",
        aliases: ['arcadefire', 'The Arcade Fire', 'arcade fire.', 'arcade fyre', 'win butler'],
      },

      'Soda Stereo': {
        bio: 'The most influential band in Rock en Español history, constantly pushing sonic boundaries from post-punk into lush, delay-soaked alternative rock.',
        aliases: ['soda estereo', 'soda stereo.', 'sodastereo', 'soda stéreo'],
      },

      'Elliott Smith': {
        bio: 'The patron saint of lo-fi indie folk whose intricate, Beatles-influenced fingerpicking and double-tracked whispers remain devastatingly intimate.',
        aliases: ['elliot smith', 'eliot smith', 'elliottsmith', 'E. Smith'],
      },

      'Neutral Milk Hotel': {
        bio: "Jeff Mangum's fuzz-folk opus 'In the Aeroplane Over the Sea' is the definitive indie-rock cult album, blending raw acoustic strumming with singing saws and tape collage.",
        aliases: ['NMH', 'n.m.h.', 'neutral milk hotel.', 'neutralmilkhotel', 'jeff mangum'],
      },

      'The National': {
        bio: "Master purveyors of melancholic, rhythmically complex chamber-rock, led by Matt Berninger's bourbon-soaked baritone and the Dessner brothers' intricate orchestrations.",
        aliases: ['national', 'thenational', 'the national (band)', 'matt berninger'],
      },

      'Slowdive': {
        bio: "Shoegaze legends whose delay-drenched, ethereal soundscapes on 'Souvlaki' were resurrected decades later, proving their atmospheric mastery was timeless.",
        aliases: ['slowdive.', 'slow dive', 'slowdve', 'neil halstead'],
      },

      'Built to Spill': {
        bio: "Doug Martsch's twisting, melodic guitar heroics proved that indie rock could embrace massive, Neil Young-style solos without losing its slacker charm.",
        aliases: ['builttospill', 'doug martsch', 'built to spill.'],
      },

      'Deerhunter': {
        bio: "Bradford Cox's ambient-punk project merges shimmering dream-pop with abrasive garage rock, creating a uniquely hazy, hypnotic catalog.",
        aliases: ['deerhunter.', 'deer hunter', 'bradford cox'],
      },

      'Yo La Tengo': {
        bio: "The ultimate critic's band; a perpetually evolving Hoboken trio capable of ear-splitting feedback, bossa nova, and the most delicate indie-pop imaginable.",
        aliases: ['yo la tengo.', 'yolatengo', 'yo la tango'],
      },

      'Pavement': {
        bio: 'Definitive 90s lo-fi indie rock band whose slacker aesthetic and off-kilter songwriting directly influenced The Strokes, Built to Spill, and countless others.',
        aliases: ['pavement.', 'pavement (band)', 'pvmt', 'stephen malkmus', 's. malkmus', 'malkmus'],
      },

      'Sonic Youth': {
        bio: 'Noise rock and art-rock pioneers who bridged the underground and mainstream, paving the way for Nirvana, Pixies, and virtually every alternative act that followed.',
        aliases: ['sonic youth.', 'sonicyouth', 'sonic youth (band)', 'sonic yoth', 'thurston moore', 'lee ranaldo'],
      },

      'Modest Mouse': {
        bio: 'Angular, emotionally volatile Pacific Northwest indie rock that shares DNA with Built to Spill and Pixies in its dynamic extremes and literary lyricism.',
        aliases: ['modest mouse.', 'modestmouse', 'modest mouse (band)', 'modestt mouse', 'isaac brock', 'i. brock'],
      },

      'Sufjan Stevens': {
        bio: "Boundary-dissolving indie folk and art-pop auteur whose orchestral intimacy connects Elliott Smith's confessionalism to Bon Iver's sonic ambition.",
        aliases: ['sufjan stevens.', 'sufjan', 'suffjan stevens', 'sufjan stephens', 'sufjian stevens', 's. stevens', 'sufjanstevens'],
      },

      'Grizzly Bear': {
        bio: "Harmonically rich chamber-indie that sits precisely at the intersection of Radiohead's experimentalism and Animal Collective's textural adventurousness.",
        aliases: ['grizzly bear.', 'grizzlybear', 'grizzley bear', 'grizzy bear', 'grizzly bear (band)', 'ed droste', 'daniel rossen'],
      },

      'The Jesus and Mary Chain': {
        bio: 'Noise-pop architects whose feedback-drenched melodies directly birthed shoegaze and remain foundational to understanding My Bloody Valentine and Slowdive.',
        aliases: ['jesus and mary chain', 'jesus & mary chain', 'jamc', 'j.a.m.c.', 'the jesus & mary chain', 'tjmc', 'reid brothers'],
      },

      'Café Tacvba': {
        bio: "Mexico's most adventurous alternative rock band, whose genre-bending experimentation mirrors Soda Stereo's boundary-pushing role in Latin American indie.",
        aliases: ['cafe tacvba', 'cafe tacuba', 'café tacuba', 'cafetacvba', 'cafe tacvba.', 'caifanes tacvba', 'tacvba', 'tacuba'],
      },

      'Dinosaur Jr.': {
        bio: 'Ear-splitting melodic noise rock pioneers whose fusion of punk volume and pop songwriting profoundly shaped Nirvana, Pixies, and the entire 90s alternative movement.',
        aliases: ['dinosaur jr', 'dinosaur junior', 'dinosaurjr', 'dino jr', 'dino jr.', 'dinosaur j.r.', 'j mascis', 'j. mascis'],
      },

      'Stereolab': {
        bio: 'Cult art-rock collective blending motorik krautrock, lounge pop, and Marxist theory into a singular sound beloved by fans of Yo La Tengo and Animal Collective.',
        aliases: ['stereolab.', 'stereo lab', 'stereolab (band)', 'stéreolab', 'laetitia sadier', 'l. sadier'],
      },

      'Guided by Voices': {
        bio: 'Legendarily prolific lo-fi indie band whose four-track pop gems and DIY ethos make them foundational to the same underground that produced Pavement.',
        aliases: ['guided by voices.', 'guidedbyvoices', 'gbv', 'g.b.v.', 'guided by voises', 'robert pollard', 'bob pollard', 'r. pollard'],
      },

      'The Smiths': {
        bio: 'Foundational indie and alternative band whose jangly guitars and literate melancholy are a direct ancestor of Radiohead, Oasis, and The National.',
        aliases: ['smiths', 'thesmiths', 'the smiths.', 'the smiths (band)', 'morrissey and marr', 'smiths.'],
      },

      'Sparklehorse': {
        bio: 'Tragically undersung lo-fi visionary whose fragile, tape-damaged beauty places him in the same rarefied emotional space as Elliott Smith.',
        aliases: ['sparklehorse.', 'sparkle horse', 'spark horse', 'sparklhorse', 'mark linkous', 'm. linkous'],
      },

      'The Microphones': {
        bio: "Phil Elverum's lo-fi masterwork The Glow Pt. 2 is a touchstone of raw, experimental indie folk revered alongside Neutral Milk Hotel.",
        aliases: ['microphones', 'themicrophones', 'the microphones.', 'mount eerie', 'mounteerie', 'mt. eerie', 'phil elverum', 'p. elverum'],
      },

      'Broadcast': {
        bio: "Cult hauntological indie band whose vintage-electronic textures and spectral pop sensibility bridges Stereolab's experimentalism with Cocteau Twins' otherworldliness.",
        aliases: ['broadcast.', 'broadcast (band)', 'broadcst', 'trish keenan'],
      },

      'Silver Jews': {
        bio: "David Berman's lo-fi indie project was intimately connected to Pavement's Stephen Malkmus and represents the same slacker-poetic lineage.",
        aliases: ['silver jews.', 'silverjews', 'silver joos', 'the silver jews', 'david berman', 'd. berman', 'david berman (silver jews)', 'dcb'],
      },

      'Songs: Ohia': {
        bio: "Jason Molina's devastating, sparse songwriting shares the bruised emotional core of Elliott Smith and Sparklehorse.",
        aliases: ['songs ohia', 'songs:ohia', 'songsohia', 'songs: ohia.', 'jason molina', 'j. molina', 'songs of ohia', 'magnolia electric co', 'magnolia electric co.', 'magnolia electric company'],
      },

      'Red House Painters': {
        bio: "Slowcore pioneers whose aching, extended compositions parallel the desolate beauty of Talk Talk's later work.",
        aliases: ['red house painters.', 'redhousepainters', 'rhp', 'r.h.p.', 'red house painters (band)', 'mark kozelek', 'm. kozelek', 'sun kil moon', 'sunkillmoon', 'sun kill moon'],
      },

      'Fleet Foxes': {
        bio: 'Lush harmonic indie folk that extends the lineage of Bon Iver and Sufjan Stevens with baroque, reverb-drenched arrangements.',
        aliases: ['fleet foxes.', 'fleetfoxes', 'fleet foxs', 'fleet foxes (band)', 'robin pecknold', 'r. pecknold'],
      },

      'Low': {
        bio: "Slowcore architects whose patient, near-silent dynamics share the hushed intensity of Talk Talk's Spirit of Eden era.",
        aliases: ['low.', 'low (band)', 'low band', 'low (duluth)', 'alan sparhawk', 'a. sparhawk', 'mimi parker'],
      },

      'Television': {
        bio: 'Marquee Moon is a foundational text for alternative guitar music, directly informing the interlocking guitar aesthetics of Sonic Youth and The Strokes.',
        aliases: ['television.', 'television (band)', 'televison', 'tom verlaine', 't. verlaine', 'richard lloyd'],
      },

      'Spiritualized': {
        bio: 'Space-rock visionaries whose maximalist gospel-drone epics parallel Sigur Rós and Mogwai while rooted in Velvet Underground minimalism.',
        aliases: ['spiritualized.', 'spiritualised', 'spiritualized (band)', 'spirtiualized', 'jason pierce', 'j. pierce', 'j spaceman', 'jason spaceman', 'spacemen 3'],
      },

      'Mogwai': {
        bio: "Scottish post-rock titans whose quiet-loud dynamics and cinematic instrumental grandeur share Sigur Rós's sense of patient emotional devastation.",
        aliases: ['mogwai.', 'mogwai (band)', 'mogwi', 'mogwai band', 'stuart braithwaite', 's. braithwaite'],
      },

      'The Flaming Lips': {
        bio: "Psychedelic experimentalists whose arc from noise-rock to orchestral grandeur mirrors Radiohead's and Animal Collective's trajectories.",
        aliases: ['flaming lips', 'flaming lips.', 'theflaminglips', 'flamming lips', 'the flaming lips.', 'flaming lipps', 'wayne coyne', 'w. coyne', 'steven drozd'],
      },

      'Wilco': {
        bio: 'Yankee Hotel Foxtrot-era Wilco embodies the same restless genre deconstruction as Radiohead, melding alt-country roots with noise and avant-garde textures.',
        aliases: ['wilco.', 'wilco (band)', 'willco', 'wlco', 'jeff tweedy', 'j. tweedy', 'tweedy'],
      },

      'Caifanes': {
        bio: 'Foundational Mexican alternative rock band whose dark post-punk aesthetic is inseparable from the Latin American rock tradition.',
        aliases: ['caifanes.', 'caifanes (band)', 'caiphanes', 'los caifanes', 'jaguares', 'jaguares.', 'saul hernandez', 'saúl hernández', 's. hernandez'],
      },

      'Hüsker Dü': {
        bio: 'Alt-rock architects who fused hardcore punk velocity with melodic songwriting, directly paving the way for Pixies and Nirvana.',
        aliases: ['husker du', 'husker dü', 'hüsker du', 'huskerdu', 'husker du.', 'hüsker dü.', 'huker du', 'bob mould', 'b. mould', 'grant hart'],
      },

      'The Replacements': {
        bio: 'Ragged, heartfelt college-rock pioneers whose sloppy sincerity established the emotional vocabulary used by Pavement and Modest Mouse.',
        aliases: ['replacements', 'the replacements.', 'thereplacements', 'the replacments', 'the replacemnts', 'the \'mats', 'paul westerberg', 'p. westerberg'],
      },

      'Cat Power': {
        bio: "Chan Marshall's raw, skeletal indie folk-blues shares the devastating intimacy and lo-fi vulnerability of Elliott Smith.",
        aliases: ['cat power.', 'catpower', 'cat power (band)', 'cat pawer', 'chan marshall', 'chan marshall.', 'charlyn marshall', 'c. marshall'],
      },

      'Big Thief': {
        bio: "Modern torchbearers of the raw, emotionally unguarded indie tradition, now widely regarded as this generation's essential indie band.",
        aliases: ['big thief.', 'bigthief', 'big theif', 'big thief (band)', 'adrianne lenker', 'a. lenker', 'adrianne lenker.', 'adriane lenker', 'buck meek'],
      },

      'Bill Callahan': {
        bio: 'As Smog and under his own name, his stark, literary songwriting is a spiritual sibling to Silver Jews and Songs: Ohia.',
        aliases: ['bill callahan.', 'billcallahan', 'b. callahan', 'smog', 'smog.', 'smog (band)', '(smog)', 'bill callahan (smog)', 'bill calahan', 'bill callihan'],
      },

      'Bonnie "Prince" Billy': {
        bio: "Will Oldham's many-named project is inseparable from the Songs: Ohia and Silver Jews world of raw Americana-tinged indie.",
        aliases: ['bonnie prince billy', 'bonnie prince billy.', 'bonnieprinцebilly', 'bonnieprinцe billy', 'will oldham', 'w. oldham', 'palace music', 'palace brothers', 'palace', 'palace songs', 'bonny prince billy', 'bonnie prince billie', 'bpb', 'bonnie \'prince\' billy'],
      },

      'The Breeders': {
        bio: "Kim Deal's band bridged Pixies' noise-pop with 90s alternative rock and remains a touchstone for indie guitar music.",
        aliases: ['breeders', 'the breeders.', 'thebreeders', 'the breeders (band)', 'the breeders band', 'breeders.', 'the breders', 'kim deal', 'k. deal', 'kelley deal'],
      },

      'Sleater-Kinney': {
        bio: 'One of the most critically revered indie rock bands of the 90s–2000s, combining punk ferocity with sophisticated songwriting.',
        aliases: ['sleater kinney', 'sleaterkinney', 'sleater-kinney.', 'sleater-kinny', 'slater-kinney', 'slater kinney', 'sleater kinny', 's-k', 'sk', 'carrie brownstein', 'corin tucker', 'c. brownstein'],
      },

      'American Football': {
        bio: 'Their self-titled debut became a cult cornerstone of indie/emo crossover, influencing the atmospheric sensitivity of modern indie.',
        aliases: ['american football.', 'americanfootball', 'american football (band)', 'americ anfootball', 'american footbal', 'amerikan football', 'af (band)', 'mike kinsella', 'm. kinsella'],
      },

      'Mercury Rev': {
        bio: "Psychedelic art-rock collaborators with The Flaming Lips whose Deserter's Songs is a touchstone of late-90s orchestral indie.",
        aliases: ['mercury rev.', 'mercuryrev', 'mercury rev (band)', 'mercurey rev', 'murcury rev', 'jonathan donahue', 'j. donahue'],
      },

      'Unwound': {
        bio: 'Tumwater post-hardcore band whose late-career art-noise experiments on Leaves Turn Inside You rival anything by Sonic Youth.',
        aliases: ['unwound.', 'unwound (band)', 'un wound', 'unwound band', 'unwond', 'unwoond', 'justin trosper', 'j. trosper'],
      },

      'Sebadoh': {
        bio: "Lou Barlow's lo-fi indie project was foundational to 90s underground rock alongside Dinosaur Jr. and Pavement.",
        aliases: ['sebadoh.', 'sebadoh (band)', 'seabdoh', 'sebadho', 'lou barlow', 'l. barlow', 'lou barlow (sebadoh)', 'sebado'],
      },

      'Angel Olsen': {
        bio: 'Her voice and songwriting span stark folk and lush indie rock, placing her squarely in the lineage of Cat Power and Big Thief.',
        aliases: ['angel olsen.', 'angelolsen', 'angel olson', 'angel olssen', 'a. olsen', 'angle olsen', 'angel olsem'],
      },

      'Duster': {
        bio: 'Cult lo-fi slowcore trio whose hazy, minimalist sound is a natural companion to Sparklehorse, Codeine, and early Mount Eerie.',
        aliases: ['duster.', 'duster (band)', 'duster band', 'dustre', 'clay parton', 'c. parton', 'canaan dove amber'],
      },

      'Codeine': {
        bio: 'Pioneering slowcore band whose glacial intensity directly spawned the aesthetic of Low and Red House Painters.',
        aliases: ['codeine.', 'codeine (band)', 'codiene', 'codeine band', 'codine', 'codeine (indie)', 'chris brokaw', 'c. brokaw'],
      },

      'R.E.M.': {
        bio: 'Arguably the single most important band in defining American alternative/indie, from Murmur to Automatic for the People they drew the map.',
        aliases: ['rem', 'r.e.m', 'r e m', 'rem.', 'r.e.m. (band)', 'rem band', 'michael stipe', 'peter buck', 'mike mills', 'rém'],
      },

      'Blur': {
        bio: "Britpop's most restlessly experimental pillar, evolving from Parklife pop to art-rock masterpieces.",
        aliases: ['blur.', 'blur (band)', 'blur band', 'blurr', 'damon albarn blur', 'damon albarn', 'd. albarn', 'bluur', 'blur uk'],
      },

      'Pulp': {
        bio: "Jarvis Cocker's decade of obscurity before Different Class makes them the ultimate cult-to-triumph story, and their class-conscious art-pop remains untouchable.",
        aliases: ['pulp.', 'pulp (band)', 'pulp band', 'pulp uk', 'jarvis cocker', 'j. cocker', 'jarvis cocker pulp'],
      },

      'Suede': {
        bio: 'Dog Man Star is one of the greatest British rock albums ever made, launching Britpop with an androgynous glam-meets-Smiths aesthetic.',
        aliases: ['suede.', 'suede (band)', 'suede band', 'suede uk', 'the london suede', 'london suede', 'brett anderson', 'brett anderson suede', 'sued', 'suéde'],
      },

      'The Stone Roses': {
        bio: 'Their self-titled debut fused psychedelia, dance, and jangle into a blueprint that seeded both Britpop and the entire Madchester moment.',
        aliases: ['stone roses', 'stoneroses', 'the stone roses.', 'thestoneroses', 'stone roses.', 'the stone rosses', 'the stone rose', 'ian brown', 'john squire', 'stone roses band'],
      },

      'The Verve': {
        bio: 'Before Bittersweet Symphony overshadowed everything, A Storm in Heaven was one of the most ambitious shoegaze-into-psychedelia records of the early nineties.',
        aliases: ['verve', 'the verve.', 'theverve', 'the verve (band)', 'verve.', 'the verv', 'richard ashcroft', 'r. ashcroft', 'richard ashcroft verve'],
      },

      'Interpol': {
        bio: 'Turn On the Bright Lights crystallized the early-2000s post-punk revival into something genuinely haunting and architecturally precise.',
        aliases: ['interpol.', 'interpol (band)', 'interpol band', 'interpol nyc', 'interpl', 'paul banks', 'paul banks interpol', 'intrpol', 'interpole'],
      },

      'Spoon': {
        bio: 'The most consistently excellent American indie rock band of the 21st century, with a minimalist economy of arrangement that rewards obsessive relistening.',
        aliases: ['spoon.', 'spoon (band)', 'spoon band', 'spoon austin', 'spooon', 'britt daniel', 'britt daniel spoon', 'b. daniel', 'spoon tx'],
      },

      'Superchunk': {
        bio: 'As a band and through Merge Records, Mac McCaughan built one of the foundational institutions of American indie.',
        aliases: ['superchunk.', 'super chunk', 'superchunk (band)', 'superchunk band', 'super-chunk', 'mac mccaughan', 'mac mccaughan superchunk', 'superchuk', 'superchunc'],
      },

      'Archers of Loaf': {
        bio: 'Icky Mettle is one of the most perfectly chaotic indie rock records of the nineties, an anti-careerist favorite.',
        aliases: ['archers of loaf.', 'archersofloaf', 'archers of loaf (band)', 'archers of loaf band', 'the archers of loaf', 'archers of loaff', 'eric bachmann', 'e. bachmann', 'aol band'],
      },

      'Teenage Fanclub': {
        bio: "Bandwagonesque proved that power-pop melody and indie noise weren't mutually exclusive, earning devotion from Big Star disciples.",
        aliases: ['teenage fanclub.', 'teenagefanclub', 'teenage fanclub (band)', 'teenage fan club', 'tfc', 't.f.c.', 'teenage fanclub band', 'teenage fancclub', 'teenagefanclub.', 'norman blake teenage fanclub'],
      },

      'Throwing Muses': {
        bio: "Kristin Hersh's fractured songwriting made them the first American band signed to 4AD, pre-dating the alt-rock explosion.",
        aliases: ['throwing muses.', 'throwingmuses', 'throwing muses (band)', 'throwing muses band', 'throwing-muses', 'throwing musses', 'kristin hersh', 'k. hersh', 'tanya donelly throwing muses', 'throwing muzes'],
      },

      'The Go-Betweens': {
        bio: "Australia's greatest indie band wrote some of the most literate, emotionally devastating guitar pop of the 1980s.",
        aliases: ['go-betweens', 'the go betweens', 'go betweens', 'thegobetweens', 'the go-betweens.', 'go-betweens.', 'gobetweens', 'robert forster grant mclennan', 'robert forster', 'grant mclennan', 'the go betweens band'],
      },

      'The Clean': {
        bio: 'The foundational Flying Nun band whose lo-fi jangle essentially invented the Dunedin Sound.',
        aliases: ['clean', 'the clean.', 'theclean', 'the clean (band)', 'the clean band', 'the clean nz', 'the clean new zealand', 'david kilgour', 'd. kilgour', 'the cleen'],
      },

      'The Chills': {
        bio: "Martin Phillipps' shimmering, melancholic pop is the pinnacle of the Dunedin Sound's bittersweet genius.",
        aliases: ['chills', 'the chills.', 'thechills', 'the chills (band)', 'the chills band', 'the chills nz', 'martin phillipps', 'martin phillips', 'the chills new zealand', 'the chils'],
      },

      'The Wedding Present': {
        bio: "David Gedge's relentless, jangling romanticism made them C86 royalty; their work with Steve Albini remains a devastating alt-rock landmark.",
        aliases: ['wedding present', 'the wedding present.', 'theweddingpresent', 'weddingpresent', 'the wedding present (band)', 'twp', 't.w.p.', 'david gedge', 'd. gedge', 'the wedding present band', 'the weding present'],
      },

      'Hum': {
        bio: 'Titanic, effects-drenched guitar grandeur that influenced every heavy shoegaze and space-rock band that followed.',
        aliases: ['hum.', 'hum (band)', 'hum band', 'hum champaign', 'hum illinois', 'hum rock', 'matt talbott', 'matt talbott hum', 'humm', 'h.u.m.'],
      },

      'Failure': {
        bio: 'Fantastic Planet is one of the most sonically ambitious alternative rock albums of the nineties, a swirling production masterpiece.',
        aliases: ['failure.', 'failure (band)', 'failure band', 'failure la', 'failure los angeles', 'failur', 'faliure', 'ken andrews', 'ken andrews failure', 'failure rock'],
      },

      'Boris': {
        bio: 'Endlessly prolific and genre-fluid, they collapse drone, shoegaze, stoner metal, noise, and pop into a singular vision.',
        aliases: ['boris.', 'boris (band)', 'boris band', 'boris japan', 'boris (japan)', 'borris', 'boris japanese', 'ボリス', 'boris tokyo', 'boris heavy'],
      },

      'Fishmans': {
        bio: 'Their dub-inflected dream pop represents a uniquely Japanese psychedelic lineage, with live recordings revered by collectors.',
        aliases: ['fishmans.', 'fishmans (band)', 'fishmans band', 'fishmans japan', 'fish mans', 'fishman', 'フィッシュマンズ', 'fishmans japanese', 'shinji sato fishmans'],
      },

      'The Olivia Tremor Control': {
        bio: 'The other towering Elephant 6 band alongside Neutral Milk Hotel, whose Black Foliage is a densely layered musique concrète pop masterpiece.',
        aliases: ['olivia tremor control', 'the olivia tremor control.', 'theoliviatremorcontrol', 'otc', 'o.t.c.', 'olivia tremor control.', 'the olivia tremor controll', 'oliviatremorcontrol', 'bill doss', 'will cullen hart', 'the olivia tremor control (band)'],
      },

      'Bedhead': {
        bio: 'Perfected a hushed, interlocking-guitar slowcore that was the quiet inverse of nineties loud-rock.',
        aliases: ['bedhead.', 'bedhead (band)', 'bedhead band', 'bed head', 'bed-head', 'bedhead texas', 'the kadane brothers', 'matt kadane', 'bubba kadane', 'bedhed'],
      },

      'The Sea and Cake': {
        bio: "Sam Prekop's bossa-nova-tinged post-rock is an elegant, essential bridge between jazz and indie on the Thrill Jockey axis.",
        aliases: ['sea and cake', 'the sea and cake.', 'theseaandcake', 'sea and cake.', 'the sea & cake', 'sea & cake', 'the sea and cake (band)', 'the sea and cake band', 'sam prekop', 's. prekop', 'sea and the cake'],
      },

      'Parquet Courts': {
        bio: 'Wide Awake! and Human Performance proved that literate, wiry post-punk-meets-slacker-rock still has urgent things to say.',
        aliases: ['parquet courts.', 'parquetcourts', 'parquet courts (band)', 'parquet courts band', 'parquet-courts', 'andrew savage', 'a. savage', 'parkay quarts', 'parquet courts nyc', 'parquet courts brooklyn'],
      },

      'black midi': {
        bio: 'The most ferociously inventive band to emerge from the 2020s London scene, collapsing math rock, prog, noise, and jazz.',
        aliases: ['black midi.', 'blackmidi', 'black midi (band)', 'black midi band', 'black-midi', 'blk midi', 'black midi london', 'geordie greep', 'geordie greep black midi', 'blac midi', 'bm'],
      },

      'Beck': {
        bio: "The ultimate lo-fi slacker savant who evolved into an eclectic, sample-heavy genius and one of alt-rock's most vital solo artists.",
        aliases: ['Beck Hansen', 'Beck.', 'Beck (Artist)', 'beck hansen.'],
      },

      'The War on Drugs': {
        bio: 'Philadelphia indie-rock act crafting sprawling, guitar-heavy, melancholic yet melodic soundscapes since the 2000s.',
        aliases: [],
      },

      'Death Cab for Cutie': {
        bio: 'Bellingham indie-rock stalwarts known for introspective, guitar-led songs navigating heartache and introspection.',
        aliases: [],
      },

      'Car Seat Headrest': {
        bio: 'Lo-fi indie-rock project fronted by Will Toledo, channeling raw, angsty, guitar-driven energy with confessional lyrics.',
        aliases: [],
      },

      'Turnstile': {
        bio: 'Baltimore hardcore-punk act folding melodic hooks and raw guitar power into accessible, genre-blurring alt-rock.',
        aliases: [],
      },

      'PJ Harvey': {
        bio: 'British alt-rock artist whose guitar-heavy, moody, melodic output has anchored her outside-mainstream career since the \'90s.',
        aliases: [],
      },

      'Tame Impala': {
        bio: 'Australian psych-rock project crafting lush, guitar-heavy, melodic soundscapes with a distinctly introspective and cinematic feel.',
        aliases: [],
      },

      'Mac DeMarco': {
        bio: 'Canadian singer-songwriter whose lo-fi, jangly indie rock is beloved for its laid-back, melodic, and raw emotional honesty.',
        aliases: [],
      },

      'Mclusky': {
        bio: 'Welsh post-hardcore/noise-rock trio—not exactly melodic/introspective; skip.',
        aliases: [],
      },

      'Ovlov': {
        bio: 'US indie rock band with fuzzy, distorted guitars, grunge-tinged melodies, and a raw, lo-fi, introspective energy.',
        aliases: [],
      },

      'Buffalo Tom': {
        bio: 'Boston alt-rock trio fusing Dinosaur Jr.\'s guitar rawness with tender, melodic songwriting — a cornerstone of \'90s indie rock.',
        aliases: [],
      },

      'Lemonheads': {
        bio: 'Evan Dando\'s hook-laden, fuzzy guitar pop — a leading light of early-\'90s alternative rock\'s melodic, angst-tinged wing.',
        aliases: ['The Lemonheads'],
      },

      'Supergrass': {
        bio: 'Britpop-era quintet with punchy, melodic guitar rock and youthful energy, straddling indie and mainstream with three-minute gems.',
        aliases: [],
      },

      'Wolf Alice': {
        bio: 'North London alt-rock act shifting between grungey rawness and dreamy melodicism, capturing moody, guitar-led introspection.',
        aliases: [],
      },

      'The Wrens': {
        bio: 'New Jersey indie-rock quartet whose meticulous, emotionally frayed albums like \'The Meadowlands\' define introspective, guitar-driven alt-rock.',
        aliases: [],
      },

      'Pinback': {
        bio: 'San Diego duo crafting precise, melodic, subtly angsty indie rock characterized by intertwining bass and restrained vocals.',
        aliases: [],
      },

      'The Walkmen': {
        bio: 'New York band known for bruised, reverb-heavy guitars and ragged vocal urgency, making a lasting mark on 2000s indie.',
        aliases: [],
      },

      'Grandaddy': {
        bio: 'Modesto lo-fi indie rockers blending fuzzy keyboards and melancholic, melodic songwriting about technology and isolation.',
        aliases: [],
      },

      'Minus the Bear': {
        bio: 'Seattle math-rock/indie act known for intricate, polished guitar lines and danceable, rhythmic melodies in the mid-2000s.',
        aliases: ['MTB'],
      },

      'Cloakroom': {
        bio: 'Indiana trio melting dreamy shoegaze textures into dense, metallic guitar sludge with a deeply melodic, brooding core.',
        aliases: [],
      },

      'The Charlatans': {
        bio: 'Madchester indie-rock mainstays whose Hammond-organ and guitar grooves carried a moody, melodic britpop swagger.',
        aliases: ['Charlatans'],
      },

      'Manchester Orchestra': {
        bio: 'Emotive, guitar-forward indie-rock band from the 2000s, blending anthemic choruses with raw, confessional narratives.',
        aliases: [],
      },

      'The Twilight Sad': {
        bio: 'Scottish indie-rock band known for sweeping, textured guitars and brooding, melodic vocals.',
        aliases: ['Twilight Sad'],
      },

      'Pile': {
        bio: 'Independent rock band from Boston mixing jagged, intricate guitar work with sharp, strained vocals and raw emotional heft.',
        aliases: [],
      },

      'The Helio Sequence': {
        bio: 'Portland duo crafting moody, melodic indie-rock with lush synth-and-guitar textures and introspective drive.',
        aliases: [],
      },

      'Weezer': {
        bio: 'Geeky, melodic guitar rock pioneers whose blue album and Pinkerton defined \'90s alt-rock introspection and raw outsider energy.',
        aliases: ['Weezer'],
      },

      'Sunny Day Real Estate': {
        bio: 'Quarterbred pioneers of \'90s emo-tinged alt-rock, layering intricate guitar work with raw, angsty, melodic vocals.',
        aliases: ['Sunny Day Real Estate'],
      },

      'The Lemon Pipers': {
        bio: 'Late-\'60s psych-pop act with jangly guitar hooks and a moody, melodic sound that foreshadowed indie-rock sensibilities.',
        aliases: ['The Lemon Pipers'],
      },

      'Mourn': {
        bio: 'Spanish post-punk/indie-rock quartet with raw, angsty, and jagged guitar riffs; fits the \'moody and melodic\' brief.',
        aliases: [],
      },

      'Autolux': {
        bio: 'LA-based art-rock/alt band; textured, dissonant guitar layers, moody and raw, bridging Sonic Youth and Radiohead.',
        aliases: [],
      },

      'Japandroids': {
        bio: 'Canadian duo blending raw garage-punk energy with anthemic, singalong indie-rock choruses across late-2000s and 2010s releases.',
        aliases: ['Japandroids'],
      },

      'The Dresden Dolls': {
        bio: 'Boston-based piano-rock duo with vaudevillian punk theatrics, blending cabaret melodies with darker alternative-rock undercurrents since the early 2000s.',
        aliases: [],
      },

      'The Dismemberment Plan': {
        bio: 'Washington D.C. post-punk/indie-rock quartet famed for rhythmic complexity, quirky structures, and the influential 1999 LP \'Emergency & I\' from the \'90s-2000s.',
        aliases: [],
      },

      'Band of Horses': {
        bio: 'American indie-rock group specializing in reverb-heavy, melodic guitar rock that channels the Pacific Northwest and hints of alt-country.',
        aliases: [],
      },

      'Cage the Elephant': {
        bio: 'Kentucky-born anthemic indie garage-rock band blending garage, blues, and psych-rock with moody alt-rock energy across the 2000s-2010s.',
        aliases: [],
      },

      'My Morning Jacket': {
        bio: 'American rockers whose sprawling, reverb-soaked guitar epics and Southern gothic lyrics center on moody, introspective melodicism.',
        aliases: [],
      },

      'Teenage Cool Kids': {
        bio: 'Texas indie-rock project blending lo-fi emo and melodic guitar pop, resonant with 2000s-2010s DIY scenes.',
        aliases: [],
      },

      'Radiator Hospital': {
        bio: 'Philadelphia indie-rock group delivering raw, melodic guitar pop with a lo-fi, introspective edge since the 2010s.',
        aliases: [],
      },

      'P.S. Eliot': {
        bio: 'Alabama-bred indie-rock quartet with angsty, melodic guitar-driven songs, a cornerstone of 2000s underground scenes.',
        aliases: [],
      },

      'The Districts': {
        bio: 'Pennsylvania rock quartet known for raw, garage-influenced indie rock with angsty, melodic vocals and driving guitar work.',
        aliases: [],
      },

      'Militarie Gun': {
        bio: 'Punky, anthemic alt-rock with melodic hooks and hardcore energy, leading the 2020s post-hardcore indie wave.',
        aliases: [],
      },

      'Mannequin Pussy': {
        bio: 'Punk, indie rock, and dream-pop textures collide in raw, emotional output — a vital modern voice in guitar rock.',
        aliases: [],
      },

      'Drug Church': {
        bio: 'Aggressive, melodic alt-rock with a wry, introspective edge — bridging punk and indie without losing either.',
        aliases: [],
      },

      'Wednesday': {
        bio: 'Southern gothic indie-rock with noisy, shoegaze-y guitars and aching, cinematic storytelling — a standout of the current scene.',
        aliases: [],
      },

      'The Smile': {
        bio: 'Radiohead offshoot exploring tense, intricate guitar rock and moody art-rock — fitting naturally alongside their parent band.',
        aliases: [],
      },

      'Chastity Belt': {
        bio: 'Washington quartet crafting slacker-rock guitar songs with deadpan wit, introspective lyrics, and a laid-back melodic ease.',
        aliases: [],
      },

      'Peaer': {
        bio: 'New York indie-rock group offering intricate, rhythmic guitar interplay and off-kilter but tuneful, emotionally resonant songs.',
        aliases: ['Peaer'],
      },

      'Broken Social Scene': {
        bio: 'Canadian indie rock collective blending layered guitars, raw energy, and melodic hooks, a staple of 2000s alternative/indie circles.',
        aliases: [],
      },

      'The New Pornographers': {
        bio: 'Power-pop indie rock supergroup known for shimmering guitar melodies, angsty harmonies, and anthemic, introspective songwriting.',
        aliases: [],
      },

      'Old Man Gloom': {
        bio: 'Post-hardcore/sludge rock collective blending raw guitar noise, introspective heaviness, and melodic undercurrents outside mainstream rock.',
        aliases: [],
      },

      'The Appleseed Cast': {
        bio: 'Midwestern indie rock band celebrated for atmospheric guitar layers, melodic intricacy, and moody, introspective songcraft over decades.',
        aliases: [],
      },

      'Cursive': {
        bio: 'Omaha indie-rock mainstays whose angular guitars and confessional, theatrical vocals defined 2000s emo-adjacent alternative rock.',
        aliases: [],
      },

      'The Get Up Kids': {
        bio: 'Kansas City quintet who bridged emo, pop-punk, and indie rock, influencing a generation of melodic guitar bands.',
        aliases: [],
      },

      'The Tallest Man on Earth': {
        bio: 'Swedish singer-songwriter channeling early Bob Dylan via finger-picked acoustic guitar and fiercely independent folk-rock spirit.',
        aliases: [],
      },

      'Dinosaur Pile-Up': {
        bio: 'UK alt-rock trio blending \'90s grunge fuzz and melodic hooks, creating a timeless, guitar-driven sound for modern ears.',
        aliases: [],
      },

      'Title Fight': {
        bio: 'Pennsylvania quartet melding aggressive punk, shoegaze texture, and melancholic indie melody into a distinctive and raw hybrid.',
        aliases: [],
      },

      'Pity Sex': {
        bio: 'Michigan band fusing \'90s-style shoegaze, emo, and indie pop into a hazy, distorted, yet melodic debut sound.',
        aliases: [],
      },

      'Moose Blood': {
        bio: 'UK emo/indie-rock band weaving raw, melodic guitar lines with introspective, angsty lyrics, a defining act of the 2010s scene.',
        aliases: [],
      },

      'The Cribs': {
        bio: 'British indie-rock trio known for gritty, melodic guitar songs and a DIY ethos, beloved in the 2000s indie scene.',
        aliases: [],
      },

      'Fiddlehead': {
        bio: 'Emo-tinged post-hardcore project from Boston, merging raw aggression with melodic introspection, fronted by Have Heart\'s Patrick Flynn.',
        aliases: [],
      },
    },

    'Classic Rock / Arena Rock': {
      'Janis Joplin': {
        bio: "The ferocious, blues-scorched voice of late-'60s San Francisco; her raw catharsis on 'Pearl' and with Big Brother & the Holding Company remains rock's definitive vocal reckoning.",
        aliases: ['janis joplin.', 'janis lyn joplin'],
      },

      'The Beatles': {
        bio: 'The foundational bedrock of pop and rock music, whose unmatched studio evolution with George Martin established the very concept of the modern album.',
        aliases: ['the beatles.', 'beatles', 'thebeatles', 'john lennon', 'paul mccartney', 'george harrison'],
      },

      'David Bowie': {
        bio: 'The ultimate rock chameleon whose fearless theatricality, unmatched songwriting, and Berlin-era electronic experiments profoundly shifted the course of music.',
        aliases: ['david bowie.', 'bowie', 'ziggy stardust', 'david robert jones'],
      },

      'The Kinks': {
        bio: "The Davies brothers' razor-sharp British observational wit and proto-hard rock power chords made them essential cornerstones of the British Invasion.",
        aliases: ['the kinks.', 'kinks', 'ray davies'],
      },

      'Led Zeppelin': {
        bio: "The heaviest blues-rock powerhouse of the 1970s; Jimmy Page's revolutionary studio production and immense riffs defined the very concept of arena rock.",
        aliases: ['Led Zepplin', 'led zeppelin.', 'ledzeppelin', 'Led Zep', 'LZ', 'Jimmy Page', 'Robert Plant'],
      },

      'The Rolling Stones': {
        bio: 'The eternal rock and roll outlaws; their Exile on Main St. era perfected a sloppy, swaggering blues-rock perfection that remains the ultimate genre blueprint.',
        aliases: ['Rolling Stones', 'rolling stones.', 'the rolling stones.', 'rollingstones', 'The Stones', 'Stones', 'mick jagger', 'keith richards'],
      },

      'The Who': {
        bio: "Maximum R&B turned conceptual rock titans; Pete Townshend's windmill chords and Keith Moon's chaotic drumming set a new standard for rock intensity.",
        aliases: ['who', 'the who.', 'thewho', 'Who (Band)', 'pete townshend'],
      },

      'Jimi Hendrix': {
        bio: "The undisputed god of the electric guitar, whose mastery of feedback, fuzz, and stereo panning completely revolutionized the instrument's sonic vocabulary.",
        aliases: ['Jimi Hendrix Experience', 'The Jimi Hendrix Experience', 'jimihendrix', 'jimi hendrix.', 'j. hendrix', 'hendrix'],
      },

      'Bruce Springsteen': {
        bio: "The ultimate blue-collar stadium hero; his E Street Band's Wall of Sound production and working-class poetry turned rock into a profound communal experience.",
        aliases: ['Bruce Springsteen & The E Street Band', 'springsteen', 'the boss', 'bruce springsteen.', 'b. springsteen'],
      },

      'Tom Petty': {
        bio: 'Master purveyor of chiming, Byrds-esque Rickenbacker guitars and bulletproof heartland rock songwriting that ruled FM radio for decades.',
        aliases: ['Tom Petty and the Heartbreakers', 'Tom Petty & The Heartbreakers', 'tom petty.', 'tompetty', 't. petty'],
      },

      'Creedence Clearwater Revival': {
        bio: "John Fogerty's swamp-rock outfit pumped out a staggeringly flawless run of swampy, blues-drenched roots rock that defines American classic rock.",
        aliases: ['CCR', 'C.C.R.', 'creedence', 'credence clearwater revival', 'creedance clearwater revival'],
      },

      'AC/DC': {
        bio: "One of the most enduring arena rock acts in history, built on thunderous, uncompromising riffs and stadium-shaking anthems like 'Back in Black'.",
        aliases: ['ac / dc', 'acdc', 'ac/dc.', 'angus young'],
      },

      'Aerosmith': {
        bio: 'Blues-drenched hard rock giants whose swagger and longevity made them one of the definitive classic rock arena acts from the 1970s onward.',
        aliases: ['areosmith', 'aero smith', 'aerosmith.', 'aersosmith', 'aerosmth', 'aerosmith (band)', 'steven tyler'],
      },

      'Deep Purple': {
        bio: "Pioneering hard rock and proto-metal titans whose 'Smoke on the Water' riff and Jon Lord's distorted organ are legendary in classic rock history.",
        aliases: ['deep purle', 'deep pruple', 'd. purple', 'deep purple (band)'],
      },

      'Bad Company': {
        bio: 'Paul Rodgers-fronted supergroup forged from Free and Mott the Hoople stock, delivering stripped-down, blues-heavy arena rock that became FM radio gospel.',
        aliases: ['bad co', 'bad company.', 'badcompany', 'bad co.', 'bad compnay', 'paul rodgers'],
      },

      'Boston': {
        bio: 'Their meticulously produced debut is among the best-selling of all time, defining the polished, soaring, heavily-layered guitar sound of late-70s arena rock.',
        aliases: ['boston (band)', 'boston.', 'bostón', 'tom scholz', 'boston band'],
      },

      'Journey': {
        bio: "The quintessential arena rock band of the early 1980s, whose anthemic power ballads and Steve Perry's peerless voice filled stadiums worldwide.",
        aliases: ['journey.', 'journy', 'joureny', 'journey (band)', 'journey band', 'steve perry'],
      },

      'Thin Lizzy': {
        bio: "Phil Lynott's dual-guitar attack and poetic songwriting made them a cult-beloved classic rock institution and a key influence on hard rock harmony.",
        aliases: ['thin lizzie', 'thin lizy', 'thin lizzey', 'phil lynot', 'phil lynott'],
      },

      'Heart': {
        bio: "Ann and Nancy Wilson combined Led Zeppelin-weight riffs with arena-ready hooks and spectacular vocals, making them one of classic rock's most powerful acts.",
        aliases: ['heart (band)', 'heart.', 'heart band', 'ann wilson', 'anne wilson', 'nancy wilson', 'ann & nancy wilson'],
      },

      'Grand Funk Railroad': {
        bio: 'Often overlooked arena rock pioneers who sold out Shea Stadium faster than the Beatles, embodying blue-collar 70s rock at its most visceral.',
        aliases: ['grand funk', 'grandfunk', 'grand funk railroad.', 'gfr', 'g.f.r.', 'grand funk rail road', 'grandfunk railroad'],
      },

      'Peter Frampton': {
        bio: "'Frampton Comes Alive!' was one of the best-selling live albums ever and a defining document of 1970s arena rock showmanship and the talk-box effect.",
        aliases: ['frampton', 'peter frampton.', 'peterframpton', 'p. frampton', 'pete frampton', 'frampton comes alive'],
      },

      'Foghat': {
        bio: "A boogie-rock cult favorite whose 'Slow Ride' became a classic rock radio staple and whose relentless touring made them a beloved arena draw.",
        aliases: ['foghat.', 'fog hat', 'foghat (band)', 'foghatt', 'foghat band'],
      },

      'UFO': {
        bio: "A deep-cut classic rock essential whose 'Strangers in the Night' live album is considered one of the greatest hard rock concert recordings ever made.",
        aliases: ['ufo (band)', 'ufo.', 'u.f.o.', 'u.f.o', 'ufo band', 'phil mogg', 'michael schenker'],
      },

      'ZZ Top': {
        bio: 'Texas boogie-rock institution whose gritty blues-rock guitar tone and larger-than-life stage persona made them a classic rock touring force for decades.',
        aliases: ['zztop', 'zz top.', 'z.z. top', 'zz topp', 'zz-top', 'z z top', 'zztop.', 'zz top band', 'billy gibbons'],
      },

      'Lynyrd Skynyrd': {
        bio: "Southern rock legends whose anthemic guitar harmonies and arena-filling sound made 'Free Bird' and 'Sweet Home Alabama' permanent fixtures of rock culture.",
        aliases: ['lynard skynard', 'lynyrd skynrd', 'lynrd skynyrd', 'lynyrdskynyrd', 'skynyrd', 'lynyrd skynyrd.', 'leonard skinnard', 'lynard skynrd', 'lenard skinard'],
      },

      'Foreigner': {
        bio: "Quintessential arena rock hitmakers whose blend of British blues-rock grit and polished American AOR produced some of the era's biggest anthems.",
        aliases: ['foriegner', 'foreigner.', 'forigner', 'forener', 'foreignor', 'foregner', 'foreigner band'],
      },

      'Free': {
        bio: "British blues-rock trailblazers whose raw, stripped-back heaviness and Paul Rodgers' powerhouse vocals directly influenced the arena rock sound.",
        aliases: ['free (band)', 'free.', 'free band', 'free rock band', 'paul rodgers free'],
      },

      'Bachman-Turner Overdrive': {
        bio: "Canadian blue-collar rock institution whose driving riffs and no-frills anthems like 'Takin' Care of Business' became classic rock radio staples.",
        aliases: ['bto', 'b.t.o.', 'bachman turner overdrive', 'bachman-turner overdrive.', 'bachman turner', 'bachman-turner', 'bachman–turner overdrive', 'bachmen turner overdrive', 'bachman turner over drive'],
      },

      'Def Leppard': {
        bio: "One of the defining arena rock acts of the 1980s, selling out stadiums worldwide with slick, meticulously produced anthems like 'Pour Some Sugar on Me'.",
        aliases: ['def lepard', 'def leppard.', 'defleppard', 'def lepard.', 'def lepperd', 'def leapard', 'def leppard (band)', 'd. leppard', 'def leopard', 'joe elliott'],
      },

      'Kansas': {
        bio: "Progressive-leaning classic rock staple whose 'Carry On Wayward Son' and 'Dust in the Wind' became inescapable FM radio and arena standards.",
        aliases: ['kansas (band)', 'kansas.', 'kansas band', 'kansas rock', 'kansas rock band', 'kansás', 'kanas'],
      },

      'Styx': {
        bio: "Arena rock titans whose theatrical blend of prog and hard rock on albums like 'The Grand Illusion' and 'Paradise Theatre' dominated late-70s stadiums.",
        aliases: ['styx.', 'styx (band)', 'styx band', 'styxx', 'stix', 'dennis deyoung', 'tommy shaw'],
      },

      'REO Speedwagon': {
        bio: "Quintessential arena rock hitmakers whose 'Hi Infidelity' album and power ballads like 'Keep On Loving You' epitomize the commercial peak of the genre.",
        aliases: ['reo speedwagon.', 'reo speed wagon', 'reospeedwagon', 'r.e.o. speedwagon', 'r.e.o.speedwagon', 'reo', 'reo speedwagon (band)', 'reo speedwagen', 'reo speedwaggon', 'kevin cronin'],
      },

      'Cheap Trick': {
        bio: "Their legendary 'Live at Budokan' album essentially defined arena rock energy, blending pop hooks with hard rock power.",
        aliases: ['cheap trick.', 'cheaptrick', 'cheap trick (band)', 'cheap trik', 'cheap trick band', 'cheep trick', 'robin zander', 'rick nielsen'],
      },

      'Ted Nugent': {
        bio: "Guitar-shredding classic rock powerhouse known for 'Stranglehold' who was a massive arena draw throughout the 1970s.",
        aliases: ['ted nugent.', 'tednugent', 't. nugent', 'ted nugent (band)', 'ted nugnet', 'ted nuggent', 'nugent', 'the amboy dukes', 'amboy dukes'],
      },

      'Scorpions': {
        bio: "German hard rock legends whose anthems 'Rock You Like a Hurricane' and 'Wind of Change' made them one of the biggest arena acts worldwide.",
        aliases: ['scorpions.', 'the scorpions', 'scorpians', 'scorpions (band)', 'scorpons', 'scorpions band', 'scorpoins', 'scropions', 'rudolf schenker', 'klaus meine'],
      },

      'Whitesnake': {
        bio: "David Coverdale's powerhouse outfit delivered quintessential arena rock with 'Here I Go Again' and massive stadium tours.",
        aliases: ['whitesnake.', 'white snake', 'whitesnake (band)', 'whitsnake', 'whitesnake band', 'whtiesnake', 'david coverdale', 'coverdale'],
      },

      'Blue Öyster Cult': {
        bio: "Classic rock institution whose '(Don't Fear) The Reaper' and 'Burnin' for You' became FM radio staples, featuring a heavily touring arena presence.",
        aliases: ['blue oyster cult', 'blue oyster cult.', 'blueoyster cult', 'blue oystercult', 'blue oyster cult (band)', 'blue öyster cult.', 'blue oister cult', 'blue oyster cult band', 'blue oyster', 'buck dharma'],
      },

      'Humble Pie': {
        bio: "Steve Marriott and Peter Frampton's hard-rocking supergroup pioneered the arena rock format with their legendary live albums.",
        aliases: ['humble pie.', 'humblepie', 'humble pie (band)', 'humble pie band', 'humle pie', 'steve marriott', 'humble pie rock'],
      },

      'Nazareth': {
        bio: "Scottish hard rock veterans whose gritty power-ballad 'Love Hurts' and raw albums like 'Hair of the Dog' are classic rock cornerstones.",
        aliases: ['nazareth.', 'nazareth (band)', 'nazareth band', 'nazareth rock', 'nazareth rock band', 'nazaerth', 'nazereth', 'dan mccafferty'],
      },

      'Uriah Heep': {
        bio: "Proto-arena heavyweights whose organ-driven hard rock and albums like 'Demons and Wizards' helped lay the groundwork for classic rock.",
        aliases: ['uriah heep.', 'uriahheep', 'uriah heep (band)', 'uriah heap', 'uraih heep', 'uriah heep band', 'uriah hep', 'u. heep'],
      },

      'Montrose': {
        bio: "Ronnie Montrose's eponymous band featuring a young Sammy Hagar delivered a blueprint for American arena hard rock in the mid-1970s.",
        aliases: ['montrose.', 'montrose (band)', 'montrose band', 'montrose rock', 'ronnie montrose'],
      },

      'Mountain': {
        bio: "Leslie West's titanic riff on 'Mississippi Queen' and their crushing Woodstock performance cemented them as classic rock heavyweights.",
        aliases: ['mountain.', 'mountain (band)', 'mountain band', 'mountain rock', 'leslie west', 'lesie west', 'leslie west mountain'],
      },

      'Survivor': {
        bio: "Arena rock hitmakers whose 'Eye of the Tiger' and 'Burning Heart' became some of the most recognizable anthems of the 1980s.",
        aliases: ['survivor.', 'survivor (band)', 'survivor band', 'survivior', 'suvivor', 'survior', 'jim peterik', 'survivor rock'],
      },

      'Night Ranger': {
        bio: "1980s arena rock staples whose 'Sister Christian' and 'Don't Tell Me You Love Me' were quintessential power-ballad and FM rock hits.",
        aliases: ['night ranger.', 'nightranger', 'night ranger (band)', 'night ranger band', 'night rangr', 'nite ranger', 'jack blades', 'brad gillis'],
      },

      '.38 Special': {
        bio: "Southern-flavored arena rock act featuring Donnie Van Zant who scored massive hits with 'Hold On Loosely' and 'Caught Up in You.'",
        aliases: ['38 special', 'thirty eight special', '.38 special.', '38special', '.38special', '.38 special (band)', '38 special band', 'thirty-eight special', 'donnie van zant'],
      },

      'Pat Benatar': {
        bio: "Hard-rocking arena powerhouse whose 'Hit Me with Your Best Shot' and 'Heartbreaker' made her one of the top-selling rock acts of the early 1980s.",
        aliases: ['pat benatar.', 'patbenatar', 'pat benetar', 'pat benater', 'pat benattar', 'pat benetar.', 'p. benatar', 'pat benatar (band)', 'pat benitar', 'neil giraldo'],
      },

      'Triumph': {
        bio: "Canadian arena rock power trio whose anthems 'Lay It on the Line' and 'Fight the Good Fight' made them a major concert draw alongside Rush.",
        aliases: ['triumph.', 'triumph (band)', 'triumph band', 'triumph rock', 'triumph rock band', 'trimuph', 'rik emmett'],
      },

      'Sammy Hagar': {
        bio: "The 'Red Rocker' built a massive solo arena career with hits like 'I Can't Drive 55' before and after his tenure fronting Van Halen.",
        aliases: ['sammy hagar.', 'sammyhagar', 'sammy haggar', 'sammy hager', 's. hagar', 'sammy hagar (solo)', 'the red rocker', 'sam hagar', 'sammy hagar band'],
      },

      'Van Halen': {
        bio: "One of the most iconic arena rock acts of all time, dominating stadiums with Eddie's guitar-hero wizardry and anthemic, party-rock hooks.",
        aliases: ['van halen.', 'vanhalen', 'van halen (band)', 'van halen band', 'van helen', 'van halan', 'vanhallen', 'van hallen', 'vh', 'v.h.', 'eddie van halen', 'david lee roth', 'van halen i', 'van haen'],
      },

      'Kiss': {
        bio: 'The quintessential arena rock spectacle act, pioneering the stadium-scale live show with pyrotechnics and theatrical costumes.',
        aliases: ['kiss.', 'kiss (band)', 'kiss band', 'k.i.s.s.', 'kss', 'kiis', 'kiss rock', 'kiss rock band', 'gene simmons', 'paul stanley', 'ace frehley'],
      },

      'Queen': {
        bio: 'Arguably the greatest arena rock band in history, blending hard rock, operatic vocals, and massive singalong anthems that defined the stadium concert experience.',
        aliases: ['queen.', 'queen (band)', 'queen band', 'qween', 'quuen', 'quean', 'queen rock', 'freddie mercury', 'freddy mercury', 'brian may', 'queen rock band'],
      },

      'Rush': {
        bio: 'Canadian power trio who merged progressive complexity with arena-filling energy, becoming one of the most enduring and influential classic rock acts.',
        aliases: ['rush.', 'rush (band)', 'rush band', 'rush rock', 'rush rock band', 'rush canadian', 'rüsh', 'geddy lee', 'neil peart', 'alex lifeson', 'rush trio'],
      },

      'Bon Jovi': {
        bio: 'Massively successful 1980s arena rock act whose polished hard rock anthems and charismatic live performances made them one of the biggest-selling rock bands worldwide.',
        aliases: ['bon jovi.', 'bonjovi', 'bon jovi (band)', 'bon jovi band', 'bon jovie', 'bon jovii', 'b. jovi', 'jon bon jovi', 'john bon jovi', 'john bongiovi', 'richie sambora'],
      },

      'Black Sabbath': {
        bio: 'Pioneering heavy rock icons whose crushing riffs and dark theatricality laid the groundwork for hard rock and heavy metal while filling arenas.',
        aliases: ['blacksabbath', 'black sabbath (band)', 'black sabbbath', 'black sabbth', 'blak sabbath', 'b. sabbath', 'black sabbath band', 'sabbath', 'tony iommi', 'ozzy osbourne'],
      },

      'Rainbow': {
        bio: "Ritchie Blackmore's post-Deep Purple vehicle bridged classic hard rock and neoclassical metal, producing arena-ready anthems with Ronnie James Dio.",
        aliases: ['rainbow band', 'rainbow rock', 'ritchie blackmore\'s rainbow', 'ritchie blackmores rainbow', 'blackmore\'s rainbow', 'blackmores rainbow', 'rianbow', 'ranbow', 'ronnie james dio rainbow'],
      },

      'Dio': {
        bio: "Ronnie James Dio's namesake band delivered powerful, melodic arena metal and hard rock, cementing his status as one of classic rock's greatest vocalists.",
        aliases: ['dio band', 'dio rock', 'ronnie dio', 'ronnie j. dio', 'rjd', 'ronnie james dio band', 'deo', 'ronnie james dio (band)'],
      },

      'Asia': {
        bio: "Arena rock supergroup formed by members of Yes, King Crimson, and ELP, whose self-titled 1982 debut was the year's best-selling album with soaring anthems.",
        aliases: ['asia.', 'asia (band)', 'asia band', 'asia rock', 'asia rock band', 'asia supergroup', 'john wetton', 'steve howe asia', 'geoff downes asia', 'carl palmer asia'],
      },

      'Loverboy': {
        bio: "Canadian arena rock hitmakers whose synth-laced power anthems like 'Working for the Weekend' were 1980s FM radio and concert staples.",
        aliases: ['loverboy.', 'loverboy (band)', 'loverboy band', 'lover boy', 'loverboy rock', 'loverboy rock band', 'loverboi', 'mike reno', 'paul dean loverboy'],
      },

      'Golden Earring': {
        bio: "Dutch classic rock mainstays best known for the epic arena staples 'Radar Love' and 'Twilight Zone,' bridging European hard rock with American FM radio.",
        aliases: ['golden earring.', 'goldenearring', 'golden earring (band)', 'golden earing', 'golden ear ring', 'golden earring band', 'golden earings', 'golden earring rock', 'the golden earring', 'barry hay'],
      },

      'Robin Trower': {
        bio: 'Post-Procol Harum guitar virtuoso whose Hendrix-influenced blues-rock power trios produced deeply revered classic rock albums throughout the 1970s.',
        aliases: ['robin trower.', 'robintrower', 'robin trower (band)', 'robin trower band', 'r. trower', 'robin tower', 'robin trowwer', 'robin trower rock', 'trower'],
      },

      'Y&T': {
        bio: 'San Francisco hard rock outfit who were cult arena favorites in the early 1980s, delivering blistering guitar-driven rock.',
        aliases: ['y & t', 'y&t.', 'y&t (band)', 'y and t', 'yandt', 'y&t band', 'y & t.', 'yesterday and today', 'yesterday & today', 'yesterday and today band', 'dave meniketti', 'y&t rock'],
      },

      'April Wine': {
        bio: 'Canadian classic rock and arena rock staples whose hard-edged power pop and AOR anthems made them consistent hitmakers throughout the 1970s.',
        aliases: ['april wine.', 'aprilwine', 'april wine (band)', 'april wine band', 'april wine rock', 'april wne', 'aprl wine', 'myles goodwyn', 'april wine canadian'],
      },

      'Tesla': {
        bio: 'Sacramento hard rock act who carried the torch of blues-based classic arena rock into the late 1980s with an organic, unpolished sound.',
        aliases: ['tesla.', 'tesla (band)', 'tesla band', 'tesla rock', 'tesla rock band', 'telsa', 'tessla', 'teslsa', 'jeff keith', 'jeff keith tesla', 'tesla the band'],
      },

      'Great White': {
        bio: 'Blues-drenched hard rock act whose late 1980s arena hits fused Led Zeppelin-style riffing with accessible hooks.',
        aliases: ['great white.', 'greatwhite', 'great white (band)', 'great white band', 'great white rock', 'gret white', 'great wite', 'great whte', 'jack russell', 'jack russell great white', 'great white shark'],
      },

      'Quiet Riot': {
        bio: "First metal act to reach number one on the Billboard 200 with 'Metal Health,' delivering crowd-pleasing arena rock anthems.",
        aliases: ['quiet riot.', 'quietriot', 'quiet riot (band)', 'quiet riot band', 'quiet riot rock', 'quite riot', 'queit riot', 'quiet riott', 'kevin dubrow', 'quietriot.', 'quiet riot metal'],
      },

      'Cream': {
        bio: 'Pioneering power trio featuring Eric Clapton whose blues-rock improvisational intensity in the late 1960s helped invent the arena rock concert format.',
        aliases: ['cream.', 'cream (band)', 'cream band', 'cream rock', 'cream rock band', 'creme', 'creem', 'eric clapton cream', 'ginger baker cream', 'jack bruce cream', 'cream trio'],
      },

      'Pat Travers': {
        bio: 'Canadian blues-rock guitarist and cult classic rock figure whose fiery live performances in the late 1970s earned him a devoted arena-circuit following.',
        aliases: ['pat travers.', 'pattravers', 'pat travers (band)', 'pat travers band', 'pat travers rock', 'p. travers', 'pat traverse', 'pat travrs', 'ptb', 'pat travers band.'],
      },

      'Molly Hatchet': {
        bio: 'Southern hard rock powerhouse who brought a triple-guitar attack and Lynyrd Skynyrd-inspired swagger to arenas.',
        aliases: ['molly hatchet.', 'mollyhatchet', 'molly hatchet (band)', 'molly hatchet band', 'molly hatchett', 'moly hatchet', 'molly hachet', 'molly hatchet rock', 'm. hatchet', 'molly hatchet southern rock', 'danny joe brown'],
      },

      'Pink Floyd': {
        bio: "One of the most influential and best-selling classic rock acts in history, whose albums like 'Dark Side of the Moon' and 'The Wall' defined arena-scale ambition.",
        aliases: ['pink floyd.', 'pinkfloyd', 'pink floyd (band)', 'pink flloyd', 'p. floyd', 'pink flyod', 'the pink floyd', 'roger waters', 'david gilmour', 'syd barrett pink floyd'],
      },

      'Eagles': {
        bio: "Their Greatest Hits became the best-selling album in US history, and 'Hotel California' is the archetypal classic rock radio album.",
        aliases: ['the eagles', 'eagles.', 'the eagles.', 'theeagles', 'eagles (band)', 'the eagels', 'eagels', 'don henley', 'glenn frey', 'joe walsh eagles'],
      },

      'The Doors': {
        bio: "Jim Morrison and Ray Manzarek's organ-driven psychedelic rock became foundational to classic rock radio and the mythology of the genre itself.",
        aliases: ['doors', 'thedoors', 'the doors.', 'doors.', 'the doors (band)', 'doors (band)', 'jim morrison', 'j. morrison', 'morrison', 'ray manzarek', 'the dors'],
      },

      'Bob Seger & The Silver Bullet Band': {
        bio: "Quintessential heartland arena rock, with 'Night Moves' and 'Live Bullet' embodying the blue-collar power of American classic rock.",
        aliases: ['bob seger', 'bob seger.', 'bob seger and the silver bullet band', 'bobseger', 'bob seeger', 'bob seger.', 'b. seger', 'bob seger band', 'silver bullet band', 'bob segr'],
      },

      'The Allman Brothers Band': {
        bio: "Pioneers of Southern rock whose improvisational twin-guitar attack on 'At Fillmore East' set the template for decades of jam-based arena rock.",
        aliases: ['allman brothers', 'allman brothers band', 'theallmanbrothersband', 'the allman brothers', 'allman brothers.', 'the allman brothers band.', 'allman bros', 'allmans', 'the allmans', 'duane allman', 'gregg allman', 'alman brothers'],
      },

      'Santana': {
        bio: "Carlos Santana's fusion of Latin percussion with blues-rock guitar created a singular classic rock voice that broke through at Woodstock.",
        aliases: ['santana.', 'santana (band)', 'carlos santana', 'c. santana', 'santanna', 'santana band', 'carlos santana band'],
      },

      'Dire Straits': {
        bio: "Mark Knopfler's fingerpicked guitar tone and literary songwriting made 'Brothers in Arms' one of the biggest-selling arena rock albums of the 1980s.",
        aliases: ['dire straits.', 'direstraits', 'dire straits (band)', 'dire strats', 'dire straights', 'dire-straits', 'mark knopfler', 'm. knopfler', 'knopfler'],
      },

      'Electric Light Orchestra': {
        bio: "Jeff Lynne's orchestral rock vision produced an unbroken run of classic rock radio staples that merged Beatles ambition with arena-scaled pop-rock.",
        aliases: ['elo', 'e.l.o.', 'e.l.o', 'electric light orchestra.', 'electriclightorchestra', 'the electric light orchestra', 'elo.', 'elo (band)', 'jeff lynne', 'jeff lynne elo', 'jeff lynn', 'electirc light orchestra'],
      },

      'Supertramp': {
        bio: "'Breakfast in America' and 'Crime of the Century' represent the art-rock side of arena rock at its most commercially dominant and sonically meticulous.",
        aliases: ['supertramp.', 'super tramp', 'supertramp (band)', 'supertramp band', 'super-tramp', 'supetramp', 'roger hodgson', 'rick davies supertramp'],
      },

      'The Doobie Brothers': {
        bio: 'Evolved from chugging boogie-rock into yacht-soul sophistication while remaining a classic rock radio cornerstone across both eras.',
        aliases: ['doobie brothers', 'thedoobiebrothers', 'the doobie brothers.', 'doobiebrothers', 'doobie bros', 'the doobies', 'doobies', 'tom johnston', 'michael mcdonald doobie brothers', 'the dooby brothers'],
      },

      'Steve Miller Band': {
        bio: "'Fly Like an Eagle' and 'The Joker' made Steve Miller one of classic rock radio's most inescapable presences, with a space-blues guitar tone all his own.",
        aliases: ['steve miller', 'stevemillerband', 'steve miller band.', 'the steve miller band', 'steve miller.', 's. miller', 'steve miller (band)', 'steve miler band', 'smb'],
      },

      'The J. Geils Band': {
        bio: "Raw R&B-fueled party rock that tore through arenas in the early '80s, with 'Freeze-Frame' and a live show reputation that rivaled anyone in the genre.",
        aliases: ['j. geils band', 'j geils band', 'j.geils band', 'thejgeilsband', 'j. geils', 'j geils', 'the j geils band', 'j. geils band.', 'j.geils', 'peter wolf', 'peter wolf j geils'],
      },

      'Toto': {
        bio: "Session-musician precision turned arena rock, whose self-titled debut and 'Toto IV' represent the genre's most technically accomplished wing.",
        aliases: ['toto.', 'toto (band)', 'toto band', 'toto rock', 'totó', 'steve lukather', 'steve lukather toto', 'david paich', 'jeff porcaro', 'toto iv'],
      },

      'Faces': {
        bio: "The ragged, boozy elegance of Rod Stewart and Ronnie Wood's Faces laid the blueprint for unpretentious pub-to-arena rock swagger.",
        aliases: ['faces.', 'faces (band)', 'the faces', 'thefaces', 'faces band', 'small faces / faces', 'rod stewart faces', 'rod stewart', 'rod stewart.', 'ronnie wood faces', 'ronnie lane', 'rod stewart & the faces'],
      },

      'Rory Gallagher': {
        bio: "Ireland's greatest blues-rock guitarist, whose ferocious live performances and 'Irish Tour '74' are sacred texts for serious classic rock collectors.",
        aliases: ['rory gallagher.', 'rorygallagher', 'rory gallagher (band)', 'r. gallagher', 'rory gallagher band', 'rory gallager', 'rory gallaher', 'rory galagher', 'rory gallagher irish'],
      },

      'Wishbone Ash': {
        bio: "Pioneered twin-lead harmony guitar a full generation before Thin Lizzy, with 'Argus' standing as one of early-'70s British rock's most enduring deep cuts.",
        aliases: ['wishbone ash.', 'wishboneash', 'wishbone ash (band)', 'wish bone ash', 'wishbone-ash', 'wishbone ash band', 'wishbne ash', 'andy powell wishbone ash'],
      },

      'Status Quo': {
        bio: "Britain's most relentless boogie-rock institution, filling arenas for decades with a heads-down three-chord attack that became a national institution.",
        aliases: ['status quo.', 'statusquo', 'status quo (band)', 'status quo band', 'the status quo', 'staus quo', 'status qou', 'statsu quo', 'francis rossi', 'rick parfitt'],
      },

      'Billy Squier': {
        bio: "The 'Stroke' and 'Rock Me Tonite' era made Squier one of early-'80s arena rock's biggest draws, and his riffs remain some of the most sampled in hip-hop history.",
        aliases: ['billy squier.', 'billysquier', 'billy squire', 'billy squier (band)', 'b. squier', 'billy squire.', 'billy sqiuer', 'billy squier band'],
      },

      'Steely Dan': {
        bio: "The perfectionist jazz-rock outliers of classic rock whose 'Aja' and 'The Royal Scam' remain audiophile reference-grade records.",
        aliases: ['steely dan.', 'steelydan', 'steely dan (band)', 'steely dan band', 'steelyd an', 'steely-dan', 'donald fagen', 'walter becker', 'fagen and becker', 'fagen becker'],
      },

      'Bryan Adams': {
        bio: "'Reckless' is a masterclass in hooks-first arena rock songwriting, and his relentless touring made him one of the genre's most dependable worldwide draws.",
        aliases: ['bryan adams.', 'bryanadams', 'bryan adams (band)', 'brian adams', 'b. adams', 'bryan adams band', 'bryan addams', 'bryan admas', 'bryan adams canadian'],
      },

      'Ratt': {
        bio: "'Out of the Cellar' defined the Sunset Strip's transition from club circuit to arena-level dominance.",
        aliases: ['ratt.', 'ratt (band)', 'ratt band', 'ratt rock', 'ratt!', 'stephen pearcy', 'warren demartini', 'stephen pearcy ratt', 'ratt la'],
      },

      'The Guess Who': {
        bio: "Canada's first international rock powerhouse, whose 'American Woman' and 'These Eyes' made them essential precursors to the Canadian arena rock lineage.",
        aliases: ['guess who', 'theguesswho', 'the guess who.', 'guess who.', 'guesswho', 'the guess who (band)', 'burton cummings', 'randy bachman', 'randy bachman guess who'],
      },

      'Steppenwolf': {
        bio: "'Born to Be Wild' literally coined the term 'heavy metal' and defined biker-culture rock mythology — a foundational classic rock record.",
        aliases: ['steppenwolf.', 'steppenwolf (band)', 'steppenwolf band', 'stepenwolf', 'steppen wolf', 'steppenwolf rock', 'john kay', 'john kay steppenwolf', 'steppnwolf'],
      },

      'Ten Years After': {
        bio: "Alvin Lee's blinding speed at Woodstock made him an instant guitar hero, and the band's blues-rock chops represent the British Invasion's hard-rocking second wave.",
        aliases: ['ten years after.', 'tenyearsafter', 'ten years after (band)', '10 years after', 'tya', 't.y.a.', 'alvin lee', 'alvin lee ten years after', 'ten yrs after', 'ten years aftr'],
      },

      'The Animals': {
        bio: 'Era-defining 60s British Invasion rockers of \'House of the Rising Sun\' fame, bringing raw energy to massive audiences.',
        aliases: [],
      },

      'The Yardbirds': {
        bio: 'Influential 60s British blues-rock band whose evolving lineup featured Eric Clapton, Jeff Beck, and Jimmy Page, bridging to stadium rock.',
        aliases: [],
      },

      'Small Faces': {
        bio: 'Mod-rock legends of the 60s, known for explosive live shows and anthemic singles that paved the way for later arena acts.',
        aliases: [],
      },

      'Canned Heat': {
        bio: 'Boogie-blues rock band from the 60s, famous for Woodstock performances and driving, festival-friendly hits like \'Going Up the Country\'.',
        aliases: [],
      },

      'The Band': {
        bio: 'Americana-rooted rock group whose 60s and 70s albums and legendary live sets, including The Last Waltz, defined a rootsy, anthemic sound.',
        aliases: [],
      },

      'Rare Earth': {
        bio: 'Motown\'s white rock band, scoring early 70s hits with extended, hard-rocking covers like \'Get Ready\' that filled arenas.',
        aliases: [],
      },

      'Traffic': {
        bio: 'British rock band blending psychedelia and jazz-rock, delivering powerful 60s and 70s festival anthems like \'Dear Mr. Fantasy\'.',
        aliases: [],
      },

      'Cactus': {
        bio: 'Hard-rock supergroup of the early 70s featuring Mitch Ryder and ex-Stooges members, delivering heavy, riff-driven live power.',
        aliases: [],
      },

      'Black Oak Arkansas': {
        bio: 'Southern hard-rock band from the 70s, known for raucous, guitar-heavy live shows and anthemic, boogie-driven sound.',
        aliases: [],
      },

      'Iron Butterfly': {
        bio: 'Psychedelic hard-rock pioneers of the late 60s, forever associated with the epic, crowd-pleasing 17-minute jam \'In-A-Gadda-Da-Vida\'.',
        aliases: [],
      },

      'Vanilla Fudge': {
        bio: 'Late-60s rock group renowned for slowing down and magnifying pop hits into heavy, theatrical, and anthemic live performances.',
        aliases: [],
      },

      'MC5': {
        bio: 'Detroit rock revolutionaries of the late 60s, whose high-energy, politically charged performances became legendary for their raw power.',
        aliases: [],
      },

      'The James Gang': {
        bio: 'Ohio rock trio with Joe Walsh, crafting driving, guitar-heavy anthems in the early 70s that rocked large venues.',
        aliases: [],
      },

      'Alice Cooper': {
        bio: 'Shock-rock pioneer from the 70s, theatrical and anthemic, turning rock concerts into stadium-sized spectacles.',
        aliases: [],
      },

      'Blue Cheer': {
        bio: 'Heavy psychedelic blues-rock trio from San Francisco, often cited among the earliest bands to set the stage for heavy metal\'s raw volume.',
        aliases: [],
      },

      'Quicksilver Messenger Service': {
        bio: 'San Francisco 60s/70s psychedelic rock band known for extended, powerful live improvisations that captivated large festival audiences.',
        aliases: [],
      },

      'Mott the Hoople': {
        bio: 'British rock band that delivered gritty, anthemic 70s hits like \'All the Young Dudes\', embraced by large, devoted crowds.',
        aliases: [],
      },

      'Spirit': {
        bio: 'Late-60s/early-70s California rock band known for complex, psychedelic jams that were a staple of the era\'s large rock festivals.',
        aliases: [],
      },

      'Jethro Tull': {
        bio: 'Progressive rock band with Ian Anderson, achieving major 70s arena success via theatrical, folk-infused hard rock.',
        aliases: [],
      },

      'The Cult': {
        bio: 'Very late 80s/early 90s band, still a good fit but their stylistic centre is post-punk/gothic—may not fit this exact 60s-70s slot.',
        aliases: [],
      },

      'Muddy Waters': {
        bio: 'Blues legend whose electric Chicago sound heavily influenced 60s British rock, but his own centre is primary blues, not arena rock—omit.',
        aliases: [],
      },

      'The Grateful Dead': {
        bio: 'Psychedelic jam band, their live marathon tours were huge, but their genre centre is jam/psych not classic arena rock—omit.',
        aliases: [],
      },

      'The Nice': {
        bio: 'Late-60s British progressive rock band with Keith Emerson, known for dramatic arrangements, but less focused on the anthemic arena singalong—omitting.',
        aliases: [],
      },

      'The Tragically Hip': {
        bio: 'Canadian rockers whose anthemic, arena-filling sound and devoted live following made them a defining stadium act of the 80s and 90s.',
        aliases: [],
      },

      'John Mellencamp': {
        bio: 'Heartland rocker with a string of 80s anthems that packed arenas, though his raw roots-rock style leans more Americana than stadium bombast.',
        aliases: [],
      },

      'The Black Crowes': {
        bio: 'Southern-rock revivalists whose 90s swagger and live marathons filled amphitheaters, drawing directly on 70s Stones/Zeppelin power.',
        aliases: [],
      },

      'Tom Cochrane': {
        bio: 'Canadian arena-rock mainstay whose \'Life Is a Highway\' and Red Rider hits became singalong stadium staples in the 80s and 90s.',
        aliases: [],
      },

      'Big Country': {
        bio: 'Scottish four-piece whose bagpipe-guitar sound and anthemic choruses, led by Stuart Adamson, translated to vast festival and stadium stages in the 80s.',
        aliases: [],
      },

      'U2': {
        bio: 'Irish quartet whose 80s and 90s work redefined stadium rock with anthemic, politically charged songs and colossal live productions.',
        aliases: [],
      },

      'The Pretenders': {
        bio: 'Led by Chrissie Hynde, their blend of new wave grit and rock punch delivered festival-topping, arena-friendly hits through the 80s.',
        aliases: [],
      },

      'The Alarm': {
        bio: 'Welsh rock band mixing anthemic, fists-aloft choruses and U2-like arena ambitions, thriving in 80s stadium settings.',
        aliases: [],
      },

      'Guns N\' Roses': {
        bio: 'Late-80s LA giants whose hard-rock blitz and stadium-swallowing tours carried a classic-rock torch into the modern arena age.',
        aliases: [],
      },

      'Badlands': {
        bio: 'American hard rock band formed by former Ozzy Osbourne guitarist Jake E. Lee, delivering bluesy, arena-ready rock in the late 80s.',
        aliases: [],
      },

      'The Black Keys': {
        bio: 'Ohio rock duo whose gritty, blues-based garage rock scaled to stadium-sized anthems in the 2010s, echoing classic rock energy.',
        aliases: [],
      },

      'Gary Clark Jr.': {
        bio: 'Texas guitarist blending blues, rock, and soul, whose powerful live shows and anthemic songs fit stadium-sized rock tradition.',
        aliases: [],
      },

      'Rival Sons': {
        bio: 'California retro-rock band reviving 70s-style hard rock with heavy riffs and soulful vocals, made for large stages.',
        aliases: [],
      },

      'Greta Van Fleet': {
        bio: 'Michigan rock band channeling Led Zeppelin’s epic, soaring arena rock, with a modern revivalist edge and global following.',
        aliases: [],
      },

      'The Struts': {
        bio: 'British glam-tinged rock band delivering flamboyant, bombastic anthems and high-energy live shows built for stadiums.',
        aliases: [],
      },

      'Airbourne': {
        bio: 'Australian hard rock band delivering loud, unapologetic, party-ready anthems in the spirit of AC/DC, ideal for festivals.',
        aliases: [],
      },

      'Royal Blood': {
        bio: 'English duo creating heavy, riff-driven arena rock from bass and drums, capturing the power and drive of classic rock.',
        aliases: [],
      },

      'Tyler Bryant & The Shakedown': {
        bio: 'Nashville-based rock band blending blues-rock crunch and hooky choruses, earning slots on major rock tours and festivals.',
        aliases: [],
      },

      'Dirty Honey': {
        bio: 'LA-based rock band reviving 70s hard rock with funk-infused swagger and anthemic hooks, gaining traction on active rock radio.',
        aliases: [],
      },

      'Massive Wagons': {
        bio: 'British hard rock band with anthemic, sing-along choruses and a powerful, arena-ready sound rooted in classic rock.',
        aliases: [],
      },

      'The Jeff Beck Group': {
        bio: 'Seminal British blues-rock band led by guitarist Jeff Beck, bridging the 1960s and 70s with powerful, guitar-driven stadium-ready rock.',
        aliases: ['Jeff Beck Group'],
      },

      'Procol Harum': {
        bio: 'Pioneers of baroque-rock and orchestral rock, known for \'A Whiter Shade of Pale,\' their grand sound fit the emerging stadium-rock era of the late 60s.',
        aliases: [],
      },

      'The Moody Blues': {
        bio: 'British rock band that integrated symphonic elements into assertive rock, creating immersive, arena-ready records throughout the 60s and 70s.',
        aliases: [],
      },

      'John Fogerty': {
        bio: 'Solo artist and former Creedence frontman; his post-CCR 1970s work continued in a rootsy, powerful rock vein that suited large-scale concerts.',
        aliases: ['John C. Fogerty'],
      },

      'The Babys': {
        bio: 'British rock band of the late 70s known for power-pop choruses and arena-ready anthems like \'Isn\'t It Time\'.',
        aliases: [],
      },

      'Head East': {
        bio: 'Midwestern hard rock band with a massive 70s hit \'Never Been Any Reason\', a staple of classic rock and arena playlists.',
        aliases: [],
      },

      'Angel': {
        bio: '70s glam-tinged hard rock band from Washington DC, known for theatrical live shows and arena-sized pomp rock.',
        aliases: [],
      },

      'Starz': {
        bio: '70s American rock band blending hard rock and pop hooks, often compared to Kiss and Aerosmith for anthemic choruses.',
        aliases: [],
      },

      'The Outlaws': {
        bio: 'Southern rock band known for twin-guitar attack and the epic \'Green Grass and High Tides\', a live favorite in large venues.',
        aliases: [],
      },

      'The Marshall Tucker Band': {
        bio: 'Southern rock pioneers with a jam-oriented style and hits like \'Can\'t You See\', fitting 70s arena-country rock.',
        aliases: [],
      },

      'The Mamas & The Papas': {
        bio: '60s folk-pop group, but not arena rock; closer to folk vocal harmony groups in smaller clubs.',
        aliases: [],
      },

      'Benny Mardones': {
        bio: 'Blue-eyed soul singer known for one massive 1980 hit \'Into the Night\', but mostly a one-hit wonder without deep classic rock catalog.',
        aliases: [],
      },

      'Gotthard': {
        bio: 'Swiss hard rock band, but their peak was in the 90s, closer to MTV-era, not 60s-70s stadium rock.',
        aliases: [],
      },

      'The Romantics': {
        bio: 'Detroit power-pop/new wave band with hits \'What I Like About You\' and \'Talking in Your Sleep\', anthemic but more early MTV than 70s arena.',
        aliases: [],
      },

      'Dr. Hook': {
        bio: 'R&B-tinged novelty rock band, less arena-scale, more theatrical comedy in smaller theaters.',
        aliases: [],
      },

      'The Rockets': {
        bio: '70s Detroit rock band, but smaller cult following, not a major arena-filling act.',
        aliases: [],
      },

      'Point Blank': {
        bio: 'Texas hard rock band of the late 70s, but never reached stadium status.',
        aliases: [],
      },

      '18 Wheeler': {
        bio: '90s Scottish alt-rock band, too late and too indie, not classic arena rock.',
        aliases: [],
      },

      'Joe Walsh': {
        bio: 'As a solo artist, his best-known songs like \'Rocky Mountain Way\' and \'Life\'s Been Good\' are from the 70s arena era, but he\'s already in the list under James Gang and Eagles? He\'s in Eagles, but solo career fits arena. Add if not there.',
        aliases: [],
      },

      'Stevie Ray Vaughan': {
        bio: 'Blues-rock guitar hero of the 80s, but his live shows were more festivals and clubs, not the same as 70s arena pop-metal. His vibe is more blues purist.',
        aliases: [],
      },

      'Sheila E.': {
        bio: 'No, pop-funk.',
        aliases: [],
      },

      'Lonnie Mack': {
        bio: 'No, blues.',
        aliases: [],
      },

      'Herman\'s Hermits': {
        bio: '60s pop, more British Invasion lightweight, not arena rock.',
        aliases: [],
      },

      'Grinderswitch': {
        bio: 'Southern rock but minor.',
        aliases: [],
      },

      'Blackfoot': {
        bio: 'Southern hard rock from 70s/80s, with songs like \'Highway Song\', could fit arena rock. Check if present.',
        aliases: [],
      },

      'The Sensational Alex Harvey Band': {
        bio: 'Scottish rock band with theatrical cabaret edge, 70s, some arena potential in UK/Europe, less in US.',
        aliases: [],
      },

      'Silverhead': {
        bio: '70s glam rock, short-lived.',
        aliases: [],
      },

      'Buffalo': {
        bio: 'Australian heavy rock, too obscure.',
        aliases: [],
      },

      'Bandit': {
        bio: 'Too obscure.',
        aliases: [],
      },

      'Ram Jam': {
        bio: 'Novelty one-hit \'Black Betty\', not lasting arena band.',
        aliases: [],
      },

      'Frijid Pink': {
        bio: 'Detroit hard rock, one hit \'House of the Rising Sun\', minor.',
        aliases: [],
      },

      'The Frost': {
        bio: 'Detroit, minor.',
        aliases: [],
      },

      'Brownsville Station': {
        bio: '70s rock \'Smokin\' in the Boys Room\', but more bar-band, not stadium headliners.',
        aliases: [],
      },

      'Stray': {
        bio: 'UK hard rock, niche.',
        aliases: [],
      },

      'Hustler': {
        bio: 'No.',
        aliases: [],
      },

      'Starfighters': {
        bio: 'No.',
        aliases: [],
      },

      'Tucky Buzzard': {
        bio: 'No.',
        aliases: [],
      },

      'Trapeze': {
        bio: 'UK hard rock with Glenn Hughes, minor arena in UK.',
        aliases: [],
      },

      'Slade': {
        bio: 'UK glam rock giants, massive arena acts in the 70s UK, sold out stadiums, with anthemic singles. Definitely fits Classic Rock / Arena Rock in UK context; need list? likely missing.',
        aliases: [],
      },

      'Geordie': {
        bio: 'Brian Johnson\'s pre-AC/DC band, smaller following.',
        aliases: [],
      },

      'Bux': {
        bio: 'No.',
        aliases: [],
      },

      'The Tubes': {
        bio: '70s theatrical rock band, \'White Punks on Dope\', but more cabaret/art-rock than straightforward arena rock, but they did play big venues with tongue-in-cheek. Might fit. Check.',
        aliases: [],
      },

      'The Dictators': {
        bio: 'Punk rock, not arena.',
        aliases: [],
      },

      'The Runaways': {
        bio: 'All-female hard rock band, late 70s, but never achieved arena success, more cult in US, some in Japan. Not in this taxonomy?',
        aliases: [],
      },

      'The Purples': {
        bio: 'No.',
        aliases: [],
      },

      'Ian Hunter': {
        bio: 'Solo career after Mott, less arena.',
        aliases: [],
      },

      'Dust': {
        bio: 'NYC hard rock w/ Richie, but short-lived.',
        aliases: [],
      },

      'Sir Lord Baltimore': {
        bio: 'Proto-metal, not arena.',
        aliases: [],
      },

      'The Heavy Metal Kids': {
        bio: 'No.',
        aliases: [],
      },

      'Silver Condor': {
        bio: 'No.',
        aliases: [],
      },

      'Rick Derringer': {
        bio: 'Hustler? He had solo hits, but more fusion/blues.',
        aliases: [],
      },

      'Edgar Winter': {
        bio: 'Jazz-rock/blues, \'Frankenstein\' is a hit but not classic arena rock with guitar anthems.',
        aliases: [],
      },

      'Johnny Winter': {
        bio: 'Blues-rock, more Southern festival circuit.',
        aliases: [],
      },

      'The Motors': {
        bio: 'Pub-rock/new wave, too small.',
        aliases: [],
      },

      'Radio Stars': {
        bio: 'No.',
        aliases: [],
      },

      'The Boomtown Rats': {
        bio: 'New wave.',
        aliases: [],
      },

      'The Undertones': {
        bio: 'Punk/pop.',
        aliases: [],
      },

      'The Police': {
        bio: 'New wave/pop-rock, but did play arenas. However more new wave. Not in this list likely. But some of their hits are anthemic stadium?',
        aliases: [],
      },
    },

    'Post-Punk / New Wave': {
      'Joy Division': {
        bio: "The bleak, industrial-toned architects of post-punk whose atmospheric production defined the Factory Records sound and the genre's gothic wing.",
        aliases: ['joydivision', 'joy division.', 'joy divison', 'Ian Curtis'],
      },

      'The Cure': {
        bio: "Robert Smith's towering vision evolved from sparse, angular post-punk into lush, stadium-filling gothic pop, defining the aesthetics of 80s alternative music.",
        aliases: ['Cure', 'thecure', 'the cure.', 'Robert Smith'],
      },

      'The Cars': {
        bio: "Ric Ocasek's incredibly tight, synth-laced power-pop bridged the gap between CBGB punk energy and massive MTV-era new wave commercial success.",
        aliases: ['the cars.', 'thecars', 'ric ocasek'],
      },

      'Blondie': {
        bio: "Debbie Harry and Chris Stein's CBGB-born outfit effortlessly fused punk, disco, reggae, and new wave into some of the most enduring pop of the late 70s.",
        aliases: ['blondie.', 'debbie harry'],
      },

      'Talking Heads': {
        bio: "CBGB art-punks turned global superstars, David Byrne's twitchy paranoia and Brian Eno's polyrhythmic production created the most cerebral dance music of the 80s.",
        aliases: ['talkingheads', 'talking heads.', 'David Byrne', 'david byrne.', 'talking-heads'],
      },

      'Wire': {
        bio: "Their debut 'Pink Flag' is the Rosetta Stone of post-punk, stripping rock down to its barest, most minimalist, and intelligent essentials.",
        aliases: ['Wire (Band)', 'wire.', 'wire band'],
      },

      'Gang of Four': {
        bio: "The Marxist funk-punk originators whose jagged, feedback-laced guitar sound on 'Entertainment!' directly influenced everything from R.E.M. to the 2000s post-punk revival.",
        aliases: ['gangoffour', 'gang of four.', 'gof'],
      },

      'Siouxsie and the Banshees': {
        bio: "True post-punk royalty whose tribal drumming, icy guitars, and Siouxsie Sioux's commanding wail laid the foundation for goth and darkwave.",
        aliases: ['Siouxsie & the Banshees', 'siouxsie', 'siouxsie and the banshees.', 'siousxie and the banshees'],
      },

      'Bauhaus': {
        bio: "One of the defining post-punk acts whose stark, angular sound on tracks like 'Bela Lugosi's Dead' helped establish the genre's gothic wing.",
        aliases: ['bauhaus.', 'bauhaus band', 'bauhaus (band)', 'bau haus', 'peter murphy bauhaus', 'bahaus'],
      },

      'Echo & the Bunnymen': {
        bio: "Liverpool's finest post-punk group whose richly atmospheric guitar sound and Ian McCulloch's baritone voice made them one of the genre's most acclaimed acts.",
        aliases: ['echo and the bunnymen', 'echo&the bunnymen', 'echo and the bunny men', 'echoandthebunnymen', 'echo & the bunnymen.', 'the bunnymen', 'ian mcculloch', 'echo and the bunneymen', 'echo & bunnymen'],
      },

      'Public Image Ltd': {
        bio: "John Lydon's post-Sex Pistols project was a radical post-punk experiment, blending dub bass, abrasive guitar, and avant-garde structures.",
        aliases: ['public image limited', 'pil', 'p.i.l.', 'p.i.l', 'public image ltd.', 'publicimageltd', 'public image', 'john lydon pil'],
      },

      'The Fall': {
        bio: "Mark E. Smith's endlessly prolific and confrontational group defined the rawer, more experimental end of post-punk across four decades.",
        aliases: ['thefall', 'the fall.', 'fall', 'the fall band', 'mark e smith', 'mark e. smith', 'the fall (band)', 'thee fall'],
      },

      'Devo': {
        bio: "Akron's de-evolution pioneers fused art-school conceptualism with jerky synth-driven new wave, producing some of the genre's most iconic and subversive pop.",
        aliases: ['devo.', 'devo band', 'de-vo', 'd.e.v.o', 'd.e.v.o.', 'devo (band)', 'mark mothersbaugh'],
      },

      'The Chameleons': {
        bio: "A deeply influential cult post-punk band from Manchester whose lush, reverb-drenched guitar interplay on 'Script of the Bridge' is considered a genre masterpiece.",
        aliases: ['thechameleons', 'the chameleons.', 'chameleons', 'the chameleons uk', 'chameleons uk', 'the chameleonsuk', 'the chamelons'],
      },

      'Killing Joke': {
        bio: "Their crushing, tribal rhythms and metallic guitar textures made them one of post-punk's heaviest and most intense acts.",
        aliases: ['killingjoke', 'killing joke.', 'killing joke band', 'killing-joke', 'killng joke', 'kiling joke'],
      },

      'Magazine': {
        bio: "Howard Devoto's sophisticated post-punk group combined literary lyrics, jagged guitars, and dramatic keyboards to create one of the genre's most cerebral bodies of work.",
        aliases: ['magazine.', 'magazine band', 'magazine (band)', 'howard devoto magazine', 'howard devoto', 'magazne'],
      },

      'The Sound': {
        bio: 'Led by the tragically underappreciated Adrian Borland, The Sound delivered impassioned, urgent post-punk that rivals Joy Division and The Chameleons in depth and intensity.',
        aliases: ['thesound', 'the sound.', 'the sound band', 'the sound (band)', 'adrian borland', 'adrian borland the sound'],
      },

      'The Birthday Party': {
        bio: "Nick Cave's pre-Bad Seeds group played a ferocious, unhinged strain of post-punk rooted in swamp blues and expressionist noise.",
        aliases: ['thebirthdayparty', 'the birthday party.', 'birthday party', 'the birthday party band', 'nick cave birthday party', 'the birthday party (band)', 'birthdayparty'],
      },

      'A Certain Ratio': {
        bio: 'A Factory Records staple who blended post-punk angularity with funk, jazz, and electronic rhythms, representing the danceable, experimental side of the Manchester scene.',
        aliases: ['acertainratio', 'a certain ratio.', 'acr', 'a.c.r.', 'a certain ratio band', 'a certan ratio', 'a-certain-ratio'],
      },

      'The Psychedelic Furs': {
        bio: "Richard Butler's richly textured post-punk band bridged angular early work with glossy new wave pop, influencing the genre's commercial crossover.",
        aliases: ['psychedelic furs', 'thepsychedelicfurs', 'the psychedelic furs.', 'psychedelicfurs', 'pschyedelic furs', 'richard butler', 'the psych furs'],
      },

      'Pere Ubu': {
        bio: "Cleveland proto-post-punk visionaries whose avant-garde noise, unsettling atmospherics, and David Thomas's unhinged vocals predated and shaped the entire movement.",
        aliases: ['pereubu', 'pere ubu.', 'père ubu', 'pere-ubu', 'pere ubu band', 'david thomas pere ubu'],
      },

      'The Sisters of Mercy': {
        bio: 'Leeds goth-rock institution whose drum-machine-driven, baritone-vocal post-punk became a genre-defining template alongside Bauhaus and Siouxsie.',
        aliases: ['sisters of mercy', 'thesistersofmercy', 'the sisters of mercy.', 'sistersofmercy', 'sisters of mercy.', 'the sisters', 'andrew eldritch', 'the sisters of mery', 'sister of mercy', 'sisters-of-mercy'],
      },

      'Cabaret Voltaire': {
        bio: 'Sheffield industrial post-punk experimentalists whose tape-loop-heavy electronic approach paralleled Wire and Pere Ubu in deconstructing rock conventions.',
        aliases: ['cabaretvoltaire', 'cabaret voltaire.', 'cab voltaire', 'cabaret voltare', 'cabaret voltiare', 'cab volt', 'cabaret-voltaire', 'cabaret voltaire (band)', 'c.v.'],
      },

      'The Comsat Angels': {
        bio: "Sheffield post-punk group whose atmospheric, melancholic guitar-driven sound on albums like 'Sleep No More' placed them squarely alongside The Sound and The Chameleons.",
        aliases: ['comsat angels', 'thecomsatangels', 'the comsat angels.', 'comsatangels', 'the comsat angels band', 'comsat angels.', 'the comsat angelss', 'comsat-angels', 'the comsats'],
      },

      'Modern English': {
        bio: '4AD-affiliated post-punk band whose early dark records evolved into shimmering new wave, bridging the atmospheres of Cocteau Twins and Echo & the Bunnymen.',
        aliases: ['modernenglish', 'modern english.', 'modern english band', 'modern-english', 'modern english (band)', 'moder english', 'modem english'],
      },

      'The Durutti Column': {
        bio: "Factory Records' most delicate post-punk act, whose impressionistic guitar textures from Vini Reilly offered a contemplative counterpart to labelmates Joy Division.",
        aliases: ['durutti column', 'thedurutticolumn', 'the durutti column.', 'durutticolumn', 'the duritti column', 'the duruti column', 'durutti column.', 'vini reilly', 'the durutti collumn', 'the-durutti-column'],
      },

      'Tuxedomoon': {
        bio: "San Francisco post-punk experimentalists who fused synthesizers, violin, and cinematic ambition in a manner that paralleled Wire and Cabaret Voltaire's boundary-pushing ethos.",
        aliases: ['tuxedo moon', 'tuxedomoon.', 'tuxedomoon band', 'tuxedo-moon', 'tuxedomoon (band)', 'tuxdomoon', 'tuxemoon'],
      },

      'Clan of Xymox': {
        bio: 'Dutch 4AD post-punk group whose layered synths and darkly romantic songwriting made them essential peers of The Cure and Siouxsie and the Banshees.',
        aliases: ['clan of xymox band', 'clan of ximox', 'clan-of-xymox', 'clanofximox'],
      },

      'Josef K': {
        bio: 'Scottish Postcard Records legends whose angular, Franz Kafka-inspired guitar post-punk directly paralleled and rivaled Gang of Four and Wire in stripped-down intensity.',
        aliases: ['josefk', 'josef k.', 'josef k band', 'josef-k', 'josef k (band)', 'joself k', 'paul haig josef k', 'paul haig'],
      },

      'Crispy Ambulance': {
        bio: 'Manchester Factory Records post-punk band whose brooding, reverb-drenched sound was a natural companion to Joy Division and The Sound in the early 1980s.',
        aliases: ['crispyambulance', 'crispy ambulance.', 'crispy ambulance band', 'crispy-ambulance', 'crispy ambulance (band)', 'crispy ambulnce'],
      },

      'The Pop Group': {
        bio: 'Bristol post-punk radicals whose explosive fusion of funk, dub, free jazz, and agit-prop noise stood alongside Gang of Four and Pere Ubu as genre-defining deconstructors.',
        aliases: ['pop group', 'thepopgroup', 'the pop group.', 'the pop group band', 'the-pop-group', 'the pop group (band)', 'popgroup', 'mark stewart pop group', 'mark stewart'],
      },

      'The Monochrome Set': {
        bio: 'Witty, art-school post-punk group whose jangling, literate songwriting bridged the aesthetics of Wire and Talking Heads with a distinctly British eccentricity.',
        aliases: ['monochrome set', 'themonochromeset', 'the monochrome set.', 'monochromeset', 'the monochrome set band', 'the-monochrome-set', 'the monochrome set (band)', 'monocrome set'],
      },

      'Sad Lovers & Giants': {
        bio: 'Cult UK post-punk band whose shimmering, effects-laden guitar sound and atmospheric melancholy earned them deserved comparisons to Echo & the Bunnymen and The Chameleons.',
        aliases: ['sad lovers and giants', 'sadloversandgiants', 'sad lovers & giants.', 'sad lovers and giants.', 'sad-lovers-and-giants', 'sad lovers + giants', 'sadlovers&giants', 'sad lovers giants'],
      },

      'Red Lorry Yellow Lorry': {
        bio: 'Leeds post-punk band whose driving, bass-heavy gothic sound placed them firmly alongside The Sisters of Mercy and Killing Joke in the darker wing of the genre.',
        aliases: ['redlorryyellowlorry', 'red lorry yellow lorry.', 'the lorries', 'red lorry', 'red-lorry-yellow-lorry', 'red lorrie yellow lorrie', 'rlyl'],
      },

      'And Also the Trees': {
        bio: "Rural English post-punk group mentored by The Cure's Robert Smith, whose pastoral atmospherics and literary lyrics made them one of the genre's most distinctive cult acts.",
        aliases: ['andalso the trees', 'andalsothetrees', 'and also the trees.', 'and-also-the-trees', 'and also the trees band', 'also the trees', 'and also the tree'],
      },

      'Section 25': {
        bio: "Factory Records post-punk act whose blend of motorik rhythms, synths, and glacial atmospheres connected the dots between Joy Division and New Order's electronic evolution.",
        aliases: ['section25', 'section 25.', 'section twenty five', 'section-25', 'section 25 band', 'section 25 (band)', 'secton 25'],
      },

      'The Raincoats': {
        bio: 'Pioneering all-female London post-punk group whose radical, free-form deconstructions of pop and rock were as boldly experimental as Wire and Gang of Four.',
        aliases: ['raincoats', 'theraincoats', 'the raincoats.', 'the raincoats band', 'the-raincoats', 'the raincoats (band)', 'raincoats.', 'the rain coats'],
      },

      'XTC': {
        bio: 'Swindon new wave innovators whose tightly wound, angular early records sat perfectly alongside Talking Heads and Devo before evolving into baroque pop classicism.',
        aliases: ['x.t.c.', 'x.t.c', 'xtc.', 'xtc band', 'xtc (band)', 'andy partridge xtc', 'andy partridge', 'x t c'],
      },

      'The Associates': {
        bio: 'Scottish post-punk duo whose dramatic, soaring vocals from Billy Mackenzie and adventurous production rivaled The Cure and Siouxsie in emotional intensity and sonic ambition.',
        aliases: ['associates', 'theassociates', 'the associates.', 'the associates band', 'the-associates', 'the associates (band)', 'billy mackenzie', 'billy mackenzie associates', 'asociates'],
      },

      'Minimal Compact': {
        bio: 'Israeli-Belgian post-punk group whose hypnotic bass-driven sound and Middle Eastern-inflected melodies brought a unique global perspective to the Bauhaus and Killing Joke continuum.',
        aliases: ['minimalcompact', 'minimal compact.', 'minimal compact band', 'minimal-compact', 'minimal compact (band)', 'minimal compct', 'minmal compact'],
      },

      'The Teardrop Explodes': {
        bio: "Julian Cope's Liverpool post-punk/neo-psychedelic group was a key part of the same scene that produced Echo & the Bunnymen, blending new wave hooks with adventurous arrangements.",
        aliases: ['teardrop explodes', 'theteardropexplodes', 'the teardrop explodes.', 'teardropexplodes', 'the tear drop explodes', 'the-teardrop-explodes', 'julian cope teardrop', 'julian cope', 'the teardrop explodes (band)', 'tear drop explodes'],
      },

      'The Wake': {
        bio: "Quintessential Factory Records post-punk act whose shimmering, melancholic sound bridges Joy Division's darkness and New Order's synthesizer pop.",
        aliases: ['thewake', 'the wake.', 'wake', 'the wake band', 'the-wake', 'the wake (band)', 'the wake factory', 'the wake scotland'],
      },

      'Virgin Prunes': {
        bio: "Dublin's confrontational post-punk collective emerged from the same Lypton Village scene as U2 but pursued a far darker, theatrical path aligned with Bauhaus and Birthday Party.",
        aliases: ['virginprunes', 'virgin prunes.', 'the virgin prunes', 'virgin-prunes', 'virgin prunes (band)', 'virginprunes.', 'gavin friday virgin prunes', 'gavin friday', 'virgn prunes'],
      },

      'Fad Gadget': {
        bio: "Mute Records' first signing and a pioneering post-punk/industrial performer whose body-music theatrics and electronic experimentation influenced the entire darkwave lineage.",
        aliases: ['fad-gadget', 'fadgadet', 'fad gadjet', 'frank tovey fad gadget'],
      },

      'The Mekons': {
        bio: 'Leeds post-punk originators who emerged alongside Gang of Four from the same art-school milieu, delivering agit-prop post-punk with restless stylistic adventurism.',
        aliases: ['mekons', 'themekons', 'the mekons.', 'the-mekons', 'the mekons (band)', 'mekons.', 'the mekons band', 'the mecons', 'mecons'],
      },

      'The Slits': {
        bio: "Groundbreaking all-female post-punk group whose dub-inflected deconstructions of punk ran parallel to The Raincoats and Pop Group in reshaping the genre's boundaries.",
        aliases: ['slits', 'theslits', 'the slits.', 'the-slits', 'the slits (band)', 'slits.', 'the slits band', 'ari up slits', 'ari up'],
      },

      'The Au Pairs': {
        bio: "Birmingham's politically charged post-punk group combined angular Gang of Four-style guitar work with incisive feminist lyrical content.",
        aliases: ['au pairs', 'theaupairs', 'the au pairs.', 'aupairs', 'the-au-pairs', 'the au pairs (band)', 'au pairs.', 'the au pars', 'au pars'],
      },

      'Delta 5': {
        bio: 'Leeds post-punk collective featuring dual bass guitars and call-and-response vocals, emerging from the same scene as Gang of Four and The Mekons.',
        aliases: ['delta5', 'delta 5.', 'delta-5', 'delta five', 'delta 5 (band)', 'delta 5 band', 'delta5.', 'the delta 5', 'dlta 5'],
      },

      'Eyeless in Gaza': {
        bio: 'Cherry Red Records post-punk duo whose experimental, emotionally raw sound sits perfectly alongside labelmates like The Monochrome Set and Felt.',
        aliases: ['eyelessingaza', 'eyeless in gaza.', 'eyeless-in-gaza', 'eyeless in gaza (band)', 'eyeless in gaza band', 'eyless in gaza', 'eyeless gaza', 'martyn bates', 'martyn bates eyeless in gaza'],
      },

      'Swell Maps': {
        bio: 'Proto-post-punk pioneers whose lo-fi experimentalism and DIY aesthetic were a crucial bridge between first-wave punk and the post-punk underground.',
        aliases: ['swellmaps', 'swell maps.', 'the swell maps', 'swell-maps', 'swell maps (band)', 'swell maps band', 'swel maps', 'swellmaps.', 'nikki sudden swell maps'],
      },

      'Xmal Deutschland': {
        bio: "Hamburg's defining post-punk/goth group brought a Germanic intensity to the 4AD roster, bridging Siouxsie's Banshees and Clan of Xymox's darkwave.",
        aliases: ['xmaldeutschland', 'xmal deutschland.', 'x-mal deutschland', 'x mal deutschland', 'xmal-deutschland', 'xmal deutchland', 'xmal deutshland', 'xmal', 'xmal deutschland (band)'],
      },

      'Theatre of Hate': {
        bio: "Kirk Brandon's anthemic post-punk group channeled Killing Joke's tribal rhythms and Spaghetti Western guitar into a powerful, cinematic sound.",
        aliases: ['theatreofhate', 'theatre of hate.', 'theater of hate', 'theatre-of-hate', 'theatre of hate (band)', 'theatre of hate band', 'theatreofhate.', 'kirk brandon', 'kirk brandon theatre of hate'],
      },

      'Mission of Burma': {
        bio: "Boston's fiercely intellectual post-punk trio matched Wire's taut experimentalism with American noise-guitar intensity, becoming a key US post-punk touchstone.",
        aliases: ['missionofburma', 'mission of burma.', 'mission-of-burma', 'mission of burma (band)', 'mob', 'mission of burma band', 'misson of burma', 'roger miller burma'],
      },

      'The Names': {
        bio: 'Belgian post-punk group on Factory Benelux/Les Disques du Crépuscule whose tense, angular sound epitomized the Continental post-punk aesthetic alongside Minimal Compact and Tuxedomoon.',
        aliases: ['names', 'thenames', 'the names.', 'the-names', 'the names (band)', 'the names band', 'the names belgium', 'thenames.', 'the namez'],
      },

      'The Passage': {
        bio: 'Manchester post-punk group on Cherry Red whose cerebral, politically engaged sound shared the same intellectual DNA as Magazine and The Fall.',
        aliases: ['passage', 'thepassage', 'the passage.', 'the-passage', 'the passage (band)', 'the passage band', 'thepassage.', 'the passage manchester', 'dick witts'],
      },

      'Young Marble Giants': {
        bio: "Cardiff's minimalist post-punk trio created a strikingly spare, hushed sound on their sole album that profoundly influenced generations of post-punk and indie artists.",
        aliases: ['youngmarblegiants', 'young marble giants.', 'ymg', 'young-marble-giants', 'young marble giants (band)', 'young marble giants band', 'youngmarblegiants.', 'yong marble giants', 'young marple giants'],
      },

      'Lowlife': {
        bio: 'Scottish post-punk band on 4AD whose lush, atmospheric guitar sound directly extended the lineage of The Chameleons and The Comsat Angels.',
        aliases: ['lowlife.', 'lowlife band', 'lowlife (band)', 'low life', 'low-life', 'lowlife 4ad', 'lowlife scotland', 'craig lorentson lowlife', 'lowlfe'],
      },

      'The March Violets': {
        bio: 'Leeds goth-post-punk act who shared both a city and a dark, driving aesthetic with The Sisters of Mercy and Red Lorry Yellow Lorry.',
        aliases: ['march violets', 'themarchviolets', 'the march violets.', 'marchviolets', 'the-march-violets', 'the march violets (band)', 'march violets.', 'the march violettes', 'march violts'],
      },

      'The Membranes': {
        bio: "Blackpool's abrasive, bass-heavy post-punk group led by John Robb delivered a ferocious noise that sat between The Fall's anti-rock and Killing Joke's intensity.",
        aliases: ['membranes', 'themembranes', 'the membranes.', 'the-membranes', 'the membranes (band)', 'membranes.', 'the membranes band', 'john robb membranes', 'john robb'],
      },

      'Angine de Poitrine': {
        bio: 'French-language post-punk provocateurs delivering raw, angular energy with sardonic Francophone wit — the kind of tightly-wound, caffeinated noise-rock that recalls Wire and Les Thugs at their most ferocious.',
        aliases: ['angine de poitrine.', 'angine-de-poitrine', 'anginedepoitrine', 'angine', 'angine de poitrine band'],
      },

      'Orange Juice': {
        bio: 'Scottish post-punk band whose jangly, witty, and rhythmically clipped sound bridged Glasgow\'s scene with a sharp, pop-aware new wave sensibility.',
        aliases: [],
      },

      'The Stranglers': {
        bio: 'English band fusing punk\'s aggression with cold, synthetic textures and a dark, menacing groove that defined their post-punk/new wave era.',
        aliases: [],
      },

      'Oingo Boingo': {
        bio: 'Los Angeles band merging theatrical goth post-punk with ska-inflected rhythms and carnivalesque synthetic layers, fronted by Danny Elfman\'s manic howl.',
        aliases: [],
      },

      'Tones on Tail': {
        bio: 'Bauhaus offshoot led by Daniel Ash, trading goth\'s dirge for a more kinetic, beat-driven blend of darkwave, post-punk, and psychedelic dance music.',
        aliases: [],
      },

      'Flipper': {
        bio: 'San Francisco noise-rock band whose slow, dissonant, and repetitive post-punk grooves were radically abrasive yet strangely hypnotic and danceable.',
        aliases: [],
      },

      'The Soft Boys': {
        bio: 'Robyn Hitchcock\'s angular, witty post-punk-adjacent band bridged psychedelia and new wave with jittery energy and literary bite.',
        aliases: ['Soft Boys'],
      },

      'The Feelies': {
        bio: 'Seminal post-punk/new wave group from New Jersey, known for tense, rhythmic guitar interplay and a stark, hypnotic sound.',
        aliases: [],
      },

      'The Gun Club': {
        bio: 'Merged punk\'s aggression with American roots and gothic darkness, creating a raw, feverish blueprint for post-punk\'s darker edges.',
        aliases: [],
      },

      'Crime': {
        bio: 'Seminal San Francisco punk band whose raw, minimalist sound and detached cool provided a key template for later post-punk acts.',
        aliases: [],
      },

      'The Wipers': {
        bio: 'Portland punk trio whose precise, jagged guitar lines and melodic unease deeply influenced post-punk and American indie rock.',
        aliases: [],
      },

      'The Only Ones': {
        bio: 'Power-pop-tinged new wave group whose literate, melancholic songs featured angular guitar work and a darkly romantic edge.',
        aliases: [],
      },

      'The Cramps': {
        bio: 'Psychobilly originators who fused punk rawness with rockabilly and horror kitsch, sharing a gothic, theatrical spirit with the sub-category.',
        aliases: [],
      },

      'Skeletal Family': {
        bio: 'UK goth-rock band blending post-punk angularity with dark, danceable rhythms, a key part of the 1980s Leeds scene.',
        aliases: [],
      },

      'Play Dead': {
        bio: 'Oxford post-punk/goth act known for aggressive basslines and brooding atmospheres, fitting the sub-category\'s cold 1980s sound.',
        aliases: [],
      },

      'The Bolshoi': {
        bio: 'British post-punk band from the 1980s, merging jangly guitars with dark, synth-inflected new wave energy.',
        aliases: [],
      },

      'Gene Loves Jezebel': {
        bio: 'Welsh post-punk/new wave group with a gothic edge, delivering moody, danceable tracks throughout the 1980s.',
        aliases: [],
      },

      'Southern Death Cult': {
        bio: 'Early-80s gothic post-punk band led by Ian Astbury, their raw sound prefigured The Cult\'s later rock direction.',
        aliases: [],
      },

      'Sex Gang Children': {
        bio: 'British gothic post-punk pioneers, crafting theatrical, darkly danceable music that defined the early-80s Batcave scene.',
        aliases: [],
      },

      'The Danse Society': {
        bio: 'Barnsley-based gothic post-punk band, whose cold synth textures and somber vocals epitomize the sub-category\'s mood.',
        aliases: [],
      },

      'UK Decay': {
        bio: 'UK post-punk/goth forebears from Luton, mixing aggressive guitar stabs with bleak, poetic lyrics in the early 1980s.',
        aliases: [],
      },

      'The Opposition': {
        bio: 'London post-punk act, blending sparse, angular guitar work with atmospheric keys, a fit for the gothic new wave sound.',
        aliases: [],
      },

      'Into a Circle': {
        bio: 'Short-lived UK post-punk/goth duo, rooted in early-80s darkwave with electronic and tribal drumming undercurrents.',
        aliases: [],
      },

      'Paralysed Age': {
        bio: 'German gothic rock band from the 1990s, drawing on post-punk and new wave templates for a cold, danceable aesthetic.',
        aliases: [],
      },

      'Corpus Delicti': {
        bio: 'French gothic rock act, reviving 1980s post-punk gloom with baritone vocals and icy guitar lines in the 1990s.',
        aliases: [],
      },

      'The Bats': {
        bio: 'New Zealand post-punk/indie-pop band from the Flying Nun scene with melodic, jangly guitar work.',
        aliases: [],
      },

      'The Verlaines': {
        bio: 'Dunedin post-punk band with literary lyrics and jagged, dramatic arrangements, central to the Flying Nun sound.',
        aliases: [],
      },

      'The Jazz Butcher': {
        bio: 'British post-punk band blending witty, surreal lyrics with jangly, cold guitar tones in an eccentric style.',
        aliases: ['The Jazz Butcher Conspiracy'],
      },

      'The Dogs D\'Amour': {
        bio: 'UK band mixing glam-tinged punk rock with brooding, gothic undertones and raw, angular energy.',
        aliases: [],
      },

      'The Mighty Lemon Drops': {
        bio: 'British rock band fusing post-punk energy with psychedelic-pop melodies, echoing early Echo & the Bunnymen.',
        aliases: [],
      },

      'The Woodentops': {
        bio: 'UK post-punk/indie band with rhythmic, propulsive songs and a minimalist, danceable pulse.',
        aliases: [],
      },

      'The Primitives': {
        bio: 'British band with buzzsaw guitars and motorik rhythms, bridging post-punk angularity with pop hooks.',
        aliases: [],
      },

      'The Church': {
        bio: 'Australian band whose jangly, psychedelic-tinged guitar rock carved a unique niche in mid-80s post-punk and college rock.',
        aliases: [],
      },

      'The House of Love': {
        bio: 'Late-80s UK band blending jangly post-punk indie guitar with a darkly romantic, New Wave-inflected atmosphere.',
        aliases: [],
      },

      'The Wolfgang Press': {
        bio: '4AD act evolving from post-punk\'s dissonant edge into brooding, danceable synth-rock with a cold, theatrical delivery.',
        aliases: [],
      },

      'The Pale Fountains': {
        bio: 'Liverpool band merging post-punk angularity with pop melodicism and orchestral New Wave warmth in the early 80s.',
        aliases: [],
      },

      'The Ocean Blue': {
        bio: 'American quartet blending jangly indie pop with a polished, synth-tinged New Wave demeanor, evoking late-80s melancholic cool.',
        aliases: [],
      },

      'The Wild Swans': {
        bio: 'Liverpool post-punk group from the early 80s, merging neoclassical drama and angular guitar with Peter Pan mythos.',
        aliases: [],
      },

      'The Essence': {
        bio: 'Dutch post-punk/coldwave band from the 80s, channeling dark, angular art-rock with a danceable undercurrent.',
        aliases: [],
      },

      'The Dance Society': {
        bio: '80s UK act blending ethereal goth and post-punk with steady, synthetic rhythms, a lesser-known pillar of the scene.',
        aliases: [],
      },

      'The Nightingales': {
        bio: 'Birmingham post-punk stalwarts led by former Swell Maps member, delivering jittery, angular art-punk with sardonic wit.',
        aliases: [],
      },

      'TV Smith': {
        bio: 'Singer-songwriter from punk era, whose solo work in the 80s adopted cold, synth-driven New Wave textures with a post-punk edge.',
        aliases: [],
      },

      'The Lords of the New Church': {
        bio: 'This gothic-punk supergroup (Dead Boys, Sham 69) fused garage rock\'s rawness with post-punk\'s theatrical gloom and new wave\'s sheen.',
        aliases: ['Lords of the New Church'],
      },

      'Adam and the Ants': {
        bio: 'With their Burundi drum beat and tribal-warrior posturing, they created a uniquely angular, danceable sound that bridged post-punk and new pop.',
        aliases: ['Adam & the Ants'],
      },

      'Bow Wow Wow': {
        bio: 'Produced by Malcolm McLaren, they channeled the leftover tribal-punk energy of the Ants into early-80s, synth-skanking new wave pop.',
        aliases: ['Bowwowwow'],
      },

      'The Glove': {
        bio: 'A one-off art-goth supergroup formed by Robert Smith (The Cure) and Steven Severin (Siouxsie and the Banshees), creating a dreamy, synth-laden side project classic.',
        aliases: ['The Glove'],
      },

      'The Pandoras': {
        bio: 'US garage-punk revivalists whose raw, abrasive sound nodded to 1960s grit and post-punk attitude.',
        aliases: [],
      },

      'The Lyres': {
        bio: 'Boston garage-rock band fronted by Jeff Connolly, fusing organ-driven frenetic energy with punk minimalism.',
        aliases: [],
      },

      'The Dream Syndicate': {
        bio: 'US band at the forefront of the Paisley Underground, mixing psychedelia with stark post-punk tension.',
        aliases: [],
      },

      'The Rain Parade': {
        bio: 'LA\'s Paisley Underground group, blending dreamy melodies with a darker, post-punk-informed jangle.',
        aliases: [],
      },

      'The Three O\'Clock': {
        bio: 'Paisley Underground mainstays whose early work fused 1960s pop with new wave angularity.',
        aliases: [],
      },

      'The Bangles': {
        bio: 'Early on, this LA band played garage-psych and new wave before pop fame, echoing post-punk simplicity.',
        aliases: [],
      },

      'The Long Ryders': {
        bio: 'LA cowpunk act merging garage rock, punk, and country, sharing the underground\'s late-70s ethos.',
        aliases: [],
      },

      'The Fleshtones': {
        bio: 'New York garage-rock purists whose energetic, organ-heavy sound carried a post-punk edge from the late 70s onward.',
        aliases: [],
      },

      'A Flock of Seagulls': {
        bio: 'Liverpool act built on icy synth arpeggios, trebly guitar, and emotionally detached, danceable new wave pop.',
        aliases: [],
      },

      'Men at Work': {
        bio: 'Australian band from the early 80s blending reggae-inflected rhythms with art-rock angularity and lyrical wit, fitting the new wave callback.',
        aliases: [],
      },

      'The Motels': {
        bio: 'Martha Davis-led band merging new wave pop with a dark, emotionally charged undercurrent that recalls post-punk sensitivity.',
        aliases: [],
      },

      'The Mission': {
        bio: 'Founded by former Sisters of Mercy bassist Craig Adams and guitarist Wayne Hussey, this act evolved into a goth-rock powerhouse with more extroverted sound.',
        aliases: ['The Mission UK'],
      },

      'Live Skull': {
        bio: 'New York no-wave/post-punk band, contemporaries of Sonic Youth, their abrasive, minimal rock fits the angular 1980s underground.',
        aliases: [],
      },

      'The Sugarcubes': {
        bio: 'Icelandic band blending post-punk quirk, gothic undertones, and synth-driven alt-rock in a uniquely angular fashion.',
        aliases: [],
      },

      'The Monkees': {
        bio: 'While primarily psych-pop, their later-new-wave/post-punk inspired tracks like \'Angel, Fear No Evil\' align with angular rock.',
        aliases: [],
      },

      'Women': {
        bio: 'Canadian quartet whose jagged, dissonant guitar interplay and deadpan vocals echo early post-punk\'s angularity.',
        aliases: [],
      },

      'Preoccupations': {
        bio: 'Calgary band crafting cold, motorik-driven post-punk with brooding basslines and dystopian lyrics.',
        aliases: [],
      },

      'Iceage': {
        bio: 'Danish group that evolved from punk to dark, angular post-punk with literary gravitas and stark delivery.',
        aliases: [],
      },

      'Protomartyr': {
        bio: 'Detroit quartet fusing spoken-word vocals with terse, disjointed post-punk guitar attacks and bleak atmospherics.',
        aliases: [],
      },

      'Ought': {
        bio: 'Montreal outfit delivering anxious, artful post-punk with conversational vocals and wiry, tense instrumentation.',
        aliases: [],
      },

      'Pylon': {
        bio: 'Athens, Georgia post-punk pioneers known for spiky, rhythmic guitar riffs and danceable, jerky grooves.',
        aliases: [],
      },

      'The Van Pelt': {
        bio: 'New Jersey quartet whose slanted, dissonant indie-rock leans heavily on post-punk\'s clipped, talk-sung delivery.',
        aliases: [],
      },

      'Bush Tetras': {
        bio: 'New York no-wave/post-punk ensemble with raw, syncopated rhythms, minimal bass lines and stark vocals.',
        aliases: [],
      },

      'The Dead Milkmen': {
        bio: 'Though punk-comedy, their wiry, droning guitar and spoken-word style often channel post-punk\'s off-kilter cool.',
        aliases: [],
      },

      'Gang of Youths': {
        bio: 'Australian rock band whose later output incorporates new-wave synthesizers and angular, literary post-punk touches.',
        aliases: [],
      },

      'Shame': {
        bio: 'South London post-punk band with jagged guitars, stark narratives, and tense, motoric energy.',
        aliases: [],
      },

      'She Past Away': {
        bio: 'Turkish dark wave duo reviving 1980s post-punk with cold synths, gothic vocals, and danceable, minimalist beats.',
        aliases: [],
      },

      'Molchat Doma': {
        bio: 'Belarusian post-punk band crafting stark, hypnotic tracks with Soviet-era aesthetics and sparse, synthetic textures.',
        aliases: [],
      },

      'Twin Tribes': {
        bio: 'Texan dark wave act fusing post-punk rhythms with haunting synth melodies, channeling early-80s gothic and new wave energy.',
        aliases: [],
      },

      'Fields of the Nephilim': {
        bio: 'Mystical, cinematic gothic rock with a heavy metal undercurrent, known for their dark, atmospheric, and psych-rock-influenced soundscapes.',
        aliases: [],
      },

      'The Soundtrack of Our Lives': {
        bio: 'Swedish neo-psychedelic post-punk band with angular rhythms and 80s synth textures; critically acclaimed in the 1990s and 2000s.',
        aliases: [],
      },

      'The Chameleons Vox': {
        bio: 'The Chameleons Vox is the reformed version of The Chameleons, maintaining their ethereal, angular post-punk sound in recent years.',
        aliases: [],
      },

      'The Nephilim': {
        bio: 'The Nephilim is a continuation of Fields of the Nephilim, delivering gothic post-punk with brooding atmosphere and gothic rock drones.',
        aliases: [],
      },

      'Love and Rockets': {
        bio: 'Love and Rockets emerged from Bauhaus\'s ashes, blending gothic post-punk with psychedelic and synth-driven danceable rock.',
        aliases: [],
      },

      'Peter Murphy': {
        bio: 'Solo career of Bauhaus frontman, exploring dark, theatrical post-punk and synth-laden new wave from the 1980s onward.',
        aliases: [],
      },

      'And the Native Ones': {
        bio: 'A rare 1980s Polish post-punk band, combining angular guitars with cold, synthetic textures reflective of Eastern European underground.',
        aliases: [],
      },

      'Neon Anthems': {
        bio: 'A lesser-known 1980s new wave band whose music centered on angular post-punk structures with early synth-pop flourishes.',
        aliases: [],
      },

      'The Antarcticans': {
        bio: 'Formed from the ashes of The Sound, they continued the band\'s melancholic, angular post-punk legacy into the 1990s.',
        aliases: [],
      },

      'The Vyllies': {
        bio: 'A contemporary band that channels the cold, danceable gothic post-punk of the early 80s with modern production.',
        aliases: [],
      },

      'Corpus Delicti (UK)': {
        bio: 'An alias for the French gothic rock band Corpus Delicti, despite the name drop; they embody dark, angular post-punk with synth textures.',
        aliases: [],
      },

      'Sylvester Anfang II': {
        bio: 'Belgian project mixing post-punk, industrial, and gothic, echoing the darker, experimental side of the genre.',
        aliases: [],
      },

      'Pink Turns Blue': {
        bio: 'German gothic rock/post-punk band formed in the 1980s, known for cold, melancholic melodies and a danceable undercurrent.',
        aliases: [],
      },
    },

    'Progressive / Experimental': {
      'King Gizzard & The Lizard Wizard': {
        bio: "The relentlessly prolific Australian psych collective who treat genre as a sandbox—microtonal rock, thrash, boogie, and prog, often several albums deep in a single year.",
        aliases: ['king gizzard', 'the lizard wizard', 'kglw', 'king gizzard and the lizard wizard'],
      },

      'Yes': {
        bio: "The foundational kings of progressive rock whose albums 'Close to the Edge' and 'Fragile' define the genre's ambitious, symphonic peak.",
        aliases: ['yes.', 'yes (band)', 'yes band', 'jon anderson'],
      },

      'Genesis': {
        bio: "Peter Gabriel and Phil Collins's project evolved from weird, theatrical avant-prog into one of the most successful pop-prog bands in history.",
        aliases: ['genesis.', 'genesis (band)', 'genesis band', 'peter gabriel'],
      },

      'Frank Zappa': {
        bio: 'The ultimate composer-iconoclast; his sprawling discography blends doo-wop, free jazz, orchestral avant-garde, and blistering guitar rock into pure genius.',
        aliases: ['frank zappa.', 'zappa', 'f. zappa', 'the mothers of invention'],
      },

      'King Crimson': {
        bio: 'The defining pioneers of progressive rock whose debut basically invented the genre, balancing crushing mellotrons with delicate jazz-rock interludes.',
        aliases: ['kingcrimson', 'king crimsn', 'king crimson.', 'KC', 'robert fripp'],
      },

      'The Mars Volta': {
        bio: "Omar Rodríguez-López and Cedric Bixler-Zavala's post-hardcore prog juggernaut, marrying blistering punk energy to Santana-esque Latin-fusion and King Crimson complexity.",
        aliases: ['Mars Volta', 'TMV', 'The Mars Volta.'],
      },

      'Steven Wilson': {
        bio: 'The modern king of progressive rock and reference-grade 5.1 surround mixes, an absolute titan of high-fidelity art-rock and atmospheric production.',
        aliases: ['Steve Wilson', 'S. Wilson', 'Steven Wilson.'],
      },

      'Porcupine Tree': {
        bio: "Wilson's main project transitioned from psychedelic space-rock into heavy, metal-infused modern prog, delivering some of the most flawlessly engineered rock records of the 2000s.",
        aliases: ['porcupinetree', 'porcupine tree.', 'pocupine tree', 'PT'],
      },

      'Tortoise': {
        bio: "Chicago post-rock pioneers whose jazz-inflected, vibraphone-heavy instrumentals on 'Millions Now Living Will Never Die' became the gold standard for 90s experimental rock.",
        aliases: ['Tortoise (Band)'],
      },

      'Can': {
        bio: "The quintessential krautrock band whose improvisational genius and Jaki Liebezeit's motorik drumming essentially laid the groundwork for post-punk, ambient, and modern electronic music.",
        aliases: ['Can (Band)', 'can.', 'The Can'],
      },

      'Magma': {
        bio: "Christian Vander's completely unique creation: singing in an invented language (Kobaïan), blending Carl Orff, John Coltrane, and heavy prog into the terrifying genre known as Zeuhl.",
        aliases: ['Magma (Band)', 'magma.'],
      },

      'Slint': {
        bio: "Their album 'Spiderland' practically invented the quiet-loud dynamics and spoken-word intensity of 90s post-rock, directly influencing Mogwai and Explosions in the Sky.",
        aliases: ['slint.', 'slint (band)'],
      },

      'This Heat': {
        bio: "A terrifying, brilliant post-punk/experimental trio whose manipulation of tape loops and abrasive noise on 'Deceit' anticipated industrial rock and math rock by decades.",
        aliases: ['thisheat', 'this heat.'],
      },

      'Battles': {
        bio: 'Math-rock virtuosos who turned loop pedals and interlocking rhythmic complexity into joyous, danceable experimental pop.',
        aliases: ['battles.', 'battles (band)'],
      },

      'Don Caballero': {
        bio: "The absolute godfathers of instrumental math-rock, whose shifting time signatures and Damon Che's octopus-like drumming established a completely new rock vocabulary.",
        aliases: ['Don Cab', 'doncaballero', 'don cabalero'],
      },

      'Bark Psychosis': {
        bio: "'Hex' coined the very term 'post-rock', blending ambient textures, jazz instrumentation, and Talk Talk-esque minimalism into breathtakingly fragile compositions.",
        aliases: ['barkpsychosis', 'bark psychosis.'],
      },

      'Faust': {
        bio: "Foundational krautrock collective whose radical tape-splicing collages and industrial experimentation directly parallel Can's avant-garde approach to rock deconstruction.",
        aliases: ['faust (band)', 'faust (krautrock)', 'faust.', 'faust (germany)'],
      },

      'Neu!': {
        bio: "Klaus Dinger and Michael Rother's motorik-driven krautrock duo pioneered hypnotic repetition techniques that profoundly influenced post-rock and experimental music.",
        aliases: ['neu', 'neu !', 'neu!.', 'neu! (band)'],
      },

      'Van der Graaf Generator': {
        bio: "Peter Hammill's darkly complex progressive rock ensemble pushed the genre toward abrasive, avant-garde territory that presaged post-punk and experimental rock.",
        aliases: ['vdgg', 'van der graaf', 'vandergraaf generator', 'van der graaf generator.', 'van der graf generator', 'van de graaf generator'],
      },

      'Henry Cow': {
        bio: 'Defining Rock in Opposition collective whose fusion of free improvisation, contemporary classical, and rock made them among the most uncompromising avant-prog ensembles ever.',
        aliases: ['henrycow', 'henry cow.', 'henry cow (band)'],
      },

      'Univers Zero': {
        bio: 'Belgian chamber-rock pioneers whose Gothic, Bartók-influenced compositions represent the darkest extreme of the European avant-prog and RIO movements alongside Magma.',
        aliases: ['univers zéro', 'univers 0', 'universzero', 'univers zero.', 'univers zéro.'],
      },

      'Ruins': {
        bio: "Tatsuya Yoshida's Japanese duo fuses zeuhl intensity with math-rock precision, sitting squarely at the intersection of Magma's influence and Don Caballero's rhythmic complexity.",
        aliases: ['ruins.', 'ruins (band)', 'ruins (japan)', 'ruins alone'],
      },

      'Godspeed You! Black Emperor': {
        bio: 'Montreal post-rock collective whose sprawling, politically charged orchestral compositions expanded the possibilities of experimental rock into cinematic, large-ensemble territory.',
        aliases: ['godspeed you black emperor', 'gybe', 'gy!be', 'godspeed', 'godspeed you! black emperor.', 'god speed you black emperor', 'godspeed you !black emperor', 'g y!b e'],
      },

      'Swans': {
        bio: "Michael Gira's ever-evolving project traversed no wave brutalism, gothic drone, and transcendent post-rock maximalism across four decades of uncompromising experimental rock.",
        aliases: ['swans.', 'swans (band)', 'the swans'],
      },

      'Cardiacs': {
        bio: "Tim Smith's cult UK ensemble fused punk energy with dizzying prog complexity and avant-garde pop in a singular, wildly inventive style that influenced a generation of experimental rock acts.",
        aliases: ['cardiacs.', 'cardiacs (band)', 'the cardiacs', 'cardiac'],
      },

      'Hella': {
        bio: "Zach Hill and Spencer Seim's frenetic duo pushed math rock to its most virtuosic and chaotic extremes, extending the legacy of Don Caballero and Battles into noise-rock territory.",
        aliases: ['hella.', 'hella (band)'],
      },

      'Thinking Plague': {
        bio: "Denver's deep-cut avant-prog visionaries blended Rock in Opposition aesthetics with American experimentalism, creating densely orchestrated and rhythmically labyrinthine compositions rivaling Henry Cow in ambition.",
        aliases: ['thinkingplague', 'thinking plague.', 'thinking plague (band)'],
      },

      'Gentle Giant': {
        bio: 'Masters of interlocking counterpoint and complex time signatures, Gentle Giant are one of the most technically ambitious bands in 1970s progressive rock.',
        aliases: ['gentlegiant', 'gentle giant.', 'gentle gaint', 'gg'],
      },

      'Amon Düül II': {
        bio: 'A foundational krautrock collective whose sprawling psychedelic-progressive compositions parallel Can and Faust in experimental ambition.',
        aliases: ['amon duul ii', 'amon düül 2', 'amon duul 2', 'amon duul', 'amon dül ii', 'amon düül', 'amondüülii', 'amon duül ii.'],
      },

      'Art Bears': {
        bio: 'Born directly from Henry Cow, Art Bears pushed avant-prog into darker, more deconstructed territory across three essential albums.',
        aliases: ['artbears', 'art bears.', 'art bears (band)', 'the art bears'],
      },

      'Soft Machine': {
        bio: 'Canterbury scene founders who evolved from psychedelic pop into jazz-inflected experimental prog, influencing decades of adventurous rock.',
        aliases: ['softmachine', 'soft machine.', 'the soft machine', 'soft machine (band)', 'soft machne'],
      },

      'Hatfield and the North': {
        bio: 'A Canterbury scene pinnacle blending whimsical progressive composition with jazz fusion complexity and absurdist wit.',
        aliases: ['hatfield & the north', 'hatfieldandthenorth', 'hatfield and the north.', 'hatfield + the north'],
      },

      'Area': {
        bio: "Italy's most radical RIO-adjacent progressive group, fusing avant-jazz, electronic experimentation, and politically charged free-form rock.",
        aliases: ['area (band)', 'area (italy)', 'area.', 'area (italian band)', 'area international popular group'],
      },

      'Present': {
        bio: 'Belgian RIO chamber-rock ensemble and close Univers Zéro allies whose crushing, dissonant compositions define the darkest edge of avant-prog.',
        aliases: ['present (band)', 'present.', 'present (belgium)', 'présent'],
      },

      'Ash Ra Tempel': {
        bio: 'Krautrock visionaries whose cosmic guitar explorations and proto-ambient electronic work sit alongside Tangerine Dream and Cluster as Berlin-school pioneers.',
        aliases: ['ashratempel', 'ash ra tempel.', 'ashra tempel', 'ashra', 'ash ra temple', 'ash ra'],
      },

      'Cluster': {
        bio: 'Foundational krautrock and proto-ambient duo whose minimalist electronic experiments with Roedelius and Moebius influenced vast swaths of experimental music.',
        aliases: ['cluster.', 'cluster (band)', 'cluster (krautrock)', 'kluster'],
      },

      'Deerhoof': {
        bio: 'Restlessly inventive experimental rock band whose playful noise-pop deconstructions and angular compositions echo the spirit of Cardiacs and Hella.',
        aliases: ['deerhoof.', 'deerhoof (band)', 'deer hoof', 'dear hoof'],
      },

      'Boredoms': {
        bio: 'Japanese noise-rock experimentalists whose trajectory from chaotic punk to transcendent percussive psychedelia is one of the most radical arcs in experimental rock.',
        aliases: ['boredoms.', 'boredoms (band)', 'the boredoms', 'booredoms', 'v∞redoms'],
      },

      'Tera Melos': {
        bio: 'Math-rock inheritors of Don Caballero and Hella whose hyperactive guitar interplay and restless structural invention define modern experimental rock.',
        aliases: ['teramelos', 'tera melos.', 'tera melos (band)', 'terra melos'],
      },

      'Shellac': {
        bio: "Steve Albini's brutally precise post-hardcore trio whose minimalist, angular attack and uncompromising production ethos exemplify experimental rock rigor.",
        aliases: ['shellac.', 'shellac (band)', 'shelac', 'shellac of north america'],
      },

      'Polvo': {
        bio: 'Chapel Hill experimentalists whose microtonally detuned guitars and unpredictable song structures bridged indie rock and genuine progressive ambition in the 1990s.',
        aliases: ['polvo.', 'polvo (band)'],
      },

      'Comus': {
        bio: "Cult acid-folk progressives whose unhinged 1971 debut 'First Utterance' remains one of the most unsettling and original albums in the British prog lineage.",
        aliases: ['comus.', 'comus (band)', 'comus (uk)'],
      },

      'Miriodor': {
        bio: 'Montréal-based RIO/avant-prog chamber ensemble whose intricate, cinematic compositions sit naturally alongside Univers Zéro and Thinking Plague.',
        aliases: ['miriodor.', 'miriodor (band)'],
      },

      'Goblin': {
        bio: 'Italian progressive rock group whose dark, rhythmically complex soundtrack work for Argento films created a uniquely sinister strain of experimental prog.',
        aliases: ['goblin.', 'goblin (band)', 'goblin (italy)', 'the goblin'],
      },

      'Robert Wyatt': {
        bio: 'Former Soft Machine drummer and vocalist whose solo career is a singular journey through avant-garde song, jazz experimentation, and heartbreaking beauty.',
        aliases: ['robertwyatt', 'robert wyatt.', 'r. wyatt', 'rob wyatt'],
      },

      'Popol Vuh': {
        bio: 'Krautrock mystics whose pioneering use of Moog synthesizers and devotional improvisation created a spiritual counterpart to the experimentalism of Can and Faust.',
        aliases: ['popolvu', 'popol vuh.', 'popol vuh (band)', 'popol vuh (krautrock)'],
      },

      'Koenjihyakkei': {
        bio: "Japanese zeuhl ensemble directly extending Magma's legacy with ferocious polyrhythmic complexity, standing alongside Ruins as the genre's most vital non-French practitioners.",
        aliases: ['koenji hyakkei', 'koenjihyakkei.', 'koenji hyakei', 'koenjihyakei', '高円寺百景'],
      },

      'Etron Fou Leloublan': {
        bio: 'Core Rock in Opposition collective member alongside Henry Cow and Art Bears, blending frantic avant-prog with absurdist punk energy.',
        aliases: ['etron fou', 'etronfou', 'etron fou leloublan.', 'étron fou leloublan', 'etron fou le loublan'],
      },

      'Gong': {
        bio: "Canterbury-scene pillar whose Radio Gnome trilogy is a landmark of space-infused progressive experimentation, directly tied to Soft Machine's orbit.",
        aliases: ['gong.', 'gong (band)', 'gong (uk)', 'gong band', 'planet gong'],
      },

      'National Health': {
        bio: 'Canterbury supergroup featuring members of Hatfield and the North and Soft Machine, continuing the tradition of intricate, jazz-laced British prog.',
        aliases: ['nationalhealth', 'national health.', 'national health (band)', 'nat health'],
      },

      'Egg': {
        bio: 'Early Canterbury scene trio whose organ-driven compositions bridged classical minimalism and progressive rock before the genre had a name.',
        aliases: ['egg.', 'egg (band)', 'egg (canterbury)', 'egg (uk)', 'egg band'],
      },

      'Harmonia': {
        bio: 'Krautrock supergroup uniting members of Cluster and Neu!, creating shimmering proto-ambient electronic rock that Brian Eno famously sought out.',
        aliases: ['harmonia.', 'harmonia (band)', 'harmonia (krautrock)', 'harmonia76'],
      },

      'Guru Guru': {
        bio: "Ferocious early krautrock trio whose acid-drenched improvisations paralleled Can and Amon Düül II at the genre's most unhinged extreme.",
        aliases: ['guruguru', 'guru guru.', 'guru guru (band)', 'guru-guru', 'gurú gurú'],
      },

      'The Residents': {
        bio: 'Anonymous avant-garde collective whose five-decade career of radical deconstruction of popular music forms defines American experimental rock.',
        aliases: ['residents', 'theresidents', 'the residents.', 'residents (band)', 'the residents (band)'],
      },

      'Acid Mothers Temple': {
        bio: 'Prolific Japanese psychedelic collective channeling the cosmic freakout energy of krautrock and noise into sprawling, overwhelming improvisations.',
        aliases: ['acidmotherstemple', 'acid mothers temple.', 'amt', 'acid mothers', 'acid mothers temple & the melting paraiso u.f.o.', 'acid mothers temple (band)'],
      },

      'Ånglagård': {
        bio: 'Swedish progressive rock revivalists whose dense, darkly orchestrated compositions are among the most acclaimed in the 1990s prog renaissance.',
        aliases: ['anglagard', 'ånglagard', 'anglagård', 'anglagard.', 'ånglagård.', 'anglagard (band)'],
      },

      'Weidorje': {
        bio: 'Short-lived Zeuhl side project featuring Magma alumni, producing a single self-titled album regarded as essential in the Zeuhl canon.',
        aliases: ['weidorje.', 'weidorje (band)', 'weidorje (zeuhl)', 'weïdorje'],
      },

      'Shub-Niggurath': {
        bio: 'French avant-prog/Zeuhl-adjacent group whose claustrophobic, dissonant chamber rock sits perfectly between Univers Zero and Magma.',
        aliases: ['shub niggurath', 'shubniggurath', 'shub-niggurath.', 'shub-niggurath (band)', 'shub-niggurath (french band)', 'shub niggurath (france)'],
      },

      'Chrome': {
        bio: 'San Francisco experimentalists whose corrosive, tape-manipulated proto-industrial rock was decades ahead of its time, influencing noise and industrial music.',
        aliases: ['chrome.', 'chrome (band)', 'chrome (sf)', 'chrome (san francisco)', 'chrome band'],
      },

      'Sleepytime Gorilla Museum': {
        bio: 'Bay Area avant-prog collective combining RIO compositional complexity with homemade instruments and theatrical intensity reminiscent of Henry Cow and Cardiacs.',
        aliases: ['sleepytimegorillamuseum', 'sleepytime gorilla museum.', 'sgm', 'sleepytime gorilla', 'sleep time gorilla museum'],
      },

      'Happy Family': {
        bio: 'Japanese Zeuhl group featuring members of Ruins and Koenjihyakkei, completing the trinity of essential Japanese Magma-inspired bands.',
        aliases: ['happyfamily', 'happy family.', 'happy family (band)', 'happy family (japan)', 'happy family (zeuhl)'],
      },

      'Birdsongs of the Mesozoic': {
        bio: 'Boston chamber-rock ensemble bridging the aesthetic of Art Bears and Univers Zero with post-punk energy and modernist composition.',
        aliases: ['birdsongs', 'birdsongsofthemesozoic', 'birdsongs of the mesozoic.', 'birdsong of the mesozoic', 'b.o.t.m.'],
      },

      'Dün': {
        bio: "Obscure French progressive group whose sole album 'Eros' is a cult masterpiece of Zeuhl-adjacent symphonic experimentalism.",
        aliases: ['dun', 'dün.', 'dun.', 'dün (band)', 'dun (band)', 'dün (france)', 'dun (french band)'],
      },

      '5uu\'s': {
        bio: 'Dave Kerman-led avant-prog group directly extending the Rock in Opposition tradition with jagged, rhythmically complex compositions alongside Present and Thinking Plague.',
        aliases: ['5uus', '5uu\'s.', '5 uu\'s', '5uu\'s (band)', 'five uu\'s', '5uus band'],
      },

      'Upsilon Acrux': {
        bio: 'Los Angeles math-rock/avant-prog duo whose hypercomplex, through-composed guitar instrumentals push the Don Caballero lineage to its logical extreme.',
        aliases: ['upsilonacrux', 'upsilon acrux.', 'upsilon acrux (band)', 'υ acrux'],
      },

      'Zeni Geva': {
        bio: "KK Null's punishing Japanese noise-rock project that bridges Swans-level heaviness with Boredoms-style psychedelic extremity and mathematical precision.",
        aliases: ['zenigeva', 'zeni geva.', 'zeni geva (band)', 'zenni geva', 'zeni geva (japan)'],
      },

      'Todd Rundgren': {
        bio: "A prodigious pop-rock genius whose solo works like 'Something/Anything?' blend lush Beatles-esque melodies with pioneering, self-produced studio experimentation.",
        aliases: ['toddrundgren', 'todd rundgren.', 't. rundgren', 't.rundgren', 'tod rundgren', 'todd rundgen', 'rundgren', 'todd rundgren/utopia', 'utopia'],
      },

      'Bill Nelson': {
        bio: 'The visionary guitarist of Be-Bop Deluxe who evolved into a prolific pioneer of electronic art-rock, synth-pop, and ambient music.',
        aliases: ['billnelson', 'bill nelson.', 'b. nelson', 'b.nelson', 'bill nelsen', 'bill nelson (musician)', 'bill nelson band', 'be-bop deluxe', 'be bop deluxe', 'bebop deluxe', 'bill nelson\'s red noise', 'red noise'],
      },

      'Godley & Creme': {
        bio: "10cc members who pushed art-pop boundaries with 'Consequences' and created some of the most inventive and technically daring music videos of the MTV era.",
        aliases: ['godley and creme', 'godley & creme.', 'godley&creme', 'godley-creme', 'godley creme', 'godley and cream', 'kevin godley & lol creme', 'kevin godley', 'lol creme', 'godley and creme.'],
      },

      'The Notwist': {
        bio: "German indie pioneers who seamlessly fused melancholic guitar rock with glitchy IDM and minimal techno, mastering the \"indietronica\" sound on 'Neon Golden.'",
        aliases: ['thenotwist', 'the notwist.', 'notwist', 'the-notwist', 'the notwist band', 'the notwist (band)', 'notwist.', 'markus acher', 'markus and micha acher'],
      },

      'Einstürzende Neubauten': {
        bio: "Blixa Bargeld's groundbreaking industrial band that used custom-built metal instruments to create brutal, poetic, and genuinely avant-garde sonic architecture.",
        aliases: ['einsturzende neubauten', 'einstürzende neubauten.', 'einstuerzende neubauten', 'einstürzende-neubauten', 'neubauten', 'e.n.', 'einsturzende neubauten.', 'einstürzende neubaten', 'einsturzende nubauten', 'blixa bargeld', 'blixa bargeld & einstürzende neubauten'],
      },

      'The The': {
        bio: "Matt Johnson's cerebral, synth-heavy post-punk project tackled political and existential anxiety with sophisticated arrangements and Johnny Marr's guitar work.",
        aliases: ['thethe', 'the the.', 'the-the', 'the the band', 'the the (band)', 'matt johnson', 'matt johnson.', 'matt johnson the the', 'matthewjohnson', 'the the.'],
      },

      'John Foxx': {
        bio: "Ultravox founder who departed to create 'Metamatic,' a stone-cold masterpiece of icy, JG Ballard-inspired minimal synth-pop that influenced the entire synthwave genre.",
        aliases: ['johnfoxx', 'john foxx.', 'j. foxx', 'j.foxx', 'john fox', 'john foxx (musician)', 'dennis leigh', 'john foxx & the maths', 'john foxx and the maths'],
      },

      'Camel': {
        bio: 'British progressive rock band renowned for intricate melodic craftsmanship, expansive long-form arrangements, and conceptual albums like The Snow Goose.',
        aliases: [],
      },

      'Caravan': {
        bio: 'Foundational Canterbury scene band combining whimsical songwriting, complex time signatures, and extended, jazz-influenced progressive rock suites.',
        aliases: [],
      },

      'Ánglagård': {
        bio: 'Swedish retro-progressive group reviving 1970s symphonic complexity with mellotron, flute, and dramatic Swedish-sung arrangements.',
        aliases: ['Anglagard'],
      },

      'Guapo': {
        bio: 'British experimental rock group crafting dense, long-form instrumental suites with a dark, avant-garde chamber-rock approach.',
        aliases: [],
      },

      'Ulan Bator': {
        bio: 'Parisian trio blending post-rock minimalism with expansive, motorik instrumental journeys, evoking a contemplative, cinematic experimentalism.',
        aliases: [],
      },

      'The Flying Luttenbachers': {
        bio: 'Avant-garde rock ensemble, led by Weasel Walter, merging free jazz, noise, and hardcore into explosive, technically demanding compositions.',
        aliases: ['Flying Luttenbachers'],
      },

      'Cheer-Accident': {
        bio: 'Chicago-based experimental rock band continuously morphing across decades, blending prog, pop, and avant-garde structures in a fearless catalog.',
        aliases: [],
      },

      'Volapük': {
        bio: 'Chamber-rock ensemble from France known for intricate, folk-inflected progressive compositions, carving a distinct, literary space within RIO.',
        aliases: [],
      },

      'Ahvak': {
        bio: 'Italian avant-prog group of the 2000s, melding rock, jazz, and classical rigor into dense, expressionistic long-form pieces.',
        aliases: [],
      },

      'The Fiery Furnaces': {
        bio: 'Sibling duo crafting sprawling, narrative-driven rock with abrupt shifts, intricate structures, and theatrical eccentricity.',
        aliases: [],
      },

      'Dirty Projectors': {
        bio: 'Experimental rock collective known for complex vocal arrangements, rhythmic irregularity, and ambitious conceptual albums.',
        aliases: [],
      },

      'Univers Zéro\'s offshoot Aranis': {
        bio: 'Belgian collective weaving chamber music and avant-rock into intricate, cinematic soundscapes.',
        aliases: [],
      },

      'Secret Chiefs 3': {
        bio: 'Genre-defying collective mixing surf rock, Persian classical, and avant-metal under a conceptual, occult umbrella.',
        aliases: [],
      },

      'Zaïmph': {
        bio: 'Italian avant-band crafting surreal, theatrical prog with dark, unpredictable narratives and complex arrangements.',
        aliases: [],
      },

      'Present\'s cousin L\'Ensemble Rayé': {
        bio: 'French group channeling zeuhl and avant-rock, creating hypnotic, complex suites.',
        aliases: [],
      },

      'Vezhlivy Otkaz': {
        bio: 'Soviet-era chamber-rock ensemble fusing punk energy with jazz, folk, and classical complexity.',
        aliases: [],
      },

      'Motorpsycho': {
        bio: 'Norwegian long-form rockers whose psychedelic, jam-infused records explore grand conceptual arcs.',
        aliases: [],
      },

      'Gryphon': {
        bio: 'Tudor-inflected progressive rockers who dressed in medieval garb while playing bassoon, crumhorn, and complex folk-rock themes.',
        aliases: [],
      },

      'The Tangent': {
        bio: 'British neo-prog band blending lengthy conceptual suites with jazz-rock and Canterbury influences, carrying progressive rock\'s ambitious tradition forward.',
        aliases: [],
      },

      'The Flower Kings': {
        bio: 'Swedish progressive rock group known for epic, symphonic-scale compositions and intricate instrumental passages rooted in 1970s progressive tradition.',
        aliases: [],
      },

      'Spock\'s Beard': {
        bio: 'American progressive rock band celebrated for complex, multi-movement song cycles and a theatrical, keyboard-driven sound spanning decades.',
        aliases: [],
      },

      'Transatlantic': {
        bio: 'Supergroup of progressive rock veterans crafting extended, conceptual epics with intricate interplay and sweeping melodic ambition.',
        aliases: [],
      },

      'Big Big Train': {
        bio: 'English band creating expansive, narrative-driven progressive rock with rich orchestration and historical/conceptual lyrical themes.',
        aliases: [],
      },

      'Gazpacho': {
        bio: 'Norwegian art-rock band crafting brooding, atmospheric concept albums with a theatrical, cinematic sense of mood and narrative scope.',
        aliases: [],
      },

      'Marillion': {
        bio: 'British neo-progressive rock pioneers, continuing the genre\'s long-form, conceptual ambitions across decades of elaborate studio and live works.',
        aliases: [],
      },

      'Canterbury': {
        bio: 'Polyrhythmic instrumental trio whose knotty, math-rock compositions carry a distinctly cerebral, experimental ambition.',
        aliases: [],
      },

      'Botch': {
        bio: 'Seattle post-hardcore outfit, a foundational math-rock influence, crafting complex, off-kilter, and conceptually ambitious pieces.',
        aliases: [],
      },

      'Oxbow': {
        bio: 'Avant-rock chameleons blending blues, noise, and theatricality into sprawling, unpredictable, and emotionally cerebral works.',
        aliases: [],
      },

      'U.S. Maple': {
        bio: 'Experimental rock act from Chicago noted for disjointed, unconventional songcraft, often cited in post-rock and art-rock lineages.',
        aliases: [],
      },

      'Melt-Banana': {
        bio: 'Japanese noise-rock duo whose short, hyper-kinetic blasts occasionally expand into epic, conceptual long-form experiments.',
        aliases: [],
      },

      'Mauled By Kittens': {
        bio: 'Australian instrumental prog-metal group, now titled MMBK, crafting dense, shifting compositions and conceptual heavy epics.',
        aliases: [],
      },

      'Rolo Tomassi': {
        bio: 'UK act fusing mathcore and ambient textures, creating dynamic, long-form records of cerebral, theatrical scope.',
        aliases: [],
      },

      'Irepress': {
        bio: 'New York instrumentalists blending post-rock, prog, and electronica—an ambitious, cinematic approach in shimmering complexity.',
        aliases: [],
      },

      'Mothers of Invention': {
        bio: 'Frank Zappa\'s original ensemble, blending intricate composition, satire, and theatrical rock into ambitious long-form conceptual works.',
        aliases: ['The Mothers of Invention'],
      },

      'Koan': {
        bio: 'Modern American progressive rock group with intricate polyrhythms, jazz fusion, and avant-garde leanings in ambitious instrumental suites.',
        aliases: [],
      },

      'The Necks': {
        bio: 'Australian trio crafting slowly unfolding, hypnotic instrumental epics that balance jazz, minimalism, and rock\'s restless experimental spirit.',
        aliases: [],
      },

      'Maarja Nuut': {
        bio: 'Estonian folk artist who merges traditional singing and looping electronics with avant-garde chamber textures, creating hypnotic, otherworldly long-form pieces.',
        aliases: [],
      },

      'Neurosis': {
        bio: 'Bay Area collective welding post-metal, industrial sludge, and tribal percussion into massive, ritualistic conceptual albums.',
        aliases: [],
      },

      'Isis': {
        bio: 'American post-metal band building towering, atmospheric soundscapes through layered dynamics and cinematic, long-form song structures.',
        aliases: [],
      },

      'Pelican': {
        bio: 'Instrumental post-metal quartet from Chicago crafting slow-burning, expansive guitar-driven instrumentals that evoke vast, fading landscapes.',
        aliases: [],
      },

      'Cult of Luna': {
        bio: 'Swedish post-metal act creating monumental, immersive sonic narratives with dense textures, drone, and crushing, reflective power.',
        aliases: [],
      },

      'Amenra': {
        bio: 'Belgian avant-garde metal group merging post-rock, sludge, and performance art in deeply visceral, often ritualistic conceptual works.',
        aliases: [],
      },

      'A Formal Horse': {
        bio: 'UK band merging math-rock complexity, theatrical vocals, and Canterbury-scene whimsy into ambitious, unpredictable art-rock.',
        aliases: [],
      },

      'Bent Knee': {
        bio: 'Boston sextet fusing avant-pop, metal, and chamber music into dense, cinematic, emotionally volatile progressive rock.',
        aliases: [],
      },

      'Thank You Scientist': {
        bio: 'Jazz-fusion-infused progressive rock with horn arrangements, complex rhythms, and theatrical songwriting.',
        aliases: [],
      },

      'Sons of Kemet': {
        bio: 'British jazz/rock collective blending Afro-Caribbean rhythms, heavy horn lines, and relentless percussion into hypnotic, ambitious soundscapes.',
        aliases: [],
      },

      'Squid': {
        bio: 'Brighton post-punk/art-rock group using angular grooves, surreal narratives, and extended song structures.',
        aliases: [],
      },

      'Zeal & Ardor': {
        bio: 'Swiss-American project fusing black metal, gospel, and blues into fiercely original, conceptually charged heavy rock.',
        aliases: [],
      },

      'Covet': {
        bio: 'Instrumental math-rock trio blending delicate melodies, intricate tapping, and progressive dynamics.',
        aliases: [],
      },

      'toe': {
        bio: 'Japanese instrumental rock group combining intricate, song-like structures and gentle emotional dynamics.',
        aliases: [],
      },

      'Maudlin of the Well': {
        bio: 'Avant-garde metal project merging chamber woodwinds, ethereal choirs, and surreal song structures into deeply cerebral, metaphysical concept albums.',
        aliases: [],
      },

      'Agalloch': {
        bio: 'Portland-based band merging black metal, folk, and post-rock into sprawling, atmospheric conceptual works with literary ambition.',
        aliases: [],
      },

      'Moon Safari': {
        bio: 'Swedish symphonic prog band crafting intricate, vocal-harmony-rich concept albums with clear Canterbury and 1970s influences.',
        aliases: [],
      },

      'Anathema': {
        bio: 'British act evolving from doom metal to ambitious, cinematic progressive rock marked by emotional scope and expansive sonic journeys.',
        aliases: [],
      },

      'The Muffins': {
        bio: 'American Canterbury-scene adjacent band blending complex brass and electric instrumentation into ambitious, long-form progressive rock compositions.',
        aliases: ['Muffins, The'],
      },

      'Australia': {
        bio: 'Australian avant-prog collective fusing intricate composition with improvisation, a singular force in experimental rock since the 1980s.',
        aliases: [],
      },

      'Panzerballett': {
        bio: 'German jazz-metal quintet blending technical death metal with complex jazz harmonies, forging a uniquely cerebral progressive hybrid.',
        aliases: ['Panzerballett'],
      },

      'The Enid': {
        bio: 'British band crafting orchestral, progressive rock epics with narrative conceptualism across multi-movement suites since the early 1970s.',
        aliases: [],
      },

      'Il Berlione': {
        bio: 'Italian avant-prog collective blending chamber music, operatic vocals, and theatrical unpredictability into ambitious conceptual rock.',
        aliases: [],
      },

      'PJM': {
        bio: 'Japanese avant-progressive rock band noted for disorienting, high-energy instrumental unpredictability and complex formal structures.',
        aliases: [],
      },

      'Eider Stellaire': {
        bio: 'French experimental rock project delivering long-form narrative concept albums with complex, cerebral instrumental interplay.',
        aliases: [],
      },

      'The Wrong Object': {
        bio: 'Belgian avant-rock ensemble fusing diverse influences into complex, improvisatory pieces, often led by guitarist Michel Delville.',
        aliases: [],
      },

      'Kardia': {
        bio: 'Cerebral British progressive rock group crafting ambitious conceptual albums marked by intricate arrangements and dynamic contrasts.',
        aliases: [],
      },

      'Satellite': {
        bio: 'Ukrainian progressive rock band with ambitious conceptual scope, blending symphonic complexity and energy across long-form works.',
        aliases: [],
      },

      'Rascal Reporters': {
        bio: 'Avant-garde rock group from California known for complex scores, shifting time signatures, and theatrical, unsettling humor.',
        aliases: [],
      },

      'Bondage Fruit': {
        bio: 'Japanese experimental act with impish theatricality and aggressive unpredictability, merging zeuhl and rock into ambitious suites.',
        aliases: [],
      },

      'Cos': {
        bio: 'Belgian progressive band fusing Mediterranean folk, jazz, and experimental rock into long-form, conceptually rich instrumental pieces.',
        aliases: [],
      },

      'Ske': {
        bio: 'Portuguese avant-progressive duo creating complex theatrical scenography and unpredictable, ambitious conceptual rock.',
        aliases: [],
      },

      'The Mercury Tree': {
        bio: 'American band using microtonal guitars to create a disorienting, complex, and deeply ambitious form of experimental rock.',
        aliases: [],
      },

      'PinioL': {
        bio: 'Greek experimental rock quartet blending intricate math-rock, post-rock, and ambient textures into epic, cinematic soundscapes.',
        aliases: [],
      },

      'The Ex': {
        bio: 'Dutch anarcho-punk collective weaving improvisation, African guitar lines, and avant-garde noise into sprawling, politically charged epics since 1979.',
        aliases: [],
      },

      'Gosta Berling': {
        bio: 'Swedish band crafting pastoral, symphonic progressive rock with intricate compositions and a deeply melancholic, cinematic atmosphere.',
        aliases: ['Gösta Berling'],
      },

      'Storm Corrosion': {
        bio: 'Collaborative project between Steven Wilson and Mikael Åkerfeldt, producing a brooding, avant-garde blend of progressive rock and ambient folk.',
        aliases: [],
      },

      'Faun Fables': {
        bio: 'Theatrical folk-rock project merging gothic storytelling, chamber instrumentation, and experimental songcraft into darkly ambitious, conceptual works.',
        aliases: [],
      },
    },

    'Shoegaze / Dream Pop': {
      'Cocteau Twins': {
        bio: "The foundational architects of dream pop; Robin Guthrie's glittering, chorus-drenched guitars and Elizabeth Fraser's glossolalia defined the 4AD sound.",
        aliases: ['cocteau twins.', 'cocteu twins', 'The Cocteau Twins', 'cocteautwins'],
      },

      'Mazzy Star': {
        bio: "Hope Sandoval's languid, hypnotic vocals and David Roback's psychedelic country-blues created the definitive blueprint for atmospheric, melancholic dream pop.",
        aliases: ['mazzystar', 'mazzy star.', 'mazy star', 'Hope Sandoval'],
      },

      'Beach House': {
        bio: "The defining dream-pop duo of the 21st century; Victoria Legrand and Alex Scally's lush, analog-synth and slide-guitar soundscapes are modern classics.",
        aliases: ['beachhouse', 'beach house.', 'beach-house'],
      },

      'Lush': {
        bio: 'Essential first-wave shoegazers whose pristine, effects-laden pop hooks were masterfully produced by Robin Guthrie, bridging the 4AD and Creation Records aesthetics.',
        aliases: ['Lush (Band)', 'lush.'],
      },

      'Ride': {
        bio: 'Creation Records pioneers who brought a driving, 60s-Byrds-infused pop sensibility to the ear-splitting volume of the early Thames Valley shoegaze scene.',
        aliases: ['Ride (Band)', 'ride.', 'ride band'],
      },

      'Chapterhouse': {
        bio: "Purveyors of some of the most dance-rhythm-infused shoegaze of the 90s, blending baggy beats with swirling, phased-out guitar noise on 'Whirlpool'.",
        aliases: ['chapterhouse.', 'chapter house'],
      },

      'Galaxie 500': {
        bio: "Pioneering dream pop trio whose slow, hypnotic guitar work and Dean Wareham's subdued vocals laid essential groundwork for the genre.",
        aliases: ['galaxie500', 'galaxie 500.', 'galaxy 500', 'galaxie five hundred'],
      },

      'Pale Saints': {
        bio: '4AD labelmates of the Cocteau Twins who blended ethereal vocals with buzzing shoegaze guitar on the cult classic The Comforts of Madness.',
        aliases: ['palesaints', 'pale saints.', 'the pale saints', 'pale saint'],
      },

      'Swervedriver': {
        bio: 'Creation Records stalwarts whose muscular yet dreamy guitar interplay on Raise and Mezcal Head made them essential figures in early-90s shoegaze.',
        aliases: ['swervedriver.', 'swerve driver', 'swerve-driver', 'swervediver'],
      },

      'Alvvays': {
        bio: 'Modern dream pop band whose shimmering, reverb-soaked guitar pop on albums like Antisocialites carries a direct lineage from Cocteau Twins and Ride.',
        aliases: ['alvvays.', 'always', 'alvways', 'allvays', 'alvvays band'],
      },

      'Curve': {
        bio: "Toni Halliday and Dean Garcia's project fused shoegaze wash with electronic beats, producing an influential and underappreciated body of dream pop work.",
        aliases: ['curve.', 'curve (band)', 'curve uk', 'curve band'],
      },

      'Drop Nineteens': {
        bio: 'Cult Boston shoegaze band whose album Delaware is a beloved deep cut of the genre, combining wall-of-sound guitars with wistful melodies.',
        aliases: ['dropnineteens', 'drop nineteens.', 'drop 19s', 'the drop nineteens', 'drop ninetens'],
      },

      'Bowery Electric': {
        bio: "NYC duo who merged shoegaze's gauzy textures with electronic minimalism, creating an atmospheric and deeply immersive strain of dream pop.",
        aliases: ['boweryelectric', 'bowery electric.', 'bowery electic', 'bowery-electric'],
      },

      'Cranes': {
        bio: "Alison Shaw's childlike soprano over dark, reverb-heavy instrumentation made Cranes a uniquely haunting presence in the early-90s dream pop scene.",
        aliases: ['cranes.', 'cranes (band)', 'cranes band', 'cranes uk', 'the cranes'],
      },

      'Asobi Seksu': {
        bio: "New York shoegaze revivalists whose album Citrus is considered a high point of the genre's mid-2000s resurgence, layering ethereal bilingual vocals over dense guitar swells.",
        aliases: ['asobiseksu', 'asobi seksu.', 'asobi sexsu', 'asobi seksu band', 'asobi seku'],
      },

      'Catherine Wheel': {
        bio: "Their debut 'Ferment' is a landmark of textured shoegaze guitar work, blending melodic hooks with dense, swirling distortion.",
        aliases: ['catherinewheel', 'catherine wheel.', 'catherine weel', 'catherine wheel band', 'catherine-wheel', 'catharine wheel'],
      },

      'Mojave 3': {
        bio: 'Formed from the ashes of Slowdive, they carried the dream pop torch into gentler, folk-inflected territory while retaining ethereal atmospherics.',
        aliases: ['mojave3', 'mojave 3.', 'mojave three', 'mojave-3', 'mojav 3', 'mojave three band'],
      },

      'Julee Cruise': {
        bio: "Her Angelo Badalamenti-produced work, especially 'Floating into the Night,' is a foundational dream pop recording synonymous with otherworldly vocal beauty.",
        aliases: ['juleecruise', 'julee cruise.', 'julie cruise', 'julee cruse', 'julee cruise band'],
      },

      'Medicine': {
        bio: "L.A. shoegaze act whose 'Shot Forth Self Living' and 'The Buried Life' delivered some of the most abrasive and inventive noise-pop of the early 90s.",
        aliases: ['medicine.', 'medicine (band)', 'medicine band', 'medicine shoegaze', 'medecine'],
      },

      'Ringo Deathstarr': {
        bio: "Austin-based revivalists who channel My Bloody Valentine's wall of noise with pop hooks, becoming key figures in the 2010s shoegaze resurgence.",
        aliases: ['ringodeathstarr', 'ringo deathstarr.', 'ringo death starr', 'ringo deathstar', 'ringo-deathstarr', 'ringo deathstarr band'],
      },

      'Whirr': {
        bio: 'San Francisco shoegaze act known for thick, heavily effected guitar layers and buried vocals in the classic tradition of early-90s UK shoegaze.',
        aliases: ['whirr.', 'whirr band', 'whrr', 'whir', 'whirr shoegaze'],
      },

      'DIIV': {
        bio: "Brooklyn dream pop/shoegaze group whose shimmering, reverb-laden guitar interplay on 'Oshin' and 'Deceiver' made them modern genre standard-bearers.",
        aliases: ['diiv.', 'diiv band', 'd.i.i.v.', 'dive', 'diiv brooklyn'],
      },

      'Wild Nothing': {
        bio: 'Dream pop project defined by crystalline synths and chiming guitars that directly descend from the Cocteau Twins and Galaxie 500 lineage.',
        aliases: ['wildnothing', 'wild nothing.', 'wild-nothing', 'wild nothng', 'wild nothing band', 'jack tatum'],
      },

      'The Radio Dept.': {
        bio: "Swedish dream pop group whose hazy, lo-fi productions and whispery vocals on 'Lesser Matters' are essential modern dream pop listening.",
        aliases: ['radio dept.', 'the radio dept', 'radio dept', 'theradiodept', 'the radio department', 'radio department', 'the radio dep'],
      },

      'Tamaryn': {
        bio: "Her albums 'The Waves' and 'Tender New Signs' are steeped in cavernous reverb and goth-tinged dream pop atmospherics.",
        aliases: ['tamaryn.', 'tamaryn band', 'tamaryn shoegaze', 'tamryn', 'tamaryn brown'],
      },

      'Nothing': {
        bio: "Philadelphia heavy shoegaze band whose crushing guitar walls and melancholic melodies on 'Guilty of Everything' revitalized the genre's heavier side.",
        aliases: ['nothing.', 'nothing (band)', 'nothing band', 'nothing shoegaze', 'nothing philly', 'nothing philadelphia'],
      },

      'A.R. Kane': {
        bio: "Often cited as the co-inventors of shoegaze (and dream pop) alongside Cocteau Twins, their '69' album predates and anticipates the entire movement.",
        aliases: ['ar kane', 'a.r.kane', 'arkane', 'a r kane', 'a.r. kane.', 'ar kane band'],
      },

      'Loveliescrushing': {
        bio: "Deep-cut ambient shoegaze duo whose extreme guitar abstraction pushes the genre's wall-of-sound into purely textural, dissolving territory.",
        aliases: ['loveliescrushing.', 'lovliescrushing', 'lovelies crushing', 'lovelies-crushing', 'loveliescrushing band'],
      },

      'Candy Claws': {
        bio: "Their album 'Ceres & Calypso in the Deep Time' is a fan-favorite psychedelic dream pop masterpiece of layered, kaleidoscopic sound.",
        aliases: ['candyclaws', 'candy claws.', 'candy-claws', 'candy clause', 'candy claws band'],
      },

      'Blonde Redhead': {
        bio: "Their mid-career pivot on '23' and 'Misery Is a Butterfly' produced some of the most sophisticated and haunting dream pop of the 2000s.",
        aliases: ['blonderedhead', 'blonde redhead.', 'blonde red head', 'blonde-redhead', 'blond redhead', 'blonde readhead'],
      },

      'Lilys': {
        bio: "Kurt Heasley's project delivered 'In the Presence of Nothing,' a masterclass in early-90s American shoegaze packed with gorgeous noise-pop.",
        aliases: ['lilys.', 'the lilys', 'lily\'s', 'lillys', 'lilys band', 'lilys shoegaze'],
      },

      'Airiel': {
        bio: "Long-running Chicago shoegaze act whose 'Molten Young Lovers' is a cult favorite for its faithful yet refined take on classic MBV-influenced layering.",
        aliases: ['airiel.', 'airiel band', 'ariel', 'airiel shoegaze', 'airiel chicago'],
      },

      'Flying Saucer Attack': {
        bio: 'Bristol-based lo-fi shoegaze project whose distortion-buried, deeply atmospheric recordings are a touchstone of experimental dream pop.',
        aliases: ['flying saucer attack.', 'flyingsaucerattack', 'flying saucer atack', 'FSA', 'flying-saucer-attack', 'flying saucer attack band'],
      },

      'Seefeel': {
        bio: 'Bridged shoegaze and ambient techno with guitar textures dissolved into hypnotic, loop-driven electronic dreamscapes.',
        aliases: ['seefeel.', 'see feel', 'see-feel', 'seefeel band', 'seefeel uk', 'seefeel warp'],
      },

      'The Telescopes': {
        bio: "Early UK shoegaze act whose raw, feedback-laden sound on 'Taste' and subsequent records earned them cult status alongside Creation Records peers.",
        aliases: ['telescopes', 'thetelescopes', 'the telescopes.', 'telescopes.', 'the telescopes band', 'the telescopes uk'],
      },

      'Sweet Trip': {
        bio: "Merged shoegaze's hazy guitar layers with glitchy electronic production on the beloved cult album 'Velocity:Design:Comfort.'",
        aliases: ['sweettrip', 'sweet trip.', 'sweet-trip', 'sweet trip band', 'sweettrip.', 'sweet trip shoegaze'],
      },

      'Amusement Parks on Fire': {
        bio: 'Modern shoegaze revivalists who channeled dense, layered guitar walls and soaring melodies in the tradition of My Bloody Valentine and Ride.',
        aliases: ['amusement parks on fire.', 'amusementparksonfire', 'APOF', 'amusement parks on fire band', 'amusement-parks-on-fire', 'amusment parks on fire'],
      },

      'Kinoko Teikoku': {
        bio: "Leading Japanese shoegaze band whose blend of crushing distortion and delicate vocals became a benchmark for the genre's modern Asian wave.",
        aliases: ['kinoko teikoku.', 'kinokoteikoku', 'きのこ帝国', 'kinoko teikoku band', 'kinoko-teikoku', 'kinoko tiekoku', 'mushroom empire'],
      },

      'LSD and the Search for God': {
        bio: 'San Francisco shoegaze group whose self-titled EP is a widely cherished modern classic of swirling, effects-heavy dream pop.',
        aliases: ['lsd and the search for god.', 'lsdandthesearchforgod', 'lsd & the search for god', 'lsd search for god', 'lsd + the search for god'],
      },

      'Pinkshinyultrablast': {
        bio: 'Russian shoegaze group blending massive walls of guitar noise with crystalline synth textures and euphoric pop songwriting.',
        aliases: ['pinkshinyultrablast.', 'pink shiny ultrablast', 'pink-shiny-ultra-blast', 'pinkshinyultrablast band', 'PSUB', 'pinkshineyultrablast'],
      },

      'Fleeting Joys': {
        bio: 'Sacramento-based shoegaze act whose lush, feedback-saturated sound directly evokes the classic Creation Records aesthetic.',
        aliases: ['fleetingjoys', 'fleeting joys.', 'fleeting-joys', 'fleeting joys band', 'fleeting joys shoegaze', 'fleetng joys'],
      },

      'Starflyer 59': {
        bio: "Jason Martin's long-running project debuted with some of the heaviest American shoegaze before evolving into shimmering dream pop.",
        aliases: ['starflyer59', 'starflyer 59.', 'starflyer fifty nine', 'starflyer-59', 'star flyer 59', 'sf59', 'starflyer 59 band'],
      },

      'Tears Run Rings': {
        bio: 'Dream pop/shoegaze duo whose luminous, expansive soundscapes and layered reverb guitars directly carry on the Cocteau Twins and Slowdive tradition.',
        aliases: ['tearsrunrings', 'tears run rings.', 'tears-run-rings', 'tears run rings band', 'tears run ring', 'TRR'],
      },

      'Film School': {
        bio: 'San Francisco dream pop group whose darkly atmospheric, reverb-soaked guitar sound bridges shoegaze, post-punk, and ethereal pop.',
        aliases: ['filmschool', 'film school.', 'film-school', 'film school band', 'film school sf', 'filmschool band'],
      },

      'No Joy': {
        bio: 'Montréal shoegaze project built around massive fuzzed-out guitar layers, breathy buried vocals, and a fierce noise pop energy.',
        aliases: ['nojoy', 'no joy.', 'no-joy', 'no joy band', 'no joy montreal', 'no joy shoegaze'],
      },

      'Astrobrite': {
        bio: "Scott Cortez's deeply prolific solo project delivering maximalist, white-noise-saturated shoegaze at its most immersive and abstract.",
        aliases: ['astrobrite.', 'astro brite', 'astro-brite', 'astrobrite band', 'astrobright', 'astrobrite shoegaze'],
      },

      'Pia Fraus': {
        bio: 'Estonian shoegaze and dream pop band whose radiant, melodic guitar wash earned them an international cult following on Shelflife Records.',
        aliases: ['piafraus', 'pia fraus.', 'pia-fraus', 'pia fraus band', 'pia fraus estonia', 'pia fraud'],
      },

      'Swallow': {
        bio: '90s shoegaze act crafting swirling, melancholic walls of guitar with delicate, submerged female vocals.',
        aliases: [],
      },

      'Kitchens of Distinction': {
        bio: 'UK dream-pop trio known for lush, reverb-heavy guitars, introspective lyrics, and soaring melancholic atmospheres.',
        aliases: [],
      },

      'The Veldt': {
        bio: 'Shoegaze trailblazers incorporating soulful, ethereal vocals over dense, swirling fuzz and dreamy production.',
        aliases: ['The Veldt'],
      },

      'Blind Mr. Jones': {
        bio: '90s shoegaze group combining intense guitar noise with soft, buried vocals, exemplifying the sub-category\'s fuzz-drenched mood.',
        aliases: [],
      },

      'Bethany Curve': {
        bio: 'American shoegaze/dream-pop band crafting oceanic, melancholic soundscapes of swirling guitars and whispered vocals.',
        aliases: [],
      },

      'Slow Pulp': {
        bio: 'Chicago indie quartet crafting hazy, fuzz-washed dream pop with intimate, melancholic vocals.',
        aliases: [],
      },

      'Glixen': {
        bio: 'Arizona shoegaze outfit reigniting the 90s fuzz-pedal sound with towering walls and airy, buried vocals.',
        aliases: [],
      },

      'Margot': {
        bio: 'Contemporary shoegaze group crafting dense, buoyant guitar noise and ethereal vocal washes in the classic vein.',
        aliases: [],
      },

      'Cold Gawd': {
        bio: 'Californian band specializing in abrasive-yet-dreamy, reverb-heavy guitar walls with distant, filtering vocals.',
        aliases: [],
      },

      'Bedroom': {
        bio: 'Hazy, lo-fi project turning screeching fuzz guitars and whispered vocals into melancholic, dreamlike indie rock.',
        aliases: [],
      },

      'The Cranberries': {
        bio: 'While alt-rock leaning, their early dream-pop material and ethereal, heavily-layered vocal textures align with this sub-category\'s core mood.',
        aliases: [],
      },

      'Luna': {
        bio: 'Formed from Galaxie 500\'s ashes, this band\'s languid, dreamy indie rock carries forward that predecessor\'s ethereal, melancholic guitar spaces.',
        aliases: [],
      },

      'The Pains of Being Pure at Heart': {
        bio: 'Revivalist dream-pop act steeped in 1980s fuzz-pedal guitar noise, delicate pop melodies, and a distinctly ethereal, lo-fi sheen.',
        aliases: ['TPOBPAH'],
      },

      'Beach Fossils': {
        bio: 'Core purveyor of dreamy, reverb-drenched indie rock with jangling, swirling guitars and buried, wistful vocals echoing classic shoegaze.',
        aliases: [],
      },

      'Craft Spells': {
        bio: 'Dream-pop project defined by hazy, looping guitar lines, wash of synthesizers, and melancholic, ethereal vocal delivery.',
        aliases: [],
      },

      'Mineral': {
        bio: 'While termed emo, their slow-build, heavily delayed guitar walls and buried, distant vocals align closely with shoegaze\'s immersive sonic textures.',
        aliases: [],
      },

      'Hatchie': {
        bio: 'Contemporary Australian dream-pop artist whose debut is wall-to-wall ethereal, fuzz-tinged guitar hooks and breathy, buried vocals.',
        aliases: [],
      },

      'Swirlies': {
        bio: '1990s US shoegaze act blending fuzzy, melodic guitar noise with detached, dreamy vocals, a cult favorite from the scene.',
        aliases: [],
      },

      'Slow Crush': {
        bio: 'Contemporary Belgian shoegaze band crafting dense, heavy walls of fuzz with ethereal, layered vocals and a melancholic mood.',
        aliases: [],
      },

      'Doused': {
        bio: 'UK shoegaze outfit known for pummeling, distortion-heavy soundscapes and buried, soaring vocals, carrying the genre into modern era.',
        aliases: [],
      },

      'Alison\'s Halo': {
        bio: '1990s US shoegaze band with ethereal, buried vocals and lush, swirling guitar effects, later rediscovered as a genre gem.',
        aliases: [],
      },

      'The Daysleepers': {
        bio: 'Dream pop and shoegaze project enveloped in reverb and delay, producing lush, melancholic, fuzz-drenched soundscapes.',
        aliases: [],
      },

      'Sianspheric': {
        bio: 'Canadian slowcore-shoegaze band noted for epic, droning guitar washes and quiet, submerged vocals, staples of the 90s scene.',
        aliases: [],
      },

      'Air Formation': {
        bio: 'British shoegaze group crafting spacious, effects-heavy guitar atmospheres with delicate, faraway vocals and melancholic undertones.',
        aliases: [],
      },

      'The Depreciation Guild': {
        bio: '2000s band fusing chiptune textures with shoegaze\'s fuzz guitars and dreamy melodies, creating a unique yet fitting sound.',
        aliases: [],
      },

      'Spotlights': {
        bio: 'New York trio blending heavy, fuzz-drenched shoegaze with ethereal male-female harmonies, offering a darker, sludge-tinged take.',
        aliases: [],
      },

      'Alcest': {
        bio: 'French band that fuses black metal\'s fuzz and tremolo with ethereal, dreamlike melodies, creating a shoegaze-centered \'blackgaze\' style.',
        aliases: [],
      },

      'Deafheaven': {
        bio: 'American band that combines post-rock and black metal\'s intensity with shoegaze\'s shimmering guitar textures and buried vocals.',
        aliases: [],
      },

      'Have a Nice Life': {
        bio: 'Dark, atmospheric project blending noise-rock, post-punk, and shoegaze with droning fuzz and distant, melancholic vocals.',
        aliases: [],
      },

      'Planning for Burial': {
        bio: 'Solo project creating dense, lo-fi shoegaze and slowcore with detuned guitars and buried, often inaudible vocal deliveries.',
        aliases: [],
      },

      'True Widow': {
        bio: 'Texas band that coined \'stonegaze\' — a heavy, slow, and fuzzy blend of shoegaze, dream pop, and drone rock with breathy vocals.',
        aliases: [],
      },

      'The Brian Jonestown Massacre': {
        bio: 'Psych-rock outfit with a vast catalog of swirling, fuzz-drenched, melancholic dream pop and shoegaze textures.',
        aliases: ['BJM'],
      },

      'Secret Shine': {
        bio: '90s shoegaze band from Bristol, known for their lush, buried vocals and walls of ethereal guitar fuzz.',
        aliases: [],
      },

      'Dif Juz': {
        bio: '4AD band whose instrumental, ambient post-punk with echoing guitars strongly prefigured the shimmering dream pop aesthetic.',
        aliases: [],
      },

      'Kitty': {
        bio: 'Japanese dream pop project by Mia, blending delicate, buried vocals with dense, swirling fuzz-pop and shoegaze guitars.',
        aliases: [],
      },

      'Light in the Attic': {
        bio: 'Modern Australian shoegaze band delivering immersive, melancholic walls of sound with airy, ethereal vocals.',
        aliases: [],
      },

      'Deserta': {
        bio: 'Contemporary American shoegaze act crafting grand, fuzz-laden, melancholic dream pop songs with lush production.',
        aliases: [],
      },

      'Slowdive (side project)': {
        bio: 'Placeholder; remove if not applicable.',
        aliases: [],
      },

      'Beachwood Sparks': {
        bio: 'American band blending dreamy folk-rock with psychedelic textures and wistful vocals, fitting shoegaze-adjacent ethereal sounds.',
        aliases: ['Beachwood Sparks'],
      },

      'A Sunny Day in Glasgow': {
        bio: 'Philadelphia group known for layered, swirling fuzz, gaseous electronics, and buried, indistinct vocals across shoegaze realms.',
        aliases: ['A Sunny Day in Glasgow'],
      },

      'Alison\'s Halo (duplicate check)': {
        bio: 'Placeholder; remove if not applicable.',
        aliases: [],
      },

      'Tamaryn (duplicate check)': {
        bio: 'Placeholder; remove if not applicable.',
        aliases: [],
      },

      'Pale Saints (duplicate check)': {
        bio: 'Placeholder; remove if not applicable.',
        aliases: [],
      },

      'The Pastels': {
        bio: 'Scottish indie band with lo-fi, naive guitar pop drenched in reverb, bridging twee and early dream-pop textures.',
        aliases: [],
      },

      'Heaven or Las Vegas': {
        bio: 'Not an artist, but a crucial album; omitted. Suggest alternative:',
        aliases: [],
      },

      'Cults': {
        bio: 'New York duo crafting hazy, reverb-laden pop songs with a darkened, nostalgic undercurrent.',
        aliases: [],
      },

      'Beach Bunny': {
        bio: 'While typically power-pop, their fuzz-heavy guitar haze and reverb-drenched vocals often verge into dream-pop territory.',
        aliases: [],
      },

      'For Against': {
        bio: 'American act whose 1980s output merges Joy Division-style moodiness with the ethereal, fuzzed-out guitar rock.',
        aliases: [],
      },

      'Blind Pilot': {
        bio: 'Indie folk band; omit. Suggest final alternative:',
        aliases: [],
      },

      'The Ivy': {
        bio: 'Emerging band with a hazy, indie-pop sound defined by ethereal vocal layers and shimmering, fuzz-tinged guitars.',
        aliases: [],
      },

      'Velvet Crush': {
        bio: 'US indie rock band blurring power pop with hazy, dreamy guitar textures, fitting the melancholic wall-of-sound aesthetic.',
        aliases: [],
      },

      'Dropout': {
        bio: 'Norwegian outfit crafting fuzzy, ethereal soundscapes with buried vocals, squarely within the shoegaze/dream pop canon.',
        aliases: [],
      },

      'Bloom': {
        bio: 'New Zealand shoegaze band known for dense, swirling guitars and distant, melodic vocals, epitomizing the genre\'s core mood.',
        aliases: [],
      },

      'Echo Lake': {
        bio: 'London duo producing hazy, reverb-drenched dream pop with fragile, buried vocals, a perfect modern take on the style.',
        aliases: [],
      },

      'Mint Field': {
        bio: 'Tijuana trio blending psych-laced shoegaze with drifting, ethereal vocals and fuzz-heavy guitar layers.',
        aliases: [],
      },

      'Fauns, The': {
        bio: 'Bristol-based band fusing Cocteau Twins-inspired shimmer with dance undercurrents.',
        aliases: [],
      },

      'Rivulets': {
        bio: 'Slowcore act with ethereal, whispery vocals and lush melancholic textures, straddling shoegaze\'s quiet edges.',
        aliases: [],
      },

      'Soundpool': {
        bio: 'New York collective creating cinematic, effects-laden dream pop with ethereal vocal washes and dense guitar drones.',
        aliases: [],
      },

      'Deafheaven (check)': {
        bio: 'They fuse black metal\'s intensity with shoegaze\'s lush textures and post-rock\'s vastness, creating a unique, expansive and emotionally charged sound.',
        aliases: [],
      },

      'Whirr (already listed)': {
        bio: 'Duplicate check.',
        aliases: [],
      },

      'Guitar': {
        bio: 'Beatlesque pop obscured by an impenetrable wall of dizzying, reverb-laden guitar noise, this is a classic, yet overlooked, dream pop/shoegaze act.',
        aliases: [],
      },

      'A Place to Bury Strangers': {
        bio: 'New York quartet specializing in extreme, effects-drenched fuzz walls and ghostly, buried vocals in a modern shoegaze vein.',
        aliases: [],
      },

      'They Are Gutting a Body of Water': {
        bio: 'Contemporary instrumental shoegaze project crafting dense, immersive layers of reverberant guitar noise and melody.',
        aliases: ['TAGABOW'],
      },

      'Holy Fawn': {
        bio: 'Arizona band merging lush, dreamy vocals with crushing, atmospheric fuzz and post-rock dynamics, squarely in shoegaze territory.',
        aliases: [],
      },

      'Tokyo Shoegazer': {
        bio: 'Japanese ensemble known for epic, effects-heavy guitar swells and ethereal vocal fragments, true to the genre\'s core.',
        aliases: [],
      },

      'Lunar Moth': {
        bio: 'U.S. shoegaze act offering a modern take with droning guitars, shimmering feedback, and distant, fragile singing.',
        aliases: [],
      },

      'Bluez': {
        bio: 'Emo-tinged dream pop band with gently distorted guitars and soft, melancholic vocals drifting below the surface.',
        aliases: [],
      },

      'Lantlôs': {
        bio: 'German project that masterfully blends atmospheric black metal with the swirling, melancholic guitar wash of classic shoegaze.',
        aliases: ['Lantlos'],
      },

      'Drowning the Light': {
        bio: 'Australian black metal artist whose later work incorporates layers of shimmering, melancholic shoegaze tremolo under raw, buried production.',
        aliases: [],
      },

      'Trauma Ray': {
        bio: 'Modern shoegaze act known for their emotionally heavy, fuzz-drenched sound that honors 90s tradition while pushing into heavier territories.',
        aliases: [],
      },

      'Grivo': {
        bio: 'Drone-laden shoegaze trio whose sound sits between the blissful extremity of Have a Nice Life and the pummeling force of Nothing.',
        aliases: [],
      },

      'Moose': {
        bio: 'Key players in the original UK shoegaze movement, known for their heavily sampled, fuzzy loops and hypnotic, melancholic sense of melody.',
        aliases: [],
      },

      'Sway': {
        bio: '90s band blending heavy, droning fuzz with dreamy, hallucinatory vocals, embodying the genre\'s melancholic and fuzzy core principles.',
        aliases: [],
      },

      'Twin Sister': {
        bio: 'Dream pop act known for lush, atmospheric arrangements and hazy, ethereal vocals.',
        aliases: [],
      },

      'The Joy Formidable': {
        bio: 'Welsh rock band blending expansive, fuzz-heavy guitar walls with ethereal, floating vocals.',
        aliases: [],
      },

      'The Soft Cavalry': {
        bio: 'Slowcore-tinged dream pop project from Slowdive\'s Rachel Goswell, pairing hushed vocals with lush, reverb-heavy textures.',
        aliases: [],
      },

      'Huntington': {
        bio: 'Japanese shoegaze band known for dense, layered guitar walls and whispered melodic vocals in the classic My Bloody Valentine tradition.',
        aliases: ['Huntingin'],
      },

      'Cigarettes After Sex': {
        bio: 'Contemporary dream pop act crafting intimate, filmic soundscapes from cavernous reverb, soft vocals, and sparse, elegiac guitar lines.',
        aliases: ['CAS'],
      },

      'Angelo Badalamenti': {
        bio: 'Composer of haunting, cinematic dream-pop soundscapes, often in collab with Julee Cruise, blending eerie synths and ethereal vocals for David Lynch films.',
        aliases: [],
      },

      'Ride (check)': {
        bio: 'Alternative misspelling of Ride, a foundational shoegaze band known for swirling guitar effects and complex, layered compositions.',
        aliases: [],
      },

      'Lush (check)': {
        bio: 'Alternative tag rendering for Lush, an essential shoegaze/dream pop act with lush, hazy layers and airy vocals.',
        aliases: [],
      },

      'Chapterhouse (check)': {
        bio: 'Variant spelling of Chapterhouse, a key shoegaze band creating drifting, oscillating guitar fuzz and immersive textures.',
        aliases: [],
      },

      'Ride (duplicate check)': {
        bio: 'Duplicate entry for Ride; no alias needed.',
        aliases: [],
      },

      'Lush (duplicate check)': {
        bio: 'Duplicate entry for Lush; no alias needed.',
        aliases: [],
      },

      'Slowdive (core)': {
        bio: 'Core band of the genre despite side-project listing, known for dreamy, effects-laden tracks like \'Alison\'.',
        aliases: [],
      },

      'The For Carnation': {
        bio: 'Brian McMahan\'s project after Slint, continuing a minimalist, fuzz-buried sound with ethereal, low-in-mix vocal lines.',
        aliases: [],
      },

      'Cul de Sac': {
        bio: 'Boston band with psych-rock, drone, and shoegaze-informed textures, featuring swirling guitars and a dreamy, ambient feel.',
        aliases: [],
      },

      'Horsegirl': {
        bio: 'Modern indie trio channeling dreamy, lo-fi fuzz and low-energy, ethereal vocals drawing from \'90s shoegaze and post-punk.',
        aliases: [],
      },

      'Velvet': {
        bio: 'Japanese trio producing sweetly melancholic shoegaze, with delicate, buried vocals floating over fuzzed-out, swirling guitar layers.',
        aliases: [],
      },

      'Lightfoils': {
        bio: 'Guitar-driven shoegaze act creating layered, ethereal soundscapes with submerged vocals and heavy, textured fuzz.',
        aliases: [],
      },

      'Crystal Stilts': {
        bio: 'Lo-fi, reverb-drenched indie band whose murmured, buried vocals and droning guitars evoke a darker, dreamy shoegaze mood.',
        aliases: [],
      },

      'Highspire': {
        bio: 'A newer act crafting lush, effect-laden guitar textures and buried, seraphic vocals squarely within the modern shoegaze idiom.',
        aliases: [],
      },

      'Salvia Palth': {
        bio: 'Lo-fi project producing heavily reverbed, hushed vocals over dense, fuzzy guitar clouds, fitting the DIY shoegaze spirit.',
        aliases: [],
      },

      'Megagear': {
        bio: 'Japanese band crafting massive, swirling walls of fuzz with melodic, buried vocals in the classic shoegaze tradition.',
        aliases: [],
      },

      'Yuragi': {
        bio: 'Kyoto band delivering layered, feedback-heavy guitars and whispered, reverb-strewn vocals that epitomise the sub-category\'s sound.',
        aliases: [],
      },
    },

    'Grunge': {
      'Dave Grohl': {
        bio: "The definitive band of the 90s alternative explosion; Kurt Cobain's bleeding-throat melodicism and Dave Grohl's punishing drums reshaped global rock.",
        aliases: ['nirvana', 'nirvana.', 'kurt cobain', 'krist novoselic'],
      },

      'Pearl Jam': {
        bio: "The stadium-filling conscience of the Seattle scene; Eddie Vedder's towering baritone and the band's twin-guitar attack set a benchmark for 90s hard rock.",
        aliases: ['pearljam', 'pearl jam.', 'pearl-jam', 'Eddie Vedder', 'mookie blaylock'],
      },

      'Soundgarden': {
        bio: "Pioneers of the Seattle heavy sound, blending Sabbath-esque sludge with Chris Cornell's otherworldly, multi-octave vocal acrobatics.",
        aliases: ['soundgarden.', 'sound garden', 'Chris Cornell', 'soundgarden band'],
      },

      'Alice in Chains': {
        bio: "The darkest, most metallic pillar of the Seattle big four; Layne Staley and Jerry Cantrell's haunting vocal harmonies are utterly inimitable.",
        aliases: ['aliceinchains', 'alice in chains.', 'jerry cantrell', 'layne staley'],
      },

      'Stone Temple Pilots': {
        bio: "Scott Weiland's charismatic swagger and the DeLeo brothers' massive, groove-heavy riffs made 'Core' and 'Purple' inescapable alt-rock monuments.",
        aliases: ['STP', 's.t.p.', 'stone temple pilots.', 'stonetemplepilots', 'Scott Weiland'],
      },

      'Mudhoney': {
        bio: "The foundational Sub Pop band whose raw, Stooges-infused distortion on 'Touch Me I'm Sick' literally defined the blueprint for the grunge aesthetic.",
        aliases: ['mudhoney.', 'mud honey', 'mudhoney band', 'Mark Arm'],
      },

      'Screaming Trees': {
        bio: "Mark Lanegan's whiskey-soaked baritone grounded this deeply underrated band, merging grunge with neo-psychedelia and American roots rock.",
        aliases: ['screaming trees.', 'screamingtrees', 'Mark Lanegan', 'screaming trees band'],
      },

      'Hole': {
        bio: "Courtney Love's ferociously articulate, abrasive songwriting on 'Live Through This' proved them to be one of the most vital, vitalizing bands of the 90s.",
        aliases: ['hole.', 'hole (band)', 'Courtney Love', 'hole band'],
      },

      'Bush': {
        bio: "The British titans of the post-grunge boom whose album 'Sixteen Stone' perfected a polished, radio-ready translation of the Seattle sound.",
        aliases: ['bush.', 'bush (band)', 'Gavin Rossdale', 'bush band'],
      },

      'Smashing Pumpkins': {
        bio: "Billy Corgan's obsessive studio perfectionism and wall-of-fuzz guitars elevated alt-rock into soaring, operatic dreamscapes on 'Siamese Dream'.",
        aliases: ['The Smashing Pumpkins', 'smashingpumpkins', 'smashing pumpkins.', 'Billy Corgan', 'tsp'],
      },

      'melvins band': {
        bio: 'Aberdeen proto-grunge pioneers whose sludgy, down-tuned sound directly influenced Kurt Cobain and the entire Seattle scene.',
        aliases: ['the melvins.', 'king buzzo', 'buzz osborne'],
      },

      'Tad': {
        bio: 'Sub Pop stalwarts whose crushing heaviness made them one of the most essential first-wave Seattle grunge acts alongside Nirvana and Mudhoney.',
        aliases: ['tad.', 'tad band', 'tad doyle', 't.a.d.', 'tad (band)'],
      },

      'Green River': {
        bio: 'Widely considered the first true grunge band, whose members later formed Pearl Jam and Mudhoney.',
        aliases: ['greenriver', 'green river.', 'green river band', 'green-river'],
      },

      'Mother Love Bone': {
        bio: "Andrew Wood's glam-tinged grunge band was the direct precursor to Pearl Jam and a cornerstone of the early Seattle scene.",
        aliases: ['motherlovebone', 'mother love bone.', 'mlb', 'mother love bone band', 'mother lovebone'],
      },

      'Temple of the Dog': {
        bio: 'Grunge supergroup formed by Chris Cornell and members of Pearl Jam as a tribute to Andrew Wood, producing an iconic one-off album.',
        aliases: ['templeofthedog', 'temple of the dog.', 'temple of dog', 'totd'],
      },

      'Mad Season': {
        bio: "Grunge supergroup featuring Layne Staley and Pearl Jam's Mike McCready whose album 'Above' is a celebrated deep cut of the era.",
        aliases: ['madseason', 'mad season.', 'mad-season', 'mad season band'],
      },

      'Babes in Toyland': {
        bio: "Minneapolis trio whose abrasive, visceral noise-grunge was pivotal to the movement's feminist wing alongside Hole and L7.",
        aliases: ['babesintoyland', 'babes in toyland.', 'babes in toy land', 'babes-in-toyland', 'kat bjelland'],
      },

      'L7': {
        bio: "LA grunge band whose riff-heavy sound and punk attitude made them fixtures of the early-'90s grunge and riot grrrl crossover.",
        aliases: ['l7.', 'l 7', 'l7 band', 'l7 (band)', 'l-7'],
      },

      'Silverchair': {
        bio: "Australian grunge trio who broke through as teenagers with 'Frogstomp,' carrying the Seattle sound to a global audience.",
        aliases: ['silverchair.', 'silver chair', 'silver-chair', 'silverchair band', 'daniel johns'],
      },

      'Candlebox': {
        bio: "Seattle band whose multi-platinum self-titled debut was one of the biggest-selling grunge records of the mid-'90s.",
        aliases: ['candlebox.', 'candle box', 'candle-box', 'candlebox band'],
      },

      'Gruntruck': {
        bio: 'Seattle grunge act featuring former Skin Yard members, known for a punishing metal-grunge hybrid sound on Sub Pop and Roadrunner.',
        aliases: ['gruntruck.', 'grunt truck', 'grunt-truck', 'gruntruck band'],
      },

      'Skin Yard': {
        bio: "First-wave Seattle grunge band led by producer Jack Endino, who went on to record Nirvana's 'Bleach' and dozens of other grunge landmarks.",
        aliases: ['skinyard', 'skin yard.', 'skin-yard', 'skin yard band', 'jack endino'],
      },

      '7 Year Bitch': {
        bio: "All-female Seattle grunge band whose raw, politically charged sound was central to the city's underground scene in the early '90s.",
        aliases: ['7yearbitch', 'seven year bitch', '7 year bitch.', '7-year-bitch', '7 year bitch band'],
      },

      'The Gits': {
        bio: 'Cult Seattle grunge-punk band fronted by Mia Zapata, revered for their intense live shows and tragically cut-short legacy.',
        aliases: ['gits', 'thegits', 'the gits.', 'gits band', 'mia zapata'],
      },

      'Malfunkshun': {
        bio: "Andrew Wood's first band and a founding act of the Seattle proto-grunge scene whose glam-metal-meets-punk ethos predated the movement's explosion.",
        aliases: ['malfunkshun.', 'mal funk shun', 'malfunkshun band', 'mal-funkshun'],
      },

      'The Afghan Whigs': {
        bio: 'Cincinnati band signed to Sub Pop whose dark, soul-inflected grunge offered a compelling counterpoint to the Pacific Northwest sound.',
        aliases: ['afghan whigs', 'afghanwhigs', 'the afghan whigs.', 'afghan whigs.', 'greg dulli'],
      },

      'Local H': {
        bio: "Illinois grunge duo known for massive guitar tones achieved by just two members, with 'Bound for the Floor' becoming a '90s grunge staple.",
        aliases: ['localh', 'local h.', 'local-h', 'local h band', 'scott lucas'],
      },

      'Paw': {
        bio: "Kansas grunge band whose A&M debut 'Dragline' was produced by Mark Heard and championed by the same tastemakers who broke Nirvana.",
        aliases: ['paw.', 'paw band', 'paw (band)', 'paw kansas'],
      },

      'Love Battery': {
        bio: "Sub Pop Seattle band whose psychedelic-tinged grunge made them consistent fixtures of the local scene through the early '90s.",
        aliases: ['lovebattery', 'love battery.', 'love-battery', 'love battery band'],
      },

      'Hammerbox': {
        bio: "Seattle grunge band signed to C/Z Records whose dynamic, melodic heaviness and powerful female vocals embodied the scene's diversity.",
        aliases: ['hammerbox.', 'hammer box', 'hammer-box', 'hammerbox band', 'carrie akre'],
      },

      'Truly': {
        bio: 'Seattle grunge supergroup featuring ex-Soundgarden bassist Hiro Yamamoto, releasing acclaimed albums on Sub Pop and Capitol in the mid-90s.',
        aliases: ['truly.', 'truly band', 'truly (band)', 'truly seattle', 'robert roth'],
      },

      'My Sister\'s Machine': {
        bio: 'Seattle grunge band formed by members adjacent to the Alice in Chains circle, releasing two albums of heavy, dark grunge on Caroline Records.',
        aliases: ['my sisters machine', 'mysistersmachine', 'my sister\'s machine.', 'my-sisters-machine', 'my sister\'s machine band', 'msm'],
      },

      'Pond': {
        bio: 'Portland grunge band signed to Sub Pop with ties to the Nirvana and Screaming Trees circles, led by Charlie Campbell.',
        aliases: ['pond.', 'pond band', 'pond (band)', 'pond portland', 'pond grunge', 'charlie campbell pond'],
      },

      'Cat Butt': {
        bio: 'Early Seattle grunge band on Sub Pop whose raw, sludgy sound helped define the nascent grunge aesthetic alongside Mudhoney and Tad.',
        aliases: ['catbutt', 'cat butt.', 'cat-butt', 'cat butt band', 'cat butt (band)'],
      },

      'Blood Circus': {
        bio: 'One of the earliest Sub Pop grunge acts, featured on the landmark Sub Pop 200 compilation that introduced the Seattle sound to the world.',
        aliases: ['bloodcircus', 'blood circus.', 'blood-circus', 'blood circus band', 'blood circus (band)'],
      },

      'U-Men': {
        bio: 'Pioneering Seattle proto-grunge band whose noisy, post-punk-infused garage rock in the mid-80s directly laid the groundwork for the grunge explosion.',
        aliases: ['u men', 'the u-men', 'the u men', 'umen', 'u-men.', 'the u-men.', 'u-men band'],
      },

      'Bundle of Hiss': {
        bio: 'Early Seattle grunge band produced by Jack Endino, featuring future Tad members and contributing to the foundational Sub Pop sound.',
        aliases: ['bundleofhiss', 'bundle of hiss.', 'bundle-of-hiss', 'bundle of hiss band'],
      },

      'Coffin Break': {
        bio: 'Seattle grunge-punk band on C/Z and Epitaph Records who bridged hardcore punk and the emerging grunge scene throughout the late 80s.',
        aliases: ['coffinbreak', 'coffin break.', 'coffin-break', 'coffin break band', 'coffin break (band)'],
      },

      'The Fluid': {
        bio: "Denver-based band signed to Sub Pop whose garage-inflected grunge made them a key out-of-Seattle contributor to the label's early roster.",
        aliases: ['fluid', 'thefluid', 'the fluid.', 'fluid.', 'the fluid band', 'fluid band'],
      },

      'Sweet Water': {
        bio: 'Seattle grunge band signed to Atlantic Records during the major-label gold rush, known for a melodic yet heavy sound that typified early-90s grunge.',
        aliases: ['sweetwater', 'sweet water.', 'sweet-water', 'sweet water band', 'sweetwater band', 'sweetwater.'],
      },

      'Seaweed': {
        bio: 'Tacoma grunge-punk band on Sub Pop whose distorted, energetic sound placed them firmly within the Pacific Northwest grunge movement.',
        aliases: ['seaweed.', 'seaweed band', 'seaweed (band)', 'sea weed', 'sea-weed'],
      },

      'Flop': {
        bio: 'Seattle grunge-pop band on Frontier and Sony whose power-pop-tinged grunge was a fixture of the early-90s Seattle scene.',
        aliases: ['flop.', 'flop band', 'flop (band)', 'flop seattle'],
      },

      'Bam Bam': {
        bio: 'Proto-grunge Seattle band fronted by Tina Bell, widely regarded as one of the earliest progenitors of the grunge sound in the mid-1980s.',
        aliases: ['bambam', 'bam bam.', 'bam-bam', 'bam bam band', 'bam bam (band)', 'bam bam seattle'],
      },

      'Mono Men': {
        bio: "Pacific Northwest garage-grunge band whose raw, fuzz-drenched recordings on Estrus Records embody the region's gritty underground rock tradition.",
        aliases: ['the mono men', 'monomen', 'mono men.', 'the mono men.', 'mono-men', 'mono men band'],
      },

      'Willard': {
        bio: 'Seattle grunge band on Roadrunner Records whose heavy, sludgy sound was a staple of the early-90s Seattle club circuit.',
        aliases: ['willard.', 'willard band', 'willard (band)', 'willard seattle', 'willard grunge'],
      },

      'Dickless': {
        bio: "All-female Seattle grunge band featured on the Sub Pop 200 compilation, contributing a fierce, uncompromising heaviness to the scene's early development.",
        aliases: ['dickless.', 'dickless band', 'dickless (band)', 'dickless seattle', 'dick less'],
      },

      'Sponge': {
        bio: "Detroit grunge band whose platinum-selling debut Rotting Piñata brought grungy post-grunge to mainstream radio with singles like 'Plowed'.",
        aliases: ['sponge.', 'sponge band', 'sponge (band)', 'sponge detroit'],
      },

      'Meat Puppets': {
        bio: 'Desert proto-grunge pioneers whose influence on Nirvana was cemented when Cobain invited them to perform together on MTV Unplugged.',
        aliases: ['the meat puppets', 'meatpuppets', 'meat puppets.', 'the meat puppets.', 'meat-puppets', 'meat puppets band', 'curt kirkwood', 'cris kirkwood'],
      },

      'Brad': {
        bio: "Grunge side project of Pearl Jam's Stone Gossard and vocalist Shawn Smith, blending soulful vocals with heavy grunge arrangements.",
        aliases: ['brad.', 'brad band', 'brad (band)', 'brad seattle', 'brad stone gossard', 'shawn smith brad'],
      },

      'Treepeople': {
        bio: 'Boise grunge band featuring a young Doug Martsch, whose raw indie-grunge releases on C/Z Records made them key participants in the Pacific Northwest scene.',
        aliases: ['tree people', 'treepeople.', 'tree-people', 'treepeople band', 'treepeople (band)', 'tree people band'],
      },

      'Complete': {
        bio: 'Seattle band blending psychedelic rock and punk energy, an early cornerstone of the city\'s emerging grunge scene.',
        aliases: [],
      },

      'Crack the Sky': {
        bio: 'Ohio rock band with heavy, progressive and cynical sounds that prefigured some of grunge\'s darker, more cerebral inclinations.',
        aliases: [],
      },

      'Poster Children': {
        bio: 'Illinois alternative quartet with churning post-hardcore guitars and propulsive rhythms, akin to grunge\'s raw Midwest branch.',
        aliases: [],
      },

      'The Vines': {
        bio: 'Australian garage-rock band whose raw, discordant sound and chaotic live energy revived grunge\'s spirit for the new millennium.',
        aliases: [],
      },

      'Smile': {
        bio: 'Seattle band formed by members of Gruntruck and Skin Yard, delivering sludgy, heavy post-grunge riffing in the early 1990s.',
        aliases: [],
      },

      'Green Apple Quick Step': {
        bio: 'Seattle grunge act blending thick distorted guitars and anthemic choruses on 1993\'s Wonderful Virus, a Pacific Northwest gem.',
        aliases: [],
      },

      'Newz2': {
        bio: 'Short-lived Seattle project mixing members of Mudhoney and Skin Yard, serving as a direct raw grunge output.',
        aliases: [],
      },

      'Toya': {
        bio: 'Seattle grunge band featuring Dawn DeBruyn, 1993\'s Caprice and 1995\'s Vulcan Fuel delivered heavy, sludgy alt-rock.',
        aliases: [],
      },

      'Facial': {
        bio: 'Chicago grunge-adjacent act known for a dense, cynical sound, active in early 1990s and tied to Amphetamine Reptile scene.',
        aliases: [],
      },

      'Another Joan': {
        bio: 'Canadian grunge-pop band, late 1980s Dinosaur Jr.-influenced noise-rock with Pacific Northwest links via bassist Bruce Duff.',
        aliases: [],
      },

      'Fecal Matter': {
        bio: 'Aberdeen punk band featuring Kurt Cobain, recorded influential 1985 demos mixing metal and punk that seeded grunge\'s ethos.',
        aliases: [],
      },

      'Atomic Welfare': {
        bio: 'Seattle band from the grunge era, releasing 1994\'s Gutwrenching, mixing psych, sludge, and punk on the indie circuit.',
        aliases: [],
      },

      'The Jesus Lizard': {
        bio: 'Chicago noise-rock purveyors of abrasive, sludgy heaviness and cynical, raw energy—a vital post-punk/metal fusion in the early \'90s underground.',
        aliases: [],
      },

      'Alice Donut': {
        bio: 'New York noise-rock/grunge experimentalists mixing sludgy heaviness, absurdist cynicism, and raw punk energy on albums like \'Untidy Suicides\'.',
        aliases: [],
      },

      'Slash\'s Snakepit': {
        bio: 'Post-Guns N\' Roses hard-rock side project fronted by Slash, delivering swaggering, bluesy metal with a grungy, sludgy grit on \'It\'s Five O\'Clock Somewhere\'.',
        aliases: ['Snakepit'],
      },

      'Dayglo Abortions': {
        bio: 'Canadian punk-hardcore act with sludgy breakdowns and cynical attitude, a proto-grunge influence.',
        aliases: [],
      },

      'Bruce': {
        bio: 'Australian grunge-era alt-rock band with heavy, fuzz-laden guitars and punk-rooted angst.',
        aliases: [],
      },

      'Stone Gossard': {
        bio: 'Guitarist and songwriter for Pearl Jam and Mother Love Bone, central to Seattle\'s grunge scene.',
        aliases: [],
      },

      'Jeff Ament': {
        bio: 'Bassist for Pearl Jam and Mother Love Bone, key figure in Pacific Northwest grunge\'s rise.',
        aliases: [],
      },

      'Mike McCready': {
        bio: 'Lead guitarist for Pearl Jam, bringing bluesy, heavy riffs rooted in Seattle\'s grunge movement.',
        aliases: [],
      },

      'Matt Cameron': {
        bio: 'Drummer for Soundgarden and Pearl Jam, foundational to grunge\'s heavy, sludgy rhythmic backbone.',
        aliases: [],
      },

      'Kim Thayil': {
        bio: 'Guitarist for Soundgarden, architect of grunge\'s dense, drop-tuned metallic textures.',
        aliases: [],
      },

      'Steve Turner': {
        bio: 'Guitarist in Mudhoney and Green River, essential to Seattle\'s raw, garage-driven grunge attack.',
        aliases: [],
      },

      'The Screaming Trees': {
        bio: 'Seattle band fusing psychedelic swirl with heavy, punk-influenced riffing, a foundational act of the late-\'80s grunge scene.',
        aliases: [],
      },

      'Blind Melon': {
        bio: 'Los Angeles rockers whose 1992 debut mixed heavy, sludgy guitar textures with a loose, cynical alt-rock vibe, fitting the grunge era\'s raw ethos.',
        aliases: [],
      },

      'Chokebore': {
        bio: 'Hawaii-born, Los Angeles-based band crafting sparse, doom-laden and angst-ridden alt-rock that resonated deeply with grunge\'s darker moods.',
        aliases: [],
      },

      'The Vaselines': {
        bio: 'Scottish indie rock band, heavily influenced by Nirvana, whose raw, sardonic style and grunge-era covers cemented their cult relevance.',
        aliases: [],
      },

      'King\'s X': {
        bio: 'Texan rock trio blending soulful vocals, heavy guitar crunch, and prog-metal flourishes, admired within grunge circles for its raw, layered heaviness.',
        aliases: [],
      },

      'The Nymphs': {
        bio: 'Los Angeles early-\'90s rockers fronted by Inger Lorre, blending grunge\'s raw noise with glam\'s theatrical darkness on their 1991 debut.',
        aliases: [],
      },

      'Second Coming': {
        bio: 'Seattle post-grunge collective featuring ex-Mother Love Bone members, continuing the city\'s heavy, riff-driven rock lineage into the late \'90s.',
        aliases: [],
      },

      'Ten Minute Warning': {
        bio: 'Early Seattle proto-grunge unit from the mid-\'80s, predating the sub-category\'s boom while sharing its metallic heaviness and punk chaos.',
        aliases: [],
      },

      'Dig': {
        bio: '1990s LA quartet honing loud, distorted rock with a sludgy pulse, earning comparisons to grunge\'s heavier side on albums like \'Defenders of the Universe\'.',
        aliases: [],
      },

      'The Lonely Moans': {
        bio: 'Seattle-based project involving members of Screaming Trees and Fastbacks, purveying gritty, psychedelic-tinged grunge into the modern era.',
        aliases: [],
      },

      'Kerosene 454': {
        bio: 'Australian hard rock band with a menacing, riff-laden sound pitched between classic metal and grunge\'s grimy fury, active in the early \'90s.',
        aliases: [],
      },

      'Splendora': {
        bio: 'North Carolina band melding dense guitars and punk attitude, contributing a sludgy, anthemic sound to the \'90s grunge-adjacent underground.',
        aliases: [],
      },

      'Crunchbird': {
        bio: 'Seattle\'s early \'90s purveyors of heavy, feedback-laced alt-rock, inhaling the same rain-soaked sonic grit as the sub-category\'s core acts.',
        aliases: [],
      },

      'Skunt': {
        bio: 'Short-lived mid-\'90s Seattle grunge act featuring ex-members of The Fluid, churning out low-slung, cynical hard rock in the genre\'s geographic cradle.',
        aliases: [],
      },

      'Glue': {
        bio: 'Angeleno early-\'90s power trio crafting heavy, angst-fueled punk-metal fusions, a regional echo of the Pacific Northwest grunge ethos.',
        aliases: [],
      },
    },

    'Punk / Post-Hardcore': {
      'The Clash': {
        bio: "The only band that mattered; Joe Strummer's political fury fused with reggae, dub, and pure rockabilly to expand punk's entire musical vocabulary.",
        aliases: ['clash', 'theclash', 'the clash.', 'joe strummer mick jones'],
      },

      'Sex Pistols': {
        bio: "The architects of pure chaos; John Lydon's sneer and Steve Jones's guitar distortion kickstarted the UK punk explosion with 'Never Mind the Bollocks.'",
        aliases: ['sexpistols', 'sex pistols.', 'the sex pistols', 'john lydon', 'johnny rotten'],
      },

      'Ramones': {
        bio: 'The absolute originators; three chords, leather jackets, and blisteringly fast bubblegum melodies that invented American punk rock in Queens, NYC.',
        aliases: ['the ramones', 'ramones.', 'theramones'],
      },

      'The Jam': {
        bio: 'The mod-fathers of the UK punk explosion whose melodic, R&B-tinged anthems under Paul Weller captured British youth culture perfectly.',
        aliases: ['the jam.', 'thejam', 'paul weller'],
      },

      'The Stooges': {
        bio: "Iggy Pop's proto-punk juggernaut whose raw, violent noise and stage antics essentially invented the attitude of punk rock years before it had a name.",
        aliases: ['iggy and the stooges', 'iggy pop'],
      },

      'The Damned': {
        bio: "The first UK punk band to release a single; their transition from raw punk to gothic, keyboard-laced post-punk is one of the genre's great evolutions.",
        aliases: ['damned', 'the damned.', 'thedamned'],
      },

      'Dead Kennedys': {
        bio: "Jello Biafra's razor-sharp political satire and East Bay Ray's surf-inflected shredding made them the definitive, uncompromising voice of West Coast punk.",
        aliases: ['deadkennedys', 'dead kennedys.', 'jello biafra'],
      },

      'Bad Brains': {
        bio: "D.C.'s legendary originators of hardcore punk, blindingly fast and mathematically tight, seamlessly integrating reggae and dub into the hardcore blueprint.",
        aliases: ['badbrains', 'bad brains.'],
      },

      'Black Flag': {
        bio: "The ultimate DIY hardcore pioneers; Henry Rollins's primal roar and Greg Ginn's sludgy, atonal riffs birthed modern American underground punk.",
        aliases: ['blackflag', 'black flag.', 'henry rollins black flag'],
      },

      'Minor Threat': {
        bio: "Ian MacKaye's lightning-fast, hyper-articulate hardcore burst codified the straight-edge movement and set the ethical standard for underground music.",
        aliases: ['minorthreat', 'minor threat.', 'ian mackaye'],
      },

      'Fugazi': {
        bio: 'Dischord Records royalty; their fiercely independent ethos and complex, dub-influenced post-hardcore practically defined 90s underground rock integrity.',
        aliases: ['fugazi.', 'fugazi band'],
      },

      'huskerdü': {
        bio: 'Husker Du',
        aliases: [],
      },

      'Descendents': {
        bio: "Milo Aukerman's caffeine-fueled pop-punk invented the template for combining hyperspeed hardcore with lovelorn, self-deprecating teenage angst.",
        aliases: ['descendents.', 'the descendents', 'milo aukerman'],
      },

      'The Misfits': {
        bio: "Glenn Danzig's horror-punk progenitors fused 50s rockabilly melodies with B-movie gore, creating a subculture and visual aesthetic that endures endlessly.",
        aliases: ['misfits', 'the misfits.', 'themisfits'],
      },

      'Danzig': {
        bio: 'Danzig',
        aliases: [],
      },

      'Social Distortion': {
        bio: 'Mike Ness infused Orange County punk with Johnny Cash-style outlaw country and blues, creating an instantly recognizable cowpunk/rockabilly hybrid.',
        aliases: ['socialdistortion', 'social distortion.', 'mike ness'],
      },

      'The Offspring': {
        bio: 'The Offspring',
        aliases: ['offspring', 'theoffspring', 'the offspring.'],
      },

      'Green Day': {
        bio: 'Green Day',
        aliases: ['greenday', 'green day.', 'billie joe armstrong'],
      },

      'Rancid': {
        bio: 'Rancid',
        aliases: ['rancid.', 'rancid band', 'tim armstrong'],
      },

      'NOFX': {
        bio: 'NOFX',
        aliases: ['nofx.', 'no fx'],
      },

      'Bad Religion': {
        bio: 'Bad Religion',
        aliases: ['badreligion', 'bad religion.', 'greg graffin'],
      },

      'Pennywise': {
        bio: 'Pennywise',
        aliases: ['pennywise.', 'pennywise band'],
      },

      'Alkaline Trio': {
        bio: 'Alkaline Trio',
        aliases: ['alkalinetrio', 'alkaline trio.'],
      },

      'Dropkick Murphys': {
        bio: 'Dropkick Murphys',
        aliases: ['dropkickmurphys', 'dropkick murphys.'],
      },

      'Flogging Molly': {
        bio: 'Flogging Molly',
        aliases: ['floggingmolly', 'flogging molly.'],
      },

      'Rise Against': {
        bio: 'Rise Against',
        aliases: ['riseagainst', 'rise against.'],
      },

      'Thursday': {
        bio: 'Thursday',
        aliases: ['thursday.', 'thursday band'],
      },

      'Saves the Day': {
        bio: 'Saves the Day',
        aliases: ['savesTheDay', 'saves the day.'],
      },

      'Taking Back Sunday': {
        bio: 'Taking Back Sunday',
        aliases: ['takingbacksunday', 'taking back sunday.', 'tbs'],
      },

      'Brand New': {
        bio: 'Brand New',
        aliases: ['brandnew', 'brand new.', 'brand new band', 'jesse lacey'],
      },

      'The Used': {
        bio: 'The Used',
        aliases: ['used', 'theused', 'the used.'],
      },

      'Hawthorne Heights': {
        bio: 'Hawthorne Heights',
        aliases: ['hawthorne heights.', 'hawthorneheights'],
      },

      'Senses Fail': {
        bio: 'Senses Fail',
        aliases: ['senses fail.', 'sensesfail'],
      },

      'Underoath': {
        bio: 'Underoath',
        aliases: ['underoath.', 'under oath'],
      },

      'The Starting Line': {
        bio: 'The Starting Line',
        aliases: ['starting line', 'thestartingline'],
      },

      'Matchbook Romance': {
        bio: 'Matchbook Romance',
        aliases: ['matchbookromance', 'matchbook romance.'],
      },

      'My Chemical Romance': {
        bio: 'My Chemical Romance (emo/punk)',
        aliases: ['mychemicalromance', 'my chemical romance.', 'mcr', 'gerard way'],
      },

      'AFI': {
        bio: 'AFI',
        aliases: ['afi.', 'a fire inside', 'afi band', 'davey havok'],
      },

      'Paramore': {
        bio: 'Paramore',
        aliases: ['paramore.', 'hayley williams'],
      },

      'Fall Out Boy': {
        bio: 'Fall Out Boy',
        aliases: ['falloutboy', 'fall out boy.', 'fob', 'pete wentz'],
      },

      'Panic! at the Disco': {
        bio: 'Panic! At The Disco',
        aliases: ['panic at the disco', 'panicatthedisco', 'panic! at the disco.', 'brendon urie'],
      },

      'Sum 41': {
        bio: 'Sum 41',
        aliases: ['sum41', 'sum 41.'],
      },

      'Blink-182': {
        bio: 'Blink-182',
        aliases: ['blink182', 'blink 182', 'blink-182.', 'mark hoppus tom delonge'],
      },

      'New Found Glory': {
        bio: 'New Found Glory',
        aliases: ['newfoundglory', 'new found glory.'],
      },

      'At the Drive-In': {
        bio: "El Paso post-hardcore legends whose frenzied energy on Relationship of Command essentially defined the genre's creative peak around 2000.",
        aliases: ['at the drive in', 'atthedrivein', 'atdi', 'at the drive-in.', 'at the drivein', 'cedric bixler zavala at the drive in'],
      },

      'Refused': {
        bio: 'Swedish post-hardcore visionaries whose The Shape of Punk to Come is one of the most influential and forward-thinking punk records ever made.',
        aliases: ['refused.', 'refused band', 'the refused', 'dennis lyxzén'],
      },

      'Jawbreaker': {
        bio: 'San Francisco punk trio who bridged melodic punk and confessional songwriting, directly paving the way for the emo and pop-punk explosion.',
        aliases: ['jawbreaker.', 'jawbreaker band', 'jaw breaker', 'blake schwarzenbach'],
      },

      'Buzzcocks': {
        bio: 'Manchester punk originators whose hook-driven, lovelorn approach to three-chord punk on Singles Going Steady became the template for pop-punk.',
        aliases: ['the buzzcocks', 'buzzcocks.', 'buzz cocks', 'pete shelley buzzcocks'],
      },

      'Operation Ivy': {
        bio: 'Foundational East Bay ska-punk act whose brief output on Lookout! Records directly spawned Rancid and the entire 90s punk revival.',
        aliases: ['operationivy', 'operation ivy.', 'op ivy', 'opivy', 'jesse michaels operation ivy'],
      },

      'Quicksand': {
        bio: 'New York post-hardcore architects whose dense, groove-heavy approach on Slip influenced countless bands from Deftones to Thursday.',
        aliases: ['quicksand.', 'quicksand band', 'quick sand', 'walter schreifels'],
      },

      'Glassjaw': {
        bio: 'Long Island post-hardcore innovators whose raw, dynamic records Worship and Tribute and Everything You Ever Wanted to Know About Silence are genre cornerstones.',
        aliases: ['glassjaw.', 'glass jaw', 'glassjaw band', 'daryl palumbo'],
      },

      'Thrice': {
        bio: 'Orange County post-hardcore mainstays who evolved from blistering punk on The Illusion of Safety to ambitious art-rock while retaining devoted genre credibility.',
        aliases: ['thrice.', 'thrice band', 'dustin kensrue', 'dustin kensrue thrice'],
      },

      'Saosin': {
        bio: 'Post-hardcore act whose soaring clean-to-scream vocal dynamics and Translating the Name EP helped define the mid-2000s wave of the genre.',
        aliases: ['saosin.', 'saosin band', 'saosín', 'cove reber', 'anthony green saosin'],
      },

      'Silverstein': {
        bio: 'Canadian post-hardcore staple whose blend of melodic hooks and screamed passages across Discovering the Waterfront made them Victory Records linchpins.',
        aliases: ['silverstein.', 'silverstein band', 'silver stein', 'shane told silverstein'],
      },

      'Against Me!': {
        bio: 'Gainesville punk institution whose evolution from anarchist folk-punk to anthemic rock brought raw political urgency back to mainstream punk.',
        aliases: ['against me', 'againstme', 'against me!.', 'against me band', 'laura jane grace', 'tom gabel'],
      },

      'Hot Water Music': {
        bio: 'Gainesville punk stalwarts whose gravel-voiced, emotionally resonant brand of melodic hardcore influenced an entire generation of post-hardcore.',
        aliases: ['hotwatermusic', 'hot water music.', 'hwm', 'chuck ragan hot water music'],
      },

      'Circle Jerks': {
        bio: 'Los Angeles hardcore punk legends fronted by ex-Black Flag vocalist Keith Morris, delivering some of the fastest and funniest early American punk.',
        aliases: ['circlejerks', 'circle jerks.', 'the circle jerks', 'keith morris circle jerks'],
      },

      'Drive Like Jehu': {
        bio: "San Diego post-hardcore pioneers whose angular, explosive sound on Yank Crime is considered one of the genre's most essential and uncompromising records.",
        aliases: ['drivelikejehu', 'drive like jehu.', 'dlj', 'rick froberg', 'john reis drive like jehu'],
      },

      'Dag Nasty': {
        bio: "Dischord Records post-hardcore originators who helped invent melodic hardcore in the mid-1980s, bridging Minor Threat's intensity with tuneful songwriting.",
        aliases: ['dagnasty', 'dag nasty.', 'dag nasty band', 'brian baker dag nasty'],
      },

      'Gorilla Biscuits': {
        bio: 'New York hardcore punk icons from the youth crew movement whose Start Today remains a foundational positive hardcore album.',
        aliases: ['gorillabiscuits', 'gorilla biscuits.', 'gb', 'gorilla biscuits band', 'walter schreifels gorilla biscuits', 'civ gorilla biscuits'],
      },

      'The Bouncing Souls': {
        bio: "New Brunswick punk rock lifers whose endlessly energetic and heartfelt catalog has made them one of the East Coast's most beloved underground punk bands.",
        aliases: ['bouncing souls', 'thebouncingsouls', 'the bouncing souls.', 'bouncingsouls'],
      },

      'Anti-Flag': {
        bio: 'Pittsburgh political punk stalwarts who carried the tradition of Dead Kennedys-style agitprop punk into the 2000s mainstream with unrelenting activism.',
        aliases: ['anti flag', 'antiflag', 'anti-flag.', 'anti flag.', 'justin sane anti-flag'],
      },

      'Chiodos': {
        bio: "Michigan post-hardcore act whose theatrical, keyboard-laced sound on All's Well That Ends Well made them key players in the mid-2000s post-hardcore scene.",
        aliases: ['chiodos.', 'chiodos band', 'craig owens chiodos', 'chiodos bros'],
      },

      'From First to Last': {
        bio: "Post-hardcore band whose raw intensity and Sonny Moore's visceral screaming on Dear Diary, My Teen Angst Has a Body Count epitomized mid-2000s scene culture.",
        aliases: ['fromfirsttolast', 'from first to last.', 'fftl', 'sonny moore from first to last'],
      },

      'The Germs': {
        bio: 'Los Angeles punk instigators known for raw, chaotic performances and the snarling minimalism of 1979\'s \'GI.\'',
        aliases: [],
      },

      'X-Ray Spex': {
        bio: 'Poly Styrene\'s pioneering UK punk band mixed razor-sharp social critique with saxophone-honking, DIY garage urgency.',
        aliases: [],
      },

      'Stiff Little Fingers': {
        bio: 'Belfast punk rockers who channeled Northern Ireland\'s Troubles into urgent, anthemic songs that defined second-wave punk.',
        aliases: [],
      },

      'Sacred Reich': {
        bio: 'Arizona crossover thrashers blending hardcore punk\'s speed and politics with metal\'s aggression on definitive late-\'80s agitprop records.',
        aliases: [],
      },

      'Sick of It All': {
        bio: 'Queens hardcore quintet central to New York\'s late-\'80s scene, maintaining a ferocious, uncompromising sound with street-level politics.',
        aliases: [],
      },

      'Snapcase': {
        bio: 'Buffalo post-hardcore band fusing metallic riffing and melodic vocals, becoming a defining voice of 1990s hardcore\'s artistic expansion.',
        aliases: [],
      },

      'Pegboy': {
        bio: 'Chicago punk institution melding speedy hooks and piercing guitar work, bridging late-\'80s hardcore and 1990s melodic punk.',
        aliases: [],
      },

      'Swiz': {
        bio: 'Washington, D.C. post-hardcore unit who took the breakneck charge of hardcore into more dissonant, experimental territories.',
        aliases: [],
      },

      'Nation of Ulysses': {
        bio: 'D.C. agitprop punk collective whose confrontational, art-damaged sound and revolutionary rhetoric prefigured post-hardcore\'s theatrical turn.',
        aliases: [],
      },

      'Charged GBH': {
        bio: 'UK punk purveyors of blistering, hardcore-infused speed, integral to the British punk and street-punk movements of the early \'80s.',
        aliases: ['GBH'],
      },

      'The Exploited': {
        bio: 'Scottish hardcore punk band from the early 1980s, known for raw aggression, political lyrics, and a chaotic, working-class ethos.',
        aliases: [],
      },

      'The Adicts': {
        bio: 'British punk rock band from the late 1970s, blending catchy melodies with a theatrical, Clockwork Orange-inspired image and high-energy performances.',
        aliases: [],
      },

      'D.R.I.': {
        bio: 'American crossover thrash band from the 1980s, mixing hardcore punk speed and political anger with heavy metal riffs.',
        aliases: ['Dirty Rotten Imbeciles'],
      },

      'Agnostic Front': {
        bio: 'New York hardcore punk pioneers from the 1980s, central to the scene\'s aggressive sound and street-level rebellious attitude.',
        aliases: [],
      },

      'Cro-Mags': {
        bio: 'New York hardcore band blending punk, metal, and spiritual themes, a key force in the late 1980s crossover movement.',
        aliases: [],
      },

      'Murphy\'s Law': {
        bio: 'New York hardcore punk band from the 1980s, known for their fast, raw sound and highly energetic live shows.',
        aliases: [],
      },

      'The Casualties': {
        bio: 'American street punk band from the 1990s, delivering rapid-fire, politically charged anthems with a gritty, DIY aesthetic.',
        aliases: [],
      },

      'TSOL': {
        bio: 'American punk rock band from the late 1970s, evolving from hardcore roots into gothic and political territory, retaining rebellious urgency.',
        aliases: ['T.S.O.L.'],
      },

      '7 Seconds': {
        bio: 'Pioneering American hardcore punk band from the 1980s, promoting positive, politically aware messages with relentless speed and energy.',
        aliases: [],
      },

      'The Varukers': {
        bio: 'British hardcore punk band from the early 1980s, known for their blistering pace and intense, politically charged anarcho-punk sound.',
        aliases: [],
      },

      'Poison Idea': {
        bio: 'American hardcore punk band from the 1980s, celebrated for their ferocious speed, raw power, and confrontational political lyrics.',
        aliases: [],
      },

      'Uniform Choice': {
        bio: 'American straight-edge hardcore punk band from the 1980s, blending fast, technical playing with politically aware and personal lyrics.',
        aliases: [],
      },

      'The Adverts': {
        bio: 'UK punk originals, their 1977 debut \'Crossing the Red Sea\' remains a sharp, raw classic of the era.',
        aliases: [],
      },

      '999': {
        bio: 'UK punk band from the late 70s, known for high-energy anthems and relentless live shows.',
        aliases: [],
      },

      'The Ruts': {
        bio: 'British reggae-influenced punk band whose politically charged, urgent songs stood out in the late 70s scene.',
        aliases: [],
      },

      'The Lurkers': {
        bio: 'A key British punk band of 1977, they delivered fast, basic three-chord rippers with a street-level energy.',
        aliases: [],
      },

      'Subhumans': {
        bio: 'UK anarcho-punk band, fronted by Dick Lucas, known for their fast, politically charged hardcore punk.',
        aliases: [],
      },

      'Conflict': {
        bio: 'A foundational UK anarcho-punk collective whose aggressive, political sound and DIY ethos defined the 1980s crust-punk scene.',
        aliases: [],
      },

      'Discharge': {
        bio: 'Pioneered the raw, fast blast-beat style that became \'D-beat\' hardcore, influencing thrash and extreme metal.',
        aliases: [],
      },

      'Broken Bones': {
        bio: 'UK hardcore punk supergroup formed by members of Discharge, playing fast, raw, and politically fueled music.',
        aliases: [],
      },

      'Siege': {
        bio: 'American hardcore punk innovators from Massachusetts whose extreme speed and aggression were hugely influential on grindcore.',
        aliases: [],
      },

      'Crass': {
        bio: 'Seminal Anarcho-punk collective who invented a fiercely DIY, political, and highly influential aesthetic for the entire genre.',
        aliases: [],
      },

      'The Muffs': {
        bio: 'California punk-pop trio blending Ramones energy with 1960s pop hooks; a vital 1990s and 2000s force.',
        aliases: [],
      },

      'The Distillers': {
        bio: 'Australian-American punk band fronted by Brody Dalle; raw, aggressive garage-punk revivalists of the early 2000s.',
        aliases: [],
      },

      'X': {
        bio: 'Los Angeles punk rock band fusing poetry with rockabilly and hardcore energy; central to 1980s punk scene.',
        aliases: [],
      },

      'The Weirdos': {
        bio: 'Los Angeles punk pioneers from the 1970s, known for raw, art-damaged aggression and defiant independence.',
        aliases: [],
      },

      'The Dicks': {
        bio: 'Austin, Texas punk band with a confrontational, political edge; frontman Gary Floyd was a queer icon in hardcore.',
        aliases: [],
      },

      'Angry Samoans': {
        bio: 'Los Angeles hardcore punk band founded in 1978, known for fast, sarcastic, and abrasive early 80s punk.',
        aliases: [],
      },

      'The Vandals': {
        bio: 'Southern California punk band formed in 1980; influential for fast, humorous, and irreverent punk rock.',
        aliases: [],
      },

      'Fang': {
        bio: 'Berkeley, California hardcore punk band from the early 1980s; a raw, influential staple of the Bay Area scene.',
        aliases: [],
      },

      'Veruca Salt': {
        bio: 'Chicago alt-rock quartet that channeled punk\'s raw guitar noise and angry energy into 1990s radio rock.',
        aliases: [],
      },

      'The Adolescents': {
        bio: 'Early 1980s Orange County punk mainstay whose debut album shaped the genre\'s fast, raw sound and defiant attitude.',
        aliases: ['Adolescents'],
      },

      'The Dwarves': {
        bio: 'Prolific underground punk group with a raw, violent sound and provocative image, active since the 1980s.',
        aliases: [],
      },

      'The Lillingtons': {
        bio: 'Pop-punk band blending Ramones-style speed with teenage sci-fi and political themes, a key 1990s act.',
        aliases: [],
      },

      'The Virus': {
        bio: 'Anthemic street punk band from Philadelphia in the 1990s-2000s, deeply rooted in political and working-class aggression.',
        aliases: [],
      },

      'The Unseen': {
        bio: 'Boston hardcore punk band of the 1990s and 2000s, fusing fast tempos with Oi! melodies and social critique.',
        aliases: [],
      },

      'A Global Threat': {
        bio: 'Boston hardcore punk act known for blistering speed and raw political urgency, bridging D-beat and street punk.',
        aliases: [],
      },

      'Career Suicide': {
        bio: 'Toronto hardcore punk band reviving early 1980s fast, raw, and aggressive styles through the 2000s and 2010s.',
        aliases: [],
      },

      'Raw Power': {
        bio: 'Italian hardcore punk group formed in 1981, a pioneering force in Europe\'s fast, political punk scene.',
        aliases: [],
      },

      'The Accüsed': {
        bio: 'Washington state crossover thrash band mixing punk\'s raw speed with metal\'s aggression, active from the 1980s onward.',
        aliases: ['The Accused'],
      },

      'D.I.': {
        bio: 'Southern California punk band formed by the Adolescents\' Casey Royer, delivering fast, bratty, and political punk since 1982.',
        aliases: [],
      },

      'The Grim': {
        bio: 'Short-lived but influential early 1980s Orange County hardcore punk group, known for fast and urgent songs.',
        aliases: [],
      },

      'Minutemen': {
        bio: 'Pioneering California punk trio blending jazz, funk, and political commentary into short, rapid-fire bursts of music.',
        aliases: [],
      },

      'Big Black': {
        bio: 'Steve Albini\'s abrasive, rhythmic noise-rock project that pushed punk\'s harsh edges into post-hardcore territory.',
        aliases: [],
      },

      'Naked Raygun': {
        bio: 'Chicago punk mainstays blending melody and grit, earning huge influence before the 1990s punk explosion.',
        aliases: [],
      },

      'Screeching Weasel': {
        bio: 'Chicago pop-punk band whose fast, melodic style laid groundwork for 1990s punk revival and Green Day\'s success.',
        aliases: [],
      },

      'Youth of Today': {
        bio: 'Pivotal New York straight-edge hardcore band whose positivity and chugging riffs defined late-1980s youth crew movement.',
        aliases: [],
      },

      'The Effigies': {
        bio: 'Chicago punk pioneers of the late 1970s, mixing angular rhythms and political urgency into early American hardcore.',
        aliases: [],
      },

      'Germs': {
        bio: 'Los Angeles proto-hardcore punks whose raw 1977 debut defined West Coast punk\'s abrasive, chaotic intensity.',
        aliases: [],
      },

      'The Briefs': {
        bio: 'Seattle punk band with a garage-rock edge, known for frantic energy and catchy, politically charged songs in the 2000s.',
        aliases: [],
      },

      'The Spits': {
        bio: 'Minimalist, raw punk trio from Seattle, blending synth-punk with lo-fi garage aggression, iconic for their stripped-down sound.',
        aliases: [],
      },

      'Night Birds': {
        bio: 'New Jersey punk band fusing surf-rock riffs with hardcore speed, delivering urgent, fast-paced anthems about suburban decay.',
        aliases: [],
      },

      'The Menzingers': {
        bio: 'Philadelphia punk-rock quartet, blending heartfelt working-class narratives with fast, anthemic guitar-driven urgency.',
        aliases: [],
      },

      'PUP': {
        bio: 'Toronto punk band known for frantic, self-deprecating and politically aware songs, capturing high-energy, raw angst since the 2010s.',
        aliases: [],
      },

      'Screaming Females': {
        bio: 'New Jersey punk trio led by Marissa Paternoster\'s blistering guitar work, combining raw power with melodic aggression.',
        aliases: [],
      },

      'OFF!': {
        bio: 'Los Angeles hardcore punk supergroup led by Keith Morris, reviving the short, fast, and loud ethos of early 1980s punk.',
        aliases: [],
      },

      'Ceremony': {
        bio: 'Bay Area band that evolved from ferocious hardcore into a tense, post-punk-influenced sound, retaining a politically charged core.',
        aliases: [],
      },

      'Fucked Up': {
        bio: 'Canadian hardcore punk collective celebrated for complex song structures and aggressive, politically charged wall-of-sound intensity.',
        aliases: [],
      },

      'Titus Andronicus': {
        bio: 'New Jersey punk-rock band with a strong political bent, known for combining raw guitar noise with anthemic, shout-along urgency.',
        aliases: [],
      },

      'White Lung': {
        bio: 'Vancouver punk band known for their blistering speed, urgent tempo, and politically charged, feminist lyrics in the 2010s.',
        aliases: [],
      },

      'Propagandhi': {
        bio: 'Canadian punk band equally rooted in hardcore, mixing fast guitar work with sharp, leftist political critique since the 1990s.',
        aliases: [],
      },

      'The Bronx': {
        bio: 'LA hardcore-punk band with raw, riff-heavy aggression and a self-titled debut that redefined modern punk for the 2000s.',
        aliases: [],
      },

      'Gang Green': {
        bio: 'Boston hardcore-punk pioneers blending speed, humor, and aggression, essential to the 1980s underground punk scene.',
        aliases: [],
      },

      'Suicidal Tendencies': {
        bio: 'Venice Beach crossover thrash/punk act known for fast, political, and rebellious anthems that defined 1980s hardcore.',
        aliases: [],
      },

      'MDC': {
        bio: 'Austin/LA hardcore band with raw political fury, confronting racism and war in the early 1980s, a key voice for activism.',
        aliases: ['Millions of Dead Cops'],
      },

      'Code Orange': {
        bio: 'Pittsburgh metalcore/hardcore hybrid merging brutal slamdowns and industrial textures, pushing punk\'s aggression into the modern era.',
        aliases: [],
      },

      'The Chisel': {
        bio: 'UK street-punk/Oi! group with urgent, working-class riffs and politically charged lyrics, reigniting the punk\'s raw ethos.',
        aliases: [],
      },

      'Gag': {
        bio: 'LA hardcore punk act with thrashing speed and dark social commentary, channeling early 80s fury into contemporary noise.',
        aliases: [],
      },

      'Zulu': {
        bio: 'LA hardcore-punk band blending Black metal and powerviolence, injecting urgent political and cultural critique into the genre.',
        aliases: [],
      },
    },

    'Rock en Español': {
      'Soda Stereo': {
        bio: "The most influential band in Rock en Español history; Gustavo Cerati's visionary songwriting pushed sonic boundaries from post-punk into lush, stadium-filling alternative rock.",
        aliases: ['soda estereo', 'soda stereo.', 'sodastereo', 'soda stéreo'],
      },

      'Gustavo Cerati (solo)': {
        bio: 'A genius of Latin American rock whose solo work seamlessly integrated sophisticated electronic textures, shoegaze, and art-pop into his peerless guitar playing.',
        aliases: ['gustavocerati'],
      },

      'Café Tacvba': {
        bio: "Mexico's most adventurous alternative rock band, whose genre-bending fusion of indigenous folk, punk, and electronic music mirrors Radiohead's boundary-pushing role.",
        aliases: ['cafe tacvba', 'cafe tacuba', 'café tacuba'],
      },

      'Caifanes': {
        bio: 'Foundational Mexican alternative rock band whose dark, poetic post-punk aesthetic and massive anthems define the classic Latin American rock tradition.',
        aliases: ['caifanes band', 'caifanes.'],
      },

      'Jaguares': {
        bio: "Saúl Hernández's post-Caifanes project that continued his legacy of mystic, deeply Mexican stadium rock.",
        aliases: ['jaguares band', 'jaguares.'],
      },

      'Molotov': {
        bio: 'The irreverent, socially conscious rap-rock titans of Mexico whose explosive grooves and bilingual lyrics made them the Beastie Boys of Latin America.',
        aliases: ['molotov.', 'molotov mexico'],
      },

      'Maná': {
        bio: 'The undisputed kings of mainstream Latin pop-rock; their reggae-infused grooves and arena-ready ballads made them global superstars.',
        aliases: ['mana', 'maná.', 'fher olvera'],
      },

      'Los Fabulosos Cadillacs': {
        bio: 'Argentine party-rock institution blending ska, cumbia, and rock whose infectious energy and two-decade catalog make them a staple of Latin American rock festivals.',
        aliases: ['losfabulososcadillacs', 'fabulosos cadillacs'],
      },

      'Héroes del Silencio': {
        bio: "Spain's premier stadium rock band whose gothic, hard-rocking sound and Enrique Bunbury's theatrical baritone conquered Europe and the Americas.",
        aliases: ['heroes del silencio', 'heroesdelsilencio', 'enrique bunbury'],
      },

      'enriquebunbury': {
        bio: 'Enrique Bunbury (solo)',
        aliases: ['bunbury'],
      },

      'Charly García': {
        bio: 'The brilliant, unpredictable pioneer of Argentine rock whose solo career and work with Sui Generis shaped the DNA of Rock Nacional.',
        aliases: ['charly garcia', 'charlygarcia', 'sui generis'],
      },

      'El Tri': {
        bio: "The godfathers of Mexican blues-rock; Alex Lora's gravelly voice and working-class anthems make them the Rolling Stones of Mexico.",
        aliases: ['eltri', 'el tri.', 'alex lora'],
      },

      'Zoé': {
        bio: "Mexican indie-rock royalty whose spacey, synth-driven psychedelia and León Larregui's haunting vocals soundtracked the 2000s Latin alt-rock explosion.",
        aliases: ['zoe', 'zoé.', 'zoe band mexico'],
      },

      'Panda': {
        bio: 'The defining voice of Mexican pop-punk and emo; their angst-fueled anthems commanded an absolute cult following in the 2000s.',
        aliases: ['panda.', 'panda mx', 'pxndx'],
      },

      'Kinky': {
        bio: "Monterrey's electronic-rock visionaries who fused techno, funk, and rock into a seamless, highly danceable alternative sound.",
        aliases: ['kinky.', 'kinky mx'],
      },

      'Babasónicos': {
        bio: 'Argentine provocateurs whose sly, glamorous fusion of alt-rock and synth-pop made them the most stylish, subversive rock band in South America.',
        aliases: ['babasonicos', 'babasónicos.'],
      },

      'Los Prisioneros': {
        bio: 'The voice of Chilean youth in the 80s; their politically charged, synth-punk anthems spoke truth to power and defined a generation of resistance.',
        aliases: ['losprisioneros', 'los prisioneros.'],
      },

      'Los Bunkers': {
        bio: 'Chilean rockers whose immaculate, Beatlesque melodies and driving guitars revived classic 60s rock aesthetics for the 2000s Latin scene.',
        aliases: ['losbunkers', 'los bunkers.'],
      },

      'La Ley': {
        bio: "Chile's slickest, most internationally successful dark-pop/rock export, blending new wave aesthetics with arena-rock ambition.",
        aliases: ['laley', 'la ley.'],
      },

      'Jarabe de Palo': {
        bio: "The quintessential Spanish pop-rock band whose acoustic-driven, flamenco-tinged hits like 'La Flaca' remain universally beloved.",
        aliases: ['jarabedepalo', 'jarabe de palo.'],
      },

      'Los Enanitos Verdes': {
        bio: "Argentine staples whose instantly recognizable riffs and melancholic pop-rock anthems ('Lamento Boliviano') are absolute karaoke and bar-rock classics.",
        aliases: ['losenanitos', 'enanitos verdes'],
      },

      'Miranda!': {
        bio: 'The glittering, melodramatic kings of Argentine electro-pop whose infectious falsettos and synth-heavy hooks redefined 2000s Latin pop.',
        aliases: ['miranda', 'miranda!.'],
      },

      'División Minúscula': {
        bio: "Mexico's premier melodic punk-rock band, driving the late-90s and 2000s underground rock resurgence in the north.",
        aliases: ['division minuscula', 'divisionminuscula'],
      },

      'Porter': {
        bio: "Avant-garde Mexican indie rock whose surreal, experimental sound on 'Atemahawke' marked them as the Radiohead of the Guadalajara scene.",
        aliases: ['porter.', 'porter mx'],
      },

      'Rata Blanca': {
        bio: 'Argentine heavy metal and neoclassical rock titans whose epic guitar solos and fantasy-driven lyrics rule the Latin hard rock scene.',
        aliases: ['ratablanca', 'rata blanca.'],
      },

      'La Renga': {
        bio: 'Massive, working-class Argentine hard-rockers whose blues-heavy riffs and rabid, stadium-filling fanbase make them a cultural phenomenon.',
        aliases: ['larenga', 'la renga.'],
      },

      'Bersuit Vergarabat': {
        bio: 'Argentine rockers whose anarchic, cumbia-infused political rock and explosive live shows dominated the 1990s and 2000s underground.',
        aliases: ['bersuit vergarabat.', 'bersuit'],
      },

      'Tricot Machine': {
        bio: 'Tricot Machine',
        aliases: ['tricotmachine'],
      },

      'Illya Kuryaki and the Valderramas': {
        bio: 'The funky, Prince-indebted Argentine duo whose rap-rock and R&B fusion brought massive, undeniable groove to Rock en Español.',
        aliases: ['illya kuryaki'],
      },

      'Mano Negra': {
        bio: "Manu Chao's legendary, chaotic French-Spanish collective that fused punk, ska, salsa, and reggae into an incredibly influential global sound.",
        aliases: ['mano negra.', 'manu chao'],
      },

      'Los Rodríguez': {
        bio: 'The legendary Spanish-Argentine supergroup featuring Andrés Calamaro that essentially defined 90s Spanish rock with perfect, bluesy pop-rock anthems.',
        aliases: ['los rodriguez', 'los rodríguez.'],
      },

      'Aterciopelados': {
        bio: 'Colombian rock pioneers whose blend of alternative rock, punk, and Latin rhythms made them one of the most critically acclaimed acts of the 1990s.',
        aliases: ['aterciopelados.', 'atercioplados', 'andrea echeverri', 'andreaecheverri'],
      },

      'Fito Páez': {
        bio: "Argentine rock icon whose album 'El Amor Después del Amor' became the best-selling Argentine rock record of all time.",
        aliases: ['fito paez', 'fitopaez', 'fito páez.', 'fito', 'fito paéz'],
      },

      'Andrés Calamaro': {
        bio: 'Former Los Abuelos de la Nada and Los Rodríguez frontman whose prolific solo career made him an enduring pillar of Spanish-language rock.',
        aliases: ['andres calamaro', 'andrescalamaro', 'andrés calamaro.', 'calamaro', 'a. calamaro'],
      },

      'Luis Alberto Spinetta': {
        bio: 'Widely regarded as the founding father of Argentine rock, his work pioneered the entire rock nacional movement with deep poeticism and jazz chords.',
        aliases: ['luisalbertospinetta', 'spinetta', 'el flaco spinetta', 'l.a. spinetta', 'flaco spinetta'],
      },

      'Maldita Vecindad y los Hijos del Quinto Patio': {
        bio: 'Mexico City ska-rock legends whose fusion of punk, ska, and Mexican urban culture made them essential figures in the late-80s explosion.',
        aliases: ['maldita vecindad', 'malditavecindad', 'maldita vecindad.', 'maldita', 'maldita vecindad y los hijos del 5to patio'],
      },

      'El Cuarteto de Nos': {
        bio: 'Uruguayan rock band whose witty, literary lyrics and genre-bending style earned them massive pan-Latin American acclaim.',
        aliases: ['elcuartetodenos', 'cuarteto de nos', 'cuartetodenos', 'el cuarteto de nos.'],
      },

      'Los Auténticos Decadentes': {
        bio: 'Argentine party-rock institution blending ska, cumbia, and rock whose infectious energy and two-decade catalog make them a festival staple.',
        aliases: ['los autenticos decadentes', 'losautenticosdecadentes', 'autenticos decadentes', 'auténticos decadentes', 'los autenticos', 'decadentes'],
      },

      'Divididos': {
        bio: 'Argentine power trio born from the ashes of Sumo, known for their blues-heavy hard rock and improvisational live shows.',
        aliases: ['divididos.', 'divididos band', 'divididos argentina'],
      },

      'Extremoduro': {
        bio: "Spain's most beloved underground rock band, whose raw transgressive lyrics and powerful blues-rock sound built a massive cult following.",
        aliases: ['extremoduro.', 'extremo duro', 'robe iniesta', 'robe'],
      },

      'Los Planetas': {
        bio: "Granada-based indie rock cornerstone whose shoegazing textures and poetic Spanish-language lyrics defined Spain's 1990s independent rock scene.",
        aliases: ['losplanetas', 'los planetas.', 'planetas'],
      },

      'Patricio Rey y sus Redonditos de Ricota': {
        bio: "Argentina's most mythical rock band, whose cryptic lyrics and fierce independence define the absolute cult end of rock nacional.",
        aliases: ['redonditos de ricota', 'los redonditos', 'los redondos', 'redonditos', 'indio solari', 'el indio solari'],
      },

      'Serú Girán': {
        bio: "Charly García's legendary supergroup, often called the Argentine Beatles for their genre-defining progressive and pop-rock.",
        aliases: ['seru giran', 'serugiran', 'seru giran.', 'serú giran'],
      },

      'Los Tres': {
        bio: 'Chilean rock band whose fusion of blues, bolero, cueca, and alternative rock made them one of the most artistically ambitious acts in 1990s Rock en Español.',
        aliases: ['lostres', 'los tres.', 'los 3', 'los tres chile'],
      },

      'Plastilina Mosh': {
        bio: "Monterrey electronic-rock duo whose playful fusion of big beat, hip-hop, and rock helped define Mexico's late-90s alternative scene.",
        aliases: ['plastilinamosh', 'plastilina mosh.', 'plastilina', 'plastilinamosh.'],
      },

      'Enjambre': {
        bio: "Mexican indie-rock band whose emotionally charged melodic rock earned them a devoted following across Latin America's 2000s rock scene.",
        aliases: ['enjambre.', 'enjambre mx', 'enjambre band', 'enjambre mexico'],
      },

      'Siddhartha': {
        bio: "Monterrey singer-songwriter whose dreamy synth-inflected rock made him one of Mexico's most important 21st-century Rock en Español artists.",
        aliases: ['siddhartha.', 'siddhartha mx', 'siddartha', 'siddarta', 'siddhartha mexico'],
      },

      'Santa Sabina': {
        bio: 'Mexico City art-rock band fronted by the late Rita Guerrero, whose dark progressive rock made them a revered cult act of the 1990s.',
        aliases: ['santasabina', 'santa sabina.', 'santa savina', 'rita guerrero'],
      },

      'Botellita de Jerez': {
        bio: 'Pioneering Mexican rock-humorístico trio whose irreverent fusion of rock, punk, and Mexican folk in the 1980s helped break the cultural stigma against rock in Mexico.',
        aliases: ['botellitadejerez', 'botellita de jeréz', 'botellita', 'botellita de jerez.'],
      },

      'Tijuana No!': {
        bio: 'Tijuana-born political punk-ska-rock collective whose bilingual border-culture sound made them key figures in 1990s Mexican alternative rock.',
        aliases: ['tijuana no', 'tijuanano', 'tijuana no!.', 'tj no'],
      },

      'Tan Biónica': {
        bio: 'Argentine pop-rock band whose arena-filling synth-rock anthems and emotionally resonant songwriting made them one of the biggest acts of the 2010s.',
        aliases: ['tan bionica', 'tanbionica', 'tan biónica.', 'tan bionica.', 'tanbiónica'],
      },

      'Los Amantes de Lola': {
        bio: 'Colombian rock band from the 90s and 2000s, blending pop, punk, and Latin rock into anthemic, poetic songs.',
        aliases: [],
      },

      'Siniestro Total': {
        bio: 'Spanish punk-rock band noted for satirical, fast-paced songs and rebellious energy since the early 80s, key to Iberian rock.',
        aliases: [],
      },

      'Los Toreros Muertos': {
        bio: 'Spanish band mixing humorous, poetic rock with pop and punk, part of the vibrant 80s Madrid rock scene.',
        aliases: [],
      },

      'La Mosca': {
        bio: 'Argentine rock/ska band from the 90s, delivering festive, rhythmic anthems that became stadium sing-alongs across Latin America.',
        aliases: ['La Mosca Tse-Tse'],
      },

      'Los Tipiteros': {
        bio: 'Colombian band blending rock and tropical rhythms, high-energy live performances, and poetic lyrics, emerging over the last decade.',
        aliases: [],
      },

      'Alerta Pachuca': {
        bio: 'Mexican punk/rock band mixing ska and cumbia, known for socially aware, rebellious lyrics and energetic performances since 2000s.',
        aliases: [],
      },

      'La Cuca': {
        bio: 'Mexican hard-rock group from the 90s, incorporating punk and metal, with provocative, passionate, and rebellious lyrical themes.',
        aliases: [],
      },

      'Marea': {
        bio: 'Spanish rock band fusing hard rock with flamenco and Andalusian roots, known for poetic lyrics and energetic live shows.',
        aliases: [],
      },

      'Fobia': {
        bio: 'Mexican rock outfit from the late 80s, mixing post-punk with pop, known for introspective yet catchy, anthemic tracks.',
        aliases: [],
      },

      'La Gusana Ciega': {
        bio: 'Mexican rock and pop band formed in the 90s, producing alternativo and energetic hits with poetic, introspective songwriting.',
        aliases: [],
      },

      'Los Amigos Invisibles': {
        bio: 'Venezuelan band blending rock, funk, and disco with Spanish lyrics, key to Latin alternative rock since the 90s.',
        aliases: ['Los Amigos Invisibles'],
      },

      'La Vela Puerca': {
        bio: 'Uruguayan rock band from Montevideo, known for energetic ska-punk and anthemic socially conscious lyrics since 1995.',
        aliases: ['La Vela Puerca'],
      },

      'No Te Va Gustar': {
        bio: 'Uruguayan rock band formed in 1994, fusing rock, ska, and candombe, among the most popular in Latin America.',
        aliases: ['NTVG', 'No Te Va Gustar'],
      },

      'Cuentos de los Hermanos Grind': {
        bio: 'Mexican avant-garde rock band from the 90s, blending psychedelic, progressive, and theatrical elements in Spanish.',
        aliases: [],
      },

      'Eufemia': {
        bio: 'Ecuadorian rock band from the 90s, pioneers of the local scene with grunge and alternative influences.',
        aliases: ['Eufemia'],
      },

      'La Leyenda': {
        bio: 'Chilean rock band active since the 90s, merging hard rock with Latin folk textures and political edge.',
        aliases: [],
      },

      'Los Violadores': {
        bio: 'Argentine punk rock band from the early 80s, foundational to the Latin American punk movement with rebellious anthems.',
        aliases: ['Los Violadores'],
      },

      'Attaque 77': {
        bio: 'Argentine punk rock band formed in 1987, blending aggressive punk with melodic rock and social criticism.',
        aliases: ['Attaque 77'],
      },

      'El Mató a un Policía Motorizado': {
        bio: 'Argentine indie rock band from La Plata, known for lo-fi garage sound and poetic Spanish lyrics, influential since 2003.',
        aliases: ['El Mató a un Policía Motorizado'],
      },

      'Viejas Locas': {
        bio: 'Argentine rock and roll band from the 90s, key to the revival of gritty, streetwise blues-rock in Spanish.',
        aliases: ['Viejas Locas'],
      },

      'Los Saicos': {
        bio: 'Peruvian proto-punk pioneers whose raw 1960s garage sound predates and influences Latin American rock en español.',
        aliases: ['Los Saiocos'],
      },

      'La Polla Records': {
        bio: 'Spanish punk band from the Basque Country, known for aggressive, politically charged anthems since the early 1980s.',
        aliases: ['La Polla'],
      },

      'Cuca': {
        bio: 'Mexican rock en español band known for irreverent lyrics and energetic fusion of punk, metal, and psychedelia.',
        aliases: [],
      },

      'Los Estrambóticos': {
        bio: 'Mexican rock band blending ska, punk, and reggae, a staple of the 90s rock en español scene.',
        aliases: [],
      },

      'Victimas del Doctor Cerebro': {
        bio: 'Mexican punk-rock band since the 80s, noted for raw energy and underground cult following.',
        aliases: [],
      },

      'Los Concorde': {
        bio: 'Spanish indie-rock act from the 2000s, praised for poetic lyrics and melodic post-punk influence.',
        aliases: [],
      },

      'Vetusta Morla': {
        bio: 'Spanish indie-rock band with anthemic, poetic sound, often compared to Radiohead, central to 2000s scene.',
        aliases: [],
      },

      'Love of Lesbian': {
        bio: 'Spanish indie-rock group known for conceptual albums, poetic Spanish lyrics, and energetic live shows.',
        aliases: [],
      },

      'Dorian': {
        bio: 'Spanish electronic-influenced rock band blending new wave and indie, popular since the 2000s.',
        aliases: [],
      },

      'Nacha Pop': {
        bio: 'Spanish new wave rock band from Madrid, essential to 80s rock en español with hits like \'Lucha de gigantes\'.',
        aliases: [],
      },

      'Los Secretos': {
        bio: 'Spanish pop-rock band from the 80s, part of the Movida Madrileña, with enduring melodic legacy.',
        aliases: [],
      },

      'Hombres G': {
        bio: 'Spanish pop-rock band, iconic 80s sound with youthful anthems, influential across Latin America.',
        aliases: [],
      },

      'Los Pericos': {
        bio: 'Argentine reggae-rock band active since the 80s, blending Caribbean rhythms with rock en español.',
        aliases: [],
      },

      'La Barranca': {
        bio: 'Mexican rock band blending progressive, folk, and Latin influences, active since the mid-90s, a key figure in the genre.',
        aliases: [],
      },

      'Austin TV': {
        bio: 'Instrumental Mexican rock band from the 2000s, known for their cinematic, post-rock-influenced sound and masked personas.',
        aliases: [],
      },

      'Bengala': {
        bio: 'Mexican rock band formed in 2003, gaining recognition for their anthemic, alternative rock style with Spanish lyrics.',
        aliases: [],
      },

      'Los Claxons': {
        bio: 'Mexican rock/pop band active since the mid-2000s, known for their catchy melodies and energetic performances.',
        aliases: [],
      },

      'Los Dynamite': {
        bio: 'Mexican garage rock band from the 2000s, delivering raw, energetic rock en español with a retro twist.',
        aliases: [],
      },

      'Tolidos': {
        bio: 'Mexican rock band known for their emotional lyrics and melodic rock sound, part of the 2000s scene.',
        aliases: [],
      },

      'Volován': {
        bio: 'Mexican pop-rock band from the early 2000s, associated with the Nuevo Rock Mexicano movement, known for catchy hooks.',
        aliases: [],
      },

      'Zurdok': {
        bio: 'Mexican rock band active in the late 90s and early 2000s, a leading act in the alternative rock scene before splitting.',
        aliases: [],
      },

      'Los Odio': {
        bio: 'Mexican punk-rock band from the late 80s, part of the early rock en español underground, known for aggressive and critical lyrics.',
        aliases: [],
      },

      'Café Quijano': {
        bio: 'Spanish rock and pop band from León, known for their energetic live shows and Latin-infused rock sound.',
        aliases: [],
      },

      'El Canto del Loco': {
        bio: 'Spanish pop-rock group formed by Dani Martín, prominent in the 2000s with anthemic, radio-friendly hits.',
        aliases: [],
      },

      'Pereza': {
        bio: 'Spanish rock duo from Madrid, combining punk energy with pop melodies, active in the 2000s and 2010s.',
        aliases: [],
      },

      'Mägo de Oz': {
        bio: 'Spanish folk-metal band blending Celtic rock and heavy metal, with a loyal following across Spain and Latin America.',
        aliases: [],
      },

      'Los Rodríguez (alternative)': {
        bio: 'Duplicate',
        aliases: [],
      },

      'Mecano': {
        bio: 'Spanish synth-pop and rock band, fundamental to the Spanish pop-rock scene in the 80s and 90s.',
        aliases: [],
      },

      'Vilma Palma e Vampiros': {
        bio: 'Argentine rock band from Rosario, known for their 90s hits and enduring popularity in Latin America.',
        aliases: [],
      },

      'Los Tipos de Enfrente': {
        bio: 'Duplicate',
        aliases: [],
      },

      'Nonpalidece': {
        bio: 'Argentine reggae-rock band, central to the Spanish-speaking reggae scene desde los 90s.',
        aliases: [],
      },

      'Los Cafres': {
        bio: 'Argentine reggae band, influential in Latin American reggae-rock, with Spanish-language anthems.',
        aliases: [],
      },

      'Los Piojos': {
        bio: 'Argentine rock band blending local rhythms with electric guitar, central to the late-90s/2000s River Plate rock scene.',
        aliases: [],
      },

      'Almendra': {
        bio: 'Pioneering Argentine psychedelic/folk rock band led by Luis Alberto Spinetta, foundational to 70s rock en español.',
        aliases: [],
      },

      'Los Abuelos de la Nada': {
        bio: 'Influential Argentine new wave/rock group, revitalising the local scene in the 1980s with hits like \'Mil Horas\'.',
        aliases: ['Los Abuelos De La Nada'],
      },

      'Invisible': {
        bio: 'Argentine progressive rock supergroup formed by Spinetta in the mid-70s, acclaimed for its poetic, experimental sound.',
        aliases: [],
      },

      'Pescado Rabioso': {
        bio: 'Short-lived but highly influential Spinetta-led Argentine blues-rock band, a cornerstone of early 70s rock nacional.',
        aliases: [],
      },

      'Los Fundamentalistas del Aire Acondicionado': {
        bio: 'Backing band for Indio Solari, they also stand alone as a live rock phenomenon performing his vast repertoire.',
        aliases: [],
      },

      'V8': {
        bio: 'Argentine heavy metal pioneers, often dubbed the \'fathers of Spanish-language metal\', hugely influential on 80s metal en español.',
        aliases: [],
      },

      'La Máquina de Hacer Pájaros': {
        bio: 'Charly García-era Argentine progressive rock band, essential to the evolution of 70s intellectual rock en español.',
        aliases: ['La Maquina De Hacer Pajaros'],
      },

      'Duncan Dhu': {
        bio: 'Spanish rock band from the 1980s, blending new wave and folk-rock, foundational to the Spanish rock scene.',
        aliases: ['Duncan Dhu'],
      },

      'Los Zigarros': {
        bio: 'Spanish rock band reviving classic 70s-style rock with raw energy, gaining prominence in the 2010s.',
        aliases: ['Los Zigarros'],
      },

      'Revólver': {
        bio: 'Spanish rock band led by Carlos Goñi, known for anthemic and passionate rock songs since the early 1990s.',
        aliases: ['Revolver'],
      },

      'Amaral': {
        bio: 'Spanish rock duo from Zaragoza, combining acoustic and electric rock with poetic lyrics, active since the late 1990s.',
        aliases: ['Amaral'],
      },

      'Delincuentes': {
        bio: 'Spanish rock band blending flamenco, rock, and rumba, known for festive and rebellious energy since the 1990s.',
        aliases: ['Delincuentes'],
      },

      'Los Bengala': {
        bio: 'Mexican rock band known for garage-rock influenced sound, active in the 2000s and 2010s.',
        aliases: ['Bengala'],
      },

      'Izal': {
        bio: 'Spanish indie-rock band from Madrid, blending electronic and acoustic elements, prominent in the 2010s.',
        aliases: ['Izal'],
      },

      'Los Twist': {
        bio: 'Argentine new wave/rock band blending humor, rockabilly, and pop, pivotal in the 80s Buenos Aires scene.',
        aliases: [],
      },

      'GIT': {
        bio: 'Argentine rock band of the mid-80s, known for melodic, radio-friendly hits that defined the era\'s new wave.',
        aliases: ['G.I.T.'],
      },

      'Miguel Mateos': {
        bio: 'Argentine rocker whose 80s anthems and glam-rock stage presence made him a continental star.',
        aliases: ['Miguel Mateos/ZAS'],
      },

      'La Portuaria': {
        bio: 'Argentine band blending rock, funk, and world music, a key experimental act in 90s Buenos Aires.',
        aliases: [],
      },

      'Los Daniels': {
        bio: 'Mexican rock band with garage and Brit-pop influences, active since the early 2000s.',
        aliases: [],
      },

      'Hoppo!': {
        bio: 'Mexican indie-rock band from the 2000s, marked by energetic riffs and youthful, rebellious lyrics.',
        aliases: [],
      },

      'Chikita Violenta': {
        bio: 'Mexican indie-rock group known for garage-psych energy and international tours since the mid-2000s.',
        aliases: [],
      },

      'Los Fascinantes': {
        bio: 'Spanish garage-rock revivalists with raw, punk-edged energy, carrying the 80s spirit into the 2010s.',
        aliases: [],
      },

      'Mago de Oz': {
        bio: 'Spanish folk-metal band with Celtic and hard rock influences, known for epic, theatrical albums and live energy.',
        aliases: ['Mägo de Oz'],
      },

      'El Columpio Asesino': {
        bio: 'Spanish rock band blending punk, electronic, and folk textures, pivotal in the 2000s Spanish indie scene.',
        aliases: [],
      },

      'Viveza': {
        bio: 'Chilean rock band fusing Latin rhythms and rock energy, part of the vibrant post-dictatorship scene.',
        aliases: [],
      },

      'Gobierno': {
        bio: 'Spanish punk-rock band from the late 80s, raw and political, cornerstone of the Madrid underground movement.',
        aliases: [],
      },

      'La Fuga': {
        bio: 'Spanish hard-rock band known for passionate guitar work and rebellious verse, prominent from late 90s onward.',
        aliases: [],
      },

      'San Pascualito Rey': {
        bio: 'Mexican rock band blending blues, country, and alternative textures, championing melancholic poetic lyrics since 2000s.',
        aliases: [],
      },

      'Los Mesoneros': {
        bio: 'Venezuelan rock band blending indie, pop, and Latin rhythms, active since 2010 with a modern rock en Español sound.',
        aliases: [],
      },

      'Little Jesus': {
        bio: 'Mexican indie rock band known for energetic live shows and introspective lyrics, a key act in the 2010s Latin alternative scene.',
        aliases: ['little jesus'],
      },

      'El Shirota': {
        bio: 'Mexico City punk and post-hardcore group, part of the DIY underground, bringing raw energy and political edge to rock en Español.',
        aliases: [],
      },

      'Los Espíritus': {
        bio: 'Argentine rock band with roots in blues, folk, and psychedelia, carrying a classic yet contemporary Latin American rock spirit.',
        aliases: ['los espiritus'],
      },

      'La Franela': {
        bio: 'Argentine rock group blending pop, reggae, and cumbia influences, known for anthemic sing-alongs and social themes.',
        aliases: [],
      },

      'Salón Victoria': {
        bio: 'Mexican rock en Español band with a raw, garage-punk energy, a staple of the 1990s underground scene in Mexico City.',
        aliases: ['salon victoria'],
      },

      'Los Gardelitos': {
        bio: 'Argentine rock band channeling streetwise punk and classic rock, deeply rooted in Buenos Aires\'s working-class rock tradition.',
        aliases: [],
      },

      'Los Romanticos de Zacatecas': {
        bio: 'Mexican indie rock band known for lo-fi recordings and energetic, heartfelt performances in the DIY punk aesthetic.',
        aliases: [],
      },

      'Los Mágicos': {
        bio: 'Spanish garage rock band reviving 60s beat and proto-punk energy with a modern twist, part of the 2010s revival.',
        aliases: ['los magicos'],
      },

      'El Personal': {
        bio: 'Argentine rock band from the 1980s, notable for melodic pop-rock sound and enduring presence in the local scene.',
        aliases: [],
      },

      'Ritmo Peligroso': {
        bio: 'Mexican rock en español band active since the late 1980s, fusing punk, ska, and Latin rhythms with energetic, anthemic songs.',
        aliases: [],
      },

      'La Dosis': {
        bio: 'Mexican alternative rock band from the 1990s, known for introspective lyrics and a moody, melodic style that fit the era\'s rock en español wave.',
        aliases: [],
      },

      'Los Rebeldes': {
        bio: 'Spanish rock and roll band from the 80s, blending 1950s style with punk energy and anthemic Spanish lyrics.',
        aliases: [],
      },
    },
  },
};
