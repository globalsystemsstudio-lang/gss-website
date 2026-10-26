import Link from 'next/link';

export default function RelocationNextStep() {
  return (
    <section style={{background:'var(--bg)', padding:'56px 0'}} aria-labelledby="relocation-next-step">
      <div className="container">
        <h2 id="relocation-next-step">Turn Your Research Into a Relocation Plan</h2>
        <p style={{maxWidth:760, marginTop:16}}>Use the $27 workbook to write down who is moving, work through key questions and list what you still need to check before you leave.</p>
        <div style={{display:'flex', gap:16, flexWrap:'wrap', marginTop:24}}>
          <Link href="/shop/#ros-relocation-readiness-workbook" className="btn btn-gold">See the Readiness Workbook — $27 →</Link>
          <Link href="/services/" className="btn btn-outline">Compare the Six Online Plans →</Link>
        </div>
        <p style={{marginTop:16, fontSize:14}}>Still exploring? <Link href="/shop/five-questions/">Read Five Questions Before Moving Abroad for free</Link>. No email required.</p>
      </div>
    </section>
  );
}
