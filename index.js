'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  // リダイレクトの設定
  res.writeHead(302, {
    // http://localhost:87000/ → https://www.nicovideo.jp/
    'Location': 'https://www.nicovideo.jp/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

