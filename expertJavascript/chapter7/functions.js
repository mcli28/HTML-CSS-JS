// Bad
var findFoo (isFoo) {
	if (isFoo === 'Bar') {
		return true;
	}
}

// Good
var findFoo (isFoo) {
	if (isFoo === 'Bar') {
		return true;
	}
	return false;
}

var findFoo = function (isFoo) {
	if (isFoo === 'Bar') {
		return true;
	}
}