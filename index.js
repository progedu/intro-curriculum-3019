'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'https://www.nicovideo.jp/'
  });
  res.end();
});
const port = process.env.PORT;
server.listen(port, process.env.IP, () => {
  console.info(`Listening on ${port}`);
});