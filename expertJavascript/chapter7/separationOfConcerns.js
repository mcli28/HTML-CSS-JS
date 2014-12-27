var view = {
	title: "Joe"
	calc: function () {
		return 2 + 4;
	}
}, output;

// Bad
output = '<div><h5>' + title + '</h5><p>' + calc() + '</p></div>'

// Good
var output = Mustache.compilePartial('my-template', view);

// Bad
<button onclick="doSomething()" id="something-btn"> Click Here </button>

// Good
var element = document.getElementById('something-btn');
element.addEventListener("click", doSomething, false);