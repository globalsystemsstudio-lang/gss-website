import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import { graph, service, breadcrumbs } from '../../../lib/schema';

export const metadata = {
  title: 'Legacy Pathway — $1997',
  description: 'ROS™ Legacy Pathway — 12 months of full-system access for later-in-life international relocation, covering Social Security strategy, retirement income, healthcare, and cross-border estate planning.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/services/ros-legacy-pathway/' },
};

export default function LegacyPathwayPage() {
  return (
    <>
      <JsonLd
        data={graph(
          service({
            path: '/services/ros-legacy-pathway/',
            name: 'ROS™ Legacy Pathway',
            description: metadata.description,
            price: 1997,
            serviceType: 'International relocation program',
          }),
          breadcrumbs([{ name: 'Services', path: '/services/' }], { name: 'ROS™ Legacy Pathway', path: '/services/ros-legacy-pathway/' })
        )}
      />
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>ROS™ Pathway · $1,997 · 12-Month Access</p>
          <h1>Legacy Pathway</h1>
          <p>You've worked your whole life for this. Now you want to spend your next chapter somewhere that gives you more — more time, more value, more life — on a budget that actually works. ROS™ Legacy Pathway is built around that move.</p>
          <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/work-with-me" className="btn btn-gold">Get the Legacy Pathway — $1,997 →</Link>
            <Link href="/services/discovery-call" className="btn btn-outline">Book a Free Call First →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>The Questions That Keep Legacy Movers Up at Night</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>The Legacy Pathway was built around the real, high-stakes questions that come with a later-in-life international move:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>What happens to your Social Security if you leave the U.S. — and when is the right age to claim?</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>How do you receive pension or retirement income in a foreign country without losing it to currency conversion fees or foreign taxes?</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>What does healthcare actually look like abroad with a pre-existing condition — and how do you ensure continuity of prescription coverage?</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>How do you structure your estate so your U.S. assets pass correctly to your heirs if you die abroad?</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>What are the residency pathways for people over 50 in the countries you're considering — and which ones are the most stable long-term?</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>What does sustainable life abroad look like financially — year one, year five, year ten?</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>What You Get</h2>
          <ul style={{maxWidth:'760px', marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>12 months of full ROS™ system access across all seven modules</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Legacy Pathway — tasks and decisions built for later-in-life relocation</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Social Security strategy: when to claim, how it's taxed abroad, and the 2036 timeline</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Retirement income structure: pensions, IRAs, 401(k)s, and currency planning</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Healthcare abroad: international insurance, pre-existing conditions, and prescription continuity</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Estate planning across borders: wills, beneficiaries, and asset transfer abroad</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Long-term residency pathways and re-entry rights for retirement-age movers</li>
          </ul>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Ready to Build Your System?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Not sure this is the right tier? The <Link href="/services/discovery-call">free discovery call</Link> takes 15 minutes and will tell you exactly where to start.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="/work-with-me" className="btn btn-gold">Get the Legacy Pathway — $1,997 →</Link>
              <Link href="/services" className="btn btn-outline">Compare All Tiers →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
