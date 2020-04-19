'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'https://www.nnn.ed.nico/'
  });
  res.end();
});
const port = 8001;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

