import Link from 'next/link';

export const metadata = {
  title: 'Digital Nomad Pathway — $697 | Global Systems Studio',
  description: 'ROS™ Digital Nomad Pathway — 6 months of full-system access for U.S. remote workers relocating abroad, covering nomad visas, FBAR, banking, healthcare, and long-term residency strategy.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/services/ros-digital-nomad-pathway/' },
};

const modules = [
  { num: '1', name: 'Legal & Documentation', body: 'Digital nomad visas, residency permits, apostilles, and the documentation sequence for your destination.' },
  { num: '2', name: 'Financial Structure', body: 'FBAR filing, foreign income tax obligations, banking setup abroad, and Social Security strategy while working remotely.' },
  { num: '3', name: 'Housing & Lifestyle', body: 'Finding housing as a remote worker, lease mechanics abroad, and building a functional remote-work base.' },
  { num: '4', name: 'Healthcare & Wellness', body: 'International health insurance options, prescription continuity, and healthcare access without an employer plan.' },
  { num: '5', name: 'Business & Income', body: 'Working legally in your destination country, platform access abroad, and banking for remote income.' },
  { num: '6', name: 'Family & Social Integration', body: 'Settling in, building community, and adjusting to life abroad as a solo remote worker.' },
  { num: '7', name: 'Long-Term Stability', body: 'What sustainable life abroad looks like beyond year one — residency timelines, re-entry rights, and financial planning.' },
];

export default function DigitalNomadPathwayPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>ROS™ Pathway · $697 · 6-Month Access</p>
          <h1>Digital Nomad Pathway</h1>
          <p>You work remotely and want the freedom to live anywhere — legally, financially smart, and without losing your mind in the process. ROS™ built this pathway for exactly that.</p>
          <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/work-with-me" className="btn btn-gold">Get the Digital Nomad Pathway — $697 →</Link>
            <Link href="/services/discovery-call" className="btn btn-outline">Book a Free Call First →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What This Pathway Covers</h2>
          <p style={{maxWidth:'720px', marginTop:'16px', color:'var(--text-light)'}}>The Digital Nomad Pathway works through all seven ROS™ modules — filtered through the specific lens of a U.S.-based remote worker building a life abroad.</p>
          <div style={{marginTop:'40px', display:'flex', flexDirection:'column', gap:'24px'}}>
            {modules.map((m) => (
              <div key={m.num} style={{background:'var(--white)', border:'1px solid var(--border)', borderLeft:'4px solid var(--accent)', borderRadius:'0 12px 12px 0', padding:'24px'}}>
                <div style={{display:'flex', gap:'16px', alignItems:'flex-start'}}>
                  <div style={{fontSize:'24px', fontWeight:'700', color:'var(--accent)', fontStyle:'italic', minWidth:'32px'}}>{m.num}</div>
                  <div>
                    <h3 style={{color:'var(--primary)', marginBottom:'8px'}}>{m.name}</h3>
                    <p style={{color:'var(--text)', margin:0, lineHeight:'1.7'}}>{m.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>What You Get</h2>
          <ul style={{maxWidth:'760px', marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>6 months of full ROS™ system access across all seven modules</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Digital Nomad Pathway — curated tasks and decisions specific to remote workers</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Legal residency and visa guidance for top digital nomad destinations</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>FBAR, foreign income tax, and banking infrastructure built for remote income</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Healthcare coverage options without an employer plan</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Long-term residency strategy and re-entry rights planning</li>
          </ul>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Ready to Build Your System?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Not sure this is the right tier? The <Link href="/services/discovery-call">free discovery call</Link> takes 15 minutes and will tell you exactly where to start.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="/work-with-me" className="btn btn-gold">Get the Digital Nomad Pathway — $697 →</Link>
              <Link href="/services" className="btn btn-outline">Compare All Tiers →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
