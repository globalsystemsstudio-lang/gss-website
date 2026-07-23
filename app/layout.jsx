import Script from 'next/script';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BethChat from '../components/BethChat';

export const metadata = {
  metadataBase: new URL('https://www.globalsystemsstudio.com'),
  title: {
    default: 'Global Systems Studio | ROS™ — Relocation Operating System',
    template: '%s | Global Systems Studio',
  },
  description: 'The step-by-step infrastructure for U.S. persons relocating internationally. Seven modules. Six tiers. Real answers.',
  openGraph: {
    siteName: 'Global Systems Studio',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;1,700&display=swap" rel="stylesheet" />
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
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7440CGNDDQ');
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

        <Nav />
        <main>{children}</main>
        <Footer />
        <BethChat />
      </body>
    </html>
  );
}
