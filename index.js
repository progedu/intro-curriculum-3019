'use strict';
const http = require('http');
// 一度復習の時間とかとらないと、忘れちゃいますね。
// このserverはindex.jsで定義して、他のクラスではまた改めて作ったりするのですか？
// publicではないので別クラスから読み込めるのかな？と少し疑問です。
// そもそもnode.jsにpublicやprivateという概念があるかわかりませんが。
const server = http.createServer((req, res) => { 
  res.writeHead(302, {
    'Location': 'http://www.nicovideo.jp'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

