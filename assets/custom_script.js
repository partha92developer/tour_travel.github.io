$(document).ready(function(){
	$('.slider-list').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left-long'></i></button>",
		nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right-long'></i></button>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
        			autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	// nav menu
    $(".mobile-menu i").click(function(){
        $(".main-navigation").fadeIn();
        $("body").addClass("overflow-hidden")
    });
    $(".close-menu i").click(function(){
        $(".main-navigation").fadeOut();
        $("body").removeClass("overflow-hidden")
    });
});


