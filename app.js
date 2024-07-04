const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Binh Nguyen'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);


var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);