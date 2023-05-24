//enchant();
//
//Pit = Class.create(Sprite, {
//	initialize:function (x, y) {
//		enchant.Sprite.call(this, 48, 48);
//		this.image = game.assets['images/mogura.png'];
//		this.x = x;
//		this.y = y;
//	}	
//});
//
//window.onload = function () {
//	game = new Game(320, 320);
//	game.fps = 16;
//
//	game.preload('images/mogura.png');
//	game.onload = function () {
//		var pit = new Pit(100, 100);
//		game.rootScene.addChild(pit);
//	}
//
//	game.start();
//}

//enchant();
//
//Pit = Class.create(Sprite, {
//	initialize:function (x, y) {
//		enchant.Sprite.call(this, 48, 48);
//		this.image = game.assets['images/mogura.png'];
//		this.x = x;
//		this.y = y;
//		this.addEventListener('enterframe', this.tick);
//	},
//	tick:function () {
//		this.frame++;
//		if (this.frame >= 4) this.frame = 0;
//	}
//});
//
//window.onload = function () {
//	game = new Game(320, 320);
//	game.fps = 16;
//
//	game.preload('images/mogura.png');
//	game.onload = function () {
//		var pit = new Pit(100, 100);
//		game.rootScene.addChild(pit);
//	}
//
//	game.start();
//}

//enchant();
//
//Pit = Class.create(Sprite, {
//	initialize:function (x, y) {
//		enchant.Sprite.call(this, 48, 48);
//		this.image = game.assets['images/mogura.png'];
//		this.x = x;
//		this.y = y;
//		this.addEventListener('enterframe', this.tick);
//		this.mode = 0;
//	},
//	tick:function () {
//		if (game.frame % 2 != 0) return;
//		switch(this.mode){
//			case 0:
//				this.frame++;
//				if (this.frame >= 4) this.mode = 1;
//				break;
//			case 1:
//				this.frame--;
//				if (this.frame <= 0) this.mode = 0;
//				break; 
//		}
//	}
//});
//
//window.onload = function () {
//	game = new Game(320, 320);
//	game.fps = 16;
//
//	game.preload('images/mogura.png');
//	game.onload = function () {
//		var pit = new Pit(100, 100);
//		game.rootScene.addChild(pit);
//	}
//
//	game.start();
//}

//enchant();
//
//rand = function (n) {
//	return Math.floor(Math.random() * n);
//}
//
//Pit = Class.create(Sprite, {
//	initialize:function (x, y) {
//		enchant.Sprite.call(this, 48, 48);
//		this.image = game.assets['images/mogura.png'];
//		this.x = x;
//		this.y = y;
//		this.addEventListener('enterframe', this.tick);
//		this.mode = 2;
//		this.nextMode = 0;
//		this.waitFor = game.frame + rand(100);
//	},
//	tick:function () {
//		if (game.frame % 2 != 0) return;
//		switch(this.mode){
//			case 0:
//				this.frame++;
//				if (this.frame >= 4) {
//					this.mode = 2;
//					this.nextMode = 1;
//					this.waitFor = game.frame + rand(100);
//				}
//				break;
//			case 1:
//				this.frame--;
//				if (this.frame <= 0) {
//					this.mode = 2;
//					this.nextMode = 0;
//					this.waitFor = game.frame + rand(100);
//				}
//				break;
//			case 2:
//				if (game.frame > this.waitFor) {
//					this.mode = this.nextMode;
//				}
//				break;
//		}
//	}
//});
//
//window.onload = function () {
//	game = new Game(320, 320);
//	game.fps = 16;
//
//	game.preload('images/mogura.png');
//	game.onload = function () {
//		var pit = new Pit(100, 100);
//		game.rootScene.addChild(pit);
//	}
//
//	game.start();
//}

