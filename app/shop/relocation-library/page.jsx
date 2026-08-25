import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import { graph, product, breadcrumbs } from '../../../lib/schema';

export const metadata = {
  title: 'Relocation Library Bundle — $64',
  description: 'The Relocation Library — New Roots and Across Streets & Seas together at a bundled price. The complete book foundation for your international relocation, from the first decision through execution.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/shop/relocation-library/' },
};

export default function RelocationLibraryPage() {
  return (
    <>
      <JsonLd
        data={graph(
          product({
            path: '/shop/relocation-library/',
            name: 'The Relocation Library Bundle',
            description: metadata.description,
            price: 64,
          }),
          breadcrumbs([{ name: 'Guides & Books', path: '/shop/' }], { name: 'The Relocation Library Bundle', path: '/shop/relocation-library/' })
        )}
      />
      <section className="page-hero">
        <div className="container">
          <p style={{color:'var(--accent)', fontWeight:'600', marginBottom:'8px'}}>Both Books Bundled · $64 · Digital Download</p>
          <h1>Relocation Library</h1>
          <p>New Roots and Across Streets & Seas — together. The complete book foundation for your international relocation, from the first decision through the execution. Save $10 vs. buying separately.</p>
          <div style={{marginTop:'24px'}}>
            <Link href="https://www.paypal.com/ncp/payment/4T3LVJWPT2EFG" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get the Bundle — $64 →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <h2>What's Included</h2>
          <div style={{maxWidth:'760px', marginTop:'24px', display:'flex', flexDirection:'column', gap:'24px'}}>
            <div style={{background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'12px', padding:'24px'}}>
              <h3 style={{color:'var(--primary)'}}>New Roots — $27 value</h3>
              <p style={{color:'var(--text)', lineHeight:'1.7'}}>The foundational guide for anyone beginning the international relocation journey. Where to start, what to prioritize, and how to think about the move before you can know what to ask next.</p>
              <Link href="/shop/new-roots" style={{color:'var(--accent)', fontWeight:'600'}}>Learn more about New Roots →</Link>
            </div>
            <div style={{background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'12px', padding:'24px'}}>
              <h3 style={{color:'var(--primary)'}}>Across Streets & Seas — $47 value</h3>
              <p style={{color:'var(--text)', lineHeight:'1.7'}}>The deeper companion — legal, financial, housing, healthcare, and logistics for serious movers who know where they're going and need to get the execution right.</p>
              <Link href="/shop/across-streets-and-seas" style={{color:'var(--accent)', fontWeight:'600'}}>Learn more about Across Streets & Seas →</Link>
            </div>
          </div>
          <p style={{marginTop:'24px', fontWeight:'700', color:'var(--primary)'}}>Bundle: $64 — vs. $74 if purchased separately — save $10</p>
          <div style={{marginTop:'16px'}}>
            <Link href="https://www.paypal.com/ncp/payment/4T3LVJWPT2EFG" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get the Bundle — $64 →</Link>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)', padding:'80px 0'}}>
        <div className="container">
          <h2>After the Books</h2>
          <div style={{maxWidth:'760px', marginTop:'16px'}}>
            <p style={{color:'var(--text-light)'}}>The Relocation Library is a strong foundation — but it's not a full system. If you're moving in the next 12 months and want a structured, personalized infrastructure, the ROS™ pathway built for your life stage is the next step. Not sure which one fits? The <Link href="/services/discovery-call">free 15-minute discovery call</Link> will tell you exactly where to start.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <Link href="/who-its-for" className="btn btn-gold">Find Your ROS™ Tier →</Link>
              <Link href="/services/discovery-call" className="btn btn-outline">Book a Free Call →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
