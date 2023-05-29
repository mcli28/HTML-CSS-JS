classes.save({key: "CISC650", name: "Intro to Computer Science"});
classes.save({key: "CISC615", name: "Analysis of Algorithms"});
classes.get("CISC615", function (r) {
	console.log(r);
});