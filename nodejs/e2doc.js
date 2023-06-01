var express = require('express')
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');
server.listen(8080);

app.get('/', function (req, res){
	res.sendfile(__dirname+'/e2doc.html');
});

io.sockets.on('connection', function (socket){
	socket.emit('news', {hello: 'world'});


	socket.on('my other event', function (data, data1){
		var num1=new Number (data);
		var num2=new Number (data1);
		var sum1=num1+2;
		var sum2=num2+2;
		console.log("es recivida de html "+sum1);
		console.log("es recivida de html "+sum2);

		socket.emit('otro', sum1);
		socket.emit('mas', sum2);
	});


});