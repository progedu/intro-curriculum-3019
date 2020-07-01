'use strict';
const http = require('http');
// サーバーを立てる
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    Location: 'https://www.nicovideo.jp/'    // 302のステータスコードを第一引数にし、第二引数にオブジェクトとしてLocationを記述することでURLにリダイレクト
  });
  res.end();
});

const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

