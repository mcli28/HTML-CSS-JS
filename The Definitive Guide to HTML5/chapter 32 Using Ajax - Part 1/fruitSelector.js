var http = require('http');
http.createServer(function (req, res) {
	console.log("[200] " + req.method + " to " + req.url);
	res.writeHead(200, "OK", {
							"Content-Type": "text/html",
							"Access-Control-Allow-Origin": "http://titan"}
				);
	res.write('<html><head><title>Fruit Total</title></head><body>');
	res.write('<p>');
	res.write('You selected ' + req.url.substring(1));
	res.write('</p></body></html>');
	res.end();
}).listen(8080);