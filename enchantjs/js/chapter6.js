enchant();
//class definitions

//player class
var Player = enchant.Class.create(enchant.Sprite, {
	initialize: function (x, y) {
		enchant.Sprite.call(this, 16, 16);
		this.image = game.assets['images/graphic.png'];
		this.x = x;
		this.y = y;
		this.frame = 0;
		game.rootScene.addEventListener('touchstart', function (e) {
			player.y = e.y;
			game.touched = true;
		});
		game.rootScene.addEventListener('touchend' , function (e) {
			player.y = e.y;
			game.touched = false;
		});
		game.rootScene.addEventListener('touchmove', function (e) {
			player.y = e.y;
		});
		this.addEventListener('enterframe', function () {
			if (game.touched && game.frame % 3 === 0) {
				var s = new PlayerShoot(this.x, this.y);
			}
		});
		game.rootScene.addChild(this);
	}
});

var Shoot = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y, direction){
		enchant.Sprite.call(this, 16, 16);
		this.image = game.assets['images/graphic.png'];
		this.x = x;
		this.y = y;
		this.frame = 1;
		this.direction = direction;
		this.moveSpeed = 10;

		this.addEventListener('enterframe', function () {
			this.x += this.moveSpeed * Math.cos(this.direction);
			this.y += this.moveSpeed * Math.sin(this.direction);
			if (this.y > 320 || this.x > 320 || this.x < -this.width || this.y < -this.height) {
				this.remove();
			}
		});
		game.rootScene.addChild(this);
	},
	remove: function () {
		game.rootScene.removeChild(this);
		delete this;
	}
});

var PlayerShoot = enchant.Class.create(Shoot, {
	initialize: function(x, y){
		Shoot.call(this, x, y, 0);
		this.addEventListener('enterframe', function () {
			for (var i in enemies) {
				if (enemies[i].intersect(this)) {
					var blast = new Blast(enemies[i].x, enemies[i].y);
					this.remove();
					enemies[i].remove();
					game.score += 100;
				}
			}
		});
	}
});

var Enemy = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y, theta){
		enchant.Sprite.call(this, 16, 16);
		this.image = game.assets['images/graphic.png'];
		this.x = x;
		this.y = y;
		this.theta = theta * Math.PI / 180;
		this.frame = 3;
		this.direction = Math.PI;
		this.moveSpeed = 3;
		this.addEventListener('enterframe', function () {
			this.direction += this.theta;
			this.x += this.moveSpeed * Math.cos(this.direction);
			this.y += this.moveSpeed * Math.sin(this.direction);
			if (this.y > 320 || this.x > 320 || this.x < -this.width || this.y < -this.height) {
				this.remove();
			}else if (this.age % 10 === 0) {
				var s = new EnemyShoot(this.x, this.y);
			}
		});
		game.rootScene.addChild(this);
	},
	remove: function () {
		game.rootScene.removeChild(this);
		delete enemies[this.key];
		delete this;
	}
});

var EnemyShoot = enchant.Class.create(Shoot, {
	initialize: function(x, y){
		Shoot.call(this, x, y, Math.PI);
		this.addEventListener('enterframe', function () {
			if (player.within(this, 8)) {
				game.life--;
				if (game.life <= 0) {
					game.end(game.score, "SCORE: " + game.score);
				}
			}
		});
	}
});

var Blast = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y){
		enchant.Sprite.call(this, 16, 16);
		this.image = game.assets['images/effect0.png'];
		this.x = x;
		this.y = y;
		this.frame = 0;
		this.duration = 20;
		this.addEventListener('enterframe', function () {
			this.frame = Math.floor(this.age / this.duration * 5);
			if (this.age == this.duration) this.remove();
		});
		game.rootScene.addChild(this);
	},
	remove: function () {
		game.rootScene.removeChild(this);
	}
});

var Background = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y){
		enchant.Sprite.call(this, 640, 320);
		this.image = game.assets['images/bg.png'];
		this.x = 0;
		this.y = 0;
		this.addEventListener('enterframe', function () {
			this.x--;
			if (this.x <= -320) this.x = 0;		
		});
		game.rootScene.addChild(this);
	}
});

window.onload = function () {
	game = new Core(320, 320);
	//game properties
	game.touched = false;
	game.fps = 24;
	game.score = 0;
	game.preload('images/graphic.png', 'images/effect0.png', 'images/bg.png');
	game.onload = function () {
		//in-game variables and properties
		Background = new Background();
		game.life = 3;
		player = new Player(0, 152);
		scoreLabel = new ScoreLabel(8, 8);
		enemies = [];
		lifeLabel = new MutableText(8, 320 - 32, game.width, "");

		lifeLabel.addEventListener('enterframe', function () {
			this.text = "LIFE " + "000000000".substring(0, game.life);
		});
		game.rootScene.addChild(lifeLabel);

		game.rootScene.addEventListener('enterframe', function () {
			if (rand(100) < 10) {
				var y = rand(320);
				if (y < 160) {
					theta = 1;
				}else{
					theta = -1;
				}
				var enemy = new Enemy(320, y, theta);
				enemy.key = game.frame;
				enemies[game.frame] = enemy;
			}
			scoreLabel.score = game.score;
		});
		game.rootScene.addChild(scoreLabel);
		//game.rootScene.backgroundColor = 'black';

		
	}
	
	game.start();
}
