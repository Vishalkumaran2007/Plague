fetch(`${import.meta.env.VITE_API_URL}/api/chat`)  .then(r => r.text().then(t => console.log('STATUS:', r.status, 'BODY:', t.substring(0, 100))))
  .catch(console.error);
