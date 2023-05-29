miniMax: function (board, currentPlayer) {
	if (this.currentDepth == this.depthLimit)
		return 0;
	if (TTT.checkForWin(board) == currentPlayer)
		return 1;
	if (TTT.checkForWin(board) == this.getOtherPlayer(currentPlayer))
		return -1;
	this.currentDepth++;
	var best = -10;
	var bestMove = null;
	var clone = TTT.cloneGameBoard(board);
	var moves = TTT.generateMovesFromBoard(clone, currentPlayer);

	for (var i = 0; i < moves.length; i++) {
		var m = moves[i];
		clone[m[0]][m[1]] = currentPlayer;
		var value = -this.miniMax(clone, this.getOtherPlayer(currentPlayer));
		clone[m[0]][m[1]] = "";
		if (value > best) {
			best = value;
			bestMove = m;
		}
	}
	if (best == -10)
		return 0;
	return bestMove;
}