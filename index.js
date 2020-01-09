'use strict';
const http = require('http');
const server = http.createServer((req, res) => {

  //resでクッキーに入れて
  //reqに値が入る
  const now = 'unredirect';
//console.info(req.url);
  if(req.url === '/')
  {
    if(req.headers.cookie !== `now=${now}`)
      {
        res.setHeader('Set-Cookie',`now=${now};`);
        //console.info(`リダイレクト後:${req.headers.cookie}`);
        res.writeHead(302, {
          'Location': 'https://www.nicovideo.jp/'
        });
      } else {
        res.setHeader('Set-Cookie',`now=redirect;`);
        //console.info(`リダイレクト前:${req.headers.cookie}`);
      }
      //console.info(`----------`);
      res.end('Please Enter F5');
  }
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

