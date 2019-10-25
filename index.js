'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'https://www.nicovideo.jp/'
  });
  
  //簡単に画像ファイルをファビコンを作成できるページ
  // res.writeHead(302,{
  //   'Location':'https://ao-system.net/favicon/'
  // });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});