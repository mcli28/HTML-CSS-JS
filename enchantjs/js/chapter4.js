//enchant();
//window.onload = function () {
//	var game = new Core(320, 320);
//	game.fps = 16;
//
//	game.preload('images/bg01.jpg', 'images/bg02.jpg', 'images/bg03.jpg');
//
//	game.onload = function () {
//		var bg = makeBackground(game.assets['images/bg01.jpg']);
//		game.rootScene.addChild(bg);
//		game.rootScene.addChild(makeMessage("this is the root scene."));
//		var select = makeSelect("[Move to Scene 1]", 320 - 32 * 2);
//		select.addEventListener(Event.TOUCH_START, function (e) {
//			game.pushScene(game.makeScene1());
//		});
//		game.rootScene.addChild(select);
//	}
//	game.makeScene1 = function () {
//		var scene = new Scene();
//		var bg = makeBackground(game.assets['images/bg02.jpg']);
//		scene.addChild(bg);
//		scene.addChild(makeMessage("This is Scene 1."));
//
//		var select = makeSelect("[Move to Scene 2]", 320 - 32 * 2);
//		select.addEventListener(Event.TOUCH_START, function (e) {
//			game.pushScene(game.makeScene2());
//		});
//		scene.addChild(select);
//		scene.addChild(makeReturn(1));
//		return scene;
//	}
//
//	game.makeScene2 = function () {
//		var scene = new Scene();
//		var bg = makeBackground(game.assets['images/bg03.jpg']);
//		scene.addChild(bg);
//		scene.addChild(makeMessage("This is Scene 2."));
//		scene.addChild(makeReturn(0));
//		return scene;
//	}
//	game.start();
//}
//
//function makeBackground (image) {
//	var bg = new Sprite(320, 320);
//	bg.image = image;
//	return bg;
//}
//
//function makeMessage (text) {
//	var label = new Label(text);
//	label.font = "16px monospace";
//	label.color = "rgb(255, 255, 255)";
//	label.backgroundColor = "rgba(0, 0, 0, 0.6)";
//	label.y = 320 - 32 * 3;
//	label.width = 320;
//	label.height = 32 * 3;	
//	return label;
//}
//
//function makeSelect (text, y) {
//	var label = new Label(text);
//	label.font = "16px monospace";
//	label.color = "rgb(255, 200, 0)";
//	label.y = y;
//	label.width = 320;
//	return label;
//}
//
//function makeReturn (lineNumber) {
//	var game = enchant.Game.instance;
//	var returnLabel = makeSelect("[Return]", 320 - 32 * (2 - lineNumber));
//	returnLabel.addEventListener(Event.TOUCH_START, function (e) {
//		game.popScene();
//	});
//	return returnLabel;
//}

