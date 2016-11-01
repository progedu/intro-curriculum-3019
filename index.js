'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
	res.writeHead(302, {
		'Location': 'http://ch.nicovideo.jp/channel/ch2611381'
	});
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

