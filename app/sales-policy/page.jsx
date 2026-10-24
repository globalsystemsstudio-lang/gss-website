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
          <p>Paid guides, books and workbooks are digital downloads, with delivery follow-up sent to the email on your PayPal order after completed payment. Check spam if you do not see it. Contact us with your order reference for delivery help. Standalone PDFs are yours to keep and do not include dashboard access.</p>

          <h2 style={{marginTop:'40px'}}>Pathways and dashboard access</h2>
          <p>Initial dashboard access begins after completed purchase and a signed agreement, with setup coordinated by Global Systems Studio. Solo and Digital Nomad include 6 months; Family Edition and Entrepreneur include 9 months; Legacy and Investor include 12 months. Family Edition includes two users. Review your agreement for access and data terms.</p>

          <h2 style={{marginTop:'40px'}}>Renewals</h2>
          <p>Dashboard renewals are optional, with no mandatory subscription. Current renewal prices in USD are: Digital Nomad $197, Solo $247, Family Edition $347, Entrepreneur $397, Legacy $497, and Investor $597. Confirm the renewal access period and terms with us before purchasing.</p>

          <h2 style={{marginTop:'40px'}}>Clarity Session</h2>
          <p>Please give us 24 hours' notice to reschedule. If an emergency comes up, contact us and we'll work with you. A missed session with no contact is not refunded.</p>

          <h2 style={{marginTop:'40px'}}>Async Q&amp;A</h2>
          <p>The $97 Async Q&A covers up to three written relocation questions. After payment, reply to your purchase follow-up or email your questions and order reference to globalsystemsstudio@gmail.com. We respond within 5 business days after receiving your questions. Questions requiring professional advice should be confirmed with an appropriately licensed professional.</p>

          <h2 style={{marginTop:'40px'}}>Questions about a purchase</h2>
          <p>Questions or concerns about a purchase? Contact us first at <a href="mailto:globalsystemsstudio@gmail.com">globalsystemsstudio@gmail.com</a> with your order reference. Please do not send passports, financial statements or other sensitive documents by email.</p>

          <p style={{marginTop:'40px', color:'var(--text-light)'}}>Operated by CC Transaction Service LLC d/b/a Global Systems Studio.</p>
        </div>
      </section>
    </>
  );
}
