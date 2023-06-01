var mongo = require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
function getUser (id, callback) {
	var db = new mongo.Db("nodejs-introduccion", new mongo.Server(host, port, {}));
	db.open(function (error) {
		console.log("We are Connected! " + host + ":" + port);
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

getUser(2, function (user) {
	if (!user) {
		console.log("no user found with id 2");
	} else {
		console.log("we have a user:", user);
	}
});

getUser("3", function (user) {
	if (!user) {
		console.log("no user found with id 3");
	} else {
		console.log("we have a user:", user);
	}
});