//enchant();
//
//rand = function (n) {
//	return Math.floor(Math.random() * n);
//}
//
//Pit = Class.create(Sprite, {
//	initialize:function (x, y) {
//		enchant.Sprite.call(this, 48, 48);
//		this.image = game.assets['images/mogura.png'];
//		this.x = x;
//		this.y = y;
//		this.addEventListener('enterframe', this.tick);
//		this.addEventListener('touchstart', this.hit);
//		this.mode = 2;
//		this.nextMode = 0;
//		this.waitFor = game.frame + rand(100);
//	},
//	tick:function () {
//		if (game.frame % 2 != 0) return;
//		switch(this.mode){
//			case 0:
//				this.frame++;
//				if (this.frame >= 4) {
//					this.mode = 2;
//					this.nextMode = 1;
//					this.waitFor = game.frame + rand(100);
//				}
//				break;
//			case 1:
//				this.frame--;
//				if (this.frame <= 0) {
//					this.mode = 2;
//					this.nextMode = 0;
//					this.waitFor = game.frame + rand(100);
//				}
//				break;
//			case 2:
//				if (game.frame > this.waitFor) {
//					this.mode = this.nextMode;
//				}
//				break;
//		}
//	},
//	hit: function () {
//		if (this.frame >= 2) {
//			this.frame = 5;
//			this.mode = 2;
//			this.nextMode = 1;
//			this.waitFor = game.frame + 10;
//		}
//	}
//});
//
//window.onload = function () {
//	game = new Game(320, 320);
//	game.fps = 16;
//
//	game.preload('images/mogura.png');
//	game.onload = function () {
//		var pit = new Pit(100, 100);
//		game.rootScene.addChild(pit);
//	}
//
//	game.start();
//}

//enchant();
//
//rand = function (n) {
//	return Math.floor(Math.random() * n);
//}
//
//Pit = Class.create(Sprite, {
//	initialize:function (x, y) {
//		enchant.Sprite.call(this, 48, 48);
//		this.image = game.assets['images/mogura.png'];
//		this.x = x;
//		this.y = y;
//		this.addEventListener('enterframe', this.tick);
//		this.addEventListener('touchstart', this.hit);
//		this.mode = 2;
//		this.nextMode = 0;
//		this.waitFor = game.frame + rand(100);
//		this.currentlyWhacked = false;
//	},
//	tick:function () {
//		if (game.frame % 2 != 0) return;
//		switch(this.mode){
//			case 0:
//				this.frame++;
//				if (this.frame >= 4) {
//					this.mode = 2;
//					this.nextMode = 1;
//					this.waitFor = game.frame + rand(100);
//				}
//				break;
//			case 1:
//				this.frame--;
//				if (this.frame <= 0) {
//					this.mode = 2;
//					this.nextMode = 0;
//					this.waitFor = game.frame + rand(100);
//					this.currentlyWhacked = false;
//				}
//				break;
//			case 2:
//				if (game.frame > this.waitFor) {
//					this.mode = this.nextMode;
//				}
//				break;
//		}
//	},
//	hit: function () {
//		if (this.currentlyWhacked) return;
//		if (this.frame >= 2) {
//			this.currentlyWhacked = true;
//			this.frame = 5;
//			this.mode = 2;
//			this.nextMode = 1;
//			this.waitFor = game.frame + 10;
//		}
//	}
//});
//
//window.onload = function () {
//	game = new Game(320, 320);
//	game.fps = 16;
//
//	game.preload('images/mogura.png');
//	game.onload = function () {
//		var pit = new Pit(100, 100);
//		game.rootScene.addChild(pit);
//	}
//
//	game.start();
//}

