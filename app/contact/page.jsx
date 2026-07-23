export const metadata = {
  title: 'Contact — Our Team, Global Systems Studio',
  description: "Whether you're just starting to think about relocating internationally or deep in the planning process — reach out. Our team reads every message personally.",
  alternates: { canonical: 'https://www.globalsystemsstudio.com/contact/' },
};

import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>You Don't Have to Keep Carrying These Questions Alone.</h1>
          <p>Whether you're just starting to think about this, deep in the research, or somewhere in the middle of a move that's gotten more complicated than you expected — this is the right place to land. Reach out. Tell us where you are in your journey. Our team reads every message personally.</p>
        </div>
      </section>

      <section style={{background:'var(--white)', padding:'80px 0'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 340px', gap:'64px', alignItems:'start'}}>

            {/* FORM */}
            <div>
              <h2>Send a Message</h2>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                style={{marginTop:'32px', display:'flex', flexDirection:'column', gap:'24px'}}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{display:'none'}}>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div>
                  <label htmlFor="name" style={{display:'block', fontWeight:'700', marginBottom:'8px', fontSize:'15px'}}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    style={{width:'100%', padding:'13px 16px', border:'1px solid var(--border)', borderRadius:'8px', fontSize:'16px', fontFamily:'inherit', background:'var(--bg)'}}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{display:'block', fontWeight:'700', marginBottom:'8px', fontSize:'15px'}}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{width:'100%', padding:'13px 16px', border:'1px solid var(--border)', borderRadius:'8px', fontSize:'16px', fontFamily:'inherit', background:'var(--bg)'}}
                  />
                </div>

                <div>
                  <label style={{display:'block', fontWeight:'700', marginBottom:'12px', fontSize:'15px'}}>Where are you in your relocation journey?</label>
                  <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    {[
                      'Just starting to research',
                      'Decision made, planning in progress',
                      'Mid-move / transition',
                      'Already relocated, navigating life abroad',
                      "Not sure yet — I just have questions",
                    ].map((option) => (
                      <label key={option} style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', fontSize:'15px', color:'var(--text)'}}>
                        <input type="radio" name="stage" value={option} style={{accentColor:'var(--primary)'}} />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={{display:'block', fontWeight:'700', marginBottom:'8px', fontSize:'15px'}}>Tell me what's on your mind</label>
                  <p style={{fontSize:'13px', color:'var(--text-light)', marginBottom:'8px', marginTop:'-4px'}}>What are you trying to figure out? What's keeping you up at night? There's no wrong thing to say here.</p>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    style={{width:'100%', padding:'13px 16px', border:'1px solid var(--border)', borderRadius:'8px', fontSize:'16px', fontFamily:'inherit', background:'var(--bg)', resize:'vertical'}}
                  />
                </div>

                <button type="submit" className="btn btn-gold" style={{alignSelf:'flex-start', fontSize:'16px', padding:'16px 36px'}}>
                  Send Message →
                </button>
              </form>
            </div>

            {/* SIDEBAR */}
            <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
              <div style={{background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'12px', padding:'28px'}}>
                <h3 style={{marginBottom:'20px'}}>Other Ways to Connect</h3>
                <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                  <div>
                    <strong style={{display:'block', color:'var(--primary)', marginBottom:'6px'}}>Book a Clarity Session</strong>
                    <p style={{fontSize:'14px', color:'var(--text-light)', margin:'0 0 10px'}}>If you're ready to stop researching and start getting specific answers — a 30-minute 1:1 call is the fastest path there.</p>
                    <Link href="https://calendar.app.google/5GiW8EZKoyB7SqEKA" style={{fontSize:'14px', color:'var(--primary)', fontWeight:'600'}}>Book Now — $497 →</Link>
                  </div>
                  <div style={{borderTop:'1px solid var(--border)', paddingTop:'16px'}}>
                    <strong style={{display:'block', color:'var(--primary)', marginBottom:'6px'}}>Get the ROS™ Book</strong>
                    <p style={{fontSize:'14px', color:'var(--text-light)', margin:'0 0 10px'}}>If you want the full system in your hands before we talk — start here.</p>
                    <Link href="/work-with-me" style={{fontSize:'14px', color:'var(--primary)', fontWeight:'600'}}>Get the Book — $47 →</Link>
                  </div>
                  <div style={{borderTop:'1px solid var(--border)', paddingTop:'16px'}}>
                    <strong style={{display:'block', color:'var(--primary)', marginBottom:'6px'}}>Join the Community</strong>
                    <p style={{fontSize:'14px', color:'var(--text-light)', margin:'0 0 10px'}}>Ongoing support and a group of people navigating the same decisions alongside you.</p>
                    <Link href="/work-with-me" style={{fontSize:'14px', color:'var(--primary)', fontWeight:'600'}}>Join — $97/month →</Link>
                  </div>
                </div>
              </div>

              {/* NOTE FROM CHARLENE */}
              <div style={{background:'var(--primary)', borderRadius:'12px', padding:'28px'}}>
                <h3 style={{color:'var(--white)', marginBottom:'16px', fontSize:'17px'}}>A Note From Our Team</h3>
                <p style={{color:'rgba(255,255,255,0.88)', fontSize:'14px', lineHeight:'1.7', margin:0, fontStyle:'italic'}}>
                  "We built this because we needed it. We're still building it because the questions don't stop — and neither do we. If you found this site, something brought you here. You're not behind. You're not unprepared. You're asking the right questions at the right time. Reach out. Let's figure out the next step together."
                </p>
                <p style={{color:'rgba(255,255,255,0.7)', fontSize:'13px', marginTop:'16px', marginBottom:0, fontWeight:'600'}}>— Our Team, Global Systems Studio</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
