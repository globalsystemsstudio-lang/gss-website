import { plans, core, extras, links, money, filterPlans, recommend, comparisonRows } from './data.js';

const $ = selector => document.querySelector(selector);
const selected = new Set();
let need = 'all';
let lastDialogTrigger;
const iconPaths = {
  compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/>',
  home:'<path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8"/>',
  tree:'<path d="M12 22v-6M8 22h8M12 2 5 10h3l-5 7h18l-5-7h3L12 2Z"/>',
  laptop:'<rect x="4" y="3" width="16" height="13" rx="1"/><path d="m4 16-2 4h20l-2-4M10 8h4M12 6v4"/>',
  briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12c6 4 12 4 18 0M10 13h4v4h-4z"/>',
  building:'<path d="M4 21V4h10v17M14 9h6v12M2 21h20M7 8h4M7 12h4M7 16h4M17 12h1M17 16h1"/>'
};
const icon = p => `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[p.icon]}</svg>`;
const clock = '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6"/><path d="M8 4v4l3 2"/></svg>';
const external = 'target="_blank" rel="noopener noreferrer"';
const usersNote = p => p.id === 'family' ? ' · 2 users' : '';
function announce(text) { $('#announcer').textContent = text; }

function renderCards() {
  const visible = filterPlans({need,budget:$('#budget').value,access:$('#access').value});
  $('#result-count').textContent = visible.length === 6 ? 'Showing all 6 pathways' : `Showing ${visible.length} of 6 pathways`;
  $('#empty-state').hidden = visible.length > 0;
  $('#plan-grid').innerHTML = visible.map(p => `<article class="plan-card ${selected.has(p.id)?'selected':''}" data-plan="${p.id}" aria-labelledby="card-${p.id}">
    <div class="card-top"><span class="plan-icon">${icon(p)}</span><span class="card-index">0${plans.indexOf(p)+1} / 06</span></div>
    <p class="card-label">${p.label}</p><h3 id="card-${p.id}">${p.name}</h3><p class="persona">${p.persona}</p>
    <div class="price-line"><strong>${money(p.price)}</strong><span>USD · one-time</span></div>
    <div class="access-line">${clock}${p.months} months of dashboard access${usersNote(p)}</div>
    <ul class="card-features">${p.highlights.map(x=>`<li><span class="check" aria-hidden="true">✓</span>${x}</li>`).join('')}</ul>
    <button class="card-details" data-details="${p.id}" aria-label="Explore ${p.fullName||p.name} pathway">Explore ${p.name}<span aria-hidden="true">→</span></button>
    <button class="compare-button" data-compare="${p.id}" aria-pressed="${selected.has(p.id)}" aria-label="Compare ${p.name}"><span class="checkbox-icon" aria-hidden="true">${selected.has(p.id)?'✓':''}</span>${selected.has(p.id)?'Added to comparison':'Compare pathway'}</button>
  </article>`).join('');
}
function resetFilters() {
  need='all'; $('#budget').value='Infinity'; $('#access').value='0';
  document.querySelectorAll('[data-need]').forEach(b=>{b.classList.toggle('active',b.dataset.need==='all');b.setAttribute('aria-pressed',String(b.dataset.need==='all'));});
  renderCards();
}
function renderComparison() {
  const list = plans.filter(p=>selected.has(p.id));
  $('#selected-plans').innerHTML = list.length ? list.map(p=>`<span class="selection-pill">${p.name}<button data-remove="${p.id}" aria-label="Remove ${p.name} from comparison">×</button></span>`).join('') : '<span class="muted">Choose pathways using the Compare buttons above.</span>';
  $('#clear-compare').hidden=!list.length;
  $('#comparison-controls').hidden=list.length<2;
  $('#compare-tray').hidden=!list.length;
  $('#tray-count').textContent = `${list.length} pathway${list.length===1?'':'s'} selected`;
  $('#tray-names').textContent = list.map(p=>p.name).join(' · ');
  if(list.length<2) {
    $('#comparison-output').innerHTML=`<div class="comparison-placeholder"><span aria-hidden="true">⇄</span><h3>${list.length?'Add another pathway.':'Your shortlist starts here.'}</h3><p>${list.length?'Choose at least two plans for a side-by-side comparison.':'Select two or more pathways, or compare all six.'}</p><button class="button outline" data-action="compare-all">Compare all pathways →</button></div>`;
    return;
  }
  const rows = comparisonRows.filter(r=>!$('#differences').checked || new Set(list.map(p=>String(r.value(p)))).size>1);
  $('#comparison-output').innerHTML=`<div class="table-scroll" role="region" aria-label="Pathway comparison table; scroll horizontally for more plans" tabindex="0"><table class="comparison-table" style="min-width:${225+190*list.length}px"><caption class="sr-only">ROS pathway comparison. All prices are in USD.</caption><thead><tr><th scope="col">Compare your pathways</th>${list.map(p=>`<th scope="col">${p.name}<button data-details="${p.id}" aria-label="View ${p.name} details">View plan →</button></th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr><th scope="row">${r.label}</th>${list.map(p=>{const v=r.value(p);return `<td>${v===true?'<span class="included-yes">✓ Included</span>':v===false?'<span class="not-included">Not included</span>':v}</td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function setCompare(id,remove=false) {
  if(remove || selected.has(id)) selected.delete(id); else selected.add(id);
  renderCards(); renderComparison(); announce(`${selected.size} pathways selected for comparison.`);
}
function compareAll() {
  plans.forEach(p=>selected.add(p.id)); renderCards(); renderComparison();
  $('#comparison').scrollIntoView({behavior:'smooth'}); announce('All six pathways selected. Comparison ready.');
}
function showDetails(id,trigger) {
  const p=plans.find(p=>p.id===id); if(!p)return;
  lastDialogTrigger=trigger || document.activeElement;
  $('#dialog-content').innerHTML=`<div class="dialog-header"><p class="eyebrow">ROS™ / ${p.label}</p><h2 id="dialog-title">${p.fullName||p.name}</h2><p>${p.need}</p></div>
    <div class="dialog-layout"><div class="dialog-main"><h3>Your core resources</h3><ul>${core.map(x=>`<li><span class="check" aria-hidden="true">✓</span>${x}</li>`).join('')}</ul>
    ${p.groups.map(group=>`<h3>${group==='family'?'Family-specific additions':`Added ${group.charAt(0).toUpperCase()+group.slice(1)} resources`}</h3><ul>${extras[group].map(x=>`<li><span class="check" aria-hidden="true">✓</span>${x}</li>`).join('')}</ul>`).join('')}
    ${p.id!=='family'?'<p class="family-note">Two-user access and school and childcare resources are available with Family Edition only.</p>':''}
    </div><aside class="dialog-sidebar" aria-label="Price and next step"><div class="price-line"><strong>${money(p.price)}</strong><span>USD once</span></div><div class="access-line">${clock}${p.months} months${usersNote(p)}</div>
    <p>Access to your online planning space in Notion and all resources listed here.</p>
    <a class="button primary" href="https://www.paypal.com/ncp/payment/${p.paypal}" ${external}>Choose ${p.name} <span aria-hidden="true">→</span></a>
    <a class="button outline" href="${links.call}" ${external}>Explore a free Discovery Call →</a>
    <p class="policy">Checkout opens on PayPal. All sales are final; no refunds. <a href="${links.policy}" ${external}>Read the sales policy.</a></p>
    <div class="activation-list"><strong>After you purchase</strong><p>1. Complete payment.<br>2. Sign your agreement.<br>3. GSS follows up to set up your planning space.</p><p>Your access period starts after payment and a signed agreement.</p></div>
    <p class="renewal"><strong>Optional renewal: ${money(p.renewal)} USD</strong>No required subscription. Confirm renewal duration and terms before paying.</p>
    <p class="policy">Professional fees, government fees and moving expenses are separate. These are educational resources; consult licensed professionals for advice.</p></aside></div>`;
  $('#plan-dialog').showModal(); $('#plan-dialog').scrollTop=0; $('#close-dialog').focus();
}
function showRecommendation(event) {
  event.preventDefault();
  const result=recommend({goal:$('#goal').value,household:$('#household').value,stage:$('#stage').value});
  const p=result.plan;
  const action=result.action==='quiz'?`<a class="button gold" href="${links.quiz}" ${external}>Start with the free readiness quiz →</a>`:result.action==='call'?`<a class="button gold" href="${links.call}" ${external}>Explore a free Discovery Call →</a>`:`<button class="button gold" data-details="${p.id}">See ${p.name} and next steps →</button>`;
  $('#recommendation').hidden=false;
  $('#recommendation').innerHTML=`<div class="finder-result"><p class="result-kicker">YOUR SUGGESTED STARTING POINT</p><h3>${p.fullName||p.name}</h3><p>${p.persona} Your plan includes ${p.highlights[0].toLowerCase()}.</p><p class="result-price">${money(p.price)} USD once · ${p.months} months${usersNote(p)}</p>${result.secondary?'<p class="result-secondary">You’re also moving together. Only Family includes two-user access and school and childcare tools. Compare it with your suggested plan and discuss both needs with GSS.</p>':''}${action}<p style="margin-top:13px;margin-bottom:7px"><button data-details="${p.id}">Review all ${p.name} inclusions →</button></p>${result.secondary?`<button data-pair="${p.id}">Compare ${p.name} with Family →</button>`:''}<p style="margin:12px 0 0;font-size:10px">A planning suggestion based on your choices, not an eligibility assessment.</p></div>`;
  announce(`${p.name} is your suggested starting point.`);
}

$('#need-filters').addEventListener('click',event=>{
  const button=event.target.closest('[data-need]'); if(!button)return;
  need=button.dataset.need;
  document.querySelectorAll('[data-need]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  renderCards();
});
$('#budget').addEventListener('change',renderCards);
$('#access').addEventListener('change',renderCards);
$('#reset-filters').addEventListener('click',resetFilters);
$('#finder-form').addEventListener('submit',showRecommendation);
$('#differences').addEventListener('change',renderComparison);
$('#clear-compare').addEventListener('click',()=>{selected.clear();renderCards();renderComparison();announce('Comparison cleared.');});
$('#view-comparison').addEventListener('click',()=>$('#comparison').scrollIntoView({behavior:'smooth'}));
$('#close-dialog').addEventListener('click',()=>$('#plan-dialog').close());
$('#plan-dialog').addEventListener('click',event=>{if(event.target===$('#plan-dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)event.target.close();}});
$('#plan-dialog').addEventListener('close',()=>{if(lastDialogTrigger?.isConnected)lastDialogTrigger.focus();});
document.addEventListener('click',event=>{
  const detail=event.target.closest('[data-details]');if(detail){showDetails(detail.dataset.details,detail);return;}
  const compare=event.target.closest('[data-compare]');if(compare){const id=compare.dataset.compare;setCompare(id);document.querySelector(`[data-compare="${id}"]`)?.focus({preventScroll:true});return;}
  const remove=event.target.closest('[data-remove]');if(remove){setCompare(remove.dataset.remove,true);return;}
  const pair=event.target.closest('[data-pair]');if(pair){selected.clear();selected.add(pair.dataset.pair);selected.add('family');renderCards();renderComparison();$('#comparison').scrollIntoView({behavior:'smooth'});return;}
  const action=event.target.closest('[data-action]');if(action?.dataset.action==='compare-all')compareAll();if(action?.dataset.action==='reset')resetFilters();
});
$('#core-list').innerHTML=core.map(x=>`<div class="core-item"><span aria-hidden="true">✓</span><span>${x}</span></div>`).join('');
renderCards();renderComparison();
