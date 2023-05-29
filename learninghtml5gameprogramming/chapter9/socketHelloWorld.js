socket = io.listen app
socket.on 'connection', (client) ->
	sys.puts "new client connected."
	client.on 'message', (data) ->
		sys.puts data
		client.send data
	client.on 'disconnect', ->
	