'use strict';

var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(302, {
    Location: 'https://www.nicovideo.jp/'
  });
  res.end();
});
var port = 8000;
server.listen(port, function () {
  console.info('Listening on ' + port);
});