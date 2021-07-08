var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client , req argument that represents the request from the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

/* Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the 
Hyper Text Transfer Protocol (HTTP).
To include the HTTP module, use the require() method:

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
Use the createServer() method to create an HTTP server:*/