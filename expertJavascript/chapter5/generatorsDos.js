var a, alphabet, sequence;

alphabet = function*() {
	var charCode = 65;
	while (charCode < 91) {
		yield String.fromCharCode(charCode++);
	}
	throw new Error("StopIteration")
}

sequence = alphabet();

a = 0;

while (a < 27) {
	try {
		console.log(sequence.next().value);
	} catch (e) {
		console.log(e);
	}
	a++;
}