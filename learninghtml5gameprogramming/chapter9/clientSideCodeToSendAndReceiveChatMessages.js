window.now.receiveMessage = (name, message) ->
	val = $('#chat').get(0).value
	val += name + ':' + message + '\n'
	$('#chat').get(0).value = val
	console.log('Received message:' + message + ' from:' + name)

window.distributeMessage = (message) ->
	if now.name is 'Unknown'
now.name = prompt("What is your name?")
	now.distributeMessage(message)
	