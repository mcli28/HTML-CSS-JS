var fs = require("fs");
console.log("Starting");
fs.readFile("sample.txt", function (error, data) {
	console.log("contents: " + data);
});
console.log("Carry on excecuting");