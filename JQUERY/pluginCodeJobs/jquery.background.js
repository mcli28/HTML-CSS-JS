jQuery.fn.extend({
	setBackground: function (options) {
		defaults = {
			color: '#999',
			text: 'visita codejobs.biz'
		}

		var options = $.extend({}, defaults, options);

		this.each(function () {
			jQuery(this).css("background-color", options.color);
			jQuery('h1').text(options.text);
		});

	}
});

//jQuery.fn.extend({
//	setBackground: function (color) {
//		this.each(function () {
//			jQuery(this).css("background-color", color);
//		});
//	}
//});

//(function ($) {
//	$.fn.extend({
//		setBackground: function (color) {
//			$(this).each(function () {
//				$(this).css("background-color", color);
//			});
//		}
//	});
//})(jQuery);

//jQuery.fn.setBackground = function (color) {
//	this.each(function () {
//		jQuery(this).css("background-color", color);
//	});
//}