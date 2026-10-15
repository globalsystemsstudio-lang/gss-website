import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Global Systems Studio collects, uses and protects your information when you use globalsystemsstudio.com, join our email list, book a call or buy a product.',
  alternates: { canonical: 'https://globalsystemsstudio.com/privacy-policy/' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>We collect only what we need to run the site, answer you and deliver what you buy. We do not sell your personal information.</p>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container" style={{maxWidth:'760px'}}>
          <h2>Who we are</h2>
          <p>CC Transaction Service LLC d/b/a Global Systems Studio, 227 W 4th St, Ste 3078, Charlotte, NC 28202, operates globalsystemsstudio.com. Questions about this policy: <a href="mailto:globalsystemsstudio@gmail.com">globalsystemsstudio@gmail.com</a>.</p>

          <h2 style={{marginTop:'40px'}}>What we collect</h2>
          <ul>
            <li><strong>What you give us:</strong> your name, email address and the details you share when you fill in a form, join our email list, take a quiz or tool, book a call, send a question, or chat with the site assistant.</li>
            <li><strong>Purchase details:</strong> payments are made through PayPal. PayPal handles your payment details and we do not see or store your card number. We receive your name, email address and order details.</li>
            <li><strong>Pathway and dashboard information:</strong> the information you enter into your dashboard, and any documents you choose to upload.</li>
            <li><strong>Automatic information:</strong> your browser, device, pages visited and approximate location, collected through cookies and analytics tools such as Google Analytics.</li>
          </ul>

          <h2 style={{marginTop:'40px'}}>What we ask you not to send</h2>
          <p>Please do not email or type into forms your government ID numbers, bank or card account numbers, or passwords. We do not need them to help you.</p>

          <h2 style={{marginTop:'40px'}}>How we use it</h2>
          <ul>
            <li>To deliver what you bought and give you access to your dashboard.</li>
            <li>To answer your questions and run your calls.</li>
            <li>To send you the emails you asked for, such as guide delivery, access reminders and our email list. You can unsubscribe at any time using the link in any email.</li>
            <li>To understand how the site is used and improve it.</li>
            <li>To keep the site secure and meet legal and tax obligations.</li>
          </ul>

          <h2 style={{marginTop:'40px'}}>Who we share it with</h2>
          <p>We do not sell your personal information. We share it only with service providers that help us run the business, and only what they need: payment processing (PayPal), website hosting, email delivery, scheduling, analytics (Google Analytics) and page translation (Google Translate). We may also disclose information if the law requires it or to protect our rights.</p>

          <h2 style={{marginTop:'40px'}}>Cookies and analytics</h2>
          <p>We use cookies and similar tools to measure traffic and understand which pages help people. You can block or delete cookies in your browser settings, and you can opt out of Google Analytics with Google&apos;s browser add-on. Blocking cookies may affect some features.</p>

          <h2 style={{marginTop:'40px'}}>Page translation</h2>
          <p>The site offers Google Translate. If you use it, the page text is sent to Google to be translated, under Google&apos;s own terms and privacy policy.</p>

          <h2 style={{marginTop:'40px'}}>How long we keep it</h2>
          <p>We keep your information as long as needed to serve you, keep purchase and tax records, and resolve disputes. After your dashboard access ends, you can export your dashboard data. You can ask us to delete your information, subject to records we must keep by law.</p>

          <h2 style={{marginTop:'40px'}}>Security</h2>
          <p>We use reasonable measures to protect your information. No website or storage method is completely secure, so we cannot promise absolute security.</p>

          <h2 style={{marginTop:'40px'}}>Your choices and rights</h2>
          <p>You can ask to see, correct, export or delete the personal information we hold about you, or object to how we use it. Depending on where you live, including California, other U.S. states, the European Economic Area and the United Kingdom, you may have additional legal rights. Email us and we will respond within 30 days. Our site assistant is not a person, so please use email for privacy requests.</p>

          <h2 style={{marginTop:'40px'}}>International visitors</h2>
          <p>We are based in the United States and your information is processed there. If you visit from another country, you understand that your information will be transferred to and handled in the United States.</p>

          <h2 style={{marginTop:'40px'}}>Children</h2>
          <p>Our site and services are for adults. We do not knowingly collect information from children under 13. If you believe a child has given us information, email us and we will delete it.</p>

          <h2 style={{marginTop:'40px'}}>Changes to this policy</h2>
          <p>We may update this policy. The date below shows the latest version.</p>

          <p style={{marginTop:'40px'}}>See also our <Link href="/terms-of-use">Terms of Use</Link>, <Link href="/disclaimer">Disclaimer</Link> and <Link href="/refund-policy">Refund &amp; Sales Policy</Link>.</p>

          <p style={{marginTop:'40px', color:'var(--text-light)'}}>CC Transaction Service LLC d/b/a Global Systems Studio<br />Last updated: October 14, 2026</p>
        </div>
      </section>
    </>
  );
}
