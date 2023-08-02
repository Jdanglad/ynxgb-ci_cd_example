const http = require('http');

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/string'});
   let dt = new Date();
   response.end("this is a new string returned on" + dt.toDateString() + " at " + dt.toLocalTimeString('en-US'))
}).listen(8080);

console.log('Server running at http://0.0.0.0:8080/');
