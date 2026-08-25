import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import { graph, service, breadcrumbs } from '../../../lib/schema';

export const metadata = {
  title: 'Investor Pathway — $2497',
  description: 'ROS™ Investor Pathway — 12 months of full-system access for relocating capital across borders, covering investment visas, FBAR/FATCA, exit tax exposure, and international banking and estate planning.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/services/ros-investor-pathway/' },
};

export default function InvestorPathwayPage() {
  return (
    <>
      <JsonLd
        data={graph(
          service({
            path: '/services/ros-investor-pathway/',
            name: 'ROS™ Investor Pathway',
            description: metadata.description,
            price: 2497,
            serviceType: 'International relocation program',
          }),
          breadcrumbs([{ name: 'Services', path: '/services/' }], { name: 'ROS™ Investor Pathway', path: '/services/ros-investor-pathway/' })
        )}
      />
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>ROS™ Pathway · $2,497 · 12-Month Access</p>
          <h1>Investor Pathway</h1>
          <p>You're moving capital, not just yourself. The legal and financial infrastructure required to do that correctly across an international border is not the same as what you built in the U.S. — and the cost of getting it wrong is significant.</p>
          <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/work-with-me" className="btn btn-gold">Get the Investor Pathway — $2,497 →</Link>
            <Link href="/services/discovery-call" className="btn btn-outline">Book a Free Call First →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What the Investor Pathway Covers</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>All seven ROS™ modules — with the depth required for someone relocating capital, not just a household:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Investment visa and residency-by-investment pathways: minimum thresholds, qualifying assets, and approval timelines</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Cross-border capital structure: what assets can move, what must stay, and how to structure both legally</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>FBAR and FATCA compliance: reporting requirements for foreign accounts and assets that most U.S. investors get wrong</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Exit tax exposure: what triggers the exit tax for long-term residents, and how to plan around it legally</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>International banking: correspondent banking, private banking access abroad, and currency management</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Real estate investment abroad: foreign property purchase rights, title structure, and financing options</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Estate and succession planning across borders: international wills, trust structures, and beneficiary planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>What You Get</h2>
          <ul style={{maxWidth:'760px', marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>12 months of full ROS™ system access across all seven modules</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Investor Pathway — tasks and decisions built for cross-border capital movement</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Investment visa and residency-by-investment pathway analysis</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>FBAR, FATCA, and exit tax compliance framework</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>International banking and capital structure guidance</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Cross-border estate and succession planning framework</li>
          </ul>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Ready to Build Your System?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Not sure this is the right tier? The <Link href="/services/discovery-call">free discovery call</Link> takes 15 minutes and will tell you exactly where to start.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="/work-with-me" className="btn btn-gold">Get the Investor Pathway — $2,497 →</Link>
              <Link href="/services" className="btn btn-outline">Compare All Tiers →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
