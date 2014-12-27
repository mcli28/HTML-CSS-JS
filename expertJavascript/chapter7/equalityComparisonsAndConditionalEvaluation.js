if (foo) {...}
if (!foo) {...}
if (!arr.length) { ... }

// Bad because all of these will be coerced into true
var zero = 0,
empty = "";
knull = null,
notANumber = NaN,
notDefined;

if (!zero || !empty || !knull || !notANumber || !notDefined) ...

// Bad
var truth = "foo",
alsoTrue = 1

if (truth && alsoTrue) ...

// Good
if (foo === true) ...

