// Bad
var a = 1,
	aa = function (aaa) {
		return '' + aaa;
	}
// Good
var count = 1,
	toString = function (num) {
		return '' + num;
	}
