// Listeners
someObject.on('message', function (text) {
	console.log("Message: " + text);
});
someObject.on("error", function (error) {
	console.log("error: ", error.stack);
})