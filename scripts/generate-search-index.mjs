import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve('app');
const pages = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!entry.name.startsWith('_') && !entry.name.includes('[') && entry.name !== 'access') walk(file);
    } else if (/^page\.(jsx?|tsx?)$/.test(entry.name)) {
      const source = fs.readFileSync(file, 'utf8');
      if (/index:\s*false|noindex/.test(source)) continue;
      const parts = path.relative(root, dir).split(path.sep).filter(p => p && !p.startsWith('('));
      if (!parts.length || parts[0] === 'search') continue;
      const match = source.match(/(?:const title\s*=\s*|title:\s*)(['"`])([^'"`]+)\1/);
      const title = match?.[2] || parts[parts.length-1].replaceAll('-', ' ');
      pages.push({title, path: '/' + parts.join('/') + '/'});
    }
  }
}
walk(root);
pages.push(
  {title:'ROS 90-Day Relocation Action Planner · $47', path:'/shop/#ros-90-day-relocation-action-planner'},
  {title:'Country Comparison Decision Matrix · $19', path:'/shop/#country-comparison-decision-matrix'},
  {title:'Relocation Readiness Workbook · $27', path:'/shop/#ros-relocation-readiness-workbook'},
  {title:'Family Relocation Planning Workbook · $47', path:'/shop/#family-relocation-planning-workbook'},
  {title:'International Relocation Document Organizer · $19', path:'/shop/#international-relocation-document-organizer'}
);
fs.writeFileSync('public/search-index.json', JSON.stringify(pages));
console.log(`Search index: ${pages.length} public pages`);
