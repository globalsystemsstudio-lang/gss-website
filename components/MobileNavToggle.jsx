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
          <li><Link href="/what-is-ros" onClick={() => setOpen(false)}>What is ROS™</Link></li>
          <li><Link href="/our-story" onClick={() => setOpen(false)}>Our Story</Link></li>
          <li><Link href="/who-its-for" onClick={() => setOpen(false)}>Who It's For</Link></li>
          <li><Link href="/why-you-need-this" onClick={() => setOpen(false)}>Why You Need This</Link></li>
          <li><Link href="/work-with-me" onClick={() => setOpen(false)}>Work With Me</Link></li>
          <li><Link href="/resources" onClick={() => setOpen(false)}>Resources</Link></li>
          <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
        <Link href="/work-with-me" className="mobile-cta" onClick={() => setOpen(false)}>
          Book a Call
        </Link>
      </div>
    </>
  );
}
