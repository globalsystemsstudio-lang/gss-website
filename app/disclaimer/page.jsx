import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer',
  description: 'Global Systems Studio and the Relocation Operating System are educational and planning tools. We are not attorneys, tax advisors or financial advisors. Read the full disclaimer.',
  alternates: { canonical: 'https://globalsystemsstudio.com/disclaimer/' },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Disclaimer</h1>
          <p>I am not an international tax advisor or an international attorney. Always consult a licensed professional who specializes in your destination country before making any financial or legal decisions.</p>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container" style={{maxWidth:'760px'}}>
          <h2>Educational and planning use only</h2>
          <p>Global Systems Studio and the Relocation Operating System (ROS&trade;) provide education, planning structure, checklists, decision prompts and document organization for people relocating internationally. Everything on this website, in our guides and workbooks, in our blog and social media posts, on our calls and in our dashboards is general information. It is not tailored to your situation.</p>

          <h2 style={{marginTop:'40px'}}>No professional advice</h2>
          <p>We do not provide legal, immigration, tax, accounting, investment, financial, insurance, medical, employment, real estate, customs, education or benefits advice. Using our content or services does not create an attorney-client, advisor-client or any other professional relationship.</p>

          <h2 style={{marginTop:'40px'}}>Verify before you act</h2>
          <p>Laws, tax rules, visa programs, processing times, fees and bank requirements change often, and they differ by country. Information here may be out of date or may not fit your facts. Confirm current requirements with official government sources and a licensed professional in your destination country, and in the United States where it applies, before you sign, file, pay, move money, book travel or relocate.</p>

          <h2 style={{marginTop:'40px'}}>No guarantee of outcomes</h2>
          <p>We do not guarantee any visa or residency approval, tax result, savings, banking or insurance approval, housing, employment, healthcare access, investment return or successful relocation. Examples and country comparisons are for illustration only.</p>

          <h2 style={{marginTop:'40px'}}>Third parties</h2>
          <p>We may mention attorneys, advisors, banks, insurers, schools, providers and government agencies for your convenience. Unless we say so in a separate written agreement, we do not endorse, supervise or guarantee them, and we are not responsible for their advice, prices, availability or results.</p>

          <h2 style={{marginTop:'40px'}}>Your decisions are yours</h2>
          <p>You are responsible for the accuracy of what you tell us, for tracking your own deadlines, for getting professional advice, and for the final decision about whether, when, where and how to move.</p>

          <h2 style={{marginTop:'40px'}}>Not an emergency service</h2>
          <p>We are not an emergency, crisis, legal-defense, immigration-rescue, medical or financial-rescue service. If you face an urgent legal, medical, safety or financial problem, contact local emergency services, a qualified professional or the relevant authority.</p>

          <h2 style={{marginTop:'40px'}}>Questions</h2>
          <p>Email <a href="mailto:globalsystemsstudio@gmail.com">globalsystemsstudio@gmail.com</a>. See also our <Link href="/terms-of-use">Terms of Use</Link>, <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/refund-policy">Refund &amp; Sales Policy</Link>.</p>

          <p style={{marginTop:'40px', color:'var(--text-light)'}}>CC Transaction Service LLC d/b/a Global Systems Studio<br />Last updated: October 14, 2026</p>
        </div>
      </section>
    </>
  );
}
