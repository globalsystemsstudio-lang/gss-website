# Customer clarity release — October 24, 2026

The public website now uses Coastal Blue #1E5B99, Gold #C8A832 and Ivory #F8F5ED. Its six pathway pages share the approved catalog, with full inherited inclusions, prices, initial access, optional renewal prices and purchase/agreement activation terms. The public comparison supports a persona filter; the separate private pricing explorer stays private.

Free tools and the free introductory guide are separate from paid downloads, personal support and dashboard pathways. Standalone PDFs do not activate dashboard access. The free guide can be read or downloaded without subscribing. The disconnected blog newsletter form now leads to that working guide flow. Customer-facing copy no longer promises unavailable toolkits, community enrollment or placeholder testimonials.

## Validation

- Production static build, Next.js 14.2.35 on Node.js 24.22.1: passed. Netlify uses Node.js 24 for builds, with the production AWS_LAMBDA_JS_RUNTIME override explicitly set to nodejs24.x for the subscribe function.
- Crawl of 104 exported HTML documents and 223 distinct internal link/anchor targets: no broken targets or invalid JSON-LD.
- All six prices, access periods, renewal prices, checkout IDs, common foundation resources and signed-agreement activation terms: passed against the approved catalog.
- Three server-function tests cover malformed data, correct MailerLite groups and allowed fields, and safe provider errors. External provider responses were mocked; no subscriber was created.
- Desktop browser review: simplified navigation, comparison filter, prices and content.
- Mobile review in 390px and 360px frames: menu open/close, tier filtering, Family detail navigation, free PDF access, and no horizontal document overflow. The comparison table has its own horizontal scroll area.
- Paid delivery workflow: 30 dry-run cases passed, including all 20 supported products/services, price collisions, pending payment, wrong currency, partial capture, stale pricing, ambiguous identity and conflicting order references. The Gmail sent-search read also passed. No payment or customer email was sent by these tests.
- Free-guide delivery: dry-run confirms the free file, current workbook checkout link and disclaimer. Both published workflows report enabled with active triggers.

## Operational limits

A genuine completed purchase and actual booking were not made. Paid pathways still require a signed agreement and manual dashboard setup; service orders generate owner fulfillment notifications. Unknown or mismatched paid orders go to manual review, never price-only fulfillment. Sent-mail checks suppress already-sent captures, but are not an atomic lock against simultaneous duplicate webhooks.

Renewal duration has not been established by the approved tier guide, so the website asks customers to confirm it before purchasing renewal. Completed purchases and completed bookings are not inferred from outbound clicks. GA4 conversion configuration and end-to-end sale/booking attribution still require appropriate account permission and provider integration. This release is not a claim that every destination-specific legal or financial statement in the article archive has been independently re-verified.

The desktop screenshot shows the live public comparison after deployment; the mobile screenshot shows the tested 390px and 360px layouts.

Screenshots: [desktop](desktop.jpg), [mobile](mobile.jpg).
