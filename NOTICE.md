# Notice — how the data is licensed and how it was made

The [MIT licence](LICENSE) covers this repository in full: both the code and the
dictionary data (artist entries, biographies, aliases, connectors and
sub-category metadata) under `src/pillars/`, `src/aliasMap.ts`,
`src/connectors.ts` and `src/subCategoryMeta.ts`.

This note lives outside `LICENSE` so that GitHub and automated licence scanners
can match that file as unmodified MIT. Nothing here adds a condition to it.

## Provenance

The dictionary was assembled with large language models — Claude and Gemini
APIs — under human review. A model proposed artists and wrote the one-line
biographies, sub-category by sub-category; a human kept, cut or re-filed them.
The tool that did it ships with the repository as `scripts/grow.mjs`.

Hand-picked without model involvement: the Studio Perfection overlay (137
artists), the Amazing Vocals pillar (229 artists), and every pillar and
sub-category boundary in the taxonomy.

The biographies are therefore model-generated prose, reviewed but not
fact-checked line by line. They are released under the same MIT terms as
everything else. Treat them as blurbs, not citations — see the "Known gaps"
section of the [README](README.md#known-gaps).

## What is not claimed

Artist names, genre labels and the factual associations between them are not
claimed as property. They are facts, and no licence here asserts otherwise.

Attribution is appreciated but, per MIT, required only in the form of the
copyright notice in `LICENSE`.