//enchant();
//
//rand = function (n) {
//	return Math.floor(Math.random() * n);
//}
//
//Pit = Class.create(Sprite, {
//	initialize:function (x, y) {
//		enchant.Sprite.call(this, 48, 48);
//		this.image = game.assets['images/mogura.png'];
//		this.x = x;
//		this.y = y;
//		this.addEventListener('enterframe', this.tick);
//		this.addEventListener('touchstart', this.hit);
//		this.mode = 2;
//		this.nextMode = 0;
//		this.waitFor = game.frame + rand(100);
//		this.currentlyWhacked = false;
//	},
//	tick:function () {
//		if (game.frame % 2 != 0) return;
//		switch(this.mode){
//			case 0:
//				this.frame++;
//				if (this.frame >= 4) {
//					this.mode = 2;
//					this.nextMode = 1;
//					this.waitFor = game.frame + rand(100);
//				}
//				break;
//			case 1:
//				this.frame--;
//				if (this.frame <= 0) {
//					this.mode = 2;
//					this.nextMode = 0;
//					this.waitFor = game.frame + rand(100);
//					this.currentlyWhacked = false;
//				}
//				break;
//			case 2:
//				if (game.frame > this.waitFor) {
//					this.mode = this.nextMode;
//				}
//				break;
//		}
//	},
//	hit: function () {
//		if (this.currentlyWhacked) return;
//		if (this.frame >= 2) {
//			this.currentlyWhacked = true;
//			this.frame = 5;
//			this.mode = 2;
//			this.nextMode = 1;
//			this.waitFor = game.frame + 10;
//		}
//	}
//});
//
//window.onload = function () {
//	game = new Game(320, 320);
//	game.fps = 16;
//
//	game.preload('images/mogura.png');
//	game.onload = function () {
//		for (var y = 0; y < 4; y++) {
//			for (var x = 0; x < 4; x++) {
//				var pit = new Pit(x*48+20, y*48+20);
//				game.rootScene.addChild(pit);
//			}
//		}
//	}
//
//	game.start();
//}

//enchant();
//
//rand = function (n) {
//	return Math.floor(Math.random() * n);
//}
//
//Pit = Class.create(Sprite, {
//	initialize:function (x, y) {
//		enchant.Sprite.call(this, 48, 48);
//		this.image = game.assets['images/mogura.png'];
//		this.x = x;
//		this.y = y;
//		this.addEventListener('enterframe', this.tick);
//		this.addEventListener('touchstart', this.hit);
//		this.mode = 2;
//		this.nextMode = 0;
//		this.waitFor = game.frame + rand(100);
//		this.currentlyWhacked = false;
//	},
//	tick:function () {
//		if (game.frame % 2 != 0) return;
//		switch(this.mode){
//			case 0:
//				this.frame++;
//				if (this.frame >= 4) {
//					this.mode = 2;
//					this.nextMode = 1;
//					this.waitFor = game.frame + rand(100);
//				}
//				break;
//			case 1:
//				this.frame--;
//				if (this.frame <= 0) {
//					this.mode = 2;
//					this.nextMode = 0;
//					this.waitFor = game.frame + rand(100);
//					this.currentlyWhacked = false;
//				}
//				break;
//			case 2:
//				if (game.frame > this.waitFor) {
//					this.mode = this.nextMode;
//				}
//				break;
//		}
//	},
//	hit: function () {
//		if (this.currentlyWhacked) return;
//		if (this.frame >= 2) {
//			this.currentlyWhacked = true;
//			this.frame = 5;
//			this.mode = 2;
//			this.nextMode = 1;
//			this.waitFor = game.frame + 10;
//		}
//	}
//});
//
//window.onload = function () {
//	game = new Game(320, 320);
//	game.fps = 16;
//
//	game.preload('images/mogura.png');
//	game.onload = function () {
//		for (var i = 0; i < 7; i++) {
//			var pit = new Pit(rand(300), rand(300));
//			game.rootScene.addChild(pit);
//		}
//	}
//
//	game.start();
//}

