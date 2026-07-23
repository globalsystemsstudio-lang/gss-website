import CostOfLivingCalculator from '../../components/CostOfLivingCalculator';

export const metadata = {
  title: 'Cost of Living Calculator — Compare U.S. Income to 90+ Countries | Global Systems Studio',
  description:
    'See exactly how far your U.S. income goes abroad. Compare monthly costs across 90+ countries, get a category-by-category breakdown, and calculate your real purchasing power before you relocate.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/cost-of-living-calculator/' },
};

export default function CostOfLivingCalculatorPage() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <p
            className="section-tag"
            style={{ marginBottom: '12px', display: 'inline-block' }}
          >
            ROS™ Tool
          </p>
          <h1>Cost of Living Calculator</h1>
          <p
            className="article-meta"
            style={{
              fontStyle: 'italic',
              color: 'var(--text-light)',
              marginTop: '16px',
              fontSize: '17px',
              maxWidth: '720px',
            }}
          >
            Enter your monthly budget and choose a destination country. We'll show you estimated monthly costs,
            your monthly surplus, purchasing power, and a breakdown by category — all calibrated to real
            cost-of-living data across 90+ countries.
          </p>
        </div>
      </section>

      <section className="article-page" style={{ paddingTop: '56px' }}>
        <div className="container">
          <CostOfLivingCalculator />
        </div>
      </section>
    </>
  );
}
