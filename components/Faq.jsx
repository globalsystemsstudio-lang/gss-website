import JsonLd from './JsonLd';
import { faqPage, graph } from '../lib/schema';

/**
 * FAQ block. Renders the same markup the pages used inline, and derives the
 * FAQPage schema from the same array so the two can't drift apart.
 *
 * `path` is the page's canonical path, used to scope the schema @id.
 */
export default function Faq({ items, path, style }) {
  return (
    <>
      <div className="faq-simple" style={style}>
        {items.map((item) => (
          <div key={item.q} className="faq-simple-item">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
      <JsonLd data={graph(faqPage(items, path))} />
    </>
  );
}
