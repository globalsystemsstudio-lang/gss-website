import Link from 'next/link';

export const metadata = {
  title: "Do you still pay US taxes working remotely from abroad in 2026?",
  description: "Yes, U.S. citizens generally owe U.S. tax on worldwide income while working remotely abroad. See which exclusions, credits and filings apply in 2026.",
  alternates: { canonical: 'https://globalsystemsstudio.com/blog/do-you-still-pay-us-taxes-working-remotely-abroad-2026/' },
};

const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I still file a U.S. tax return if I work remotely from abroad?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. U.S. citizens and green card holders generally must file regardless of where they live or work, though the filing deadline is extended for many taxpayers abroad."}}, {"@type": "Question", "name": "Does the Foreign Earned Income Exclusion cover all my remote income?", "acceptedAnswer": {"@type": "Answer", "text": "No. It covers earned income only, up to an annual limit, and only if you qualify. It does not cover investment income, pensions or Social Security."}}, {"@type": "Question", "name": "Do I owe self-employment tax if I use the exclusion?", "acceptedAnswer": {"@type": "Answer", "text": "Often yes. The exclusion reduces income tax, but self-employment tax generally still applies unless a totalization agreement removes it."}}, {"@type": "Question", "name": "Can I use the exclusion and the Foreign Tax Credit together?", "acceptedAnswer": {"@type": "Answer", "text": "You can use both in the same year, but not on the same dollars of income. Which one fits better depends on your income mix and the foreign tax you pay."}}, {"@type": "Question", "name": "Will my U.S. state still tax me?", "acceptedAnswer": {"@type": "Answer", "text": "It can. Rules differ by state, and some expect you to take specific steps to end residency. Check your state before you leave."}}, {"@type": "Question", "name": "Is this tax advice?", "acceptedAnswer": {"@type": "Answer", "text": "No. This is educational context. Confirm your situation with a qualified cross-border tax professional before filing or making commitments."}}]};
const articleSchema = {"@context": "https://schema.org", "@type": "Article", "headline": "Do you still pay US taxes working remotely from abroad in 2026?", "description": "Yes, U.S. citizens generally owe U.S. tax on worldwide income while working remotely abroad. See which exclusions, credits and filings apply in 2026.", "datePublished": "2026-10-02", "author": {"@type": "Organization", "name": "Global Systems Studio"}, "publisher": {"@type": "Organization", "name": "Global Systems Studio"}, "mainEntityOfPage": "https://globalsystemsstudio.com/blog/do-you-still-pay-us-taxes-working-remotely-abroad-2026/"};

