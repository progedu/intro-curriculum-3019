'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHeader('302', {
    'Location': 'http://www.nicovideo.jp'
  });
  res.end();
});
const port = 5000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

