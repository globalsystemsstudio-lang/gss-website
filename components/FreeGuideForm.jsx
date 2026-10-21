'use client';

import { useState } from 'react';
import { trackEvent } from '../lib/analytics';

const DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1C6iMQvEop3RwhXhZRigyTifCcYe61Mrn';

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  fontSize: '16px',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  background: 'var(--white)',
  color: 'var(--text)',
};

export default function FreeGuideForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source: 'guide' }),
      });
      if (res.ok) trackEvent('generate_lead', { lead_source: 'guide' });
      setStatus(res.ok ? 'done' : 'error');
    } catch (err) {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div style={{ marginTop: '24px', maxWidth: '520px' }} role="status">
        <p style={{ fontWeight: '600' }}>Thank you. Check your inbox for your guide.</p>
        <p style={{ marginTop: '8px' }}>
          Prefer to download it right now?{' '}
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
            Download the free PDF
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '24px', maxWidth: '520px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <label htmlFor="guide-name" style={{ fontWeight: '600' }}>First name</label>
      <input
        id="guide-name"
        type="text"
        autoComplete="given-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />
      <label htmlFor="guide-email" style={{ fontWeight: '600' }}>Email address</label>
      <input
        id="guide-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Email Me the Free Guide'}
      </button>
      {status === 'error' && (
        <p role="alert" style={{ fontSize: '14px' }}>
          We could not send the email just now. You can still{' '}
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
            download the free PDF here
          </a>.
        </p>
      )}
      <p style={{ fontSize: '13px' }}>We will email you the guide and occasional relocation planning tips. Unsubscribe any time.</p>
    </form>
  );
}
