$(document).ready(function () {
	//selectores multiples
	//$(".promo, #france").text("orlando");

	//pseudoclases
	//$("#destinations li:first").text("orlando");
	//$("#destinations li:last").text("orlando");

	//impar igualado
	//$("#destinations li:odd").text("par");
	//$("#destinations li:even").text("impar");

	//$("li").first();
	//console.log($("li").first().value);

	//before
	//var price = $('<p>from $399.99</p>');
	//$('.vacation').before(price);
	//after
	//var price = $('<p>from $399.99</p>');
	//$('.vacation').after(price);
	//prepend
	//var price = $('<p>from $399.99</p>');
	//$('.vacation').prepend(price);
	//append
	//var price = $('<p>from $399.99</p>');
	//$('.vacation').append(price);

	//remove
	//var price = $('<p>from $399.99</p>');
	//$('.vacation').append(price);
	//$('button').remove();

	//appending a el dom
	//var price = $('<p>from $399.99</p>');
	//price.appendTo($('.vacation'));
	//$('button').remove();

	//$('button').on('click', function () {
	//	var price = $('<p>from $399.99</p>');
	//	$('.vacation').append(price);
	//	$('button').remove();
	//});
	
	//$('button').on('click', function () {
	//	var price = $('<p>from $399.99</p>');
	//	$('.vacation').append(price);
	//	$(this).remove();
	//});
	//$('button').on('click', function () {
	//	var price = $('<p>from $399.99</p>');
	//	$(this).after(price);
	//	$(this).remove();
	//});
	$('button').on('click', function () {
		var price = $('<p>from $399.99</p>');
		$(this).closest('.vacation').append(price);
		$(this).remove();
	});

});