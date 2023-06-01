$(function (){

	var UserModel = Backbone.Model.extend({
		defaults: function (){
			return {
				id: null,
				name: "hely ruiz",
				age: 18 + parseInt(Math.random()*20),
				employed: "no"
			}
		},

		validate: function (attributes){
			if(!_.isNumber(attributes.age) || _.isNaN(attributes.age)){
				return "age is not a number";
			}

			if (attributes.age < 18) {
				return "sorry, just 18 and older";
			}
		}
	});

	var UserCollection = Backbone.Collection.extend({
		model: UserModel
	});

	var users = new UserCollection();
	users.on("add remove",usersChanged);
	

	function usersChanged (){
		var template = $("[data-template-name='user-row']").html().trim();
		$tbody = $(".users-table > tbody");
		$tbody.empty();
		users.each(function (user){
			$tbody.append(Mustache.render(template, user.toJSON()));
		});
	}

	$(".add").click(function (event){
		var d = new Date();
		users.add({
			id: d.getTime(),
			name: $("input[name='name']").val(),
			age: parseInt($("input[name='age']").val()),
			employed: $("input[name='employed']").is(":checked") ? "yes" : "no"
		});
		
	});

	$(".users-table").on("click", ".delete", deleteUser);

	function deleteUser (event){
			var $button = $(event.currentTarget);
			var userId = $button.data("user-id");
			var user = users.get(userId);

			users.remove(user);
		}

});