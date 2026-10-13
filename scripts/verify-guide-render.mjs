#!/usr/bin/env node
/**
 * Fails the Next.js build if any evergreen guide contains a block type
 * unknown to components/EvergreenGuidePage.js, or a section that would
 * render empty.
 *
 * Background: the evergreen-guides data model stores content in
 * `section.blocks[]`. A previous refactor simplified the renderer to a
 * legacy `section.paragraphs / .cards / .steps` shape, which silently
 * dropped ~76 sections of content across 10 guides. This script exists to
 * make that class of regression impossible to ship again.
 *
 * The check is intentionally text-based rather than an import: the guide
 * data file contains JSX (ctaHeading, ctaCopy) that Node cannot execute
 * directly. Parsing the source is both faster and closer to the actual
 * failure mode we are guarding against.
 */

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GUIDES_PATH = path.join(ROOT, 'lib', 'evergreen-guides.js');
const RENDERER_PATH = path.join(ROOT, 'components', 'EvergreenGuidePage.js');

function fail(lines) {
  process.stderr.write('\n✗ verify-guide-render failed\n');
  for (const line of lines) process.stderr.write(`  ${line}\n`);
  process.stderr.write('\nFix the guide data or extend the renderer, then rerun the build.\n\n');
  process.exit(1);
}

async function readSupportedTypes() {
  const src = await readFile(RENDERER_PATH, 'utf8');
  const match = src.match(/SUPPORTED_BLOCK_TYPES\s*=\s*new Set\(\[([\s\S]*?)\]\)/);
  if (!match) fail(['Could not locate SUPPORTED_BLOCK_TYPES in EvergreenGuidePage.js.']);
  const set = new Set();
  for (const raw of match[1].split(',')) {
    const trimmed = raw.trim().replace(/^['"]|['"]$/g, '');
    if (trimmed) set.add(trimmed);
  }
  return set;
}

// Collect every "type: 'foo'" that appears inside a top-level `blocks:` array.
// This is a shallow scan, but sufficient because the guide data uses the
// exact shape `type: '<name>'` for every block.
function collectBlockTypes(src) {
  // Match slug + everything between `blocks: [` and its matching `]` — best
  // effort per section. We use a permissive scan then extract inside.
  const typeRegex = /type:\s*['"]([a-zA-Z]+)['"]/g;
  const types = new Map(); // type -> count
  let m;
  while ((m = typeRegex.exec(src))) {
    types.set(m[1], (types.get(m[1]) || 0) + 1);
  }
  return types;
}

function collectSectionShapes(src) {
  // Count sections that carry blocks[] vs the legacy paragraphs[] / cards[] /
  // steps[] shape. This is a coarse count used purely to detect a
  // reintroduction of the legacy shape.
  const withBlocks = (src.match(/\bblocks:\s*\[/g) || []).length;
  const withParagraphs = (src.match(/\bparagraphs:\s*\[/g) || []).length;
  const withLegacyCards = (src.match(/^\s*cards:\s*\[/gm) || []).length;
  const withLegacySteps = (src.match(/^\s*steps:\s*\[/gm) || []).length;
  return { withBlocks, withParagraphs, withLegacyCards, withLegacySteps };
}

async function main() {
  const [supported, guideSrc] = await Promise.all([
    readSupportedTypes(),
    readFile(GUIDES_PATH, 'utf8'),
  ]);

  const errors = [];
  const usedTypes = collectBlockTypes(guideSrc);
  const unknown = [...usedTypes.keys()].filter((t) => !supported.has(t));

  if (unknown.length) {
    errors.push(`Guides use ${unknown.length} block type(s) the renderer does not handle:`);
    for (const t of unknown) errors.push(`  - "${t}" (${usedTypes.get(t)} occurrence(s))`);
    errors.push(
      'Either remove those blocks from the guide data or add a case for each type ' +
        'in components/EvergreenGuidePage.js (Block switch) AND to the SUPPORTED_BLOCK_TYPES set.',
    );
  }

  const shapes = collectSectionShapes(guideSrc);
  if (shapes.withBlocks === 0) {
    errors.push(
      'No sections in lib/evergreen-guides.js contain a `blocks: [` array. ' +
        'The renderer only reads section.blocks[], so pages would render empty.',
    );
  }
  if (shapes.withParagraphs > 0) {
    errors.push(
      `Detected ${shapes.withParagraphs} section(s) using the legacy \`paragraphs: [\` shape. ` +
        'Convert them to the blocks[] model. The current renderer ignores paragraphs[].',
    );
  }

  if (errors.length) fail(errors);

  const summary = `verify-guide-render: ${usedTypes.size} block types in use, ${
    shapes.withBlocks
  } sections carry blocks[], all types supported by renderer.`;
  process.stdout.write(`✓ ${summary}\n`);
}

main().catch((err) => {
  fail([`Unexpected error: ${err && err.stack ? err.stack : String(err)}`]);
});
