import Link from 'next/link';

export const metadata = {
  title: 'Should You Sell or Rent Your Home Before Relocating Internationally? | Global Systems Studio',
  description: 'The capital gains exclusion window, what property management actually costs, and the tax math that changes depending on how long you wait.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/blog/sell-or-rent-home-before-relocating/' },
};

export default function SellOrRentPage() {
  return (
    <>
      <section className="article-blog-hero">
        <div className="container">
          <span className="article-blog-tag">Money &amp; Financial Planning</span>
          <h1 style={{marginTop:'12px', maxWidth:'860px'}}>Should You Sell or Rent Your Home Before Relocating?</h1>
          <p className="article-meta" style={{marginTop:'16px'}}>Global Systems Studio · July 2026 · Last updated: July 15, 2026</p>
        </div>
      </section>

      <section className="article-page">
        <div className="container">
          <div className="article-layout">
            <div className="article-body">

              <div style={{background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'10px', padding:'24px 28px', marginBottom:'40px'}}>
                <h3 style={{fontSize:'13px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--primary)', marginBottom:'14px'}}>TL;DR</h3>
                <ul style={{paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'6px'}}>
                  <li>Selling gives you a clean break, liquidity, and the capital gains exclusion — but only if you meet the ownership and use tests</li>
                  <li>Renting creates passive income but comes with property management costs, landlord liability, and tax complexity abroad</li>
                  <li>The $250,000/$500,000 capital gains exclusion disappears if the home stops being your primary residence for too long</li>
                  <li>Your decision should be driven by your financial situation, timeline, and how long you plan to stay abroad</li>
                  <li>Get a cross-border tax advisor involved before you decide — not after</li>
                </ul>
              </div>

              <h2>Why this decision is more complicated than it looks</h2>
              <p>For most people relocating internationally, their home is their largest asset. The question of whether to sell it or rent it out before leaving feels like a financial decision — and it is — but it's also a tax decision, a lifestyle decision, and a psychological one.</p>
              <p>People often make this call based on emotion ("I can't sell the house I raised my kids in") or oversimplified math ("I'll just rent it out and use the income"). Both of those are valid starting points. Neither is a complete analysis.</p>
              <p>Here is what actually drives the decision.</p>

              <h2>The capital gains exclusion — and the clock that starts when you leave</h2>
              <p>Under IRC §121, U.S. taxpayers can exclude up to $250,000 in capital gains from the sale of a primary residence ($500,000 for married couples filing jointly), provided they have owned and used the home as their primary residence for at least 2 of the last 5 years before the sale.</p>
              <p>That 5-year lookback window is the critical number. Once you leave the country and the home is no longer your primary residence, that clock starts running. If you wait too long to sell — or if you rent the home for several years before selling — you may no longer qualify for the full exclusion.</p>
              <div className="callout-box">
                <p><strong>Example:</strong> You bought your home in 2015 for $300,000. You leave for your destination country in 2026, at which point it's worth $600,000 — a $300,000 gain. If you sell before 2028 (within 2 years of leaving), you likely qualify for the full exclusion and owe no federal capital gains tax on that $300,000. If you wait until 2032, you may owe capital gains tax on the entire amount.</p>
              </div>
              <p>This is the single most important tax consideration in the sell-vs-rent decision. Many people don't find out about this window until it has already closed.</p>

              <h2>What renting your home actually costs</h2>
              <p>The income number looks appealing. The net number — after you account for all costs — often looks very different.</p>
              <div className="table-scroll">
                <table className="data-table">
                  <thead>
                    <tr><th>Cost category</th><th>Typical range</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Property management fees</td><td>8–12% of monthly rent</td></tr>
                    <tr><td>Maintenance and repairs</td><td>1–2% of home value per year</td></tr>
                    <tr><td>Vacancy allowance</td><td>5–8% annually (not all months will be rented)</td></tr>
                    <tr><td>Insurance (landlord policy)</td><td>15–25% more than homeowner's policy</td></tr>
                    <tr><td>Property taxes</td><td>Ongoing, not reduced because you moved</td></tr>
                    <tr><td>HOA fees (if applicable)</td><td>Ongoing</td></tr>
                    <tr><td>Tenant turnover costs</td><td>Cleaning, repainting, relisting between tenants</td></tr>
                  </tbody>
                </table>
              </div>
              <p>On a $2,500/month rental, gross annual income is $30,000. After a 10% management fee, 6% vacancy, 1.5% maintenance reserve, and increased insurance, you may net $20,000–$22,000 — before federal and state income tax, which you still owe on rental income regardless of where you live.</p>

              <h2>The tax treatment of rental income while abroad</h2>
              <p>Rental income from a U.S. property is U.S.-source income. It is taxable in the United States regardless of your residency abroad. It is not excludable under the Foreign Earned Income Exclusion (FEIE), which only applies to earned income from foreign sources.</p>
              <p>You will report rental income on Schedule E of your U.S. tax return. You can deduct allowable expenses including mortgage interest, property taxes, depreciation, repairs, and management fees. Depreciation recapture applies when you eventually sell — so the tax benefit you claimed annually comes back as ordinary income at the time of sale.</p>
              <p>Some destination countries will also tax your U.S. rental income locally, depending on the tax treaty (or lack of one) between the U.S. and your destination.</p>
              <div className="callout-box">
                <p><strong>Action:</strong> Before deciding to rent, get a projection of your after-tax net income from a cross-border tax advisor. The number you think you'll receive and the number you'll actually keep are often not the same.</p>
              </div>

              <h2>Managing a property from another country</h2>
              <p>The practical reality of being a long-distance landlord is something most people underestimate until they're in it.</p>
              <p>A good property manager handles tenant screening, rent collection, maintenance coordination, and legal compliance. A bad one costs you money, legal exposure, and an enormous amount of stress from 3,000 miles away. Finding the right property manager is its own research project — and even with a good one, you remain ultimately responsible for the property.</p>
              <p>Issues that require your direct attention — legal disputes, major repairs, insurance claims, evictions — don't pause because you're in another time zone. Emergency calls have no regard for international date lines.</p>

              <h2>When selling makes more sense</h2>
              <ul>
                <li>You have significant capital gains and the §121 exclusion window is still open</li>
                <li>You plan to stay abroad for more than 3 years</li>
                <li>You need the liquidity to fund your relocation and establish life abroad</li>
                <li>You do not want the ongoing management burden and legal liability of being a landlord</li>
                <li>The rental income, after all costs and taxes, is not material to your financial plan</li>
                <li>You are emotionally ready for a clean break</li>
              </ul>

              <h2>When renting makes more sense</h2>
              <ul>
                <li>You are genuinely uncertain about staying abroad long-term and want to preserve the option to return</li>
                <li>You have a trusted family member or property manager in place already</li>
                <li>The rental income is material to your monthly cash flow abroad</li>
                <li>Property values in your market are appreciating significantly</li>
                <li>Your capital gains are small or you have a cost basis that minimizes the tax impact of a future sale</li>
                <li>You have the temperament and bandwidth for landlord responsibilities from abroad</li>
              </ul>

              <h2>The hybrid option: rent short-term, then sell</h2>
              <p>Some people choose to rent for 1–2 years — often to the same tenant on a fixed-term lease — and then sell before the §121 exclusion window closes. This provides income during the transition period while preserving the capital gains exclusion.</p>
              <p>This strategy requires careful planning around the 2-of-5-year rule and is highly dependent on when you left, when you rent, and when you sell. If you are considering this approach, engage a tax advisor before signing any lease.</p>

              <div className="checklist-box">
                <h3>Before you decide — the questions to answer</h3>
                <ul>
                  <li>What is your cost basis in the home, and what is the current market value?</li>
                  <li>How long have you lived in it as a primary residence?</li>
                  <li>What is the §121 exclusion deadline for your situation?</li>
                  <li>What is the realistic net monthly income after all costs and taxes?</li>
                  <li>Do you have a trusted property manager in place?</li>
                  <li>How long do you plan to stay abroad?</li>
                  <li>Do you want the option to return and move back in?</li>
                  <li>How does the rental income affect your overall tax position in both countries?</li>
                </ul>
              </div>

              <h2>Frequently Asked Questions</h2>
              <div className="faq-simple">
                {[
                  { q: 'Can I still claim the capital gains exclusion if I rent my home for a year before selling?', a: 'Possibly. The §121 exclusion requires that you have owned and used the home as your primary residence for at least 2 of the last 5 years. If you rent it for 1 year and sell within the 5-year window, you may still qualify — but the math depends on your specific dates. Consult a tax advisor with your exact timeline before making this assumption.' },
                  { q: 'What if I still have a mortgage on the home?', a: 'A mortgage does not prevent you from renting the home, but you should review your mortgage agreement — some loans have owner-occupancy requirements that limit rental use. Notify your lender and insurance provider before renting. Your homeowner\'s insurance policy will need to be converted to a landlord policy.' },
                  { q: 'Does renting my U.S. home affect my visa or residency status abroad?', a: 'Generally no, but this depends on the destination country. Some countries require proof that you are not maintaining a primary residence in the U.S. as part of residency applications. Your immigration attorney should review your specific situation.' },
                  { q: 'Can I deduct my home office from my rental income if I work remotely?', a: 'No. Once a property is converted to a rental, the home office deduction for personal use no longer applies. You can deduct business-related expenses from your business income separately, but not from the rental property income.' },
                ].map((item) => (
                  <div key={item.q} className="faq-simple-item">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>

              <div style={{background:'var(--primary)', borderRadius:'12px', padding:'36px 40px', marginTop:'56px', textAlign:'center'}}>
                <h2 style={{color:'var(--white)', fontSize:'22px', marginBottom:'10px'}}>This decision has long-term tax consequences either way.</h2>
                <p style={{color:'rgba(255,255,255,0.8)', marginBottom:'24px'}}>A Clarity Session with ROS™ helps you map the financial decisions that need to be made before you leave — including this one.</p>
                <Link href="https://calendar.app.google/GqshRNZbP1LTvwKJ9" className="btn btn-gold">Book a Clarity Session →</Link>
              </div>

            </div>

            <aside className="toc">
              <div className="toc-heading">On This Page</div>
              <ul className="toc-list">
                <li><a href="#">Why This Decision Is Complex</a></li>
                <li><a href="#">The Capital Gains Exclusion</a></li>
                <li><a href="#">What Renting Actually Costs</a></li>
                <li><a href="#">Tax Treatment of Rental Income</a></li>
                <li><a href="#">Managing From Abroad</a></li>
                <li><a href="#">When to Sell</a></li>
                <li><a href="#">When to Rent</a></li>
                <li><a href="#">The Hybrid Option</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
