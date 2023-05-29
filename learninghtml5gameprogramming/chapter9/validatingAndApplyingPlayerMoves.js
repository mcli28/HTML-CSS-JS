everyone.now.completeTicTacToeMove = (room, x, y, player) ->
	rooms = cache.get("rooms")
	room = rooms[roomName]
	group = nowjs.getGroup(room)
	roomState = cache.get(room)
	board = roomState.board

	otherPlayer = if player is 'X' then 'O' else 'x'
	if board[x][y] is '-'
		board[x][y] = player
		#check for win

		cache.put(this.now.room, roomState)

	else
		roomState.message = 'Player #{player}, Please try again.'
		cache.put(room, roomState)
		group.now.receiveGameState(roomState)

