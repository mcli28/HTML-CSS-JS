var letter, alphabet, sequence;

function* alphabet() {
	var charCode = 65;
	while (charCode < 91) {
		yield String.fromCharCode(charCode++);
	}
}

sequence = alphabet(),
letter = sequence.next();

while (!letter.done) {
	console.log(letter.value);
	letter = sequence.next();
}