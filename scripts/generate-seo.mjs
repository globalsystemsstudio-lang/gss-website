/**
 * Post-build SEO artifact generator.
 *
 * Reads the static export in out/ and writes sitemap.xml + llms.txt from the
 * pages that were actually emitted. Deriving them from the build output rather
 * than a hand-maintained list means a new page is picked up the moment it ships.
 *
 * Run via `npm run build` (next build && node scripts/generate-seo.mjs).
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, writeFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const OUT = 'out';
const ORIGIN = 'https://www.globalsystemsstudio.com';
const BRAND = 'Global Systems Studio';

/* ---------- route classification ---------------------------------------- */

// Ordered: first matching rule wins.
const RULES = [
  { test: (r) => r === '/',                    section: 'Start Here',          priority: '1.0', changefreq: 'weekly'  },
  { test: (r) => r === '/blog/',               section: 'Blog',                priority: '0.8', changefreq: 'weekly'  },
  { test: (r) => r.startsWith('/blog/'),       section: 'Blog',                priority: '0.7', changefreq: 'monthly' },
  { test: (r) => r.startsWith('/services/'),   section: 'Services & Pathways', priority: '0.8', changefreq: 'monthly' },
  { test: (r) => r === '/services/',           section: 'Services & Pathways', priority: '0.9', changefreq: 'monthly' },
  { test: (r) => r.startsWith('/shop/'),       section: 'Books & Guides',      priority: '0.8', changefreq: 'monthly' },
  { test: (r) => ['/cost-of-living-calculator/', '/relocation-readiness-quiz/'].includes(r),
                                               section: 'Tools',               priority: '0.7', changefreq: 'monthly' },
  { test: (r) => ['/what-is-ros/', '/work-with-me/'].includes(r),
                                               section: 'Start Here',          priority: '0.9', changefreq: 'monthly' },
  { test: (r) => ['/our-story/', '/who-its-for/', '/why-you-need-this/'].includes(r),
                                               section: 'Start Here',          priority: '0.8', changefreq: 'monthly' },
  { test: (r) => ['/relocation-financial-planning/', '/visa-residency-pathways/',
                  '/international-relocation-consultancy/',
                  '/financial-planning-international-relocation/', '/resources/'].includes(r),
                                               section: 'Guides & Resources',  priority: '0.8', changefreq: 'monthly' },
];
const DEFAULT_RULE = { section: 'More', priority: '0.7', changefreq: 'monthly' };

const SECTION_ORDER = [
  'Start Here',
  'Services & Pathways',
  'Books & Guides',
  'Guides & Resources',
  'Blog',
  'Tools',
  'More',
];

const classify = (route) => RULES.find((rule) => rule.test(route)) ?? DEFAULT_RULE;

// Emitted by the export but not real content: error pages and the gated area
// that robots.txt already disallows.
const EXCLUDE = [/^\/404\//, /^\/500\//, /^\/access\//];
const isIndexable = (route) => !EXCLUDE.some((re) => re.test(route));

/* ---------- extraction --------------------------------------------------- */

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", '#x27': "'" };
const decode = (s) =>
  s.replace(/&(amp|lt|gt|quot|#39|#x27);/g, (_, e) => ENTITIES[e]);

function meta(html, name) {
  // Next emits attributes in either order depending on the tag.
  const patterns = [
    new RegExp(`<meta name="${name}" content="([^"]*)"`),
    new RegExp(`<meta content="([^"]*)" name="${name}"`),
  ];
  for (const p of patterns) {
    const m = html.match(p);
    if (m) return decode(m[1]);
  }
  return '';
}

function collectPages(dir = OUT, found = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_next') continue;
      collectPages(path, found);
    } else if (entry.name === 'index.html') {
      found.push(path);
    }
  }
  return found;
}

// Source file backing a route, used for the git-derived lastmod.
const sourceFor = (route) =>
  join('app', route === '/' ? '' : route.slice(1, -1), 'page.jsx');

let gitAvailable = true;
function lastModified(route) {
  if (!gitAvailable) return null;
  const file = sourceFor(route);
  try {
    statSync(file);
    const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : null;
  } catch {
    // Shallow clone, no git, or a route with no 1:1 source file — lastmod is
    // optional in the sitemap spec, so drop it rather than emitting a guess.
    return null;
  }
}

/* ---------- build the page list ------------------------------------------ */

const pages = collectPages()
  .map((file) => {
    const html = readFileSync(file, 'utf8');
    const dir = relative(OUT, file).replace(/index\.html$/, '');
    const route = '/' + dir.replace(/\\/g, '/');
    const rawTitle = decode((html.match(/<title>([^<]*)<\/title>/) ?? [, ''])[1]);

    return {
      route,
      url: ORIGIN + route,
      // Strip the brand suffix the layout template appends — llms.txt reads
      // better as bare page names.
      title: rawTitle.replace(new RegExp(`\\s*\\|\\s*${BRAND}$`), '').trim() || BRAND,
      description: meta(html, 'description'),
      ...classify(route),
    };
  })
  .filter((p) => isIndexable(p.route))
  .sort((a, b) => a.route.localeCompare(b.route));

if (pages.length === 0) {
  console.error('generate-seo: no pages found in out/ — did next build run?');
  process.exit(1);
}

/* ---------- sitemap.xml -------------------------------------------------- */

const escapeXml = (s) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((p) => {
    const lastmod = lastModified(p.route);
    return (
      `  <url><loc>${escapeXml(p.url)}</loc>` +
      (lastmod ? `<lastmod>${lastmod}</lastmod>` : '') +
      `<changefreq>${p.changefreq}</changefreq>` +
      `<priority>${p.priority}</priority></url>`
    );
  }),
  '</urlset>',
  '',
].join('\n');

writeFileSync(join(OUT, 'sitemap.xml'), sitemap);

/* ---------- llms.txt ----------------------------------------------------- */

const lines = [
  `# ${BRAND}`,
  '',
  '> ROS™ — the Relocation Operating System — is step-by-step infrastructure for U.S. persons',
  '> relocating internationally: seven modules, six tiers, covering legal and visa pathways,',
  '> cross-border financial planning, healthcare, housing, income, and community.',
  '',
  'Global Systems Studio (CC Transaction Services, LLC) publishes destination guides and',
  'U.S.-specific relocation guidance across 130+ destinations, and sells ROS™ pathway programs,',
  'consulting sessions, and books. Content is written for people who have already decided to',
  'move and need sequenced, practical answers — not inspiration.',
  '',
  'Guidance here is educational and is not legal, tax, or investment advice.',
  '',
];

for (const section of SECTION_ORDER) {
  const inSection = pages.filter((p) => p.section === section);
  if (inSection.length === 0) continue;
  lines.push(`## ${section}`, '');
  for (const p of inSection) {
    lines.push(`- [${p.title}](${p.url})${p.description ? `: ${p.description}` : ''}`);
  }
  lines.push('');
}

writeFileSync(join(OUT, 'llms.txt'), lines.join('\n'));

const withLastmod = sitemap.split('\n').filter((l) => l.includes('<lastmod>')).length;
console.log(
  `generate-seo: ${pages.length} pages → sitemap.xml (${withLastmod} with lastmod), llms.txt`
);
