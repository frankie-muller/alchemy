# Alchemy

[![verify](https://github.com/frankie-muller/alchemy/actions/workflows/verify.yml/badge.svg)](https://github.com/frankie-muller/alchemy/actions/workflows/verify.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-2F7D6A.svg)](LICENSE)

**Music genre alchemy** — turn a messy local music library into a structured one, entirely offline.

**▶ [Try it in your browser](https://frankie-muller.github.io/alchemy)** — the real dictionary, running client-side. Pick a corner of the taxonomy and get recommendations, or throw a mangled ID3 tag at the classifier and watch which step catches it.

Alchemy ships a taxonomy of **3,545 artists** across **12 pillars** and **76 sub-categories**, an artist classifier built for the tags real files actually carry, and a discovery engine that recommends by *neighbourhood* instead of by calling an API.

**At runtime: no network, no accounts, no telemetry, zero dependencies.** The dataset was *built* with LLMs — see [How this was built](#how-this-was-built), which is also why the script that built it ships with it.

Extracted from [OCTOPUS](https://www.singularcontinuum.com/octopus), a hi-fi local-files player for iOS, where it classifies libraries on-device and powers the Artist Discovery Robot.

---

## Why this exists

Naive artist matching breaks on the tags people's files actually have. Every row below is a real failure mode this library fixes:

| Tag | Naive matcher | Alchemy |
|---|---|---|
| `Daft Punk` | `da& punk` — an unbounded `ft`→`&` rewrite | Electronic › Synthpop / Electronic Pop |
| `Kraftwerk` | `kra&werk` | Electronic › Synthpop / Electronic Pop |
| `Earth, Wind & Fire` | split to `earth` → matched the **metal band Earth** | R&B / Soul › Funk |
| `Calvin Harris feat. Rihanna` | unknown primary → unmatched | Pop › Pop R&B Crossover *(guest rescue)* |
| `Rihanna feat.Calvin Harris` | glued marker → unmatched | Pop › Pop R&B Crossover |
| `(1998) Lisa Gerrard` | year prefix → unmatched | Amazing Vocals › Atmospheric / Art Pop |
| `AC/DC` | split on `/` → unmatched | Rock › Classic Rock / Arena Rock |

The rules that make this work — delimiter-aware featuring clauses, space-flanked joiners, NFC normalization, whole-string-before-tokenize lookup — are exported so you can reuse them on your own data.

```bash
node examples/classify.mjs          # runs exactly the table above
```

## Install

Zero runtime dependencies. Ships compiled ESM plus full TypeScript declarations, and the source alongside it.

```bash
npm install github:frankie-muller/alchemy
```

> **Not on the npm registry yet** — it will publish as `music-alchemy`. The GitHub install above works today: `prepare` builds `dist/` on install, so you get the same compiled output and types either way.
>
> The API may still move before `1.0`, so pin a commit if you depend on it.

```bash
# or work on it directly
git clone https://github.com/frankie-muller/alchemy.git
cd alchemy && npm install && npm test
```

### Getting the tags in

Alchemy classifies metadata — it doesn't read files. Pair it with **[TagLib](https://taglib.org/)** (or any reader you like) and you have the full chain: TagLib pulls tags out of anything you throw at it — MP3, FLAC, ALAC, M4A, OGG, WV, AIFF, WMA, APE, ID3v1 through ID3v2.4, Vorbis comments, APE tags — and Alchemy makes structural sense of whatever comes out.

That's the pairing built for genuinely chaotic libraries: three decades of formats, five tagging conventions, half of it ripped by someone else. TagLib handles the container. Alchemy handles the mess *inside* the tag.

## Usage

### Classify

```ts
import { classifyTrack, classifyLibrary } from 'music-alchemy';

classifyTrack({ id: '1', title: 'Around the World', artist: 'Daft Punk' });
// → { pillar: 'Electronic', subCategory: 'Synthpop / Electronic Pop',
//     classifiedBy: 'alchemy', isStudioPerfection: true, ... }

// Whole library, grouped Pillar → SubCategory → tracks
const library = classifyLibrary(tracks);
```

`classifyTrack` runs a three-step waterfall and always tells you *which* step decided, via `classifiedBy`:

1. **Alias washer** — normalizes a raw genre tag (`"Drum n Bass"`, `"DnB"`, `"drum & bass"`) to a canonical sub-category. 691 mappings.
2. **Alchemy dictionary** — artist lookup when the genre tag is absent or unrecognized. A known artist outranks a genre tag, because a curated pillar+sub is a matched pair.
3. **Unmatched** — quarantined rather than guessed at.

### Discover

```ts
import { DiscoveryEngine } from 'music-alchemy';

const engine = new DiscoveryEngine();          // remembers what it showed you
const { recommendations } = engine.discover('Electronic', 'Ambient / Downtempo');
```

Four widening tiers, stopping as soon as the slots fill:

1. **The local neighbourhood** — other artists in the same sub-category.
2. **The bridges** — 62 curated cross-pillar connectors (artists who genuinely span worlds).
3. **The metropolitan area** — the rest of the parent pillar.
4. **Ouroboros** — everything here has been seen; wipe memory and walk once more.

```bash
node examples/discover.mjs "Electronic" "Detroit Techno / Chicago House"
```

### Reuse just the normalizer

```ts
import { normalizeArtistKey, tokenizeArtistCredit } from 'music-alchemy';

tokenizeArtistCredit(normalizeArtistKey('Jay-Z feat. Alicia Keys'));
// → ['jay-z', 'alicia keys']    — "Jay-Z" survives; the feat clause splits
```

## The taxonomy

**12 pillars · 76 sub-categories · 3,545 artists.** Every artist carries a one-line biography and its known spelling variants.

| Pillar | Artists | Sub-categories |
|---|--:|---|
| **Rock** | 524 | Classic Rock / Arena Rock (92) · Alternative / Indie (87) · Progressive / Experimental (73) · Punk / Post-Hardcore (64) · Post-Punk / New Wave (60) · Rock en Español (51) · Grunge (50) · Shoegaze / Dream Pop (47) |
| **Classical** | 445 | Symphonic / Orchestral (125) · Solo Instrumental / Sonata (101) · Contemporary / Minimalist (98) · Opera / Choral (97) · Conductors (13) · Period Performance / Early Music (11) |
| **Electronic** | 398 | Synthpop / Electronic Pop (56) · Drum & Bass / Jungle (54) · Ambient / Downtempo (49) · Breakbeat / Big Beat (40) · Deep & Tech House (39) · Minimal / Microhouse (38) · Progressive / Melodic House (35) · IDM / Leftfield / Electronica (35) · Detroit Techno / Chicago House (14) · Trance (11) · Disco / Nu-Disco (11) · EBM / Industrial (9) · Acid House (7) |
| **Jazz & Acoustics** | 380 | Acoustic / Bossa Nova (98) · Bebop / Hard Bop (83) · Free / Avant-Garde (54) · Cool / Modal (43) · Fusion / Jazz-Funk (38) · Vocal Jazz (33) · Big Band / Swing (16) · Acoustic Guitar (9) · Latin Jazz (6) |
| **Hip-Hop / Rap** | 363 | Current / Trap (95) · Core / Golden Age (88) · West Coast (75) · Conscious / Alternative (68) · East Coast (37) |
| **Latin** | 299 | Cumbia / Norteño / Regional (52) · Salsa / Merengue (51) · Flamenco / Español (51) · Latin Pop (45) · Bachata / Bolero (45) · Pop en Español (32) · Brazilian / MPB (13) · Tango (10) |
| **Pop** | 273 | Mainstream Pop (102) · Indie Pop / Alt Pop (82) · Pop R&B Crossover (69) · K-Pop (20) |
| **Amazing Vocals** | 229 | Jazz & Soul Powerhouses (64) · Spoken / Poetic Flow (57) · Atmospheric / Art Pop (56) · Intimate Singer-Songwriter (52) |
| **Metal / Hard Rock** | 204 | Heavy Metal / Hard Rock (43) · Progressive Metal (40) · Doom / Stoner / Sludge (39) · Classic Heavy Metal / NWOBHM (36) · Death / Black / Extreme Metal (29) · Power / Symphonic Metal (17) |
| **R&B / Soul** | 183 | Modern R&B (49) · Classic Soul / Motown (46) · Neo Soul (40) · Contemporary R&B (24) · Funk (24) |
| **Reggae / Dub** | 155 | Roots Reggae (54) · Dancehall (39) · Lovers Rock (27) · Studio Dub (21) · Ska & Rocksteady (14) |
| **Reggaeton / Urbano** | 92 | Reggaeton / Urbano (42) · Latin Trap / Urbano Moderno (40) · Producers / Beatmakers (10) |

### Studio Perfection — the overlay

**Studio Perfection is not a pillar.** It's a cross-genre overlay of **137 artists** (1,344 names including aliases) picked by hand for production quality — records worth hearing on good equipment, regardless of genre. It answers a *different* question than "what genre is this," so it never competes with the taxonomy:

```ts
import { isStudioPerfectionArtist } from 'music-alchemy';
isStudioPerfectionArtist('Daft Punk');   // → true
```

Every classified track carries it as a boolean (`isStudioPerfection`), so Steely Dan stays in Jazz *and* gets the flag.

### Supporting data

| Dataset | Size | Purpose |
|---|--:|---|
| `ALIAS_MAP` | 691 | Raw genre-tag strings → canonical sub-category |
| `CONNECTORS` | 62 | Artists who authentically bridge two or more pillars |
| `SUB_CATEGORY_META` | 61 | Mood, energy, decades, description per sub-category |

## How this was built

Being straight about this, because "hand-curated" is the easiest lie in a dataset README:

**The dictionary was built with LLMs — Claude and Gemini APIs — under human review.** Sub-category by sub-category, a model proposed artists and wrote the one-line biographies; a human kept, cut, or re-filed them. 3,545 artists is not a number anyone types by hand, and pretending otherwise would misrepresent what you're getting.

What genuinely *is* hand-picked:

- **Studio Perfection** (137 artists) — a personal list about production quality. No model chose these.
- **Amazing Vocals** (229 artists) — the pillar exists because of a specific listening bias, and it was assembled the same way.
- Every **pillar and sub-category boundary** — the shape of the taxonomy, what deserves to be its own category, and which artist wins a judgment call.

So: the *skeleton* and the *taste* are human. The *volume* is machine, reviewed. The biographies are model-written prose, spot-checked, not individually fact-checked — treat them as blurbs, not citations.

**This is why the harness matters more than the curation claim.** `npm run verify` is a mechanical guarantee that holds no matter who or what wrote a line: every artist resolves to itself, in its own pillar, or CI fails. That's a promise the word "curated" can't make.

### Grow it yourself — any API, or none

The tool used to build this ships with it. It's provider-agnostic on purpose:

```bash
ALCHEMY_API_KEY=sk-... node scripts/grow.mjs --pillar Electronic --sub "Acid House" -n 15
```

```
ALCHEMY_PROVIDER   anthropic (default) · openai · gemini · custom
ALCHEMY_API_KEY    your key
ALCHEMY_MODEL      overrides the per-provider default
ALCHEMY_API_URL    for `custom` — any OpenAI-compatible endpoint
```

`custom` points at anything that speaks the OpenAI chat shape — Ollama, llama.cpp, vLLM, OpenRouter, Together — so you can grow the dictionary against a **local model, no key and no network**. Adding a provider is a dozen lines in `PROVIDERS`.

It sends the model the artists already in that sub-category (so proposals are additive and on register), drops anything that already resolves anywhere in the dictionary, and writes `proposals/<pillar>__<sub>.json`. **It never edits the pillar files.** You read the proposal, delete what you disagree with, paste the rest in, and run `npm test`.

The harness catches structural breakage. It does not catch an invented artist — that part is human, and always will be.

## Verification

The dictionary is guarded by a roll-call harness. It bundles the **real** modules and asserts that every artist in the dictionary finds itself, lands in its own pillar, and that every Studio Perfection name passes:

```bash
npm run verify
```

```
ROLL CALL   3545 / 3545 primaries OK   (169 resolved by collision policy)
STUDIO      1344 / 1344 curated names OK
COLLISIONS   780 duplicate keys in dictionary (curation backlog)
✅ ALL GREEN
```

It runs in CI on every push. **No change that breaks self-match can land.** This is the contract that makes the dictionary safe to grow.

## Known gaps

Stated plainly, because a dataset that hides these is not worth trusting on anything else:

- **780 contested keys.** Names claimed by more than one entry (`Air` the French duo vs `Air` the jazz trio). Resolution is *deterministic*, never iteration-order luck: a primary name beats an alias, otherwise first-in-dictionary-order wins. `npm run verify` names every one.
- **16 sub-categories have no metadata** — no mood/energy/description, so discovery falls back to generic tags. Full list in `npm run verify` output. Includes Detroit Techno / Chicago House, Trance, Acid House, Funk, Tango, Latin Jazz.
- **Coverage is opinionated and uneven.** Classical has 445 entries; Acid House has 7. It reflects one listener's library and the sub-categories that got grown first — not a canon.
- **Model-written biographies.** Reviewed, not fact-checked line by line. Expect occasional confident nonsense in the prose; the pillar/sub-category placement is the part that was actually scrutinized.
- **Western-leaning.** Strong on Latin, reggaeton and rock en español; thin on African, Middle Eastern, and most Asian traditions outside K-Pop.

## Status

**Early public release — read-only for now.** Issues are open and genuinely wanted, especially misclassification reports ("you filed X under Y") and biography corrections, which are the highest-value feedback this project can get. Code PRs aren't being accepted yet; see [CONTRIBUTING.md](CONTRIBUTING.md).

Fork it and grow it in the meantime — that's what `scripts/grow.mjs` is for, and the harness travels with the fork.

## License

[MIT](LICENSE) — code *and* dictionary data. Artist names and their genre associations are facts, claimed by no one; the biographies are model-generated text released under the same terms. [NOTICE.md](NOTICE.md) spells out the provenance.

Built by [Frank Müller](https://www.singularcontinuum.com/octopus).
