'use strict';
let http = require('http');
let server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'http://www.nicovideo.jp/'
  });
  res.end();
});
let port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

