import Link from 'next/link';

export const metadata = {
  title: 'Sales Policy',
  description: 'Global Systems Studio sales policy: all sales are final, how renewals work, rescheduling, and who to contact with questions about a purchase.',
  alternates: { canonical: 'https://globalsystemsstudio.com/sales-policy/' },
};

export default function SalesPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Sales Policy</h1>
          <p>All sales are final. We don't offer refunds. Before you buy, you can try these for free: the <Link href="/relocation-readiness-quiz">Readiness Quiz</Link>, the <Link href="/shop/five-questions">Five Questions guide</Link>, and a free <Link href="/services/discovery-call">Discovery Call</Link>.</p>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container" style={{maxWidth:'760px'}}>
          <h2>Digital downloads</h2>
          <p>Guides and workbooks are delivered instantly and are final. They're yours to keep, even after any access period ends.</p>

          <h2 style={{marginTop:'40px'}}>Pathways and dashboard access</h2>
          <p>Pathway and dashboard access is governed by the agreement you accept at purchase. After your access ends, you can still export your dashboard data.</p>

          <h2 style={{marginTop:'40px'}}>Renewals</h2>
          <p>Renewals are optional. Each renewal adds 6 months of access at the price of your tier: $197, $247, $347, $397, $497, or $597. Renewals never auto-charge. Each one is a separate one-time PayPal purchase, and we'll send an email reminder before your access ends.</p>

          <h2 style={{marginTop:'40px'}}>Clarity Session</h2>
          <p>Please give us 24 hours' notice to reschedule. If an emergency comes up, contact us and we'll work with you. A missed session with no contact is not refunded.</p>

          <h2 style={{marginTop:'40px'}}>Async Q&amp;A</h2>
          <p>We reply within 48 business hours. Questions outside our scope are redirected to a licensed professional.</p>

          <h2 style={{marginTop:'40px'}}>Questions about a purchase</h2>
          <p>Questions or concerns about a purchase? Contact us first at <a href="mailto:globalsystemsstudio@gmail.com">globalsystemsstudio@gmail.com</a> and we'll respond within 2 business days.</p>

          <p style={{marginTop:'40px', color:'var(--text-light)'}}>Operated by CC Transaction Service LLC d/b/a Global Systems Studio.</p>
        </div>
      </section>
    </>
  );
}
