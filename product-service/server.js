const express = require('express');

const app = express();
const port = 3000;

app.get('/product', (req, resp) => {
  return resp.send('Product service is available');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
