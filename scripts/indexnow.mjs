// Usage: node scripts/indexnow.mjs <url> [<url> ...]   (no args = every URL in public/sitemap.xml)
import fs from 'fs';
const HOST = 'globalsystemsstudio.com';
const KEY = '26bc8cc430987a0a4c15408e72c0a82d';
let urls = process.argv.slice(2);
if (!urls.length) {
  const xml = fs.readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
}
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log('IndexNow', res.status, urls.length, 'urls');
