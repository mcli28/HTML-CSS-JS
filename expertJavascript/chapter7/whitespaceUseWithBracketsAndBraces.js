// Less Readable
if (foo, bar, baz) {}

// More Readable
if (foo, bar, baz) {

}

//	No whitespace neede when there is a single argument
if (foo) ...

// No whitespace when a parenthesis is used to form a closure
;(function () {...});

// No whitespace when brackets are used as a function argument
function sortThis([2, 3, 4, 1])