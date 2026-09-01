import Link from 'next/link';
import RelocationReadinessQuiz from '../components/RelocationReadinessQuiz';

export const metadata = {
  title: 'Global Systems Studio | ROS™ — Relocation Operating System',
  description: 'The step-by-step infrastructure for U.S. persons relocating internationally. Seven modules. Six tiers. Real answers.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/' },
};

const PATHWAYS = [
  { icon: '🌐', title: 'The Digital Nomad', desc: 'You work remotely and want the freedom to live anywhere — legally, financially smart, and without losing your mind in the process.', href: '/who-its-for' },
  { icon: '🧳', title: 'The Solo Relocator', desc: "You're making this move on your own — by choice or by circumstance — and you're determined to get it right.", href: '/who-its-for' },
  { icon: '👨‍👩‍👧', title: 'The Family', desc: "You're moving with people who depend on you and getting it wrong isn't an option.", href: '/who-its-for' },
  { icon: '💼', title: 'The Entrepreneur', desc: 'You own a business or are building something new in a foreign market and need your legal and financial structure to work across borders.', href: '/who-its-for' },
  { icon: '🏡', title: 'The Legacy Mover', desc: "You've worked your whole life for this. Now you want to spend your next chapter somewhere that gives you more — on a budget that actually works.", href: '/who-its-for' },
  { icon: '📈', title: 'The Investor', desc: "You're moving capital, not just yourself — and you need the legal and financial infrastructure to do it right in a new country.", href: '/who-its-for' },
];

const MODULES = [
  { num: '1', name: 'Legal', desc: 'Visas, residency permits, apostilles, citizenship pathways — your legal standing, secured before you need it.' },
  { num: '2', name: 'Financial', desc: 'Banking, FBAR compliance, capital gains timing, Social Security strategy — the money decisions that must be made before you leave.' },
  { num: '3', name: 'Healthcare', desc: 'Insurance abroad, prescription continuity, specialist access — answered before an emergency forces the question.' },
  { num: '4', name: 'Housing & Logistics', desc: "Finding and securing housing without overpaying or signing the wrong lease. And the physical move itself: customs, shipping, getting everything you own to where you're actually going." },
  { num: '5', name: 'Business & Income', desc: "Your income keeps working, even when you don't live where you earn it. Verified income, compliant work status, and a business structure built to survive the move." },
  { num: '6', name: 'Family & Legacy', desc: 'School enrollment, cultural adjustment, estate and capital continuity for the retiree tier — the people who depend on you, accounted for.' },
  { num: '7', name: 'Life After Arrival', desc: 'Establishment, integration, and what sustainable life abroad actually requires beyond year one.' },
];

const DESTINATIONS = [
  { name: 'Paraguay', tag: '$5,500 Residency', desc: 'The real cost of one of the fastest, cheapest residency pathways available to U.S. persons — not the marketing number.', href: '/blog/paraguay-5500-residency-real-cost' },
  { name: 'Costa Rica', tag: 'Beachfront Reality', desc: 'What the first 200 meters from the beach actually means for foreign buyers, before you fall in love with a listing.', href: '/blog/costa-rica-first-200-meters-beachfront' },
  { name: 'Turkey', tag: 'All Six Tiers', desc: 'A relocation guide built around every ROS™ pathway — Solo through Investor — for one of the most flexible destinations on the board.', href: '/blog/turkey-relocation-guide-all-tiers' },
  { name: 'Ireland', tag: 'Non-Dom Tax Position', desc: 'The tax position that makes or breaks an Irish move for U.S. persons — explained before it becomes a filing-season surprise.', href: '/blog/ireland-non-dom-tax-position-guide' },
  { name: 'Malaysia', tag: 'MM2H & PVIP', desc: 'Two very different visa pathways, compared honestly — so you apply for the one that actually fits your situation.', href: '/blog/malaysia-relocation-guide-mm2h-pvip' },
  { name: 'Mexico', tag: 'Which City', desc: "Mexico isn't one relocation decision — it's dozens of different ones depending on the city. Here's how to actually choose.", href: '/blog/mexico-relocation-guide-which-city' },
];

