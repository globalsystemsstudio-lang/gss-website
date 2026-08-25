import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import { graph, service, breadcrumbs } from '../../../lib/schema';

export const metadata = {
  title: 'Entrepreneur Pathway — $1597',
  description: 'ROS™ Entrepreneur Pathway — 9 months of full-system access for business owners relocating abroad, covering business visas, cross-border entity setup, tax strategy, and international banking.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/services/ros-entrepreneur-pathway/' },
};

export default function EntrepreneurPathwayPage() {
  return (
    <>
      <JsonLd
        data={graph(
          service({
            path: '/services/ros-entrepreneur-pathway/',
            name: 'ROS™ Entrepreneur Pathway',
            description: metadata.description,
            price: 1597,
            serviceType: 'International relocation program',
          }),
          breadcrumbs([{ name: 'Services', path: '/services/' }], { name: 'ROS™ Entrepreneur Pathway', path: '/services/ros-entrepreneur-pathway/' })
        )}
      />
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>ROS™ Pathway · $1,597 · 9-Month Access</p>
          <h1>Entrepreneur Pathway</h1>
          <p>You own a business or you're building something new in a foreign market. The legal, tax, and operational structure that works in the U.S. doesn't automatically work across a border — and building it wrong has consequences that follow you for years.</p>
          <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/work-with-me" className="btn btn-gold">Get the Entrepreneur Pathway — $1,597 →</Link>
            <Link href="/services/discovery-call" className="btn btn-outline">Book a Free Call First →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What the Entrepreneur Pathway Covers</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>All seven ROS™ modules — with deep coverage of the business and financial decisions that U.S. entrepreneurs face when they move their operations internationally:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Business visa and entrepreneur residency pathways for your destination country</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Foreign business entity setup — when to use a local entity, when to keep your U.S. structure</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Cross-border tax strategy: FBAR, FATCA, foreign earned income exclusion, and Subpart F implications</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Banking infrastructure for a cross-border business — what works, what breaks, and what to build first</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>U.S. business continuity while building abroad — what you can and can't do legally</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Hiring, employment law, and contractor structure in your destination country</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Long-term stability: entity management, exit planning, and re-entry considerations</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>What You Get</h2>
          <ul style={{maxWidth:'760px', marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>9 months of full ROS™ system access across all seven modules</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Entrepreneur Pathway — curated tasks and decisions for business owners and founders</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Cross-border business structure and entity setup guidance</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Tax strategy framework for U.S. entrepreneurs operating abroad</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>International banking and payment infrastructure for a cross-border business</li>
          </ul>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Ready to Build Your System?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Not sure this is the right tier? The <Link href="/services/discovery-call">free discovery call</Link> takes 15 minutes and will tell you exactly where to start.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="/work-with-me" className="btn btn-gold">Get the Entrepreneur Pathway — $1,597 →</Link>
              <Link href="/services" className="btn btn-outline">Compare All Tiers →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
