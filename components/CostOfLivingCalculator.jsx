'use client';
import { useState } from 'react';

const REGIONS = [
  {
    name: 'Latin America & Caribbean',
    countries: [
      { name: 'Argentina', index: 37 },
      { name: 'Bolivia', index: 32 },
      { name: 'Brazil', index: 46 },
      { name: 'Chile', index: 55 },
      { name: 'Colombia', index: 38 },
      { name: 'Costa Rica', index: 58 },
      { name: 'Dominican Republic', index: 45 },
      { name: 'Ecuador', index: 42 },
      { name: 'Guatemala', index: 40 },
      { name: 'Honduras', index: 38 },
      { name: 'Mexico', index: 44 },
      { name: 'Nicaragua', index: 35 },
      { name: 'Panama', index: 60 },
      { name: 'Paraguay', index: 36 },
      { name: 'Peru', index: 41 },
      { name: 'Uruguay', index: 57 },
    ],
  },
  {
    name: 'Western Europe',
    countries: [
      { name: 'Austria', index: 84 },
      { name: 'Belgium', index: 84 },
      { name: 'France', index: 82 },
      { name: 'Germany', index: 86 },
      { name: 'Greece', index: 65 },
      { name: 'Ireland', index: 91 },
      { name: 'Italy', index: 75 },
      { name: 'Netherlands', index: 87 },
      { name: 'Portugal', index: 65 },
      { name: 'Spain', index: 70 },
      { name: 'Switzerland', index: 128 },
    ],
  },
  {
    name: 'Central & Eastern Europe',
    countries: [
      { name: 'Albania', index: 42 },
      { name: 'Bulgaria', index: 48 },
      { name: 'Croatia', index: 60 },
      { name: 'Czech Republic', index: 60 },
      { name: 'Georgia', index: 40 },
      { name: 'Hungary', index: 52 },
      { name: 'Montenegro', index: 55 },
      { name: 'North Macedonia', index: 43 },
      { name: 'Poland', index: 55 },
      { name: 'Romania', index: 50 },
      { name: 'Serbia', index: 47 },
      { name: 'Slovakia', index: 58 },
      { name: 'Slovenia', index: 70 },
    ],
  },
  {
    name: 'Asia-Pacific',
    countries: [
      { name: 'Australia', index: 93 },
      { name: 'Bali (Indonesia)', index: 33 },
      { name: 'Cambodia', index: 30 },
      { name: 'Japan', index: 77 },
      { name: 'Malaysia', index: 38 },
      { name: 'New Zealand', index: 90 },
      { name: 'Philippines', index: 33 },
      { name: 'Singapore', index: 102 },
      { name: 'South Korea', index: 78 },
      { name: 'Taiwan', index: 65 },
      { name: 'Thailand', index: 35 },
      { name: 'Vietnam', index: 30 },
    ],
  },
  {
    name: 'Middle East',
    countries: [
      { name: 'Bahrain', index: 65 },
      { name: 'Jordan', index: 55 },
      { name: 'Kuwait', index: 62 },
      { name: 'Oman', index: 60 },
      { name: 'Qatar', index: 72 },
      { name: 'Saudi Arabia', index: 58 },
      { name: 'Turkey', index: 38 },
      { name: 'UAE (Dubai)', index: 75 },
    ],
  },
  {
    name: 'Africa',
    countries: [
      { name: 'Egypt', index: 30 },
      { name: 'Kenya', index: 38 },
      { name: 'Morocco', index: 38 },
      { name: 'Rwanda', index: 44 },
      { name: 'South Africa', index: 40 },
      { name: 'Tanzania', index: 40 },
      { name: 'Tunisia', index: 35 },
    ],
  },
  {
    name: 'North America',
    countries: [
      { name: 'Belize', index: 62 },
      { name: 'Canada', index: 90 },
    ],
  },
];

const CATEGORIES = [
  { name: 'Housing', weight: 0.35 },
  { name: 'Food & Groceries', weight: 0.18 },
  { name: 'Healthcare', weight: 0.12 },
  { name: 'Transportation', weight: 0.11 },
  { name: 'Utilities', weight: 0.09 },
  { name: 'Entertainment', weight: 0.08 },
  { name: 'Miscellaneous', weight: 0.07 },
];

const fmt = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

