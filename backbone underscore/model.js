$(function(){
	var UserModel = Backbone.Model.extend({
		defaults: function (){
			return{
				name: "hely ruiz",
				age: 18 + parseInt(Math.random()*20),
				employed: "no"
				};
		},

		validate: function (attributes){
			if(_.isNaN(parseInt(attributes.age))){
				throw "age is NaN";
				return "age is NaN";
			}

			if (attributes.age < 18){
				throw "grow up!";
				return "grow up";
			}
		}
	});

	var user = new UserModel();

	user.on("change", updateUser);
	/*user.on("change:age", function (data){
		alert("tu edad es:"+data.get("age"));
	});*/
	user.on("error", function (model, error){
		console.log("oops!:"+error);
	});

	function updateUser(){
		$("span.name").html(user.get("name"));
		$("span.age").html(user.get("age"));
		$("span.employed").html(user.get("employed"));
	}

	$(".update").click(function (event){
		user.set({
			"name" : $("input[name='name']").val(),
			"age" : parseInt($("input[name='age']").val()),
			"employed" : $("input[name='employed']").is(":checked") ? "yes" : "no"
		});


	});
	updateUser();
});

