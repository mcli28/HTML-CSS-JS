enchant();
var game;

function rand (n) {
	return Math.floor(Math.random() * n);
}

var maxDroid = 100;
var hitDroid = 0;
var combo = 1;

var ScoreLabel = Class.create(Label, {
	initialize: function(x, y){
		enchant.Label.call(this, "SCORE: 0");
		this.x = x;
		this.y = y;
		this.score = 0;
		//this.color = "#ffffff";
	},
	add: function (pts) {
		this.score += pts;
		this.text = "SCORE:" + this.score;
	}
});

var Droid = Class.create(Sprite3D, {
	initialize: function(x, y, z){
		Sprite3D.call(this);
		this.set(game.assets['images/droid.dae']);
		this.scaleX = 0.3;
		this.scaleY = 0.3;
		this.scaleZ = 0.3;
		this.x = x;
		this.y = y;
		this.z = z;
		this.a = 0.01;
		this.addEventListener('enterframe', this.tick);
		this.addEventListener('touchstart', this.hit);
		this.mode = 2;
		this.nextMode = 0;
		this.waitFor = game.rootScene.age + rand(100) + 75;
	},
	tick: function () {
		if (game.rootScene.age === 0) {
			this.waitFor++;
		}
		switch (this.mode) {
			case 0:
				this.a *= 0.98;
				this.y += this.a;
				if (this.y >= -1.2) {
					this.mode = 2;
					this.nextMode = 1;				
					this.waitFor = game.game.rootScene.age + rand(100) + 10;
				}
				break;
			case 1:
				this.y -= this.a;
				this.a *= 0.98;
				if (this.y <= -1.5) {
					this.mode = 2;
					this.nextMode = 0;
					this.waitFor = game.game.rootScene.age + rand(100);
					maxDroid--;
					if (maxDroid <= 0) this.mode = 3;
				}
				break;
			case 2:
				if (this.y < -1.5) this.y += 0.05;
				if (game.rootScene.age > this.waitFor) {
					this.mode = this.nextMode;
					this.a = 0.05;
				}
				break;
			case 3:
				break;
			case 4:
				this.y += this.a;	
				this.a *= 1.1;
				if (game.rootScene.age > this.waitFor) {
					this.nextMode = 0;
					this.waitFor = game.rootScene.age + rand(50) + 30;
					this.mode = 2;
					this.y = -3;
					this.a = 0.05;				
				}
				break;
		}
	},
	hit: function () {
		if (this.y >= -1.4) {
			this.mode = 4;
			this.a = 0.02;
			this.waitFor = game.rootScene.age + 30;
			scoreLabel.add(combo);
			combo++;
			hitDroid++;
		}else{
			combo = 1;
		}
	}
});
window.onload = function () {
	game = new Core(320, 320);
	game.fps = 60;

	game.preload('images/pit.png', 'images/sign.png', 'images/droid.dae');
	game.onload = function () {
		scene = new Scenee3D();
		scene.setDirectionalLight(new DirectionalLight());
		camera = new Camera3D();
		camera.y = 14;
		camera.z = -8.1;
		camera.centerZ = -10;
		camera.upVectorZ = 10;
		camera.upVectorY = 100;
		scene.setCamera(camera);

		var pit = new PlaneXZ();
		pit.scaleX = 3.0;
		pit.scaleY = 3.0;
		pit.scaleZ = 3.0;
		var texture = new Texture(game.assets['images/pit.png'], {flipY: false});
		texture.ambient = [1.0, 1.0, 1.0, 1.0];
		pit.mesh.texture = texture;
		pit.y = -1;
		pit.z = -10;
		scene.addChild(pit);		

		var base = new PlaneXY();
		base.z = -8.6;
		base.y = -2.5;
		base.scaleX = 3.0;
		base.scaleY = 3.0;
		base.scaleZ = 3.0;
		base.mesh.setBaseColor('#ff0000');
		scene.addChild(base);

		var sign = new PlaneXY();
		sign.scaleX = 2.0; 	
		sign.scaleY = 2.0; 	
		sign.scaleZ = 2.0;
		var signTexture = new Texture(game.assets['images/sign.png']);
		signTexture.ambient = [1.0, 1.0, 1.0, 1.0];
		sign.mesh.texture = signTexture;
		sign.y = 0.5;
		sign.z = -8.6;
		scene.addChild(sign);

		for (var j = 0; j < 3; j++) {
			for (var i = 0; i < 4; i++) {
				scene.addChild(new Droid(i * 0.75 - 1.1, -1.5, -9.2 - j * 0.9));
			}
		}

		game.addEventListener('enterframe' , function () {
			if (maxDroid <= 0) {
				game.end(scoreLabel.score, "You wacked " + hitDroid + " Droids for a score of " + scoreLabel + " points!");
			}
			if (game.game.rootScene.age < 130) {
				camera.z += 0.05;
				camera.y -= 0.1;				
			}
		});

		scoreLabel = new ScoreLabel(5, 5);
		game.rootScene.addChild(scoreLabel);
	}

	game.start();
}
