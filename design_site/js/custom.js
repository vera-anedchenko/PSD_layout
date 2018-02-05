$(function () {

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)
	})

	$('.banner-slider, .quote-slider').slick({
		arrows: false,
		dots: true

	})

	$('.portfolio-slider').slick({
		dots: true,
		appendArrows: '.portfolio-slider-buttons',
		prevArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-right"></i></button>',
		responsive: [
		{
		breakpoint: 767,
		settings: {
			dots: false,
		}
		}]
	});

})


