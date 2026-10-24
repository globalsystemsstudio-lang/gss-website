// MailerLite credentials stay server-side. Accept only the fields used by GSS forms.
const GROUPS = { quiz: '197364302014842463', calculator: '197364304761063011', guide: '201234817198589521' };
const ALLOWED_FIELDS = { quiz: ['quiz_score'], calculator: ['calculator_country'], guide: [] };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ORIGINS = new Set(['https://globalsystemsstudio.com', 'https://www.globalsystemsstudio.com']);
exports.handler = async function (event) {
  const origin = event.headers?.origin || event.headers?.Origin;
  const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', Vary: 'Origin',
    'Access-Control-Allow-Origin': ORIGINS.has(origin) ? origin : 'https://globalsystemsstudio.com',
    'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST, OPTIONS' };
  const respond = (statusCode, body) => ({ statusCode, headers, body: JSON.stringify(body) });
  if (origin && !ORIGINS.has(origin)) return respond(403, { error: 'Origin not allowed' });
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers, body: '' };
  if (event.httpMethod !== 'POST') return respond(405, { error: 'Method not allowed' });
  if ((event.body || '').length > 4096) return respond(413, { error: 'Request is too large' });
  let payload;
  try { payload = JSON.parse(event.body || '{}'); } catch { return respond(400, { error: 'Invalid JSON body' }); }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return respond(400, { error: 'Invalid request' });
  const { email, name, source, fields } = payload;
  if (typeof email !== 'string' || email.trim().length > 254 || !EMAIL_RE.test(email.trim())) return respond(400, { error: 'A valid email address is required' });
  if (!Object.hasOwn(GROUPS, source)) return respond(400, { error: 'Unknown or missing source' });
  if (name != null && (typeof name !== 'string' || name.length > 100)) return respond(400, { error: 'Please enter a shorter first name' });
  if (fields != null && (typeof fields !== 'object' || Array.isArray(fields))) return respond(400, { error: 'Invalid form fields' });
  const safeFields = name?.trim() ? { name: name.trim() } : {};
  for (const key of ALLOWED_FIELDS[source]) {
    if (fields?.[key] != null) {
      if (typeof fields[key] !== 'string' || fields[key].length > 200) return respond(400, { error: 'Invalid form fields' });
      safeFields[key] = fields[key];
    }
  }
  const apiKey = process.env.MAILERLITE_API_KEY || process.env.Mailerlite_API_Key;
  if (!apiKey) { console.error('Email capture configuration missing'); return respond(503, { error: 'Email delivery is temporarily unavailable. Please use the direct download or contact us.' }); }
  try {
    const result = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST', headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email: email.trim().toLowerCase(), fields: safeFields, groups: [GROUPS[source]] }),
      signal: AbortSignal.timeout(10000),
    });
    if (!result.ok) { console.error('Email capture provider rejected request', result.status); return respond(502, { error: 'Email delivery is temporarily unavailable. Please try again or contact us.' }); }
    return respond(200, { ok: true });
  } catch { console.error('Email capture provider unavailable'); return respond(502, { error: 'Email delivery is temporarily unavailable. Please try again or contact us.' }); }
};
