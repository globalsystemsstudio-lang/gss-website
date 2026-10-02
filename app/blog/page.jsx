import Link from 'next/link';

export const metadata = {
  title: 'Blog — Real Questions. Real Answers. No Highlight Reel.',
  description: 'The GSS blog covers money, financial planning, career & income abroad, legal & documentation, housing, and the human side of international relocation for U.S. persons.',
  alternates: { canonical: 'https://globalsystemsstudio.com/blog/' },
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
            <Link href="/blog/us-tax-playbook-americans-moving-abroad" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>The Tax Playbook for Americans Moving Abroad</h3>
              <p>The FEIE, the Foreign Tax Credit, the Foreign Housing Exclusion, FBAR and FATCA. What works, what doesn't, and what to have ready before you go.</p>
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
            <Link href="/blog/four-layers-governed-international-relocation" className="blog-card">
              <span className="blog-card-tag">Framework Education</span>
              <h3>Everyone's Planning to Move Internationally. Almost Nobody's Ready.</h3>
              <p>The four layers of a governed international relocation: legal, financial, operational and integration, in the right order.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/investor-tier-relocation-as-strategy" className="blog-card">
              <span className="blog-card-tag">Framework Education</span>
              <h3>The Investor Tier: When Relocation Becomes a Strategy, Not Just a Move</h3>
              <p>The Investor tier isn't about how much money you have. It's about why you're moving, and why Panama keeps coming up.</p>
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
            <Link href="/blog/relocation-myths-taxes-vanuatu-mail" className="blog-card">
              <span className="blog-card-tag">Relocation Reality</span>
              <h3>What Most People Get Wrong About Relocating Abroad</h3>
              <p>Fact-checking the FEIE and Vanuatu citizenship claims going viral right now, plus the mail-forwarding gap nobody mentions.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/what-most-people-get-wrong-about-moving-abroad" className="blog-card">
              <span className="blog-card-tag">Relocation Reality</span>
              <h3>Here's What Most People Get Wrong About Moving Abroad</h3>
              <p>The first question isn't where to go. It's in what order to make the decisions, and why the professionals helping relocators are running at full capacity.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATION GUIDES */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Destination Guides</h2>
          <div className="blog-grid" style={{marginTop:'32px'}}>
            <Link href="/blog/barbados-welcome-stamp-relocation-guide" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Barbados Keeps Coming Up. Here's What the Welcome Stamp Solves, and What It Doesn't.</h3>
              <p>The Welcome Stamp, the SERP long-stay route, the US tax reality, property paperwork and a real Barbados budget.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/ghana-right-of-abode-relocation-guide" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Ghana Is More Than a Destination. Here's What It Actually Takes to Relocate.</h3>
              <p>The Right of Abode, the GIPC investor pathway, real Accra costs, and the risks to plan around.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/philippines-relocation-guide-srrv-land-rule" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>The Philippines Keeps Coming Up. Here's What's Real, and What's Missing.</h3>
              <p>No Digital Nomad Visa, a constitutional land ban, and the SRRV most people miss.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/japan-not-closed-relocation-guide" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Japan Is Not Closed: The Real Relocation Guide for US Citizens</h3>
              <p>Visa pathways, the worldwide tax picture, city costs, and the failure modes that catch US citizens out.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/dominican-republic-relocation-guide" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>The Dominican Republic Is the Caribbean's Most Underrated Relocation Market</h3>
              <p>Territorial tax, accessible residency pathways, and a cost of living that works for a wide range of incomes.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/colombia-not-what-the-internet-sold-you" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Colombia Is Not What the Internet Sold You, and It's Still Worth Going</h3>
              <p>The 183-day tax trap, visa pathways, healthcare, housing, and the banking sequence that catches people out.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/belize-full-financial-picture-before-you-land" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Belize Goes Deeper: The Full Financial Picture Before You Land</h3>
              <p>Real Belize costs, banking timelines, tax realities for US persons, and the five questions to answer before you move.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/paraguay-5500-residency-real-cost" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Paraguay Keeps Coming Up. Let's Actually Talk About What It Takes.</h3>
              <p>The $5,500 residency deposit is real. What a realistic move budget actually looks like on top of it.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/costa-rica-first-200-meters-beachfront" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>The First 200 Meters: Buying Beachfront in Costa Rica</h3>
              <p>The maritime zone rules most "beachfront property" listings never mention — and why they matter before you sign anything.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/spain-relocation-guide-golden-visa-exit" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Spain Relocation Reality: What the Golden Visa Exit Means for You in 2026</h3>
              <p>The Golden Visa is gone. Here's what the 183-day tax residency rule, the Beckham Law, and the visa pathways that are actually still open mean for a Spain relocation in 2026.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/turkey-relocation-guide-all-tiers" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Turkey Is One of the Most Underrated Relocation Markets Right Now</h3>
              <p>Mediterranean affordability, a real Digital Nomad Certificate, and the most accessible Citizenship-by-Investment program in the G20.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/ireland-non-dom-tax-position-guide" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Ireland's Non-Dom Tax Position — If You Structure It Correctly</h3>
              <p>One of the most sophisticated residency and tax frameworks in the English-speaking world, and why almost nobody leads with it.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/malaysia-relocation-guide-mm2h-pvip" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Malaysia Is One of the Most Underrated Markets in Southeast Asia</h3>
              <p>MM2H and PVIP compared, tier by tier — and a tax exemption on foreign income locked in through 2036.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/mexico-relocation-guide-which-city" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Which Mexico? The US Citizen's Real Guide to Mexico Relocation</h3>
              <p>City-by-city costs and visa pathways, plus the state-level travel advisories most relocation content leaves out.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RETIREMENT & EXPAT GUIDES (2026) */}
      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>Retirement &amp; Expat Guides</h2>
          <div className="blog-grid" style={{marginTop:'32px'}}>
            <Link href="/blog/best-countries-americans-retire-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Best countries for Americans to retire abroad in 2026</h3>
              <p>Mexico, Portugal, Panama, Costa Rica and Spain compared by residence route, healthcare, income access and housing, and how to sequence the move.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/retire-abroad-countries-ranked-cost-of-living-2026" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Countries to retire abroad ranked by cost of living in 2026</h3>
              <p>Why a country-average cost ranking misleads, five retirement destinations on different decision paths, and how to build your own city-level budget.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/best-european-countries-americans-retire-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Destination Guide</span>
              <h3>Best European countries for Americans to retire abroad in 2026</h3>
              <p>Portugal, Spain, France, Italy and Greece compared for American retirees, with the residence, healthcare and housing steps in the right order.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/best-expat-financial-advisors-americans-2026" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Best 7 expat financial advisors for Americans in 2026</h3>
              <p>Seven advisor types compared by the problem they solve: cross-border planning, U.S. taxes, IRS representation, investments, estate law and relocation preparation.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPAT QUESTIONS ANSWERED (2026) */}
      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>Expat Questions Answered</h2>
          <div className="blog-grid" style={{marginTop:'32px'}}>
            <Link href="/blog/do-you-still-pay-us-taxes-working-remotely-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Do you still pay US taxes working remotely from abroad in 2026?</h3>
              <p>Why living abroad does not end your U.S. filing, which exclusions and credits can reduce the bill, and the reporting that still applies.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/can-digital-nomads-qualify-for-feie-2026" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Can digital nomads qualify for the Foreign Earned Income Exclusion in 2026?</h3>
              <p>How the physical presence test works for people who move often, why the tax home matters, and what the exclusion does not cover.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/roth-ira-contributions-while-living-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Can you still invest in a Roth IRA while living abroad in 2026?</h3>
              <p>How the FEIE affects IRA eligibility, why the Foreign Tax Credit can change the answer, and the custodian and local tax issues to check first.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/transfer-us-401k-to-foreign-pension-plan-2026" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Can you transfer a US 401(k) into a foreign pension plan in 2026?</h3>
              <p>Why a 401(k) generally cannot move tax-free into a foreign pension plan, what the realistic options are and what to check before you change your address.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/how-long-before-you-lose-state-residency-living-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>How long before you lose state residency when living abroad in 2026?</h3>
              <p>How U.S. state residency works when you move abroad, what ties states look at and the steps that support a clean exit.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/keep-us-llc-if-you-move-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Business Abroad</span>
              <h3>Can you keep your US-based LLC if you move abroad in 2026?</h3>
              <p>Whether you can keep a U.S. LLC when you move abroad, what compliance continues and where local rules and banking can create problems.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/hsa-contributions-while-living-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Can you still contribute to an HSA while living abroad in 2026?</h3>
              <p>Whether you can contribute to an HSA while living abroad, what stays tax-free and why foreign insurance often ends eligibility.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/contribute-to-529-plan-while-living-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Family Relocation</span>
              <h3>Can you keep contributing to a 529 plan while living abroad in 2026?</h3>
              <p>Whether you can keep funding a 529 plan from abroad, how eligible foreign schools work and what tax caveats to check.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/how-much-money-do-you-need-to-retire-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Retirement Abroad</span>
              <h3>How much money do you need to retire abroad in 2026?</h3>
              <p>A four-step method to size your retirement savings for a specific destination, with a worked example and the budget lines most often missed.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/is-it-cheaper-to-retire-abroad-than-in-the-us-2026" className="blog-card">
              <span className="blog-card-tag">Retirement Abroad</span>
              <h3>Is it cheaper to retire abroad than in the US in 2026?</h3>
              <p>How retirement costs abroad compare with the U.S., where savings are real, where they disappear and how to compare your own budget.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/how-much-does-it-cost-to-relocate-internationally-2026" className="blog-card">
              <span className="blog-card-tag">Relocation Planning</span>
              <h3>How much does it cost to relocate internationally in 2026?</h3>
              <p>The cost categories of an international move, how to build an estimate from quotes and the expenses people most often forget.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/how-much-savings-before-moving-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Relocation Planning</span>
              <h3>How much savings should you have before moving abroad in 2026?</h3>
              <p>A practical method to size your savings before moving abroad: one-time costs, runway months and a reserve, with a worked example.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/how-long-does-it-take-to-get-a-digital-nomad-visa-2026" className="blog-card">
              <span className="blog-card-tag">Visa and Residency</span>
              <h3>How long does it take to get a digital nomad visa in 2026?</h3>
              <p>What drives digital nomad visa timelines, a stage-by-stage planning view and why documents often take longer than the review.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/move-abroad-without-a-job-lined-up-2026" className="blog-card">
              <span className="blog-card-tag">Visa and Residency</span>
              <h3>Can you move abroad without a job lined up in 2026?</h3>
              <p>Which visas let you move abroad without a local employer, what to prepare and the risks of arriving without a legal right to stay.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/us-credit-card-after-moving-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Can you still get a US credit card after moving abroad in 2026?</h3>
              <p>How to keep U.S. credit cards and credit history alive when you move abroad, what issuers ask for and what to do before you leave.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/keep-us-drivers-license-living-abroad-2026" className="blog-card">
              <span className="blog-card-tag">Relocation Planning</span>
              <h3>Can you keep your US driver&#39;s license while living abroad in 2026?</h3>
              <p>Whether your U.S. license stays valid abroad, how international driving permits work and when to convert to a local license.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/how-long-can-americans-stay-abroad-without-a-visa-2026" className="blog-card">
              <span className="blog-card-tag">Visa and Residency</span>
              <h3>How long can Americans stay abroad without a visa in 2026?</h3>
              <p>Common visa-free stay limits for Americans, how counting rules like Schengen 90/180 work and why repeated visits are not a residency plan.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/relocate-abroad-with-student-loan-debt-2026" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Can you relocate abroad with student loan debt in 2026?</h3>
              <p>How student loans work when you move abroad, what to tell your servicer and how to plan payments, currency and 2026 repayment changes.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/relocate-abroad-and-keep-us-citizenship-2026" className="blog-card">
              <span className="blog-card-tag">Relocation Planning</span>
              <h3>Can you relocate abroad and keep your US citizenship in 2026?</h3>
              <p>Why moving abroad does not end U.S. citizenship, what stays the same, what changes and how dual citizenship works.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/private-health-insurance-cost-for-expats-2026" className="blog-card">
              <span className="blog-card-tag">Healthcare Abroad</span>
              <h3>How much does private health insurance cost for expats in 2026?</h3>
              <p>What drives expat health insurance costs in 2026, the main plan options and how to compare quotes without relying on averages.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/life-insurance-after-moving-abroad" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Is it harder to get life insurance after you move abroad?</h3>
              <p>Getting new life insurance can be harder after you move abroad. Learn how residency affects eligibility, what to disclose before departure and what to ask insurers.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/keep-medicare-while-living-abroad" className="blog-card">
              <span className="blog-card-tag">Healthcare Abroad</span>
              <h3>Can US citizens keep Medicare while living abroad?</h3>
              <p>Original Medicare generally does not cover routine care abroad. Understand Part B penalties, private plan residence rules and how to plan healthcare before you move.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/buy-or-rent-when-you-first-relocate-abroad" className="blog-card">
              <span className="blog-card-tag">Housing Abroad</span>
              <h3>Should you buy or rent when you first relocate abroad?</h3>
              <p>Rent first when residence approval or neighborhood fit is unresolved. See how to review leases, property purchases and exit terms before committing abroad.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/how-long-does-international-relocation-take" className="blog-card">
              <span className="blog-card-tag">Relocation Planning</span>
              <h3>How long does it take to relocate internationally?</h3>
              <p>Build a realistic relocation timeline from residence route, document dependencies and household constraints, with a delayed-move scenario and a 90-day horizon.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/keep-us-bank-account-while-living-abroad" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Can I keep my US bank account while living abroad?</h3>
              <p>Whether you can keep a US bank account abroad depends on your bank's country and account rules. Learn what to ask, how to test access and plan transfers.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/social-security-while-living-abroad" className="blog-card">
              <span className="blog-card-tag">Financial Planning</span>
              <h3>Can retirees collect Social Security while living abroad?</h3>
              <p>Eligible US citizens can generally collect Social Security abroad, subject to country rules. Learn about reporting your address, work rules and payment options.</p>
              <span className="blog-card-link">Read →</span>
            </Link>
            <Link href="/blog/bring-pet-when-relocating-internationally" className="blog-card">
              <span className="blog-card-tag">Housing Abroad</span>
              <h3>Can you bring your pet when you relocate internationally?</h3>
              <p>Bringing a pet abroad requires destination entry rules, a USDA-accredited veterinarian and airline acceptance. Plan certificates, timing and pet-friendly housing.</p>
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
