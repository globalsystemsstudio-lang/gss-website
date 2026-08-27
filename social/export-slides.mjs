// Export each carousel slide to a 1080x1350 PNG.
//   npm i -D playwright && node social/export-slides.mjs social/carousel-001-before-you-book-the-flight.html
// Slides need the Google Fonts stylesheet, so run this online. Output lands in social/out/.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { pathToFileURL } from 'node:url';

const file = process.argv[2] || 'social/carousel-001-before-you-book-the-flight.html';
const outDir = resolve('social/out');
const stem = basename(file).replace(/\.html$/, '');

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(resolve(file)).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.body.classList.add('export'));
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);

const slides = await page.$$('.slide');
for (let i = 0; i < slides.length; i++) {
  const out = resolve(outDir, `${stem}-${String(i + 1).padStart(2, '0')}.png`);
  await slides[i].screenshot({ path: out });
  console.log('wrote', out);
}
await browser.close();
