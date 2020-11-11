'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    location: 'https://www.youtube.com/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

