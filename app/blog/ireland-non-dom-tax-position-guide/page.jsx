import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import { graph, blogPosting, breadcrumbs } from '../../../lib/schema';

export const metadata = {
  title: 'Ireland Non-Dom Tax Guide: Structure It Correctly',
  description: 'Ireland\'s non-dom tax regime and STEP entrepreneur pathway make it one of the most structured relocation options in the English-speaking world, if set up correctly.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/blog/ireland-non-dom-tax-position-guide/' },
};

export default function IrelandPage() {
  return (
    <>
      <JsonLd
        data={graph(
          blogPosting({
            path: '/blog/ireland-non-dom-tax-position-guide/',
            headline: metadata.title,
            description: metadata.description,
            datePublished: '2026-08-22',
            dateModified: '2026-08-22',
            section: 'Destination Guide',
          }),
          breadcrumbs([{ name: 'Blog', path: '/blog/' }], {
            name: metadata.title,
            path: '/blog/ireland-non-dom-tax-position-guide/',
          })
        )}
      />
      <section className="article-blog-hero">
        <div className="container">
          <span className="article-blog-tag">Destination Guide</span>
          <h1 style={{marginTop:'12px', maxWidth:'860px'}}>Ireland Is One of the Most Sophisticated Tax Positions in the English-Speaking World</h1>
          <p className="article-meta" style={{marginTop:'16px'}}>Global Systems Studio · July 2026</p>
        </div>
      </section>

      <section className="article-page">
        <div className="container">
          <div className="article-layout">
            <div className="article-body">

              <p>Most people who consider Ireland think about the culture, the landscape, the pubs, the passport. Almost nobody leads with the tax structure. That is a significant oversight.</p>
              <p>Ireland operates one of the most legally sophisticated residency and tax frameworks available to internationally mobile individuals — particularly for US persons with foreign income, entrepreneurs building scalable businesses, and retirees with passive income streams. The English language, common law legal system, EU membership, and a direct US treaty relationship make it uniquely accessible. The non-domicile regime and STEP entrepreneur pathway make it uniquely structured.</p>
              <h2>The Non-Dom Position — What It Actually Means</h2>
              <p>Ireland operates a non-domicile (non-dom) tax regime that closely resembles what the UK once offered — before the UK abolished its 226-year-old system in April 2025. If you are tax resident in Ireland but domiciled elsewhere, foreign income is only taxable in Ireland if you remit it. Foreign income kept offshore is generally not subject to Irish income tax — the remittance basis of taxation.</p>
              <p>Two features make Ireland's version particularly compelling: no time limit (unlike the UK's 15-year deemed-domicile cutoff), and no annual fee (the UK charged £30,000–£60,000/year for long-term non-doms).</p>
              <p>Domicile is a deeper legal concept than residency — it refers to the country considered your permanent home. It is assessed based on background, ties, and long-term intentions, not a form you fill out. Applying for Irish citizenship, selling all overseas property, or clearly committing to Ireland as a permanent home can weaken a non-dom position.</p>
              <p>Practical example: a US person who moves to Dublin with a US brokerage account generating $50,000 in annual dividends does not pay Irish tax on those dividends provided they remain in the US account. If $20,000 is wired to an Irish bank account, that $20,000 becomes taxable at Irish rates. Salary for work performed in Ireland is always taxable in Ireland.</p>
              <h2>Irish Tax Rates</h2>
              <p>Ireland's income tax runs 20% up to €44,000 for a single filer, 40% above that. Add the Universal Social Charge (0.5%–8%) and PRSI (~4.2%), and a high earner faces a marginal rate around 52%. This is not a low-tax jurisdiction for income earned in Ireland — the non-dom structure matters because it separates Irish-source income (taxed at these rates) from foreign-source income (only taxed on what's remitted).</p>
              <p>The Foreign Earned Income Exclusion ($132,900 for tax year 2026) and Foreign Tax Credit remain the primary US-side tools. FBAR applies the moment combined foreign account balances exceed $10,000 at any point in the year. Ireland and the US have a comprehensive Double Taxation Convention, which governs the interaction but does not eliminate the US filing obligation.</p>
              <h2>The Residency Framework — Which Stamp Fits Which Tier</h2>
              <p><strong>Stamp 0 — Person of Independent Means / Retiree:</strong> requires verifiable income of at least €50,000/year (€100,000 for a couple) plus a lump sum equivalent to a residential dwelling's price for contingency, certified by an Irish accountancy firm. Stamp 0 holders cannot work, require private medical insurance with full Irish private hospital cover, and have no access to Irish public health services.</p>
              <p><strong>Stamp 4 — STEP Entrepreneur Programme:</strong> grants an initial two-year Stamp 4, renewable to five, reckonable for citizenship. Requires an innovative, internationally scalable business (not retail, catering, or personal services) with potential for 10+ jobs and €1M in sales within three to four years, plus €50,000 in verified capital. Applications go to an independent evaluation committee, reviewed quarterly.</p>
              <p><strong>Critical Skills Employment Permit:</strong> for employed professionals with an Irish job offer — minimum salary €40,904 (Critical Skills Occupation List) or €68,911 (other eligible roles), no Labour Market Needs Test, Stamp 4 available after 21 months.</p>
              <h2>ROS™ Tier Breakdown</h2>
              <p><strong>Solo:</strong> Dublin is an English-speaking EU capital with strong digital infrastructure. Stamp 0 (no Irish work) is the structural path for remote workers with foreign employers. A one-bedroom in Dublin city centre runs €2,200–€2,800/month; comfortable single-person spend is €3,500–€4,500/month.</p>
              <p><strong>Family:</strong> Free public education for all residents, including expat children — international schools exist but are limited compared to Dubai or Singapore. VHI, Laya, and Irish Life Health are the main private insurers. A family of four in suburban Dublin runs approximately €6,000–€8,000/month; Cork and Galway cost meaningfully less.</p>
              <p><strong>Retiree/Legacy:</strong> Stamp 0 is the formal pathway. The non-dom structure means foreign pension and investment income not remitted to Ireland generally sits outside the Irish tax net.</p>
              <p><strong>Entrepreneur:</strong> STEP is the structured pathway — 12.5% corporate tax rate on trading income, EU single market access, English-language operating environment.</p>
              <p><strong>Investor:</strong> Ireland's Immigrant Investor Programme closed to new applicants in 2023 — there is currently no direct investment-for-residency route. STEP remains the primary structured pathway for investor-founders; Stamp 0 (independent means) is the available route for high-net-worth individuals without an active business.</p>
              <h2>Healthcare</h2>
              <p>Stamp 0 and STEP applicants must hold private medical insurance — the public system is not available under these permissions. VHI, Laya Healthcare, and Irish Life Health are the main providers. A private plan for a healthy individual runs approximately €80–€150/month; private hospital consultations run €150–€300.</p>
              <h2>The Premortem — What Can Go Wrong</h2>
              <p><strong>Domicile isn't automatic.</strong> A non-dom claim is assessed on background, ties, and intentions — not granted by filling out a form. It can be defended, or it can fail scrutiny. Applying for Irish citizenship, selling all overseas property, or otherwise clearly committing to Ireland as a permanent home can weaken the position before it's ever tested.</p>
              <p><strong>Stamp 0 is not a path to citizenship.</strong> Time on Stamp 0 does not count toward Irish citizenship or long-term residency (Stamp 5). It is a renewable annual permission, not a settlement route — retirees who want to eventually naturalize need a different plan from the start, not a surprise five years in.</p>
              <p><strong>The investor pathway that used to exist doesn't anymore.</strong> Ireland's Immigrant Investor Programme closed to new applicants in 2023. Anyone still planning around a golden-visa-style route into Ireland is planning around something that no longer exists.</p>
              <p><strong>STEP approval isn't guaranteed.</strong> The bar for "innovative and internationally scalable" is real, reviewed by an independent evaluation committee — this is not a rubber-stamp process, and the business must be headquartered and controlled in Ireland with the founder actively managing it full-time.</p>
              <p><strong>Marginal tax rate is genuinely high on Irish-source income.</strong> ~52% combined (40% income tax + 8% USC + 4.2% PRSI) is not a low-tax outcome for anything earned in Ireland itself — the non-dom advantage only protects foreign-source income kept offshore.</p>
              <h2>The Bottom Line</h2>
              <p>Ireland is not the easiest destination on this list. Dublin is expensive, the tax structure rewards people who plan it correctly, and the non-dom position is not a form you fill out — it's a legal status you have to be able to defend. But for the right person, structured correctly, it's one of the most sophisticated residency positions available in the English-speaking world.</p>
              <p><em>I am not an international tax advisor or an international attorney. Always consult a licensed professional who specializes in your destination country before making any financial or legal decisions. Irish immigration programme requirements are subject to change — verify current thresholds and programme status directly with Irish Immigration Service Delivery or a licensed Irish immigration attorney before applying. Ireland's Immigrant Investor Programme (IIP) is closed to new applicants as of 2023 — verify current status before any planning.</em></p>
              <p><strong>Ready to check your relocation readiness?</strong> <a href="https://calendar.app.google/kQpLotoqdgpLqHR88">Book a Discovery Call →</a></p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
