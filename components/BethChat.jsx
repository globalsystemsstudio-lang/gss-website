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
  if (/community|membership|podcast|episode/.test(q)) return {
    text: "The community is not open. You can use the free call, quiz, cost calculator or Five Questions guide.",
    link: { href: '/services/#free', label: 'Explore the free starting points →' },
  };
  if (/support|missing|receipt|order|delivery|did.*receive/.test(q)) return {
    text: "Check the email address on your PayPal order, including spam. Still missing your purchase email? Contact globalsystemsstudio@gmail.com with your order reference. Please do not email passports or financial statements.",
    link: { href: '/contact/', label: 'Contact Global Systems Studio →' },
  };
  if (/family|couple|children|kids/.test(q)) return {
    text: "Family Edition costs $1,197 USD once. You get nine months of online access for two people, guides and checklists for family moves, email support and one written Q&A. You do the research and carry out the move using the tools.",
    link: { href: '/family-relocation/', label: 'See Family Edition →' },
  };
  if (/how.*(use|work)|what.*(get|buy|receive)|included/.test(q)) return {
    text: "An online plan gives you a planning space in Notion, guides and checklists. Start with the guide, work through the checklist and research the questions for your move. The extras and access period depend on the plan you choose.",
    link: { href: '/services/', label: 'See what each plan includes →' },
  };
  if (/renew|access|dashboard/.test(q)) return {
    text: "The dashboard is your online planning space in Notion. Solo and Digital Nomad: 6 months. Family and Entrepreneur: 9 months. Legacy and Investor: 12 months. Family includes two users. Access starts after you pay and sign the agreement. Renewal is optional.",
    link: { href: '/services/#pathways', label: 'Compare access and renewal prices →' },
  };
  if (/async|q&a|written questions/.test(q)) return {
    text: "Written Q&A costs $97. Send up to three relocation questions. Get a written reply within five business days after we receive them. No call needed.",
    link: { href: '/services/async-qa/', label: 'See Async Q&A details →' },
  };
  if (/workbook|planner|organizer|matrix/.test(q)) return {
    text: "Workbooks and planners are PDF files you download and use yourself. They start at $19. They do not include access to an online ROS™ plan.",
    link: { href: '/shop/', label: 'Browse the paid tools →' },
  };
  if (/free guide|five questions|^free$|what.*free|free (offer|tool)/.test(q)) return {
    text: "Five Questions Before Moving Abroad is free. Read or download it without giving an email address. Email delivery is optional.",
    link: { href: '/shop/five-questions/', label: 'Read the free guide →' },
  };
  if (/cost.?of.?living|calculator|compare.*cost/.test(q)) return {
    text: "The free calculator helps you compare estimated living costs. Use it as a starting point, then check real costs for your own move.",
    link: { href: '/cost-of-living-calculator/', label: 'Try the free calculator →' },
  };
  if (/quiz|readiness|am i ready|prepared/.test(q)) return {
    text: "Take the free 12-question quiz to see which parts of your move need more work. You can see your score first. An email address is needed for the full breakdown.",
    link: { href: '/relocation-readiness-quiz/', label: 'Take the free quiz →' },
  };
  if (/price|cost|how much|pricing|pay|afford|expensive/.test(q)) return {
    text: "Online plans, paid once in USD: Solo $897; Digital Nomad $897; Family $1,197; Entrepreneur $1,597; Legacy $1,997; Investor $2,497. Each includes a set access period. Books and workbooks start at $19. The Discovery Call is free.",
    link: { href: '/services/', label: 'See plans and prices →' },
  };
  if (/right for me|who.*for|tier|pathway|my situation|qualify|fit/.test(q)) return {
    text: "Choose by your situation: Solo for moving alone; Family for moving together; Digital Nomad for remote work; Entrepreneur for business owners; Legacy for long-term plans; Investor for investment and property research. See what each includes below.",
    link: { href: '/services/', label: 'Compare the online plans →' },
  };
  if (/new roots|book|across streets|download|written|library/.test(q)) return {
    text: "New Roots is $27. Across Streets & Seas is $47. Both together cost $64. These are books you download, separate from the online plans.",
    link: { href: '/shop/', label: 'Browse guides and workbooks →' },
  };
  if (/clarity|session|1.?1|one.on.one/.test(q)) return {
    text: "The Clarity Session is a private 45-minute call with Charlene for $497. Talk through your move and next steps. A recording and written summary follow within 48 hours. Unsure? Start with the free 15-minute call.",
    link: { href: '/services/clarity-session/', label: 'See the Clarity Session →' },
  };
  if (/start|begin|call|consult|appointment|coach/.test(q)) return {
    text: "Book a free 15-minute call to talk about your move and whether ROS™ can help. No pressure to buy.",
    link: { href: 'https://calendar.app.google/5GiW8EZKoyB7SqEKA', label: 'Book a free Discovery Call →', external: true },
  };
  if (/legal|visa|document|passport|apostille|residency|citizenship/.test(q)) return {
    text: "ROS™ has guides to help you research visa and moving requirements. A licensed professional must confirm the rules for your country and situation.",
    link: { href: '/visa-residency-pathways/', label: 'Explore visa and residency planning →' },
  };
  if (/financ|money|tax|social security|fbar|bank|invest|income/.test(q)) return {
    text: "ROS™ helps you organize questions about banking, taxes and keeping your income going. Ask a qualified professional for advice before making legal, tax or investment decisions.",
    link: { href: '/relocation-financial-planning/', label: 'Explore financial planning →' },
  };
  if (/what is ros|module|system|health|hous|family|retire|business|work|remote/.test(q)) return {
    text: "ROS™ is a set of guides, checklists and online planning tools for moving abroad. Use it to organize questions about where to live, money, housing, healthcare, work and family. Choose the plan that fits your move.",
    link: { href: '/what-is-ros/', label: 'See what you get →' },
  };
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(q)) return {
    text: "Hi! I’m Beth. I can help you find ROS™ prices, tools and the free call. What would you like to know?",
  };
  return {
    text: "I can help with ROS™ prices, what is included and how to start. For questions about your own move, book a free 15-minute call.",
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
          maxHeight: 'calc(100dvh - 112px)',
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
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px' }}>Automated ROS™ guide</div>
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
