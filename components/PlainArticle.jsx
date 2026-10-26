import Link from 'next/link';
export function articleMetadata(title,description,slug){return {title,description,alternates:{canonical:`https://globalsystemsstudio.com/blog/${slug}/`},openGraph:{type:'article',title,description,url:`https://globalsystemsstudio.com/blog/${slug}/`,publishedTime:'2026-10-25'}};}
export default function PlainArticle({title,description,slug,category,answer,children}){
 const url=`https://globalsystemsstudio.com/blog/${slug}/`;
 return <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'BlogPosting',headline:title,description,url,mainEntityOfPage:{'@type':'WebPage','@id':url},datePublished:'2026-10-25',dateModified:'2026-10-25',inLanguage:'en-US',author:{'@type':'Organization',name:'Global Systems Studio',url:'https://globalsystemsstudio.com/our-story/'},publisher:{'@id':'https://globalsystemsstudio.com/#organization'}})}}/>
 <section className="article-blog-hero"><div className="container"><p className="article-blog-tag">{category}</p><h1>{title}</h1><p className="article-meta">Global Systems Studio · Published October 25, 2026</p></div></section>
 <section className="article-page"><div className="container"><div className="article-layout"><div className="article-body"><p className="answer-capsule" style={{fontSize:20,lineHeight:1.6}}>{answer}</p>{children}<p><Link href="/blog/">See more moving-abroad questions and answers →</Link></p></div></div></div></section>
 </>;
}
