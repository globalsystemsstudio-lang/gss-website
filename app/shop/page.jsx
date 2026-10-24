import Link from 'next/link';
import SalesNotice from '../../components/SalesNotice';

export const metadata = {
  title: 'Guides & Planners',
  description: 'Structured planning tools built on the ROS™ framework — from your first five questions to pathway-specific workbooks for every type of international move.',
  alternates: { canonical: 'https://globalsystemsstudio.com/shop/' },
};

const foundation = [
  { emoji: '🧭', price: 'Free', name: 'Five Questions Before Moving Abroad', desc: "A visa does not tell you whether your relocation will work. These five questions do. Most people research a move backwards — they fall in love with a country first, and only discover the gap between the fantasy and their actual life after they've already signed a lease.", note: 'No email required — read it now', cta: 'Get the Free Guide →', href: '/shop/five-questions', external: false, footnote: 'Pairs with the Readiness Workbook' },
  { emoji: '📘', price: '$27', name: 'ROS™ Relocation Readiness Workbook', desc: "Stop collecting relocation information. Start making an organized decision. Seven modules, one household profile, and a final readiness score that tells you exactly what's ready, what's uncertain, and what has to be professionally confirmed before you move.", note: 'Fillable PDF + printable workbook', cta: 'Buy the Workbook →', href: 'https://www.paypal.com/ncp/payment/CJKF6VV2P7SV8', external: true, footnote: 'Natural next step: 90-Day Planner' },
  { emoji: '📅', price: '$47', name: 'ROS™ 90-Day Relocation Action Planner', desc: 'Make meaningful relocation progress for the next 90 days — without confusing activity with readiness. Three months, twelve weeks, one outcome per week.', note: 'Fillable PDF planner + tracker bundle', cta: 'Buy the Planner →', href: 'https://www.paypal.com/ncp/payment/QK7YNJM58LB82', external: true, footnote: 'Next step: Clarity Session' },
  { emoji: '🗂️', price: '$19', name: 'International Relocation Document Organizer', desc: "Every relocation runs on paperwork you can't find at the moment you need it. This fixes that. Ten categories, full tracker fields, and security instructions so nothing falls through the cracks.", note: 'Fillable tracker + checklist + folder guide', cta: 'Buy the Organizer →', href: 'https://www.paypal.com/ncp/payment/XYPVH3DPW4BCN', external: true, footnote: 'Pairs with the 90-Day Planner' },
  { emoji: '🌍', price: '$19', name: 'Country Comparison Decision Matrix', desc: 'How to compare countries without comparing apples to mangoes. Score every destination against the same ten categories — residency, healthcare, cost of living, taxation, banking, housing, safety, infrastructure, language, and lifestyle.', note: 'Scoring matrix + decision framework', cta: 'Buy the Matrix →', href: 'https://www.paypal.com/ncp/payment/X2NL5YEJW3JQE', external: true, footnote: 'Next step: compare ROS™ pathways' },
];

const pathwayWorkbooks = [
  { emoji: '🌴', price: '$47', pathway: 'Legacy Pathway', name: 'Retirement Abroad Decision Workbook', desc: 'A qualifying pension check and a beautiful beach town are not the same thing as a plan. Five decisions every retiree abroad must answer: income and longevity, healthcare continuity, residency and tax questions, housing and daily life, and family and legacy.', note: 'Workbook PDF — Legacy Pathway', cta: 'Buy the Workbook →', href: 'https://www.paypal.com/ncp/payment/AXJQRQK63V7BS', footnote: 'Standalone workbook; Legacy Pathway sold separately' },
  { emoji: '👨‍👩‍👧‍👦', price: '$47', pathway: 'Family Pathway', name: 'Family Relocation Planning Workbook', desc: "Your relocation isn't one plan. It's every family member's plan, coordinated into one. Covers citizenship and residency per household member, schooling, pediatric and adult healthcare, childcare and eldercare, pet relocation, and spousal employment.", note: 'Workbook PDF — Family Pathway', cta: 'Buy the Workbook →', href: 'https://www.paypal.com/ncp/payment/SSXHG4BH7Z6CJ', footnote: 'Family Edition dashboard access sold separately' },
  { emoji: '💻', price: '$37', pathway: 'Digital Nomad Pathway', name: 'Digital Nomad Compliance Planner', desc: "A travel plan and a legally sustainable work-abroad plan are not the same thing. This builds the second one. Covers employer and client permissions, visa and work authorization, tax residency, business entity questions, banking, health insurance, and destination rotation.", note: 'Planner PDF — Digital Nomad Pathway', cta: 'Buy the Planner →', href: 'https://www.paypal.com/ncp/payment/VGQ68NR6VYX8L', footnote: 'Digital Nomad dashboard access sold separately' },
  { emoji: '🚀', price: '$67', pathway: 'Entrepreneur Pathway', name: 'Entrepreneur Abroad Planning Workbook', desc: 'Moving your life and moving your business are two projects wearing one deadline. This keeps them from colliding. Covers residency and business permission, structure and ownership restrictions, market validation, banking, payroll, licenses, contracts, and IP.', note: 'Workbook PDF — Entrepreneur Pathway', cta: 'Buy the Workbook →', href: 'https://www.paypal.com/ncp/payment/98B2WEW29T4BG', footnote: 'Entrepreneur dashboard access sold separately' },
  { emoji: '📊', price: '$97', pathway: 'Investor Pathway', name: 'Investor Relocation Due-Diligence Workbook', desc: "A qualifying investment and a good investment are not the same thing. This workbook makes sure you're not confusing them. Covers ownership structure, tax, reporting, estate, and conflict-of-interest checks.", note: 'Workbook PDF — Investor Pathway', cta: 'Buy the Workbook →', href: 'https://www.paypal.com/ncp/payment/UKQ96QCDSH5F4', footnote: 'Investor dashboard access sold separately' },
];

