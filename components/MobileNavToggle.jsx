'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? '✕' : '☰'}
      </button>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <ul>
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/what-is-ros" onClick={() => setOpen(false)}>The System</Link></li>
          <li><Link href="/services/" onClick={() => setOpen(false)}>Pathways &amp; Prices</Link></li>
          <li><Link href="/#destinations" onClick={() => setOpen(false)}>Destinations 🌍</Link></li>
          <li><Link href="/#decision-room" onClick={() => setOpen(false)}>Decision Room 🎲</Link></li>
          <li><Link href="/resources" onClick={() => setOpen(false)}>Resources</Link></li>
          <li><Link href="/tools" onClick={() => setOpen(false)}>Free Tools</Link></li>
          <li><Link href="/shop" onClick={() => setOpen(false)}>Guides &amp; Workbooks</Link></li>
          <li><Link href="/work-with-me" onClick={() => setOpen(false)}>Work With Me</Link></li>
          <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
        <Link href="/shop/five-questions/" className="mobile-cta" onClick={() => setOpen(false)}>
          Start Free
        </Link>
      </div>
    </>
  );
}
