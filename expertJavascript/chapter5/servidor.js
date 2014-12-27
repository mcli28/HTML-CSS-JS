var http = require("http");
var fs = require("fs");
console.log("Starting");
var host = "127.0.0.1";
var port = 1339;
var server = http.createServer(function (request, response) {
	console.log("Received request: " + request.url);

	fs.readFile("./" + request.url, function (error, data) {
		if (error) {
			response.writeHead(404, {"content-type": "text/plain"});
			response.end("Sorry the page was not found");
		} else {
			response.writeHead(200, {"content-type": "text/html"});
			response.end(data);
			response.writeHead(200, {"content-type": "text/javascript"});
			response.end(data);
		}
	});
});
server.listen(port, host, function () {
	console.log("Listening " + host + ":" + port);
});
