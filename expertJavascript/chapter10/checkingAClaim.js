eval(require('fs').readFileSync('./jschek.js', 'utf8'));

function flipSign (val) {
	return ~ (val - 1);
}

function predicate (verdict, value) {
	return verdict(value === flipSign(flipSign(value)));
}

JSC.on_report(function (str) {
	console.log(str);
});

JSC.test("flip integers", predicate, [JSC.integer(-10, 10)]);
JSC.test("flip numbers", predicate, [JSC.number(-10, 10)]);