import Link from 'next/link';
import SalesNotice from '../../components/SalesNotice';
import { featureGroups } from '../../lib/ros-data';
import styles from './page.module.css';

export const metadata = {
  title: 'Family Relocation Planning — ROS™ Family Edition',
  description: 'Plan your family’s move abroad together. ROS™ Family Edition includes nine months of dashboard access for two users for $1,197 USD. Start with a free Discovery Call.',
  alternates: { canonical: 'https://globalsystemsstudio.com/family-relocation/' },
};
const booking = 'https://calendar.app.google/5GiW8EZKoyB7SqEKA';
const faqs = [
  ['Is the Discovery Call free?', 'Yes. It is a free 15-minute conversation to discuss your move and whether ROS™ fits, with no pressure, no pitch and no obligation to purchase. It is not a full relocation plan.'],
  ['Is $1,197 a subscription?', 'No. It is a one-time USD payment for nine months of initial dashboard access for two users.'],
  ['When does access start?', 'After completed purchase and a signed agreement. Dashboard setup requires follow-up from Global Systems Studio.'],
  ['Can we renew?', 'Optional renewal is $347 USD. Confirm the renewal access period and terms before purchasing renewal. There is no mandatory subscription.'],
  ['What is the refund policy?', 'All sales are final; no refunds. Review the scope and sales policy before purchasing.'],
  ['Does this replace professional advice?', 'No. ROS™ offers educational relocation planning resources and support. Licensed professionals handle destination-specific legal, tax, immigration, financial and medical advice. Approvals, school placements and move dates are not guaranteed.'],
];
function CallButton() { return <a className="btn btn-gold" href={booking}>Book a free 15-minute Discovery Call →</a>; }

export default function FamilyRelocationPage() {
  return <div className={styles.campaign}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Service', name: 'ROS™ Family Edition',
      description: 'Educational relocation planning resources for couples and families. Nine months of dashboard access for two users.',
      url: 'https://globalsystemsstudio.com/family-relocation/', provider: {'@id':'https://globalsystemsstudio.com/#organization'},
      offers: {'@type':'Offer', price:1197, priceCurrency:'USD', url:'https://globalsystemsstudio.com/services/ros-family-edition-pathway/'},
    })}} />
    <section className={`page-hero ${styles.hero}`}><div className="container">
      <p className={styles.kicker}>ROS™ FAMILY EDITION · GLOBAL SYSTEMS STUDIO</p>
      <h1>Plan your family’s move abroad with everyone in view.</h1>
      <p>Schools. Housing. Healthcare. Income. Timing. A family move means making connected decisions for more than one person.</p>
      <p>ROS™ Family Edition brings family relocation planning into a structured system, with resources for household priorities, destination research and the steps before and after arrival.</p>
      <p className={styles.price}>$1,197 USD one time · Nine months · Two users</p>
      <CallButton />
      <p className={styles.small}>No pressure, no pitch. Talk through where you are and whether ROS™ fits your family’s move.</p>
    </div></section>
    <section className="section-ivory"><div className="container">
      <p className="eyebrow">A shared move deserves a shared plan</p>
      <h2>Every decision has company.</h2>
      <p className="section-intro">You may have a country in mind and still be unsure how to coordinate school research, housing, healthcare and timing. You and your partner may also be working from different assumptions.</p>
      <div className={styles.grid}>{[
        ['01', 'Start with your household', 'Record each person’s priorities, the needs that must remain stable and the questions you have not answered.'],
        ['02', 'Connect the decisions', 'School research can affect neighborhood options. Housing can affect budget and timing. Identify what depends on what.'],
        ['03', 'Research before committing', 'Use structured resources to organize the work, and confirm destination-specific requirements with qualified professionals.'],
      ].map(([n,title,body])=><article className={styles.card} key={n}><span className={styles.number}>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>
    <section><div className="container">
      <h2>What you receive with Family Edition</h2>
      <p className="section-intro">Nine months of dashboard access for two users, family-specific planning resources, and the Solo resources carried forward below.</p>
      <div className="feature-grid">{featureGroups('family').map(g=><article className="feature-card" key={g.title}><h3>{g.title}</h3><ul>{g.features.map(f=><li key={f}>{f}</li>)}</ul></article>)}</div>
      <p><Link href="/services/ros-family-edition-pathway/">Review the Family Edition purchase details →</Link></p>
    </div></section>
    <section className="section-ivory"><div className="container content-narrow">
      <p className="eyebrow">Try this together</p><h2>Are you planning the same move?</h2>
      <p>Each adult writes down three must-haves, three open questions and one concern. Compare your answers before adding more tasks. Differences can show you where you need a conversation or more research.</p>
      <div className={styles.exercise}><p><strong>3 must-haves</strong><br/>What needs to stay stable for you?</p><p><strong>3 open questions</strong><br/>What could change your decision?</p><p><strong>1 concern</strong><br/>What deserves attention now?</p></div>
      <p>This is an introductory planning exercise, not an assessment of destination eligibility or a personalized relocation recommendation.</p>
    </div></section>
    <section><div className="container content-narrow"><h2>Is this the right fit?</h2>
      <p>Family Edition is designed for couples and families planning an international relocation who want a structured way to coordinate the work. It supports planning and research; it does not provide a done-for-you move or licensed professional services.</p>
      <h3>Bring your questions to a short conversation.</h3>
      <p>Bring your destination or shortlist, approximate timeline, and the family planning question you most want to resolve. No sensitive documents are needed for this introductory call.</p>
      <CallButton />
    </div></section>
    <section className="section-ivory"><div className="container content-narrow"><h2>Questions before you decide</h2>
      {faqs.map(([q,a])=><details className={styles.faq} key={q}><summary>{q}</summary><p>{a}</p></details>)}
      <SalesNotice />
      <p>Professional fees, government fees and relocation expenses are separate. <Link href="/sales-policy/">Read the sales policy</Link>.</p>
      <CallButton />
    </div></section>
  </div>;
}
