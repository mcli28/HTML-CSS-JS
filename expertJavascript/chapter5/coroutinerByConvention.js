var toggle = (function*() {
	while (true) {
		yield true
		yield false
	}
})();
for (var x = 0; x < 5; x++) {
	console.log(toogle.next().value);
}
