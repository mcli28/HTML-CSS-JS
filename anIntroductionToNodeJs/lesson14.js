var keyword = process.argv[2];
var username = process.argv[3];
var password = process.argv[4];

var tweetCount = 0;
setInterval(function () {
	process.send(tweetCount + " tweets");
}, 2000);

var https = require("https");
var options = {
	host: 'stream.twitter.com',
	path: '/1.1/statuses/filter.json='+keyword,
	method: 'GET',
	headers: {
		"Authorization": "Basic " + new Buffer(username + ":"+password).toString("base64")
	}
}

// var fs = require("fs");
// var express = require("express");
// console.log("Starting");
// var configWeb = JSON.parse(fs.readFileSync("configWeb.json"));
// var host = configWeb.host;
// var port = configWeb.port;

// var app = express.createServer();
var app = express();


// app.get("/", function (request, response) {
// 	var content = fs.readFileSync("template.html");
// 	getTweets(function (tweets) {
// 		var ul = '';
// 		tweets.forEach(function (tweet) {
// 			ul += "<li><strong>" + tweet.user.screen_name + ": </strong>" + tweet.text + "</li>";
// 		});
// 		content = content.toString("utf8").replace("{{INITIAL_TWEETS}}", ul);
// 		response.setHeader("Content-Type", "text/html");
// 		response.send(content);
// 	});
// });

// app.listen(port, host);

// var io = require('socket.io').listen(app);

var mongo = require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("nodejs-introduccion", new mongo.Server(host, port, {}));
var tweetCollection;
db.open(function (error) {
	console.log("We are Connected! " + host + ":" + port);

	db.collection("tweet", function (error, collection) {
		tweetCollection = collection;
	});
});

function getTweets (callback) {
	tweetCollection.find({}, {"limit": 10, "sort": {"_id": -1}}, function (error, cursor) {
		cursor.toArray(function (error, tweets) {
			callback(tweets);
		});
	});
}

var request = https.request(options, function (response) {
	var body = '';
	response.on("data", function (chunk) {
		//body += chunk.toString();
		var tweet = JSON.parse(chunk);
		tweet.keyword = keyword;
		tweetCount++;
		io.sockets.emit("tweet", tweet);
		tweetCollection.insert(tweet, function (error) {
			if (error) {
				console.log("Error: ", error.message);
			} /*else {
				console.log("Inserted into database");
			}*/
		});
	});
	response.on("end", function () {
		console.log("Disconnected");
	});
});
request.end();

// app.use(app.router);
// app.use(express.static(__dirname + "/publico"));
// app.get("/hello/:text", function (request, response) {
// 	response.send("hello" + request.params.text);
// });
// var users = {
// 	"1": {
// 		"name": "mc_li",
// 		"twitter": "mc_li28"
// 	},
// 	"2": {
// 		"name": "erk",
// 		"twitter": "erk18"
// 	}
// }

// app.get("/user/:id", function (request, response) {
// 	var user = users[request.params.id];
// 	if (user) {
// 		response.send("<a href='http://twitter.com"+ user.twitter +"'>follow "+ user.name +" on twitter</a>");
// 	} else {
// 		response.send("Sorry! We cannot find the user :(", 404);
// 	}
// });
