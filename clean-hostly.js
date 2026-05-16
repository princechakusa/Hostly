/**
 * ============================================
 *   HOSTLY FULL PROJECT CODE CLEANER
 *   Run: node clean-hostly.js
 *   From: C:\Users\Surface\OneDrive\Desktop\hostly-app\
 * ============================================
 *
 * WHAT THIS CLEANS ACROSS ALL FILES:
 *
 *  1. BOM characters       => \uFEFF  causes "i>>?" prefix on text
 *  2. Zero-width spaces    => \u200B, \u200C, \u200D, \u2060
 *  3. Soft hyphen          => \u00AD
 *  4. Replacement char     => \uFFFD
 *  5. Null bytes           => \u0000
 *  6. ASCII control chars  => except tab, newline, carriage return
 *  7. Mojibake sequences   => a??? a?? a??° etc.
 *     (UTF-8 chars misread as Latin-1 - the "a??°" next to Prince Chakusa)
 *
 * FILES SCANNED:
 *   www/**\/*.html, .js, .css, .json
 *   Root config files: capacitor.config.*, package.json
 */

const fs   = require('fs');
const path = require('path');

const PROJECT_ROOT = __dirname;

// ─── JUNK PATTERNS ───────────────────────────────────────────────────────────

// Invisible / control characters
const INVISIBLE = /[\uFEFF\u200B\u200C\u200D\u00AD\u2060\uFFFD\u0000\x00-\x08\x0B\x0C\x0E-\x1F]/g;

// Mojibake map: [find, replace]
// These are UTF-8 characters that got mis-saved/mis-read as Latin-1
const MOJIBAKE_MAP = [
  // Smart quotes
  ['\u00e2\u0080\u009c', '"'],
  ['\u00e2\u0080\u009d', '"'],
  ['\u00e2\u0080\u0098', "'"],
  ['\u00e2\u0080\u0099', "'"],
  // String versions that appear in source files
  ['â\u0080\u009c', '"'],
  ['â\u0080\u009d', '"'],
  ['â\u0080\u0098', "'"],
  ['â\u0080\u0099', "'"],
  // Dashes
  ['â€"', '-'],
  ['â€"', '-'],
  ['â\u0080\u0093', '-'],
  ['â\u0080\u0094', '-'],
  // Ellipsis
  ['â€¦', '...'],
  ['â\u0080\u00a6', '...'],
  // Bullet
  ['â€¢', '-'],
  ['â\u0080\u00a2', '-'],
  // Per mille / stray symbol (the one visible next to your name)
  ['', ''],
  ['â\u0080\u00b0', ''],
  // Trademarks
  ['â„¢', 'TM'],
  ['Â©', '(c)'],
  ['Â®', '(R)'],
  // Middle dot
  ['Â·', '-'],
  // Non-breaking space rendered wrong
  ['Â ', ' '],
  // Arrows
  ['â†\'', '->'],
  ['â†"', '<-'],
  // Lone stray Â before whitespace or end
  ['Â', ''],
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function cleanContent(src) {
  let out = src;
  out = out.replace(INVISIBLE, '');
  for (const [find, replace] of MOJIBAKE_MAP) {
    if (!find) continue;
    const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(new RegExp(escaped, 'g'), replace);
  }
  return out;
}

function walkDir(dir, exts, results = []) {
  if (!fs.existsSync(dir)) return results;
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
  catch (e) { return results; }

  for (const e of entries) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.git', 'build', 'dist', '.gradle', '.idea'].includes(e.name)) continue;
      walkDir(fp, exts, results);
    } else if (exts.includes(path.extname(e.name).toLowerCase())) {
      results.push(fp);
    }
  }
  return results;
}

function processFile(fp) {
  let src;
  try { src = fs.readFileSync(fp, 'utf8'); }
  catch (e) { return { skipped: true, reason: 'unreadable' }; }

  const cleaned = cleanContent(src);
  const diff = src.length - cleaned.length;
  if (diff === 0) return { cleaned: false };

  const tmp = fp + '.__tmp__';
  try {
    fs.writeFileSync(tmp, cleaned, 'utf8');
    fs.renameSync(tmp, fp);
  } catch (e) {
    if (fs.existsSync(tmp)) try { fs.unlinkSync(tmp); } catch (_) {}
    return { skipped: true, reason: e.message };
  }
  return { cleaned: true, diff };
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

console.log('');
console.log('==========================================');
console.log('  HOSTLY FULL PROJECT CODE CLEANER');
console.log('==========================================');
console.log('');
console.log('  Root:', PROJECT_ROOT);
console.log('');

const allFiles = new Set();

// www/ — all HTML, JS, CSS, JSON
walkDir(path.join(PROJECT_ROOT, 'www'), ['.html', '.js', '.css', '.json'])
  .forEach(f => allFiles.add(f));

// standalone js/ if it exists outside www/
walkDir(path.join(PROJECT_ROOT, 'js'), ['.js'])
  .forEach(f => allFiles.add(f));

// standalone css/ if it exists outside www/
walkDir(path.join(PROJECT_ROOT, 'css'), ['.css'])
  .forEach(f => allFiles.add(f));

// Root config files
['capacitor.config.ts', 'capacitor.config.js', 'package.json']
  .map(n => path.join(PROJECT_ROOT, n))
  .filter(fs.existsSync)
  .forEach(f => allFiles.add(f));

const list = [...allFiles];
console.log('  Scanning', list.length, 'files...\n');

let nCleaned = 0;
let nSkipped = 0;
let nChars   = 0;
const cleaned = [];

for (const fp of list) {
  const rel = path.relative(PROJECT_ROOT, fp).replace(/\\/g, '/');
  const res = processFile(fp);
  if (res.skipped) {
    nSkipped++;
    console.log('  SKIP     ' + rel + '  (' + res.reason + ')');
  } else if (res.cleaned) {
    nCleaned++;
    nChars += res.diff;
    cleaned.push({ rel, diff: res.diff });
    console.log('  CLEANED  ' + rel + '  (removed ' + res.diff + ' junk char(s))');
  }
}

console.log('');
console.log('==========================================');
console.log('  SUMMARY');
console.log('==========================================');
console.log('  Files scanned : ' + list.length);
console.log('  Files cleaned : ' + nCleaned);
console.log('  Files skipped : ' + nSkipped);
console.log('  Chars removed : ' + nChars);
console.log('');

if (nCleaned === 0) {
  console.log('  All files are already clean!');
} else {
  console.log('  Cleaned files:');
  for (const { rel, diff } of cleaned) {
    console.log('    - ' + rel + ' (' + diff + ' chars removed)');
  }
  console.log('');
  console.log('  DONE. Next steps:');
  console.log('    1. Test the app in browser');
  console.log('    2. Run: npx cap sync android');
  console.log('    3. Rebuild APK');
}
console.log('');