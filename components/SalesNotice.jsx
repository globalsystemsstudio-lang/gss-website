import Link from 'next/link';

export default function SalesNotice({ light = false }) {
  return (
    <p style={{ marginTop: '10px', fontSize: '0.85rem', opacity: 0.85, color: light ? 'rgba(255,255,255,0.85)' : 'inherit' }}>
      All sales final.{' '}
      <Link href="/sales-policy" style={{ textDecoration: 'underline', color: 'inherit' }}>See policy</Link>.
    </p>
  );
}
