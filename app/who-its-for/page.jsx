import Link from 'next/link';

export const metadata = {
  title: "Who ROS™ Is For — Find Your Tier",
  description: "ROS™ is organized into six tiers: Digital Nomad, Solo Relocator, Family, Entrepreneur, Legacy Mover, and Investor. Find the tier that fits your life.",
  alternates: { canonical: 'https://www.globalsystemsstudio.com/who-its-for/' },
};

const tiers = [
  {
    icon: '🌐',
    title: 'The Digital Nomad',
    tagline: 'You work remotely and want the freedom to live anywhere in the world — but you want to do it legally, financially smart, and without losing your mind in the process.',
    body: "You've built a location-independent income. Now you want to actually use that freedom — to explore, to slow down, or to stretch your dollars further in a country where life costs less. But working abroad isn't as simple as opening your laptop at a café. You need the right visa structure so you're not overstaying a tourist visa and risking deportation. You need tax compliance across borders so the IRS doesn't come looking for you years later. You need banking that actually works internationally — because your U.S. debit card, your two-factor authentication, and your payment processors may all behave differently the moment you cross a border. ROS™ builds the foundation so your freedom is real — not just a dream with a lot of fine print.",
    priorities: 'Legal status and visa structure · Tax compliance abroad · International banking and tech setup · Flexible housing · Income protection',
  },
  {
    icon: '🧳',
    title: 'The Solo Relocator',
    tagline: "You're making this move on your own — by choice or by circumstance — and you're determined to get it right.",
    body: "Maybe it's a fresh start after a life change. Maybe it's early retirement and you're ready for something different. Maybe it's simply time — and the only person you need to answer to is yourself. That's powerful. And it also means every single decision lands on you. Your finances, your safety net, your housing, your healthcare, your legal status, your community — no partner to divide the research, no one else to fill in the gaps. ROS™ walks you through every module with a single-person lens. We make sure the gaps don't exist.",
    priorities: 'Financial safety net and solo income planning · Housing security · Healthcare without a backup person nearby · Building community from scratch · Legal status and residency pathway',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'The Family',
    tagline: "You're moving with people who depend on you — a spouse, children, aging parents, or all three — and getting it wrong isn't an option.",
    body: "Relocating as a family means every mistake multiplies. A missed school enrollment deadline doesn't just inconvenience you — it costs your child a full academic year. International schools have application windows that close months before the school year begins. Curricula vary wildly between countries. Health records, vaccination requirements, and physical examinations may all be required before your child can enroll — in a specific format, through a specific process, in some cases requiring a certified translation. ROS™ addresses the full family picture: education continuity, family healthcare coverage, housing that fits the way you actually live, and the cultural and emotional integration that keeps your household together through the transition.",
    priorities: 'School enrollment timelines and curriculum alignment · Family healthcare coverage · Housing with the right space · Cultural and emotional adjustment · Legal status for every family member',
  },
  {
    icon: '💼',
    title: 'The Entrepreneur',
    tagline: 'You own a business, run your own income, or are building something new in a foreign market — and you need your financial and legal structure to work across borders.',
    body: "Operating a business internationally without the right setup is one of the fastest ways to create serious legal and tax problems. Where is your business registered? In which country is it considered a tax resident? How do you pay yourself across borders without triggering compliance issues? How do you pay contractors or employees in another country? And if you're starting a new business in your destination country: What licenses are required? What is the legal business structure that works for a foreign national? ROS™ walks you through business structure, international tax compliance, banking and payment infrastructure, and legal entity setup so your income doesn't accidentally become a liability.",
    priorities: 'Business legal structure abroad · International tax compliance · Payment and banking infrastructure · Local licensing and registration requirements · Protecting U.S. business interests while operating abroad',
  },
  {
    icon: '🏡',
    title: 'The Legacy Mover',
    tagline: "You've worked your whole life for this. Now you want to spend your next chapter somewhere that gives you more — more warmth, more community, more ease, more life — on a budget that actually works.",
    body: "You're not running from anything. You're moving toward something. A slower pace. A lower cost of living. A place that feels right for this season of life. But retirement abroad comes with questions nobody hands you a guide for. Will your medications be available in your destination country? What does specialist care look like locally, and what does it cost without U.S. insurance? Can you access your pension, Social Security, or retirement accounts from abroad — and how does that income interact with local taxes? And then there's the question that sits underneath everything else: what happens if your circumstances change and you need a path back? ROS™ was built with people like you in mind — because you've earned the right to do this well.",
    priorities: 'Healthcare continuity and specialist access · Social Security and retirement income strategy · Sell vs. rent your home decision · Estate planning across borders · Re-entry options if circumstances change · Community and lifestyle integration',
  },
  {
    icon: '📈',
    title: 'The Investor',
    tagline: "You're moving capital, not just yourself — and you need the legal, financial, and tax structure to do it right in a new country.",
    body: "Whether you're acquiring property, funding a business venture, or pursuing residency through investment programs, every country has its own rules for foreign national investors — and the penalties for misunderstanding them are severe. Can you legally own property in your destination country as a foreign national? Is there a residency-by-investment pathway and what does it require? How is investment income taxed locally, and how does that interact with your U.S. tax obligations? ROS™ guides you through the legal infrastructure for foreign national investors, investment-based residency pathways, international tax optimization, and the due diligence process for real assets in markets you may not yet know well.",
    priorities: 'Legal investment structures for foreign nationals · Residency-by-investment pathways · International tax optimization · Property due diligence in unfamiliar markets · Asset protection across borders',
  },
];

