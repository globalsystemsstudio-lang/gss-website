'use client';
import { useState } from 'react';

const SECTIONS = [
  {
    title: 'Financial & Compliance',
    questions: [
      {
        id: 'feie',
        text: 'Have you researched the Foreign Earned Income Exclusion (FEIE) and whether you qualify?',
        why: 'The FEIE lets qualifying expats exclude up to ~$126,500/year of foreign-earned income from U.S. taxes. Missing it is one of the most common and costly expat tax mistakes.',
      },
      {
        id: 'pfic',
        text: 'Have you reviewed your investment portfolio for PFIC (Passive Foreign Investment Company) exposure?',
        why: "Foreign mutual funds and ETFs are often classified as PFICs by the IRS. The penalty tax regime is punishing — this is one you need to know about before you leave, not after your first filing abroad.",
      },
      {
        id: 'fbar',
        text: 'Do you have a plan for FBAR-compliant banking, including which U.S. accounts you will maintain?',
        why: "FinCEN Report 114 (FBAR) is required if your aggregate foreign financial accounts exceed $10,000 at any point during the year. Penalties for non-compliance are severe — up to $10,000/year per violation for non-willful failure.",
      },
      {
        id: 'cpa',
        text: 'Have you consulted an expat-specialized CPA or tax attorney — not a general domestic CPA?',
        why: "U.S. tax law for expatriates is a specialty. Most domestic CPAs are not equipped to handle FEIE elections, totalization agreements, foreign tax credits, or PFIC reporting correctly. Using the wrong advisor is a costly mistake.",
      },
      {
        id: 'fatca',
        text: 'Are you aware of FATCA filing requirements (Form 8938) and the thresholds that apply to your situation?',
        why: 'FATCA requires U.S. persons with foreign financial assets above certain thresholds to file Form 8938 with their tax return. It overlaps with (but is separate from) FBAR. Both may be required.',
      },
      {
        id: 'estate',
        text: 'Have you reviewed your estate documents — will, POA, healthcare directive — for cross-border validity?',
        why: "A U.S. will may not be valid in your destination country, and a domestic POA may not be recognized there. If something happens to you abroad, your family could face legal complications that take years to untangle.",
      },
    ],
  },
  {
    title: 'Practical Logistics',
    questions: [
      {
        id: 'visa',
        text: 'Do you have a clear visa or residency pathway identified for your destination country?',
        why: "Visa strategy is not a detail — it determines how long you can stay, whether you can work, and what taxes you owe locally. Digital nomad visas, retirement visas, and investor residency all have different requirements and consequences.",
      },
      {
        id: 'health',
        text: 'Have you identified a health insurance solution that provides coverage in your destination country?',
        why: "U.S. Medicare does not cover you abroad. Travel insurance is not the same as health insurance. You need a specific expat health plan or local coverage — and you need to understand what it covers before you leave.",
      },
      {
        id: 'meds',
        text: 'If you take prescription medications, have you confirmed their availability and legal status in your destination?',
        why: "Some medications widely available in the U.S. are controlled substances or outright illegal in other countries. Others are available but under different brand names or formulations. This requires research specific to your medications and destination.",
      },
      {
        id: 'housing',
        text: 'Do you have a 90-day housing plan for your first months in your destination country?',
        why: "Arriving without short-term housing sorted is one of the most stressful and expensive mistakes new expats make. A 90-day plan — even if it changes — gives you time to find a permanent situation without making rushed decisions.",
      },
      {
        id: 'income',
        text: 'Have you identified how you will access and move money internationally — accounts, wire transfer limits, card access?',
        why: "ATM limits, wire transfer delays, Zelle restrictions abroad, and foreign transaction fees can all disrupt your cash flow at critical moments. You need a banking structure that works from day one in your destination.",
      },
      {
        id: 'transport',
        text: 'Have you worked out your transportation plan — including vehicle import rules, local licensing, and insurance?',
        why: "Importing a U.S. vehicle is often impractical or heavily taxed. Buying locally requires understanding foreign financing, insurance, and licensing rules. For many destinations, this is a multi-month process that should start before you arrive.",
      },
    ],
  },
];

