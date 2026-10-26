import Link from 'next/link';
import SalesNotice from './SalesNotice';
import { getTier, featureGroups, money, payments } from '../lib/ros-data';

export function pathwayMetadata(id) {
  const t = getTier(id);
  return {
    title: `ROS™ ${t.fullName || t.name} — ${money(t.price)}`,
    description: `${t.persona} ${money(t.price)} USD once for ${t.months} months. See what you get and how to use the online plan.`,
    alternates: { canonical: `https://globalsystemsstudio.com${t.url}` },
  };
}
export default function PathwayPage({ id }) {
  const t = getTier(id);
  const checkout = `https://www.paypal.com/ncp/payment/${payments[id]}`;
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context':'https://schema.org', '@type':'Service', name:`ROS™ ${t.fullName || t.name}`,
      description:t.persona, url:`https://globalsystemsstudio.com${t.url}`,
      provider:{'@id':'https://globalsystemsstudio.com/#organization'},
      offers:{'@type':'Offer',price:t.price,priceCurrency:'USD',url:checkout},
    }) }} />
    <section className="page-hero"><div className="container">
      <p className="eyebrow">Paid online relocation plan</p>
      <h1>ROS™ {t.fullName || t.name}</h1><p>{t.intro}</p>
      <p>{t.persona}</p>
      <p><strong>{money(t.price)} USD, paid once. {t.months} months of online access{t.id === 'family' ? ' for two people' : ''}.</strong></p>
      <p>You get a planning space in Notion with guides and tools to help you research and organize your move.</p>
      <div className="action-row"><Link href="/services/discovery-call/" className="btn btn-gold">Ask questions on a free 15-minute call →</Link><a href={checkout} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Buy {t.name} — {money(t.price)} →</a></div>
      <SalesNotice />
    </div></section>
    <section className="section-ivory"><div className="container content-narrow">
      <h2>What does the price pay for?</h2><p>{t.reason}</p>
      <ul className="clear-list"><li>Your online planning space for {t.months} months{t.id === 'family' ? ', shared by two people' : ''}.</li><li>Guides to research visas, housing, healthcare, banking and settling in.</li>{t.highlights.map(f=><li key={f}>{f}.</li>)}</ul>
      <h2 style={{marginTop:32}}>How you use it</h2>
      <ol className="clear-list"><li><strong>Open the start-here guide.</strong> Write down your moving plans and questions.</li><li><strong>Use the included tools.</strong> Read the guides and work through the planning steps for your situation.</li><li><strong>Check before committing.</strong> Compare what you find and confirm legal, tax and other professional questions with qualified people.</li></ol>
      <details className="comparison-details"><summary>See the full list of tools included</summary><div className="feature-grid">{featureGroups(id).map(g=><article className="feature-card" key={g.title}><h3>{g.title}</h3><ul>{g.features.map(f=><li key={f}>{f}</li>)}</ul></article>)}</div></details>
      {['entrepreneur','legacy','investor'].includes(id) && <p className="help-note">Only Family Edition includes two-user access and school and childcare guides. Those extras are not included with this plan.</p>}
    </div></section>
    <section><div className="container content-narrow">
      <h2>What happens after you pay?</h2><ol className="clear-list"><li><strong>Pay through PayPal.</strong> Use an email address you can check. We send purchase follow-up there.</li><li><strong>Sign your agreement.</strong> We follow up to set up your online planning space.</li><li><strong>Start using your plan.</strong> Your {t.months} months of access starts after completed payment and a signed agreement.</li></ol>
      <p><strong>Optional renewal: {money(t.renewal)} USD.</strong> You do not have to renew. Ask how long renewal lasts and check its terms before paying.</p>
      <h3>What costs extra?</h3><p>You carry out your move. Lawyers, tax advisers, government fees, moving services and other moving costs are separate. ROS™ provides planning tools and information; it does not replace legal, tax, immigration, investment or medical advice.</p>
      <p>Questions or a missing purchase email? Contact <a href="mailto:globalsystemsstudio@gmail.com">globalsystemsstudio@gmail.com</a> with your order reference. Please do not email passports or financial statements.</p>
      <div className="action-row"><Link href="/services/" className="btn btn-outline">Compare all six online plans</Link><Link href="/sales-policy/">Read the sales policy</Link></div>
    </div></section>
  </>;
}
