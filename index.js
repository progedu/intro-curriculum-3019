'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  // 間違い回答
  // req.headers(302,{
  //   'Location': 'https://www.nicovideo.jp/'
  // });

  res.writeHead(302,'test reasonPhrase',{
    'Location':'https://www.nicovideo.jp/'
  });
  console.info('試しにリーズンフレーズ指定：'+ res.statusMessage);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

