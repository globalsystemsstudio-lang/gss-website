import Link from 'next/link';

export const metadata = {
  title: 'Beyond the Borders — Podcast | Global Systems Studio',
  description: 'Beyond the Borders — real conversations about what it actually takes to relocate internationally, hosted by Global Systems Studio founder Charlene.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/podcast/' },
};

export default function PodcastPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>Podcast</p>
          <h1>Beyond the Borders</h1>
          <p>Real conversations about what it actually takes to relocate internationally — the financial moves, the legal questions, and the life on the other side.</p>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">Episode 1</span>
          <h2 style={{marginTop:'8px'}}>Beyond the Borders: The Global Move</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>The move that prompted everything — and what it took to figure it out. This episode covers the questions that don't have easy answers: what the real cost of relocation looks like, why the standard advice falls short, and how the ROS™ framework came to exist.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://www.buzzsprout.com/2631999/episodes/19568220-beyond-the-borders_-the-global-move.mp3?download=true" className="btn btn-gold">Download Episode</a>
              <a href="https://www.buzzsprout.com/2631999" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Listen on Buzzsprout ↗</a>
            </div>
            <audio controls style={{marginTop:'16px', width:'100%', maxWidth:'500px'}}>
              <source src="https://www.buzzsprout.com/2631999/episodes/19568220-beyond-the-borders_-the-global-move.mp3?download=true" type="audio/mpeg" />
              Your browser does not support the audio element. <a href="https://www.buzzsprout.com/2631999/episodes/19568220-beyond-the-borders_-the-global-move.mp3?download=true">Download the episode</a>.
            </audio>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>About the Show</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}><strong>Beyond the Borders</strong> is where the real conversations about international relocation happen. Not the highlight reel. Not the "just do it" advice from someone who moved to Bali with a laptop and a yoga mat.</p>
            <p style={{marginTop:'16px', color:'var(--text-light)'}}>This show is for U.S. persons navigating the actual complexity of leaving — FBAR filings, tax obligations, business structures abroad, Social Security timing, healthcare coverage, housing transitions, and everything else that determines whether your move works long-term or falls apart in year two.</p>
            <p style={{marginTop:'16px', color:'var(--text-light)'}}>Hosted by Global Systems Studio founder Charlene, who built the ROS™ framework in the middle of her own international relocation because the infrastructure didn't exist.</p>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Want the System Behind the Show?</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>The ROS™ framework is the step-by-step infrastructure for U.S. persons relocating internationally. Seven modules. Real answers.</p>
            <div style={{marginTop:'24px'}}>
              <Link href="/what-is-ros" className="btn btn-gold">Learn About ROS™ →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
