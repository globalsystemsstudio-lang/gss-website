import Link from 'next/link';

export const metadata = {
  title: 'FBAR, FATCA, PFIC, and FEIE: Financial Planning for U.S. Persons Moving Abroad | Global Systems Studio',
  description: 'The complete guide to U.S. expat financial compliance: FBAR foreign account reporting, FATCA Form 8938, PFIC investment restrictions, FEIE income exclusion, banking strategy, and estate planning across borders.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/financial-planning-international-relocation/' },
};

export default function FinancialPlanningInternationalRelocationPage() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <h1>FBAR, FATCA, PFIC, and FEIE: Financial Planning for U.S. Persons Moving Abroad</h1>
          <p className="article-meta">Global Systems Studio | ROS™ — Relocation Operating System</p>
        </div>
      </section>

      <section className="article-page">
        <div className="container">
          <div className="article-layout">
            <div className="article-body">

              <h2 id="unique-obligations">Why U.S. Persons Face Unique Financial Challenges When Moving Abroad</h2>
              <p>The United States is one of only two countries in the world — the other being Eritrea — that taxes its citizens and permanent residents on worldwide income, regardless of where they live. This means that when a U.S. person relocates internationally, they don't leave their tax obligations at the border. They carry them.</p>
              <p>Most expat financial guides are written for citizens of other countries. The compliance obligations they describe don't apply. The strategies they recommend can actively harm U.S. persons. Understanding the specific financial landscape that U.S. persons navigate is the starting point for any serious international relocation plan.</p>
              <p>There are seven financial areas that must be addressed before departure. Not after. The order matters as much as the items themselves.</p>

              <h2 id="fbar">FBAR: Reporting Foreign Bank Accounts (FinCEN 114)</h2>
              <p>The Foreign Bank Account Report (FBAR) is filed separately from your tax return with the Financial Crimes Enforcement Network (FinCEN), not the IRS. Any U.S. person who has a financial interest in, or signature authority over, foreign financial accounts with an aggregate value exceeding $10,000 at any point during the calendar year must file FinCEN Form 114.</p>

              <h3>What counts as a foreign financial account</h3>
              <p>Foreign financial accounts subject to FBAR include bank accounts, brokerage accounts, mutual funds, trusts, and other financial accounts held outside the United States. This includes accounts you don't control directly — if you have signature authority over a foreign business account, that account may need to be reported.</p>

              <h3>Penalties for non-compliance</h3>
              <p>FBAR penalties are severe and disproportionate to what most people expect. Willful failure to file can result in penalties equal to the greater of $100,000 or 50% of the account balance per violation, per year. Non-willful penalties are up to $10,000 per violation. Criminal penalties are also possible for willful violations.</p>
              <div className="highlight-box">
                <p>The statute of limitations for FBAR is six years from the filing deadline — significantly longer than the standard three-year IRS limitation period. This means FBAR exposure follows you for years after the fact.</p>
              </div>

              <h2 id="fatca">FATCA: Foreign Account Tax Compliance Act (Form 8938)</h2>
              <p>FATCA operates through two parallel reporting requirements: one for individual taxpayers (Form 8938, filed with your tax return) and one for foreign financial institutions (FFI agreements with the IRS). For individuals, FATCA requires reporting specified foreign financial assets that exceed threshold amounts.</p>

              <h3>Reporting thresholds for Americans abroad</h3>
              <p>U.S. persons living abroad face higher reporting thresholds than those living domestically. For single filers residing abroad, the threshold is $200,000 on the last day of the tax year, or $300,000 at any point during the year. For married filing jointly, those thresholds double to $400,000 and $600,000 respectively.</p>

              <h3>What's different from FBAR</h3>
              <p>FATCA and FBAR overlap but are not identical. FATCA covers a broader range of assets, including interests in foreign entities, foreign pensions, and foreign life insurance with cash surrender value. FBAR is strictly about financial accounts. Both must be filed if both thresholds are met — one does not substitute for the other.</p>

              <h2 id="pfic">PFIC Rules: The Hidden Risk in Foreign Investment Accounts</h2>
              <p>The Passive Foreign Investment Company (PFIC) rules represent one of the most costly financial surprises for U.S. expats — and one of the least discussed. A PFIC is any foreign corporation where 75% or more of gross income is passive (dividends, interest, rents, royalties, capital gains), or where at least 50% of assets produce passive income.</p>

              <h3>Why this matters immediately upon arrival</h3>
              <p>The majority of foreign mutual funds, index funds, and ETFs sold outside the United States qualify as PFICs. When a U.S. person invests in a PFIC, the tax treatment is punitive by design: excess distributions and gains are taxed at the highest ordinary income rate, plus an interest charge that compounds annually. There is no long-term capital gains rate available for PFIC gains.</p>

              <h3>How to address PFIC exposure before departure</h3>
              <p>U.S. persons relocating internationally should audit their investment accounts before leaving for any foreign-domiciled funds they may already hold. Any investments purchased after arrival that qualify as PFICs should be reviewed with a qualified tax advisor. ROS™ Module III includes a PFIC exposure review as a standard pre-departure checkpoint.</p>

              <h2 id="feie">FEIE: Excluding Foreign Earned Income (Form 2555)</h2>
              <p>The Foreign Earned Income Exclusion (FEIE) allows qualifying U.S. persons living and working abroad to exclude a portion of their foreign earned income from U.S. federal income tax. For 2024, the exclusion amount is $126,500, adjusted annually for inflation.</p>

              <h3>Qualifying for the FEIE</h3>
              <p>There are two tests for FEIE qualification: the bona fide residence test and the physical presence test. The bona fide residence test requires establishing bona fide residence in a foreign country for an uninterrupted period that includes a full tax year. The physical presence test requires being physically present in a foreign country for at least 330 full days during any 12-month period.</p>

              <h3>What the FEIE does and doesn't cover</h3>
              <p>The FEIE applies to earned income — wages, salaries, professional fees, and self-employment income. It does not apply to passive income, investment income, Social Security benefits, pensions, or alimony. U.S. persons with investment income abroad will still owe U.S. tax on those amounts, subject to foreign tax credits where applicable.</p>

              <h2 id="banking">Banking and Currency Strategy Before Departure</h2>
              <p>One of the most common logistical failures in international relocation is arriving in a new country without functioning banking infrastructure. U.S. persons face a specific challenge: many U.S. banks close or restrict accounts for clients who establish foreign residency, and many foreign banks are reluctant to open accounts for U.S. persons due to FATCA compliance costs.</p>

              <h3>Establishing foreign banking before you leave</h3>
              <p>The sequence matters: open a foreign bank account before departing the U.S. when possible, and certainly before closing or transferring U.S. accounts. Several international banks and fintech providers serve U.S. expats specifically and handle FATCA reporting as a standard function. ROS™ Module III includes destination-specific banking guidance for all 132 covered countries.</p>

              <h3>Currency strategy</h3>
              <p>Beyond banking access, U.S. persons need a currency conversion strategy. Converting large amounts at unfavorable exchange rates, or paying repeated small conversion fees, creates unnecessary losses. This is particularly relevant for retirees receiving Social Security or pension income in dollars who are living in a local-currency environment.</p>

              <h2 id="estate-planning">Estate Planning and Retirement Accounts Across Borders</h2>
              <p>Estate planning is the financial area most commonly deferred by U.S. expats — and the one with the most irreversible consequences when handled incorrectly. Two specific issues arise immediately upon international relocation.</p>

              <h3>Forced heirship in civil law jurisdictions</h3>
              <p>Most of the world operates under civil law, which includes forced heirship provisions that mandate specific inheritance shares for children and spouses — regardless of what a will says. The United States, operating under common law, has no forced heirship rules. U.S. persons who move to civil law jurisdictions without updating their estate documents may find their wishes unenforceable.</p>

              <h3>U.S. retirement accounts abroad</h3>
              <p>U.S. retirement accounts (IRAs, 401(k)s) generally cannot be transferred to foreign pension equivalents without triggering taxable distributions. Contributions to foreign pension systems by U.S. persons may create PFIC exposure or other tax complications, depending on the destination. The interaction between U.S. retirement accounts and foreign tax treaties varies by country and must be reviewed before departure — not after.</p>
              <div className="highlight-box">
                <p>Updating your will, powers of attorney, and beneficiary designations before departure is not optional — it is a foundational step in ROS™ Module II for any destination with civil law jurisdiction.</p>
              </div>

              <h2 id="faq">Frequently Asked Questions</h2>
              <div className="faq-simple">
                {[
                  {
                    q: 'What financial planning tools are available for international relocation?',
                    a: 'ROS™ Module III covers the full financial infrastructure layer: banking access before departure, FBAR and FATCA reporting setup, PFIC exposure review, FEIE eligibility confirmation, currency strategy, and retirement account planning. These are built around U.S. compliance obligations, not general financial tools.'
                  },
                  {
                    q: 'What are the key financial considerations when planning an international relocation?',
                    a: 'U.S. persons face dual-jurisdiction obligations regardless of destination: FBAR reporting for foreign accounts exceeding $10,000, FATCA reporting above $200,000 for individuals abroad, PFIC issues with foreign mutual funds and ETFs, FEIE elections up to $126,500 (2024), and cross-border estate planning. These must be addressed before departure, not after.'
                  },
                  {
                    q: 'What happens if I don\'t file FBAR after moving abroad?',
                    a: 'FBAR non-compliance carries severe penalties. Willful failure to file can result in penalties of the greater of $100,000 or 50% of the account balance per violation. Non-willful penalties are up to $10,000 per violation. Criminal penalties are also possible. The statute of limitations for FBAR is 6 years from the filing deadline.'
                  },
                  {
                    q: 'Can I keep my U.S. brokerage account when I move abroad?',
                    a: 'Many U.S. brokerages restrict or close accounts for clients who establish foreign residency, due to regulatory complexity. This must be addressed before departure, not after. ROS™ Module III includes a banking and investment transition plan specific to your destination country, helping you establish compliant foreign accounts before your U.S. accounts are restricted.'
                  },
                ].map((item) => (
                  <div key={item.q} className="faq-simple-item">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>

              <Link href="/international-relocation-consultancy" className="internal-link-block" style={{marginTop:'48px', display:'inline-flex'}}>
                → Learn how to choose an international relocation consultancy
              </Link>

            </div>

            <aside className="toc">
              <div className="toc-heading">Table of Contents</div>
              <ul className="toc-list">
                <li><a href="#unique-obligations">Why U.S. Persons Face Unique Challenges</a></li>
                <li><a href="#fbar">FBAR: Foreign Bank Account Reporting</a></li>
                <li><a href="#fatca">FATCA: Form 8938</a></li>
                <li><a href="#pfic">PFIC Rules: Foreign Investments</a></li>
                <li><a href="#feie">FEIE: Foreign Earned Income Exclusion</a></li>
                <li><a href="#banking">Banking and Currency Strategy</a></li>
                <li><a href="#estate-planning">Estate Planning and Retirement</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
