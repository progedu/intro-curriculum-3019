'use strict';
let http = require('http');
let server = http.createServer((req, res) => {
  res.end();
});
let port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

