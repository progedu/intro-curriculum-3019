'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302,{
    'Location':'https://www.nicovideo.jp/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info(`ポート${port}番でサーバー起動しました。`);
});

