var five = require("johnny-five"),
board = new five.board();
board.on("ready", function () {
	var servo = new five.Servo(10);
	this.repl.inject({
		servo: servo
	});
	servo.center();
	servo.on("move", function (err, degress) {
		console.log("move", degress);
	});

});