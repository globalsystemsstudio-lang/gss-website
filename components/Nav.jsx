import Link from 'next/link';
import MobileNavToggle from './MobileNavToggle';

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Global Systems Studio</Link>
          <ul className="nav-links">
            <li><Link href="/what-is-ros">What is ROS™</Link></li>
            <li><Link href="/our-story">Our Story</Link></li>
            <li><Link href="/who-its-for">Who It's For</Link></li>
            <li><Link href="/why-you-need-this">Why You Need This</Link></li>
            <li><Link href="/work-with-me">Work With Me</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/work-with-me" className="nav-cta-link">Book a Call</Link></li>
          </ul>
          <MobileNavToggle />
        </div>
      </div>
    </nav>
  );
}
