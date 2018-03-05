var http = require('http');
var querystring = require('querystring');
var multipart = require('multipart');
function writeResponse(res, data) {
	var total = 0;
	for (fruit in data) {
		total += Number(data[fruit]);
	}
	res.writeHead(200, "OK", {
		"Content-Type": "text/html",
		"Access-Control-Allow-Origin": "http://titan"});
	// res.write('<html><head><title>Fruit Total</title></head><body>');
	// res.write('<p>' + total + ' items ordered</p></body></html>');
	// sending XML data from the server
	
	// xml
	// res.write("<?xml version='1.0'?>");
	// res.write("<fruitorder total='" + total + "'>");
	// for (fruit in data) {
	// res.write("<item name='" + fruit + "' quantity='" + data[fruit] + "'/>")
	// total += Number(data[fruit]);
	// }
	// res.write("</fruitorder>");
	// res.end();
	
	// json 
	var total = 0;
	for (fruit in data) {
		total += Number(data[fruit]);
	}
	data.total = total;
	var jsonData = JSON.stringify(data);
	res.writeHead(200, "OK", {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "http://titan"});
	res.write(jsonData);
	res.end();
}
http.createServer(function (req, res) {
	console.log("[200] " + req.method + " to " + req.url);
	if (req.method == 'OPTIONS') {
		res.writeHead(200, "OK", {
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Methods": "*",
			"Access-Control-Allow-Origin": "*"
		});
		res.write('You ordered <b>' + total + '</b> items');
		res.end();
	} else if (req.url == '/form' && req.method == 'POST') {
		var dataObj = new Object();
		var contentType = req.headers["content-type"];
		var fullBody = '';
		if (contentType) {
			if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
				req.on('data', function(chunk) { fullBody += chunk.toString();});
				req.on('end', function() {
				var dBody = querystring.parse(fullBody);
				dataObj.bananas = dBody["bananas"];
				dataObj.apples = dBody["apples"];
				dataObj.cherries= dBody["cherries"];
				writeResponse(res, dataObj);
				});
			} else if (contentType.indexOf("application/json") > -1) {
				req.on('data', function(chunk) { fullBody += chunk.toString();});
				req.on('end', function() {
					dataObj = JSON.parse(fullBody);
					writeResponse(res, dataObj);
				});
			} else if (contentType.indexOf("multipart/form-data") > -1) {
				var partName;
				var partType;
				var parser = new multipart.parser();
				parser.boundary = "--" + req.headers["content-type"].substring(30);
				parser.onpartbegin = function(part) {
					partName = part.name; partType = part.contentType};
				parser.ondata = function(data) {
					if (partName != "file") {
						dataObj[partName] = data;
					}
				};
					req.on('data', function(chunk) { parser.write(chunk);});
					req.on('end', function() { writeResponse(res, dataObj);});
			}
		}
	}
}).listen(8080);