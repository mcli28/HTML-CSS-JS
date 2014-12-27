console.log('blink start...');
var pin = 13;
var firmata = require('firmata');
var board = new firmata.Board('/dev/cu.usbmodem1411', function (err) {
	var bite;
	board.pinMode(pin, board.MODES.OUTPUT);
	function loop () {
		board.digitalWrite([pin, (bite ^= 0x01)]);
	}
	setInterval(loop, 500);
});
