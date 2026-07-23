import Link from 'next/link';

export const metadata = {
  title: 'What is ROS™ — The Relocation Operating System',
  description: 'ROS™ is a structured infrastructure of organized tasks built to move you through every phase of international relocation — from the first decision to long-term stability.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/what-is-ros/' },
};

export default function WhatIsRosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>ROS™ — The Relocation Operating System</h1>
          <p>Not a course. Not a checklist. Not a travel guide. A structured infrastructure of organized tasks built to move you through every phase of international relocation — from the first decision to long-term stability on the other side.</p>
        </div>
      </section>

      {/* SECTION 1: WHAT IT STANDS FOR */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What It Stands For</h2>
          <div style={{maxWidth:'760px'}}>
            <p>ROS™ stands for the <strong>Relocation Operating System</strong>.</p>
            <p>Think about what an operating system does for a computer. It doesn't do one thing — it runs everything. It coordinates every function, every process, every decision so the whole machine works together. Without it, nothing connects. Nothing runs. You have parts but not a system.</p>
            <p>That's exactly what's missing from most international relocations.</p>
            <p>People research housing in one place, taxes in another, visas somewhere else, and healthcare not at all until they need it. They piece things together from YouTube videos, Facebook groups, and well-meaning friends who moved somewhere different under completely different circumstances. And then they arrive — and discover all the things they didn't know to look for.</p>
            <p>ROS™ runs all of it. Legal. Financial. Housing. Healthcare. Business and income. Family and social integration. Long-term stability. Seven modules. One system. Organized in the order decisions actually need to be made.</p>
            <p style={{fontWeight:'700', color:'var(--primary)', fontSize:'18px'}}>Without an operating system, your devices don't work. Without ROS™, your relocation doesn't either.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 7 MODULES */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">The System</span>
          <h2>Every Dimension of Your Move — Covered.</h2>
          <p style={{maxWidth:'720px', marginTop:'16px', color:'var(--text-light)'}}>International relocation fails in predictable places. The same gaps come up again and again — not because people aren't smart or resourceful, but because nobody told them what to look for. The seven modules of ROS™ are built around exactly where relocations fall apart.</p>
          <div style={{marginTop:'48px', display:'flex', flexDirection:'column', gap:'32px'}}>
            {[
              {
                num: '01', name: 'Legal & Documentation',
                body: 'The paperwork that makes your move legal — and keeps it that way. Visas. Residency permits. Citizenship pathways. The difference between arriving legally and staying legally. What happens if you miss the residency conversion window. Which documents need a standard notary, which need an apostille, which need embassy authentication, and which need a certified translator before any foreign government will accept them. Most people discover these requirements at the moment they need to submit something. ROS™ maps every document, every authentication step, and every timeline so you\'re never scrambling.'
              },
              {
                num: '02', name: 'Financial Structure',
                body: 'The money decisions that have permanent consequences — made in the right order, at the right time. Banking that works across borders. FBAR compliance for foreign accounts. Capital gains timing when you sell property or investments before you leave. The Foreign Earned Income Exclusion for U.S. citizens working abroad. Wire transfer compliance. Currency exchange tax implications. Social Security strategy — when to claim, how working abroad affects your benefit, and what the 2036 funding projections mean for your income plan. Your domestic CPA cannot navigate this for you.'
              },
              {
                num: '03', name: 'Housing & Lifestyle',
                body: 'Finding and securing a home in a market you don\'t know yet — without overpaying, signing the wrong lease, or missing communications you didn\'t understand. Rental pricing opacity. Lease terms in another language. Deposits that work differently than anything you\'re used to. The landlord who charges more the moment they know you\'re foreign. Short-term versus long-term rental laws that are nothing like U.S. tenant law. And the decision every relocator eventually faces: sell your home before you go, or rent it out and manage it from abroad?'
              },
              {
                num: '04', name: 'Healthcare & Wellness',
                body: 'The healthcare questions that must be answered before you need the answers. Does your U.S. insurance cover you abroad? Are your prescriptions available in your destination country? What does specialist care look like — cardiologists, oncologists, neurologists — and what does it cost without U.S. coverage? What happens in a medical emergency when you\'re thousands of miles from the healthcare system you\'ve spent your whole life navigating? This module is especially critical for anyone with ongoing medical needs, anyone over 60, and anyone traveling with a spouse or family member whose health requires consistent, specialized care.'
              },
              {
                num: '05', name: 'Business & Income',
                body: 'How you earn — and keep earning — across international borders. Working remotely for a U.S. employer while living abroad. Finding a job in your destination country\'s local market. Whether your professional credentials transfer and what re-credentialing requires. Where to actually look for international work — and which platforms cost you money before you can even apply. Opening a business in a foreign country and what legal registration, licensing, and tax structure that requires. Freelancing internationally and how to build income that doesn\'t depend on any one employer or any one country.'
              },
              {
                num: '06', name: 'Family & Social Integration',
                body: 'The human dimensions of a move that numbers alone can\'t capture. School enrollment timelines that are nothing like what you know — and what happens if you miss them. Cultural adjustment for children and for adults. Building community in a place where you don\'t yet know the landscape. The grief of leaving the people you love. The daily battle of disconnection when your children, grandchildren, and social network are all thousands of miles away. The relationship dynamics that shift when two people are navigating the same enormous change from different emotional angles.'
              },
              {
                num: '07', name: 'Long-Term Stability',
                body: 'What sustainable life abroad actually looks like beyond year one. Estate planning across borders. Beneficiary designations that work internationally. Re-entry options if your circumstances change and you need to return. Social Security strategy for the long term. Retirement income planning when your cost of living is in one currency and your income is in another. Building a life that lasts — not just a relocation that launches.'
              },
            ].map((mod) => (
              <div key={mod.num} style={{background:'var(--white)', border:'1px solid var(--border)', borderLeft:'4px solid var(--accent)', borderRadius:'0 12px 12px 0', padding:'32px'}}>
                <div style={{display:'flex', gap:'20px', alignItems:'flex-start'}}>
                  <div style={{fontSize:'32px', fontWeight:'700', color:'var(--accent)', fontStyle:'italic', minWidth:'48px'}}>{mod.num}</div>
                  <div>
                    <h3 style={{color:'var(--primary)', marginBottom:'12px'}}>{mod.name}</h3>
                    <p style={{color:'var(--text)', margin:0, lineHeight:'1.75'}}>{mod.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW THE SYSTEM WORKS */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>ROS™ Isn't One-Size-Fits-All. It's Built Around Your Life Stage.</h2>
          <div style={{maxWidth:'760px', marginTop:'24px'}}>
            <p>The seven modules apply to every relocator. But how they apply — which questions matter most, which decisions are most urgent, which risks are highest — depends entirely on who you are and why you're making this move.</p>
            <p>That's why ROS™ is organized into six tiers. Each tier takes the same seven modules and applies them through the lens of your specific situation.</p>
            <p>A 32-year-old digital nomad and a 62-year-old returning to her birth country have very different legal, financial, healthcare, and housing questions — even though they're both relocating internationally. ROS™ accounts for that.</p>
            <div style={{marginTop:'28px'}}>
              <Link href="/who-its-for" className="btn btn-gold">Find Your Tier →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY A SYSTEM MATTERS */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>What Happens Without One</h2>
          <div style={{maxWidth:'760px', marginTop:'24px'}}>
            <p>Most relocation failures aren't dramatic. They're slow — a series of small things that compound.</p>
            <p>A document that needed an apostille and didn't have one. A school enrollment deadline that passed before anyone knew it existed. A lease clause that forfeited the deposit. A visa status that didn't allow local employment. A tax filing that missed the foreign income reporting requirement.</p>
            <p>None of these individually is catastrophic. Together, they add up to months of setbacks, thousands of dollars in avoidable costs, and the sinking feeling that this was a mistake — when the real problem was never the decision to move. It was the absence of a system to make it work.</p>
            <div style={{marginTop:'28px'}}>
              <Link href="/why-you-need-this" className="btn btn-gold">Read the full breakdown of what can go wrong →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO BUILT IT */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>This Wasn't Built in a Classroom. It Was Built in the Middle of the Decision.</h2>
          <div style={{maxWidth:'760px', marginTop:'24px'}}>
            <p>ROS™ was created by the founder of Global Systems Studio — someone who left a decades-long U.S. career behind and chose to start over in a new country. Every module was built from personal experience, not theory.</p>
            <p>What she found was that being accomplished, resourceful, and experienced was not the same as being prepared. The questions didn't stop. The variables kept shifting. The answers lived in places she didn't know to look.</p>
            <p>ROS™ is what she built because she needed it. And she's still building it — because every relocation conversation opens new questions, and she doesn't stop until she has the answers.</p>
            <div style={{marginTop:'28px'}}>
              <Link href="/our-story" className="btn btn-gold">Read the full story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW TO GET STARTED */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>You Don't Have to Figure Out Where to Begin. That's Our Job.</h2>
          <div className="pricing-grid-4" style={{marginTop:'48px'}}>
            {[
              { name: 'Free Discovery Call', price: 'FREE', access: '15-Minute Video Call', desc: "Not sure if ROS™ is right for your situation? Let's talk first. Tell me where you are, I'll tell you what makes sense. No obligation.", cta: 'Book Your Free Call', href: 'https://calendar.app.google/5GiW8EZKoyB7SqEKA' },
              { name: 'Clarity Session', price: '$497', access: '30-Minute 1:1 Call', desc: '30 minutes. Your situation. Real answers and a clear next-step plan built specifically for you.', cta: 'Book a Clarity Session', href: '/work-with-me' },
              { name: 'The ROS™ Book', price: '$47', access: 'Digital Download', desc: 'The complete system in written form. Every module, every tier, every question — organized for you to work through at your own pace.', cta: 'Get the Book', href: '/work-with-me' },
              { name: 'The Departure Lounge', price: '$97/mo', access: 'Discord Community', desc: 'Ongoing support, monthly Q&A with the founder, and a community of people navigating the same decisions alongside you.', cta: 'Join The Departure Lounge', href: '/work-with-me' },
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
    </>
  );
}
