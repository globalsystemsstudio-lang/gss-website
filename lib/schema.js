/**
 * Shared schema.org node builders.
 *
 * Everything references the same @id values so crawlers resolve one
 * Organization and one WebSite across the whole site rather than a new copy per
 * page. Only the Organization and WebSite nodes are emitted in the layout; page
 * types reference them by @id.
 */

export const ORIGIN = 'https://www.globalsystemsstudio.com';

export const ORG_ID = `${ORIGIN}/#organization`;
export const SITE_ID = `${ORIGIN}/#website`;

export const url = (path = '/') => `${ORIGIN}${path}`;

export const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Global Systems Studio',
  legalName: 'CC Transaction Services, LLC',
  url: ORIGIN,
  slogan: 'Not inspiration. Infrastructure.',
  description:
    'ROS™ — the Relocation Operating System — is the step-by-step infrastructure for U.S. persons relocating internationally.',
  logo: {
    '@type': 'ImageObject',
    '@id': `${ORIGIN}/#logo`,
    url: url('/icon'),
    width: 512,
    height: 512,
    caption: 'Global Systems Studio',
  },
  image: { '@id': `${ORIGIN}/#logo` },
  areaServed: { '@type': 'Place', name: 'Worldwide' },
  knowsAbout: [
    'International relocation',
    'Expatriate residency and visa pathways',
    'Cross-border financial planning for U.S. persons',
    'FBAR and FATCA compliance',
    'Foreign Earned Income Exclusion',
    'International health insurance',
    'Cross-border estate planning',
    'Digital nomad visas',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: url('/contact/'),
    availableLanguage: ['en'],
  },
};

export const website = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: ORIGIN,
  name: 'Global Systems Studio',
  description:
    'The step-by-step infrastructure for U.S. persons relocating internationally. Seven modules. Six tiers. Real answers.',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-US',
};

/** Trail of ancestors, excluding the current page — that item is appended here. */
export function breadcrumbs(trail, current) {
  const items = [{ name: 'Home', path: '/' }, ...trail, current];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url(current.path)}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: url(item.path),
    })),
  };
}

export function faqPage(items, path) {
  return {
    '@type': 'FAQPage',
    '@id': `${url(path)}#faq`,
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function blogPosting({ path, headline, description, datePublished, dateModified, section }) {
  return {
    '@type': 'BlogPosting',
    '@id': `${url(path)}#article`,
    isPartOf: { '@id': SITE_ID },
    mainEntityOfPage: url(path),
    url: url(path),
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    articleSection: section,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: url('/opengraph-image'),
    inLanguage: 'en-US',
  };
}

/**
 * A paid engagement (pathway, session, Q&A). `price` omitted → a free offering,
 * which schema.org expresses as price "0".
 */
export function service({ path, name, description, price, serviceType, duration }) {
  return {
    '@type': 'Service',
    '@id': `${url(path)}#service`,
    name,
    description,
    serviceType: serviceType ?? 'International relocation consulting',
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    ...(duration ? { termsOfService: duration } : {}),
    offers: {
      '@type': 'Offer',
      price: String(price ?? 0),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: url(path),
      seller: { '@id': ORG_ID },
    },
  };
}

export function product({ path, name, description, price }) {
  return {
    '@type': 'Product',
    '@id': `${url(path)}#product`,
    name,
    description,
    brand: { '@id': ORG_ID },
    offers: {
      '@type': 'Offer',
      price: String(price),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: url(path),
      seller: { '@id': ORG_ID },
    },
  };
}

/** Wrap page-level nodes in a @graph so each page emits exactly one script. */
export const graph = (...nodes) => ({
  '@context': 'https://schema.org',
  '@graph': nodes.flat().filter(Boolean),
});

export function podcastSeries({ path, name, description, sameAs = [] }) {
  return {
    '@type': 'PodcastSeries',
    '@id': `${url(path)}#podcast`,
    name,
    description,
    url: url(path),
    // webFeed is intentionally absent: the show's RSS URL has not been
    // confirmed. Add it here once verified — it is a recommended property.
    ...(sameAs.length ? { sameAs } : {}),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

export function collection({ path, name, description, type = 'CollectionPage' }) {
  return {
    '@type': type,
    '@id': `${url(path)}#page`,
    url: url(path),
    name,
    description,
    isPartOf: { '@id': SITE_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}