function parseBudget(raw) {
  const n = parseFloat(raw.replace(/[^0-9.]/g, ''));
  return isNaN(n) ? null : n;
}

export default function CostOfLivingCalculator() {
  const [budgetRaw, setBudgetRaw] = useState('');
  const [countryKey, setCountryKey] = useState('');

  const budget = parseBudget(budgetRaw);

  const allCountries = REGIONS.flatMap((r) => r.countries.map((c) => ({ ...c, region: r.name })));
  const selected = allCountries.find((c) => c.name === countryKey) || null;

  const ratio = selected ? selected.index / 100 : null;
  const destCost = budget && ratio ? Math.round(budget * ratio) : null;
  const surplus = budget && destCost ? budget - destCost : null;
  const purchasingPower = budget && ratio ? Math.round(budget / ratio) : null;

  const isCheaper = selected && selected.index < 85;

  return (
    <div style={{ maxWidth: '820px' }}>
      {/* Inputs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          marginBottom: '40px',
        }}
      >
        <div>
          <label
            htmlFor="budget"
            style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: 'var(--primary)' }}
          >
            Your Monthly Budget (USD)
          </label>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-light)',
                fontWeight: '600',
              }}
            >
              $
            </span>
            <input
              id="budget"
              type="text"
              inputMode="numeric"
              placeholder="5,000"
              value={budgetRaw}
              onChange={(e) => setBudgetRaw(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 28px',
                border: '2px solid var(--border)',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                background: '#fff',
                color: 'var(--text)',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
            />
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '6px' }}>
            Household net monthly income or retirement draw
          </p>
        </div>

        <div>
          <label
            htmlFor="country"
            style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: 'var(--primary)' }}
          >
            Destination Country
          </label>
          <select
            id="country"
            value={countryKey}
            onChange={(e) => setCountryKey(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px',
              border: '2px solid var(--border)',
              borderRadius: '8px',
              fontSize: '16px',
              background: '#fff',
              color: countryKey ? 'var(--text)' : 'var(--text-light)',
              outline: 'none',
              boxSizing: 'border-box',
              cursor: 'pointer',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
          >
            <option value="">Select a country…</option>
            {REGIONS.map((region) => (
              <optgroup key={region.name} label={region.name}>
                {region.countries.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <p style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '6px' }}>
            90+ countries across 7 regions
          </p>
        </div>
      </div>

      {/* Placeholder state */}
      {(!budget || !selected) && (
        <div
          style={{
            background: '#fff',
            border: '2px dashed var(--border)',
            borderRadius: '12px',
            padding: '48px 32px',
            textAlign: 'center',
            color: 'var(--text-light)',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌍</div>
          <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: 'var(--text)' }}>
            Enter your budget and choose a country to see your numbers
          </p>
          <p style={{ fontSize: '15px', maxWidth: '480px', margin: '0 auto' }}>
            We'll show you estimated monthly costs, your purchasing power, and a category-by-category breakdown
            compared to U.S. spending.
          </p>
        </div>
      )}

      {/* Results */}
      {budget && selected && (
        <>
          {/* Headline metrics */}
          <div
            style={{
              background: isCheaper ? 'var(--primary)' : '#fff',
              border: isCheaper ? 'none' : '2px solid var(--border)',
              borderRadius: '12px',
              padding: '32px',
              marginBottom: '32px',
              color: isCheaper ? '#fff' : 'inherit',
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  opacity: isCheaper ? 0.8 : 1,
                  color: isCheaper ? '#fff' : 'var(--text-light)',
                }}
              >
                Living in {selected.name} on {fmt(budget)}/month
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    opacity: 0.75,
                    marginBottom: '6px',
                  }}
                >
                  Est. Monthly Cost
                </div>
                <div style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.02em' }}>
                  {fmt(destCost)}
                </div>
                <div style={{ fontSize: '13px', opacity: 0.75, marginTop: '4px' }}>
                  in {selected.name}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    opacity: 0.75,
                    marginBottom: '6px',
                  }}
                >
                  Monthly Surplus
                </div>
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: '800',
                    letterSpacing: '-0.02em',
                    color: surplus > 0 ? (isCheaper ? '#7ECBA1' : '#2E7D52') : '#C0392B',
                  }}
                >
                  {surplus >= 0 ? '+' : ''}
                  {fmt(surplus)}
                </div>
                <div style={{ fontSize: '13px', opacity: 0.75, marginTop: '4px' }}>
                  after estimated expenses
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    opacity: 0.75,
                    marginBottom: '6px',
                  }}
                >
                  Purchasing Power
                </div>
                <div style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.02em' }}>
                  {fmt(purchasingPower)}
                </div>
                <div style={{ fontSize: '13px', opacity: 0.75, marginTop: '4px' }}>
                  U.S. equivalent lifestyle
                </div>
              </div>
            </div>
          </div>

          {/* Category breakdown */}
          <div
            style={{
              background: '#fff',
              border: '2px solid var(--border)',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '32px',
            }}
          >
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: '16px',
                  fontWeight: '700',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Monthly Breakdown by Category
              </h3>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg)' }}>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px 24px',
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--text-light)',
                    }}
                  >
                    Category
                  </th>
                  <th
                    style={{
                      textAlign: 'right',
                      padding: '12px 16px',
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--text-light)',
                    }}
                  >
                    U.S. Cost
                  </th>
                  <th
                    style={{
                      textAlign: 'right',
                      padding: '12px 16px',
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--text-light)',
                    }}
                  >
                    {selected.name}
                  </th>
                  <th
                    style={{
                      textAlign: 'right',
                      padding: '12px 24px',
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--text-light)',
                    }}
                  >
                    Savings
                  </th>
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map((cat, i) => {
                  const usCost = Math.round(budget * cat.weight);
                  const destCatCost = Math.round(usCost * ratio);
                  const catSavings = usCost - destCatCost;
                  return (
                    <tr
                      key={cat.name}
                      style={{
                        borderTop: '1px solid var(--border)',
                        background: i % 2 === 0 ? '#fff' : 'rgba(248,245,237,0.5)',
                      }}
                    >
                      <td style={{ padding: '14px 24px', fontWeight: '500' }}>{cat.name}</td>
                      <td style={{ padding: '14px 16px', textAlign: 'right', color: 'var(--text-light)' }}>
                        {fmt(usCost)}
                      </td>
                      <td style={{ padding: '14px 16px', textAlign: 'right', fontWeight: '600' }}>
                        {fmt(destCatCost)}
                      </td>
                      <td
                        style={{
                          padding: '14px 24px',
                          textAlign: 'right',
                          fontWeight: '700',
                          color: catSavings > 0 ? '#2E7D52' : catSavings < 0 ? '#C0392B' : 'var(--text-light)',
                        }}
                      >
                        {catSavings >= 0 ? '+' : ''}
                        {fmt(catSavings)}
                      </td>
                    </tr>
                  );
                })}
                <tr style={{ borderTop: '2px solid var(--primary)', background: 'rgba(30,91,153,0.06)' }}>
                  <td style={{ padding: '14px 24px', fontWeight: '800', color: 'var(--primary)' }}>Total</td>
                  <td
                    style={{
                      padding: '14px 16px',
                      textAlign: 'right',
                      fontWeight: '700',
                      color: 'var(--primary)',
                    }}
                  >
                    {fmt(budget)}
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      textAlign: 'right',
                      fontWeight: '800',
                      color: 'var(--primary)',
                    }}
                  >
                    {fmt(destCost)}
                  </td>
                  <td
                    style={{
                      padding: '14px 24px',
                      textAlign: 'right',
                      fontWeight: '800',
                      color: surplus >= 0 ? '#2E7D52' : '#C0392B',
                    }}
                  >
                    {surplus >= 0 ? '+' : ''}
                    {fmt(surplus)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <div className="highlight-box" style={{ marginBottom: '40px' }}>
            <strong>Important:</strong> These estimates are based on aggregated cost-of-living index data and are
            intended as a directional planning tool only. Actual costs vary significantly by city, lifestyle,
            housing choice, and individual circumstances. This calculator does not account for taxes, currency
            fluctuation, healthcare premiums, or one-time relocation costs. Use it as a starting point — not a
            budget.
          </div>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              paddingTop: '8px',
              paddingBottom: '48px',
            }}
          >
            <a
              href="https://calendar.app.google/5GiW8EZKoyB7SqEKA"
              className="btn btn-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Discovery Call →
            </a>
            <a href="/relocation-readiness-quiz" className="btn btn-gold">
              Take the Readiness Quiz →
            </a>
          </div>
        </>
      )}
    </div>
  );
}
