// Never pass personal details, quiz answers, or scores to analytics.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer || [];
    const send = typeof window.gtag === 'function' ? window.gtag : function () { window.dataLayer.push(arguments); };
    send('event', name, { ...params, transport_type: 'beacon' });
  } catch { /* Analytics must never block lead capture or results. */ }
}
