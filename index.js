'use strict';
// 標準モジュールを読み込む
const http = require('http');
// サーバーにアクセス出来たらアロー関数を実行する
const server = http.createServer((req, res) => {
  // Locationで指定されたサイトを発見した
  res.writeHead(302, {
    'Location': 'https://www.nicovideo.jp/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

