// GSS lead capture endpoint — used by the relocation readiness quiz and the
// cost-of-living calculator to push leads into MailerLite server-side.
// The MailerLite API key never reaches the browser: it lives only in this
// function's environment (Netlify env var MAILERLITE_API_KEY).

const GROUPS = {
  quiz: '197364302014842463',       // "Quiz Completed"
  calculator: '197364304761063011', // "Calculator Used"
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

exports.handler = async function (event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (err) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  const { email, name, source, fields } = payload;

  if (!email || !EMAIL_RE.test(email)) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'A valid email address is required' }),
    };
  }

  const groupId = GROUPS[source];
  if (!groupId) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Unknown or missing source' }),
    };
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    console.error('MAILERLITE_API_KEY is not set in the Netlify environment');
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Server is not configured for email capture' }),
    };
  }

  const mailerLiteBody = {
    email: email.trim().toLowerCase(),
    fields: {
      ...(name ? { name } : {}),
      ...(fields || {}),
    },
    groups: [groupId],
  };

  try {
    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(mailerLiteBody),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error('MailerLite error', res.status, JSON.stringify(data));
      return {
        statusCode: 502,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'MailerLite rejected the request', detail: data }),
      };
    }

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error('Subscribe function failed', err);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Unexpected server error' }),
    };
  }
};
