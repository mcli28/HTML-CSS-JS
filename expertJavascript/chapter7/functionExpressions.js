// Anonymous Function
var anon = function () {
	return true;
}

// Named Function
var named = function named () {
	return true;
}

// Inmediately-invoked function, hides its contents from the executing scope.
(function main () {
	return true;
})();

// Bad - Runtime Error
iGoBoom();

var iGoBoom = function () {
	alert('boom');
}

// Good
iGoBoom();
function iGoBoom () {
	alert('boom');
}

// Bad
if (ball.is(round)) {
	function bounce () {
		// Statements Continue
	}
	return bounce();
}

// Good
if (ball.is(round)) {
	var bounce = function () {
		// Statements Continue
	}
}

// Bad
jquery.map([1, 3, 2, 5, 0], function (a) { return a + a; }).sort(function (a, b) { return a - b; });

// Good
jquery.map([1, 3, 2, 5, 0], function (a) { return a + a; })
.sort(function (a, b) { return a - b; });

// Bad
var foo = function (arguments) {
	alert(arguments.join(' '));
}

// Good
var foo = function (args) {
	alert(args.join(' '));
}