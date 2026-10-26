import Link from 'next/link';

export const metadata = {
  title: 'New Roots — $27',
  description: 'New Roots — the starting guide for anyone beginning the international relocation journey. Where to start, what to prioritize, and how to think about the move before you can know what to ask next.',
  alternates: { canonical: 'https://globalsystemsstudio.com/shop/new-roots/' },
};

export default function NewRootsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>Digital Download · $27</p>
          <h1>New Roots</h1>
          <p>A book to help you start planning a move abroad. Read it to understand the first questions about countries, money, visas and documents.</p>
          <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="https://www.paypal.com/ncp/payment/J3ZZAKPGCJACS" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get New Roots — $27 →</Link>
            <Link href="/shop/relocation-library" className="btn btn-outline">Get Both Books — $64 →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What New Roots Covers</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Start here if you want to move but do not know what to work on first. Download the book and read it at your own pace.</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>How to compare countries using your needs</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>The first legal questions: visas, residency, and what you need to understand before you choose a country</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Early financial decisions: what to address before you leave and what can wait</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>The documents to start gathering now</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>How to evaluate what you're reading online — and why most relocation content is missing the important parts</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>How ROS™ fits into your planning process and what comes after this guide</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Best For</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>New Roots is the right place to start if you are:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>In the early stages of deciding to move internationally and want a structured foundation</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Overwhelmed by what you don't know and need a clear starting framework</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Not ready for a full ROS™ pathway investment yet but want something substantive to work from</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>A partner, spouse, or family member of someone planning a move who wants to understand the landscape</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Ready to Start?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Digital download — delivery follow-up goes to the email on your completed PayPal order. Or get both books bundled at <Link href="/shop/relocation-library">$64 in the Relocation Library</Link>.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="https://www.paypal.com/ncp/payment/J3ZZAKPGCJACS" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get New Roots — $27 →</Link>
              <Link href="/shop" className="btn btn-outline">See All Books →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
