'use client';
import { useEffect } from 'react';

// Calendar destinations -> offer type. A click here is booking INTEREST only,
// not a confirmed booking or purchase. No personal data is sent.
const CALENDARS = {
  '5GiW8EZKoyB7SqEKA': 'discovery_call',   // free 15-minute Discovery Call
  'kQpLotoqdgpLqHR88': 'discovery_call',   // second calendar used on articles labelled "Discovery Call"
  'GqshRNZbP1LTvwKJ9': 'clarity_session',  // paid $497 45-minute Clarity Session
};

export default function BookingTracker() {
  useEffect(() => {
    if (window.__gssBookingTracker) return; // guard against double-binding
    window.__gssBookingTracker = true;

    const onClick = (e) => {
      const a = e.target instanceof Element ? e.target.closest('a[href*="calendar.app.google/"]') : null;
      if (!a) return;
      const id = (a.getAttribute('href') || '').split('calendar.app.google/')[1]?.split(/[?#/]/)[0];
      const offer = CALENDARS[id];
      if (!offer || typeof window.gtag !== 'function') return;
      window.gtag('event', 'booking_start', {
        offer_type: offer,
        page_path: window.location.pathname,
        button_label: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80),
        transport_type: 'beacon',
      });
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      window.__gssBookingTracker = false;
    };
  }, []);
  return null;
}
