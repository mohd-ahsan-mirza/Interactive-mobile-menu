$(function() {

	$( "a" ).click(function( event ) {
		event.stopPropagation();
		event.preventDefault();
	});

	$( "body" ).click(function(event){
		if( $(".nav-menu").hasClass("nav-active-menu-container") && $(".nav-link-container").hasClass("nav-inactive-menu-link-container") )
		{
			$(".nav-menu").toggleClass("nav-active-menu-container");
			$(".content").toggleClass("inactive-body");

			if( $(".our-office-li").hasClass("our-office-li-active-menu") && $(".our-team-li").hasClass("our-team-li-active-menu") && $(".about-us-detail-link-container").hasClass("about-us-detail-link-flip") )
			{	
				$(".our-office-li").toggleClass("our-office-li-active-menu");
				$(".our-team-li").toggleClass("our-team-li-active-menu");
				$(".about-us-detail-link-container").toggleClass("about-us-detail-link-flip");	
			}
		}
	});

	$(".nav-close-menu-li > a").click(function(event){
		$(".nav-menu").toggleClass("nav-active-menu-container");
		$(".content").toggleClass("inactive-body");

		if( $(".our-office-li").hasClass("our-office-li-active-menu") && $(".our-team-li").hasClass("our-team-li-active-menu") && $(".about-us-detail-link-container").hasClass("about-us-detail-link-flip") )
		{
			$(".our-office-li").toggleClass("our-office-li-active-menu");
			$(".our-team-li").toggleClass("our-team-li-active-menu");
			$(".about-us-detail-link-container").toggleClass("about-us-detail-link-flip");	
		}
	});

	$(".nav-menu").on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(e) {
    	if(! $(".nav-menu").hasClass("nav-active-menu-container") )
    		$(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
    	else
    		$(".content").toggleClass("inactive-body");
	});

	$( ".nav-link-container > a" ).click(function(event){
		$(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
		$(".nav-menu").toggleClass("nav-active-menu-container");
	});

	
	$(".about-us-detail-link").click(function(event){
		$(".our-office-li").toggleClass("our-office-li-active-menu");
		$(".our-team-li").toggleClass("our-team-li-active-menu");
		$(".about-us-detail-link-container").toggleClass("about-us-detail-link-flip");
	});
	

});