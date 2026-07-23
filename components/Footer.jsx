import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="footer-logo-text">Global Systems Studio</span>
              <p>CC Transaction Services, LLC</p>
              <p style={{marginTop:'12px', fontSize:'13px', color:'rgba(255,255,255,0.4)', lineHeight:'1.6'}}>
                Real questions. Real answers. Built from a real journey.
              </p>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/what-is-ros">What is ROS™</Link></li>
                <li><Link href="/our-story">Our Story</Link></li>
                <li><Link href="/who-its-for">Who It's For</Link></li>
                <li><Link href="/work-with-me">Work With Me</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><Link href="/relocation-financial-planning">Relocation Financial Planning</Link></li>
                <li><Link href="/visa-residency-pathways">Visa &amp; Residency Pathways</Link></li>
                <li><Link href="/financial-planning-international-relocation">FBAR &amp; Financial Guide</Link></li>
                <li><Link href="/international-relocation-consultancy">Choosing a Consultancy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'12px'}}>
          <p style={{margin:0}}>© 2026 Global Systems Studio. All rights reserved.</p>
          <div id="google_translate_element" style={{lineHeight:1}} />
        </div>
      </div>
    </footer>
  );
}
