import type { Pillar } from '../types.js';
import {
  normalizeArtistKey,
  tokenizeArtistCredit,
  FEAT_CLAUSE,
  YEAR_PREFIX,
} from '../artistNormalize.js';

export const studioPerfection: Pillar = {
  name: 'Studio Perfection',
  subCategories: {
    'Curated Override': {
      'Steely Dan': {
        bio: 'The absolute pinnacle of studio obsession; Fagen and Becker spent years and millions of dollars assembling elite LA session musicians to achieve flawless, impossibly dry, jazz-rock perfection.',
        aliases: ['Steeley Dan', 'Stealy Dan', 'steelydan'],
      },

      'Fleetwood Mac': {
        bio: '\'Rumours\' and \'Tango in the Night\' are monuments of 70s and 80s studio craft—obsessively overdubbed, acoustically pristine, and universally cited as reference material for hi-fi testing.',
        aliases: ['Fleetwood Mac.', 'Fleetwood', 'fleetwoodmac'],
      },

      'Dire Straits': {
        bio: 'Mark Knopfler\'s guitar tone on \'Brothers in Arms\' was one of the first and most stunning achievements of fully digital (DDD) recording, becoming the flagship album for the CD format.',
        aliases: ['Dire Straights', 'DireStraits'],
      },

      'Daft Punk': {
        bio: '\'Random Access Memories\' is a modern analog-digital hybrid masterpiece, recorded in the world\'s finest studios with legendary session players to achieve an impossibly warm, dynamic sound.',
        aliases: ['Daftpunk', 'Daft-Punk'],
      },

      'Pink Floyd': {
        bio: '\'The Dark Side of the Moon\' remains the ultimate headphone album—Alan Parsons\' engineering pushed the limits of the Abbey Road mixing desk to create a staggering, three-dimensional sonic landscape.',
        aliases: ['Pinkfloyd', 'Pink Floyed', 'pink floyd.'],
      },

      'Michael Jackson': {
        bio: 'Quincy Jones and Bruce Swedien\'s engineering on \'Thriller\' and \'Bad\' established the modern standard for punchy, dynamic, endlessly layered pop production.',
        aliases: ['Michael Jakson', 'Michael Jacson', 'MJ', 'M. Jackson', 'M.Jackson', 'Micheal Jackson'],
      },

      'Supertramp': {
        bio: '\'Crime of the Century\' and \'Breakfast in America\' are masterclasses in art-rock panning, dynamic range, and crystalline piano-and-vocal recording.',
        aliases: ['Supertramp.', 'Super Tramp', 'Roger Hodgson', 'Roger Hodgson.'],
      },

      'The Alan Parsons Project': {
        bio: 'The Abbey Road engineer behind \'Dark Side of the Moon\' created his own project specifically to test the limits of studio layering, orchestral arrangements, and synthesizer technology.',
        aliases: ['Alan Parsons Project', 'Alan Parsons', 'The Alan Parsons Project.', 'APP', 'A.P.P.'],
      },

      'Queen': {
        bio: 'Roy Thomas Baker\'s production on \'A Night at the Opera\' famously pushed 24-track tape machines to their absolute physical limits to achieve the massive choir effects on \'Bohemian Rhapsody.\'',
        aliases: ['Queen (Band)', 'Queen.', 'Freddie Mercury', 'Freddy Mercury', 'Freddie Mercury.', 'Brian May', 'Brian May.'],
      },

      'Donald Fagen': {
        bio: '\'The Nightfly\' is arguably the most famous audiophile reference disc ever recorded—an early digital recording so immaculate it has been used to tune PA systems and studio monitors for 40 years.',
        aliases: ['Donald Fagan', 'donald fagin', 'donaldfagen', 'D. Fagen', 'd.fagen', 'fagen'],
      },

      'Toto': {
        bio: 'Composed of the elite LA session musicians who played on Steely Dan and Michael Jackson records, their \'Toto IV\' album is a showcase of flawless technical musicianship and mixing.',
        aliases: ['toto.', 'toto iv', 'toto band', 't.o.t.o'],
      },

      'Roxy Music': {
        bio: '\'Avalon\' is the defining atmospheric recording of the 1980s—a masterclass in lush, sophisticated spatial imaging and reverb that remains a definitive hi-fi demonstration disc.',
        aliases: ['roxymusic', 'roxy musick', 'roxy-music', 'roxy musique', 'roxie music', 'roxy', 'Bryan Ferry & Roxy Music', 'Brian Ferry', 'bryan ferry'],
      },

      'Peter Gabriel': {
        bio: '\'So\' and \'Us\' pioneered massive, cinematic production techniques, blending Fairlight sampling, world music instrumentation, and huge dynamic range into perfect art-pop.',
        aliases: ['petergabriel', 'peter grabriel', 'peter gabrile', 'peter gabirel', 'P. Gabriel', 'p.gabriel', 'gabriel'],
      },

      'Sade': {
        bio: '\'Diamond Life\' and \'Love Deluxe\' are perennial audiophile references—combining jazz restraint, pop accessibility, and a bass-heavy, crystalline mix that shines on high-end systems.',
        aliases: ['Sade Adu', 'sade.', 'shaday', 'sha-de', 'saade', 'sade\''],
      },

      '10cc': {
        bio: '\'I\'m Not in Love\' is a legend of studio perseverance, featuring a backing track composed of hundreds of layered tape loops of a single sung note, predating samplers by years.',
        aliases: ['10 cc', '10-cc', 'ten cc', 'tencc', '10c.c.', '10 c.c.'],
      },

      'Kraftwerk': {
        bio: 'The Düsseldorf engineers who turned the studio into an instrument; \'The Man-Machine\' and \'Computer World\' set the benchmark for pristine, synthesized stereo imaging.',
        aliases: ['kraft werk', 'kraft-werk', 'kraftwerk.', 'krafwerk', 'craftwerk', 'kraftwork', 'kraftwerk band'],
      },

      'Quincy Jones': {
        bio: 'The ultimate pop architect; his arrangements on \'Off the Wall\' and \'Thriller\' utilized innovative miking techniques to achieve unmatched rhythmic punch and clarity.',
        aliases: ['quincyjones', 'quincy-jones', 'quincy jones.', 'Q. Jones', 'q.jones', 'q jones', 'quincy', 'quincey jones'],
      },

      'Boz Scaggs': {
        bio: '\'Silk Degrees\' is the epitome of West Coast studio slickness, featuring the musicians who would later form Toto backing flawlessly smooth, soul-inflected yacht rock.',
        aliases: ['boz scags', 'boz skaggs', 'bozscaggs', 'B. Scaggs', 'boz'],
      },

      'Tears for Fears': {
        bio: '\'Songs from the Big Chair\' and \'The Seeds of Love\' utilized massive, stadium-sized synthesizer production and meticulous mixing that practically demands high-fidelity playback.',
        aliases: ['tearsfor fears', 'tears for fear', 'tearsforfears', 'tears-for-fears', 'tff'],
      },

      'Kate Bush': {
        bio: '\'Hounds of Love\' was constructed largely on the Fairlight CMI in her own studio, representing a level of obsessive, independent spatial sound-design that was lightyears ahead of its time.',
        aliases: ['katebush', 'kate bush.', 'K. Bush', 'k bush', 'k.bush', 'katharine bush', 'kate bushe'],
      },

      'Joni Mitchell': {
        bio: '\'Hejira\' and \'Court and Spark\' are audiophile touchstones, capturing the interplay of her alternate guitar tunings and Jaco Pastorius\'s bass with breathtaking tonal accuracy.',
        aliases: ['joni mitchel', 'joni mitchelle', 'jonimitchell', 'J. Mitchell', 'j.mitchell', 'j mitchell', 'joanie mitchell', 'joni'],
      },

      'Talk Talk': {
        bio: '\'Spirit of Eden\' and \'Laughing Stock\' are among the most dynamic analogue recordings ever made, utilizing silence and room acoustics as deeply as the instruments themselves.',
        aliases: ['Talk-Talk', 'TalkTalk', 'talk talk.', 'talkk talk', 'Mark Hollis', 'Mark Hollis.'],
      },

      'Beck': {
        bio: '\'Sea Change\', produced by Nigel Godrich, is a modern audiophile legend—a stunningly lush, acoustic-and-orchestral heartbreak album that sounds incredible in 24-bit high resolution.',
        aliases: ['Beck Hansen', 'Beck.', 'Beck (Artist)'],
      },

      'Rage Against the Machine': {
        bio: 'Their self-titled debut was recorded almost entirely live in the studio, resulting in an aggressive, uncompressed masterpiece that remains a top-tier reference for rock drum and bass tones.',
        aliases: ['RATM', 'R.A.T.M.', 'Rage Against the Machine.'],
      },

      'Prefab Sprout': {
        bio: '\'Steve McQueen\' (produced by Thomas Dolby) is an obsessive, layered pop masterpiece of the 1980s that rewards high-end systems with its meticulous jazz-pop chord voicings.',
        aliases: ['prefabsprout', 'prefab-sprout', 'pre fab sprout', 'prefab sprout.', 'P. Sprout'],
      },

      'The Blue Nile': {
        bio: '\'Hats\' is one of the most celebrated audiophile reference albums ever made; Paul Buchanan\'s obsessive multi-year production yielded pristine, spacious mixes that define hi-fi perfection.',
        aliases: ['blue nile', 'the blue nile.', 'bluenile', 'the bluenile', 'blue-nile', 'the blue nile band', 't.b.n.'],
      },

      'Japan': {
        bio: '\'Tin Drum\' and \'Gentlemen Take Polaroids\' showcase immaculate art-pop production with Steve Nye\'s engineering, making them perennial audiophile demonstration discs.',
        aliases: ['japan (band)', 'japan.', 'japan band', 'japan uk', 'japan-band'],
      },

      'David Sylvian': {
        bio: '\'Secrets of the Beehive\' and \'Brilliant Trees\' represent some of the most exquisitely produced art-pop ever recorded, extending the studio perfectionism of Japan into breathtaking solo territory.',
        aliases: ['davidsylvian', 'david sylvian.', 'd. sylvian', 'd.sylvian', 'david silvian', 'david sylvan', 'sylvian'],
      },

      'Depeche Mode': {
        bio: '\'Violator\', produced by Flood and mixed by François Kevorkian, is a landmark of pristine electronic-rock production and a staple of hi-fi system demonstrations worldwide.',
        aliases: ['depechemode', 'depeche-mode', 'depeche mode.', 'd.m.', 'dm', 'depech mode', 'depeche mod', 'depeshe mode', 'depechemode.'],
      },

      'Radiohead': {
        bio: '\'OK Computer\' and \'Kid A\' represent peak studio obsession under Nigel Godrich\'s meticulous production, yielding endlessly revealing layers of detail that reward high-fidelity playback.',
        aliases: ['radiohead.', 'radio head', 'radio-head', 'radiohed', 'radiohread', 'r.h.', 'rh'],
      },

      'Todd Rundgren': {
        bio: 'A self-taught studio polymath who built and operated his own facilities, \'Something/Anything?\' and \'A Wizard, A True Star\' are testaments to one-man production genius on par with Steely Dan\'s perfectionism.',
        aliases: ['toddrundgren', 'todd rundgren.', 't. rundgren', 't.rundgren', 'tod rundgren', 'todd rundgen', 'rundgren', 'todd rundgren/utopia', 'utopia'],
      },

      'XTC': {
        bio: '\'Skylarking\', produced by Todd Rundgren, and \'English Settlement\' showcase painstaking arrangement craft and layered production that reveals new detail on every hi-fi listen.',
        aliases: ['xtc.', 'x.t.c.', 'x t c', 'xtc band', 'the dukes of stratosphear', 'dukes of stratosphear', 'andy partridge', 'andy partridge.'],
      },

      'Thomas Dolby': {
        bio: 'A synth-pop polymath and studio innovator who produced Prefab Sprout\'s masterpieces; his own \'The Golden Age of Wireless\' and \'The Flat Earth\' are exemplars of meticulous electronic-acoustic production.',
        aliases: ['thomasdolby', 'thomas dolby.', 't. dolby', 't.dolby', 'tomas dolby', 'thomas dolby robertson', 'dolby'],
      },

      'Massive Attack': {
        bio: '\'Mezzanine\' is one of the most universally cited audiophile test records of the past 30 years, with cavernous sub-bass, holographic imaging, and Neil Davidge\'s obsessive production layers.',
        aliases: ['massiveattack', 'massive-attack', 'massive attack.', 'massive atack', 'massive attck', 'm.a.', 'massiv attack'],
      },

      'Scritti Politti': {
        bio: '\'Cupid & Psyche 85\', produced by Arif Mardin with New York\'s elite session players, is a cult masterpiece of synthetic-organic studio perfection directly in the Steely Dan lineage of obsessive polish.',
        aliases: ['scrittipolitti', 'scritti politti.', 'scritti-politti', 'scriti politi', 'scritti polliti', 'scritti politi', 'green gartside', 'green gartside.'],
      },

      'Ryuichi Sakamoto': {
        bio: 'From Yellow Magic Orchestra\'s electronic precision to solo works like \'async,\' Sakamoto\'s decades of meticulous studio craft and genre-defying production make his catalog essential audiophile listening.',
        aliases: ['ryuichisakamoto', 'ryuichi sakamoto.', 'r. sakamoto', 'r.sakamoto', 'sakamoto', 'ryuichi sakomoto', 'ryuichu sakamoto', 'ryuchi sakamoto', 'sakamoto ryuichi', '坂本龍一'],
      },

      'Cocteau Twins': {
        bio: 'Robin Guthrie\'s shimmering, multi-layered guitar production on \'Heaven or Las Vegas\' and \'Treasure\' created revered reference-grade dream-pop that rewards the finest playback systems.',
        aliases: ['cocteautwins', 'cocteau twins.', 'cocteau-twins', 'cocteu twins', 'cockteau twins', 'cocteau twin', 'coteau twins', 'c.t.', 'the cocteau twins'],
      },

      'Brian Eno': {
        bio: 'The architect of studio-as-instrument philosophy who produced or influenced half this list, from ambient masterworks to landmark records for Bowie, Talking Heads, and U2.',
        aliases: ['brianeno', 'brian eno.', 'b. eno', 'b.eno', 'eno', 'brianeno.', 'brian eno (musician)', 'brian peter george st john le baptiste de la salle eno', 'biran eno', 'brain eno', 'bryan eno'],
      },

      'Yellow Magic Orchestra': {
        bio: 'Sakamoto\'s synth trio with Hosono and Takahashi delivered some of the most sonically pristine and forward-thinking electronic production of the late \'70s and early \'80s.',
        aliases: ['ymo', 'y.m.o.', 'y.m.o', 'yellowmagicorchestra', 'yellow magic orchestra.', 'yellow-magic-orchestra', 'yellow magic orch', 'yello magic orchestra', 'イエロー・マジック・オーケストラ'],
      },

      'Art of Noise': {
        bio: 'Trevor Horn and J.J. Jeczalik\'s ZTT laboratory pushed Fairlight sampling and studio manipulation to audiophile extremes that remain pop production benchmarks.',
        aliases: ['the art of noise', 'artofnoise', 'art-of-noise', 'art of noise.', 'the art of noise.', 'a.o.n.', 'aon', 'art of noize', 'art of noyse'],
      },

      'Portishead': {
        bio: 'Their obsessive analogue-digital hybrid production on \'Dummy\' and \'Third\' stands alongside Massive Attack as the pinnacle of trip-hop studio craft and audiophile test-disc material.',
        aliases: ['portishead.', 'portis head', 'portishead (band)', 'ports head', 'portished', 'portishaed', 'p.head', 'portishead band'],
      },

      'Dead Can Dance': {
        bio: 'Their 4AD catalogue — lush, reverb-sculpted, and genre-defying — is a perennial audiophile reference, combining world music ambition with meticulous studio layering.',
        aliases: ['deadcandance', 'dead-can-dance', 'dead can dance.', 'dcd', 'd.c.d.', 'dead can dans', 'dead can danc', 'dead can dance band', 'lisa gerrard & brendan perry'],
      },

      'This Mortal Coil': {
        bio: 'Ivo Watts-Russell\'s 4AD supergroup project produced \'It\'ll End in Tears\' and \'Filigree & Shadow,\' legendary audiophile pressings celebrated for their crystalline depth and atmosphere.',
        aliases: ['thismortalcoil', 'this-mortal-coil', 'this mortal coil.', 'tmc', 't.m.c.', 'this mortal coil 4ad', 'this mortl coil', 'this mortal coil band'],
      },

      'ABC': {
        bio: 'Trevor Horn\'s production on \'The Lexicon of Love\' is a masterclass in sophisti-pop maximalism — lush orchestration, razor-sharp mixing, and impeccable sonic detail.',
        aliases: ['abc band', 'abc.', 'a.b.c.', 'a.b.c', 'abc (band)', 'abc uk', 'martin fry', 'martin fry.', 'martin fry abc'],
      },

      'Propaganda': {
        bio: '\'A Secret Wish\' is one of the most extravagantly produced albums of the 1980s, a ZTT/Trevor Horn cathedral of Fairlight orchestration and German art-pop perfectionism.',
        aliases: ['propaganda.', 'propaganda band', 'propaganda (band)', 'propaganda ztt', 'propaganda uk', 'propoganda', 'propagana', 'propagnda', 'claudia brücken', 'claudia brucken'],
      },

      'Scott Walker': {
        bio: 'From the orchestral grandeur of \'Scott 4\' to the avant-garde studio extremes of \'The Drift\', Walker pursued uncompromising sonic perfectionism across five decades.',
        aliases: ['scottwalker', 'scott walker.', 's. walker', 's.walker', 'scot walker', 'scott wlaker', 'scott walker (singer)', 'noel scott engel', 'scott walker & the walker brothers', 'the walker brothers', 'walker brothers'],
      },

      'Vangelis': {
        bio: 'His meticulous layering of analogue synthesizers on \'Blade Runner\' and \'Chariots of Fire\' set a gold standard for electronic-orchestral production fidelity.',
        aliases: ['vangelis.', 'vangalis', 'vangelis papathanassiou', 'evangelos odysseas papathanassiou', 'vangelos', 'vangellis', 'vagnelis', 'jon & vangelis', 'jon and vangelis'],
      },

      'Harold Budd': {
        bio: 'His ambient piano works and collaborations with Eno and the Cocteau Twins are paragons of space, reverb, and minimalist audiophile beauty engineered to breathtaking standards.',
        aliases: ['haroldbudd', 'harold budd.', 'h. budd', 'h.budd', 'harold bud', 'harrold budd', 'harold budd & cocteau twins', 'harold budd/cocteau twins', 'budd'],
      },

      'Associates': {
        bio: 'Billy Mackenzie\'s extraordinary vocal range set against Alan Rankine\'s lavish, avant-garde pop production on \'Sulk\' represents a cult pinnacle of studio ambition.',
        aliases: ['the associates', 'associates.', 'associates band', 'associates (band)', 'the associates.', 'asociates', 'assosciates', 'billy mackenzie', 'billy mckenzie', 'billy mackenzie.', 'billy mackenzie & associates'],
      },

      'David Bowie': {
        bio: 'From the Visconti/Eno Berlin trilogy to \'Scary Monsters\', Bowie\'s obsessive reinvention was matched only by his meticulous studio craft, producing reference-grade recordings.',
        aliases: ['davidbowie', 'david bowie.', 'd. bowie', 'd.bowie', 'david bowey', 'david bowei', 'davie bowie', 'bowie', 'david bowie (musician)', 'david robert jones', 'ziggy stardust'],
      },

      'Air': {
        bio: '\'Moon Safari\' and \'Talkie Walkie\' are hi-fi touchstones of immaculate French electronic production, sitting naturally alongside Daft Punk and Kraftwerk in any curated listening library.',
        aliases: ['air.', 'air (band)', 'air french band', 'air (french)', 'air-france', 'a.i.r.', 'aïr', 'air band', 'air french', 'jean-benoit dunckel', 'nicolas godin'],
      },

      'Björk': {
        bio: '\'Homogenic\' and \'Vespertine\' represent some of the most spatially complex and painstakingly produced recordings of the modern era, blending avant-garde electronics with orchestral grandeur.',
        aliases: ['bjork', 'björk.', 'bjork.', 'bjork gudmundsdottir', 'björk guðmundsdóttir', 'bjork gudmundsdottir.', 'biork', 'bjork (artist)', 'b.jork', 'bjørk', 'bjrk'],
      },

      'Grace Jones': {
        bio: '\'Nightclubbing\' and \'Slave to the Rhythm\'—produced at Compass Point and by Trevor Horn respectively—are monuments of dub-inflected studio perfection and production-as-art philosophy.',
        aliases: ['gracejones', 'grace jones.', 'g. jones', 'g.jones', 'grace jone', 'grace jones (artist)', 'grace johns', 'grace jones band'],
      },

      'Frankie Goes to Hollywood': {
        bio: 'As ZTT Records\' flagship act, their Trevor Horn–produced albums are maximalist studio spectacles and definitive examples of the producer-as-auteur approach.',
        aliases: ['fgth', 'f.g.t.h.', 'frankie goes to hollywood.', 'frankiegoestohollywood', 'frankie-goes-to-hollywood', 'frankie goes to holywood', 'frankie goes to hollywood band', 'frankie goes hollywood', 'frankie gth', 'frankie'],
      },

      'Ultravox': {
        bio: '\'Vienna\' and the Conny Plank–produced early records represent a pinnacle of synth-orchestral production that bridges Kraftwerk\'s precision with Roxy Music\'s art-pop glamour.',
        aliases: ['ultravox.', 'ultravox!', 'ultra vox', 'ultravox band', 'ultravox (band)', 'ultra-vox', 'ultravaux', 'ultravox uk', 'midge ure', 'midge ure.', 'midge ure & ultravox'],
      },

      'Heaven 17': {
        bio: '\'The Luxury Gap\' is a masterclass in sophisti-pop production architecture from Martyn Ware\'s British Electric Foundation stable, a natural companion to ABC and Scritti Politti.',
        aliases: ['heaven17', 'heaven 17.', 'heaven-17', 'heaven seventeen', 'heavenseventeen', 'h17', 'h.17', 'heaven 17 band', 'heaven17.', 'heaven 7teen', 'martyn ware', 'british electric foundation', 'bef', 'b.e.f.'],
      },

      'Sparks': {
        bio: 'Across five decades, the Mael brothers have obsessively refined an art-pop vision with studio-perfectionist rigor, working with producers like Moroder and Visconti.',
        aliases: ['sparks.', 'sparks band', 'sparks (band)', 'sparks uk', 'sparks-band', 'sparx', 'the sparks', 'ron & russell mael', 'mael brothers', 'ron mael', 'russell mael'],
      },

      'Can': {
        bio: '\'Tago Mago\' and \'Future Days\' pioneered tape-splicing studio techniques and Inner Space production methods that directly influenced Eno, Talk Talk, and Radiohead.',
        aliases: ['can.', 'can band', 'can (band)', 'can-band', 'can german band', 'can krautrock', 'holger czukay', 'holger czukay.', 'irmin schmidt', 'damo suzuki', 'jaki liebezeit'],
      },

      'Laurie Anderson': {
        bio: '\'Big Science\' and \'Mister Heartbreak\' merge avant-garde electronics, voice processing, and meticulous spatial production into art-pop landmarks.',
        aliases: ['laurieanderson', 'laurie anderson.', 'l. anderson', 'l.anderson', 'laurie andersen', 'lauri anderson', 'laurie anderson (artist)', 'laurie anderson (musician)'],
      },

      'Everything But the Girl': {
        bio: 'From the audiophile acoustic intimacy of \'Amplified Heart\' to the pristine electronic textures of \'Walking Wounded,\' their production evolution mirrors this entire collection\'s arc.',
        aliases: ['ebtg', 'e.b.t.g.', 'everything but the girl.', 'everythingbutthegirl', 'everything-but-the-girl', 'everything but the grl', 'everything but girl', 'everthing but the girl', 'tracey thorn', 'tracey thorn.', 'ben watt', 'ben watt.'],
      },

      'Robert Wyatt': {
        bio: '\'Rock Bottom\' is a cult audiophile masterpiece of layered, deeply humanistic art-rock production, sitting comfortably alongside This Mortal Coil\'s fragile grandeur.',
        aliases: ['robertwyatt', 'robert wyatt.', 'r. wyatt', 'r.wyatt', 'robert wyat', 'robbert wyatt', 'robert wyatt (musician)', 'wyatt', 'robert whyatt'],
      },

      'John Foxx': {
        bio: 'His solo debut \'Metamatic\' codified cold electronic pop, and his post-Ultravox trajectory is a masterclass in synthesizer minimalism and studio control.',
        aliases: ['johnfoxx', 'john foxx.', 'j. foxx', 'j.foxx', 'john fox', 'john foxx (musician)', 'dennis leigh', 'john foxx & the maths', 'john foxx and the maths'],
      },

      'Neu!': {
        bio: 'The motorik blueprint that Bowie, Eno, and virtually every electronic artist drew from directly — \'Neu! 75\' alone justifies permanent residency in a studio-obsessed collection.',
        aliases: ['neu', 'neu !', 'neu!.', 'neu! band', 'neu! (band)', 'neu!!', 'neu band', 'neü', 'michael rother & klaus dinger', 'michael rother', 'klaus dinger'],
      },

      'Tangerine Dream': {
        bio: 'Berlin-school electronic pioneers whose sequencer-driven albums defined an entire axis of studio-as-instrument thinking that runs through this whole collection.',
        aliases: ['tangerinedream', 'tangerine dream.', 'tangerine-dream', 't. dream', 't.dream', 'td', 't.d.', 'tangerin dream', 'tangerine dreem', 'tangerine dream band', 'edgar froese'],
      },

      'Cluster': {
        bio: 'Their collaborations with Eno and their own proto-ambient recordings are the quiet center of German electronic music — indispensable next to Kraftwerk and Can.',
        aliases: ['cluster.', 'cluster band', 'cluster (band)', 'kluster', 'cluster & eno', 'cluster/eno', 'moebius & roedelius', 'dieter moebius', 'hans-joachim roedelius', 'roedelius'],
      },

      'Jon Hassell': {
        bio: 'The inventor of \'Fourth World\' music whose trumpet-processing experiments alongside Eno directly seeded the sonic vocabularies of Talk Talk, Björk, and Radiohead.',
        aliases: ['jonhassell', 'jon hassell.', 'j. hassell', 'j.hassell', 'jon hassel', 'jon hassell (musician)', 'jon hassle', 'hassell'],
      },

      'Magazine': {
        bio: 'Howard Devoto\'s post-Buzzcocks vehicle produced \'The Correct Use of Soap\' — one of the most immaculate and underappreciated production jobs in post-punk.',
        aliases: ['magazine.', 'magazine band', 'magazine (band)', 'magazine uk', 'magazine-band', 'magaziine', 'howard devoto', 'howard devoto.', 'howard devoto & magazine'],
      },

      'Wire': {
        bio: 'From punk detonation to the crystalline studio art of \'154\' and \'Chairs Missing\' in under two years — a compression of artistic evolution that mirrors the entire arc of this shelf.',
        aliases: ['wire.', 'wire band', 'wire (band)', 'wire uk', 'wire-band', 'wir', 'wiire', 'colin newman', 'colin newman.'],
      },

      'Simple Minds': {
        bio: 'Before the stadium years, \'Real to Real Cacophony\' and \'Empires and Dance\' were icy European art-funk indebted to Kraftwerk and Bowie\'s Berlin trilogy.',
        aliases: ['simpleminds', 'simple minds.', 'simple-minds', 'simple mind', 'simpleminds.', 's. minds', 'simple mindz', 'jim kerr', 'jim kerr.'],
      },

      'The Human League': {
        bio: '\'Dare\' is one of the most perfectly produced pop albums ever made, and the early Martyn Ware–era recordings are avant-electronic landmarks that directly spawned Heaven 17.',
        aliases: ['human league', 'thehumanleague', 'the human league.', 'human-league', 'the human leauge', 't.h.l.', 'humanleague', 'the human league (band)', 'human league.', 'phil oakey', 'philip oakey', 'philip oakey & the human league'],
      },

      'Orchestral Manoeuvres in the Dark': {
        bio: '\'Architecture & Morality\' and \'Dazzle Ships\' are monuments of synth-pop ambition where Kraftwerk-inspired experimentation meets genuinely moving melody.',
        aliases: ['omd', 'o.m.d.', 'omd.', 'orchestral manoeuvres', 'orchestral maneuvers in the dark', 'orchestral manoeuvres in the dark.', 'omd band', 'omd (band)', 'omitd', 'o.m.i.t.d.', 'andy mccluskey', 'paul humphreys'],
      },

      'Gary Numan': {
        bio: '\'The Pleasure Principle\' and \'Replicas\' were the coldest, most alien-sounding records in British pop — a Ballardian vision realized through obsessive Moog layering.',
        aliases: ['garynuman', 'gary numan.', 'g. numan', 'g.numan', 'gary newman', 'gary numen', 'gary numan (artist)', 'gary numan band', 'tubeway army', 'tubeway army.', 'gary numan/tubeway army', 'gary webb'],
      },

      'New Order': {
        bio: 'The alchemical fusion of post-punk grief and electronic euphoria created a production template that still governs the border between guitar music and the dancefloor.',
        aliases: ['neworder', 'new order.', 'new-order', 'new ordeer', 'new ordr', 'n.o.', 'new order band', 'new order (band)', 'new order uk', 'bernard sumner', 'peter hook'],
      },

      'Cornelius': {
        bio: '\'Fantasma\' and \'Point\' are Shibuya-kei studio obsession taken to its logical extreme — playful, referential, and assembled with a sample-level precision that rivals Steely Dan.',
        aliases: ['cornelius.', 'cornelius (artist)', 'cornelius (musician)', 'cornelius japan', 'keigo oyamada', '小山田圭吾', 'cornelius-', 'cornelious'],
      },

      'Stereolab': {
        bio: 'Decade-long synthesis of motorik krautrock, Marxist lounge, and analog Moog drones into immaculate pop — the natural intersection of Neu!, Cluster, and Burt Bacharach.',
        aliases: ['stereolab.', 'stereo lab', 'stereo-lab', 'stereolab band', 'stereolab (band)', 'stéreolab', 'sterolab', 'laetitia sadier', 'tim gane'],
      },

      'The Buggles': {
        bio: '\'The Age of Plastic\' is the Rosetta Stone for Trevor Horn\'s production philosophy — the man who would go on to craft Frankie, Propaganda, and Art of Noise starts here.',
        aliases: ['buggles', 'the buggles.', 'thebuggles', 'the-buggles', 'buggles.', 'buggles band', 'trevor horn & geoff downes', 'trevor horn', 'trevor horn.'],
      },

      'Tuxedomoon': {
        bio: 'San Francisco post-punk expatriates who relocated to Brussels and made some of the most cinematic, violin-laced, European-sounding avant-pop of the early \'80s.',
        aliases: ['tuxedomoon.', 'tuxedo moon', 'tuxedo-moon', 'tuxedomoon band', 'tuxedomoon (band)', 'tuxedo moon.', 'tuxedemoon', 'blaine l. reininger', 'steven brown tuxedomoon'],
      },

      'The Durutti Column': {
        bio: 'Vini Reilly\'s tremolo-drenched guitar miniatures on Factory Records are the quiet, devastating counterpart to the label\'s more famous acts, aided by Martin Hannett\'s spectral production.',
        aliases: ['durutti column', 'thedurutticolumn', 'the durutti column.', 'durutti-column', 'the duritti column', 'the durutti collumn', 'duruti column', 'vini reilly', 'vini reilly.', 'vinni reilly'],
      },

      'Haruomi Hosono': {
        bio: 'YMO\'s anchor whose solo career — from exotica through proto-ambient electronics — is one of the most restlessly inventive bodies of work in Japanese music.',
        aliases: ['hosono haruomi', 'haruomihosono', 'haruomi hosono.', 'h. hosono', 'h.hosono', 'hosono', 'harry hosono', '細野晴臣', 'hosono haruomi.', 'haruomi hoshono', 'harry hosono & the yellow magic band'],
      },

      'Boards of Canada': {
        bio: '\'Music Has the Right to Children\' and \'Geogaddi\' are hauntological electronic masterpieces built from degraded analog textures, echoing Brian Eno\'s ambient ethos.',
        aliases: ['boardsofcanada', 'boards of canada.', 'boards-of-canada', 'boc', 'b.o.c.', 'boards of cannada', 'boards of canda', 'boars of canada', 'boards of canada (band)', 'michael sandison', 'marcus eoin'],
      },

      'My Bloody Valentine': {
        bio: '\'Loveless\' is perhaps the single most obsessive studio production in rock history — Kevin Shields\' years-long pursuit of an impossible guitar sound redefined what recording could be.',
        aliases: ['mybloodyvalentine', 'my bloody valentine.', 'my-bloody-valentine', 'mbv', 'm.b.v.', 'my bloody valintine', 'my bloody valentne', 'my bloody valentine band', 'my bloody valentine (band)', 'kevin shields', 'kevin shields.'],
      },

      'Broadcast': {
        bio: 'Trish Keenan\'s band channeled Radiophonic Workshop electronics and \'60s library music into something hauntingly singular — \'The Noise Made by People\' is a lost classic.',
        aliases: ['broadcast.', 'broadcast band', 'broadcast (band)', 'broadcast uk', 'broadcast-band', 'brodcast', 'braodcast', 'trish keenan', 'trish keenan.', 'trish keenan & james cargill'],
      },

      'Franco Battiato': {
        bio: 'Italy\'s greatest art-pop polymath moved from Stockhausen-influenced electronics to the immaculate Mediterranean synth-pop of \'La voce del padrone.\'',
        aliases: ['francobattiato', 'franco battiato.', 'f. battiato', 'f.battiato', 'battiato', 'franco batiato', 'franco batttiato', 'franco battiato (artist)'],
      },

      'Aphex Twin': {
        bio: 'Richard D. James\' range from ambient beauty to deranged precision represents electronic studio mastery with no real peer.',
        aliases: ['aphextwin', 'aphex twin.', 'aphex-twin', 'a. twin', 'richard d. james', 'richard d james', 'richarddjames', 'r.d.j.', 'rdj', 'afx', 'aphex', 'afex twin', 'aphex twn'],
      },

      'King Crimson': {
        bio: 'Robert Fripp\'s ever-mutating ensemble made studio discipline a philosophical principle — every era of this band demands inclusion in a list honoring musical exactitude.',
        aliases: ['kingcrimson', 'king crimson.', 'king-crimson', 'king crimsion', 'king crimsen', 'k.c.', 'kc', 'king crimson band', 'king crimson (band)', 'robert fripp', 'robert fripp.', 'r. fripp', 'fripp'],
      },

      'Klaus Schulze': {
        bio: 'The Berlin-school titan whose epic-length synthesizer compositions are the deep electronic foundation beneath everything from Tangerine Dream to ambient techno.',
        aliases: ['klausschulze', 'klaus schulze.', 'k. schulze', 'k.schulze', 'klaus schulz', 'klaus shulze', 'klaus schulze (musician)', 'schulze'],
      },

      'Penguin Cafe Orchestra': {
        bio: 'Simon Jeffes\' ensemble created a sui generis world of miniaturist acoustic chamber-pop — meticulously arranged, impossible to categorize, and exactly the sort of record found only in obsessive collections.',
        aliases: ['penguincafeorchestra', 'penguin cafe orchestra.', 'penguin-cafe-orchestra', 'pco', 'p.c.o.', 'the penguin cafe orchestra', 'penguin café orchestra', 'penguin cafe', 'penguin cafe orch', 'penguin cafe orchestera', 'simon jeffes', 'simon jeffes.'],
      },

      'Popol Vuh': {
        bio: 'Florian Fricke\'s Moog-driven and acoustic-mystic Krautrock explorations are the spiritual twin to Tangerine Dream\'s cosmic electronics and an essential companion to the Berlin school shelf.',
        aliases: ['popolvuh', 'popol vuh.', 'popol-vuh', 'popol vu', 'popolvu', 'florian fricke', 'florian fricke & popol vuh', 'popul vuh'],
      },

      'Faust': {
        bio: 'The most radically collage-driven of the Krautrock pioneers, whose cut-and-splice studio experiments parallel Can\'s improvisational daring with a Dadaist edge.',
        aliases: ['faust.', 'faust band', 'faust (band)', 'faust (krautrock)', 'faust germany', 'faust-band', 'faust krautrock', 'faust iv'],
      },

      'Manuel Göttsching': {
        bio: 'His solo album E2-E4 single-handedly prefigured ambient techno by a decade, and the Ash Ra Tempel catalog is the missing bridge between Klaus Schulze and Neu!.',
        aliases: ['manuel gottsching', 'manuel göttsching.', 'manuelgottsching', 'manuel goettsching', 'm. göttsching', 'm. gottsching', 'gottsching', 'ash ra tempel', 'ashra', 'ash ra', 'ash-ra-tempel', 'ashra.', 'ash ra tempel.', 'göttsching'],
      },

      'Harmonia': {
        bio: 'The supergroup of Michael Rother and Cluster—and later Eno—whose brief catalog is the exact nexus point where motorik drive, ambient texture, and proto-electronic pop converge.',
        aliases: ['harmonia.', 'harmonia band', 'harmonia (band)', 'harmonia krautrock', 'harmonia-band', 'harmonia 76', 'harmonía', 'tracks and traces', 'harmonia & eno'],
      },

      'Yello': {
        bio: 'Boris Blank\'s obsessive sample-based studio constructions are among the most sonically inventive in all electronic pop, making them the Swiss answer to the Art of Noise.',
        aliases: ['yello.', 'yello band', 'yello (band)', 'yellow', 'yelo', 'yelow', 'boris blank & dieter meier', 'boris blank', 'dieter meier', 'yello-band'],
      },

      'Cabaret Voltaire': {
        bio: 'Sheffield\'s industrial-electronic pioneers evolved from tape-loop abrasion to sleek electronic funk, and their mid-80s productions rival any on this list for studio sophistication.',
        aliases: ['cabaretvoltaire', 'cabaret voltaire.', 'cabaret-voltaire', 'cab voltaire', 'cab vol', 'c.v.', 'cv', 'cabaret voltiare', 'cabare voltaire', 'cabaret voltair', 'cabaret voltaire (band)', 'richard h. kirk', 'stephen mallinder'],
      },

      'Suicide': {
        bio: 'Alan Vega and Martin Rev\'s minimalist drum-machine-and-synth prototype for synth-pop predated and informed virtually every electronic act on this shelf.',
        aliases: ['suicide.', 'suicide band', 'suicide (band)', 'suicide-band', 'alan vega & martin rev', 'alan vega', 'martin rev', 'suicde', 'suicide ny', 'suicide nyc'],
      },

      'This Heat': {
        bio: 'Their two albums of tape-loop post-punk and polyrhythmic disorder are among the most prescient recordings of the late 70s, anticipating post-rock and industrial by decades.',
        aliases: ['thisheat', 'this heat.', 'this-heat', 'this heat band', 'this heat (band)', 'this heatband', 'ths heat', 'charles bullen', 'charles hayward', 'camberwell now'],
      },

      'The The': {
        bio: 'Matt Johnson\'s perfectionist solo-as-band project stitched together synth-pop grandeur, soul, and cinematic post-punk into records whose layered production rewards the obsessive re-listener.',
        aliases: ['thethe', 'the the.', 'the-the', 'the the band', 'the the (band)', 'matt johnson', 'matt johnson.', 'matt johnson the the', 'matthewjohnson', 'the the.'],
      },

      'Godley & Creme': {
        bio: 'The experimental half of 10cc pushed studio trickery to conceptual extremes—the triple-album Consequences marks them as kindred spirits to the most adventurous producers on this shelf.',
        aliases: ['godley and creme', 'godley & creme.', 'godley&creme', 'godley-creme', 'godley creme', 'godley and cream', 'kevin godley & lol creme', 'kevin godley', 'lol creme', 'godley and creme.'],
      },

      'Arthur Russell': {
        bio: 'His posthumously revealed catalog is one of the most singular bodies of work in American music and the missing link between Eno\'s ambient theory and NYC dancefloor physicality.',
        aliases: ['arthurrussell', 'arthur russell.', 'arthur-russell', 'a. russell', 'a.russell', 'arthur russel', 'aurthur russell', 'arthur russell (musician)', 'dinosaur l', 'loose joints'],
      },

      'Young Marble Giants': {
        bio: 'Their sole album Colossal Youth is a masterclass in negative space and minimalist pop architecture that directly informed everything from Stereolab\'s cool detachment to The xx.',
        aliases: ['youngmarblegiants', 'young marble giants.', 'young-marble-giants', 'ymg', 'y.m.g.', 'young marbl giants', 'young marble gants', 'young marble giants (band)', 'colossal youth'],
      },

      'Serge Gainsbourg': {
        bio: 'Histoire de Melody Nelson alone—with its Jean-Claude Vannier orchestrations—is one of the most immaculately produced concept albums ever made and sits naturally beside Roxy Music.',
        aliases: ['sergegainsbourg', 'serge gainsbourg.', 'serge-gainsbourg', 's. gainsbourg', 's.gainsbourg', 'gainsbourg', 'serge gainsborg', 'serge gainsbourgh', 'serge gainsbour', 'serge gainsburgh'],
      },

      'Caetano Veloso': {
        bio: 'The Tropicália movement\'s foremost studio auteur fused bossa nova sophistication with psychedelic and avant-garde production in ways that resonate directly with the art-pop lineage.',
        aliases: ['caetanoveloso', 'caetano veloso.', 'caetano-veloso', 'c. veloso', 'c.veloso', 'caetano', 'caetano velozo', 'caetano veloso (artist)', 'caetano velloso'],
      },

      'The Residents': {
        bio: 'Four decades of anonymous, elaborately produced avant-pop deconstruction make them the permanent outsiders every serious collector eventually has to reckon with.',
        aliases: ['residents', 'theresidents', 'the residents.', 'the-residents', 'the residents band', 'the residents (band)', 'residents.', 'residnets', 'the residentz'],
      },

      'Slowdive': {
        bio: 'Their early-90s shoegaze trilogy—especially Souvlaki—achieves a level of textural studio craft that places them alongside My Bloody Valentine and Cocteau Twins.',
        aliases: ['slowdive.', 'slow dive', 'slow-dive', 'slowdive band', 'slowdive (band)', 'slowdve', 'slow dive.', 'slowdive uk', 'neil halstead', 'rachel goswell'],
      },

      'A.R. Kane': {
        bio: 'Proto-shoegaze innovators whose dub-drenched albums predated Loveless and remain among the most unjustly overlooked recordings in the 4AD-adjacent universe.',
        aliases: ['ar kane', 'a.r.kane', 'a r kane', 'a.r. kane.', 'arkane', 'ar-kane', 'a.r. kane band', 'a.r. kane (band)', 'alex ayuli', 'rudy tambala'],
      },

      'Gavin Bryars': {
        bio: 'An Obscure Records alumnus alongside Eno, whose compositions are touchstone works of ambient minimalism that bridge the experimental and the deeply emotional.',
        aliases: ['gavinbryars', 'gavin bryars.', 'gavin-bryars', 'g. bryars', 'g.bryars', 'bryars', 'gavin bryar', 'gavin bryers', 'gavin bryars ensemble'],
      },

      'Moondog': {
        bio: 'The blind street composer of Manhattan whose hand-built rhythmic counterpoint anticipated minimalism, world music fusion, and the Penguin Cafe Orchestra\'s charming formalism.',
        aliases: ['moondog.', 'moon dog', 'moon-dog', 'moondog (musician)', 'louis thomas hardin', 'louis hardin', 'moondog.', 'moondog nyc', 'the viking of 6th avenue'],
      },

      'Fennesz': {
        bio: 'His album Endless Summer—guitar pop deconstructed into shimmering digital granules—is the 21st-century inheritor of the project of dissolving melody into pure texture.',
        aliases: ['fennesz.', 'fennesz (artist)', 'christian fennesz', 'c. fennesz', 'c.fennesz', 'fenez', 'fennesz (musician)', 'fennes', 'christian fennesz.'],
      },

      'Midori Takada': {
        bio: 'Through the Looking Glass is a single-album miracle of hypnotic marimba minimalism that connects Steve Reich, Japanese aesthetics, and chamber experimentalism.',
        aliases: ['midoritakada', 'midori takada.', 'midori-takada', 'm. takada', 'm.takada', 'takada midori', '高田みどり', 'midori takada (musician)', 'takada'],
      },

      'Isao Tomita': {
        bio: 'His meticulous Moog synthesizer orchestrations of Debussy and Holst in the 1970s are some of the most painstaking studio achievements in electronic music history.',
        aliases: ['isaotomita', 'isao tomita.', 'isao-tomita', 'i. tomita', 'i.tomita', 'tomita', 'tomita isao', '冨田勲', 'isao tomita (musician)', 'tomita.', 'tomita isao.'],
      },

      'Susumu Yokota': {
        bio: 'Grinning Cat and Sakura are ambient electronic albums of extraordinary delicacy—each a hand-assembled mosaic of classical samples and digital atmosphere.',
        aliases: ['susumuyokota', 'susumu yokota.', 'susumu-yokota', 's. yokota', 's.yokota', 'yokota', 'susumu yokota (artist)', 'yokota susumu', '横田進'],
      },

      'Suzanne Ciani': {
        bio: 'Her pioneering Buchla synthesizer compositions and meticulous early electronic recordings make her one of the most important figures in the lineage from Kraftwerk through Aphex Twin.',
        aliases: ['suzanneciani', 'suzanne ciani.', 'suzanne-ciani', 's. ciani', 's.ciani', 'ciani', 'suzane ciani', 'suzanne chiani', 'suzanne ciani (musician)'],
      },

      'Mike Oldfield': {
        bio: 'Tubular Bells remains one of the most obsessively multi-tracked, single-vision studio achievements in recorded music—a one-man orchestra performance that epitomizes this entire collection.',
        aliases: ['mikeoldfield', 'mike oldfield.', 'mike-oldfield', 'm. oldfield', 'm.oldfield', 'micheal oldfield', 'michael oldfield', 'mike oldfied', 'mike oldfeild', 'mike oldfield (musician)', 'oldfield'],
      },

      'Jean-Michel Jarre': {
        bio: 'Oxygène and Équinoxe are foundational electronic production landmarks whose analogue synth layering sits directly alongside Kraftwerk and Tangerine Dream.',
        aliases: ['jean michel jarre', 'jean-michel jarre.', 'jmj', 'j.m.j.', 'jarre', 'jean michel jar', 'jean-michel jarr', 'jean michael jarre', 'jean michelle jarre', 'jeanmicheljarre', 'jean-michel jarre (musician)'],
      },

      'Hiroshi Yoshimura': {
        bio: 'His Music for Nine Post Cards defined Japanese kankyō ongaku (environmental music) with a production delicacy that parallels Eno\'s ambient work from a distinct Japanese aesthetic.',
        aliases: ['hiroshiyoshimura', 'hiroshi yoshimura.', 'h. yoshimura', 'h.yoshimura', 'yoshimura', 'yoshimura hiroshi', '芳村弘', '吉村弘', 'hiroshi yoshmura', 'hiroshi yosihmura'],
      },

      'Wendy Carlos': {
        bio: 'Switched-On Bach single-handedly legitimised the Moog synthesizer as a serious musical instrument, and her meticulous multi-tracking was a studio production feat unmatched in the late 1960s.',
        aliases: ['wendy carlos.', 'wendycarlos', 'wendy-carlos', 'w. carlos', 'w.carlos', 'walter carlos', 'wendy carloss', 'wendy carols', 'carlos', 'wendy carlos (musician)', 'switched-on bach'],
      },

      'Mort Garson': {
        bio: 'A Moog visionary decades ahead of his time whose Mother Earth\'s Plantasia and zodiac albums are now recognised as pioneering electronic works that predicted ambient and new age synthesizer music.',
        aliases: ['mort garson.', 'mortgarson', 'mort-garson', 'm. garson', 'm.garson', 'mort garsen', 'mort garson (musician)', 'mort garson plantasia'],
      },

      'Pauline Anna Strom': {
        bio: 'A blind synthesist whose Trans-Millenia Consort recordings are stunningly crafted modular-synth worlds that remained virtually unknown until recent reissues.',
        aliases: ['pauline anna strom.', 'paulineannastrom', 'pauline-anna-strom', 'p.a. strom', 'pauline strom', 'pauline a. strom', 'trans-millenia consort', 'trans millenia consort', 'pauline anna strom (musician)', 'pauline ann strom'],
      },

      'Giorgio Moroder': {
        bio: 'The father of electronic disco production whose sequencer-driven work placed him at the exact nexus of machine music and pop perfection.',
        aliases: ['giorgiomoroder', 'giorgio moroder.', 'g. moroder', 'g.moroder', 'moroder', 'georgio moroder', 'giorgio morodor', 'giorgio moroder (producer)', 'giorgio-moroder'],
      },

      'David Axelrod': {
        bio: 'His Song of Innocence and Song of Experience are orchestral-rock production masterclasses—deeply sampled by hip-hop and revered by crate-diggers.',
        aliases: ['davidaxelrod', 'david axelrod.', 'd. axelrod', 'd.axelrod', 'axelrod', 'david axlerod', 'david axelrod (producer)', 'david axelrod (musician)'],
      },

      'Shuggie Otis': {
        bio: 'Inspiration Information is a one-man studio prophecy—recorded in isolation years before its time, it fused funk, ambient, and electronic soul.',
        aliases: ['shuggie otis.', 'shuggieotis', 'shuggie-otis', 's. otis', 's.otis', 'shuggy otis', 'shuggie ottis', 'shuggie otis (musician)', 'johnny otis jr'],
      },

      'Coil': {
        bio: 'Post-industrial alchemists whose every album is a different meticulously sculpted sonic world, making them the ultimate cult studio experimentalists.',
        aliases: ['coil.', 'coil band', 'coil (band)', 'coil-band', 'coil uk', 'john balance & peter christopherson', 'jhonn balance', 'peter christopherson', 'coil (musician)', 'coyll'],
      },

      'D.A.F.': {
        bio: 'Their minimalist electronic body music stripped synth-punk to its most visceral, perfectly produced core and directly influenced generations of EBM producers.',
        aliases: ['daf', 'd.a.f', 'deutsch amerikanische freundschaft', 'deutsch-amerikanische freundschaft', 'daf.', 'd a f', 'daf band', 'gabi delgado & robert görl', 'robert görl', 'gabi delgado', 'robert gorl', 'deutsche amerikanische freundschaft'],
      },

      'Tortoise': {
        bio: 'Chicago post-rock architects whose TNT and Millions Now Living Will Never Die are masterclasses in meticulous multi-layered studio construction across jazz, electronic, dub, and minimalism.',
        aliases: ['tortoise.', 'tortoise band', 'tortoise (band)', 'tortoise-band', 'tortise', 'tortoise chicago', 'tortiose'],
      },

      'Bark Psychosis': {
        bio: 'Their album Hex literally inspired the term \'post-rock\' and remains one of the most immaculately produced, dynamically radical British albums of the 1990s.',
        aliases: ['barkpsychosis', 'bark psychosis.', 'bark-psychosis', 'bark psychosis band', 'bark psychosis (band)', 'bark psychossis', 'bark psycosis', 'graham sutton'],
      },

      'Conrad Schnitzler': {
        bio: 'A founding member of both Tangerine Dream and Cluster whose prolific, wildly experimental solo cassette and vinyl output makes him the connective tissue of the entire Berlin electronic underground.',
        aliases: ['conradschnitzler', 'conrad schnitzler.', 'c. schnitzler', 'c.schnitzler', 'schnitzler', 'konrad schnitzler', 'conrad schnitzler (musician)', 'con schnitzler', 'conrad schnitzler.'],
      },

      'Amon Düül II': {
        bio: 'Yeti and Tanz der Lemminge are sprawling krautrock studio epics whose psychedelic-progressive ambition sits alongside Can and Faust as the pillars of German experimental rock.',
        aliases: ['amon duul ii', 'amon düül 2', 'amon duul 2', 'amon duul', 'amon düül', 'amon duel ii', 'amondüülii', 'amon-düül-ii', 'amon duul ii.', 'amon düül ii.', 'amon dueel ii', 'amon duul two'],
      },

      'Wolfgang Riechmann': {
        bio: 'His sole album Wunderbar—recorded with Neu! collaborators before his tragic murder—is a one-album krautrock masterpiece of glacial electronic beauty that has become a cult collector\'s grail.',
        aliases: ['wolfgangriechmann', 'wolfgang riechmann.', 'w. riechmann', 'w.riechmann', 'riechmann', 'wolfgang reichmann', 'wolfgang richmann', 'wolfang riechmann'],
      },

      'Bill Nelson': {
        bio: 'From Be-Bop Deluxe\'s art-glam guitar perfectionism through decades of prolific solo electronic and ambient work, he is one of Britain\'s most consistently innovative and unjustly overlooked studio auteurs.',
        aliases: ['billnelson', 'bill nelson.', 'b. nelson', 'b.nelson', 'bill nelsen', 'bill nelson (musician)', 'bill nelson band', 'be-bop deluxe', 'be bop deluxe', 'bebop deluxe', 'bill nelson\'s red noise', 'red noise'],
      },

      'The Notwist': {
        bio: 'Neon Golden fused Warp-era glitch electronics with art-rock songwriting in a seamless production that made them Germany\'s most important indie-electronic crossover act.',
        aliases: ['thenotwist', 'the notwist.', 'notwist', 'the-notwist', 'the notwist band', 'the notwist (band)', 'notwist.', 'markus acher', 'markus and micha acher'],
      },

      'Einstürzende Neubauten': {
        bio: 'From industrial wreckage to exquisitely arranged chamber music, their four-decade evolution is a case study in how radical sonic experimentation can mature into profound studio artistry.',
        aliases: ['einsturzende neubauten', 'einstürzende neubauten.', 'einstuerzende neubauten', 'einstürzende-neubauten', 'neubauten', 'e.n.', 'einsturzende neubauten.', 'einstürzende neubaten', 'einsturzende nubauten', 'blixa bargeld', 'blixa bargeld & einstürzende neubauten'],
      },

      'Pere Ubu': {
        bio: 'The Modern Dance and Dub Housing pioneered art-punk\'s studio possibilities—layering found sound, synth texture, and avant-garage rock into a blueprint that influenced Wire, The Fall, and Radiohead.',
        aliases: ['pereubu', 'pere ubu.', 'pere-ubu', 'pere ubu band', 'pere ubu (band)', 'pair ubu', 'pere ube', 'david thomas & pere ubu', 'david thomas', 'pere ubu.'],
      },

      'Ariel Kalma': {
        bio: 'A French synthesist and multi-instrumentalist whose 1970s recordings blending electronics, field recordings, and Indian classical music presaged fourth-world and new-age aesthetics by a decade.',
        aliases: ['arielkalma', 'ariel kalma.', 'a. kalma', 'a.kalma', 'kalma', 'ariel calma', 'ariel kalma (musician)'],
      },

      'Terry Riley': {
        bio: 'A Rainbow in Curved Air and In C are foundational minimalist recordings whose tape-loop and organ layering techniques directly enabled the production philosophies of Eno, Tangerine Dream, and The Who\'s Baba O\'Riley.',
        aliases: ['terryriley', 'terry riley.', 't. riley', 't.riley', 'terry reily', 'terry riley (musician)', 'terry rilley', 'terry riley (composer)'],
      },

      'Steve Reich': {
        bio: 'Music for 18 Musicians is a towering achievement in precision ensemble recording whose phasing techniques and rhythmic architecture directly influenced Talking Heads, Stereolab, and Radiohead.',
        aliases: ['steverreich', 'steve reich.', 's. reich', 's.reich', 'reich', 'steven reich', 'steve reich (composer)', 'steve riech', 'steve reich and musicians'],
      },

      'Tim Hecker': {
        bio: 'Ravedeath, 1972 and Virgins represent the contemporary apex of studio-as-instrument ambient music—pipe organs and digital processing sculpted into overwhelming, physically immersive productions.',
        aliases: ['timhecker', 'tim hecker.', 't. hecker', 't.hecker', 'hecker', 'tim heker', 'tim hecker (musician)', 'tim hecker (artist)'],
      },

      'Julee Cruise': {
        bio: 'Floating into the Night—produced by Angelo Badalamenti and written by David Lynch—is dream pop at its most exquisitely studio-crafted, an album inseparable from the Twin Peaks sonic universe.',
        aliases: ['juleecruise', 'julee cruise.', 'j. cruise', 'j.cruise', 'julie cruise', 'julee cruse', 'julee cruise (musician)', 'julee cruise & angelo badalamenti', 'julee cruise/david lynch'],
      },

      'Annette Peacock': {
        bio: 'A pioneering synthesizer-voice fusionist whose I\'m the One and X-Dreams used Moog processing of live vocals years before anyone else, making her an unsung architect of electronic art-pop.',
        aliases: ['annette peacock.', 'annettepeacock', 'annette-peacock', 'a. peacock', 'a.peacock', 'peacock', 'anette peacock', 'annette peacock (musician)', 'annete peacock'],
      },
    },
  },
};

