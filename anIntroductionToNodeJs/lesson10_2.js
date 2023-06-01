var fs = require("fs");
var express = require("express");
console.log("Starting");
var configWeb = JSON.parse(fs.readFileSync("configWeb.json"));
var host = configWeb.host;
var port = configWeb.port;

var mongo = require("mongodb");
var dbHost = "127.0.0.1";
var dbPort = mongo.Connection.DEFAULT_PORT;

var app = express.createServer();

app.use(app.router);
app.use(express.static(__dirname + "/publico"));

app.get("/", function (request, response) {
	response.send("hello!");
});

app.get("/hello/:text", function (request, response) {
	response.send("hello" + request.params.text);
});

app.get("/user/:id", function (request, response) {

	getUser(request.params.id, function (user) {
		if (!user) {
			response.send("Sorry! We cannot find the user :(", 404);
		} else {
			response.send("<a href='http://twitter.com"+ user.twitter +"'>follow "+ user.name +" on twitter</a>");
		}
	});

});

app.listen(port, host);


function getUser (id, callback) {
	var db = new mongo.Db("nodejs-introduccion", new mongo.Server(dbHost, dbPort, {}));
	db.open(function (error) {
		console.log("We are Connected! " + dbHost + ":" + dbPort);
		db.collection("user", function (error, collection) {
			console.log("We have the collection");
			collection.find({"id": id.toString()}, function (error, cursor) {
				cursor.toArray(function (error, users) {
					if (users.length == 0) {
						callback(false);
					} else {
						callback(users[0]);
					}
				})
			});
		});
	});
}