export default function DoYouStillPayUsTaxesWorkingRemotelyAbroadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="article-blog-hero">
        <div className="container">
          <span className="article-blog-tag">Financial Planning</span>
          <h1 style={{marginTop:'12px', maxWidth:'860px'}}>Do you still pay US taxes working remotely from abroad in 2026?</h1>
          <p className="article-meta" style={{marginTop:'16px'}}>Global Systems Studio · October 2026</p>
        </div>
      </section>

      <section className="article-page">
        <div className="container">
          <div className="article-layout">
            <div className="article-body">

              <p>Yes. U.S. citizens and green card holders generally owe U.S. tax on worldwide income, including pay earned while working remotely from another country. What changes is not whether you file, but which tools can reduce what you owe: the Foreign Earned Income Exclusion, the Foreign Tax Credit and, in some cases, a tax treaty.</p>

              <h2>TL;DR</h2><ul><li>U.S. citizens generally file a U.S. return every year, wherever they live and work.</li><li>The Foreign Earned Income Exclusion (FEIE) can exclude earned income up to an annual limit ($132,900 for 2026) if you meet a residence or physical presence test.</li><li>The Foreign Tax Credit can offset U.S. tax with income tax paid to another country, and the two tools cannot cover the same dollars.</li><li>Self-employment tax, state taxes and foreign account reporting can still apply even when income tax is reduced.</li></ul>

              <h2>Why this matters</h2><p>Remote work makes it easy to assume that living abroad changes your tax status. It does not. Your U.S. filing obligation follows your citizenship, and the work you do from a laptop in another country is still your income.</p><p>What does change is your toolbox. A remote worker who lands in the wrong tool, or who ignores a reporting form, can pay more tax or face penalties that have nothing to do with how much they earned.</p>

              <h2>What the IRS still expects</h2>

              <p>The IRS taxes U.S. citizens on income from all sources. A salary from a U.S. employer, freelance income from clients anywhere and rental income all belong on your return. Living abroad can extend your filing deadline, but it does not remove the return.</p>

              <p>The core pieces to understand before you move are:</p><ul><li><strong>Filing:</strong> A U.S. return is generally due every year, with an automatic two-month extension to June 15 for taxpayers who live abroad on the regular due date.</li><li><strong>Exclusion:</strong> The FEIE can shelter earned income, not investment income, pensions or Social Security.</li><li><strong>Credit:</strong> The Foreign Tax Credit gives a dollar-for-dollar credit for foreign income taxes paid, subject to limits.</li><li><strong>Reporting:</strong> Foreign bank accounts and foreign financial assets can trigger FBAR and Form 8938 filings.</li></ul>

              <h2>Which tool fits a remote worker</h2>

              <p>The FEIE requires two things: a tax home in a foreign country and a pass on either the bona fide residence test or the physical presence test. The physical presence test counts at least 330 full days in foreign countries within a 12-month period. The 12 months do not have to match the calendar year.</p>

              <p>The Foreign Tax Credit often fits better when your destination taxes you at rates similar to or higher than U.S. rates, when your income is above the exclusion limit, or when your income is mostly passive. Many remote workers use the exclusion first, then revisit the credit if the numbers change.</p>

              <div className="table-scroll"><table className="data-table"><thead><tr><th>Situation</th><th>Tool to evaluate first</th><th>Watch out for</th></tr></thead><tbody><tr><td>Salaried remote worker in a low-tax country</td><td>FEIE</td><td>You must pass a test and file the right forms to claim it</td></tr><tr><td>Remote worker in a high-tax country</td><td>Foreign Tax Credit</td><td>Credit limits and carryovers need tracking</td></tr><tr><td>Freelancer or contractor</td><td>FEIE plus self-employment tax review</td><td>The exclusion does not remove self-employment tax</td></tr><tr><td>Income above the exclusion limit</td><td>Exclusion plus credit on the rest</td><td>The same dollars cannot use both</td></tr><tr><td>Mostly investment or pension income</td><td>Foreign Tax Credit</td><td>The FEIE does not cover passive income</td></tr></tbody></table></div>

              <h2>Costs that survive the exclusion</h2>

              <p>Self-employment tax is the most common surprise. If you work for yourself, the FEIE can reduce income tax but generally does not remove self-employment tax, unless a totalization agreement between the U.S. and your country of residence says otherwise.</p>

              <p>State taxes are the second surprise. Some states keep treating you as a resident until you take clear steps to end residency, and they may expect a return even if you spend little time there. Your destination country can also tax you as a resident, which is why the two countries need to be considered together.</p>

              <div style={{background:'var(--bg)', border:'2px solid var(--accent)', borderRadius:'16px', padding:'32px', margin:'32px 0'}}>
                <h3 style={{marginTop:0}}>Plan the tax side before your first foreign paycheck</h3>
                <p>Explore ROS™ planning to sequence tax questions, residency, banking and housing in the right order, then hand the tax work to a qualified cross-border professional.</p>
                <Link href="/what-is-ros" className="btn btn-gold" style={{display:'inline-block'}}>Explore relocation planning</Link>
              </div>

              <h2>Reporting that is not optional</h2>

              <p>Foreign account reporting is separate from income tax. An FBAR is required when the combined value of your foreign financial accounts exceeds $10,000 at any time in the year. Form 8938 applies at higher thresholds, which for taxpayers living abroad start at $200,000 at year end or $300,000 at any time for a single filer. Penalties for missed filings can be significant, so build these dates into your relocation calendar.</p>

              <h2>Frequently asked questions</h2><div className="faq-simple"><div className="faq-simple-item"><h3>Do I still file a U.S. tax return if I work remotely from abroad?</h3><p>Yes. U.S. citizens and green card holders generally must file regardless of where they live or work, though the filing deadline is extended for many taxpayers abroad.</p></div><div className="faq-simple-item"><h3>Does the Foreign Earned Income Exclusion cover all my remote income?</h3><p>No. It covers earned income only, up to an annual limit, and only if you qualify. It does not cover investment income, pensions or Social Security.</p></div><div className="faq-simple-item"><h3>Do I owe self-employment tax if I use the exclusion?</h3><p>Often yes. The exclusion reduces income tax, but self-employment tax generally still applies unless a totalization agreement removes it.</p></div><div className="faq-simple-item"><h3>Can I use the exclusion and the Foreign Tax Credit together?</h3><p>You can use both in the same year, but not on the same dollars of income. Which one fits better depends on your income mix and the foreign tax you pay.</p></div><div className="faq-simple-item"><h3>Will my U.S. state still tax me?</h3><p>It can. Rules differ by state, and some expect you to take specific steps to end residency. Check your state before you leave.</p></div><div className="faq-simple-item"><h3>Is this tax advice?</h3><p>No. This is educational context. Confirm your situation with a qualified cross-border tax professional before filing or making commitments.</p></div></div>

              <h2>One last thing</h2><p>Do not rely on a rule of thumb you read in a forum. The right answer depends on your citizenship, income type, destination and the days you spend in each place.</p><p>Before you leave, write down your income sources, the country you will live in and the test you plan to use, and bring that page to a qualified tax professional.</p>

              <h2>Related reading</h2><ul><li><Link href="/blog/us-tax-playbook-americans-moving-abroad">The Tax Playbook for Americans Moving Abroad</Link></li><li><Link href="/blog/best-expat-financial-advisors-americans-2026">Best 7 Expat Financial Advisors for Americans in 2026</Link></li><li><Link href="/blog/relocation-myths-taxes-vanuatu-mail">What Most People Get Wrong About Relocating Abroad</Link></li><li><Link href="/blog/financial-considerations-us-persons-relocating-internationally">Key Financial Considerations for U.S. Persons Relocating Internationally</Link></li></ul>

              <p><em>This article is educational context, not legal, tax, immigration or investment advice. Requirements change, so confirm current rules with qualified professionals before making commitments.</em></p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
