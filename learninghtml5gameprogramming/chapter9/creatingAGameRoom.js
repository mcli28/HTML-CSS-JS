everyone.now.createRoom = (roomName, callback) ->
console.log("Created room: " + roomName)
group = nowjs.getGroup(roomName)
group.on 'connect', (clientId) ->
	group.now.receiveMessage(this.user.clientId + " joinded the game room.")
group.on 'disconnect', (clientId) ->
	group.now.receiveMessage(this.user.clientId + " left the game room.")
gameRooms.push(group)
callback(group)

