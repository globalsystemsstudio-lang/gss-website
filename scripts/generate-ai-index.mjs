// Run after Next's static export so the AI index uses the rendered public content.
import fs from 'node:fs';
import path from 'node:path';

const base = 'https://globalsystemsstudio.com';
const decode = (s) => s.replace(/&#(x[0-9a-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1), 16) : Number(n)))
  .replace(/&quot;/g, '"').replace(/&apos;|&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const plain = (s) => decode(s.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
function articleBody(html) {
  const start = /<div\b[^>]*class="[^"]*\barticle-body\b[^"]*"[^>]*>/i.exec(html);
  if (!start) throw new Error('Missing rendered article-body');
  const rest = html.slice(start.index + start[0].length);
  let depth = 1;
  for (const m of rest.matchAll(/<\/?div\b[^>]*>/gi)) {
    depth += m[0].startsWith('</') ? -1 : 1;
    if (!depth) return rest.slice(0, m.index);
  }
  throw new Error('Unclosed article-body');
}
function toText(html) {
  return decode(html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<h([1-6])\b[^>]*>/gi, (_, n) => '\n\n' + '#'.repeat(Number(n)) + ' ')
    .replace(/<li\b[^>]*>/gi, '\n- ')
    .replace(/<br\s*\/?>|<\/(?:p|h[1-6]|ul|ol|table|tr|div)>/gi, '\n\n')
    .replace(/<\/(?:td|th)>/gi, ' | ')
    .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, url, label) => `${plain(label)} (${url.startsWith('/') ? base + url : decode(url)})`)
    .replace(/<[^>]*>/g, ''))
    .replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}
const posts = fs.readdirSync('out/blog', { withFileTypes: true }).filter(e => e.isDirectory() && fs.existsSync(path.join('out/blog', e.name, 'index.html'))).map(e => {
  const html = fs.readFileSync(path.join('out/blog', e.name, 'index.html'), 'utf8');
  if (/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html)) return null;
  const title = plain(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '');
  const description = decode(html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]*)"/i)?.[1] || '');
  const url = `${base}/blog/${e.name}/`;
  if (!title) throw new Error(`Missing H1: ${url}`);
  return { title, description, url, text: toText(articleBody(html)) };
}).filter(Boolean).sort((a, b) => a.title.localeCompare(b.title));
if (!posts.length) throw new Error('No exported articles found');
const old = fs.readFileSync('public/llms.txt', 'utf8');
const intro = old.split('## Blog posts')[0].trimEnd();
const index = `${intro}\n\n## Blog posts\n\nFull article text: ${base}/llms-full.txt\n\n${posts.map(p => `- [${p.title}](${p.url}): ${p.description}`).join('\n')}\n`;
const full = '# Global Systems Studio: full public blog articles\n\n> Educational relocation planning content. Not legal, tax, immigration or investment advice. Canonical articles remain the source of record. Index: ' + base + '/llms.txt\n\n' + posts.map(p => `## ${p.title}\nURL: ${p.url}\n\n${p.text}`).join('\n\n---\n\n') + '\n';
for (const dir of ['public', 'out']) {
  fs.writeFileSync(path.join(dir, 'llms.txt'), index);
  fs.writeFileSync(path.join(dir, 'llms-full.txt'), full);
}
console.log(`AI index: ${posts.length} complete public articles`);
