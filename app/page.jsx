import Link from 'next/link';

export const metadata = {
  title: 'Global Systems Studio | ROS™ — Relocation Operating System',
  description: 'The step-by-step infrastructure for U.S. persons relocating internationally. Seven modules. Six tiers. Real answers.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/' },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>You've Made the Decision. Now You Need a System.</h1>
          <p className="answer-capsule">
            ROS™ — the Relocation Operating System — is the step-by-step infrastructure built for people who are serious about moving internationally and need real answers, not a highlight reel.
          </p>
          <div className="hero-ctas">
            <Link href="/who-its-for" className="btn btn-gold">Find Your Tier →</Link>
            <Link href="/our-story" className="btn btn-outline-white">Read Our Story →</Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>You're Not Just Moving. You're Rebuilding Your Life.</h2>
          <div style={{maxWidth:'760px', marginTop:'24px'}}>
            <p>International relocation isn't a trip. It's a complete reimagining of how and where you live.</p>
            <p>It's the excitement of a new chapter — and the quiet fear that you've missed something critical. It's lying awake running numbers, wondering what happens to your Social Security if you work abroad. Asking yourself whether your professional skills will even transfer. Trying to figure out how to move two people with two vehicles into a country that won't accept either car.</p>
            <p>It's watching relocation content online and coming away more nervous than when you started — because nobody in those videos is answering <em>your</em> questions. They're answering theirs.</p>
            <p style={{fontWeight:'700', color:'var(--primary)', fontSize:'18px'}}>If that's where you are right now, you're in the right place.</p>
          </div>
        </div>
      </section>

      {/* WHAT IS ROS */}
      <section className="what-is-ros">
        <div className="container">
          <span className="section-tag">The System</span>
          <h2>The System That Covers What Everyone Else Leaves Out</h2>
          <p className="section-intro">
            ROS™ stands for the <strong>Relocation Operating System</strong> — a structured infrastructure of organized tasks and decisions built to guide you through every phase of an international move.
          </p>
          <p style={{maxWidth:'760px', marginTop:'20px', color:'var(--text-light)'}}>
            Seven modules. Six tiers built around your specific life stage. Real answers to the questions that keep you up at night — legal, financial, housing, healthcare, business, family, and long-term stability.
          </p>
          <p style={{maxWidth:'760px', marginTop:'12px', fontWeight:'700', fontSize:'18px', color:'var(--primary)'}}>
            Not inspiration. Infrastructure.
          </p>
          <div style={{marginTop:'32px'}}>
            <Link href="/what-is-ros" className="btn btn-gold">Learn exactly how ROS™ works →</Link>
          </div>
        </div>
      </section>

      {/* FOUNDER MOMENT */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="section-tag">Our Story</span>
              <h2>Built by Someone Who Is Living It Right Now</h2>
              <p>I built a decades-long career, and after a layoff I made the decision most people only dream about: I was leaving the United States.</p>
              <p>What I found was that being accomplished, resourceful, and experienced was not the same as being prepared. The questions flooded in and didn't stop. The finances. The vehicles we couldn't take. My husband's heart condition. His plans to open a business. My own question of where a woman over 60 even begins to look for work in a country she hasn't lived in for decades.</p>
              <p>I built ROS™ because I needed it. And I'm still building it — because every conversation opens new questions, and I don't stop until I have the answers.</p>
              <p className="about-attribution">— Our Team, Global Systems Studio</p>
              <div style={{marginTop:'28px'}}>
                <Link href="/our-story" className="btn btn-gold">Read the full story →</Link>
              </div>
            </div>
            <div className="about-photo">
              <img
                src="/founder.jpg"
                alt="Founder of Global Systems Studio"
                style={{width:'100%', aspectRatio:'3/4', objectFit:'cover', objectPosition:'center top', borderRadius:'16px', display:'block'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS ROS FOR */}
      <section className="who-its-for">
        <div className="container">
          <span className="section-tag">Who It's For</span>
          <h2>Find Yourself Here</h2>
          <p className="section-intro">ROS™ isn't built for a generic relocator. It's built for you — wherever you are in life, whatever brought you to this decision.</p>
          <div className="profiles-grid">
            {[
              { icon: '🌐', title: 'The Digital Nomad', desc: 'You work remotely and want the freedom to live anywhere — legally, financially smart, and without losing your mind in the process.' },
              { icon: '🧳', title: 'The Solo Relocator', desc: "You're making this move on your own — by choice or by circumstance — and you're determined to get it right." },
              { icon: '👨‍👩‍👧', title: 'The Family', desc: "You're moving with people who depend on you and getting it wrong isn't an option." },
              { icon: '💼', title: 'The Entrepreneur', desc: 'You own a business or are building something new in a foreign market and need your legal and financial structure to work across borders.' },
              { icon: '🏡', title: 'The Legacy Mover', desc: "You've worked your whole life for this. Now you want to spend your next chapter somewhere that gives you more — on a budget that actually works." },
              { icon: '📈', title: 'The Investor', desc: "You're moving capital, not just yourself — and you need the legal and financial infrastructure to do it right in a new country." },
            ].map((tier) => (
              <div key={tier.title} className="profile-card">
                <div className="profile-icon">{tier.icon}</div>
                <h3>{tier.title}</h3>
                <p>{tier.desc}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:'40px'}}>
            <Link href="/who-its-for" className="btn btn-gold">See the full breakdown for your tier →</Link>
          </div>
        </div>
      </section>

      {/* 7 MODULES */}
      <section className="modules">
        <div className="container">
          <span className="section-tag">The System</span>
          <h2>Seven Modules. Every Decision Covered.</h2>
          <p className="modules-intro">ROS™ walks you through seven areas — the same seven areas where international relocations fall apart when there's no system in place.</p>
          <div className="module-list">
            {[
              { num: '1', name: 'Legal & Documentation', desc: 'Visas, residency permits, apostilles, international notarization, citizenship pathways. Every document you need and every step to make it valid abroad.' },
              { num: '2', name: 'Financial Structure', desc: 'Banking, FBAR compliance, capital gains timing, foreign income tax, currency planning, Social Security strategy, and the financial decisions that must be made before you leave.' },
              { num: '3', name: 'Housing & Lifestyle', desc: 'Finding and securing housing in a foreign market — without overpaying, signing the wrong lease, or missing communications you didn\'t know to watch for.' },
              { num: '4', name: 'Healthcare & Wellness', desc: 'Insurance abroad, prescription continuity, specialist care access, and the healthcare questions that must be answered for anyone with ongoing medical needs.' },
              { num: '5', name: 'Business & Income', desc: 'Whether you\'re working remotely, joining the local job market, or opening a business in your destination country — this module covers the legal, tax, and operational structure you need.' },
              { num: '6', name: 'Family & Social Integration', desc: 'School enrollment timelines, cultural adjustment, community building, and the emotional and relational dimensions of leaving everything you know.' },
              { num: '7', name: 'Long-Term Stability', desc: 'Estate planning, re-entry options, Social Security strategy, retirement income planning, and what sustainable life abroad actually requires beyond year one.' },
            ].map((mod) => (
              <div key={mod.num} className="module-row">
                <div className="module-num">{mod.num}</div>
                <div className="module-name">{mod.name}</div>
                <div className="module-desc">{mod.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CAN GO WRONG */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">What's at Stake</span>
          <h2>What Nobody Tells You — Until It's Too Late</h2>
          <p style={{maxWidth:'720px', marginTop:'16px', color:'var(--text-light)'}}>Most people don't find out what they missed until they're already there. Here's what we see happen:</p>
          <ul className="warning-list" style={{marginTop:'32px'}}>
            <li>Arriving on the wrong visa and missing the residency conversion window — resulting in fines or forced departure</li>
            <li>Technology infrastructure failing the moment you cross a border — banking lockouts, authentication issues, platform access gone</li>
            <li>Missing school enrollment deadlines and watching your child lose a full academic year</li>
            <li>Signing a lease without understanding the exit clause, the deposit rules, or what "furnished" actually means locally</li>
            <li>Losing your U.S. income abroad with no contingency plan and no legal right to work locally</li>
            <li>Discovering your professional credentials don't automatically transfer — after you've already made the move</li>
            <li>Finding out your documents needed an apostille, not just a notary — at the moment you needed to submit them</li>
          </ul>
          <div style={{marginTop:'36px'}}>
            <Link href="/why-you-need-this" className="btn btn-gold">Read the full breakdown — and how ROS™ addresses every one →</Link>
          </div>
        </div>
      </section>

      {/* WORK WITH ME */}
      <section className="pricing" style={{background:'var(--white)'}}>
        <div className="container">
          <span className="section-tag">Work With Me</span>
          <h2>Ready to Build Your System?</h2>
          <p style={{maxWidth:'640px', marginTop:'16px', color:'var(--text-light)'}}>Start free, go deep, or get the books. Every entry point leads to the same place — a plan that actually works for your situation.</p>
          <div className="pricing-grid-4" style={{marginTop:'48px'}}>
            {[
              { name: 'Free Discovery Call', price: 'FREE', access: '15-Minute Video Call', desc: "Not sure if ROS™ is right for you? Let's talk first. No pressure, no pitch.", cta: 'Book Your Free Call', href: 'https://calendar.app.google/5GiW8EZKoyB7SqEKA' },
              { name: 'Clarity Session', price: '$497', access: '45-Minute 1:1 Call', desc: 'Your situation, your questions, your next steps. Walk away with a clear picture of what to do and in what order.', cta: 'Book a Clarity Session', href: 'https://calendar.app.google/GqshRNZbP1LTvwKJ9' },
              { name: 'ROS™ Pathways', price: 'From $697', access: 'Full System Access', desc: 'Six tiers built around your life stage — Digital Nomad through Investor. The complete infrastructure for your move.', cta: 'Find Your Tier', href: '/work-with-me' },
              { name: 'Books & Guides', price: 'From $27', access: 'Digital Download', desc: 'New Roots ($27) and Across Streets & Seas ($47) — or both bundled at $64. Start building your foundation today.', cta: 'Get the Books', href: '/work-with-me' },
            ].map((offer) => (
              <div key={offer.name} className="pricing-card">
                <div className="pricing-tier-name">{offer.name}</div>
                <div className="pricing-price">{offer.price}</div>
                <div className="pricing-access">{offer.access}</div>
                <p style={{fontSize:'14px', color:'var(--text-light)', flex:1, marginBottom:'24px'}}>{offer.desc}</p>
                <Link href={offer.href} className="btn btn-gold">{offer.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">From the Blog</span>
          <h2>Real Questions. Real Answers. No Highlight Reel.</h2>
          <div className="blog-grid">
            <Link href="/blog/financial-considerations-us-persons-relocating-internationally" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>What Nobody Told Me About Social Security and Moving Abroad</h3>
              <p>The age. The 2036 problem. The decisions that have permanent consequences either way.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/find-financial-planning-services-moving-abroad" className="blog-card">
              <span className="blog-card-tag">Career &amp; Income</span>
              <h3>Finding Work After 60 in a Foreign Country — Where Do You Even Begin?</h3>
              <p>Credential transferability, legal parameters, and the question nobody in the relocation space is talking about.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/how-international-relocation-consultancy-works" className="blog-card">
              <span className="blog-card-tag">Relocation Strategy</span>
              <h3>What the Relocation Influencers Aren't Telling You</h3>
              <p>Why the highlight reel made me more nervous — not less. And what actually helps.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
          </div>
          <div style={{marginTop:'40px', textAlign:'center'}}>
            <Link href="/blog" className="btn btn-gold">See all posts →</Link>
          </div>
        </div>
      </section>

      {/* PODCAST */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <div style={{display:'flex', flexDirection:'row', gap:'60px', alignItems:'center', flexWrap:'wrap'}}>
            <div style={{flexShrink:0}}>
              <img
                src="/podcast-cover.png"
                alt="Beyond the Border: The Global Move Podcast"
                style={{width:'260px', height:'260px', objectFit:'cover', borderRadius:'16px', display:'block', boxShadow:'0 8px 32px rgba(0,0,0,0.12)'}}
              />
            </div>
            <div style={{flex:1, minWidth:'260px'}}>
              <span className="section-tag">The Podcast</span>
              <h2>Beyond the Border: The Global Move</h2>
              <p style={{maxWidth:'560px', marginTop:'16px', color:'var(--text-light)'}}>
                Real conversations about what it actually takes to leave the United States and build a life somewhere new. No highlight reel — just the questions, the answers, and the system behind the move.
              </p>
              <div style={{marginTop:'28px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
                <a href="https://open.spotify.com" className="btn btn-gold" target="_blank" rel="noopener noreferrer">Listen on Spotify →</a>
                <a href="https://podcasts.apple.com" className="btn btn-outline-white" target="_blank" rel="noopener noreferrer">Apple Podcasts →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>You Don't Have to Figure This Out Alone.</h2>
          <p>The questions are real. The stakes are real. And the answers exist — you just need the right system to find them.</p>
          <Link href="/work-with-me" className="btn btn-gold">Start Here →</Link>
        </div>
      </section>
    </>
  );
}
