import { createServer } from 'http';
createServer(function(req, res) {
  res.writeHead(200, {'content-type':'text/plain'});
  res.end('Hello World!');
}).listen(3000);
console.log('Server is running on a port over 3000!!!');
