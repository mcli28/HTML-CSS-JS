var app2 = require('http').createServer(handler)
 , io = require('socket.io').listen(app2)
 , fs = require('fs')

 app2.listen(8080);

 function handler (req, res) {
 	fs.readFile(__dirname+'/index2.html',
 		function(err, data){
 			if (err) {
 				res.writeHead(800);
 				return res.end('error loading index2.html');
 			}
 			res.writeHead(200);
 			res.end(data);
 		});
 }
 var gamenumbers = (1,2,3);
 io.sockets.on('connection', function (socket){
 	socket.on('clientconnects', function (playername){
 		socket.broadcast.emit('newplayer', playername);
 	});
 	socket.on('startgame', function (playername){
 		gamenumbers.sort(function() {return 0.5 - Math.random()});
 		io.sockets.emit('gamestarted', playername);
 	});
 });