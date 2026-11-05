export const links = {
  call: 'https://globalsystemsstudio.com/services/discovery-call/',
  quiz: 'https://globalsystemsstudio.com/relocation-readiness-quiz/',
  calculator: 'https://globalsystemsstudio.com/cost-of-living-calculator/',
  policy: 'https://globalsystemsstudio.com/sales-policy/'
};
export const core = [
  'A start-here guide to the ROS™ framework',
  'Destination Hub and country research library',
  'Visa and immigration research guide',
  'Housing research guide',
  'Healthcare and insurance research guide',
  'Country tax questions to discuss with a professional',
  'Attorney and real estate agent directory',
  'Cost of living comparison tool',
  'Banking and payments setup guide',
  'Relocation wellness and stress-management tools',
  'Settling-in guide for life after arrival',
  'AI contract review tools (not a lawyer’s review)'
];
export const extras = {
  solo: ['Personalized help matching destinations to your needs', 'Moving timeline and master checklist', 'Housing and neighborhood research', 'One written Q&A covering up to three questions', 'Priority email support'],
  family: ['Online planning access for two users', 'School and childcare research guide', 'Family housing and neighborhood checklist', 'Shared family moving timeline and checklist', 'Family-focused destination profiles'],
  entrepreneur: ['Business registration research roadmap', 'Business structure questions and guidance', 'Business banking and payment services guide', 'Contractor and supplier research guide', 'Business tax treaty overview', 'Destination profiles for business owners'],
  legacy: ['Long-term residency and citizenship planning guides', 'Estate and asset-protection overview', 'Framework for planning across countries', 'Priority dashboard support', 'Quarterly destination policy updates', 'Additional Legacy planning resources'],
  investor: ['Investment and Golden Visa research guide', 'Country-specific property purchase research', 'Offshore banking and wealth-protection overview', 'Detailed destination research for investors', 'Additional Investor planning resources', 'One private 1-hour strategy session']
};
export const plans = [
  {id:'solo', name:'Solo', label:'YOUR INDEPENDENT MOVE', price:897, months:6, renewal:247, icon:'compass', persona:'For a fresh start, on your own terms.', need:'An individual planning a move abroad for lifestyle, work or a new chapter.', tags:['solo'], groups:['solo'], highlights:['Personalized destination matching','Moving timeline and master checklist','One written Q&A + priority email'], paypal:'LZG74BNVGZXAW', slug:'ros-solo-pathway'},
  {id:'family', name:'Family', fullName:'Family Edition', label:'YOUR MOVE, TOGETHER', price:1197, months:9, renewal:347, icon:'home', persona:'For couples and families moving together.', need:'A couple or household coordinating a move, with shared decisions and family needs.', tags:['family'], groups:['solo','family'], highlights:['Online access for two people','School and childcare research','Family housing and shared timeline'], paypal:'3GC8BCWM3US32', slug:'ros-family-edition-pathway'},
  {id:'legacy', name:'Legacy', label:'YOUR LONG-TERM CHAPTER', price:1997, months:12, renewal:497, icon:'tree', persona:'For a lasting home and presence abroad.', need:'Long-term residency, a second home, estate questions or a plan across several countries.', tags:['legacy','business'], groups:['solo','entrepreneur','legacy'], highlights:['Long-term residency and citizenship','Estate and asset-planning overviews','Multi-country planning + policy updates'], paypal:'YDX8FGBSDCKNL', slug:'ros-legacy-pathway'},
  {id:'nomad', name:'Digital Nomad', label:'YOUR LOCATION-INDEPENDENT LIFE', price:897, months:6, renewal:197, icon:'laptop', persona:'For remote workers and freelancers.', need:'A location-independent professional researching life abroad while working remotely.', tags:['nomad'], groups:[], highlights:['Remote-work and visa research','Banking and payments setup','Tax, housing and healthcare guides'], paypal:'BRD4QKEHJHGZ2', slug:'ros-digital-nomad-pathway'},
  {id:'entrepreneur', name:'Entrepreneur', label:'YOUR BUSINESS, ABROAD', price:1597, months:9, renewal:397, icon:'briefcase', persona:'For founders taking their business abroad.', need:'A business owner starting or running operations abroad while coordinating a personal move.', tags:['business'], groups:['solo','entrepreneur'], highlights:['Business setup and structure guides','Business banking and payments','Suppliers and business tax questions'], paypal:'P3AMQZ5F9Q7RG', slug:'ros-entrepreneur-pathway'},
  {id:'investor', name:'Investor', label:'YOUR NEXT INVESTMENT', price:2497, months:12, renewal:597, icon:'building', persona:'For property and investment-led moves.', need:'Researching property, investment-related residency, international banking and assets.', tags:['investment','legacy','business'], groups:['solo','entrepreneur','legacy','investor'], highlights:['Investment visa and property guides','Banking and asset-protection overviews','One private 1-hour strategy session'], paypal:'GYEMFHNNLLWGW', slug:'ros-investor-pathway'}
];
export const money = amount => '$' + amount.toLocaleString('en-US');
export function filterPlans({need='all',budget=Infinity,access=0}={}) {
  return plans.filter(p=>(need==='all'||p.tags.includes(need))&&p.price<=Number(budget)&&p.months>=Number(access));
}
export function recommend({goal,household,stage}) {
  const id = ({general:household==='together'?'family':'solo',nomad:'nomad',business:'entrepreneur',legacy:'legacy',investment:'investor'})[goal] || (household==='together'?'family':'solo');
  return {plan:plans.find(p=>p.id===id), secondary:household==='together'&&id!=='family'?'family':null, action:stage==='early'?'quiz':stage==='ready'?'details':'call'};
}
export const comparisonRows = [
  {label:'One-time price · USD',value:p=>money(p.price)},
  {label:'Initial dashboard access',value:p=>p.months+' months'},
  {label:'Relocation need',value:p=>p.need},
  {label:'Core guides and research tools',value:()=>true},
  {label:'Personalized destination matching',value:p=>p.groups.includes('solo')},
  {label:'Moving timeline and checklist',value:p=>p.groups.includes('solo')},
  {label:'Written Q&A + priority email',value:p=>p.groups.includes('solo')},
  {label:'Two-user dashboard access',value:p=>p.id==='family'},
  {label:'School, childcare and family tools',value:p=>p.id==='family'},
  {label:'Business setup and banking guides',value:p=>p.groups.includes('entrepreneur')},
  {label:'Estate and multi-country planning',value:p=>p.groups.includes('legacy')},
  {label:'Priority dashboard + policy updates',value:p=>p.groups.includes('legacy')},
  {label:'Investment and property guides',value:p=>p.id==='investor'},
  {label:'Private 1-hour strategy session',value:p=>p.id==='investor'},
  {label:'Optional renewal · USD',value:p=>money(p.renewal)}
];
