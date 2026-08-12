import Link from 'next/link';

export const metadata = {
  title: 'Across Streets & Seas — $47 | Global Systems Studio',
  description: 'Across Streets & Seas — the deeper companion for serious movers. Legal, financial, housing, healthcare, and logistics for making an international move actually work.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/shop/across-streets-and-seas/' },
};

export default function AcrossStreetsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>Digital Download · $47</p>
          <h1>Across Streets & Seas</h1>
          <p>The deeper companion for serious movers. For when you've made the decision, you know where you're going, and now you need the logistics, legal reality, and financial infrastructure to actually get there right.</p>
          <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="https://www.paypal.com/ncp/payment/PDCK6MLEFJG8W" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Across Streets & Seas — $47 →</Link>
            <Link href="/shop/relocation-library" className="btn btn-outline">Get Both Books — $64 →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What Across Streets & Seas Covers</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>This is the guide for people past the "should I move?" question and into the "how do I make this work?" phase. It goes deeper into the legal, financial, and logistical mechanics of an international move:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Residency and visa mechanics: what to apply for, in what order, and what happens if you get it wrong</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Financial infrastructure: FBAR, foreign banking, currency strategy, and what to address before you leave</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Housing abroad: finding it, evaluating it, signing for it, and understanding what you're actually agreeing to</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Healthcare: what your U.S. insurance actually covers abroad and what you need to replace it with</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Credentials and career: what transfers, what doesn't, and how to navigate the gap</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Technology and logistics: banking access, phone plans, digital infrastructure across borders</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Long-term stability: what you need to plan before year one ends</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Best For</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Across Streets & Seas is the right guide if you are:</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Past the early exploration phase and ready for substantive detail on execution</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Researching a specific country and want to understand the real logistics</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>A reader who already has the foundation (or read New Roots) and needs the next layer</li>
              <li style={{color:'var(--text)', lineHeight:'1.6'}}>Moving within the next 12 months and want a comprehensive reference you can return to</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Ready to Go Deeper?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Digital download — delivered immediately after purchase. Or get both books bundled at <Link href="/shop/relocation-library">$64 in the Relocation Library</Link> and save $10.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="https://www.paypal.com/ncp/payment/PDCK6MLEFJG8W" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Across Streets & Seas — $47 →</Link>
              <Link href="/shop" className="btn btn-outline">See All Books →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
