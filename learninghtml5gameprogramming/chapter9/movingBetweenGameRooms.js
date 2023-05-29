everyone.now.joinRoom = (roomName) ->
	group = nowjs.getGroup(roomName)
	group.addUser(this.user.clientId)

everyone.now.leaveRoom = (roomName) ->
	group = nowjs.getGroup(roomName) ->
	group.removeUser(this.user.clientId)