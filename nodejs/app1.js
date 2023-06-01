var app1 = require('http').createServer(handler)
, io = require('socket.io').listen(app1)
, fs = require('fs')

app1.listen(8080);
function handler (req, res) {
	fs.readFile(__dirname + '/index1.html',
	function (err, data) {
		if (err) {
			res.writeHead(500);
			return res.end('error loading index1.html');
		}
		res.writeHead(200);
		res.end(data);
	});
}

io.sockets.on('connection', function (socket) {
	socket.on('testconnection', function (username) {
		socket.broadcast.emit('testthis', username);
	})
})