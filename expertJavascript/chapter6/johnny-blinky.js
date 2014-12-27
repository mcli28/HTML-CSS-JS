var five = require("johnny-five"),
board = new five.Board();

board.on("ready", function () {
	(new five.led(13)).strobe();
});