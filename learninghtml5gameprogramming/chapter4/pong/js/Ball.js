var Ball = Class.create(,{
	initialize: function () {
		this.directions = [
			{code: 'SE', 'x': -1, 'y': -1},
			{code: 'SW', 'x': 1, 'y': -1},
			{code: 'NE', 'x': -1, 'y': 1},
			{code: 'NW', 'x': 1, 'y': 1},
		];
	},
	update: function () {
		this.checkCollisions();
		pos = this.getPosition();
		this.setPosition(pos.x - 2 * this.direction.getX(),
			pos.y - 3 * this.direction.getY());
		if (this.x < 0) {
			myGame.ScoreBoard.scoreRight.incrementScore();
			this.resetBall();
		}
		else if (this.x > game_width) {
			myGame.ScoreBoard.scoreLeft.incrementScore();
			this.resetBall();
		}
	},
	checkCollisions: function () {
		var leftPaddleX = myGame.leftPaddle.getPosition().x;
		var leftPaddleY = myGame.leftPaddle.getPosition().y;
		var rightPaddleX = myGame.rightPaddle.getPosition().x;
		var rightPaddleY = myGame.rightPaddle.getPosition().y;
		if (this.y >= leftPaddleY && this.y <= leftPaddleY + myGame.leftPaddle.height)
			if (this.x == leftPaddleX + myGame.leftPaddle.width)
				this.direction.flipEastWest();
		if (this.y >= rightPaddleY && this.y <= rightPaddleY + myGame.leftPaddle.height)
			if (this.x == rightPaddleX - myGame.rightPaddle.width)
				this.direction.flipEastWest();
		if (this.y <= 0 || this.y >= game_height - 20)
			this.direction.flipNorthSouth();
	},
	explodeOrDestroy: function () {
		if (this.generation == 0) {
			this.spawnAsteroids(1, 75, 3);
			myGame.removeComponent(this);
		} else if (this.generation == 1) {
			this.spawnAsteroids(2, 50, 2);
			myGame.removeComponent(this);
		}else myGame.removeComponent(this);
	},
	spawnAsteroids: function (generation, size, num) {
		for (var i = 0; i < num; i++) {
			var arteroid = new Asteroid();
			asteroid.width = size;				
			asteroid.height = size;	
			asteroid.x = this.x;
			asteroid.y = this.y;
			asteroid.generation = generation;	
			asteroid.pickSpeedAndDirection();							
			myGame.addComponent(asteroid);
		}
	}
});