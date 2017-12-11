'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'https://www.aeonshop.com/shop/genre/genre.aspx?shop=01050000059020&genre=2145&ismodesmartphone=off&bannerid=as25_DMwEO7BF&exmid=CPC'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

