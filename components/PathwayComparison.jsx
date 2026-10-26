'use client';
import { useState } from 'react';
import Link from 'next/link';
import { tiers, commonFeatures, compareRows, money } from '../lib/ros-data';
import { trackEvent } from '../lib/analytics';

const choices = [
  ['all', 'Compare all six plans'], ['solo', 'Moving on my own'], ['family', 'Moving with family'],
  ['nomad', 'Working remotely'], ['entrepreneur', 'Running a business'], ['legacy', 'Planning a lasting home'], ['investor', 'Investing across borders'],
];
export default function PathwayComparison() {
  const [focus, setFocus] = useState('all');
  const shown = focus === 'all' ? tiers : tiers.filter(t => t.id === focus);
  return <>
    <label className="field-label" htmlFor="pathway-focus">What are you planning?</label>
    <select id="pathway-focus" className="pathway-select" value={focus} onChange={e => {
      setFocus(e.target.value); trackEvent('pathway_filter', { pathway: e.target.value });
    }}>{choices.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
    <p className="help-note" aria-live="polite">{focus === 'all' ? 'Compare the six online plans below. Pay once in USD for the access period shown.' : 'This plan may fit your answer. If you have more than one need, ask us on a free call.'}</p>
    <div className="pathway-grid">{shown.map(t => <article className="pathway-card" key={t.id}>
      <p className="eyebrow">{t.label}</p><h3>{t.fullName || t.name}</h3>
      <p className="pathway-price">{money(t.price)} <span>USD once</span></p>
      <p><strong>{t.months} months of online access{t.id === 'family' ? ' · 2 users' : ''}</strong></p>
      <p>{t.persona}</p>
      <ul>{t.highlights.map(f => <li key={f}>{f}</li>)}</ul>
      <p className="renewal-note">Optional renewal: {money(t.renewal)} USD</p>
      <Link className="btn btn-gold" href={t.url}>See what you get with {t.name} →</Link>
    </article>)}</div>
    {focus !== 'all' && <button className="btn btn-outline" onClick={() => setFocus('all')}>Show all six pathways</button>}
    <details className="comparison-details"><summary>Compare the details side by side</summary>
      <p className="help-note" id="comparison-help">On your phone, swipe the table sideways. Open a plan above to see its full tool list.</p>
      <div className="table-scroll" role="region" aria-label="Pathway comparison" aria-describedby="comparison-help" tabIndex={0}><table className="comparison-table">
        <caption>ROS™ pathway comparison · all prices USD</caption><thead><tr><th scope="col">Feature</th>{tiers.map(t => <th scope="col" key={t.id}><Link href={t.url}>{t.fullName || t.name}</Link></th>)}</tr></thead>
        <tbody>{compareRows.map(row => <tr key={row.label}><th scope="row">{row.label}</th>{tiers.map(t => {
          const value = row.value(t); return <td key={t.id}>{value === true ? 'Included' : value === false ? '—' : value}</td>;
        })}</tr>)}</tbody>
      </table></div>
    </details>
    <details className="comparison-details"><summary>Guides included in every plan</summary><ul className="foundation-list">{commonFeatures.map(f => <li key={f}>{f}</li>)}</ul></details>
    <p className="help-note">Access starts after you pay and sign the agreement. Renewal is optional; ask how long it lasts before paying. Only Family Edition includes two-user access and school and childcare guides. The higher-priced plans do not include those Family extras.</p>
  </>;
}
