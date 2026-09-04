// Shared helper for the examples: bundles the TypeScript source with esbuild so
// the demos run on plain Node with no build step or install ceremony.
// Real consumers just `import { classifyTrack } from 'alchemy'` — this exists
// only because the repo ships source rather than a compiled dist.
import { execSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

export async function build() {
  const workDir = mkdtempSync(join(tmpdir(), 'alchemy-example-'));
  const bundlePath = join(workDir, 'alchemy.mjs');
  try {
    execSync(
      `npx esbuild src/index.ts --bundle --format=esm --platform=node ` +
      `--outfile=${JSON.stringify(bundlePath)}`,
      { cwd: root, stdio: ['ignore', 'ignore', 'inherit'] },
    );
    return await import(pathToFileURL(bundlePath).href);
  } finally {
    // The module stays loaded in memory; the temp file is no longer needed.
    setTimeout(() => rmSync(workDir, { recursive: true, force: true }), 0).unref?.();
  }
}
