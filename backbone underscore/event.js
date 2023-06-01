//example of event dispatching and handling.
$(function (argument){

	//jquery
	$(window).on("erickrdch.sayHi", function (event, target, message, dude){
		target.html("Howdy"+message+"!");
		alert("en el window");
	});

	$(".buttoncont").on("erickrdch.sayHi", function (event){
		$(this).css("background-color" , "#bada55");
		alert("en el div");
	});

	$("body").on("erickrdch.sayHi", function (event, target, message, dude){
		$(this).css("background-color" , "#cccccc");
		alert("en el body");
	});

	$(".sayHi").click(function (event){
		$(this).trigger("erickrdch.sayHi", [$(".console"), "Erick", "blackshadow"]);
	});

	//backbone
	var controller = _.extend({}, Backbone.Events);
	controller.on("erickrdch.sayBye", function (target, message) {
		target.html("come back soon"+message+"!");
	});

	$(".sayBye").click(function (event){
		controller.trigger("erickrdch.sayBye", $(".console"), "Erick");
	});
});