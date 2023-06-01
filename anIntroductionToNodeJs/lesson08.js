var myModule = require("./my_module.js");
console.log("hello: ", myModule.helloWorldAgain());
console.log("My number: " + myModule.increment(10));
var github = require("./lesson08_1.js");
github.getRepos("mc_li28", function (repos) {
	console.log("mc_li28 repos", repos);
});