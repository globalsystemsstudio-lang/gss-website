import Link from 'next/link';
import MobileNavToggle from './MobileNavToggle';

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Global Systems Studio</Link>
          <ul className="nav-links">
            <li><Link href="/what-is-ros">The System</Link></li>
            <li><Link href="/services/">Pathways &amp; Prices</Link></li>
            <li><Link href="/shop/">Shop Guides</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/shop/five-questions/" className="nav-cta-link">Start Free</Link></li>
          </ul>
          <MobileNavToggle />
        </div>
      </div>
    </nav>
  );
}
