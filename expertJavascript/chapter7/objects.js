// Ok
var person = new Object();
person.firstName = "Jhon";
person.lastName = "Doe";

// Better
var person = {
	firstName: "Jhon",
	lastName: "Doe"
}

// Bad
var person = { class : "Person" };

// Good
var person = { Klass : "Person" };


