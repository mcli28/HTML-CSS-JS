var route = null;

$(function (){
	router = new AppRouter();
	Backbone.history.start({
		//pushState: true,
		root: "/Backbone underscore/"
	});
});

//User Model
var UserModel = Backbone.Model.extend({
		defaults: function ()
		var d = new Date;
		return {
			id: d.getTime(),
			name: "",
			age: 0,
			employed: ""
		};
	},

	validate: function (){
		if (!_.isNumber(attributes.age) || _.isNaN(attributes.age)){
			return "age is not a number";
		}

		if (attributes.age < 18){
			return "sorry, just 18 and older";
		}
	}
});

// User Collection
var UserCollection = Backbone.Collection.extend({
	model: UserModel
});

// Our actual user collection instance
var users = new UserCollection();

// A router for our app, handles changes views
var AppRouter = Backbone.Router.extend({
	_view: null,

	_addView: null,
	_editView: null, 
	_listView: null,

	routes: {
		"add": "add",
		"edit/:id": "edit",
		"*list": "list"
	},

	add: function (){
		if (this._addView == null){
			this._addView = new AddView();
		}

		this.remveOldView();
		this._View = this._addView;
		this.renderNewView();
	},

	edit: function (id){
		if (this._editView == null){
			this._editView = new EditView();
		}

		this._editView.model = users.find(function (item){
			return item.get("id") === parseInt(id);
		});	

		this.removeOldView();
		this._view = this._editView;
		this.renderNewView();
	},

	list: function (){
		router.navigate("", {
			replace: true
		});

		if (this._listview == null){
			this._listView = new ListView({
				model: users
			});
		}

		this.removeOldView();
		this._view = this._listView;
		this.renderNewView();
	},

	removeOldView: function (){
		$(".content").empty();
	}

	renderNewView: function (){
		$(".content").html(this._view.render().el)
	}
});

// List View
var ListView = Backbone.View.extend({
	template: null,

	events: {
		"click .add": "addUser"
	},

	initialize: function (){
		_.bindAll(this);
		this.template = $.trim($("[data-template-name='users-table']").html() || "Template");
		this.model.on("add", this.addRow);
		this.model.on("remove", this.removeRow);
	},

	render: function (){
		this.$el.html(Mustache.render(this.template));
		this.model.each(this.addRow);
		this.delegateEvents();
		return this;
	},

	addUser: function (event){
		router.navigate("add", {
			trigger: true
		});
	},

	addRow: function (event){
		if (user.view == null){
			user.view = new UserView({
				model: user,
				template:  $.trim($("[data-template-name='users-table'] tr").html() || "Template");
			});
		}
		this.$el.find("tbody").append(user.view.render().el);
	},

	

	
});