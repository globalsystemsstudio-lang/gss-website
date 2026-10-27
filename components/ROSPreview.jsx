'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { tiers, money } from '../lib/ros-data';
import { trackEvent } from '../lib/analytics';
import styles from './ROSPreview.module.css';

const examples = {
  solo: { question: 'How do I plan a move on my own?', tasks: ['Compare places that fit your needs', 'List the documents you need to check', 'Build a moving timeline'], next: 'Choose one country to research first.' },
  family: { question: 'How do we plan a move together?', tasks: ['Compare each person’s readiness', 'List school and healthcare questions', 'Build a shared household budget'], next: 'Talk through the areas where your answers differ.' },
  legacy: { question: 'How do I plan my next chapter abroad?', tasks: ['Review income and moving costs', 'Check healthcare and insurance questions', 'List housing and residency questions'], next: 'Write down the healthcare questions to take to a professional.' },
  nomad: { question: 'Can I work remotely while living abroad?', tasks: ['Research visa and work questions', 'Review banking and payment needs', 'List tax questions for a professional'], next: 'Check the rules for your chosen destination with a qualified professional.' },
  entrepreneur: { question: 'What happens to my business when I move?', tasks: ['Research business setup questions', 'Review banking and how you take payments', 'List supplier and tax questions'], next: 'Make a list of business questions for a local professional.' },
  investor: { question: 'What should I research before investing abroad?', tasks: ['List property and ownership questions', 'Research investment-related residency', 'Prepare questions about banking and assets'], next: 'Discuss your questions with qualified legal and financial professionals.' },
};

// These samples are shortened, plain-language adaptations of GSS Notion planning pages.
const excerpts = {
  solo: { title: 'Solo pre-departure checklist', items: ['Confirm your arrival accommodation', 'Decide what to ship, sell, donate, or discard', 'Arrange shipping insurance'] },
  family: { title: 'Family readiness check', items: ['Money and budget', 'Housing and property', 'Healthcare coverage', 'Family needs'], detail: 'Two people review each area, compare their answers, and discuss any differences.' },
  legacy: { title: 'Legacy financial planning', items: ['Document your income sources', 'Estimate moving costs, including travel and deposits', 'Review retirement income questions', 'Plan a separate budget for property or other major commitments'] },
  nomad: { title: 'Japan Digital Nomad research hub', items: ['Visa and eligibility research', 'Health insurance questions', 'Internet, banking, and working arrangements'], detail: 'This destination research page brings together questions to check before working abroad.' },
  entrepreneur: { title: 'Jamaica Entrepreneur research hub', items: ['Business registration research', 'Business tax and work permit questions', 'Authorities that handle company formation and tax'], detail: 'This destination research page organizes business setup topics and official contacts.' },
  investor: { title: 'Georgia Investor research hub', items: ['Investment benchmarks', 'Visa and residency questions', 'Property, business structures, and banking research'], detail: 'This destination research page brings investment research topics together for review with qualified professionals.' },
};

export default function ROSPreview() {
  const [selected, setSelected] = useState('solo');
  useEffect(() => { trackEvent('ros_preview_view'); }, []);
  const tier = tiers.find(item => item.id === selected);
  const example = examples[selected];
  function choose(id) { setSelected(id); trackEvent('ros_preview_select', { pathway: id }); }
  function action(type) { trackEvent('ros_preview_action', { pathway: selected, action: type }); }
  return <div className={styles.page}>
    <section className={styles.wrap}>
      <p className={styles.eyebrow}>See inside ROS™</p>
      <h1>See what planning your move could look like.</h1>
      <p className={styles.intro}>Choose the plan that sounds like you. See a simple example of the questions and next steps it can help you organize.</p>
      <p className={styles.note}>These are illustrated examples with made-up situations. They are not customer results or a live view of the full dashboard.</p>
      <div className={styles.choices} aria-label="Choose a plan">{tiers.map(item => <button key={item.id} type="button" aria-pressed={selected === item.id} onClick={() => choose(item.id)}>{item.fullName || item.name}</button>)}</div>
      <div className={styles.card} aria-live="polite">
        <div className={styles.cardHead}><div><span>EXAMPLE · {tier.fullName || tier.name.toUpperCase()}</span><h2>{example.question}</h2></div><div className={styles.price}>{money(tier.price)} <small>USD once<br />{tier.months} months{tier.id === 'family' ? ' · 2 people' : ''}</small></div></div>
        <div className={styles.content}><h3>Questions to work through</h3><ul>{example.tasks.map(task => <li key={task}><span aria-hidden="true">□</span>{task}</li>)}</ul><div className={styles.next}><strong>Example next step</strong><p>{example.next}</p></div>{excerpts[selected] && <><h3>Sample from the planning materials</h3><p>Shortened and rewritten for clarity from the {excerpts[selected].title}. This is a sample, not the full dashboard.</p>{excerpts[selected].detail && <p>{excerpts[selected].detail}</p>}<ul>{excerpts[selected].items.map(item => <li key={item}><span aria-hidden="true">□</span>{item}</li>)}</ul></>}<h3>What this plan includes</h3><ul>{tier.highlights.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div>
        <div className={styles.actions}><Link href={tier.url} onClick={() => action('plan_details')}>See {tier.name} details →</Link><Link href="/services/discovery-call/" onClick={() => action('free_call')}>Explore a free 15-minute call →</Link></div>
      </div>
      <p className={styles.foot}>ROS offers planning and educational resources. For legal, tax, immigration, investment, and medical decisions, consult qualified professionals. Online plan access starts after payment and a signed agreement; GSS follows up to set up access.</p>
    </section>
  </div>;
}
