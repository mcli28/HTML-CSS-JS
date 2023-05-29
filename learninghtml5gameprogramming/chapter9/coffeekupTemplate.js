doctype 5
html ->
	head ->
		title "#{@title}"
		script src '/js/socket.js'

	body ->
		coffeescript ->
			socket = new io.Socket 'localhost'
			socket.connect()
			socket.on 'connection', ->
						console.log 'Connected.'
			socket.on '/message', (data) ->
				console.log data
				socket.send "Hello World"
				
