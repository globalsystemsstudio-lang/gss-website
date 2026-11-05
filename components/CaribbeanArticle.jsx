import Link from 'next/link';
import styles from './CaribbeanArticle.module.css';

export default function CaribbeanArticle({ title, description, path, html, contents, sources, related }) {
  const url = 'https://globalsystemsstudio.com' + path;
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: '2026-11-05',
    dateModified: '2026-11-05',
    inLanguage: 'en-US',
    author: { '@type': 'Organization', '@id': 'https://globalsystemsstudio.com/#organization', name: 'Global Systems Studio' },
    publisher: { '@id': 'https://globalsystemsstudio.com/#organization' },
    citation: sources,
  };

  return (
    <article className={styles.article}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article).replace(/</g, '\\u003c') }} />
      <header className={'article-blog-hero ' + styles.hero}>
        <div className="container">
          <Link href="/blog/#caribbean-guides" className={styles.back}>← Caribbean relocation guides</Link>
          <p className={styles.tag}>Caribbean relocation · Official sources</p>
          <h1>{title}</h1>
          <p className="article-meta">Global Systems Studio · Published <time dateTime="2026-11-05">November 5, 2026</time></p>
          <p className={styles.checked}>Facts checked November 5, 2026. Confirm current intake and your eligibility with the responsible authority before applying.</p>
        </div>
      </header>
      <section className="article-page">
        <div className="container">
          <div className={styles.layout}>
            <div className={'article-body ' + styles.body} dangerouslySetInnerHTML={{ __html: html }} />
            <aside className={styles.sidebar} aria-label="Article navigation">
              <nav aria-label="On this page">
                <h2>On this page</h2>
                <ul>{contents.map(item => <li key={item.id}><a href={'#' + item.id}>{item.title}</a></li>)}</ul>
              </nav>
              <div className={styles.next}>
                <h2>Plan your next step</h2>
                <p>Compare the six ROS™ pathways by need, price, access period and inclusions.</p>
                <Link href="/pricing-explorer/" className="btn btn-gold">Compare pathways</Link>
              </div>
            </aside>
          </div>
          <nav className={styles.related} aria-label="Related Caribbean guides">
            <h2>Continue your Caribbean research</h2>
            <div className="blog-grid">{related.map(item => <Link className="blog-card" href={item.path} key={item.path}><h3>{item.title}</h3><span className="blog-card-link">Read the guide →</span></Link>)}</div>
          </nav>
        </div>
      </section>
    </article>
  );
}