const EPISODES = [
  { ep: 'EP.01', title: 'Not Another List', desc: "Why another checklist won't save you from the questions that actually derail a move." },
  { ep: 'EP.02', title: 'A Checklist Is Not a Plan', desc: 'The difference between knowing what to do and knowing what order to do it in.' },
  { ep: 'EP.03', title: 'The Undo Button', desc: "What happens when you find out — after you've already moved — that a decision can't be reversed." },
  { ep: 'EP.04', title: 'Where Do I Even Start?', desc: 'The honest answer to the question everyone asks first, in the order that actually works.' },
];

export default function HomePage() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="hero">
        <div className="container">
          <h1>A Plane Ticket Is Not a Relocation Plan.</h1>
          <p className="answer-capsule">
            You've made the decision. Now comes the part nobody warns you about — the legal standing, the financial structure, the thousand small questions that don't have a Google answer. ROS™ is the step-by-step infrastructure built for people who are serious about moving internationally and need real answers, not a highlight reel.
          </p>
          <div className="hero-ctas">
            <Link href="/shop/new-roots/" className="btn btn-gold">Get New Roots — $27 →</Link>
            <Link href="#episodes" className="btn btn-outline-white">Watch the Trailer →</Link>
          </div>
        </div>
      </section>

      {/* 02 — WHAT KIND OF MOVER ARE YOU */}
      <section className="who-its-for">
        <div className="container">
          <span className="section-tag">Who It's For</span>
          <h2>What Kind of Mover Are You?</h2>
          <p className="section-intro">Six doors. Find yours, and everything past it is built around your specific situation — not a generic relocator's.</p>
          <div className="profiles-grid">
            {PATHWAYS.map((tier) => (
              <Link key={tier.title} href={tier.href} className="tool-card-link">
                <div className="profile-card">
                  <div className="profile-icon">{tier.icon}</div>
                  <h3>{tier.title}</h3>
                  <p>{tier.desc}</p>
                </div>
              </Link>
            ))}
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

      {/* 03 — THE ROS SYSTEM */}
      <section className="modules">
        <div className="container">
          <span className="section-tag">The System</span>
          <h2>Seven Systems. One Seamless Plan.</h2>
          <p className="modules-intro">ROS™ walks you through seven areas — the same seven areas where international relocations fall apart when there's no system in place.</p>
          <div className="icon-cards" style={{gridTemplateColumns:'repeat(4, 1fr)'}}>
            {MODULES.map((mod) => (
              <div key={mod.num} className="icon-card">
                <div className="icon-card-num">{mod.num}</div>
                <h3>{mod.name}</h3>
                <p>{mod.desc}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:'32px'}}>
            <Link href="/what-is-ros" className="btn btn-gold">Learn exactly how ROS™ works →</Link>
          </div>
        </div>
      </section>

      {/* FOUNDER MOMENT */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
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

      {/* 04 — BEFORE YOU BOARD */}
      <section id="episodes" style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">Before You Board 🎬</span>
          <h2>The Questions Everyone Asks — Answered on Camera</h2>
          <p className="section-intro">Four short episodes. The same questions that come up on every discovery call, answered before you have to ask them.</p>
          <div className="blog-grid" style={{gridTemplateColumns:'repeat(4, 1fr)', marginTop:'40px'}}>
            {EPISODES.map((e) => (
              <div key={e.ep} className="blog-card" style={{cursor:'default'}}>
                <span className="blog-card-tag">{e.ep}</span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>

          {/* Episode CTA panel — on-site only, video narration itself stays untouched and closes on /tools/ */}
          <div style={{marginTop:'48px', background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'14px', padding:'40px', textAlign:'center'}}>
            <h3 style={{fontSize:'24px', marginBottom:'12px'}}>Know What's Actually Missing? Start Here.</h3>
            <div style={{marginTop:'20px'}}>
              <Link href="/shop/new-roots/" className="btn btn-gold">Get New Roots — $27 →</Link>
            </div>
            <p style={{fontSize:'14px', color:'var(--text-light)', marginTop:'12px', marginBottom:'0'}}>The full ROS™ system, in reading order. See what's missing before you talk to anyone.</p>
            <div style={{marginTop:'20px'}}>
              <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" className="blog-card-link" style={{fontSize:'14px'}}>Already know your gaps? Book a free Discovery Call →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — DESTINATION INTELLIGENCE */}
      <section id="destinations" style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">Destination Intelligence 🌍</span>
          <h2>Where Are You Thinking of Going?</h2>
          <p className="section-intro">Six destinations, fully researched. More are added as each one gets the same treatment — real numbers, real tax positions, no travel-blog gloss.</p>
          <div className="blog-grid" style={{marginTop:'40px'}}>
            {DESTINATIONS.map((d) => (
              <Link key={d.name} href={d.href} className="blog-card">
                <span className="blog-card-tag">{d.tag}</span>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
                <span className="blog-card-link">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — THE DECISION ROOM */}
      <section id="decision-room" style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">The Decision Room 🎲</span>
          <h2>You're 58. $200K Saved. Panama Is Calling. Would You Move?</h2>
          <p className="section-intro" style={{maxWidth:'760px'}}>
            Real relocation decisions don't come with a syllabus — they come as a scenario, all at once, with real stakes attached. Before you answer, run the same readiness check we use with every client. Twelve questions, two sections, and an honest score for exactly where you stand.
          </p>
          <div style={{marginTop:'40px'}}>
            <RelocationReadinessQuiz />
          </div>
        </div>
      </section>

      {/* 07 — TRUST + PROOF */}
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
          <p style={{maxWidth:'720px', marginTop:'32px', fontWeight:'700', color:'var(--primary)', fontSize:'18px'}}>Real stories. Real questions. Real consequences.</p>
        </div>
      </section>

      {/* 08 — PRODUCTS BECOME ENTRY POINTS */}
      <section className="pricing" style={{background:'var(--white)'}}>
        <div className="container">
          <span className="section-tag">Choose Your Next Move</span>
          <h2>Every Entry Point Leads to the Same Place</h2>
          <p style={{maxWidth:'640px', marginTop:'16px', color:'var(--text-light)'}}>A plan that actually works for your situation — start wherever makes sense right now.</p>
          <div className="pricing-grid-4" style={{marginTop:'48px'}}>
            {[
              { name: '🟢 Explore Free', price: 'FREE', access: 'Assessments, Tools, Episodes', desc: 'The free 15-minute Discovery Call, the readiness quiz above, the cost calculator, and every episode.', cta: 'Book Your Free Call', href: 'https://calendar.app.google/5GiW8EZKoyB7SqEKA' },
              { name: '🟡 Build Your Plan', price: 'From $27', access: 'New Roots & ROS™ Pathways', desc: 'New Roots ($27) gets you the full system in reading order. Six ROS™ Pathways from $697 for guided, done-with-you support.', cta: 'Get New Roots', href: '/shop/new-roots/' },
              { name: '🔵 Get Personal Guidance', price: '$497', access: '45-Minute 1:1 Call', desc: 'Your situation, your questions, your next steps. Walk away with a clear picture of what to do and in what order.', cta: 'Book a Clarity Session', href: 'https://calendar.app.google/GqshRNZbP1LTvwKJ9' },
              { name: '🟣 Go Deeper', price: 'From $47', access: 'Destination Intelligence & Books', desc: 'Across Streets & Seas ($47), the full Relocation Library ($64), and the destination research behind every recommendation.', cta: 'Explore the Library', href: '/shop/new-roots/' },
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

      {/* 09 — THE FINAL MOMENT */}
      <section className="cta-section">
        <div className="container">
          <h2>Your Move. Your Life. Your System.</h2>
          <p>The questions are real. The stakes are real. And the answers exist — you just need the right system to find them.</p>
          <div style={{display:'flex', gap:'20px', justifyContent:'center', flexWrap:'wrap'}}>
            <Link href="/shop/new-roots/" className="btn btn-gold">Get New Roots — $27 →</Link>
            <Link href="/what-is-ros" className="btn btn-outline-white">Explore the System →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
