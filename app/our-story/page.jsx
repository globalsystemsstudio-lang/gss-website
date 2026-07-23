import Link from 'next/link';

export const metadata = {
  title: "The System We Built Because It Didn't Exist — Our Story",
  description: "ROS™ wasn't built in a boardroom or from a business plan. It was built in the middle of a real relocation — from the questions that wouldn't stop and the answers that took too long to find.",
  alternates: { canonical: 'https://www.globalsystemsstudio.com/our-story/' },
};

export default function OurStoryPage() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <h1>The System We Built Because It Didn't Exist</h1>
          <p className="article-meta" style={{fontStyle:'italic', color:'var(--text-light)', marginTop:'16px', fontSize:'17px', maxWidth:'720px'}}>
            This isn't a success story told from the other side. It's a company that was built in the middle of a real decision — from the questions that wouldn't stop and the answers that took too long to find.
          </p>
        </div>
      </section>

      <section className="article-page">
        <div className="container">
          <div style={{maxWidth:'760px'}}>
            <div className="article-body">

              <p>Global Systems Studio didn't start with a business plan. It started with a problem we couldn't solve — and a refusal to stop looking until we could.</p>

              <p>Our founder spent decades building expertise in how complex systems work — professionally, financially, operationally. A career built on figuring things out. On becoming the person others called when the path forward wasn't clear.</p>

              <p>Then came the decision to relocate internationally. Not a vague someday idea. A real, committed, irreversible decision. And what followed was a masterclass in everything the relocation industry leaves out.</p>

              <h2>Relocating Abroad Turned Out to Be One of the Most Complex Decisions of Our Lives</h2>

              <p>The emotional weight was real. People you love are rooted in the U.S. A social network built over decades. The life you've constructed — all of it. The question isn't just <em>can I do this</em>. It's <em>what does it actually cost me</em> — in every sense of that word.</p>
              <p>And yet the decision held. <em>When</em> became the operative word — not if.</p>

              <h2>Then the Practical Questions Started</h2>
              <p>The practical complexity followed fast — and didn't stop.</p>
              <p>Transportation in a destination country with different import restrictions. A business to open abroad, which meant multiple vehicles needed, which meant financing, insurance, and operational logistics in a country with rules that don't work the way you expect. The real cost of rebuilding a household from scratch in a foreign economy — where the mortgage might disappear but everything else doesn't.</p>
              <p>Legal questions about operating a business as a foreign resident. What licenses are required. What the tax structure looks like. What it actually takes to run something sustainably, not just register it and hope.</p>
              <p>Healthcare access when U.S. insurance no longer applies. Medication availability. What specialist care looks like in a system you've never navigated. The questions you never want to be asking in a moment of crisis — asked in advance, before there's any crisis to manage.</p>
              <p>Social Security timing. Foreign income tax implications. FBAR compliance for foreign accounts. Wire transfer rules. Capital gains consequences of selling U.S. property before you leave. Financial questions that carry permanent consequences and require expertise that most domestic CPAs simply don't have.</p>
              <p>Where do you find income — or build something — in a country where your professional credentials may not transfer and the market operates by different rules?</p>
              <p>These aren't hypotheticals. These are Tuesday.</p>

              <h2>Social Media Made It Worse</h2>
              <p>We followed the influencers. We watched the videos. We read the posts from people who relocated abroad and made it look effortless — the beautiful apartment, the lower cost of living, the freedom, the joy.</p>
              <p>It didn't help. It made things more uncertain.</p>
              <p>Because none of them were answering our questions. They were answering theirs. Their lives, their circumstances, their financial situations, their families. The highlight reel of someone else's relocation cannot give you the tools for your own life choices.</p>
              <p>What we needed wasn't inspiration. The decision was already made.</p>
              <p>What we needed was infrastructure. A system of organized steps built around the actual decisions we were facing — not the ones that make for a good thumbnail.</p>

              <h2>This Is Where ROS™ Came From</h2>
              <p>Not from a textbook. Not from a consulting framework. Not from a clean, confident transition where everything went smoothly.</p>
              <p>It came from the sleepless nights. The hours of research that answered one question and opened three more. The spreadsheets built and rebuilt trying to make the numbers work. The realization that leaving everything you know to step into the unknown is one of the most human and complicated things a person can do.</p>
              <p>Creating ROS™ gave those questions a home. A structure. An answer you can point to instead of carrying around in your head at 2am.</p>
              <p>But here's what we've learned: every conversation opens new questions. Every answer leads somewhere we hadn't looked yet. So we keep at it. We keep building. Until the answers exist.</p>
              <p>That's the only reason ROS™ exists. Not because we arrived on the other side with everything figured out. Because we refused to stop asking questions — and started building a system to hold every answer so nobody else has to start from zero.</p>

              <h2>What We Stand For</h2>
              <p>We built Global Systems Studio on one belief: <strong>nobody should have to figure this out alone.</strong></p>
              <p>Every module in ROS™ was built from real questions, asked by real people, in the middle of real relocations. Every answer we find goes into the system. Every gap we discover becomes a new module, a new resource, a new piece of the infrastructure.</p>
              <p>We are not a travel agency. We are not a social media channel. We are not a course that sells you a feeling. We are a structured operating system for one of the most complex decisions of your life — and we don't stop until we have the answers.</p>

              <h2>If Any Part of This Story Sounds Like Yours —</h2>
              <p>The questions flooding in. The affordability calculations that don't quite close. The weight of leaving people you love. The social media rabbit holes that leave you more confused than when you started. The questions about income, healthcare, and what comes next.</p>
              <p style={{fontWeight:'700', color:'var(--primary)', fontSize:'18px'}}>Then you're exactly who ROS™ was built for.</p>
              <p>You don't have to figure this out alone. The questions are real. The answers exist. And we don't stop until we find them.</p>
              <p>That's what we're here for.</p>

              <div style={{display:'flex', flexDirection:'column', gap:'12px', marginTop:'48px'}}>
                <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" className="btn btn-gold" style={{display:'inline-block', alignSelf:'flex-start'}}>Book a Free 15-Minute Discovery Call →</Link>
                <Link href="/who-its-for" className="btn btn-gold" style={{display:'inline-block', alignSelf:'flex-start'}}>Find Your Tier →</Link>
                <Link href="/work-with-me" className="btn btn-gold" style={{display:'inline-block', alignSelf:'flex-start'}}>Get the ROS™ Book →</Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
