'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const QUICK_REPLIES = [
  'What is ROS™?',
  'How much does it cost?',
  'Is this right for me?',
  'How do I get started?',
  'What are the 7 modules?',
];

function getBethResponse(input) {
  const q = input.toLowerCase().trim();

  // What is ROS
  if (q.match(/what is ros|what('s| is) the ros|tell me about ros|explain ros/)) {
    return {
      text: "ROS™ stands for the **Relocation Operating System** — a structured, step-by-step infrastructure built for people who are serious about moving internationally.\n\nThink of what an operating system does for a computer — it runs everything. ROS™ does that for your relocation. Seven modules. Six tiers built around your life stage. Real answers to the questions that keep you up at night.\n\n👉 Legal, financial, housing, healthcare, business, family, and long-term stability — all in one organized system.",
      link: { href: '/what-is-ros', label: 'Learn more about ROS™ →' },
    };
  }

  // 7 modules
  if (q.match(/7 module|seven module|modules?|what does ros cover|what('s| is) covered/)) {
    return {
      text: "ROS™ covers seven modules — the exact areas where international relocations fail:\n\n**01 Legal & Documentation** — visas, residency, apostilles, citizenship pathways\n**02 Financial Structure** — FBAR, cross-border banking, Social Security strategy, foreign taxes\n**03 Housing & Lifestyle** — finding a home, lease terms, sell vs. rent your U.S. property\n**04 Healthcare & Wellness** — insurance abroad, prescriptions, specialist access\n**05 Business & Income** — working remotely, local job search, opening a business abroad\n**06 Family & Social Integration** — school enrollment, cultural adjustment, community building\n**07 Long-Term Stability** — estate planning, re-entry options, retirement income across borders",
      link: { href: '/what-is-ros', label: 'See all 7 modules in detail →' },
    };
  }

  // Pricing / cost
  if (q.match(/cost|price|how much|pricing|pay|afford|expensive/)) {
    return {
      text: "We have four ways to work with us — something for every stage:\n\n🆓 **Free 15-Min Discovery Call** — Not sure if ROS™ is right for you? Let's talk first, no obligation.\n\n📞 **Clarity Session — $497** — 30 minutes, your specific situation, real answers and a next-step plan.\n\n📖 **The ROS™ Book — $47** — The complete system in written form. Every module, every tier, at your own pace.\n\n💬 **The Departure Lounge — $97/month** — Our Discord community with monthly Q&A and ongoing support.",
      link: { href: '/work-with-me', label: 'See all options →' },
    };
  }

  // How to get started
  if (q.match(/get started|start|begin|first step|where do i start|how do i/)) {
    return {
      text: "The best first step depends on where you are in your journey:\n\n**Just starting out?** Book a free 15-minute discovery call — we'll tell you exactly what makes sense for your situation.\n\n**Ready to dig in?** The ROS™ Book ($47) gives you the full system to work through at your own pace.\n\n**Need specific answers fast?** A Clarity Session ($497) is 30 minutes focused entirely on your situation.\n\n**Want ongoing community?** Join The Departure Lounge ($97/mo) for monthly Q&A and peer support.",
      link: { href: 'https://calendar.app.google/5GiW8EZKoyB7SqEKA', label: 'Book a free call →', external: true },
    };
  }

  // Is this right for me / who is it for
  if (q.match(/right for me|is this for me|who is this for|who('s| is) it for|my situation|qualify|fit/)) {
    return {
      text: "ROS™ was built for anyone seriously planning an international relocation from the U.S. We have six tiers based on your life stage:\n\n🌍 **Solo Relocator** — Moving alone, building a new independent life abroad\n👨‍👩‍👧 **Relocating Family** — Managing a move with dependents, schools, and multiple schedules\n🏖️ **Nomad/Remote Worker** — Working remotely while living internationally\n🎯 **New Roots** — Returning to a birth country after years in the U.S.\n👵 **Legacy Relocator** — Retiring or semi-retiring abroad, 55+\n🏢 **Across Streets** — Dual-country living, maintaining ties in both places\n\nNot sure which one fits? The discovery call is the fastest way to figure it out.",
      link: { href: '/who-its-for', label: 'Find your tier →' },
    };
  }

  // Legal / documents / visa
  if (q.match(/legal|visa|document|passport|apostille|residency|citizenship/)) {
    return {
      text: "Module 01 of ROS™ covers Legal & Documentation — the paperwork that makes your move legal and keeps it that way.\n\nThis includes: visas, residency permits, citizenship pathways, the difference between arriving legally and staying legally, document authentication (notary vs. apostille vs. embassy authentication), certified translation requirements, and what happens if you miss the residency conversion window.\n\nMost people discover these requirements at the moment they need to submit something. ROS™ maps every document, every step, and every timeline in advance.",
      link: { href: '/what-is-ros', label: 'See the full Legal module →' },
    };
  }

  // Finance / money / taxes / social security / FBAR
  if (q.match(/financ|money|tax|social security|fbar|bank|invest|capital gain|currency|income/)) {
    return {
      text: "Module 02 of ROS™ covers Financial Structure — the money decisions that have permanent consequences.\n\nThis includes: cross-border banking, FBAR compliance for foreign accounts, capital gains timing when selling U.S. property, the Foreign Earned Income Exclusion, Social Security strategy (when to claim, how working abroad affects your benefit, and the 2036 funding projections), wire transfer compliance, and currency exchange tax implications.\n\n⚠️ Most domestic CPAs are not equipped to navigate this. ROS™ helps you ask the right questions and find the right professionals.",
      link: { href: '/relocation-financial-planning', label: 'Learn about financial planning →' },
    };
  }

  // Healthcare
  if (q.match(/health|medical|doctor|insurance|prescription|medication|hospital|care/)) {
    return {
      text: "Module 04 of ROS™ covers Healthcare & Wellness — the questions that must be answered before you need the answers.\n\nThis covers: whether your U.S. insurance works abroad, whether your prescriptions are available in your destination country, what specialist care looks like (cardiologists, oncologists, neurologists), what a medical emergency costs without U.S. coverage, and how to evaluate healthcare quality in your destination.\n\nThis module is especially critical for anyone over 60, anyone with ongoing medical needs, or anyone moving with a family member who requires specialized care.",
      link: { href: '/what-is-ros', label: 'See all 7 modules →' },
    };
  }

  // Business / work / job / income
  if (q.match(/business|work|job|income|employ|remote|freelanc|career|profession/)) {
    return {
      text: "Module 05 of ROS™ covers Business & Income — how you earn and keep earning across international borders.\n\nThis includes: working remotely for a U.S. employer while living abroad, finding local employment in your destination country, whether your professional credentials transfer, platforms to find international work (and which ones cost money before you can even apply), opening a business in a foreign country (legal registration, licensing, tax structure), and freelancing internationally.",
      link: { href: '/what-is-ros', label: 'See the full Business module →' },
    };
  }

  // Housing / home / rent / property
  if (q.match(/hous|home|rent|apartment|property|sell|buy|mortgage|lease/)) {
    return {
      text: "Module 03 of ROS™ covers Housing & Lifestyle — finding and securing a home in a market you don't know yet.\n\nThis covers: rental pricing opacity abroad, lease terms in another language, deposit structures that work differently than U.S. tenant law, short-term vs. long-term rental rules, the premium landlords charge foreign renters, and the big question every relocator faces: **sell your home before you go, or rent it out and manage it from abroad?**",
      link: { href: '/what-is-ros', label: 'See the full Housing module →' },
    };
  }

  // Family / kids / school / community / connection
  if (q.match(/family|kids?|children|school|community|friends|connect|lonely|miss|grief|emotion/)) {
    return {
      text: "Module 06 of ROS™ covers Family & Social Integration — the human dimensions of a move that numbers alone can't capture.\n\nThis includes: school enrollment timelines (which are nothing like what you know in the U.S.), cultural adjustment for children and adults, building community in a new place, the grief of leaving people you love, the daily reality of disconnection when your family network is thousands of miles away, and the relationship dynamics that shift when two people navigate an enormous change from different emotional angles.",
      link: { href: '/what-is-ros', label: 'See all 7 modules →' },
    };
  }

  // Long term / estate / retirement / re-entry
  if (q.match(/long.?term|estate|retire|pension|re.?entry|return|beneficiar|will|trust/)) {
    return {
      text: "Module 07 of ROS™ covers Long-Term Stability — what sustainable life abroad looks like beyond year one.\n\nThis covers: estate planning across borders, beneficiary designations that work internationally, re-entry options if circumstances change and you need to return to the U.S., Social Security strategy for the long term, and retirement income planning when your cost of living is in one currency and your income is in another.",
      link: { href: '/what-is-ros', label: 'See the full Long-Term module →' },
    };
  }

  // The book
  if (q.match(/book|across streets|written|download|read/)) {
    return {
      text: "The ROS™ Book is the complete system in written form — every module, every tier, every question organized so you can work through it at your own pace.\n\n📖 **Price: $47** (digital download)\n\nIt covers all seven modules and six tiers, and it's designed to be a working document — something you return to at each stage of your planning, not just read once.",
      link: { href: '/work-with-me', label: 'Get the ROS™ Book →' },
    };
  }

  // Clarity session / call / coaching
  if (q.match(/clarity|session|call|consult|coach|appointment|1.?1|one.on.one/)) {
    return {
      text: "The Clarity Session is a 30-minute 1:1 call focused entirely on your specific situation.\n\n📞 **Price: $497**\n\nYou bring your questions — where you are, what you're trying to figure out, what's blocking you. We build a clear next-step plan around your actual circumstances. No generic advice. No scripts.\n\nIf you're not sure if it's the right fit, start with the free 15-minute discovery call first.",
      link: { href: 'https://calendar.app.google/5GiW8EZKoyB7SqEKA', label: 'Book a free discovery call first →', external: true },
    };
  }

  // Community / departure lounge / discord
  if (q.match(/community|depart|lounge|discord|group|member|monthly|ongoing/)) {
    return {
      text: "The Departure Lounge is our private Discord community for people actively planning or navigating an international relocation.\n\n💬 **Price: $97/month**\n\nYou get ongoing peer support, a community of people navigating the same decisions alongside you, and monthly live Q&A with our team.\n\nIt's not just a forum — it's an ongoing resource for the questions that don't stop once you've started planning.",
      link: { href: '/work-with-me', label: 'Join The Departure Lounge →' },
    };
  }

  // Greetings
  if (q.match(/^(hi|hello|hey|good morning|good afternoon|good evening|howdy|sup)\b/)) {
    return {
      text: "Hi there! 👋 I'm Beth, Global Systems Studio's guide to everything ROS™.\n\nI can answer questions about the Relocation Operating System, our seven modules, who it's for, pricing, and how to get started. What's on your mind?",
    };
  }

  // Thanks
  if (q.match(/thank|thanks|great|perfect|awesome|helpful/)) {
    return {
      text: "You're welcome! That's what I'm here for. 😊\n\nIs there anything else you'd like to know about ROS™, our services, or international relocation? I'm happy to help.",
    };
  }

  // Default fallback
  return {
    text: "That's a great question — and it's exactly the kind of thing ROS™ was built to address.\n\nFor the most specific answer to your situation, the best next step is a free 15-minute discovery call with our team. They can point you to exactly the right resource or module.\n\nOr if you'd like to explore the system on your own first, the ROS™ Book ($47) covers all seven modules in full.",
    link: { href: 'https://calendar.app.google/5GiW8EZKoyB7SqEKA', label: 'Book a free call →', external: true },
  };
}

function formatText(text) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    // Bold formatting **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    return (
      <span key={i}>
        {parts}
        {i < lines.length - 1 && line !== '' && <br />}
      </span>
    );
  });
}

export default function BethChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'beth',
      text: "Hi! I'm Beth 👋 I'm here to answer your questions about ROS™ and international relocation. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  function handleSend(text) {
    const question = text || input.trim();
    if (!question) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: question }]);
    setIsTyping(true);
    setTimeout(() => {
      const response = getBethResponse(question);
      setMessages(prev => [...prev, { role: 'beth', ...response }]);
      setIsTyping(false);
    }, 700);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '24px',
          width: '360px',
          maxWidth: 'calc(100vw - 48px)',
          height: '520px',
          background: 'var(--white, #fff)',
          borderRadius: '16px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 9999,
          border: '1px solid var(--border, #e0dcd5)',
        }}>
          {/* Header */}
          <div style={{
            background: 'var(--primary, #1E5B99)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--accent, #C8A832)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '16px',
              color: 'var(--primary, #1E5B99)',
              flexShrink: 0,
            }}>B</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px', lineHeight: 1.2 }}>Beth</div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px' }}>ROS™ Guide · Global Systems Studio</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '20px', lineHeight: 1, padding: '4px' }}
              aria-label="Close chat"
            >×</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: 'var(--bg, #F8F5ED)',
          }}>
            {messages.map((msg, i) => (
              <div key={i}>
                <div style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}>
                  <div style={{
                    maxWidth: '85%',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user' ? 'var(--primary, #1E5B99)' : 'var(--white, #fff)',
                    color: msg.role === 'user' ? '#fff' : 'var(--text, #2d2d2d)',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    border: msg.role === 'beth' ? '1px solid var(--border, #e0dcd5)' : 'none',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  }}>
                    {formatText(msg.text)}
                  </div>
                </div>
                {msg.role === 'beth' && msg.link && (
                  <div style={{ paddingLeft: '8px', marginTop: '6px' }}>
                    {msg.link.external ? (
                      <a
                        href={msg.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '13px',
                          color: 'var(--primary, #1E5B99)',
                          fontWeight: '600',
                          textDecoration: 'none',
                          borderBottom: '1px solid var(--accent, #C8A832)',
                          paddingBottom: '1px',
                        }}
                      >{msg.link.label}</a>
                    ) : (
                      <Link
                        href={msg.link.href}
                        style={{
                          fontSize: '13px',
                          color: 'var(--primary, #1E5B99)',
                          fontWeight: '600',
                          textDecoration: 'none',
                          borderBottom: '1px solid var(--accent, #C8A832)',
                          paddingBottom: '1px',
                        }}
                      >{msg.link.label}</Link>
                    )}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '10px 16px',
                  background: 'var(--white, #fff)',
                  borderRadius: '16px 16px 16px 4px',
                  border: '1px solid var(--border, #e0dcd5)',
                  fontSize: '18px',
                  letterSpacing: '2px',
                  color: 'var(--text-light, #6b6b6b)',
                }}>···</div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies — only show on first message */}
          {messages.length === 1 && (
            <div style={{
              padding: '8px 16px',
              background: 'var(--white, #fff)',
              borderTop: '1px solid var(--border, #e0dcd5)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
            }}>
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr}
                  onClick={() => handleSend(qr)}
                  style={{
                    fontSize: '12px',
                    padding: '5px 10px',
                    borderRadius: '20px',
                    border: '1px solid var(--primary, #1E5B99)',
                    background: 'transparent',
                    color: 'var(--primary, #1E5B99)',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary, #1E5B99)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary, #1E5B99)'; }}
                >{qr}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '12px 16px',
            background: 'var(--white, #fff)',
            borderTop: '1px solid var(--border, #e0dcd5)',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about ROS™…"
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '24px',
                border: '1px solid var(--border, #e0dcd5)',
                fontSize: '14px',
                fontFamily: 'inherit',
                outline: 'none',
                background: 'var(--bg, #F8F5ED)',
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: input.trim() ? 'var(--primary, #1E5B99)' : 'var(--border, #e0dcd5)',
                border: 'none',
                cursor: input.trim() ? 'pointer' : 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.15s',
              }}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 8L2 2l2.5 6L2 14l12-6z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? 'Close chat' : 'Chat with Beth'}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--primary, #1E5B99)',
          border: '3px solid var(--accent, #C8A832)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.28)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'; }}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          <>
            <div style={{ color: '#fff', fontWeight: '800', fontSize: '13px', lineHeight: 1 }}>B</div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '8px', lineHeight: 1, letterSpacing: '0.5px' }}>BETH</div>
          </>
        )}
      </button>
    </>
  );
}
