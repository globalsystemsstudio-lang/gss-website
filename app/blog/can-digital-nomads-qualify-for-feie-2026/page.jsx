import Link from 'next/link';

export const metadata = {
  title: "Can digital nomads qualify for the Foreign Earned Income Exclusion in 2026?",
  description: "Digital nomads can qualify for the FEIE with the physical presence test, but a tax home abroad is required. See who qualifies and what the exclusion does not cover.",
  alternates: { canonical: 'https://globalsystemsstudio.com/blog/can-digital-nomads-qualify-for-feie-2026/' },
};

const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can digital nomads claim the Foreign Earned Income Exclusion?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, if they have a foreign tax home and meet the bona fide residence or physical presence test. Most nomads use the physical presence test."}}, {"@type": "Question", "name": "Do my 330 days have to be in one country?", "acceptedAnswer": {"@type": "Answer", "text": "No. The 330 full days can be spread across different foreign countries within a 12-month period."}}, {"@type": "Question", "name": "Do days in the air count?", "acceptedAnswer": {"@type": "Answer", "text": "Time spent in international airspace or waters generally does not count as time in a foreign country, so allow for it in your count."}}, {"@type": "Question", "name": "Does the exclusion remove self-employment tax?", "acceptedAnswer": {"@type": "Answer", "text": "Generally no. It reduces income tax on earned income but usually leaves self-employment tax in place."}}, {"@type": "Question", "name": "What if I visit the United States for a month?", "acceptedAnswer": {"@type": "Answer", "text": "U.S. days do not count toward the 330, so a long visit can make the test harder to pass. Plan trips home against your 12-month window."}}, {"@type": "Question", "name": "Is this tax advice?", "acceptedAnswer": {"@type": "Answer", "text": "No. This is educational context. Confirm your own situation with a qualified cross-border tax professional."}}]};
const articleSchema = {"@context": "https://schema.org", "@type": "Article", "headline": "Can digital nomads qualify for the Foreign Earned Income Exclusion in 2026?", "description": "Digital nomads can qualify for the FEIE with the physical presence test, but a tax home abroad is required. See who qualifies and what the exclusion does not cover.", "datePublished": "2026-10-02", "author": {"@type": "Organization", "name": "Global Systems Studio"}, "publisher": {"@type": "Organization", "name": "Global Systems Studio"}, "mainEntityOfPage": "https://globalsystemsstudio.com/blog/can-digital-nomads-qualify-for-feie-2026/"};

export default function CanDigitalNomadsQualifyForFeiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="article-blog-hero">
        <div className="container">
          <span className="article-blog-tag">Financial Planning</span>
          <h1 style={{marginTop:'12px', maxWidth:'860px'}}>Can digital nomads qualify for the Foreign Earned Income Exclusion in 2026?</h1>
          <p className="article-meta" style={{marginTop:'16px'}}>Global Systems Studio · October 2026</p>
        </div>
      </section>

      <section className="article-page">
        <div className="container">
          <div className="article-layout">
            <div className="article-body">

              <p>Sometimes. Digital nomads can qualify for the Foreign Earned Income Exclusion, most often through the physical presence test, but only if they also have a tax home in a foreign country and spend enough full days outside the United States. Moving constantly does not disqualify you, but it makes the tax home and day count harder to prove.</p>

              <h2>TL;DR</h2><ul><li>The FEIE requires a foreign tax home plus either the bona fide residence test or the physical presence test.</li><li>The physical presence test needs 330 full days in foreign countries within any 12-month period, and those days can be spread across several countries.</li><li>Days in the United States, and often days in international airspace or waters, do not count toward the 330.</li><li>The exclusion covers earned income only and generally does not remove self-employment tax.</li></ul>

              <h2>Why this matters</h2><p>Many nomads assume that being outside the United States most of the year is enough. The FEIE is more specific, and a missed requirement can mean you owe tax on income you thought was excluded.</p><p>The good news is that the physical presence test does not care how long you stay in any one country. It counts days outside the United States, so multi-country travel can still work with good records.</p>

              <h2>The two tests for the exclusion</h2>

              <p>To claim the FEIE you must have a tax home in a foreign country, earn income from work performed abroad, and meet one of two tests.</p>

              <p>The two tests work differently:</p><ul><li><strong>Bona fide residence:</strong> You are a genuine resident of a foreign country for an uninterrupted period that includes a full tax year, which is hard to show for people who keep moving.</li><li><strong>Physical presence:</strong> You are physically present in foreign countries for at least 330 full days in a 12-month period, counted in any sequence of countries.</li></ul>

              <h2>Why the physical presence test fits most nomads</h2>

              <p>Because it is a day count, the physical presence test works for people who change countries every few weeks. A full day means a 24-hour period starting at midnight, so travel days at either end often do not count. Plan buffer days rather than aiming for exactly 330.</p>

              <p>Time in the United States is the main risk. A long visit home can break the count, so many nomads schedule U.S. trips early in the cycle or use a rolling 12-month window to find the best period.</p>

              <h2>The tax home problem</h2>

              <p>A tax home is generally your main place of business or work. If you keep a permanent home in the United States and treat it as your base, the IRS can argue your tax home never moved. Keeping clear records of where you work and live helps show that your work base is abroad.</p>

              <div style={{background:'var(--bg)', border:'2px solid var(--accent)', borderRadius:'16px', padding:'32px', margin:'32px 0'}}>
                <h3 style={{marginTop:0}}>Match your travel pattern to the tax rules</h3>
                <p>Explore ROS™ planning to line up your day count, visa status, banking and healthcare, then confirm the tax position with a qualified cross-border professional.</p>
                <Link href="/what-is-ros" className="btn btn-gold" style={{display:'inline-block'}}>Explore relocation planning</Link>
              </div>

              <h2>What the exclusion does not do</h2>

              <div className="table-scroll"><table className="data-table"><thead><tr><th>Item</th><th>Covered by the FEIE?</th><th>Note</th></tr></thead><tbody><tr><td>Salary or freelance pay for work done abroad</td><td>Yes, up to the annual limit</td><td>$132,900 for 2026</td></tr><tr><td>Self-employment tax</td><td>No, generally</td><td>A totalization agreement may change this</td></tr><tr><td>Investment, rental and pension income</td><td>No</td><td>Consider the Foreign Tax Credit</td></tr><tr><td>U.S. state income tax</td><td>No</td><td>Check state residency rules</td></tr><tr><td>FBAR and Form 8938 reporting</td><td>No</td><td>Reporting applies independently</td></tr></tbody></table></div>

              <p>You claim the exclusion with Form 2555 on a timely filed return, so keep your travel log, flight records and income documents organized throughout the year.</p>

              <h2>Frequently asked questions</h2><div className="faq-simple"><div className="faq-simple-item"><h3>Can digital nomads claim the Foreign Earned Income Exclusion?</h3><p>Yes, if they have a foreign tax home and meet the bona fide residence or physical presence test. Most nomads use the physical presence test.</p></div><div className="faq-simple-item"><h3>Do my 330 days have to be in one country?</h3><p>No. The 330 full days can be spread across different foreign countries within a 12-month period.</p></div><div className="faq-simple-item"><h3>Do days in the air count?</h3><p>Time spent in international airspace or waters generally does not count as time in a foreign country, so allow for it in your count.</p></div><div className="faq-simple-item"><h3>Does the exclusion remove self-employment tax?</h3><p>Generally no. It reduces income tax on earned income but usually leaves self-employment tax in place.</p></div><div className="faq-simple-item"><h3>What if I visit the United States for a month?</h3><p>U.S. days do not count toward the 330, so a long visit can make the test harder to pass. Plan trips home against your 12-month window.</p></div><div className="faq-simple-item"><h3>Is this tax advice?</h3><p>No. This is educational context. Confirm your own situation with a qualified cross-border tax professional.</p></div></div>

              <h2>One last thing</h2><p>A nomad lifestyle is a tax planning decision, not only a travel plan. The day count, the tax home and your visa status all need to agree with each other.</p><p>Keep a simple log of the country you wake up in each day. It takes a minute a day and can save you a very difficult conversation later.</p>

              <h2>Related reading</h2><ul><li><Link href="/blog/us-tax-playbook-americans-moving-abroad">The Tax Playbook for Americans Moving Abroad</Link></li><li><Link href="/blog/relocation-myths-taxes-vanuatu-mail">What Most People Get Wrong About Relocating Abroad</Link></li><li><Link href="/blog/turkey-relocation-guide-all-tiers">Turkey Is One of the Most Underrated Relocation Markets Right Now</Link></li><li><Link href="/visa-residency-pathways">Visa and Residency Pathways</Link></li></ul>

              <p><em>This article is educational context, not legal, tax, immigration or investment advice. Requirements change, so confirm current rules with qualified professionals before making commitments.</em></p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
