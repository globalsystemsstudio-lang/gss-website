import Link from 'next/link';

export const metadata = {
  title: 'Refund & Sales Policy',
  description: 'Global Systems Studio refund and sales policy: all sales are final, how dashboard access and renewals work, Clarity Session rescheduling, and who to contact with questions.',
  alternates: { canonical: 'https://globalsystemsstudio.com/refund-policy/' },
};

export default function RefundPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Refund &amp; Sales Policy</h1>
          <p>All sales are final. We do not offer refunds, with one small exception for missed Clarity Sessions, explained below. Please read this page before you buy.</p>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container" style={{maxWidth:'760px'}}>
          <h2>Try before you buy</h2>
          <p>Before you spend anything, you can use these for free:</p>
          <ul>
            <li>The <Link href="/relocation-readiness-quiz">Relocation Readiness Quiz</Link></li>
            <li>The <Link href="/shop/five-questions">Five Questions Before Moving Abroad</Link> guide</li>
            <li>A free 15-minute <Link href="/services/discovery-call">Discovery Call</Link></li>
          </ul>
          <p>They are there so you can see how we work before you decide.</p>

          <h2 style={{marginTop:'40px'}}>What &quot;all sales are final&quot; covers</h2>
          <p>It covers everything we sell: the six Pathways, the Clarity Session, Async Q&amp;A, and our books, guides and workbooks. When you buy, you agree to this policy.</p>

          <h2 style={{marginTop:'40px'}}>Your dashboard access</h2>
          <p>Pathway access begins when your purchase is complete and your agreement is signed. How long it lasts depends on your Pathway:</p>
          <ul>
            <li>Digital Nomad: 6 months</li>
            <li>Solo: 6 months</li>
            <li>Family Edition: 9 months (two users)</li>
            <li>Entrepreneur: 9 months</li>
            <li>Legacy: 12 months</li>
            <li>Investor: 12 months</li>
          </ul>

          <h2 style={{marginTop:'40px'}}>Renewing</h2>
          <p>Renewal is optional. When your access period ends, you can renew for 6 more months. You never have to renew, and renewal never happens automatically. Every purchase is a one-time payment. We will email you before your access ends.</p>
          <p>Renewal prices (6 months):</p>
          <ul>
            <li>Digital Nomad: $197</li>
            <li>Solo: $247</li>
            <li>Family Edition: $347</li>
            <li>Entrepreneur: $397</li>
            <li>Legacy: $497</li>
            <li>Investor: $597</li>
          </ul>
          <p>When your access ends, you can still export your dashboard data. Files you have already downloaded are yours to keep.</p>

          <h2 style={{marginTop:'40px'}}>Clarity Session</h2>
          <p>The Clarity Session is a 45-minute one on one call. If you need to move it, tell us at least 24 hours before your session and we will reschedule it. If you miss your session without letting us know in advance, the session counts as used and the sale stays final. We may refund half of the session fee.</p>

          <h2 style={{marginTop:'40px'}}>Async Q&amp;A</h2>
          <p>Send up to 3 questions. You will get a written reply within 5 business days.</p>

          <h2 style={{marginTop:'40px'}}>Books, guides and workbooks</h2>
          <p>These are digital downloads, delivered to your email right after you buy. Because they are delivered right away, they are final.</p>

          <h2 style={{marginTop:'40px'}}>Not professional advice</h2>
          <p>I am not an international tax advisor or an international attorney. Always consult a licensed professional who specializes in your destination country before making any financial or legal decisions. See our full <Link href="/disclaimer">Disclaimer</Link>.</p>

          <h2 style={{marginTop:'40px'}}>Questions</h2>
          <p>Email <a href="mailto:globalsystemsstudio@gmail.com">globalsystemsstudio@gmail.com</a> and we will respond within 2 business days.</p>

          <p style={{marginTop:'40px', color:'var(--text-light)'}}>CC Transaction Service LLC d/b/a Global Systems Studio<br />Last updated: October 14, 2026</p>
        </div>
      </section>
    </>
  );
}
