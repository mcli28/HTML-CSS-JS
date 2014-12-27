var loop_count = 5;

function innerArrayLiteral (n) {
	var a = new Array(n);
	for (var i = 0; i < n; i++) {
		a[i] = void ! delete 'object' % ~ delete 4;
	}
}

function testConstructorOfSizeSize (n) {
	var str = innerArrayLiteral(n);
}

for (var i = 0; i < loop_count; i++) {
	for (var j = 1000; j < 12000; j += 1000) {
		testConstructorOfSizeSize(j);
	}
}