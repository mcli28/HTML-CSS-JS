var serial = require("serialport"),
raddress = /usb|acm|com/i,
pin = 13;

serial.list(function (err, result) {
	var read = new Buffer(0),
	address, port, bite;

	if (result.length) {
		address = result.filter(function (val) {
			if (raddress.test(val.comName)) {
				return val;
			}
		}).map(function (val) {
			return val.comName;
		})[0];

		port = new serial.SerialPort(address, {
			baudrate: 57600,
			buffersize: 1
		});

		port.on("open", function () {
			var bite;

			function loop () {
				port.write([pin, (bite ^= 0x01)]);
			}

			setInterval(loop, 500);
		});
	} else {
		console.log("No valid port found");
	}
});

