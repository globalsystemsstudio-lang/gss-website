import Link from 'next/link';

export const metadata = {
  title: 'Free Relocation Tools — Cost of Living Calculator & Readiness Quiz',
  description: 'Free interactive tools for U.S. persons planning an international relocation: compare your income to 90+ countries, and find out exactly where your readiness gaps are before you move.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/tools/' },
};

const tools = [
  {
    emoji: '🌍',
    href: '/cost-of-living-calculator',
    name: 'Cost of Living Calculator',
    desc: "Enter your monthly budget and choose a destination country. We'll show you estimated monthly costs, your monthly surplus, purchasing power, and a category-by-category breakdown — calibrated to real cost-of-living data across 90+ countries.",
    cta: 'Run the numbers →',
  },
  {
    emoji: '✈️',
    href: '/relocation-readiness-quiz',
    name: 'Relocation Readiness Quiz',
    desc: '12 questions across two sections — Financial & Compliance, and Practical Logistics. Takes about 3 minutes. Your score tells you exactly where you stand, and what ROS™ resource matches where you are right now.',
    cta: 'Take the quiz →',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Free Relocation Tools</h1>
          <p>Before you talk to anyone or buy anything, run the numbers and run the quiz. Both are free, take minutes, and will tell you more about your actual situation than hours of social media research.</p>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {tools.map((t) => (
              <Link href={t.href} className="tool-card-link" key={t.href}>
                <div className="tool-card">
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{t.emoji}</div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      color: 'var(--text-light)',
                      marginBottom: '8px',
                    }}
                  >
                    Free Tool
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary)', marginBottom: '10px' }}>
                    {t.name}
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-light)', margin: '0 0 16px' }}>
                    {t.desc}
                  </p>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)' }}>{t.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <h2>Want the Full Picture, Not Just the Numbers?</h2>
          <div style={{ maxWidth: '760px', marginTop: '16px' }}>
            <p style={{ color: 'var(--text-light)' }}>
              These tools give you a starting estimate. A free 15-minute Discovery Call gives you an honest read
              on whether ROS™ fits your specific situation — no pitch, no pressure.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link href="/services/discovery-call" className="btn btn-gold">
                Book a Free Discovery Call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
