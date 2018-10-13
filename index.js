'use strict';
// 'use strict';
// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end();
// });
// const port = 8000;
// server.listen(port, () => {
//   console.info('Listening on ' + port);
// });
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'https://www.nicovideo.jp/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});