var Paddle = Class.create(Rectangle ,{
	initialize: function ($super) {
		$super();
		this.height = 100;
		this.width = 20;
		this.color = "0011FF";
		this.isPlayerOne = true;
	},
	setPosition: function (x, y) {
		this.x = x;
		this.y = y;
	},
	getPosition: function () {
		return {
			'x': this.x,
			'y': this.y
		}
	},
	setIsPlayerOne: function (bool) {
		this.setIsPlayerOne = bool;
	},
	checkInput: function () {
		if (this.isPlayerOne == false) {
			if (myInput.isKeyDown(Input.KEY_UP)) {
				if (this.y > 0) {
					this.y = this.y - 10;
				}
			}
			else
				if (myInput.isKeyDown(Input.KEY_DOWN)) {
					if (this.y < game_height - this.height)
						this.y = this.y + 10;
				}
		}
		else {
			if (myInput.isKeyDown(65)) {
				if (this.y > 0) {
					this.y = this.y - 10;
				}
			}
			else
				if (myInput.isKeyDown(90)) {
					if (this.y < game_height - this.height)
						this.y = this.y + 10;
				}
		}
	},
	update: function () {
		this.checkInput();
		if (this.setIsPlayerOne) {
			var y = myGame.ball.y;
			var currentY = this.y;
			targetY = y - this.height/2;
			if (targetY > this.y)
				this.y = this.y + 3;
			else if (targetY < this.y)
				this.y = this.y - 3;
		}else this.checkInput();
	}
});

