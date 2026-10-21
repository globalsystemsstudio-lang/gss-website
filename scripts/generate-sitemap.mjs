import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve('app');
const routes = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!entry.name.startsWith('_') && !entry.name.includes('[') && entry.name !== 'access') walk(file);
    } else if (/^page\.(jsx?|tsx?)$/.test(entry.name)) {
      const source = fs.readFileSync(file, 'utf8');
      if (/index:\s*false|noindex/.test(source)) continue;
      const route = path.relative(root, dir).split(path.sep).filter(p => p && !p.startsWith('(')).join('/');
      routes.push(`https://globalsystemsstudio.com/${route ? route + '/' : ''}`);
    }
  }
}
walk(root);
routes.sort();
fs.writeFileSync('public/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map(url => `  <url><loc>${url}</loc></url>`).join('\n') + '\n</urlset>\n');
console.log(`Sitemap: ${routes.length} public pages`);
