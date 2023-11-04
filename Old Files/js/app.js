$(document).foundation()

window.onbeforeunload = function () 
{
	window.scrollTo(0, 0);
}

$(document).ready(function () 
{
	// Load border and border slider
	setTimeout(function() 
	{
		$(".landing-logo h1").toggleClass("border-logo-load");
	}, 1500);
	setTimeout(function() 
	{
		$(".landing-catch .slider").toggleClass("landing-catch-hover");
	}, 2700);

	// Fade out landing on scroll
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		var height = $(window).height();

		$('.clouds').css({
			'opacity': ((height - scrollTop) / height)
		}); 

		if (scrollTop > 500)
		{
			$(".scrollTop").toggleClass(".visible");
		}
	});
	
	// Button to scroll to intro section
	$("#landing-button").click(function() 
	{
		$('html, body').animate(
		{
		    scrollTop: $(".intro").offset().top
		}, 2000);
	});

});