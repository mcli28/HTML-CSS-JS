var http = require("http");
var fs = require("fs");
console.log("Starting");
var configWeb = JSON.parse(fs.readFileSync("configWeb.json"));
var host = configWeb.host;
var port = configWeb.port;
var server = http.createServer(function (request, response) {
	console.log("Received request: " + request.url);

	fs.readFile("./publico/" + request.url, function (error, data) {
		if (error) {
			response.writeHead(404, {"content-type": "text/plain"});
			response.end("Sorry the page was not found");
		} else {
			response.writeHead(200, {"content-type": "text/html"});
			response.end(data);
		}
	});

});
server.listen(port, host, function () {
	console.log("Listening " + host + ":" + port);
});
fs.watchFile("configWeb.json", function () {
	configWeb = JSON.parse(fs.readFileSync("configWeb.json"));
	host = configWeb.host;
	port = configWeb.port;
	server.close();
	server.listen(port, host, function () {
		console.log("Now Listening" + host + ":" + port);
	})
});