// Indexed once at module load — pure static data, cannot throw at bundle
// eval. Same normalization as the alchemy index so both engines always agree.
const STUDIO_NAME_SET: Set<string> = (() => {
  const set = new Set<string>();
  const curated = studioPerfection.subCategories['Curated Override'] || {};
  for (const [primaryName, data] of Object.entries(curated)) {
    for (const name of [primaryName, ...(data.aliases || [])]) {
      const key = normalizeArtistKey(name);
      if (key) { set.add(key); }
    }
  }
  return set;
})();

/**
 * Returns true if the raw artist string matches any entry in the Studio
 * Perfection list. Same two-tier strategy as lookupArtist: whole normalized
 * string first (the old unbounded ft-regex + bare-& split meant DAFT PUNK
 * FAILED ITS OWN STUDIO PERFECTION ENTRY), then featuring-clause head, then
 * space-flanked credit tokens.
 */
export function isStudioPerfectionArtist(artist: string): boolean {
  if (!artist) { return false; }

  const cleaned = normalizeArtistKey(artist.replace(YEAR_PREFIX, ''));
  if (!cleaned) { return false; }
  if (STUDIO_NAME_SET.has(cleaned)) { return true; }

  const head = cleaned.replace(FEAT_CLAUSE, '').trim();
  if (head !== cleaned && STUDIO_NAME_SET.has(head)) { return true; }

  // Full cleaned string, not the feat-stripped head — same guest-rescue rule
  // as lookupArtist: a curated GUEST still counts when the primary is unknown.
  for (const token of tokenizeArtistCredit(cleaned)) {
    if (STUDIO_NAME_SET.has(token)) { return true; }
  }

  return false;
}
