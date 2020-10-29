'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = new Date();
  const saenaiURL = 'https://saenai-movie.com/';
  res.writeHead(302, {
    Location: saenaiURL
  });
  console.info(`[ ${now} ] ${saenaiURL} へのリダイレクト完了`);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});
