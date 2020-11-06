'use strict';
const http = require('http');
const pug = require('pug');
const server = http.createServer((req, res) => {
  // res.writeHead(302, {
  //   Location: 'https://www.nicovideo.jp'
  // });
  res.writeHead(200, {
    'Context-Type': 'text/html; charset=utf-8'
  });
  res.write(
    pug.renderFile('./redirect.pug', { seconds: 2 })
  );
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