export default function WhoItsForPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Find Yourself Here.</h1>
          <p>ROS™ isn't built for a generic relocator. It's built for you — wherever you are in life, whatever brought you to this decision, and wherever in the world you're going.</p>
        </div>
      </section>

      {/* THE SIX TIERS */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>The Six Tiers</h2>
          <p style={{maxWidth:'720px', marginTop:'16px', color:'var(--text-light)'}}>ROS™ is organized around six life stages — because a 32-year-old remote worker and a 62-year-old returning to her birth country have fundamentally different questions, even though they're both relocating internationally. The same seven modules apply to everyone. How they apply depends entirely on who you are.</p>
          <p style={{maxWidth:'720px', marginTop:'12px', color:'var(--text-light)'}}>Read through each tier. One of them is going to sound like your life.</p>

          <div className="tier-grid">
            {tiers.map((tier) => (
              <div key={tier.title} className="tier-card">
                <div className="tier-icon">{tier.icon}</div>
                <h3>{tier.title}</h3>
                <p className="tier-tagline">{tier.tagline}</p>
                <p>{tier.body}</p>
                <div className="tier-priorities">
                  <strong>Your biggest ROS™ priorities:</strong>
                  {tier.priorities}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SURE */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Not Sure Which Tier You Are?</h2>
          <div style={{maxWidth:'720px', marginTop:'24px'}}>
            <p>Most people can identify their primary tier immediately. But some situations overlap — a Legacy Mover who also wants to open a small business. A Family relocating with a parent who has significant medical needs. An Entrepreneur whose spouse is making the Solo Relocator's journey within the same move.</p>
            <p>ROS™ accounts for complexity. Your Clarity Session is the place to map exactly which modules matter most for your specific combination of circumstances.</p>
            <div style={{marginTop:'28px'}}>
              <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" className="btn btn-gold">Book a Free Discovery Call — 15 minutes to figure out where you fit →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Wherever You're Going, ROS™ Goes With You.</h2>
          <p style={{maxWidth:'720px', marginTop:'16px', color:'var(--text-light)'}}>ROS™ is built for international relocation to destinations across the globe. The seven modules apply universally. The country-specific details are part of what your Clarity Session, the Community, and the ROS™ resource library help you navigate.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'20px', marginTop:'40px'}}>
            {[
              { flag: '🌴', region: 'The Caribbean', examples: 'Jamaica, Barbados, the Bahamas, St. Lucia, Grenada, Cayman Islands' },
              { flag: '🌎', region: 'Latin America', examples: 'Mexico, Colombia, Costa Rica, Panama, Ecuador, Peru, Argentina, Brazil, Uruguay' },
              { flag: '🌿', region: 'Central America', examples: 'Belize, Guatemala, Honduras, El Salvador, Nicaragua' },
              { flag: '🌍', region: 'Africa', examples: 'Ghana, Nigeria, Kenya, South Africa, Ethiopia, Senegal, Rwanda' },
              { flag: '🌏', region: 'Asia Pacific', examples: 'Thailand, Philippines, Malaysia, Vietnam, Indonesia, Singapore, Japan' },
              { flag: '🌐', region: 'Europe', examples: 'Portugal, Spain, Italy, France, Germany, Greece, the Netherlands, Ireland' },
              { flag: '🌊', region: 'Oceania', examples: 'Australia, New Zealand, Fiji' },
            ].map((r) => (
              <div key={r.region} style={{background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'12px', padding:'24px'}}>
                <div style={{fontSize:'28px', marginBottom:'10px'}}>{r.flag}</div>
                <h3 style={{fontSize:'16px', color:'var(--primary)', marginBottom:'8px'}}>{r.region}</h3>
                <p style={{fontSize:'13px', color:'var(--text-light)', margin:0, lineHeight:'1.5'}}>{r.examples}</p>
              </div>
            ))}
          </div>
          <p style={{marginTop:'24px', color:'var(--text-light)', fontSize:'15px', fontStyle:'italic'}}>Don't see your destination listed? Reach out. The ROS™ system applies anywhere — and our network spans more destinations than any list can capture.</p>
        </div>
      </section>

      {/* LANGUAGES */}
      <section style={{background:'var(--primary)', padding:'80px 0'}}>
        <div className="container">
          <h2 style={{color:'var(--white)'}}>Relocation Doesn't Only Happen in English. Neither Does ROS™.</h2>
          <p style={{color:'rgba(255,255,255,0.82)', maxWidth:'720px', marginTop:'16px', fontSize:'17px'}}>The content, resources, and community within ROS™ are available in multiple languages so that language is never the barrier between you and the answers you need.</p>
          <p style={{color:'rgba(255,255,255,0.7)', marginTop:'16px'}}>Currently available in: <strong style={{color:'var(--white)'}}>English, Spanish, French, Portuguese</strong></p>
          <p style={{color:'rgba(255,255,255,0.6)', fontSize:'14px', marginTop:'8px'}}>Additional languages in development — contact us if your language isn't listed.</p>
          <div style={{display:'flex', gap:'16px', marginTop:'36px', flexWrap:'wrap'}}>
            <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" className="btn btn-gold">Book Your Free Discovery Call →</Link>
            <Link href="/work-with-me" className="btn btn-outline-white">Get the ROS™ Book →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
