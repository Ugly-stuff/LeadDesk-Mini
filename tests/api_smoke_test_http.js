const http = require('http');

function postLead(lead) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(lead);
    const options = {
      hostname: '127.0.0.1',
      port: 5000,
      path: '/api/leads',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          resolve({ statusCode: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ statusCode: res.statusCode, body });
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(data);
    req.end();
  });
}

function getLeads() {
  return new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:5000/api/leads', (res) => {
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => {
        try {
          resolve({ statusCode: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ statusCode: res.statusCode, body });
        }
      });
    }).on('error', (err) => reject(err));
  });
}

(async () => {
  try {
    console.log('Posting lead...');
    const post = await postLead({ name: 'HTTP Test', email: 'http@test.local', budget: 'Under $500', message: 'smoke' });
    console.log('POST result:', post.statusCode);
    console.log(JSON.stringify(post.body, null, 2));

    console.log('\nFetching leads...');
    const get = await getLeads();
    console.log('GET result:', get.statusCode);
    if (Array.isArray(get.body)) {
      console.log('Leads count:', get.body.length);
      console.log(JSON.stringify(get.body.slice(0, 5), null, 2));
    } else {
      console.log('GET body:', get.body);
    }
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(1);
  }
})();
