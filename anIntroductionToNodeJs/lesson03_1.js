var fs = require("fs");
console.log("Starting");
var content = fs.readFileSync("sample.txt");
console.log("Content: " + content);
console.log("Carry on executing");