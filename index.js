'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'https://www.nicovideo.jp/'
  });
  res.statusCode = 302;
  const favorite_url = 'https://www.nicovideo.jp/';
  console.info(`ステータスコードは ${res.statusCode} です。`);
  console.info(`${favorite_url} にリダイレクトしました。`);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

