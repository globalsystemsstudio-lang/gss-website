import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import { graph, service, breadcrumbs } from '../../../lib/schema';

export const metadata = {
  title: 'Free Discovery Call',
  description: 'A free 15-minute call to find out where you are in the relocation process and whether ROS™ — and which tier — fits your situation. No pitch, no pressure.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/services/discovery-call/' },
};

export default function DiscoveryCallPage() {
  return (
    <>
      <JsonLd
        data={graph(
          service({
            path: '/services/discovery-call/',
            name: 'Free Discovery Call',
            description: metadata.description,
            price: 0,
            serviceType: 'Relocation consulting discovery call',
          }),
          breadcrumbs([{ name: 'Services', path: '/services/' }], { name: 'Free Discovery Call', path: '/services/discovery-call/' })
        )}
      />
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>Free Consultation</p>
          <h1>Free Discovery Call</h1>
          <p>15 minutes. No pitch. No pressure. Just a real conversation about where you are, what you're trying to do, and whether ROS™ is the right fit for your move.</p>
          <div style={{marginTop:'24px'}}>
            <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" className="btn btn-gold">Book Your Free Call →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What Happens on the Call</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>You come with your situation. We come with context. In 15 minutes, we cover:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Where you are in the relocation process and what stage you're in</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>The questions that are keeping you stuck right now</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Whether ROS™ — and which tier — fits your situation</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>What the right next step looks like for you specifically</li>
            </ul>
            <p style={{marginTop:'24px', color:'var(--text-light)'}}>This isn't a sales call. It's a quick fit check — honest, direct, and built around your reality, not a script.</p>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Who This Is For</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>The discovery call is the right place to start if:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You've made the decision to move internationally but don't know where to begin</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You're researching options and want to understand what ROS™ actually covers</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You have a specific situation — health condition, business, pension, aging parent — and want to know if ROS™ addresses it</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You're not sure which tier fits your life stage</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What Comes Next</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>After the discovery call, you'll know exactly whether — and how — to move forward. If ROS™ is the right fit, we'll point you to your tier. If a Clarity Session is a better first step, we'll say so. And if neither is right for where you are, we'll tell you that too.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" className="btn btn-gold">Book Your Free Call →</Link>
              <Link href="/services" className="btn btn-outline">See All Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
