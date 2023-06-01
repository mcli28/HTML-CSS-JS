var fs = require("fs");
console.log("Starting");
fs.writeFile("write_sync1.txt", "Hello world! Synchronous!", function (error) {
	console.log("Written file");
});
console.log("Finished!");