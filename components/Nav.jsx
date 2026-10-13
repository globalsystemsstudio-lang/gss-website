import Link from 'next/link';
import MobileNavToggle from './MobileNavToggle';

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Global Systems Studio</Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/what-is-ros">The System</Link></li>
            <li><Link href="/who-its-for">Pathways</Link></li>
            <li><Link href="/#episodes">Episodes 🎬</Link></li>
            <li><Link href="/#destinations">Destinations 🌍</Link></li>
            <li><Link href="/#decision-room">Decision Room 🎲</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/shop/new-roots/" className="nav-cta-link">Start Here</Link></li>
          </ul>
          <MobileNavToggle />
        </div>
      </div>
    </nav>
  );
}
