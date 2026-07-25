(async () => {
  const url = 'http://127.0.0.1:5000/api/leads';
  try {
    const postRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'API Test Script', email: 'script@example.com', budget: 'Under $500', message: 'smoke test' }),
    });

    const postData = await postRes.json();
    console.log('POST_RESPONSE:');
    console.log(JSON.stringify(postData, null, 2));

    const getRes = await fetch(url);
    const getData = await getRes.json();
    console.log('\nGET_RESPONSE (first 5 items):');
    console.log(JSON.stringify(getData.slice(0, 5), null, 2));
  } catch (err) {
    console.error('ERROR:', err.message || err);
    process.exit(1);
  }
})();
