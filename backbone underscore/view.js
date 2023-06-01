$(function (){

	var UserModel = Backbone.Model.extend({
		defaults: function (){
			return {
				name: "hely ruiz",
				age: 18 + parseInt(Math.random() * 20),
				employed: "no"
			};	
		},

		validate: function (attributes){
			if (!_.isNumber(attributes.age) || _.isNaN(attributes.age)) {
				return "age is not a number";
			}

			if (attributes.age < 10) {
				return "sorry, just 18 and older";
			}
		}
	});

	var UserCollection = Backbone.Collection.extend({
		model: UserModel
	});

	var users = new UserCollection();
	
	var UsersView = Backbone.View.extend({

		el: "body",

		events: {
			"click .add" : "addUser"
		},

		initialize: function (){
			_.bindAll(this);
			this.model.on("add", this.addOne);
			this.model.on("remove", this.removeOne);
		},

		render: function (){
			
			var $tbody = $(".users-table tbody");
			var template = $.trim($("[data-template-name='user-row']").html() || "Row template");
			
			$tbody.empty();

			this.model.each(function (user){
				$tbody.append(Mustache.render(template, user.toJSON()));
			}, this);

		},

		addUser: function(){
			var d = new Date();
			try {
				users.add({
					id: d.getTime(),
					name: $("input[name='name']").val(),
					age: parseInt($("input[name='age']").val()),
					employed: $("input[name='employed']").is(":checked") ? "yes" : "no"
				});
			}catch(error){
				console.log(error.message);
			}
		},

		addOne: function (user){
			if (user.view == null){
				user.view = new UserView({model: user});
			}

			this.$(".users-table tbody").append(user.view.render().el);
		},

		removeOne: function (user){
			if (user.view != null){
				user.view.remove(); 
			}
			user.clear();

		} 
	});

	var mainView = new UsersView({
		model: users
	});

	var UserView = Backbone.View.extend({
		tagName: "tr",
		
		template: null,

		events: {
			"click .delete" : "deleteUser"
		},

		initialize: function (){
			_.bindAll(this);
			this.template = $.trim($("[data-template-name='user-row'] tr").html() || "Row template");
		},

		render: function (){
			this.$el.html(Mustache.render(this.template, this.model.toJSON()));
			return this;
		},

		deleteUser: function (){
			console.log("delete user");
			this.model.collection.remove(this.model);
		}
	});
});



