import Link from 'next/link';

export const metadata = {
  title: 'Blog — Real Questions. Real Answers. No Highlight Reel.',
  description: 'The GSS blog covers money, financial planning, career & income abroad, legal & documentation, housing, and the human side of international relocation for U.S. persons.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/blog/' },
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Real Questions. Real Answers. No Highlight Reel.</h1>
          <p>This blog exists because the questions people have about international relocation deserve honest, specific, useful answers — not inspiration content designed to make the move look effortless. Everything here is written from the inside of the process, not the outside looking back.</p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <span className="section-tag">Featured Post</span>
          <div style={{background:'var(--bg)', border:'2px solid var(--accent)', borderRadius:'16px', padding:'48px', maxWidth:'820px', marginTop:'24px'}}>
            <span style={{fontSize:'12px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--accent)'}}>Relocation Strategy</span>
            <h2 style={{marginTop:'12px'}}>What the Relocation Influencers Aren't Telling You</h2>
            <p style={{color:'var(--text-light)', fontStyle:'italic', marginTop:'8px'}}>Why the highlight reel made me more nervous — not less</p>
            <p style={{marginTop:'16px'}}>You've watched the videos. You've followed the accounts. You've seen the beautiful apartments, the low cost of living breakdowns, the "I moved abroad with $5,000" stories. And somehow, after all of that content, you still don't have the answers you actually need.</p>
            <p>Here's why — and what to do instead.</p>
            <Link href="/blog/how-international-relocation-consultancy-works" className="btn btn-gold" style={{marginTop:'16px', display:'inline-block'}}>Read this post →</Link>
          </div>
        </div>
      </section>

      {/* MONEY & FINANCIAL PLANNING */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Money &amp; Financial Planning</h2>
          <div className="blog-grid" style={{marginTop:'32px'}}>
            <Link href="/blog/financial-considerations-us-persons-relocating-internationally" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Key Financial Considerations for U.S. Persons Relocating Internationally</h3>
              <p>FBAR, FATCA, PFIC rules, banking strategy, Social Security, and the decisions that must be made before you leave.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/find-financial-planning-services-moving-abroad" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>How to Find and Evaluate Financial Planning Services for Moving Abroad</h3>
              <p>Cross-border financial planners are a specialized niche. Here's how to find the right one — and the questions to ask before you hire anyone.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/sell-or-rent-home-before-relocating" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Should You Sell or Rent Your Home Before Relocating?</h3>
              <p>The capital gains exclusion window. What property management actually costs. The tax math that changes depending on how long you wait.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CAREER & INCOME */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Career &amp; Income Abroad</h2>
          <div className="blog-grid" style={{marginTop:'32px'}}>
            <Link href="/blog/finding-work-after-60-foreign-country" className="blog-card">
              <span className="blog-card-tag">Career</span>
              <h3>Finding Work After 60 in a Foreign Country — Where Do You Even Begin?</h3>
              <p>International job platforms. Credential transferability. The legal parameters of your visa and whether it even allows you to work locally.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/professional-skills-new-country" className="blog-card">
              <span className="blog-card-tag">Career</span>
              <h3>What Happens to Your Professional Skills in a New Country?</h3>
              <p>Licensing requirements that don't transfer. Markets that don't recognize your credentials. How to evaluate your options before you move.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/opening-business-abroad" className="blog-card">
              <span className="blog-card-tag">Entrepreneurship</span>
              <h3>Opening a Business Abroad: What You Need to Know Before You Start</h3>
              <p>Legal registration requirements. Tax structure. Operating as a foreign national business owner.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* LEGAL & DOCUMENTATION */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Legal &amp; Documentation</h2>
          <div className="blog-grid" style={{marginTop:'32px'}}>
            <Link href="/blog/visa-legal-support-international-relocation" className="blog-card">
              <span className="blog-card-tag">Legal &amp; Residency</span>
              <h3>Visa and Legal Support for International Relocation: What U.S. Persons Need to Know</h3>
              <p>Visa categories, the legal work required before and after departure, and how to find legitimate visa services.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/what-is-apostille" className="blog-card">
              <span className="blog-card-tag">Legal</span>
              <h3>What Is an Apostille and Why Does It Matter?</h3>
              <p>The document authentication step that nobody mentions until you're scrambling to meet a deadline.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/visas-residency-miss-the-window" className="blog-card">
              <span className="blog-card-tag">Legal</span>
              <h3>Visas, Residency, and What Happens If You Miss the Window</h3>
              <p>The difference between arriving legally and staying legally. The residency conversion timeline most countries don't advertise.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RELOCATION STRATEGY */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Relocation Strategy</h2>
          <div className="blog-grid" style={{marginTop:'32px'}}>
            <Link href="/blog/how-international-relocation-consultancy-works" className="blog-card">
              <span className="blog-card-tag">Relocation Strategy</span>
              <h3>How International Relocation Consultancy Works: A Complete Guide for U.S. Persons</h3>
              <p>What consultancy covers, how it differs from a moving company or visa agency, and the methodology behind ROS™.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/renting-abroad-as-foreigner" className="blog-card">
              <span className="blog-card-tag">Housing</span>
              <h3>What Nobody Told Me About Renting Abroad as a Foreigner</h3>
              <p>Pricing opacity. Landlords who charge more the moment they know you're not local. What a relocation specialist does that Google cannot.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/disconnection-nobody-prepares-you-for" className="blog-card">
              <span className="blog-card-tag">The Human Side</span>
              <h3>The Disconnection Nobody Prepares You For</h3>
              <p>Your children are in the U.S. Your grandchildren are in the U.S. The grief of leaving that behind is real — and nobody talks about it honestly.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section style={{background:'var(--primary)', padding:'80px 0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 style={{color:'var(--white)'}}>New posts go out when there are real answers to share — not on a content calendar.</h2>
          <p style={{color:'rgba(255,255,255,0.8)', maxWidth:'560px', margin:'16px auto 32px'}}>Drop your email below and we'll send you new posts as they publish, along with resources from the ROS™ community.</p>
          <form style={{display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap', maxWidth:'480px', margin:'0 auto'}}>
            <input type="email" placeholder="Your email address" style={{flex:1, minWidth:'220px', padding:'14px 20px', borderRadius:'8px', border:'none', fontSize:'16px', fontFamily:'inherit'}} />
            <button type="submit" className="btn btn-gold">Subscribe →</button>
          </form>
        </div>
      </section>
    </>
  );
}
