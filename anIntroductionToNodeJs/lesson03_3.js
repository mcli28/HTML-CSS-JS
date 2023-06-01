var fs = require("fs");
console.log("Starting");
fs.writeFileSync("write_sync.txt", "Hello world! Synchronous!");
console.log("Finished!");