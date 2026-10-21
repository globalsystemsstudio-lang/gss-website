'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const QUICK_REPLIES = [
  'What is ROS™?',
  'How much does it cost?',
  'Is this right for me?',
  'Cost of living calculator',
  'Am I ready to relocate?',
];

function getBethResponse(input) {
  const q = input.toLowerCase().trim();
  if (/cost.?of.?living|calculator|compare.*cost/.test(q)) return {
    text: "Use our free Cost of Living Calculator to compare estimated living costs. These are planning estimates; confirm your own housing, healthcare, and other costs before committing to a move.",
    link: { href: '/cost-of-living-calculator/', label: 'Try the free calculator →' },
  };
  if (/quiz|readiness|am i ready|prepared/.test(q)) return {
    text: "The free Relocation Readiness Quiz asks 12 questions about financial compliance and practical logistics. You can see your score after the questions; an email address is required for the full breakdown and recommendation.",
    link: { href: '/relocation-readiness-quiz/', label: 'Take the free quiz →' },
  };
  if (/price|cost|how much|pricing|pay|afford|expensive/.test(q)) return {
    text: "Current options include:\n\n**Free Discovery Call** — 15 minutes.\n**New Roots — $27** — foundational digital guide.\n**Across Streets & Seas — $47** — companion guide.\n**Both books — $64** — Relocation Library.\n**Async Q&A — $97** — up to three written questions.\n**Clarity Session — $497** — 45-minute call.\n\nROS™ Pathways: **Solo $897**, **Digital Nomad $897**, **Family $1,197**, **Entrepreneur $1,597**, **Legacy $1,997**, **Investor $2,497**. Pathways are one-time purchases with a stated access period; renewals are optional.",
    link: { href: '/services/', label: 'Compare pathways and prices →' },
  };
  if (/right for me|who.*for|tier|pathway|my situation|qualify|fit/.test(q)) return {
    text: "ROS™ has six pathways: **Solo Relocator**, **Family Edition**, **Digital Nomad**, **Entrepreneur**, **Legacy**, and **Investor**. Each organizes relocation decisions around that situation. New Roots and Across Streets & Seas are books, separate from the six pathways.",
    link: { href: '/services/', label: 'Find your pathway →' },
  };
  if (/new roots|book|across streets|download|written|library/.test(q)) return {
    text: "**New Roots — $27** is the foundational guide for deciding what to organize first. **Across Streets & Seas — $47** is the deeper companion. The **Relocation Library — $64** includes both books as digital downloads.",
    link: { href: '/shop/', label: 'Browse guides and workbooks →' },
  };
  if (/clarity|session|1.?1|one.on.one/.test(q)) return {
    text: "The **Clarity Session is $497 for 45 minutes** focused on your situation and next steps. If you are unsure whether it fits, start with the free 15-minute Discovery Call.",
    link: { href: '/services/clarity-session/', label: 'See the Clarity Session →' },
  };
  if (/start|begin|call|consult|appointment|coach/.test(q)) return {
    text: "Start with **New Roots ($27)** for a foundational guide, or book a **free 15-minute Discovery Call** to discuss which available option fits your move. Calls are scheduled through Google Calendar.",
    link: { href: 'https://calendar.app.google/5GiW8EZKoyB7SqEKA', label: 'Book a free Discovery Call →', external: true },
  };
  if (/legal|visa|document|passport|apostille|residency|citizenship/.test(q)) return {
    text: "ROS™ helps organize visa, residency, and documentation questions in sequence. Requirements depend on your destination and situation. Confirm legal and immigration decisions with a licensed professional.",
    link: { href: '/visa-residency-pathways/', label: 'Explore visa and residency planning →' },
  };
  if (/financ|money|tax|social security|fbar|bank|invest|income/.test(q)) return {
    text: "ROS™ helps you organize banking, income continuity, and cross-border reporting questions before you move. It provides planning and educational support; consult a qualified tax or financial professional for advice about your situation.",
    link: { href: '/relocation-financial-planning/', label: 'Explore financial planning →' },
  };
  if (/what is ros|module|system|health|hous|family|retire|business|work|remote/.test(q)) return {
    text: "ROS™ is the **Relocation Operating System**: seven planning areas covering legal and documentation, finances, housing, healthcare, business and income, family, and long-term stability. Six pathways organize those decisions around your move. It is educational and planning support, not legal, tax, immigration, investment, or medical advice.",
    link: { href: '/what-is-ros/', label: 'Explore the system →' },
  };
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(q)) return {
    text: "Hi! I'm Beth, Global Systems Studio's guide to ROS™. I can help you find current pathways, prices, guides, free tools, and a Discovery Call. What are you looking for?",
  };
  return {
    text: "For a question specific to your move, a free 15-minute Discovery Call can help identify your next step. You can also explore our current pathways, guides, and free tools.",
    link: { href: '/services/discovery-call/', label: 'See the free Discovery Call →' },
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
