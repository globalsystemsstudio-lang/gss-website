export const verifiedDate = 'October 24, 2026';
export const siteOrigin = 'https://globalsystemsstudio.com';
export const commonFeatures = [
  'Start-here guide',
  'Country research library',
  'Guide to researching visas and moving requirements',
  'Housing research guide',
  'Guide to researching healthcare and insurance',
  'Country guides to tax questions to ask a professional',
  'Directory of lawyers and real estate agents',
  'Cost of living comparison tool',
  'Banking & payment setup guide',
  'Guide to managing the stress of moving',
  'Guide to settling in after you arrive',
  'AI help reviewing contracts (not a lawyer’s review)'
];
export const tiers = [
  {
    id:'solo', name:'Solo', label:'Independent moves', price:897, months:6, renewal:247,
    url:'/services/ros-solo-pathway/', icon:'luggage', base:'nomad',
    intro:'A fresh start, with a plan built around you.',
    persona:'People planning a move abroad on their own.',
    highlights:['Help comparing countries for your needs','Moving timeline and checklist','One written Q&A and priority email support'],
    additions:['Help comparing countries for your needs','Moving timeline and checklist','Housing & neighborhood research guide','One written Q&A: up to 3 questions (stated value: $97)','Priority email support'],
    reason:'Get help comparing countries, a moving checklist and written answers to your questions.'
  },
  {
    id:'family', name:'Family', fullName:'Family Edition', label:'Moving together', price:1197, months:9, renewal:347,
    url:'/services/ros-family-edition-pathway/', icon:'home', base:'solo',
    intro:'Plan your family’s move together.',
    persona:'Couples and families planning a move abroad together.',
    highlights:['One online planning space for 2 people','School & childcare research guide','Family timeline and country research'],
    additions:['Online planning space for 2 people','School & childcare research guide','Family housing & neighborhood checklist','Family relocation timeline & checklist','Country information for family moves'],
    reason:'Plan with one other person. Get extra help researching schools, childcare and family housing.'
  },
  {
    id:'legacy', name:'Legacy', label:'Your next chapter', price:1997, months:12, renewal:497,
    url:'/services/ros-legacy-pathway/', icon:'sun', base:'entrepreneur',
    intro:'Build a lasting home for your next chapter.',
    persona:'People planning a long-term home, residency or second home abroad.',
    highlights:['Guides to long-term residency and citizenship questions','Guides to questions about your estate and assets','Planning across countries and policy updates'],
    additions:['Guides to long-term residency and citizenship questions','Guides to questions about your estate and assets','Tools for planning across more than one country','Priority dashboard support','Quarterly destination policy updates','Extra Legacy planning resources'],
    reason:'Research a lasting home abroad, with extra guides to residency, estate and planning across countries.'
  },
  {
    id:'nomad', name:'Digital Nomad', label:'Work from anywhere', price:897, months:6, renewal:197,
    url:'/services/ros-digital-nomad-pathway/', icon:'laptop',
    intro:'Plan your move while working remotely.',
    persona:'Remote workers and freelancers planning to live abroad.',
    highlights:['Guides to remote-work and freelance visa questions','Banking & payment setup guide','Country guides to tax questions to ask a professional'],
    additions:[],
    reason:'Research the visa, banking, healthcare and tax questions that come with working abroad.'
  },
  {
    id:'entrepreneur', name:'Entrepreneur', label:'Moving your business', price:1597, months:9, renewal:397,
    url:'/services/ros-entrepreneur-pathway/', icon:'briefcase', base:'solo',
    intro:'Plan your move and your business together.',
    persona:'Business owners planning to run or start a business abroad.',
    highlights:['Guides to business setup and registration','Guides to business banking and taking payments','Business tax questions and finding suppliers'],
    additions:['Guide to researching business registration by country','Guide to business structure questions','Guide to business banking and taking payments','Guide to finding contractors and suppliers','Guide to tax treaty questions for business owners','Country information for business owners'],
    reason:'Get extra guides for business setup, banking, suppliers and tax questions to discuss with professionals.'
  },
  {
    id:'investor', name:'Investor', label:'Investing and moving', price:2497, months:12, renewal:597,
    url:'/services/ros-investor-pathway/', icon:'chart', base:'legacy',
    intro:'Research your move and investment questions together.',
    persona:'People researching investments, property or investment-related residency abroad.',
    highlights:['Guides to investment visas and buying property','Guides to banking abroad and protecting assets','One private 1-hour planning call'],
    additions:['Guide to investment visa and Golden Visa questions','Guide to researching property purchases by country','Guides to banking abroad and protecting assets','Detailed country research for investors','Extra Investor planning resources','One private 1-hour planning call'],
    reason:'Get extra investment and property research guides, plus one private 1-hour planning call.'
  }
];
export const getTier = id => tiers.find(t => t.id === id);
export function featureGroups(id) {
  const t=getTier(id);
  const inherited=t.base ? featureGroups(t.base) : [{title:'Guides included in every plan', features:commonFeatures}];
  return t.additions.length ? [...inherited,{title:`Added with ${t.name}`,features:t.additions}] : inherited;
}
export function includes(id, feature) {
  return featureGroups(id).some(g=>g.features.some(f=>f.includes(feature)));
}
export const compareRows = [
  {label:'One-time price · USD', value:t=>money(t.price)},
  {label:'How long you can use the online plan', value:t=>`${t.months} months${t.id==='family'?' · 2 users':''}`},
  {label:'Who it is for',value:t=>t.persona},
  {label:'Core planning guides',value:()=>true},
  {label:'Help comparing countries for your needs',value:t=>t.id !== 'nomad'},
  {label:'Written Q&A and priority email support',value:t=>t.id !== 'nomad'},
  {label:'School, childcare and family guides',value:t=>t.id==='family'},
  {label:'Business setup guides',value:t=>['entrepreneur','legacy','investor'].includes(t.id)},
  {label:'Estate and multi-country planning guides',value:t=>['legacy','investor'].includes(t.id)},
  {label:'Investment and property research guides',value:t=>t.id==='investor'},
  {label:'One private 1-hour planning call',value:t=>t.id==='investor'},
  {label:'Optional renewal · USD',value:t=>money(t.renewal)}
];
export const freeOffers = [
  {name:'Discovery Call', label:'15 minutes · no obligation', icon:'chat',description:'Talk about your move and ask whether ROS™ can help. No pressure to buy.',url:'/services/discovery-call/',cta:'Explore the free call'},
  {name:'Readiness Quiz', label:'About 3 minutes', icon:'checklist',description:'Answer questions to see which parts of your move need more work.',url:'/relocation-readiness-quiz/',cta:'Take the free quiz'},
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
