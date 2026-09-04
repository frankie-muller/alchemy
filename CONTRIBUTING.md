# Contributing

## Right now: issues yes, code PRs no

This is an early public release and the API is still moving. **Pull requests aren't being accepted yet** — please don't spend your evening on one, it will sit unmerged and that's a waste of your time, not a judgment on your patch.

Issues are wanted, and one kind especially.

## The most useful thing you can file

**Misclassifications.** "You filed X under Y, it belongs in Z." This is the single highest-value feedback the project can get, because it's the thing no test can catch.

The harness proves the dictionary is *internally consistent* — every artist resolves to itself, in its own pillar, deterministically. It cannot prove the dictionary is *right*. Only ears can do that.

Use the [classification report](../../issues/new?template=classification-report.yml) template.

Also welcome:

- **Bad biographies.** The bios were written by language models under review, so some are wrong, some are generic, and at least one is probably about the wrong band entirely. Naming a specific one is a real contribution.
- **Tag shapes that break the matcher.** If a real file in your library classifies wrong because of how the artist string is written — some delimiter, some encoding, some regional convention nobody thought about — that's a bug in the normalizer and it's worth a lot. Paste the exact string.
- **Missing artists**, especially outside the coverage this dictionary is honest about being thin on: African, Middle Eastern, and most Asian traditions outside K-Pop.
- **Sub-categories with no metadata** — 16 of them; `npm run verify` names them all.

## Before you file

```bash
npm install
npm test          # typecheck + roll call
```

If your report is about classification, the fastest way to show it:

```bash
node examples/classify.mjs "The Exact Artist String From Your File"
```

Paste that output into the issue. It tells us the pillar, the sub-category, and — crucially — *which step of the waterfall* made the call, which is usually the whole diagnosis.

## Growing your own copy

You don't have to wait for PRs to open. `scripts/grow.mjs` is the tool the dictionary was built with, and it works with any provider — including a local model with no API key:

```bash
ALCHEMY_API_KEY=... node scripts/grow.mjs --pillar Latin --sub Tango -n 15
```

It writes a proposal to `proposals/`, never touching the pillar files. Review it, paste what you agree with into `src/pillars/<pillar>.ts`, run `npm test`. Fork and grow — the harness travels with you.

If you build something substantial in a fork, open an issue and say so. When PRs open, that's where the first ones will come from.

## House rules for dictionary entries

If you're proposing artists in an issue, or growing a fork you might one day upstream:

- **Centre of gravity, not adjacency.** An artist belongs in a sub-category if that's where the bulk of their work lives, not if they once made a record near it.
- **Aliases are real spellings that appear in file tags** — accents dropped, `&` vs `and`, stage-name variants, common misspellings. Not nicknames you invented.
- **One sentence, ≤30 words, saying why they belong here.** Not a career summary.
- **No duplicates across pillars.** There are already 780 contested keys; don't add the 781st. `node examples/classify.mjs "Name"` tells you in one second whether a name is taken.

## Code of conduct

Be decent. Disagreeing about whether Massive Attack is trip-hop or downtempo is the *entire point* of this project; disagreeing unpleasantly isn't.
