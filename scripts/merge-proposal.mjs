#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// MERGE-PROPOSAL — take a proposals/<pillar>__<sub>.json written by grow.mjs
// and splice its accepted entries into the right src/pillars/*.ts file.
//
// This is the automation grow.mjs deliberately does NOT do itself (it only
// ever writes a reviewable proposal). This script exists because growing to
// 10K artists one manual paste at a time isn't practical — but it changes
// nothing about the safety net: it edits real source via the TypeScript
// compiler API (not regex), and `npm test` still runs after every merge.
//
//   node scripts/merge-proposal.mjs proposals/rock__progressive-experimental.json
// ─────────────────────────────────────────────────────────────────────────────
import ts from 'typescript';
import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const proposalPath = process.argv[2];
if (!proposalPath) {
  console.error('Usage: node scripts/merge-proposal.mjs <proposals/file.json>');
  process.exit(1);
}

const proposal = JSON.parse(readFileSync(proposalPath, 'utf8'));
const { pillar: pillarName, subCategory: subName, accepted } = proposal;

if (!accepted || accepted.length === 0) {
  console.log(`Nothing to merge (0 accepted) — leaving ${proposalPath} in place.`);
  process.exit(0);
}

// ── Find which pillar file declares this pillar name ────────────────────────
import { readdirSync } from 'node:fs';
const pillarsDir = join(root, 'src/pillars');
let targetFile = null;
for (const f of readdirSync(pillarsDir)) {
  if (!f.endsWith('.ts')) { continue; }
  const src = readFileSync(join(pillarsDir, f), 'utf8');
  if (src.includes(`name: '${pillarName}'`) || src.includes(`name: "${pillarName}"`)) {
    targetFile = join(pillarsDir, f);
    break;
  }
}
if (!targetFile) {
  console.error(`Could not find a pillar file declaring name: '${pillarName}'`);
  process.exit(1);
}

const source = readFileSync(targetFile, 'utf8');
const sourceFile = ts.createSourceFile(targetFile, source, ts.ScriptTarget.Latest, true);

// ── Walk the AST: subCategories property -> the sub-category's object literal ─
let subCategoriesObj = null;
function visit(node) {
  if (ts.isPropertyAssignment(node) && node.name.getText(sourceFile).replace(/^['"]|['"]$/g, '') === 'subCategories') {
    if (ts.isObjectLiteralExpression(node.initializer)) { subCategoriesObj = node.initializer; }
  }
  ts.forEachChild(node, visit);
}
visit(sourceFile);
if (!subCategoriesObj) {
  console.error(`Could not find "subCategories" object literal in ${targetFile}`);
  process.exit(1);
}

function propKeyText(prop) {
  if (!prop.name) { return null; }
  if (ts.isStringLiteral(prop.name)) { return prop.name.text; }
  return prop.name.getText(sourceFile).replace(/^['"]|['"]$/g, '');
}

let subCategoryObj = null;
for (const prop of subCategoriesObj.properties) {
  if (ts.isPropertyAssignment(prop) && propKeyText(prop) === subName && ts.isObjectLiteralExpression(prop.initializer)) {
    subCategoryObj = prop.initializer;
    break;
  }
}
if (!subCategoryObj) {
  console.error(`Could not find sub-category "${subName}" inside subCategories in ${targetFile}`);
  process.exit(1);
}

// ── Guard against re-adding an artist that already resolves in this file ────
// (grow.mjs already checked the whole dictionary at proposal time, but the
// file may have changed since — e.g. an earlier merge in this same run.)
const existingKeys = new Set(subCategoryObj.properties.map(propKeyText).filter(Boolean));

// A single-quoted JS string can't contain a raw newline (or carriage
// return/tab) -- a model occasionally emits one inside a JSON string value
// (valid JSON, since JSON.parse decodes \n to an actual newline character),
// which then breaks the moment it's written back out unescaped. Collapsing
// whitespace runs also cleans up the more common case of a model wrapping
// a bio across soft-wrapped lines.
const quote = (s) => `'${String(s)
  .replace(/\\/g, '\\\\')
  .replace(/'/g, "\\'")
  .replace(/\s+/g, ' ')
  .trim()}'`;

// Two guards, not one: existingKeys catches "already in the file"; this
// second check catches a proposal repeating a name against ITSELF (grow.mjs
// dedupes its own output too, but a hand-edited or manually-rerun proposal
// file wouldn't have that behind it — this script has to be safe on its own).
const seenInThisBatch = new Set();
const toInsert = accepted.filter((a) => {
  if (existingKeys.has(a.name) || seenInThisBatch.has(a.name)) { return false; }
  seenInThisBatch.add(a.name);
  return true;
});
const skipped = accepted.length - toInsert.length;

if (toInsert.length === 0) {
  console.log(`All ${accepted.length} accepted entries already present in ${subName} — nothing to merge.`);
  process.exit(0);
}

const indent = '      '; // matches the file's existing 6-space entry indent
const entryBlocks = toInsert.map((a) => {
  const aliasesText = a.aliases && a.aliases.length ? a.aliases.map(quote).join(', ') : '';
  return `${indent}${quote(a.name)}: {\n${indent}  bio: ${quote(a.bio)},\n${indent}  aliases: [${aliasesText}],\n${indent}},\n`;
});
const entryText = entryBlocks.join('\n'); // blank line between entries, matching the file's own style

// Insert right at the START of the closing brace's own line, so its
// original indentation stays put instead of being orphaned on a blank
// line above it (walk back over the whitespace between the previous
// entry's newline and the '}' — never over anything else).
const closeBracePos = subCategoryObj.getEnd() - 1; // position of the closing '}'
let insertAt = closeBracePos;
while (insertAt > 0 && (source[insertAt - 1] === ' ' || source[insertAt - 1] === '\t')) { insertAt--; }
const before = source.slice(0, insertAt);
const after = source.slice(insertAt);
// Empty sub-category ('{}' with nothing between): no newline to land after,
// so make one instead of gluing the first entry onto the '{' line. Otherwise
// match the file's own convention of a blank line between every entry.
const lastChar = before[before.length - 1];
const leading = lastChar === '{' ? '\n' : lastChar === '\n' ? '\n' : '';
const updated = `${before}${leading}${entryText}${after}`;

writeFileSync(targetFile, updated);

console.log(`Merged ${toInsert.length} artist(s) into ${pillarName} › ${subName} (${targetFile.replace(root + '/', '')})`);
for (const a of toInsert) { console.log(`  + ${a.name}`); }
if (skipped > 0) { console.log(`  (${skipped} skipped — already present)`); }

unlinkSync(proposalPath);