function productId(p) { return p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

function ProductCard({ p }) {
  return (
    <div id={productId(p)} style={{scrollMarginTop:100, background:'var(--white)', border:'1px solid var(--border)', borderRadius:'12px', padding:'28px', display:'flex', flexDirection:'column'}}>
      <div style={{fontSize:'32px', marginBottom:'12px'}}>{p.emoji}</div>
      <div style={{color:'var(--accent)', fontWeight:'700', marginBottom:'4px'}}>{p.price}</div>
      {p.pathway && <div style={{fontSize:'13px', color:'var(--text-light)', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'4px'}}>{p.pathway}</div>}
      <h3 style={{color:'var(--primary)', marginBottom:'12px'}}>{p.name}</h3>
      <p style={{color:'var(--text-light)', fontSize:'14px', flex:1, marginBottom:'12px'}}>{p.desc}</p>
      <p style={{fontSize:'12px', color:'var(--text-light)', fontStyle:'italic', marginBottom:'16px'}}>{p.note}</p>
      {p.href.startsWith('https://') ? (
        <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{textAlign:'center', display:'block'}}>{p.cta}</a>
      ) : (
        <Link href={p.href} className="btn btn-gold">{p.cta}</Link>
      )}
      {p.href.includes('paypal.com') && <SalesNotice />}
      {p.footnote && <p style={{fontSize:'12px', color:'var(--text-light)', marginTop:'12px'}}>{p.footnote}</p>}
    </div>
  );
}

export default function ShopIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'ItemList', name: 'Relocation guides and planners',
        itemListElement: [...foundation, ...pathwayWorkbooks].map((p, i) => ({
          '@type': 'ListItem', position: i + 1, item: {
            '@type': 'Product', name: p.name, description: p.desc,
            url: `https://globalsystemsstudio.com/shop/#${productId(p)}`,
            brand: { '@type': 'Brand', name: 'Global Systems Studio' },
            offers: { '@type': 'Offer', priceCurrency: 'USD', price: p.price === 'Free' ? '0' : p.price.replace('$', ''), url: p.href.startsWith('https://') ? p.href : `https://globalsystemsstudio.com${p.href}/` }
          }
        }))
      }) }} />
      <section className="page-hero">
        <div className="container">
          <h1>Guides & Planners</h1>
          <p>Structured planning tools built on the ROS™ framework. Each one targets a specific gap in the international relocation process — from your first five questions to pathway-specific workbooks for every type of mover.</p>
          <p style={{marginTop:'16px', color:'var(--text-light)'}}><strong>Start where you are.</strong> These products are built in sequence — start with the free guide, move to the Readiness Workbook, then the 90-Day Planner. If you're in a specific pathway (Legacy, Family, Digital Nomad, Entrepreneur, Investor), the tier-specific workbooks give you the decisions that apply to your situation only.</p>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <p className="help-note">Paid PDFs are standalone purchases, delivered to the email on your PayPal order. They do not include pathway dashboard access. If a delivery email is missing, check spam and email globalsystemsstudio@gmail.com with your order reference.</p>
          <span className="section-tag">Free introduction & paid foundation products</span>
          <h2 style={{marginBottom:'8px'}}>Start Here</h2>
          <p style={{color:'var(--text-light)', marginBottom:'32px'}}>Start here — regardless of where you are in the relocation process or which pathway applies to you.</p>
          <div className="pricing-grid-4">
            {foundation.map((p) => <ProductCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'64px 0'}}><div className="container"><p className="eyebrow">Paid · Books</p><h2>Relocation reading</h2><div className="offer-grid">{[
        {name:'New Roots', price:'$27', href:'/shop/new-roots/', desc:'A foundational guide for the start of your relocation planning.'},
        {name:'Across Streets & Seas', price:'$47', href:'/shop/across-streets-and-seas/', desc:'A deeper companion covering the decisions behind an international move.'},
        {name:'Relocation Library Bundle', price:'$64', href:'/shop/relocation-library/', desc:'Both books together: New Roots and Across Streets & Seas.'}
      ].map(b => <article className="feature-card" key={b.name}><h3>{b.name}</h3><p><strong>{b.price} USD once</strong> · Digital download</p><p>{b.desc}</p><Link href={b.href} className="btn btn-gold">View {b.name} →</Link></article>)}</div></div></section>
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">Pathway-Specific Workbooks</span>
          <h2 style={{marginBottom:'8px'}}>Built for Your Situation</h2>
          <p style={{color:'var(--text-light)', marginBottom:'32px'}}>Built for the decisions that apply to your situation specifically — retirement, family, digital nomad, entrepreneur, or investor.</p>
          <div className="pricing-grid-4">
            {pathwayWorkbooks.map((p) => <ProductCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Not Sure Which Product Fits Your Situation?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>A free 15-minute Discovery Call can point you to the right starting place — and tell you honestly whether ROS™ is what you need right now.</p>
            <div style={{marginTop:'24px'}}>
              <Link href="/services/discovery-call" className="btn btn-gold">Book a Free Discovery Call →</Link>
            </div>
            <p style={{marginTop:'12px', fontSize:'13px', color:'var(--text-light)'}}>No pressure. No pitch. Just a real conversation.</p>
          </div>
        </div>
      </section>
    </>
  );
}
