import fs from 'node:fs';

const directory = 'public/pricing-explorer';
const source = fs.readFileSync(`${directory}/data.js`, 'utf8');
const { plans, core, money } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const clock = '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6"/><path d="M8 4v4l3 2"/></svg>';
const icons = {
  compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/>',
  home:'<path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8"/>',
  tree:'<path d="M12 22v-6M8 22h8M12 2 5 10h3l-5 7h18l-5-7h3L12 2Z"/>',
  laptop:'<rect x="4" y="3" width="16" height="13" rx="1"/><path d="m4 16-2 4h20l-2-4M10 8h4M12 6v4"/>',
  briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12c6 4 12 4 18 0M10 13h4v4h-4z"/>',
  building:'<path d="M4 21V4h10v17M14 9h6v12M2 21h20M7 8h4M7 12h4M7 16h4M17 12h1M17 16h1"/>'
};
const cards = plans.map((p,i)=>`<article class="plan-card" data-plan="${p.id}" aria-labelledby="card-${p.id}">
  <div class="card-top"><span class="plan-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${icons[p.icon]}</svg></span><span class="card-index">0${i+1} / 06</span></div>
  <p class="card-label">${p.label}</p><h3 id="card-${p.id}">${p.name}</h3><p class="persona">${p.persona}</p>
  <div class="price-line"><strong>${money(p.price)}</strong><span>USD · one-time</span></div>
  <div class="access-line">${clock}${p.months} months of dashboard access${p.id==='family'?' · 2 users':''}</div>
  <ul class="card-features">${p.highlights.map(x=>`<li><span class="check" aria-hidden="true">✓</span>${x}</li>`).join('')}</ul>
  <button class="card-details" data-details="${p.id}" aria-label="Explore ${p.fullName||p.name} pathway">Explore ${p.name}<span aria-hidden="true">→</span></button>
  <button class="compare-button" data-compare="${p.id}" aria-pressed="false" aria-label="Compare ${p.name}"><span class="checkbox-icon" aria-hidden="true"></span>Compare pathway</button>
</article>`).join('\n');
let html=fs.readFileSync(`${directory}/index.html`,'utf8');
const replaceRegion=(id,value)=>{const pattern=new RegExp(`(<div[^>]*id="${id}"[^>]*>)[\\s\\S]*?(<!-- ${id}:end -->)`);if(!pattern.test(html))throw new Error(`Missing static region: ${id}`);html=html.replace(pattern,(_,open,end)=>open+value+end);};
replaceRegion('plan-grid',cards);
replaceRegion('core-list',core.map(x=>`<div class="core-item"><span aria-hidden="true">✓</span><span>${x}</span></div>`).join(''));
const structured={
 '@context':'https://schema.org','@type':'WebPage',
 '@id':'https://globalsystemsstudio.com/pricing-explorer/#webpage',
 url:'https://globalsystemsstudio.com/pricing-explorer/',name:'ROS™ Pricing Explorer',
 description:'Compare six relocation planning pathways, one-time prices, access periods and key inclusions.',
 publisher:{'@id':'https://globalsystemsstudio.com/#organization','@type':'Organization',name:'Global Systems Studio',url:'https://globalsystemsstudio.com/'},
 mainEntity:{'@type':'ItemList',itemListElement:plans.map((p,i)=>({'@type':'ListItem',position:i+1,url:`https://globalsystemsstudio.com/services/${p.slug}/`,name:`ROS™ ${p.fullName||p.name}`,description:`${money(p.price)} USD one-time payment. ${p.months} months of dashboard access${p.id==='family'?' for two users':''}. ${p.need}`}))}
};
html=html.replace(/<script id="explorer-schema" type="application\/ld\+json">[\s\S]*?<\/script>/,`<script id="explorer-schema" type="application/ld+json">${JSON.stringify(structured)}</script>`);
fs.writeFileSync(`${directory}/index.html`,html);
console.log('Pricing explorer: 6 static plan cards, core resources and structured data generated');
