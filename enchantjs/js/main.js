//enchant();
//var game;
//window.onload = function () {
	//game = new Core(320, 320);
	//game.onload = function () {
		//sign = new Label();
		//sign.text = "hello world!";
		//game.rootScene.addChild(sign);
	//}
	//game.start();
//}

//var score = 10;
//score += 20;
//document.write(score);
//
//var num = 1;
//document.write(num++);
//num = 1;
//document.write(++num);

//var num0 = 4;
//var num1 = 7;
//document.write(num0 >= 1);
//document.write(num0 < num1);
//document.write(num0 === num1);

//var num0 = 4;
//var num1 = "4";
//document.write(num0 == num1);
//document.write(num0 === num1);

//document.write(!( 4 > 3));
//document.write('<br>');
//document.write((4 < 7) && (5 < 13));
//document.write('<br>');
//document.write((4 > 5) || (4 < 5));

//var num0 = 4;
//var num1 = 8;
//if (num0 >= num1) {
//	document.write(num0 + "is greater than or equal to" + num1 + ".");
//}
//else if(num0 < num1){
//	document.write(num0 + "is less than" + num1 + ".");
//}

//var date = new Date();
//
//var y = date.getFullYear();
//var m = date.getMonth() + 1;
//var d = date.getDate();
//
//var text = "the date is " + m + "/" + d + "/" + y;
//document.write(text);

//var i;
//var sumFor;
//var sumWhile;
//
//sumWhile = 0;
//i = 1;
//while(i <= 100) {
//	sumWhile += i;
//	i++;
//}
//
//document.write("the result using a while loop: " + sumWhile + "<br/>");
//
//sumFor = 0;
//for (i = 1; i<= 100; i++){
//	sumFor += i;
//}
//
//document.write("the result using a for loop: " + sumFor + "<br/>");//

//var sumWhile = 0;
//var i = 1;
//while(true){
//	sumWhile  += i;
//	i++;
//	if (i > 100) break;
//}
//
//document.write(sumWhile);

//var sumFor = 0;
//for (i = 1; i <= 100; i++) {
//	if (i % 2 != 0) continue;
//	sumFor = sumFor + i;
//}
//
//document.write("the sum of all even numbers up to is " + sumFor);

//var num;
//var text = "";
//num = Math.floor(Math.random() * 4);
//
//if (num === 0) {
//	text = "Super Lucky";
//} else if (num === 1) {
//	text = "So-so Luck";
//} else if (num === 2) {
//	text = "Minor Luck";
//} else{
//	text = "Bad Luck";
//}
//
//document.write("Your fortune: " + text);

//var num;
//var text = "";
//num = Math.floor(Math.random() * 4);
//
//switch (num) {
//	case 0:
//			textSwitch = "Excellent Luck";
//			document.write(textSwitch);
//			break;
//	case 1:
//			textSwitch = "Moderate Luck";
//			document.write(textSwitch);
//			break;
//	case 2:
//			textSwitch = "Small Luck";
//			document.write(textSwitch);
//			break;
//	default:
//			textSwitch = "Bad Luck";
//			document.write(textSwitch);
//			break;
//}

//var array = new Array(3);
//array[0] = "iphone";
//array[1] = "android";
//array[2] = "computer";
//
//var text = "";
//for (var i = 0; i < array.length; i++) {
//	text += array[i] + "<br/>"
//}
//document.write('<p>'+text+'</p>');

//var obj = new Object();
//obj["iPhone"] = "White";
//obj["Android"] = "Black";
//obj["Computer"] = "Silver";
//
//var textObj = "";
//textObj += "The iPhone is" + obj["iPhone"] + ".<br/>" 
//textObj += "The Android is" + obj["Android"] + ".<br/>"
//textObj += "The Computer is" + obj["Computer"] + ".<br/>"
//document.write(textObj);

//function buy (device) {
//	document.write("I will buy the " + device + ".<br/>");
//}
//buy("iPhone");
//buy("Android");

