import Script from 'next/script';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BethChat from '../components/BethChat';
import BookingTracker from '../components/BookingTracker';

export const metadata = {
  metadataBase: new URL('https://globalsystemsstudio.com'),
  title: {
    default: 'Global Systems Studio | Relocation Operating System (ROS™) for Americans Moving Abroad',
    template: '%s | Global Systems Studio',
  },
  description: 'The step-by-step infrastructure for U.S. persons relocating internationally. Seven workflow stages. Six pathways. Free tools, paid guides and planning support.',
  openGraph: {
    siteName: 'Global Systems Studio',
    type: 'website',
    locale: 'en_US',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://globalsystemsstudio.com/#organization',
  name: 'Global Systems Studio',
  legalName: 'CC Transaction Service LLC',
  alternateName: ['GSS', 'Relocation Operating System', 'ROS'],
  url: 'https://globalsystemsstudio.com',
  description: 'Global Systems Studio is the home of the Relocation Operating System (ROS), step-by-step infrastructure for U.S. persons relocating internationally. It covers visas and residency, taxes, banking, healthcare and housing abroad.',
  email: 'globalsystemsstudio@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '227 W 4th St, Ste 3078',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    postalCode: '28202',
    addressCountry: 'US',
  },
  sameAs: ['https://www.facebook.com/profile.php?id=61591287402624', 'https://www.instagram.com/globalsystemsstudio/', 'https://www.linkedin.com/in/globalsystemsstudio/', 'https://www.tiktok.com/@globalsystemsstudio0', 'https://www.youtube.com/@GlobalSystemsStudio-CCB'],
  areaServed: 'Worldwide',
  audience: { '@type': 'Audience', audienceType: 'U.S. citizens and residents relocating internationally' },
  knowsAbout: ['International relocation planning for Americans', 'Expat taxes', 'Residency and visa pathways', 'Expat banking', 'Healthcare abroad', 'Retiring abroad'],
  founder: { '@id': 'https://globalsystemsstudio.com/#founder' },
};

const founderJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://globalsystemsstudio.com/#founder',
  name: 'Charlene L. M. Cupidore Bynoe',
  alternateName: 'Charchar',
  jobTitle: 'Founder, Global Systems Studio',
  url: 'https://globalsystemsstudio.com/our-story/',
  worksFor: { '@id': 'https://globalsystemsstudio.com/#organization' },
  description: 'Creator of the Relocation Operating System (ROS), a planning framework for U.S. persons moving abroad.',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Global Systems Studio',
  url: 'https://globalsystemsstudio.com',
  publisher: { '@id': 'https://globalsystemsstudio.com/#organization' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;1,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Google Translate styles override — hide the ugly top bar */}
        <style dangerouslySetInnerHTML={{__html:`
          .goog-te-banner-frame.skiptranslate,
          .goog-te-gadget-icon { display: none !important; }
          body { top: 0 !important; }
          .goog-te-gadget { font-family: inherit !important; font-size: 13px !important; }
          .goog-te-gadget .goog-te-gadget-simple {
            background: transparent !important;
            border: 1px solid rgba(255,255,255,0.3) !important;
            border-radius: 6px !important;
            padding: 4px 8px !important;
            font-size: 13px !important;
          }
          .goog-te-gadget .goog-te-gadget-simple span,
          .goog-te-gadget .goog-te-gadget-simple .goog-te-menu-value span {
            color: rgba(255,255,255,0.85) !important;
          }
          .goog-te-gadget .goog-te-gadget-simple img { display: none !important; }
        `}} />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7440CGNDDQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            if (['globalsystemsstudio.com', 'www.globalsystemsstudio.com'].includes(window.location.hostname)) {
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){window.dataLayer.push(arguments);};
              window.gtag('js', new Date());
              window.gtag('config', 'G-7440CGNDDQ');
            }
          `}
        </Script>

        {/* Google Translate */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'es,fr,pt,de,it,zh-CN,zh-TW,ja,ko,ar,ru,nl,sv,hi,pl',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <a className="skip-link" href="#main-content">Skip to content</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <BethChat />
        <BookingTracker />
      </body>
    </html>
  );
}
