import SiteSearch from '../../components/SiteSearch';
export const metadata = {title: 'Search the website', description: 'Find moving abroad guides, tools and answers.'};
export default function SearchPage() { return <><section className="page-hero"><div className="container"><h1>Search Global Systems Studio</h1><p>Find a guide, tool, plan or answer.</p></div></section><section><div className="container"><SiteSearch /></div></section></>; }
