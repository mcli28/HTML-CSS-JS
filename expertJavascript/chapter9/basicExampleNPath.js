var equalize;
equalize = function (a, b) {
	// NP[(if)] = NP[(if-range)] + NP[(else-range)] + NP[(expr)]
	// 				1			+	1				+	0
	// NPATH Score = 2
	if (a < b) {
		// NP[while] = NP[(while-range)] + NP[(expr)] + 1
		// 				1				+	0			+ 1
		// NPATH Score = 2
		while ( a <= b) {
			a++;
			console.log("a: " + a + " b: " + b);
		}
	} else {
		// NP[while] = NP[(while-range)] + NP[(expr)] + 1
		// 				1				+	0			+ 1
		// NPATH Score = 2
		while (b <= a){
			b++;
			console.log("a: " + a + " b: " + b);
		}
	}
	console.log("now everyone is equal");
}

// TOTAL NPATH Score: 2 * 2 * 2 = 8
equalize(10, 9);