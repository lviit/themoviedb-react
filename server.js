const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 5000;

app.use('*', (req, res) => {
  if (req.headers['x-forwarded-proto'] === 'http' && process.env.NODE_ENV === 'production') {
    res.redirect(`https://${req.headers.host}${req.path}`);
  }
});
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
