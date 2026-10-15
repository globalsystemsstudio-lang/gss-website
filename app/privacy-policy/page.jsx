import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Global Systems Studio collects, uses and protects your information when you use globalsystemsstudio.com, book a call or buy a product.',
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
            <li><strong>What you give us:</strong> your name, email address and the details you share when you fill in a form, take a quiz or tool, book a call, send a question, or chat with the site assistant.</li>
            <li><strong>Purchase details:</strong> payments are made through PayPal. PayPal handles your payment details and we do not see or store your card number. We receive your name, email address and order details.</li>
            <li><strong>Pathway and dashboard information:</strong> the information you enter into your dashboard, and any documents you choose to upload.</li>
            <li><strong>Automatic information:</strong> your browser, device, language and time zone settings, pages visited and approximate location, collected through cookies and analytics tools such as Google Analytics.</li>
          </ul>

          <h2 style={{marginTop:'40px'}}>What we ask you not to send</h2>
          <p>Please do not email or type into forms your government ID numbers, bank or card account numbers, or passwords. We do not need them to help you.</p>

          <h2 style={{marginTop:'40px'}}>Why we use your information</h2>
          <ul>
            <li><strong>To deliver what you buy or book:</strong> dashboard access, Clarity Sessions, Async Q&amp;A and downloads.</li>
            <li><strong>To reply to you:</strong> answering your forms, emails and chat messages, and sending booking confirmations and reminders.</li>
            <li><strong>To process payments:</strong> PayPal handles your payment. We see the purchase confirmation, not your card number.</li>
            <li><strong>To understand how the site is used:</strong> Google Analytics gives us summary visit data, which we use to improve pages and content.</li>
            <li><strong>To keep the site safe and protect our rights:</strong> preventing misuse and enforcing our Terms of Use.</li>
            <li><strong>To follow the law:</strong> responding to valid legal requests and keeping records the law requires.</li>
          </ul>

          <h2 style={{marginTop:'40px'}}>Email</h2>
          <p>We do not send marketing emails or newsletters. We only email you about what you asked for, such as a guide you requested, your booking, your purchase or your dashboard access. If you want to stop receiving any email from us, write to <a href="mailto:globalsystemsstudio@gmail.com">globalsystemsstudio@gmail.com</a>.</p>

          <h2 style={{marginTop:'40px'}}>Who we share it with</h2>
          <p>We do not sell your personal information. We share it only with service providers that help us run the business, and only what they need:</p>
          <ul>
            <li>PayPal, for payments</li>
            <li>Netlify, for website hosting</li>
            <li>Google Gmail, for email we send and receive</li>
            <li>Google Calendar, for booking and running Discovery Calls and Clarity Sessions</li>
            <li>Google Analytics, for understanding site traffic</li>
            <li>Google Translate, for page translation</li>
          </ul>

          <h2 style={{marginTop:'40px'}}>When we may disclose information</h2>
          <p>We may disclose information if the law requires it, if a court or government authority makes a valid request, or to protect our rights, safety or property. If CC Transaction Service LLC is ever sold or merged with another business, your information may transfer to the new owner, who would honor this policy or tell you about any change.</p>

          <h2 style={{marginTop:'40px'}}>Cookies and analytics</h2>
          <p>We use cookies and similar tools to measure traffic and understand which pages help people. You can block or delete cookies in your browser settings, and you can opt out of Google Analytics with Google&apos;s browser add-on. You can also turn off personalized ads in your phone or computer settings, although we do not run ad tracking on this site. Blocking cookies may affect some features.</p>
          <p>Our site does not respond to Do Not Track signals from browsers.</p>

          <h2 style={{marginTop:'40px'}}>Page translation</h2>
          <p>The site offers Google Translate. If you use it, the page text is sent to Google to be translated, under Google&apos;s own terms and privacy policy.</p>

          <h2 style={{marginTop:'40px'}}>How long we keep it</h2>
          <p>We keep client and booking records for at least one year. We keep other information as long as needed to serve you, resolve disputes, and meet legal, tax and accounting duties. Some records, such as purchase records, may be kept after you ask for deletion where the law requires it. After your dashboard access ends, you can export your dashboard data.</p>

          <h2 style={{marginTop:'40px'}}>Security</h2>
          <p>We use reasonable measures to protect your information. No website or storage method is completely secure, so we cannot promise absolute security.</p>

          <h2 style={{marginTop:'40px'}}>Your choices and rights</h2>
          <p>You can ask to see, correct, export or delete the personal information we hold about you, or object to how we use it. Depending on where you live, including California, other U.S. states, the European Economic Area and the United Kingdom, you may have additional legal rights. Email us and we will respond within 30 days. Our site assistant is not a person, so please use email for privacy requests.</p>

          <h2 style={{marginTop:'40px'}}>International visitors</h2>
          <p>We are based in the United States, and our providers (Google, Netlify and PayPal) may process data in the United States and other countries. If you visit from another country, you understand that your information will be transferred to and handled in the United States.</p>

          <h2 style={{marginTop:'40px'}}>Children</h2>
          <p>Our site and services are for adults. We do not knowingly collect information from children under 13. If you believe a child has given us information, email us and we will delete it.</p>

          <h2 style={{marginTop:'40px'}}>Changes to this policy</h2>
          <p>We may update this policy. The date below shows the latest version.</p>

          <p style={{marginTop:'40px'}}>See also our <Link href="/terms-of-use">Terms of Use</Link>, <Link href="/disclaimer">Disclaimer</Link> and <Link href="/refund-policy">Refund &amp; Sales Policy</Link>.</p>

          <p style={{marginTop:'40px', color:'var(--text-light)'}}>CC Transaction Service LLC d/b/a Global Systems Studio<br />Last updated: October 15, 2026</p>
        </div>
      </section>
    </>
  );
}
