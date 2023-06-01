var express = require("express");
var fs = require("fs");
console.log("Starting");
var configWeb = JSON.parse(fs.readFileSync("configWeb.json"));
var host = configWeb.host;
var port = configWeb.port;

var app = express.createServer();

app.use(app.router);
app.use(express.static(__dirname + "/publico"));

app.get("/", function (request, response) {
	response.send("hello!");
});

app.get("/hello/:text", function (request, response) {
	response.send("hello" + request.params.text);
});

var users = {
	"1": {
		"name": "mc_li",
		"twitter": "mc_li28"
	},
	"2": {
		"name": "erk",
		"twitter": "erk18"
	}
}

app.get("/user/:id", function (request, response) {
	var user = users[request.params.id];
	if (user) {
		response.send("<a href='http://twitter.com"+ user.twitter +"'>follow "+ user.name +" on twitter</a>");
	} else {
		response.send("Sorry! We cannot find the user :(", 404);
	}
});

app.listen(port, host);
