// Bad
function iterate () {
	var limit = 10;
	for (var x = 0; x < limit; x++) {
		console.log(x);
	}
}

// Good
function iterate () {
	var limit = 10,
	x = 0;

	for (x = 0; x < limit; x++) {
		console.log(x);
	}
}

// Bad
foo = 'bar';

// Good
var foo = 'bar';
let foo = 'bar';
const foo = 'bar';

// Bad
var foo = "foo";
var note = makeNote('Huge Success');

// Good
var foo = "foo",
	note = makeNote('Huge Success');

var foo = "foo",
	baz;

// Bad because it is easily misread as an equality test.
if (foo = bar) {...};

// Bad
function addByOne (num) {
	var num = num + 1;
	return num;
}

// Good
function addByOne (num) {
	var newNum = newNum + 1;
	return newNum;
}

// Bad because undefined means the variable is useful but as yet heas no value
this.unwanted = undefined;

/*
* Bad because calling delete is much slower than reassigning a value.
* Use delete if you want to remove the attribute from an objects list of keys.
*/
delet this.unwanted;

// Good
this.unwanted = null;
