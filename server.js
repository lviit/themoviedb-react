const express = require('express');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(sslRedirect());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
