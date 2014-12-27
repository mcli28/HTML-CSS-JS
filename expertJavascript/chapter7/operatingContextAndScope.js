// Good
;(function (window, document, undefined) {
	// My Awesome Library
	...
})(this, document);

// Bad because this might take longer than 100 milliseconds to complete.
setInterval(function () {
	findFoo();
}, 100);

// Good this will only be called again once findFoo has completed.
;(function main () {
	findFoo();
	setTimeout(main, 100);
})();

// Bad
var bar = findLooseyGoosey();

"use strict";

var foo = findStrictly();

// Good
var bar = findLooseyGoosey();

;(function () {
	"use strict";
	var foo = findStrictly();
})();

var findStrictly = function () {
	"use strict";
}