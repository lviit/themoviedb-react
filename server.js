const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// redirect to https
app.use('*', (req, res, next) => {
  if (!req.secure) {
    const secureUrl = `https://${req.headers.host}${req.url}`;
    res.writeHead(301, { Location: secureUrl });
    res.end();
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
