'use strict';
const http = require('http');
const server = http.createServer((ReQ, res) => {
  //うち間違いを防ぐために、 rec を ReQ に置き換えてます（邪道）
   res.writeHead(302, {
    'Location': 'http://www.nicovideo.jp/'
  }); 
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

