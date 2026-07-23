import Link from 'next/link';

export const metadata = {
  title: 'Testimonials & Social Proof — Our Team, Global Systems Studio',
  description: "Proof starts with the founder. ROS™ was built by someone living through exactly what you are navigating — and that is the most honest proof that this system works.",
  alternates: { canonical: 'https://www.globalsystemsstudio.com/testimonials/' },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Proof Doesn't Start With Our Clients. It Starts With Us.</h1>
          <p>Before you hear from anyone else, hear from our team — because the most honest proof that this system works is that we built it while living through exactly what you're navigating.</p>
        </div>
      </section>

      {/* FOUNDER AS PROOF */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>I Didn't Build This From a Distance. I Built It From Inside the Decision.</h2>
          <div style={{maxWidth:'760px', marginTop:'24px'}}>
            <p>I am not a researcher who studied international relocation and packaged it into a program. I am someone who was laid off at 61, decided to return to the country I came from, and discovered that everything I thought I knew about being prepared was not enough.</p>
            <p>I am currently navigating:</p>
            <ul className="founder-proof-list">
              <li>The emotional weight of leaving my children, grandchildren, friends, and social network — all built over decades in the United States</li>
              <li>A husband with a heart condition whose healthcare needs must be planned across borders</li>
              <li>Two vehicles that can't be imported because they're over 10 years old — which means two new cars to purchase, finance, and insure in a foreign country</li>
              <li>A spouse who wants to open a business in a foreign country — which requires its own research, legal process, and financial planning</li>
              <li>Questions about where <em>I</em> find work at my age in a country whose job market I haven't been part of in decades</li>
              <li>Social Security decisions that have permanent consequences either way</li>
              <li>The rising cost of shipping, appliances, and setting up a household from scratch</li>
              <li>Document authentication processes I didn't know existed until I needed them</li>
              <li>A monthly budget that has to account for every one of these variables simultaneously</li>
            </ul>
            <p>ROS™ is not a finished product created from a place of having everything figured out. It is a living system built from the questions I refused to stop asking — and the answers I refused to stop finding.</p>
            <p style={{fontWeight:'700', color:'var(--primary)', fontSize:'17px'}}>That is the proof. I am still in it. I am still building it. And every answer I find goes directly into the system that helps you not have to start from zero.</p>
            <p className="about-attribution" style={{marginTop:'28px'}}>— Our Team, Global Systems Studio</p>
          </div>
        </div>
      </section>

      {/* COMMUNITY TESTIMONIALS PLACEHOLDER */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>What Our Community Is Saying</h2>
          <p style={{maxWidth:'640px', marginTop:'16px', color:'var(--text-light)'}}>As ROS™ members share their experiences, their stories will live here.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'24px', marginTop:'48px'}}>
            {[
              { tier: 'Legacy Mover', moved_to: 'Caribbean' },
              { tier: 'Family', moved_to: 'Latin America' },
              { tier: 'Entrepreneur', moved_to: 'Europe' },
              { tier: 'Solo Relocator', moved_to: 'Asia Pacific' },
            ].map((item) => (
              <div key={item.tier} className="testimonial-card" style={{opacity:0.6, border:'2px dashed var(--border)'}}>
                <blockquote style={{color:'var(--text-light)', fontStyle:'italic'}}>"[Testimonial from a {item.tier} who relocated to {item.moved_to} — coming soon as community members share their stories]"</blockquote>
                <div className="testimonial-meta">
                  <strong>Tier: {item.tier}</strong>
                  Destination: {item.moved_to}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A NOTE ON WHERE WE ARE */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <div style={{maxWidth:'720px'}}>
            <h2>We're Early — and That's On Purpose.</h2>
            <p>ROS™ is new. The community is growing. The testimonials you see above will fill in as people move through the system and share their experiences.</p>
            <p>What isn't new is the knowledge behind it, the questions it was built to answer, or the commitment to being honest about what international relocation actually requires.</p>
            <p>If you're early to ROS™, you're not too early. You're getting in before the crowd — with direct access to the founder, a system that's actively being built around real questions from real people, and a community that's small enough right now to be genuinely personal.</p>
            <p style={{fontWeight:'700', color:'var(--primary)', fontSize:'17px'}}>That is not a limitation. That is an advantage.</p>
          </div>
        </div>
      </section>

      {/* SHARE YOUR STORY */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <div style={{maxWidth:'640px'}}>
            <h2>Have You Worked With ROS™? We'd Love to Hear From You.</h2>
            <p>Your experience — the questions you came in with, the answers you found, what changed for you — is exactly what helps the next person trust that this is real.</p>
            <div style={{marginTop:'28px'}}>
              <Link href="/contact" className="btn btn-gold">Share Your Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Your Story Is Still Being Written. Let's Make Sure It Goes the Way You Want.</h2>
          <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap', marginTop:'32px'}}>
            <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" className="btn btn-gold">Book a Free Discovery Call →</Link>
            <Link href="/who-its-for" className="btn btn-outline-white">Find Your Tier →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
