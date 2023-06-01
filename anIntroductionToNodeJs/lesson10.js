var mongo = require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("nodejs-introduccion", new mongo.Server(host, port, {}));
db.open(function (error) {
	console.log("We are Connected! " + host + ":" + port);
	db.collection("user", function (error, collection) {
		console.log("We have the collection");
		collection.insert({
			id: "1",
			name: "mc_li28",
			twitter: "@mc_li28",
			email: "mc_li28@gmail.com"
		}, function () {
			console.log("Successfully inserted mc_li28");
		});
		collection.insert({
			id: "2",
			name: "emday",
			twitter: "@emday",
			email: "emday@gmail.com"
		}, function () {
			console.log("Successfully inserted emday");
		});
	});
});