//var bob = 39;
//
//function villager () {
//	var bob = Math.floor(Math.random() * 50 + 50);
//	this.bob += 1;
//	document.write("King Bob`s age is " + bob + ".<br/>");
//	document.write("Villager Bob, this Bob, is " + this.bob + ".");
//}
//
//villager();

//function Software () {
//}
//Software.prototype.name = "";
//Software.prototype.language = "";
//Software.prototype.output = function () {
//	document.write(this.name + " is written in " + this.language + "<br/>");
//}
//var accounting = new Software();
//accounting.name = "Spreadsheet Master";
//accounting.language = "Java";
//accounting.output();

//------------------------------chapter 3 -----------------------------------//

//enchant();
//
//window.onload = function () {
//	var game = new Core(320, 320);
//	game.addLabel = function (text, color, x, y) {
//		var label = new Label(text);
//		label.font = "16px sans-serif";
//		label.color = color;
//		label.x = x;
//		label.y --;
//		game.rootScene.addChild(label);
//		label.addEventListener(Event.ENTER_FRAME, function () {
//			if (label.age > 10) game.rootScene.removeChild(label);
//		});
//	}
//
//	game.addLabel("50 points", "rgb(255, 0, 0)", 50, 50);
//	game.addLabel("100 points", "rgb(50, 0, 100)", 50, 200);
//
//	function rand (num) {
//		return Math.floor(Math.random() * num);
//	}
//	if (game.frame % 3 === 0) {
//		var score = rand(100);
//		var r = rand(256);
//		var g = rand(256);
//		var b = rand(256);
//		var x = rand(300);
//		var y = rand(300);
//		game.addLabel(score + " Points ", "rgb (" + r + "," + g + "," + b + ")" , x, y);
//	}
//
//
//	game.start();
//}

//enchant();
//window.onload = function () {
//	var game = new Core(320, 320);
//	game.preload('chara1.png');
//	game.onload = function () {
//		var bear = new Sprite(32, 32);
//		bear.frame = [5, 5, 6, 6, 5, 5, 7, 7];
//		bear.image = game.assets['chara1.png'];
//		game.rootScene.addChild(bear);
//		bear.addEventListener(Event.ENTER_FRAME, function () {
//			if (bear.scaleX === 1){
//				bear.x += 3;
//				if (bear.x > 320 - 32) bear.scaleX = -1;
//			}else{
//				bear.x -= 3;
//				if (bear.x < 0) bear.scaleX = 1;
//			}
//		});
//	}
//	game.start();
//}

//var DIR_LEFT = 0;
//var	DIR_RIGHT = 1;
//var DIR_UP = 2;
//var DIR_DOWN = 3;
//enchant();
//window.onload = function () {
//	var game = new Core(320, 320);
//	game.fps = 16;
//	game.preload('images/chara0.png', 'images/map0.png');
//	game.onload = function () {
//		var girl = new Sprite(32, 32);
//		girl.image = game.assets['images/chara0.png'];
//		girl.x = 160 - 16;
//		girl.y = 160 - 16;
//		girl.frame = 7;
//		girl.dir = DIR_DOWN;
//		girl.anim = [
//					15, 16, 17, 16,
//					24, 25, 26, 24,
//					33, 34, 35, 34,
//					6, 7, 8, 7];
//
//		var bg = new Sprite(320, 320);
//		var maptip = game.assets['images/map0.png']
//		var image = new Surface(320, 320);
//		for (var j = 0; j < 320; j += 16) {
//			for (var i = 0; i < 320; i += 16) {
//				image.draw(maptip, 0, 0, 16, 16, i, j, 16, 16);
//			}
//		}
//		bg.image = image;
//		game.rootScene.addChild(bg);
//		game.rootScene.addChild(girl);
//		girl.addEventListener(Event.ENTER_FRAME, function () {
//			if (girl.y > girl.toY) {
//				girl.dir = DIR_UP;
//				if (Math.abs(girl.y - girl.toY) < 3) {
//					girl.y = girl.toY;
//				}else{
//					girl.y -= 3;
//				}
//			}
//			else if (girl.y < girl.toY) {
//				girl.dir = DIR_DOWN;
//				if (Math.abs(girl.y - girl.toY) < 3) {
//					girl.y = girl.toY;
//				}else{
//					girl.y += 3;
//				}
//			}
//			if (girl.x > girl.toX) {
//				girl.dir = DIR_LEFT;
//				if (Math.abs(girl.x - girl.toX) < 3) {
//					girl.x = girl.toX;
//				}else{
//					girl.x -= 3;
//				}
//			}
//			else if (girl.x < girl.toX){
//				girl.dir = DIR_RIGHT;
//				if (Math.abs(girl.x - girl.toX) < 3) {
//					girl.x = girl.toX;
//				}else{
//					girl.x += 3;
//				}
//			}
//			if (girl.x == girl.toX && girl.y == girl.toY) girl.age = 1;
//			girl.frame = girl.anim[girl.dir * 4 + (girl.age % 4)];
//		});
//		bg.addEventListener(Event.TOUCH_MOVE, function (e) {
//			girl.toX = e.x - 16;
//			girl.toY = e.y - 16;
//		});
//	}
//	game.start();
//}

