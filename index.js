'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  //リダイレクトを実行する処理 3.19練習
  res.writeHead(302,{
    'Location': 'https://www.nicovideo.jp/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

