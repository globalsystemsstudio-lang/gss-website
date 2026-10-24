import Link from 'next/link';
import SalesNotice from './SalesNotice';
import { getTier, featureGroups, money, payments } from '../lib/ros-data';

export function pathwayMetadata(id) {
  const t = getTier(id);
  return {
    title: `ROS™ ${t.fullName || t.name} Pathway — ${money(t.price)}`,
    description: `${t.persona} ${money(t.price)} USD once, ${t.months} months of initial dashboard access. Compare all inclusions and optional renewal.`,
    alternates: { canonical: `https://globalsystemsstudio.com${t.url}` },
  };
}

export default function PathwayPage({ id }) {
  const t = getTier(id);
  const checkout = `https://www.paypal.com/ncp/payment/${payments[id]}`;
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Service', name: `ROS™ ${t.fullName || t.name} Pathway`,
      description: t.persona, url: `https://globalsystemsstudio.com${t.url}`,
      provider: { '@id': 'https://globalsystemsstudio.com/#organization' },
      offers: { '@type': 'Offer', price: t.price, priceCurrency: 'USD', url: checkout },
    }) }} />
    <section className="page-hero"><div className="container">
      <p className="eyebrow">Paid ROS™ pathway · {t.months} months{t.id === 'family' ? ' · 2 users' : ''}</p>
      <h1>{t.fullName || t.name} Pathway</h1>
      <p>{t.intro}</p>
      <p><strong>{money(t.price)} USD, paid once.</strong> {t.persona}</p>
      <div className="action-row">
        <a href={checkout} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Choose {t.name} — {money(t.price)} →</a>
        <Link href="/services/#pathways" className="btn btn-outline">Compare all six pathways</Link>
      </div>
      <SalesNotice />
    </div></section>
    <section className="section-ivory"><div className="container">
      <h2>Everything included with {t.name}</h2>
      <p className="section-intro">{t.reason} The groups below show the complete included resources, including those carried forward from other tiers.</p>
      <div className="feature-grid">{featureGroups(id).map(g => <div className="feature-card" key={g.title}>
        <h3>{g.title}</h3><ul>{g.features.map(f => <li key={f}>{f}</li>)}</ul>
      </div>)}</div>
      {['entrepreneur', 'legacy', 'investor'].includes(id) && <p className="help-note">Family Edition’s two-user dashboard and school/childcare resources are specific to Family Edition. They are not included through the Solo → Entrepreneur → Legacy → Investor progression.</p>}
    </div></section>
    <section><div className="container content-narrow">
      <h2>How purchase and access work</h2>
      <ol className="clear-list">
        <li><strong>Pay once through PayPal.</strong> Use an email address you can access; purchase follow-up goes to the email on the PayPal order.</li>
        <li><strong>Complete your agreement.</strong> Your initial {t.months}-month dashboard access period begins after completed purchase and a signed agreement. Dashboard setup requires follow-up from Global Systems Studio.</li>
        <li><strong>Use the resources and support included above.</strong> {t.id === 'family' ? 'Family Edition includes dashboard access for two users.' : 'See the included resources for this tier before purchasing.'}</li>
      </ol>
      <p><strong>Optional renewal: {money(t.renewal)} USD.</strong> There is no mandatory subscription. Confirm the renewal access period and terms with us before purchasing a renewal.</p>
      <p>ROS™ provides educational resources and planning support. Licensed professionals handle legal, tax, immigration, investment, and medical advice. Professional services, government fees, and relocation expenses are separate.</p>
      <p>Need help choosing or following up on an order? <a href="mailto:globalsystemsstudio@gmail.com">Email Global Systems Studio</a> with your order reference. Please do not email passports, financial statements, or other sensitive documents.</p>
      <div className="action-row"><Link href="/services/discovery-call/" className="btn btn-gold">Ask about fit — free 15-minute call</Link><Link href="/sales-policy/">Read the sales policy</Link></div>
    </div></section>
  </>;
}