//var STATUS_WAIT = 0;
//var STATUS_WALK = 1;
//var STATUS_JUMP = 2;
//enchant();
//window.onload = function () {
//	var game = new Core(320, 320);
//	game.fps = 16;
//	game.preload('images/chara1.png', 'images/map0.png');
//	game.onload = function () {
//		var bg = new Sprite(32, 32);
//		bg.backgroundColor = "rgb(0, 200, 255)";
//		var maptip = game.assets['images/map0.png'];
//		var image = new Surface(320, 320);
//
//		for (var i = 0; i < 320; i += 16) {
//			image.draw(maptip, 3 * 16, 0, 16, 16, i, 320 - 16, 16, 16);
//		}
//		bg.image = image;
//		game.rootScene.addChild(bg);
//
//		var bear = new Sprite(32, 32);
//		bear.image = game.assets['images/chara1.png'];
//		bear.x = 160 -16;
//		bear.y = 320 - 16 - 32;
//		bear.status = STATUS_WAIT;
//		bear.anim = [10, 11, 10, 12];
//		bear.frame = 10;
//		game.rootScene.addChild(bear);
//
//		var pad = new Pad();
//		pad.x = 0;
//		pad.y = 220;
//		game.rootScene.addChild(pad);
//
//		bear.addEventListener(Event.ENTER_FRAME, function () {
//			if (bear.status == STATUS_WAIT) {
//				bear.frame = bear.anim[0];
//			}else if (bear.status == STATUS_WALK) {
//				bear.frame = bear.anim[bear.age % 4];
//			}else if (bear.status == STATUS_JUMP) {
//				bear.frame = bear.anim[1];
//			}
//
//			if (bear.status != STATUS_JUMP) {
//				bear.status = STATUS_WAIT;
//				if (game.input.up) {
//					bear.status = STATUS_JUMP;
//					bear.age = 0;
//				}
//			}
//			if (game.input.left) {
//				bear.x -= 3;
//				bear.scaleX = -1;
//				if (bear.status != STATUS_JUMP) bear.status = STATUS_WALK;
//			}
//			else if (game.input.right) {
//				bear.x += 3;
//				bear.scaleX = 1;
//				if (bear.status != STATUS_JUMP) bear.status = STATUS_WALK;
//			}
//			if (bear.status == STATUS_JUMP) {
//				if (bear.age < 8) {
//					bear.y -= 8;
//				}else if (bear.age < 16) {
//					bear.y += 8;
//				}else{
//					bear.status = STATUS_WAIT;
//				}
//			}
//
//		});
//
//	}
//	game.start();
//}