//enchant();
//
//rand = function (n) {
//	return Math.floor(Math.random() * n);
//}
//
//Pit = Class.create(Sprite, {
//	initialize:function (x, y) {
//		enchant.Sprite.call(this, 48, 48);
//		this.image = game.assets['images/mogura.png'];
//		this.x = x;
//		this.y = y;
//		this.addEventListener('enterframe', this.tick);
//		this.addEventListener('touchstart', this.hit);
//		this.mode = 2;
//		this.nextMode = 0;
//		this.waitFor = game.frame + rand(100);
//		this.currentlyWhacked = false;
//	},
//	tick:function () {
//		if (game.frame % 2 != 0) return;
//		switch(this.mode){
//			case 0:
//				this.frame++;
//				if (this.frame >= 4) {
//					this.mode = 2;
//					this.nextMode = 1;
//					this.waitFor = game.frame + rand(100);
//				}
//				break;
//			case 1:
//				this.frame--;
//				if (this.frame <= 0) {
//					this.mode = 2;
//					this.nextMode = 0;
//					this.waitFor = game.frame + rand(100);
//					this.currentlyWhacked = false;
//				}
//				break;
//			case 2:
//				if (game.frame > this.waitFor) {
//					this.mode = this.nextMode;
//				}
//				break;
//		}
//	},
//	hit: function () {
//		if (this.currentlyWhacked) return;
//		if (this.frame >= 2) {
//			this.currentlyWhacked = true;
//			this.frame = 5;
//			this.mode = 2;
//			this.nextMode = 1;
//			this.waitFor = game.frame + 10;
//			scoreLabel.add(1);
//		}
//	}
//});
//
//ScoreLabel = Class.create(Label, {
//	initialize: function (x, y) {
//		enchant.Label.call(this, "SCORE:0");
//		this.x = x;
//		this.y = y;
//		this.score = 0;
//	},
//	add: function (pts) {
//		this.score += pts;
//		this.text = "SCORE:" + this.score;
//	}
//});
//
//window.onload = function () {
//	game = new Game(320, 320);
//	game.fps = 16;
//
//	game.preload('images/mogura.png');
//	game.onload = function () {
//		scoreLabel = new ScoreLabel(5, 5);
//		game.rootScene.addChild(scoreLabel);
//		for (var y = 0; y < 4; y++) {
//			for (var x = 0; x < 4; x++) {
//				var pit = new Pit(x*48+20, y*48+20);
//				game.rootScene.addChild(pit);
//			}
//		}
//	}
//
//	game.start();
//}

enchant();

rand = function (n) {
	return Math.floor(Math.random() * n);
}

maxDroid = 30;
totalDroid = 16;

Pit = Class.create(Sprite, {
	initialize:function (x, y) {
		enchant.Sprite.call(this, 48, 48);
		this.image = game.assets['images/mogura.png'];
		this.x = x;
		this.y = y;
		this.addEventListener('enterframe', this.tick);
		this.addEventListener('touchstart', this.hit);
		this.mode = 2;
		this.nextMode = 0;
		this.waitFor = game.frame + rand(100);
		this.currentlyWhacked = false;
	},
	tick:function () {
		if (game.frame % 2 != 0) return;
		switch(this.mode){
			case 0:
				this.frame++;
				if (this.frame >= 4) {
					this.mode = 2;
					this.nextMode = 1;
					this.waitFor = game.frame + rand(100);
				}
				break;
			case 1:
				this.frame--;
				if (this.frame <= 0) {
					this.mode = 2;
					this.nextMode = 0;
					this.waitFor = game.frame + rand(100);
					this.currentlyWhacked = false;
					maxDroid--;
					if (maxDroid <= 0) {
						this.mode = 3;
						if (maxDroid <= -1*totalDroid+1) {
							game.end(scoreLabel.score, scoreLabel.text);
						}
					}
				}
				break;
			case 2:
				if (game.frame > this.waitFor) {
					this.mode = this.nextMode;
				}
				break;
		}
	},
	hit: function () {
		if (this.currentlyWhacked) return;
		if (this.frame >= 2) {
			this.currentlyWhacked = true;
			this.frame = 5;
			this.mode = 2;
			this.nextMode = 1;
			this.waitFor = game.frame + 10;
			scoreLabel.add(1);
		}
	}
});

ScoreLabel = Class.create(Label, {
	initialize: function (x, y) {
		enchant.Label.call(this, "SCORE:0");
		this.x = x;
		this.y = y;
		this.score = 0;
	},
	add: function (pts) {
		this.score += pts;
		this.text = "SCORE:" + this.score;
	}
});

window.onload = function () {
	game = new Game(320, 320);
	game.fps = 16;

	game.preload('images/mogura.png');
	game.onload = function () {
		scoreLabel = new ScoreLabel(5, 5);
		game.rootScene.addChild(scoreLabel);
		for (var y = 0; y < 4; y++) {
			for (var x = 0; x < 4; x++) {
				var pit = new Pit(x*48+20, y*48+20);
				game.rootScene.addChild(pit);
			}
		}
	}

	game.start();
}