import Link from 'next/link';

export const metadata = {
  title: 'Solo Relocator Pathway — $897 | Global Systems Studio',
  description: 'ROS™ Solo Relocator Pathway — 6 months of full-system access built around moving internationally on your own, covering legal, financial, housing, healthcare, income, and community for solo relocators.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/services/ros-solo-pathway/' },
};

export default function SoloPathwayPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>ROS™ Pathway · $897 · 6-Month Access</p>
          <h1>Solo Relocator Pathway</h1>
          <p>You're making this move on your own — by choice or by circumstance — and you're determined to get it right. ROS™ built this pathway around that reality.</p>
          <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/work-with-me" className="btn btn-gold">Get the Solo Relocator Pathway — $897 →</Link>
            <Link href="/services/discovery-call" className="btn btn-outline">Book a Free Call First →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Built for the Solo Move</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Moving internationally on your own means every decision lands on you. There's no one to divide the tasks, no one to catch what you missed, no one to share the unknowns. ROS™ Solo Pathway is structured specifically to account for that — covering every phase with single-person logistics in mind.</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Legal residency, visa, and documentation sequence for your destination</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Banking, FBAR, and financial structure built for a single-income move</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Housing and lease navigation as a solo tenant in a foreign market</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Healthcare and insurance coverage without a family plan or employer</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Income continuity and career options in your destination country</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Community-building and social integration as a solo arrival</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Long-term stability planning — residency, re-entry, and retirement income abroad</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>What You Get</h2>
          <ul style={{maxWidth:'760px', marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>6 months of full ROS™ system access across all seven modules</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Solo Relocator Pathway — tasks and decisions filtered to single-person logistics</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Legal and documentation guidance for top solo-move destinations</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Financial structure for a single-income international household</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Solo housing, healthcare, and community integration planning</li>
          </ul>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Ready to Build Your System?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Not sure this is the right tier? The <Link href="/services/discovery-call">free discovery call</Link> takes 15 minutes and will tell you exactly where to start.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="/work-with-me" className="btn btn-gold">Get the Solo Relocator Pathway — $897 →</Link>
              <Link href="/services" className="btn btn-outline">Compare All Tiers →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
