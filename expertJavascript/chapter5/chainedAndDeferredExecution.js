Q = require('q');

var sleep = function (ms) {
	return function (callback) {
		setTimeout(callback, ms);
	}
}

var squareCPS = function (num, callback) {
	sleep(1000).call(this, function () {
		callback(num * num);
	});
}

squareCPS(10, function (num) {
	squareCPS(num, function (num) {
		squareCPS(num, function (num) {
			console.log(num);
		})
	})
});

var square = function (num) {
	var later = Q.defer();
	sleep(1000).call(this, function () {
		later.resolve(num * num);
	});
	return later.promise;
}

square(10)
.then(square)
.then(square)
.then(function (total) {
	console.log(total);
});
