import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import { graph, service, breadcrumbs } from '../../../lib/schema';

export const metadata = {
  title: 'Family Edition Pathway — $1197',
  description: 'ROS™ Family Edition Pathway — 9 months of dual-access, full-system relocation guidance built for families, covering school enrollment, family visas, healthcare, housing, and estate planning across borders.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/services/ros-family-edition-pathway/' },
};

export default function FamilyEditionPathwayPage() {
  return (
    <>
      <JsonLd
        data={graph(
          service({
            path: '/services/ros-family-edition-pathway/',
            name: 'ROS™ Family Edition Pathway',
            description: metadata.description,
            price: 1197,
            serviceType: 'International relocation program',
          }),
          breadcrumbs([{ name: 'Services', path: '/services/' }], { name: 'ROS™ Family Edition Pathway', path: '/services/ros-family-edition-pathway/' })
        )}
      />
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>ROS™ Pathway · $1,197 · 9-Month Dual Access</p>
          <h1>Family Edition Pathway</h1>
          <p>You're moving with people who depend on you. Missing a school enrollment deadline, signing the wrong lease, or arriving on the wrong visa type isn't a setback — it's a crisis. ROS™ Family Edition is built around that weight.</p>
          <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/work-with-me" className="btn btn-gold">Get the Family Edition Pathway — $1,197 →</Link>
            <Link href="/services/discovery-call" className="btn btn-outline">Book a Free Call First →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What the Family Edition Covers</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>ROS™ Family Edition works through all seven modules with family-specific depth — the decisions that are high stakes when you're responsible for others:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>School enrollment deadlines, international curriculum options, and language immersion logistics</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Family visa and residency pathways — including dependent visas and education-linked permits</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Family healthcare coverage including pediatric care and specialist access abroad</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Housing sized for families in foreign markets — what to look for, what to avoid</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Financial structure for a dual-income or single-income family household across borders</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Cultural integration and community-building for children and partners</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Long-term planning: education continuity, estate planning, and family stability abroad</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>What You Get</h2>
          <ul style={{maxWidth:'760px', marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>9 months of full ROS™ system access — dual access (two logins) included</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Family Edition Pathway — tasks and decisions filtered for multi-person households</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>School enrollment timelines and education infrastructure guidance</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Family visa and dependent residency pathways</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Family healthcare and pediatric access planning</li>
          </ul>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Ready to Build Your System?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Not sure this is the right tier? The <Link href="/services/discovery-call">free discovery call</Link> takes 15 minutes and will tell you exactly where to start.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="/work-with-me" className="btn btn-gold">Get the Family Edition Pathway — $1,197 →</Link>
              <Link href="/services" className="btn btn-outline">Compare All Tiers →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
