export const verifiedDate = 'October 24, 2026';
export const siteOrigin = 'https://globalsystemsstudio.com';
export const commonFeatures = [
  'ROS™ Framework onboarding guide',
  'Destination Hub and intelligence library',
  'Immigration & visa pathway guide',
  'Housing research guide',
  'Healthcare & medical navigation guide',
  'Tax residency overview by destination',
  'Attorney & realtor directory',
  'Cost of living comparison tool',
  'Banking & payment setup guide',
  'Wellness guide',
  'Post-arrival guide',
  'AI document review for contracts'
];
export const tiers = [
  {
    id:'solo', name:'Solo', label:'Independent moves', price:897, months:6, renewal:247,
    url:'/services/ros-solo-pathway/', icon:'luggage', base:'nomad',
    intro:'A fresh start, with a plan built around you.',
    persona:'Individuals relocating independently for lifestyle, opportunity, or a fresh start abroad.',
    highlights:['Personalized destination matching','Relocation timeline & master checklist','1 Async Q&A session + priority email support'],
    additions:['Personalized destination matching','Relocation timeline & master checklist','Housing & neighborhood research guide','1 Async Q&A session (stated value: $97)','Priority email support'],
    reason:'You are planning an independent move and want a personal destination match, timeline, and written Q&A support.'
  },
  {
    id:'family', name:'Family', fullName:'Family Edition', label:'Moving together', price:1197, months:9, renewal:347,
    url:'/services/ros-family-edition-pathway/', icon:'home', base:'solo',
    intro:'One coordinated plan for everyone coming with you.',
    persona:'Families relocating with children, dependents, or a spouse, including couples who need a shared plan.',
    highlights:['Dual dashboard access for 2 users','School & childcare research guide','Family-specific timelines & destination profiles'],
    additions:['Dual dashboard access (2 users)','School & childcare research guide','Family housing & neighborhood checklist','Family relocation timeline & checklist','Family-specific destination profiles'],
    reason:'You are coordinating a household move. Family adds two-user dashboard access and family, school, and childcare planning.'
  },
  {
    id:'legacy', name:'Legacy', label:'Your next chapter', price:1997, months:12, renewal:497,
    url:'/services/ros-legacy-pathway/', icon:'sun', base:'entrepreneur',
    intro:'Build a lasting home for your next chapter.',
    persona:'Established professionals and next-chapter movers building long-term international presence, residency, or a second home.',
    highlights:['Long-term residency & citizenship planning','Estate & asset protection overview','Multi-destination strategy + policy updates'],
    additions:['Long-term residency & citizenship pathway planning','Estate & asset protection overview','Multi-destination strategy framework','Priority dashboard support','Quarterly destination policy updates','Exclusive Legacy member resources'],
    reason:'Your priority is long-term residency, a second home, or a lasting international presence. Legacy adds estate and multi-destination planning.'
  },
  {
    id:'nomad', name:'Digital Nomad', label:'Work from anywhere', price:897, months:6, renewal:197,
    url:'/services/ros-digital-nomad-pathway/', icon:'laptop',
    intro:'Turn location-independent work into a workable life abroad.',
    persona:'Location-independent professionals relocating on remote-work or freelance visas.',
    highlights:['Remote-work & freelance visa planning','Banking & payment setup guide','Tax residency overview by destination'],
    additions:[],
    reason:'You earn remotely or freelance and need the visa, banking, healthcare, and tax-residency planning foundation for work abroad.'
  },
  {
    id:'entrepreneur', name:'Entrepreneur', label:'Business across borders', price:1597, months:9, renewal:397,
    url:'/services/ros-entrepreneur-pathway/', icon:'briefcase', base:'solo',
    intro:'Move your life and your business with a connected plan.',
    persona:'Business owners and founders establishing operations, clients, or a base of operations abroad.',
    highlights:['Business registration & entity roadmap','Banking & merchant services guidance','Business tax treaties & vendor sourcing'],
    additions:['Business registration roadmap by destination','Entity structure guidance','Banking & merchant services for entrepreneurs','Contractor & vendor sourcing guide','Tax treaty overview for business owners','Entrepreneur-specific destination profiles'],
    reason:'You own or are establishing a business abroad. Entrepreneur adds business structure, registration, merchant services, and operating resources.'
  },
  {
    id:'investor', name:'Investor', label:'Capital & residency', price:2497, months:12, renewal:597,
    url:'/services/ros-investor-pathway/', icon:'chart', base:'legacy',
    intro:'Make your next move with capital and context in view.',
    persona:'Investors exploring residency-by-investment, real estate acquisition, or international portfolio diversification.',
    highlights:['Investment visa & property acquisition guides','Offshore banking & wealth protection overview','Dedicated 1-hour strategy session'],
    additions:['Investment visa & Golden Visa pathway guide','Real estate acquisition guide by destination','Offshore banking & wealth protection overview','Investor-specific destination deep dives','Exclusive Investor member resources','Dedicated 1-hour strategy session'],
    reason:'Investment, property acquisition, or investment-linked residency is central to your move. Investor adds specialist planning resources and a one-hour strategy session.'
  }
];
export const getTier = id => tiers.find(t => t.id === id);
export function featureGroups(id) {
  const t=getTier(id);
  const inherited=t.base ? featureGroups(t.base) : [{title:'The ROS™ foundation', features:commonFeatures}];
  return t.additions.length ? [...inherited,{title:`Added with ${t.name}`,features:t.additions}] : inherited;
}
export function includes(id, feature) {
  return featureGroups(id).some(g=>g.features.some(f=>f.includes(feature)));
}
export const compareRows = [
  {label:'One-time price · USD', value:t=>money(t.price)},
  {label:'Initial dashboard access', value:t=>`${t.months} months${t.id==='family'?' · 2 users':''}`},
  {label:'Who it is for',value:t=>t.persona},
  {label:'ROS™ foundation resources',value:()=>true},
  {label:'Personalized destination matching',value:t=>includes(t.id,'Personalized destination')},
  {label:'1 Async Q&A + priority email support',value:t=>includes(t.id,'Async Q&A')},
  {label:'School, childcare & family resources',value:t=>t.id==='family'},
  {label:'Business & entity planning resources',value:t=>includes(t.id,'Business registration')},
  {label:'Estate & multi-destination planning',value:t=>includes(t.id,'Multi-destination')},
  {label:'Investment & property acquisition guides',value:t=>t.id==='investor'},
  {label:'Dedicated 1-hour strategy session',value:t=>t.id==='investor'},
  {label:'Optional dashboard renewal · USD',value:t=>money(t.renewal)}
];
export const freeOffers = [
  {name:'Discovery Call', label:'15 minutes · no obligation', icon:'chat',description:'Talk through your situation and whether ROS™ is the right fit. No pressure, no pitch.',url:'/services/discovery-call/',cta:'Explore the free call'},
  {name:'Readiness Quiz', label:'About 3 minutes', icon:'checklist',description:'Get a starting view of your financial, compliance, and practical relocation readiness.',url:'/relocation-readiness-quiz/',cta:'Take the free quiz'},
  {name:'Cost of Living Calculator', label:'Explore your budget', icon:'calculator',description:'Compare estimated living costs with your monthly budget for a destination abroad.',url:'/cost-of-living-calculator/',cta:'Try the free calculator'},
  {name:'Five Questions Before Moving Abroad', label:'Free introductory guide', icon:'book',description:'Start with five questions to help you think through whether your relocation plan will work.',url:'/shop/five-questions/',cta:'Get the free guide'}
];
export const money = n => '$'+n.toLocaleString('en-US');

export const payments = {solo:'LZG74BNVGZXAW', family:'3GC8BCWM3US32', nomad:'BRD4QKEHJHGZ2', entrepreneur:'P3AMQZ5F9Q7RG', legacy:'YDX8FGBSDCKNL', investor:'GYEMFHNNLLWGW'};
export const workflowStages = [
  ['I', 'Strategic Alignment & Jurisdiction Selection', 'Decide where and why before taking action.'],
  ['II', 'Legal & Structural Foundations', 'Confirm legal standing and the structures your move requires.'],
  ['III', 'Financial & Infrastructure Deployment', 'Prepare banking, money and essential systems before leaving.'],
  ['IV', 'Asset Transition & Physical Relocation', 'Coordinate assets, documents and the physical move.'],
  ['V', 'Governance & Systems Control', 'Keep decisions, responsibilities and deadlines organized.'],
  ['VI', 'Deployment, Stabilization & Continuity', 'Settle in and maintain the systems needed for daily life.'],
  ['VII', 'Income Continuity & Financial Sustainability', 'Review income, ongoing obligations and a sustainable plan.'],
];
