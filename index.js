'use strict';
const http = require('http');
const shimesaba = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'https://twitter.com/'
  });
  res.end();
});
const port = 8000;
shimesaba.listen(port, () => {
  console.info('Listening on ' + port);
});

