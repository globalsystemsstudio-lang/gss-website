import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import { graph, service, breadcrumbs } from '../../../lib/schema';

export const metadata = {
  title: 'Clarity Session — $497',
  description: 'A 45-minute 1:1 call built around your specific relocation situation — your top questions answered, a prioritized sequence of next steps, and a written follow-up summary.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/services/clarity-session/' },
};

export default function ClaritySessionPage() {
  return (
    <>
      <JsonLd
        data={graph(
          service({
            path: '/services/clarity-session/',
            name: 'Clarity Session',
            description: metadata.description,
            price: 497,
            serviceType: 'One-to-one relocation consulting call',
          }),
          breadcrumbs([{ name: 'Services', path: '/services/' }], { name: 'Clarity Session', path: '/services/clarity-session/' })
        )}
      />
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>1:1 Consultation · $497</p>
          <h1>Clarity Session</h1>
          <p>45 minutes. Your situation. Your questions. Your next steps — in order. Walk away knowing exactly what to do and where to start.</p>
          <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/work-with-me" className="btn btn-gold">Book Your Clarity Session →</Link>
            <Link href="/services/discovery-call" className="btn btn-outline">Start With a Free Call First →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What You Get</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>A Clarity Session is 45 minutes of focused, 1:1 time built around your specific relocation situation. We cover:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Your top 3–5 relocation questions — answered with real specifics, not general advice</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>A prioritized sequence of what to handle first, second, and third</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Red flags in your current plan that need attention before you move forward</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Recommendations on which ROS™ tier — if any — fits your next phase</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>A follow-up summary of the key points covered</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Best For</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>The Clarity Session is the right next step when:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You've done research but still feel uncertain about the actual sequence of steps</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You have a complex situation — health condition, business structure, pension, spouse's employment — that needs a specific look</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You're deciding between countries and need to stress-test your reasoning</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You've hit a specific wall and need expert eyes on it before moving forward</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>How It Works</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Book your session using the link below. You'll receive a short intake form before the call so we can make the 45 minutes as focused as possible. The session runs on video. Within 48 hours you'll receive a written summary of the key points and next steps discussed.</p>
            <p style={{marginTop:'16px', color:'var(--text-light)'}}>Not ready for a paid session yet? Start with the <Link href="/services/discovery-call">free 15-minute discovery call</Link> first.</p>
            <div style={{marginTop:'24px'}}>
              <Link href="/work-with-me" className="btn btn-gold">Book Your Clarity Session — $497 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
