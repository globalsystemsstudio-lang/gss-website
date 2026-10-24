'use client';
import { useState } from 'react';
import Link from 'next/link';
import { tiers, commonFeatures, compareRows, money } from '../lib/ros-data';
import { trackEvent } from '../lib/analytics';

const choices = [
  ['all', 'Compare all six'], ['solo', 'Moving independently'], ['family', 'Moving a household'],
  ['nomad', 'Working remotely'], ['entrepreneur', 'Running a business'], ['legacy', 'Planning a lasting home'], ['investor', 'Investing across borders'],
];
export default function PathwayComparison() {
  const [focus, setFocus] = useState('all');
  const shown = focus === 'all' ? tiers : tiers.filter(t => t.id === focus);
  return <>
    <label className="field-label" htmlFor="pathway-focus">Which best describes your main priority?</label>
    <select id="pathway-focus" className="pathway-select" value={focus} onChange={e => {
      setFocus(e.target.value); trackEvent('pathway_filter', { pathway: e.target.value });
    }}>{choices.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
    <p className="help-note" aria-live="polite">{focus === 'all' ? 'Compare the six pathways below. Prices are one-time payments in USD.' : 'This is a starting suggestion based on your priority. You can compare all six or ask about overlapping needs on a free call.'}</p>
    <div className="pathway-grid">{shown.map(t => <article className="pathway-card" key={t.id}>
      <p className="eyebrow">{t.label}</p><h3>{t.fullName || t.name}</h3>
      <p className="pathway-price">{money(t.price)} <span>USD once</span></p>
      <p><strong>{t.months} months of dashboard access{t.id === 'family' ? ' · 2 users' : ''}</strong></p>
      <p>{t.persona}</p>
      <ul>{t.highlights.map(f => <li key={f}>{f}</li>)}</ul>
      <p className="renewal-note">Optional dashboard renewal: {money(t.renewal)} USD</p>
      <Link className="btn btn-gold" href={t.url}>See all {t.name} inclusions →</Link>
    </article>)}</div>
    {focus !== 'all' && <button className="btn btn-outline" onClick={() => setFocus('all')}>Show all six pathways</button>}
    <details className="comparison-details" open><summary>Compare access, support and specialist resources</summary>
      <p className="help-note" id="comparison-help">On a small screen, swipe the table sideways. Open a tier above for its complete inclusion list.</p>
      <div className="table-scroll" role="region" aria-label="Pathway comparison" aria-describedby="comparison-help" tabIndex={0}><table className="comparison-table">
        <caption>ROS™ pathway comparison · all prices USD</caption><thead><tr><th scope="col">Feature</th>{tiers.map(t => <th scope="col" key={t.id}><Link href={t.url}>{t.fullName || t.name}</Link></th>)}</tr></thead>
        <tbody>{compareRows.map(row => <tr key={row.label}><th scope="row">{row.label}</th>{tiers.map(t => {
          const value = row.value(t); return <td key={t.id}>{value === true ? 'Included' : value === false ? '—' : value}</td>;
        })}</tr>)}</tbody>
      </table></div>
    </details>
    <details className="comparison-details"><summary>Included in every pathway: the ROS™ foundation</summary><ul className="foundation-list">{commonFeatures.map(f => <li key={f}>{f}</li>)}</ul></details>
    <p className="help-note">Initial access starts after completed purchase and a signed agreement. Renewals are optional; confirm renewal duration and terms before paying. Family resources and two-user access belong to Family Edition. Entrepreneur, Legacy and Investor build on Solo, rather than on Family Edition.</p>
  </>;
}
