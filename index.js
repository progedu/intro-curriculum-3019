'use strict';
const http = require('http');
const redirectUrl = ['http://www.nicovideo.jp/', 'http://live.nicovideo.jp/', 'http://seiga.nicovideo.jp/'];
const server = http.createServer((req, res) => {
  const i = Math.floor(Math.random() * redirectUrl.length);
  res.writeHead(302, {
    'Location': redirectUrl[i]
  });
  console.info('Redirect to ' + redirectUrl[i]);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

