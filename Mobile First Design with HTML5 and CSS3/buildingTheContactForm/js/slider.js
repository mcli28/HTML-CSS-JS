$(document).ready(function(){
	var changeSlide = function () {
		// query the DOM for an active slide
		var $active = $('.slider .active')
		// if there are no active slides set the last one as active
		if ($active.length === 0) {
			$active = $('.slide').last();
		}
		// get the next slide after the active one, if there is no next one, set next as the first slide
		var $next = $active.next().length ? $active.next() : $('.slide').first();
		// set classes on active and next slides so we can apply styles appropriately
		$active.addClass('last-active');
		$next.addClass('active');
		$active.removeClass('active last-active');
	}
	// this will kick off the slideshow code above
	$(function () {
		setInterval(changeSlide, 5000);
	});
});