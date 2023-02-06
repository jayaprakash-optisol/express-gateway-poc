const express = require('express');

const app = express();
const port = 3002;

app.get('/order', (req, resp) => {
  return resp.send('Order service is available');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
