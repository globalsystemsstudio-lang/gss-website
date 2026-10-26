import Link from 'next/link';
import SalesNotice from '../../components/SalesNotice';
import { featureGroups } from '../../lib/ros-data';
import styles from './page.module.css';

export const metadata = {
  title: 'Plan Your Family’s Move Abroad — ROS™ Family Edition',
  description: 'An online planning space with guides and checklists for your family’s move abroad. $1,197 USD once. Nine months of access for two people. Ask questions on a free call.',
  alternates: { canonical: 'https://globalsystemsstudio.com/family-relocation/' },
};
const booking = 'https://calendar.app.google/5GiW8EZKoyB7SqEKA';
const faqs = [
  ['What am I buying?', 'An online planning space in Notion with guides, checklists and a family timeline. It helps you organize the work of moving abroad. Two people can use it for nine months.'],
  ['How do I use it?', 'Read the starting guide, review the checklist, and work through the planning steps. Use the guides to research questions about where to live, schools, housing, healthcare and money.'],
  ['Can I ask for help?', 'Yes. Email support is included. You also get one written Q&A: send up to three relocation questions and receive a written response within five business days after we receive them.'],
  ['When do I get access?', 'After you pay and sign the agreement, Global Systems Studio follows up to set up your online planning space. Your nine months of access starts after completed payment and a signed agreement.'],
  ['Do you arrange the whole move for me?', 'No. You do the research and make the decisions, using our planning tools and support. The price does not include booking movers, finding a home for you, school placement or government fees.'],
  ['Is this a monthly payment?', 'No. Pay $1,197 USD once for the first nine months. There is no required subscription. An optional renewal is $347 USD; ask us how long it lasts and check the terms before renewing.'],
  ['Can I get a refund?', 'All sales are final. There are no refunds. Read the full details and sales policy before paying.'],
];
function CallButton() { return <a className="btn btn-gold" href={booking}>Book a free 15-minute call →</a>; }

export default function FamilyRelocationPage() {
  return <div className={styles.campaign}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      '@context':'https://schema.org', '@type':'Service', name:'ROS™ Family Edition',
      description:'Online relocation planning guides, checklists and support for couples and families. Nine months of access for two people.',
      url:'https://globalsystemsstudio.com/family-relocation/', provider:{'@id':'https://globalsystemsstudio.com/#organization'},
      offers:{'@type':'Offer', price:1197, priceCurrency:'USD', url:'https://globalsystemsstudio.com/services/ros-family-edition-pathway/'},
    })}} />
    <section className={`page-hero ${styles.hero}`}><div className="container">
      <p className={styles.kicker}>ROS™ FAMILY EDITION · GLOBAL SYSTEMS STUDIO</p>
      <h1>Moving abroad with your family? Know what to do next.</h1>
      <p>Get one online place with guides, checklists and a timeline to help you plan your move together.</p>
      <p>Use it to work through questions about where to live, schools, housing, healthcare and money.</p>
      <p className={styles.price}>$1,197 USD, paid once.<br/>Nine months of access for two people.</p>
      <CallButton />
      <p className={styles.small}>Ask whether this is right for your family. The call is free. No pressure to buy.</p>
    </div></section>
    <section className="section-ivory"><div className="container">
      <h2>What does the $1,197 pay for?</h2>
      <p className="section-intro">You get a place to plan, tools to help you research, and support when you have questions.</p>
      <div className={styles.grid}>{[
        ['01','Your shared planning space','You and one other person get access to the same online planning space in Notion for nine months.'],
        ['02','Guides and checklists','A family timeline and checklists help you organize the work. Guides help you research schools, childcare, housing, healthcare, banking and moving requirements.'],
        ['03','Help with your questions','You get email support and one written Q&A for up to three relocation questions. You also get resources for managing the stress of the move.'],
      ].map(([n,title,body])=><article className={styles.card} key={n}><span className={styles.number}>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>
    <section><div className="container">
      <h2>How you use it</h2>
      <div className={styles.grid}>{[
        ['1','Start with your family','Read the starting guide. Write down who is moving, where you are considering and what each person needs.'],
        ['2','Work through the plan','Use the timeline and checklists to organize your next steps. Read the guides as you research your options.'],
        ['3','Make decisions together','Compare what you find, discuss your choices and use the included support when you need help.'],
      ].map(([n,title,body])=><article className={styles.card} key={n}><span className={styles.number}>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      <p className="help-note"><strong>Example:</strong> If your family needs to research schools, use the school guide to gather information. Then use the housing checklist to compare places to live. This is an example of using the tools, not a promise of a school place or a home.</p>
    </div></section>
    <section className="section-ivory"><div className="container content-narrow">
      <h2>What happens after you buy?</h2>
      <ol className="clear-list">
        <li><strong>Pay $1,197 USD and sign the agreement.</strong></li>
        <li><strong>We follow up to set up access for two people.</strong></li>
        <li><strong>Open your planning space and start with the guide.</strong> You have nine months of access after completed payment and a signed agreement.</li>
      </ol>
      <p>This is planning help. You still carry out your move. Lawyers, tax advisers, movers, school fees and other moving costs are paid separately.</p>
      <details className={styles.faq}><summary>See the full list of included tools</summary>
        <div className="feature-grid">{featureGroups('family').map(g=><article className="feature-card" key={g.title}><h3>{g.title}</h3><ul>{g.features.map(f=><li key={f}>{f}</li>)}</ul></article>)}</div>
      </details>
      <p><Link href="/services/ros-family-edition-pathway/">See all Family Edition details and the payment option →</Link></p>
    </div></section>
    <section><div className="container content-narrow">
      <h2>Not sure yet? Talk with Charlene first.</h2>
      <p>Tell me where you want to move, who is coming with you and what feels confusing. We will talk about whether Family Edition fits what you need.</p>
      <CallButton /><p className={styles.small}>Free. 15 minutes. No pressure to buy.</p>
    </div></section>
    <section className="section-ivory"><div className="container content-narrow">
      <h2>A few questions before you decide</h2>
      {faqs.map(([q,a])=><details className={styles.faq} key={q}><summary>{q}</summary><p>{a}</p></details>)}
      <p>ROS™ helps you plan and research. Ask licensed professionals for legal, tax, immigration, investment or medical advice. Visa approval, a school place and a move date are not guaranteed.</p>
      <SalesNotice /><p><Link href="/sales-policy/">Read the sales policy</Link>.</p>
      <CallButton />
    </div></section>
  </div>;
}
