var http = require('http');
http.createServer(function(req, res){
    res.write('hello chally');
    res.end();
}).listen(8080);
/*The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

Use the createServer() method to create an HTTP server:*/
/*If the response from the HTTP server is supposed to be displayed as HTML, you should include an

HTTP header with the correct content type:

The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an
 object containing the response headers.



*/