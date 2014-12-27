function run (generator, callback) {
	var iterator = generator(resume);
	var data = null, yielded = false;
	var next = callback ? nextSafe : nextPlain;
	next = callback ? nextSafe : nextPlain;
	next();
	check();

	function nextSafe (item) {
		var n;
		try {
			n = iterator.next(item);
			if (!n.done) {
				if (typeof n.value === "function") n.value(resume());
				yielded = true;
				return;
			}
		}
		catch (err) {
			return callback(err);
		}
		return callback(null, n.value);
	}

	function nextPlain (item) {
		var cont = iterator.next(item).value;
		if (typeof cont === "function") cont(resume());
		yielded = true;
	}
	function resume () {
		var done = false;
		return function () {
			if (done) return;
			done = true;
			data = arguments;
			check();
		}
	}
	function check () {
		while (data && yielded) {
			var err = data[0];
			var item = data[1];
			data = null;
			yielded = false;
			if (err) return iterator.throw(err);
			next(item);
			yielded = true;
		}
	}
}

function sleep (ms) {
	return function (callback) {
		setTimeout(callback, ms);
	}
}

run(function* () {
	console.log("Started");
	yield sleep(1000);
	console.log("Almost Done");
	yield sleep(1000);
	console.log("Done!");
});

function* sub(n) {
	while (n) {
		console.log(n--);
		yield sleep(10);
	}
}

run(function* () {
	console.log("Start");
	yield* sub(10);
	console.log("End");
});
