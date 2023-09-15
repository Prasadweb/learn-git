//OwlCarousel
$(document).ready(function() {
		$("#OurPrinciples").owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			navText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoplay: true,
			autoplayHoverPause: true,
			responsive: {
			0: {items: 1},
			600: {items: 2},
			1000: {items:3}
			} 
		});

        $("#sectors-slider").owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			navText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoplay: true,
			autoplayHoverPause: true,
			responsive: {
			0: {items: 1},
			600: {items: 2},
			1000: {items:4}
			} 
		});
	  });
//OwlCarousel End
//AOS Animation
 AOS.init();
 //AOS Animation End