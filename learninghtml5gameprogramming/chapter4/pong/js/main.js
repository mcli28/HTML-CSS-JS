var Game = SGF.require("Game");
var Input = SGF.require("Input");
var Rectangle = SGF.require("Rectangle");
var Label = SGF.require("Label");
var myGame = Game.getIntance();
var myInput = myGame.input;
var game_height = 400;
var game_width = 400;
myGame.getScript("Paddle.js", function () {
	myGame.leftPaddle = new Paddle();
	myGame.leftPaddle.setPosition(0, 150);
	myGame.addComponet(myGame.leftPaddle);
});