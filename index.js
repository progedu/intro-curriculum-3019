'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(301, {
    'Location': 'http://www.nicovideo.jp/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

