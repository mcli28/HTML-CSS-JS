var express = require('express')
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');
server.listen(8080);

app.get('/', function (req, res){
	res.sendfile(__dirname+'/clientepro.html');
});

io.sockets.on('connection', function (socket){


	socket.on('my other event', function (data){

		console.log("es recivida de html "+data);

		io.sockets.emit('otro', data);
	});


});