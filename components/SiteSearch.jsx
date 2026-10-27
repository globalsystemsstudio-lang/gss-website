'use client';
import {useEffect, useState} from 'react';
import Link from 'next/link';
export default function SiteSearch() {
  const [query,setQuery]=useState('');
  const [pages,setPages]=useState([]);
  const [failed,setFailed]=useState(false);
  useEffect(()=>{fetch('/search-index.json').then(r=>{if(!r.ok)throw Error();return r.json();}).then(setPages).catch(()=>setFailed(true));},[]);
  const words=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results=words.length ? pages.filter(p=>words.every(w=>(p.title+' '+p.path.replaceAll('-',' ')).toLowerCase().includes(w))).slice(0,30) : [];
  return <div className="site-search"><label htmlFor="site-search">What are you looking for?</label><input id="site-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try visas, family or cost of living" /><p aria-live="polite">{failed ? 'Search is unavailable. Please try again later.' : words.length ? `${results.length} results shown` : 'Search page titles and topics.'}</p><ul>{results.map(p=><li key={p.path}><Link href={p.path}>{p.title}</Link></li>)}</ul>{words.length > 0 && !results.length && !failed && <p>Try fewer words or a different topic. You can also <Link href="/contact/">contact us</Link>.</p>}</div>;
}
