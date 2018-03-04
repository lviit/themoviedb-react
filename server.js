'use strict';

let express = require('express');
let app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));
app.get('*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(PORT, function () {
  console.log(`Listening on ${ PORT }`);
});
