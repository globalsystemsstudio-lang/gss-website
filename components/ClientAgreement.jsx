'use client';
import { useEffect, useRef, useState } from 'react';
import { AGREEMENT_VERSION, AGREEMENT_URL, agreementPlans, agreementSections, agreementText } from '../lib/client-agreement';

export default function ClientAgreement() {
  const [planId, setPlanId] = useState('');
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const [record, setRecord] = useState(null);
  const reference = useRef(null);
  const plan = agreementPlans.find(p=>p.id===planId);
  useEffect(()=>{
    setReady(true);
    const id = new URLSearchParams(window.location.search).get('plan');
    if (agreementPlans.some(p=>p.id===id)) setPlanId(id);
  },[]);
  function download(text,filename) {
    const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
    const a=document.createElement('a'); a.href=url; a.download=filename; a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  async function submit(e) {
    e.preventDefault(); if(busy) return;
    const form=e.currentTarget;
    if(!form.reportValidity() || !plan) return;
    const fields=new FormData(form);
    if(String(fields.get('customer_name')).trim().length<2 || String(fields.get('signature')).trim().length<2){setError('Enter your full name and your typed signature.');return;}
    if(String(fields.get('signature')).trim().toLocaleLowerCase()!==String(fields.get('customer_name')).trim().toLocaleLowerCase()){setError('Your typed signature must match your full name.');return;}
    if(!reference.current) reference.current=`ROS-${crypto.randomUUID()}`;
    fields.set('submission_reference',reference.current);
    fields.set('client_signed_at',new Date().toISOString());
    fields.set('plan_name',plan.name); fields.set('price_usd',String(plan.price));
    fields.set('access_months',String(plan.months)); fields.set('users',String(plan.users));
    fields.set('terms_copy',agreementText);
    const copy=[agreementText,'','CUSTOMER ACCEPTANCE',...Array.from(fields.entries()).filter(([k])=>!['terms_copy','bot-field','form-name','subject'].includes(k)).map(([k,v])=>`${k}: ${v}`),'','GSS must verify the paid order and coordinate access. This record is not proof of payment.'].join('\n');
    setError('');setBusy(true);
    try {
      const response=await fetch('/__forms.html',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(fields).toString()});
      if(!response.ok) throw new Error('not-accepted');
      setRecord({reference:reference.current,copy});
    } catch {setError('We could not confirm your submission. Your entries are still here. Please try again or contact globalsystemsstudio@gmail.com with your order reference.');}
    finally {setBusy(false);}
  }
  return <div className="gss-agreement">
    <p className="offer-label">Version {AGREEMENT_VERSION}</p>
    <p>Use this page after buying a ROS™ pathway. Choose the plan on your receipt, read the terms, then sign below. No payment is collected here.</p>
    <p><a href={AGREEMENT_URL} download>Download the complete agreement and plan summaries (.txt)</a></p>
    {agreementSections.map(s=><section className="gss-agreement-section" key={s.title}><h2>{s.title}</h2><p>{s.text}</p></section>)}
    <section className="gss-agreement-section"><h2>Plan summaries</h2><p>All prices below are USD and paid once. The listed months are the initial online access period.</p><div className="table-scroll"><table className="comparison-table"><thead><tr><th>Plan</th><th>One-time USD</th><th>Access</th><th>Users</th></tr></thead><tbody>{agreementPlans.map(p=><tr key={p.id}><th scope="row">{p.name}</th><td>${p.price.toLocaleString('en-US')}</td><td>{p.months} months</td><td>{p.users}</td></tr>)}</tbody></table></div></section>
    {record ? <section className="gss-agreement-result" role="status"><h2>Your agreement was submitted</h2><p>Submission reference: <strong>{record.reference}</strong></p><p>Save your copy below. GSS will check your payment and agreement, coordinate setup and follow up with your access link and dates. This confirmation does not grant access.</p><button type="button" className="btn btn-gold" onClick={()=>download(record.copy,`${record.reference}.txt`)}>Download my signed submission copy</button><p>Need a copy later? Email globalsystemsstudio@gmail.com with your order and submission references. Please avoid submitting again unless GSS asks you to correct something.</p></section> :
    <form name="ros-pathway-agreement" method="POST" action="/__forms.html" onSubmit={submit} aria-label="Sign your ROS pathway agreement">
      <input type="hidden" name="form-name" value="ros-pathway-agreement" />
      <input type="hidden" name="agreement_version" value={AGREEMENT_VERSION}/>
      <input type="hidden" name="subject" value="ROS pathway agreement received — %{submissionId}"/>
      <p hidden><label>Leave this empty <input name="bot-field" tabIndex="-1" autoComplete="off"/></label></p>
      <h2>Review and sign</h2>
      <label htmlFor="agreement-plan">Purchased pathway</label><select id="agreement-plan" name="plan_id" required value={planId} onChange={e=>setPlanId(e.target.value)}><option value="">Choose the plan on your receipt</option>{agreementPlans.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
      {plan && <div className="gss-agreement-summary"><h3>{plan.name}</h3><p>${plan.price.toLocaleString('en-US')} USD, paid once · {plan.months} months · {plan.users} user{plan.users===1?'':'s'}</p><ul>{plan.features.map(f=><li key={f}>{f}</li>)}</ul></div>}
      <label htmlFor="agreement-name">Full name</label><input id="agreement-name" name="customer_name" autoComplete="name" required minLength="2" maxLength="120"/>
      <label htmlFor="agreement-email">Email used for your PayPal order</label><input id="agreement-email" type="email" name="email" autoComplete="email" required maxLength="254"/>
      <label htmlFor="agreement-order">PayPal order or transaction reference</label><input id="agreement-order" name="order_reference" required minLength="5" maxLength="80" autoComplete="off"/>
      <p>Use the reference on your receipt. Do not enter card details or your PayPal password.</p>
      <label className="gss-agreement-check"><input type="checkbox" name="terms_accepted" value="yes" required/> <span>I have read the agreement and the selected plan’s resources, one-time price, access period and user count. I understand the sales policy and professional-service boundaries.</span></label>
      <label className="gss-agreement-check"><input type="checkbox" name="electronic_consent" value="yes" required/> <span>I can access and save the agreement in the formats provided, consent to electronic agreement records as described above, and intend my typed name to be my electronic signature.</span></label>
      <label className="gss-agreement-check"><input type="checkbox" name="verification_acknowledged" value="yes" required/> <span>I am the purchaser or am authorized to sign for this order. I understand GSS must verify payment and coordinate access; submitting this form does not grant access.</span></label>
      <label htmlFor="agreement-signature">Type your full name to sign</label><input id="agreement-signature" name="signature" required minLength="2" maxLength="120" autoComplete="off"/>
      {error && <p role="alert" className="gss-agreement-error">{error}</p>}
      <button type="submit" className="btn btn-gold" disabled={busy || !ready}>{busy?'Submitting…':'Sign and submit agreement'}</button>
      <p>No marketing subscription is created. Read our <a href="/privacy/">privacy notice</a>. For a paper alternative, contact us before signing.</p>
      <noscript><p>Electronic submission requires JavaScript. You can download the agreement above and email globalsystemsstudio@gmail.com to arrange an alternative.</p></noscript>
    </form>}
  </div>;
}
