everyone.now.distributeMessage = (message) ->
	console.log("Received message:" + message + " from: " + this.now.name)
	everyone.now.receiveMessage(this.now.name, message)