const ANSWERS = [
  { label: 'Yes, done ✓', value: 2 },
  { label: 'Working on it', value: 1 },
  { label: 'Not yet', value: 0 },
];

const ALL_QUESTIONS = SECTIONS.flatMap((s, si) =>
  s.questions.map((q, qi) => ({ ...q, sectionIndex: si, sectionTitle: s.title, localIndex: qi }))
);

const TOTAL = ALL_QUESTIONS.length; // 12
const MAX_SCORE = TOTAL * 2; // 24

function getBucket(score) {
  if (score <= 8)
    return {
      label: 'Just Getting Started',
      color: '#C0392B',
      bg: '#FFF5F5',
      message:
        "You're in the early stages — which is exactly the right time to build a solid foundation. The ROS™ Book walks you through every major decision area before your move, so you stop guessing and start building.",
      cta: 'Get the ROS™ Book — $47',
      href: '/work-with-me',
    };
  if (score <= 16)
    return {
      label: 'Building Momentum',
      color: '#C8A832',
      bg: '#FFFBEE',
      message:
        "You've made meaningful progress, but there are gaps that could cost you. The Departure Lounge gives you community, accountability, and structured guidance to close those gaps before they become problems.",
      cta: 'Join the Departure Lounge — $97/mo',
      href: '/work-with-me',
    };
  return {
    label: 'Almost Launch-Ready',
    color: '#2E7D52',
    bg: '#F0FFF6',
    message:
      "You've done serious preparation work. A 1:1 Clarity Session with our team will identify any remaining blind spots and give you a personalized roadmap for your final launch phase.",
    cta: 'Book a Clarity Session — $497',
    href: '/work-with-me',
  };
}

