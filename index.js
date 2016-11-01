'use strict';
const http = require('http');
const redirectURL = 'http://www.nnn.ed.nico/';
const server = http.createServer((req, res) => {
  res.writeHead(302,{
    'Location': redirectURL
    });
    console.info(redirectURL + ' へ リダイレクトしました。');
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

