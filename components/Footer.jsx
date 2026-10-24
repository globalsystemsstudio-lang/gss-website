import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="footer-logo-text">Global Systems Studio</span>
              <p>CC Transaction Service LLC</p>
              <p style={{marginTop:'12px', fontSize:'13px', color:'rgba(255,255,255,0.4)', lineHeight:'1.6'}}>
                Educational relocation planning for U.S. citizens and residents.
              </p><p style={{marginTop:16, fontSize:14}}><a href="mailto:globalsystemsstudio@gmail.com" style={{color:'white'}}>globalsystemsstudio@gmail.com</a></p><p style={{marginTop:12, fontSize:13, color:'rgba(255,255,255,.8)'}}>Created by Charlene L. M. Cupidore Bynoe. Confirm legal, tax, immigration, investment and medical decisions with licensed professionals.</p>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/what-is-ros">What is ROS™</Link></li>
                <li><Link href="/our-story">Our Story</Link></li>
                <li><Link href="/who-its-for">Who It's For</Link></li>
                <li><Link href="/work-with-me">Work With Me</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/shop">Guides &amp; Workbooks</Link></li>
                <li><Link href="/tools">Free Tools</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/sales-policy">Sales Policy</Link></li><li><Link href="/privacy/">Privacy &amp; Website Data</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><Link href="/relocation-financial-planning">Relocation Financial Planning</Link></li>
                <li><Link href="/visa-residency-pathways">Visa &amp; Residency Pathways</Link></li>
                <li><Link href="/financial-planning-international-relocation">FBAR &amp; Financial Guide</Link></li>
                <li><Link href="/international-relocation-consultancy">Choosing a Consultancy</Link></li>
                <li><a href="https://www.linkedin.com/in/globalsystemsstudio/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li><li><a href="https://www.instagram.com/globalsystemsstudio/" target="_blank" rel="noopener noreferrer">Instagram</a></li><li><a href="https://www.youtube.com/@GlobalSystemsStudio-CCB" target="_blank" rel="noopener noreferrer">YouTube</a></li>
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
