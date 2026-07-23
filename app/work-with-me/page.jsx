import Link from 'next/link';

export const metadata = {
  title: 'Work With Me — ROS™ Offers & Pricing | Global Systems Studio',
  description: 'Six ways to work with ROS™: Free Discovery Call, Clarity Session ($497), books from $27, Async Q&A ($97), and six Pathway tiers from $697 to $2,497.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/work-with-me/' },
};

export default function WorkWithMePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Where Do You Want to Start?</h1>
          <p>Not sure if ROS™ is right for you? Start with a free 15-minute Discovery Call. No pressure, no pitch — just a real conversation about where you are and whether we're the right fit.</p>
        </div>
      </section>

      {/* OFFER 0: DISCOVERY CALL */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <div style={{background:'var(--bg)', border:'2px solid var(--accent)', borderRadius:'16px', padding:'48px', maxWidth:'820px'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'16px', marginBottom:'24px'}}>
              <div>
                <span className="section-tag">Start Here — It's Free</span>
                <h2 style={{marginTop:'8px'}}>Not Sure Where to Start? Let's Talk First.</h2>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:'40px', fontWeight:'700', color:'var(--accent)'}}>FREE</div>
                <div style={{fontSize:'14px', color:'var(--text-light)'}}>15-Minute Video Call</div>
              </div>
            </div>
            <p>You've been researching. You have questions. But maybe you're not sure yet if ROS™ is what you need — or where you even fit in the system.</p>
            <p>The Discovery Call is a free 15-minute conversation designed to do one thing: help you get clear. You tell me where you are in your journey, what's feeling most uncertain, and what you're hoping to figure out. I'll tell you honestly whether ROS™ is the right fit, which tier applies to your situation, and what the best next step looks like for you specifically.</p>
            <p><strong>No sales pressure. No obligation. Just a real conversation with someone who has lived this.</strong></p>
            <div style={{marginTop:'32px'}}>
              <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" className="btn btn-gold">Book Your Free Discovery Call →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER 1: CLARITY SESSION */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 300px', gap:'64px', alignItems:'start', maxWidth:'900px'}}>
            <div>
              <span className="section-tag">Most Popular</span>
              <h2>ROS Transition Clarity Session</h2>
              <p>You don't have a generic relocation question. You have <em>your</em> question — shaped by your age, your family, your finances, your destination, your timeline, your health, your professional background, and a hundred other variables that no YouTube video accounts for.</p>
              <p>The Clarity Session is a private call with the founder of ROS™ and the person who is navigating international relocation in real time. You come with your specific situation. You leave with a clear picture of what your next steps are and in what order.</p>
              <h3 style={{marginTop:'28px', marginBottom:'12px'}}>This session is for you if:</h3>
              <ul style={{paddingLeft:'24px', display:'flex', flexDirection:'column', gap:'8px', color:'var(--text-light)'}}>
                <li>You've been researching for a while and still don't know where to start</li>
                <li>You have a specific question or decision you can't resolve on your own</li>
                <li>You need someone to look at your situation honestly and tell you what you're missing</li>
                <li>You want to talk to someone who has lived this — not just studied it</li>
              </ul>
              <div style={{background:'var(--white)', border:'1px solid var(--border)', borderRadius:'10px', padding:'20px 24px', marginTop:'28px', fontSize:'15px', color:'var(--text-light)'}}>
                <strong style={{color:'var(--text)', display:'block', marginBottom:'6px'}}>What this is not:</strong>
                This is not legal, tax, or financial advice. It is strategic relocation guidance — and a referral to the right professionals for anything requiring licensed expertise.
              </div>
            </div>
            <div style={{background:'var(--white)', border:'2px solid var(--primary)', borderRadius:'16px', padding:'36px', textAlign:'center'}}>
              <div style={{fontSize:'14px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--text-light)', marginBottom:'12px'}}>Clarity Session</div>
              <div style={{fontSize:'48px', fontWeight:'700', color:'var(--accent)', lineHeight:'1', marginBottom:'8px'}}>$497</div>
              <div style={{fontSize:'14px', color:'var(--text-light)', marginBottom:'28px'}}>45-Minute 1:1 Video Call</div>
              <a href="https://calendar.app.google/GqshRNZbP1LTvwKJ9" className="btn btn-gold" style={{display:'block', textAlign:'center'}} target="_blank" rel="noopener noreferrer">Book a Clarity Session →</a>
              <p style={{fontSize:'12px', color:'var(--text-light)', marginTop:'16px', marginBottom:0}}>Recording + written summary delivered within 48 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER 2: ASYNC Q&A */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 300px', gap:'64px', alignItems:'start', maxWidth:'900px'}}>
            <div>
              <span className="section-tag">Flexible Support</span>
              <h2>ROS Async Q&amp;A</h2>
              <p>Not ready for a live call? Submit your questions and receive a detailed, personalized written response from the founder — on your schedule.</p>
              <p>The Async Q&A is designed for people who have specific questions they need answered but prefer written guidance over a video call. Submit your situation and questions, and receive a thorough written response you can refer back to at any point in your process.</p>
              <h3 style={{marginTop:'28px', marginBottom:'12px'}}>This is for you if:</h3>
              <ul style={{paddingLeft:'24px', display:'flex', flexDirection:'column', gap:'8px', color:'var(--text-light)'}}>
                <li>You prefer written guidance you can review and share</li>
                <li>You have specific questions that don't require a live conversation</li>
                <li>You're in a different time zone and scheduling is a challenge</li>
                <li>You want a documented, detailed response you can refer back to</li>
              </ul>
            </div>
            <div style={{background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'16px', padding:'36px', textAlign:'center'}}>
              <div style={{fontSize:'14px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--text-light)', marginBottom:'12px'}}>Async Q&amp;A</div>
              <div style={{fontSize:'48px', fontWeight:'700', color:'var(--accent)', lineHeight:'1', marginBottom:'8px'}}>$97</div>
              <div style={{fontSize:'14px', color:'var(--text-light)', marginBottom:'28px'}}>Written Response</div>
              <a href="https://www.paypal.com/ncp/payment/DSZUNS6QPXGQU" className="btn btn-gold" style={{display:'block', textAlign:'center'}} target="_blank" rel="noopener noreferrer">Submit Your Questions →</a>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKS SECTION HEADER */}
      <section style={{background:'var(--bg)', padding:'80px 0 0'}}>
        <div className="container">
          <span className="section-tag">Self-Directed Learning</span>
          <h2 style={{marginTop:'8px'}}>The ROS™ Books</h2>
          <p style={{color:'var(--text-light)', maxWidth:'620px', marginTop:'12px'}}>Two books. One system. Real answers for people who are serious about making this move.</p>
        </div>
      </section>

      {/* BOOK 1: NEW ROOTS */}
      <section style={{background:'var(--bg)', padding:'48px 0'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 300px', gap:'64px', alignItems:'start', maxWidth:'900px'}}>
            <div>
              <h3 style={{fontSize:'24px', marginBottom:'16px'}}>New Roots — A Confidence Guide for Anyone Ready to Leave the U.S.</h3>
              <p>The practical, no-nonsense infrastructure guide that walks you through every dimension of international relocation: legal, financial, housing, healthcare, business, family, and long-term stability — organized around the full ROS™ framework.</p>
              <p>Not a travel guide. Not a lifestyle book. A working document built for people who are actually doing this.</p>
              <h4 style={{marginTop:'24px', marginBottom:'10px', fontSize:'15px'}}>This book is for you if:</h4>
              <ul style={{paddingLeft:'24px', display:'flex', flexDirection:'column', gap:'8px', color:'var(--text-light)'}}>
                <li>You're in early research mode and want a comprehensive foundation</li>
                <li>You want to understand the full picture before booking a call</li>
                <li>You want a resource you can return to at every stage of the process</li>
              </ul>
            </div>
            <div style={{background:'var(--white)', border:'1px solid var(--border)', borderRadius:'16px', padding:'36px', textAlign:'center'}}>
              <div style={{fontSize:'14px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--text-light)', marginBottom:'12px'}}>New Roots</div>
              <div style={{fontSize:'48px', fontWeight:'700', color:'var(--accent)', lineHeight:'1', marginBottom:'8px'}}>$27</div>
              <div style={{fontSize:'14px', color:'var(--text-light)', marginBottom:'28px'}}>Digital Download</div>
              <a href="https://www.paypal.com/ncp/payment/J3ZZAKPGCJACS" className="btn btn-gold" style={{display:'block', textAlign:'center'}} target="_blank" rel="noopener noreferrer">Get New Roots →</a>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK 2: ACROSS STREETS & SEAS */}
      <section style={{background:'var(--bg)', padding:'48px 0'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 300px', gap:'64px', alignItems:'start', maxWidth:'900px'}}>
            <div>
              <h3 style={{fontSize:'24px', marginBottom:'16px'}}>Across Streets &amp; Seas — A Modern Guide to Moving Your Life</h3>
              <p>The human side of international relocation — the decisions that don't fit on a checklist, the mindset shifts that make the difference, and the real story of what this process looks like from the inside.</p>
              <p>Grounded in lived experience. Written for people who are not just planning a move — they're redesigning their life.</p>
              <h4 style={{marginTop:'24px', marginBottom:'10px', fontSize:'15px'}}>This book is for you if:</h4>
              <ul style={{paddingLeft:'24px', display:'flex', flexDirection:'column', gap:'8px', color:'var(--text-light)'}}>
                <li>You want the perspective, not just the process</li>
                <li>You're navigating the emotional and strategic dimensions of leaving</li>
                <li>You want to understand what this actually feels like before you go</li>
              </ul>
            </div>
            <div style={{background:'var(--white)', border:'1px solid var(--border)', borderRadius:'16px', padding:'36px', textAlign:'center'}}>
              <div style={{fontSize:'14px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--text-light)', marginBottom:'12px'}}>Across Streets &amp; Seas</div>
              <div style={{fontSize:'48px', fontWeight:'700', color:'var(--accent)', lineHeight:'1', marginBottom:'8px'}}>$47</div>
              <div style={{fontSize:'14px', color:'var(--text-light)', marginBottom:'28px'}}>Digital Download</div>
              <a href="https://www.paypal.com/ncp/payment/PDCK6MLEFJG8W" className="btn btn-gold" style={{display:'block', textAlign:'center'}} target="_blank" rel="noopener noreferrer">Get Across Streets &amp; Seas →</a>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK BUNDLE */}
      <section style={{background:'var(--bg)', padding:'48px 0 80px'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 300px', gap:'64px', alignItems:'start', maxWidth:'900px'}}>
            <div>
              <span style={{display:'inline-block', background:'var(--accent)', color:'var(--white)', fontSize:'12px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.08em', padding:'4px 12px', borderRadius:'4px', marginBottom:'16px'}}>Best Value</span>
              <h3 style={{fontSize:'24px', marginBottom:'16px'}}>The Relocation Library — Both Books Together</h3>
              <p><strong>New Roots</strong> gives you the full ROS™ system: every module, every tier, the questions to ask, and the steps to take in sequence.</p>
              <p><strong>Across Streets &amp; Seas</strong> gives you depth and perspective — the human side of the journey that no checklist captures.</p>
              <p>Together, they give you infrastructure and perspective — the two things most people are missing when they start this process.</p>
            </div>
            <div style={{background:'var(--white)', border:'2px solid var(--accent)', borderRadius:'16px', padding:'36px', textAlign:'center'}}>
              <div style={{fontSize:'14px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--accent)', marginBottom:'12px'}}>The Relocation Library</div>
              <div style={{fontSize:'48px', fontWeight:'700', color:'var(--accent)', lineHeight:'1', marginBottom:'4px'}}>$64</div>
              <div style={{fontSize:'14px', color:'var(--text-light)', marginBottom:'4px'}}>Both books — digital download</div>
              <div style={{fontSize:'13px', color:'var(--accent)', fontWeight:'600', marginBottom:'28px'}}>Save $10 vs. buying separately</div>
              <a href="https://www.paypal.com/ncp/payment/4T3LVJWPT2EFG" className="btn btn-gold" style={{display:'block', textAlign:'center'}} target="_blank" rel="noopener noreferrer">Get the Full Library →</a>
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section style={{background:'var(--primary)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag" style={{background:'rgba(255,255,255,0.15)', color:'var(--white)'}}>Full-Service</span>
          <h2 style={{color:'var(--white)', marginTop:'12px'}}>ROS™ Relocation Pathways</h2>
          <p style={{color:'rgba(255,255,255,0.8)', maxWidth:'700px', marginTop:'16px', marginBottom:'48px'}}>Comprehensive, guided support through the full ROS™ system — tailored to your life situation, your timeline, and your destination. Six tiers. One system. Your specific next chapter.</p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'24px'}}>
            {[
              {
                name: 'Digital Nomad Pathway',
                price: '$697',
                duration: '6-month access',
                description: 'For location-independent earners ready to make the move official — building the legal and logistical foundation to live and work abroad sustainably.',
                link: 'https://www.paypal.com/ncp/payment/BRD4QKEHJHGZ2',
              },
              {
                name: 'Solo Pathway',
                price: '$897',
                duration: '6-month access',
                description: 'For the individual mover navigating this alone — comprehensive support through the full ROS™ system for your specific destination and situation.',
                link: 'https://www.paypal.com/ncp/payment/LZG74BNVGZXAW',
              },
              {
                name: 'Family Edition Pathway',
                price: '$1,197',
                duration: '9-month dual access',
                description: 'For families moving together — dual dashboard access covering the additional complexity of relocating children, schools, healthcare, and shared finances.',
                link: 'https://www.paypal.com/ncp/payment/3GC8BCWM3US32',
              },
              {
                name: 'Entrepreneur Pathway',
                price: '$1,597',
                duration: '9-month access',
                description: 'For self-employed professionals and business owners moving their business and their life at the same time — legal structure, business continuity, income strategy, and cross-border tax positioning.',
                link: 'https://www.paypal.com/ncp/payment/P3AMQZ5F9Q7RG',
              },
              {
                name: 'Legacy Pathway',
                price: '$1,997',
                duration: '12-month access',
                description: 'For the Legacy Mover — the person who has worked their whole life for this and is ready to spend their next chapter abroad. Comprehensive, guided support through the full ROS™ system.',
                link: 'https://www.paypal.com/ncp/payment/YDX8FGBSDCKNL',
              },
              {
                name: 'Investor Pathway',
                price: '$2,497',
                duration: '12-month access',
                description: 'For the Investor — moving capital, not just yourself. Full ROS™ pathway support covering legal and financial structure, cross-border compliance, and operating in a new country.',
                link: 'https://www.paypal.com/ncp/payment/GYEMFHNNLLWGW',
              },
            ].map((tier) => (
              <div key={tier.name} style={{background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:'16px', padding:'32px', display:'flex', flexDirection:'column'}}>
                <div style={{fontSize:'13px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--gold)', marginBottom:'10px'}}>{tier.name}</div>
                <div style={{fontSize:'38px', fontWeight:'700', color:'var(--white)', lineHeight:'1', marginBottom:'4px'}}>{tier.price}</div>
                <div style={{fontSize:'13px', color:'rgba(255,255,255,0.5)', marginBottom:'16px'}}>{tier.duration}</div>
                <p style={{color:'rgba(255,255,255,0.7)', fontSize:'14px', lineHeight:'1.6', flexGrow:'1', marginBottom:'24px'}}>{tier.description}</p>
                <a href={tier.link} className="btn btn-gold" style={{display:'block', textAlign:'center'}} target="_blank" rel="noopener noreferrer">Start the {tier.name.split(' ')[0]} Pathway →</a>
              </div>
            ))}
          </div>

          <p style={{color:'rgba(255,255,255,0.5)', fontSize:'14px', marginTop:'32px'}}>Not sure which pathway fits? Book a free Discovery Call — we'll tell you honestly which tier applies to your situation.</p>
        </div>
      </section>

      {/* HOW TO THINK ABOUT IT */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Not Sure Where to Start?</h2>
          <div style={{display:'flex', flexDirection:'column', gap:'16px', marginTop:'32px', maxWidth:'760px'}}>
            {[
              { trigger: 'If you\'re not sure where to start', answer: 'Book the free Discovery Call. 15 minutes, no obligation. You\'ll leave knowing exactly what your next step is.' },
              { trigger: 'If you\'re brand new to this', answer: 'Start with New Roots. It gives you the full picture and helps you understand what you don\'t know yet. Then come back for a Clarity Session when you have specific questions.' },
              { trigger: 'If you want both books', answer: 'Get the Relocation Library — New Roots and Across Streets & Seas together for $64. Save $10 and get the system and the perspective in one place.' },
              { trigger: 'If you have a specific decision to make right now', answer: 'Book the Clarity Session — or submit via Async Q&A if you prefer written guidance. Don\'t spend another three months in research paralysis.' },
              { trigger: 'If you\'re ready for end-to-end support', answer: 'Choose the Pathway that fits your life situation. Six tiers, one system — start with a Discovery Call if you\'re not sure which one applies to you.' },
            ].map((item) => (
              <div key={item.trigger} style={{background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'10px', padding:'24px'}}>
                <strong style={{color:'var(--primary)', display:'block', marginBottom:'8px'}}>{item.trigger} —</strong>
                <span style={{color:'var(--text)', fontSize:'16px'}}>{item.answer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-simple" style={{marginTop:'32px', maxWidth:'760px'}}>
            {[
              { q: 'Is the Clarity Session recorded?', a: 'Yes. You\'ll receive a recording of the call along with a written summary within 48 hours.' },
              { q: 'What\'s the difference between the Clarity Session and the Async Q&A?', a: 'The Clarity Session is a live 30-minute video call — real-time conversation, follow-up questions, and immediate back-and-forth. The Async Q&A is a written exchange — you submit your questions and receive a detailed written response. Same expertise, different format.' },
              { q: 'Do I need to read the book before booking a Clarity Session?', a: 'No — but it helps. If you come to the session having read New Roots, you\'ll have more targeted questions and get more out of the 30 minutes.' },
              { q: 'What is Across Streets & Seas and how is it different from New Roots?', a: 'New Roots is the systematic guide — the full ROS™ framework, modules, tiers, and step-by-step infrastructure. Across Streets & Seas goes deeper into the human side: the mindset, the decisions that don\'t fit on a checklist, and the real story of what this process looks like from the inside. They complement each other, which is why the Library bundle exists.' },
              { q: 'How do I know which Pathway tier is right for me?', a: 'Book a free Discovery Call. In 15 minutes, the founder will tell you exactly which tier applies to your situation — no guessing, no pressure.' },
              { q: 'Does the Clarity Session include legal or tax advice?', a: 'No. Global Systems Studio provides strategic relocation guidance — the system, the sequence, the questions to ask. For legal, tax, and financial advice, ROS™ connects you with vetted professionals who specialize in international relocation.' },
            ].map((item) => (
              <div key={item.q} className="faq-simple-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>The Questions You're Carrying Have Answers.</h2>
          <p>You don't have to keep researching alone. Start where you are. We'll figure out the rest together.</p>
          <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap', marginTop:'32px'}}>
            <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" className="btn btn-gold">Book a Free Discovery Call →</Link>
            <a href="https://www.paypal.com/ncp/payment/J3ZZAKPGCJACS" className="btn btn-outline-white" target="_blank" rel="noopener noreferrer">Get New Roots →</a>
          </div>
        </div>
      </section>
    </>
  );
}
