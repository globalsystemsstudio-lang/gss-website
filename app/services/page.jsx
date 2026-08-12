import Link from 'next/link';

export const metadata = {
  title: 'Work With Us | Services & Offerings | Global Systems Studio',
  description: 'Every way to work with Global Systems Studio — from a free discovery call to full ROS™ Pathway system access. Find the entry point built for where you are right now.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/services/' },
};

const consultations = [
  { name: 'Free Discovery Call', price: 'FREE', access: '15-Minute Video Call', desc: "Not sure where to start? Let's talk first. No pitch, no pressure — just clarity on whether ROS™ fits your situation.", href: '/services/discovery-call' },
  { name: 'Clarity Session', price: '$497', access: '45-Minute 1:1 Call', desc: 'Your situation. Your questions. Your next steps. Walk away with a clear, prioritized picture of what to do and in what order.', href: '/services/clarity-session' },
  { name: 'Async Q&A', price: '$97', access: 'Written Q&A Response', desc: 'Submit up to three relocation questions. Get a thorough written response — no scheduling required.', href: '/services/async-qa' },
];

const pathways = [
  { name: 'Digital Nomad Pathway', price: '$697', access: '6-Month Access', desc: 'Built for remote workers ready to live abroad legally and financially smart.', href: '/services/ros-digital-nomad-pathway' },
  { name: 'Solo Relocator Pathway', price: '$897', access: '6-Month Access', desc: "You're making this move on your own. This pathway is built around that reality.", href: '/services/ros-solo-pathway' },
  { name: 'Family Edition Pathway', price: '$1,197', access: '9-Month Dual Access', desc: "Moving with people who depend on you. Getting it wrong isn't an option.", href: '/services/ros-family-edition-pathway' },
  { name: 'Entrepreneur Pathway', price: '$1,597', access: '9-Month Access', desc: 'Own a business or building one abroad? This covers the legal, tax, and operational structure across borders.', href: '/services/ros-entrepreneur-pathway' },
  { name: 'Legacy Pathway', price: '$1,997', access: '12-Month Access', desc: "You've built something. Now you're ready to spend the next chapter somewhere that gives you more.", href: '/services/ros-legacy-pathway' },
  { name: 'Investor Pathway', price: '$2,497', access: '12-Month Access', desc: 'Moving capital, not just yourself. Built for those who need legal and financial infrastructure across borders.', href: '/services/ros-investor-pathway' },
];

const books = [
  { name: 'New Roots', price: '$27', access: 'Digital Download', desc: 'The foundational guide for anyone beginning the international relocation journey.', href: '/shop/new-roots' },
  { name: 'Across Streets & Seas', price: '$47', access: 'Digital Download', desc: 'The deeper companion — logistics, legal, and life abroad for serious movers.', href: '/shop/across-streets-and-seas' },
  { name: 'Relocation Library Bundle', price: '$64', access: 'Both Books — Digital Download', desc: 'New Roots + Across Streets & Seas together at a bundled price.', href: '/shop/relocation-library' },
];

function OfferGrid({ items }) {
  return (
    <div className="pricing-grid-4" style={{marginTop:'32px'}}>
      {items.map((offer) => (
        <div key={offer.name} className="pricing-card">
          <div className="pricing-tier-name">{offer.name}</div>
          <div className="pricing-price">{offer.price}</div>
          <div className="pricing-access">{offer.access}</div>
          <p style={{fontSize:'14px', color:'var(--text-light)', flex:1, marginBottom:'24px'}}>{offer.desc}</p>
          <Link href={offer.href} className="btn btn-gold">Learn More →</Link>
        </div>
      ))}
    </div>
  );
}

export default function ServicesIndexPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Every Way to Work With Us</h1>
          <p>Whether you want to start with a free call, get a specific question answered, or go all-in on the full ROS™ system — there is an entry point built for where you are right now.</p>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">Consultations</span>
          <OfferGrid items={consultations} />
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">ROS™ Pathways — Full System Access</span>
          <OfferGrid items={pathways} />
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">Books & Guides</span>
          <OfferGrid items={books} />
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Not Sure Where to Start?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>The free discovery call exists exactly for this moment. Fifteen minutes. No obligation. Just a real conversation.</p>
            <div style={{marginTop:'24px'}}>
              <Link href="/services/discovery-call" className="btn btn-gold">Book Your Free Call →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
