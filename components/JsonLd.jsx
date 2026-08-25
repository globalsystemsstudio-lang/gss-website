/**
 * Emits a schema.org graph as JSON-LD.
 *
 * `<` is escaped so a stray sequence in page copy can't close the script tag
 * early — the JSON itself stays valid, since < is a legal JSON escape.
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
