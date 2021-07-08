var http = require('http');
var dt = require('./my1stmodule');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("date and time is " + dt.mydateT());
    res.end();
}).listen(3500);