import Link from 'next/link';
export const metadata={title:'Get Help Planning Your Move Abroad',description:'Choose a free 15-minute call, written answers for $97, a 45-minute planning call for $497, or guides and online plans.',alternates:{canonical:'https://globalsystemsstudio.com/work-with-me/'}};
const options=[
 ['Free Discovery Call','Free · 15 minutes','Tell Charlene about your move and ask whether ROS™ can help. No pressure to buy.','/services/discovery-call/','See the free call'],
 ['Written Q&A','$97 USD · up to 3 questions','Send your relocation questions. Get a written reply within five business days after we receive them. No live call.','/services/async-qa/','See how written answers work'],
 ['Clarity Session','$497 USD · 45 minutes','Talk with Charlene about a difficult moving decision and your next steps. A recording and written summary follow within 48 hours.','/services/clarity-session/','See the paid planning call'],
 ['Books, workbooks and planners','Paid downloads from $19','Choose a file to download and use at your own pace. Each product explains what it helps you do.','/shop/','Browse the downloads'],
 ['Online ROS™ plans','$897–$2,497 USD, paid once','Get an online planning space in Notion with guides and tools for a set number of months. Choose by your moving situation.','/services/#pathways','Compare the six plans'],
];
export default function Page(){return <>
<section className="page-hero"><div className="container"><h1>What kind of help do you need?</h1><p>Ask a question, talk through a decision or use tools to plan at your own pace. Start with the free call if you are unsure.</p><Link href="/services/discovery-call/" className="btn btn-gold">Book a free 15-minute call →</Link></div></section>
<section><div className="container"><div className="offer-grid">{options.map(([name,price,description,url,label])=><article className="feature-card" key={name}><h2>{name}</h2><p><strong>{price}</strong></p><p>{description}</p><Link className="btn btn-outline" href={url}>{label} →</Link></article>)}</div></div></section>
<section className="section-ivory"><div className="container content-narrow"><h2>What should I know before paying?</h2><p>Online plans start after completed payment and a signed agreement. We follow up to set up access. Buying a PDF does not include an online plan. There is no required renewal.</p><p>All sales are final; no refunds. Read what is included and the <Link href="/sales-policy/">sales policy</Link> first.</p><p>You carry out your move. ROS™ provides planning help and information. Lawyers, tax advisers, government fees, movers and other moving costs are separate.</p></div></section>
</>}
