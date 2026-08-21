import Link from 'next/link';

export const metadata = {
  title: 'Five Questions Before Moving Abroad — Free Guide | Global Systems Studio',
  description: 'A visa does not tell you whether your relocation will work. These five questions do — the readiness check to answer honestly before you research a single destination.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/shop/five-questions/' },
};

const questions = [
  {
    num: '1', title: 'What must this move change for me?',
    body: 'Every failed relocation starts with an unclear reason. "Lower cost of living" or "a fresh start" are answers, but they\'re not specific enough to plan around. What problem are you actually trying to solve — and what would tell you, twelve months in, that it worked?',
    body2: 'Get specific about which outcomes are essential and which are just preferences. Preferences can flex. Essentials can\'t. Confusing the two is how people end up in the wrong country for the right reasons.',
    tryThis: 'Complete the sentence — "This relocation will be worthwhile only if…"',
  },
  {
    num: '2', title: 'Can my finances support the full transition?',
    body: 'This is the question people research last and should research first. It\'s not just monthly income after taxes and currency conversion — it\'s the move-in cost (visas, legal fees, shipping, travel, first-and-last housing), the ongoing cost, the emergency reserve, and whatever obligations follow you from home.',
    body2: 'Currency exposure and inflation aren\'t footnotes. They\'re the difference between a budget that holds for five years and one that quietly erodes.',
    tryThis: 'List your move-in cost, your monthly cost, and your exit cost as three separate numbers — not one blended guess.',
  },
  {
    num: '3', title: 'What legal and professional decisions have to happen first?',
    body: 'Residency eligibility, tax residency exposure, banking and reporting obligations, contract review, estate and asset-transfer questions — these aren\'t things to figure out after you land. Getting the sequence wrong is one of the most common and most expensive mistakes in international relocation: choosing a destination before checking tax residency, assuming a visa proves financial eligibility, or discovering a permit only covers tourism, not remote work.',
    body2: 'Planning information gets you oriented. Licensed professionals confirm and implement the parts that are actually regulated. Both matter, in that order.',
    tryThis: null,
  },
  {
    num: '4', title: 'Will daily life actually work for everyone involved?',
    body: 'Healthcare access and continuity, schools or eldercare, safety, transportation, language, and the unglamorous stuff — internet reliability, utilities, how you\'ll handle routine errands in a system you don\'t understand yet. This is where the fantasy version of a country and the lived version diverge the most.',
    body2: null,
    tryThis: 'Describe an ordinary Tuesday in your proposed destination, in detail. If you can\'t, that\'s a research gap, not a small one.',
  },
  {
    num: '5', title: 'What is my exit plan?',
    body: 'The relocations that fall apart are rarely the ones where someone planned for failure. They\'re the ones where nobody did. A scouting trip before committing, lease flexibility, emergency travel funds, access to your own documents, and a real answer for what happens if the first destination doesn\'t work — that\'s not pessimism, it\'s the difference between a setback and a crisis.',
    body2: null,
    tryThis: '"I will pause or reverse the move if…"',
  },
];

export default function FiveQuestionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>Free Guide</p>
          <h1>Five Questions Before Moving Abroad</h1>
          <p>A visa does not tell you whether your relocation will work. These five questions do.</p>
          <div style={{marginTop:'24px'}}>
            <a href="https://drive.google.com/uc?export=download&id=1C6iMQvEop3RwhXhZRigyTifCcYe61Mrn" className="btn btn-gold" target="_blank" rel="noopener noreferrer">Download the Free PDF →</a>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'60px 0'}}>
        <div className="container">
          <div style={{maxWidth:'760px'}}>
            <p style={{color:'var(--text-light)'}}>Most people research a move abroad backwards. They fall in love with a country first — the beaches, the visa program, the cost-of-living headline — and only discover the gap between the fantasy and their actual life after they've already signed a lease. The country search should come last, not first.</p>
            <p style={{marginTop:'16px', color:'var(--text-light)'}}>These are the five questions that surface the gaps before they become expensive mistakes. Answer them honestly before you research a single destination.</p>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'60px 0'}}>
        <div className="container">
          <div style={{display:'flex', flexDirection:'column', gap:'32px'}}>
            {questions.map((q) => (
              <div key={q.num} style={{background:'var(--white)', border:'1px solid var(--border)', borderLeft:'4px solid var(--accent)', borderRadius:'0 12px 12px 0', padding:'32px'}}>
                <div style={{display:'flex', gap:'20px', alignItems:'flex-start'}}>
                  <div style={{fontSize:'32px', fontWeight:'700', color:'var(--accent)', fontStyle:'italic', minWidth:'48px'}}>{q.num}</div>
                  <div>
                    <h3 style={{color:'var(--primary)', marginBottom:'12px'}}>{q.title}</h3>
                    <p style={{color:'var(--text)', lineHeight:'1.75'}}>{q.body}</p>
                    {q.body2 && <p style={{color:'var(--text)', lineHeight:'1.75', marginTop:'12px'}}>{q.body2}</p>}
                    {q.tryThis && (
                      <p style={{marginTop:'16px', fontStyle:'italic', color:'var(--text-light)'}}><strong style={{color:'var(--primary)'}}>Try this: </strong>{q.tryThis}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'60px 0'}}>
        <div className="container">
          <h2>Readiness Snapshot</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>Rate yourself 1–5 on each area: purpose, finances, legal sequence, daily-life fit, exit plan.</p>
            <ul style={{marginTop:'24px', paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'8px'}}>
              <li style={{color:'var(--text)'}}><strong>5–10</strong> — Early exploration — keep researching</li>
              <li style={{color:'var(--text)'}}><strong>11–17</strong> — Structured research needed</li>
              <li style={{color:'var(--text)'}}><strong>18–22</strong> — Planning stage — start building a real plan</li>
              <li style={{color:'var(--text)'}}><strong>23–25</strong> — Ready for professional confirmation and implementation</li>
            </ul>
            <p style={{marginTop:'16px', fontSize:'14px', color:'var(--text-light)', fontStyle:'italic'}}>This is an orientation score, not a legal or financial determination.</p>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'60px 0'}}>
        <div className="container">
          <div style={{maxWidth:'760px'}}>
            <p style={{fontSize:'13px', color:'var(--text-light)'}}>This guide provides general planning information only and is not legal, tax, financial, or immigration advice. Relocation decisions involving residency, tax residency, and cross-border compliance should be confirmed with a licensed professional in the relevant jurisdiction before you act.</p>
            <p style={{fontSize:'13px', color:'var(--text-light)', marginTop:'8px'}}>Version 1.0 · Global Systems Studio · Last reviewed: July 31, 2026</p>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Know Your Gaps. Now Close Them.</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>The ROS™ Relocation Readiness Workbook turns your answers into a structured research and preparation plan — seven modules, one readiness score, and a clear picture of what needs professional confirmation before you move.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="https://www.paypal.com/ncp/payment/BMFEB6UBQLQR6" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get the Readiness Workbook — $27 →</Link>
              <Link href="/shop" className="btn btn-outline">Or browse all guides and planners →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