//enchant();
//window.onload = function () {
//	var game = new Core(320, 320);
//	game.fps = 16;
//	game.score = 0;
//	var label;
//	var bear;
//
//	game.preload('images/chara1.png', 'images/map0.png', 'images/icon0.png');
//	game.onload = function () {
//		var bg = new Sprite(320, 320);
//		bg.backgroundColor = "rgb(0, 200, 255)";
//		var maptip = game.assets['images/map0.png'];
//		var image = new Surface(320, 320);
//
//		for (var i = 0; i < 320; i += 16) {
//			image.draw(maptip, 7 * 16, 0, 16, 16, i, 320 - 16, 16, 16);
//		}
//		bg.image = image;
//		game.rootScene.addChild(bg);
//
//		var pad = new Pad();
//		pad.x = 0;
//		pad.y = 220;
//		game.rootScene.addChild(pad);
//
//		label = new Label("");
//		game.rootScene.addChild(label);
//
//		bear = new Sprite(32, 32);
//		bear.image = game.assets['images/chara1.png'];
//		bear.x = 160 - 16;
//		bear.y = 320 - 16 - 32;
//		bear.anim = [10, 11, 10, 12];
//		bear.frame = bear.anim[0];
//		game.rootScene.addChild(bear);
//
//		bear.addEventListener(Event.ENTER_FRAME, function () {
//			if (game.input.left) {
//				bear.x -= 3;
//				bear.scaleX = -1;
//			}
//			else if (game.input.right) {
//				bear.x += 3;
//				bear.scaleX = 1;
//			}
//			if (!game.input.left && !game.input.right) {
//				bear.frame = bear.anim[0];
//			}else{
//				bear.frame = bear.anim[bear.age % bear.anim.length];
//			}
//		});
//	}
//
//	game.addApple = function (x, speed) {
//		var apple = new Sprite(16, 16);
//		apple.image = game.assets['images/icon0.png'];
//		apple.x = x;
//		apple.y = -16;
//		apple.frame = 15;
//		apple.speed = speed;
//		game.rootScene.addChild(apple);
//
//		apple.addEventListener(Event.ENTER_FRAME, function () {
//			apple.y += apple.speed;
//			if (bear.within(apple, 16)) {
//				game.score += 30;
//				game.rootScene.removeChild(apple);
//			}
//			else if(apple.y > 320 - 32){
//				game.rootScene.removeChild(apple);
//			}
//		});
//	}
//	
//	game.frameLeft = 10 * game.fps;
//	game.rootScene.addEventListener(Event.ENTER_FRAME, function () {
//		game.framesLeft--;
//		console.log("hola"+game.frameLeft);
//		if (game.framesLeft > 0) {
//			if ((game.frame % 10) === 0) {
//				var x = rand(300);
//				var speed = 3 + rand(6);
//				game.addApple(x, speed);
//			}
//			label.text = "Time left:" + Math.floor(game.framesLeft / game.fps) + "<br/>Score:" + game.score;
//		} else {
//			game.end(game.score, "Your score is " + game.score);
//		}
//	});	
//
//	game.start();
//}
//
//function rand (num) {
//	return Math.floor(Math.random() * num);
//}

//var DIR_LEFT = 0;
//var DIR_RIGHT = 1;
//var DIR_UP = 2;
//var DIR_DOWN = 3;
//
//enchant();
//window.onload = function () {
//	var game = new Core(320, 320);
//	game.fps = 16;
//
//	game.preload('images/map0.png', 'images/chara0.png');
//
//	game.onload = function () {
//
//		var map = new Map(16, 16);
//		map.image = game.assets['images/map0.png'];
//		map.loadData([
//		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//		[0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0],
//		[0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,0],
//		[0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,0],
//		[0,0,2,2,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,2,2,0,0],
//		[0,0,2,2,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,2,2,0,0],
//		[0,0,2,2,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0],
//		[0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,0,0],
//		[0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,0,0,0,0],
//		[0,0,0,0,0,2,2,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0],
//		[0,0,0,0,0,2,2,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0],
//		[0,0,0,2,2,2,2,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0],
//		[0,0,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0],
//		[0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0],
//		[0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0],
//		[0,0,0,2,2,0,0,0,0,0,0,0,2,2,0,0,0,0,0,2,2,0,0],
//		[0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0],
//		[0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0],
//		[0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0],
//		[0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0],
//		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//		],[
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,18,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,23,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,23],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,23],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,18,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,23,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,25,-1,-1],
//		[-1,23,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
//		]);
//
//		map.collisionData = [
//			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
//			[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1],
//			[1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1],
//			[1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1],
//			[1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1],
//			[1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1],
//			[1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1],
//			[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1],
//			[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1],
//			[1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],
//			[1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],
//			[1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
//			[1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1],
//			[1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1],
//			[1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1],
//			[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1],
//			[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1],
//			[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
//			[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
//			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
//
//		var player = new Sprite(32, 32);
//		player.image = game.assets['images/chara0.png'];
//		player.x = 2 * 16;
//		player.y = 16;
//		player.dir = DIR_DOWN;
//		player.anim = [
//						9, 10, 11, 10,
//						18, 19, 20, 19,
//						27, 28, 29, 28,
//						0, 1, 2, 1];
//
//		player.addEventListener(Event.ENTER_FRAME, function(){
//
//			if (game.input.up) {
//				player.dir = DIR_UP;
//				player.y -= 4;
//				if (map.hitTest(player.x + 16, player.y + 32)) player.y += 4;
//			}
//			else if (game.input.down) {
//				player.dir = DIR_DOWN;
//				player.y += 4;
//				if (map.hitTest(player.x + 16, player.y + 32)) player.y -= 4;
//			}
//
//			else if (game.input.left) {
//				player.dir = DIR_LEFT;
//				player.x -= 4;
//				if (map.hitTest(player.x + 16, player.y + 32)) player.x += 4;
//			}
//			else if (game.input.right) {
//				player.dir = DIR_RIGHT;
//				player.x += 4;
//				if (map.hitTest(player.x + 16, player.y + 32)) player.x -= 4;
//			}
//
//			if (!game.input.up && !game.input.down && !game.input.left && !game.input.right)
//				player.age = 1;
//				player.frame = player.anim[player.dir * 4 + (player.age % 4)];
//
//			if (calcLen(player.x + 16, player.y + 16, 20 * 16 + 8, 17 * 16 + 8) <= 16) {
//				game.end(0, "Goal");
//			}
//		});
//
//		var stage = new Group();
//		stage.addChild(map);
//		stage.addChild(player);
//		game.rootScene.addChild(stage);
//
//		var pad = new Pad();
//		pad.y = 220;
//		game.rootScene.addChild(pad);
//
//		game.rootScene.addEventListener(Event.ENTER_FRAME, function (e) {
//			var x = Math.min((game.width - 16) / 2 - player.x, 0);
//			var y = Math.min((game.height - 16) / 2 - player.y, 0);
//			x = Math.max(game.width, x + map.width) - map.width;
//			y = Math.max(game.height, y + map.height) - map.height;
//			stage.x = x;
//			stage.y = y;			
//		});
//
//	}
//
//	function calcLen (x0, y0, x1, y1) {
//		return Math.sqrt((x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1));
//	}
//
//	game.start();
//}