export default function RelocationReadinessQuiz() {
  const [phase, setPhase] = useState('intro');
  const [answers, setAnswers] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  const [showWhy, setShowWhy] = useState(false);
  const [captureEmail, setCaptureEmail] = useState('');
  const [captureName, setCaptureName] = useState('');
  const [captureStatus, setCaptureStatus] = useState('idle'); // idle | submitting | error
  const [captureError, setCaptureError] = useState('');

  const q = ALL_QUESTIONS[currentQ];
  const progress = ((currentQ + 1) / TOTAL) * 100;

  const handleAnswer = (value) => {
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    setShowWhy(false);
    if (currentQ < TOTAL - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setPhase('capture');
    }
  };

  const totalScore = Object.values(answers).reduce((s, v) => s + v, 0);

  const sectionScores = SECTIONS.map((sec) => ({
    title: sec.title,
    score: sec.questions.reduce((s, q) => s + (answers[q.id] ?? 0), 0),
    max: sec.questions.length * 2,
  }));

  const bucket = getBucket(totalScore);

  const handleRetake = () => {
    setAnswers({});
    setCurrentQ(0);
    setShowWhy(false);
    setCaptureStatus('idle');
    setCaptureError('');
    setPhase('intro');
  };

  /* ── INTRO ── */
  if (phase === 'intro') {
    return (
      <div style={{ maxWidth: '680px' }}>
        <div
          style={{
            background: '#fff',
            border: '2px solid var(--border)',
            borderRadius: '12px',
            padding: '48px 40px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '56px', marginBottom: '20px' }}>✈️</div>
          <h2
            style={{
              fontSize: '26px',
              fontWeight: '800',
              color: 'var(--primary)',
              marginBottom: '16px',
              marginTop: 0,
            }}
          >
            12 Questions. Real Answers.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.65', color: 'var(--text-light)', marginBottom: '32px' }}>
            This assessment covers the two areas where most people discover they're not as ready as they thought:
            financial compliance and practical logistics. Takes about 3 minutes — we'll email you your
            personalized results and section-by-section breakdown at the end.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '40px',
              textAlign: 'left',
            }}
          >
            {SECTIONS.map((s) => (
              <div
                key={s.title}
                style={{
                  background: 'var(--bg)',
                  borderRadius: '8px',
                  padding: '20px',
                  border: '1px solid var(--border)',
                }}
              >
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
                  {s.questions.length} Questions
                </div>
                <div style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>{s.title}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setPhase('quiz')}
            className="btn btn-gold"
            style={{ fontSize: '17px', padding: '14px 36px', cursor: 'pointer', border: 'none' }}
          >
            Start the Assessment →
          </button>
        </div>
      </div>
    );
  }

  /* ── QUIZ ── */
  if (phase === 'quiz') {
    const sectionLabel = q.sectionTitle;
    const isFirstInSection = q.localIndex === 0;

    return (
      <div style={{ maxWidth: '680px' }}>
        {/* Progress */}
        <div style={{ marginBottom: '32px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {sectionLabel}
            </span>
            <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-light)' }}>
              {currentQ + 1} / {TOTAL}
            </span>
          </div>
          <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'var(--primary)',
                borderRadius: '4px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div
          style={{
            background: '#fff',
            border: '2px solid var(--border)',
            borderRadius: '12px',
            padding: '36px',
          }}
        >
          <h3
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--primary)',
              marginBottom: '28px',
              marginTop: 0,
              lineHeight: '1.4',
            }}
          >
            {q.text}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {ANSWERS.map((a) => (
              <button
                key={a.label}
                onClick={() => handleAnswer(a.value)}
                style={{
                  padding: '16px 20px',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  background: '#fff',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s, background 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.background = 'var(--bg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = '#fff';
                }}
              >
                {a.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowWhy(!showWhy)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-light)',
              fontSize: '14px',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: 0,
            }}
          >
            {showWhy ? 'Hide' : 'Why does this matter?'}
          </button>

          {showWhy && (
            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: 'var(--text-light)',
                marginTop: '14px',
                marginBottom: 0,
                background: 'var(--bg)',
                padding: '16px',
                borderRadius: '8px',
              }}
            >
              {q.why}
            </p>
          )}
        </div>
      </div>
    );
  }

  /* ── CAPTURE ── */
  if (phase === 'capture') {
    const handleCaptureSubmit = async (e) => {
      e.preventDefault();
      if (!captureEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(captureEmail)) {
        setCaptureStatus('error');
        setCaptureError('Enter a valid email address.');
        return;
      }
      setCaptureStatus('submitting');
      setCaptureError('');
      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: captureEmail,
            name: captureName || undefined,
            source: 'quiz',
            fields: {
              quiz_score: `${totalScore}/${MAX_SCORE} (${bucket.label})`,
            },
          }),
        });
        if (!res.ok) throw new Error('Request failed');
        setPhase('results');
      } catch (err) {
        setCaptureStatus('error');
        setCaptureError("Something went wrong on our end — please try again, or email us directly at hello@globalsystemsstudio.com.");
      }
    };

    return (
      <div style={{ maxWidth: '560px' }}>
        <div
          style={{
            background: bucket.bg,
            border: `2px solid ${bucket.color}`,
            borderRadius: '12px',
            padding: '40px 36px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '13px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: bucket.color,
              marginBottom: '8px',
            }}
          >
            You scored
          </div>
          <div
            style={{
              fontSize: '40px',
              fontWeight: '900',
              color: bucket.color,
              letterSpacing: '-0.02em',
              marginBottom: '4px',
            }}
          >
            {totalScore} / {MAX_SCORE}
          </div>
          <div style={{ fontSize: '22px', fontWeight: '800', color: bucket.color, marginBottom: '20px' }}>
            {bucket.label}
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text)', marginBottom: '28px' }}>
            Enter your email to see your full section-by-section breakdown, the reasoning behind each
            question, and your personalized recommendation.
          </p>

          <form onSubmit={handleCaptureSubmit} style={{ textAlign: 'left' }}>
            <input
              type="text"
              placeholder="First name (optional)"
              value={captureName}
              onChange={(e) => setCaptureName(e.target.value)}
              style={{
                width: '100%',
                padding: '13px 16px',
                border: '2px solid var(--border)',
                borderRadius: '8px',
                fontSize: '16px',
                marginBottom: '12px',
                boxSizing: 'border-box',
                background: '#fff',
              }}
            />
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={captureEmail}
              onChange={(e) => setCaptureEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '13px 16px',
                border: '2px solid var(--border)',
                borderRadius: '8px',
                fontSize: '16px',
                marginBottom: '12px',
                boxSizing: 'border-box',
                background: '#fff',
              }}
            />
            {captureStatus === 'error' && (
              <p style={{ color: '#C0392B', fontSize: '14px', marginBottom: '12px' }}>{captureError}</p>
            )}
            <button
              type="submit"
              disabled={captureStatus === 'submitting'}
              className="btn btn-gold"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '17px',
                cursor: captureStatus === 'submitting' ? 'default' : 'pointer',
                border: 'none',
                opacity: captureStatus === 'submitting' ? 0.7 : 1,
              }}
            >
              {captureStatus === 'submitting' ? 'Sending…' : 'Show My Full Results →'}
            </button>
          </form>
          <p style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '16px' }}>
            No spam. Just your results and occasional relocation guidance. Unsubscribe anytime.
          </p>
        </div>
      </div>
    );
  }

  /* ── RESULTS ── */
  return (
    <div style={{ maxWidth: '720px' }}>
      {/* Score header */}
      <div
        style={{
          background: bucket.bg,
          border: `2px solid ${bucket.color}`,
          borderRadius: '12px',
          padding: '36px',
          marginBottom: '32px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: bucket.color,
            marginBottom: '8px',
          }}
        >
          Your Result
        </div>
        <div
          style={{
            fontSize: '40px',
            fontWeight: '900',
            color: bucket.color,
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}
        >
          {totalScore} / {MAX_SCORE}
        </div>
        <div
          style={{ fontSize: '22px', fontWeight: '800', color: bucket.color, marginBottom: '20px' }}
        >
          {bucket.label}
        </div>
        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.65',
            color: 'var(--text)',
            maxWidth: '520px',
            margin: '0 auto 28px',
          }}
        >
          {bucket.message}
        </p>
        <a href={bucket.href} className="btn btn-gold">
          {bucket.cta} →
        </a>
      </div>

      {/* Section scores */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {sectionScores.map((sec) => {
          const pct = Math.round((sec.score / sec.max) * 100);
          return (
            <div
              key={sec.title}
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                {sec.title}
              </div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--primary)' }}>
                {sec.score} / {sec.max}
              </div>
              <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', marginTop: '10px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: 'var(--primary)', borderRadius: '3px' }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Question-by-question breakdown */}
      <div
        style={{
          background: '#fff',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '8px',
          marginBottom: '32px',
        }}
      >
        {ALL_QUESTIONS.map((question, i) => {
          const val = answers[question.id];
          const answerObj = ANSWERS.find((a) => a.value === val);
          const color = val === 2 ? '#2E7D52' : val === 1 ? '#C8A832' : '#C0392B';
          return (
            <div
              key={question.id}
              style={{
                padding: '16px 20px',
                borderBottom: i < ALL_QUESTIONS.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--text)', lineHeight: '1.5', flex: 1 }}>
                  {question.text}
                </p>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color,
                    whiteSpace: 'nowrap',
                    padding: '4px 10px',
                    borderRadius: '99px',
                    background: `${color}15`,
                  }}
                >
                  {answerObj ? answerObj.label : '—'}
                </span>
              </div>
              {val !== 2 && (
                <p style={{ margin: '8px 0 0', fontSize: '13px', color: 'var(--text-light)', lineHeight: '1.55' }}>
                  {question.why}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={handleRetake}
          style={{
            background: 'none',
            border: '2px solid var(--border)',
            borderRadius: '8px',
            padding: '12px 24px',
            fontSize: '15px',
            fontWeight: '600',
            color: 'var(--text)',
            cursor: 'pointer',
          }}
        >
          Retake the Assessment
        </button>
      </div>
    </div>
  );
}
