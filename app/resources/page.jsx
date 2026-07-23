import Link from 'next/link';

export const metadata = {
  title: 'Resources — Guides & Articles for U.S. Persons Relocating Internationally',
  description: 'In-depth guides on relocation financial planning, visa and residency pathways, FBAR & FATCA compliance, and how to choose an international relocation consultancy.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/resources/' },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Resources</h1>
          <p>In-depth guides and reference material for U.S. persons planning an international relocation. Every article is written around the specific legal, financial, and logistical complexity that U.S. citizens and permanent residents face — not generic expat advice.</p>
        </div>
      </section>

      {/* SEO ARTICLES */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>In-Depth Guides</h2>
          <div style={{display:'flex', flexDirection:'column', gap:'24px', marginTop:'40px', maxWidth:'820px'}}>
            {[
              {
                href: '/relocation-financial-planning',
                tag: 'Financial Planning',
                title: 'International Relocation Financial Planning for U.S. Persons: The Complete Guide',
                desc: 'A complete guide to the financial considerations U.S. persons must address before and during an international relocation, covering FBAR, PFIC rules, banking strategy, asset transition timing, and how the ROS™ framework addresses each.',
              },
              {
                href: '/visa-residency-pathways',
                tag: 'Legal & Residency',
                title: 'Visa and Residency Pathways for U.S. Persons Relocating Abroad: 132 Destinations',
                desc: 'A structured analysis of visa and residency pathways across 132 destinations for U.S. persons. Covers passive income visas, digital nomad visas, investment programs, and the U.S. tax implications of each.',
              },
              {
                href: '/international-relocation-consultancy',
                tag: 'Relocation Strategy',
                title: 'How to Choose an International Relocation Consultancy',
                desc: 'What most searches surface vs. what U.S. persons actually need. A guide to the types of relocation firms, the questions to ask any provider, and how Global Systems Studio\'s ROS™ framework compares.',
              },
              {
                href: '/financial-planning-international-relocation',
                tag: 'Financial Planning',
                title: 'FBAR, FATCA, PFIC, and FEIE: The U.S. Expat Financial Planning Guide',
                desc: 'A detailed breakdown of the four most important U.S. compliance areas for persons living abroad — Foreign Bank Account Report, Foreign Account Tax Compliance Act, Passive Foreign Investment Company rules, and the Foreign Earned Income Exclusion.',
              },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{display:'block', background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'12px', padding:'32px', textDecoration:'none', color:'inherit', transition:'border-color 0.15s'}}>
                <span style={{fontSize:'11px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--accent)'}}>{item.tag}</span>
                <h3 style={{marginTop:'10px', marginBottom:'12px', color:'var(--primary)', fontSize:'20px'}}>{item.title}</h3>
                <p style={{color:'var(--text-light)', fontSize:'15px', margin:0, lineHeight:'1.6'}}>{item.desc}</p>
                <span style={{display:'block', marginTop:'16px', color:'var(--primary)', fontWeight:'600', fontSize:'14px'}}>Read the full guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCE GUIDES */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Member Resource Guides</h2>
          <p style={{maxWidth:'640px', marginTop:'16px', color:'var(--text-light)'}}>These downloadable guides are available to ROS™ community members through The Departure Lounge. Join the community to access the full library.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'24px', marginTop:'40px'}}>
            {[
              {
                title: 'International Job Search Guide',
                desc: 'Where U.S. professionals actually look for work abroad — the platforms, the country-specific norms, and what your experience does and doesn\'t transfer.',
                status: 'Available to members',
              },
              {
                title: "International Driver's License Guide",
                desc: "Country-by-country breakdown of driver's license recognition, conversion requirements, and what you need to do before your U.S. license stops being valid abroad.",
                status: 'Available to members',
              },
            ].map((guide) => (
              <div key={guide.title} style={{background:'var(--white)', border:'1px solid var(--border)', borderRadius:'12px', padding:'28px'}}>
                <h3 style={{color:'var(--primary)', marginBottom:'12px'}}>{guide.title}</h3>
                <p style={{color:'var(--text-light)', fontSize:'15px', lineHeight:'1.6', marginBottom:'16px'}}>{guide.desc}</p>
                <span style={{fontSize:'12px', fontWeight:'700', color:'var(--accent)', textTransform:'uppercase', letterSpacing:'0.08em'}}>{guide.status}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:'36px'}}>
            <Link href="/work-with-me" className="btn btn-gold">Join The Departure Lounge to Access All Guides →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Looking for Answers That Apply to Your Specific Situation?</h2>
          <p>The guides above are built for U.S. persons broadly. For answers to your specific questions — your destination, your income, your family, your timeline — a Clarity Session is the fastest path there.</p>
          <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap', marginTop:'32px'}}>
            <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" className="btn btn-gold">Book a Free Discovery Call →</Link>
            <Link href="/work-with-me" className="btn btn-outline-white">See All Offers →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