enchant();
window.onload = function () {
	var game = new Core(320, 320);
	game.fps = 16;
	game.score = 0;
	game.bananaNum = 10;
	game.time = 0;
	game.preload(['Skyrim.wav', 'images/icon0.png', 'images/map0.png']);
	game.onload = function () {
		var bg = new Sprite(32, 32);
		var maptip = game.assets['images/map0.png'];
		var image  = new Surface(320, 320);
		for (var j = 0; j < 320; j += 16) {
			for (var i = 0; i < 320; i += 16) {
				image.draw(maptip, 16 * 2, 0, 16, 16, i, j, 16, 16);
			}
		}
		bg.image = image;
		game.rootScene.addChild(bg);

		for (var k = 0; k < 10; k++) game.addBanana();

		game.addDokuro();

		game.rootScene.addEventListener(Event.ENTER_FRAME , function(){
			game.time ++;
		});
	}

	game.se = game.assets['se1.wav'];

	game.addDokuro = function () {
		var dokuro = new Sprite(16, 16);
		dokuro.x = rand(260) + 20;
		dokuro.y = rand(260) + 20;
		dokuro.image = game.assets['images/icon0.png'];
		dokuro.frame = 11;
		dokuro.addEventListener(Event.TOUCH_START , function () {
			game.end(0, "Game Over");
		});
		game.rootScene.addChild(dokuro);
	}

	game.addBanana = function () {
		var banana = new Sprite(16, 16);
		banana.x = rand(260) + 20;
		banana.y = rand(260) + 20;
		banana.image = game.assets['images/icon0.png'];
		banana.frame = 16;
		banana.addEventListener(Event.TOUCH_START , function (e) {
			game.rootScene.removeChild(this);
			game.se.play();
			game.bananaNum--;

			if (game.bananaNum === 0) {
				game.end(1000000 - game.time, (game.time / game.fps).toFixed(2) + " seconds to Clear!");
			}
		});
		game.rootScene.addChild(banana);
	}
	game.start();
}

function rand (num) {
	return Math.floor(Math.random() * num);
}