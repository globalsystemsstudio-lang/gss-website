import Link from 'next/link';

export const metadata = {
  title: 'Async Q&A — $97 | Global Systems Studio',
  description: 'Submit up to three relocation questions and get a thorough written response built around your specific situation — delivered within 48 business hours, no scheduling required.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/services/async-qa/' },
};

export default function AsyncQAPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>Written Response · $97</p>
          <h1>Async Q&A</h1>
          <p>Submit up to three relocation questions. Get a thorough, written response built around your specific situation — no scheduling, no waiting for a calendar slot.</p>
          <div style={{marginTop:'24px'}}>
            <Link href="/work-with-me" className="btn btn-gold">Get Written Answers — $97 →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What's Included</h2>
          <ul style={{maxWidth:'760px', marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Up to 3 international relocation questions submitted in writing</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>A thorough written response addressed to your specific situation — not generic advice</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>Delivered within 48 business hours</li>
            <li style={{color:'var(--text)', lineHeight:'1.6'}}>No live call required — no scheduling needed</li>
          </ul>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Best For</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>The Async Q&A is the right option when:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You have a specific question that is blocking your progress and you just need an answer</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You prefer written information you can reference later</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Your schedule makes booking a live call difficult</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>You've already done significant research and need targeted clarification, not a full session</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>How It Works</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Complete your payment below. You'll be directed to a short form where you submit your questions and any context we need to give you a useful answer. We'll respond in writing within 48 business hours.</p>
            <p style={{marginTop:'16px', color:'var(--text-light)'}}>Need more than three questions, or have a complex situation that deserves a real conversation? The <Link href="/services/clarity-session">45-minute Clarity Session ($497)</Link> is a better fit.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="/work-with-me" className="btn btn-gold">Get Written Answers — $97 →</Link>
              <Link href="/services" className="btn btn-outline">See All Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
