$(function(){
	var review_slider=$('#review-slider').lightSlider({
		item: 1,
		controls: false,
		pager: false
	});
	//var icon_review_slider_prev = $("icon_review_slider_prev");
	
	function review_slider_pager(){
		var allNumber = $('#review-slider>li').length;
		var index = $("#review-slider>.active");
		var curentIndex =  $('#review-slider>li').index(index) +1;
		$(".review-slider__pager span:first-child").text(curentIndex);
		$(".review-slider__pager span:last-child").text(allNumber);
		
	}
	review_slider_pager();
	$(".icon_review_slider_prev").click(function(){
		review_slider.goToPrevSlide();
		review_slider_pager();
	})
	$(".icon_review_slider_next").click(function(){
		review_slider.goToNextSlide();
		review_slider_pager();
	})

	//Main Slider (promo) setting
		var promoslider=$('#promoslider').lightSlider({
		galleryMargin: 25,
		item: 1,
		slideMove:1,
		pager: true,
		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////
		speed: 400, //ms'
		auto: true,
		loop: true,
		slideEndAnimation: true,
		pause: 10000,
	});

	//news Slider (promo) setting
		var newsslider=$('#newsslider').lightSlider({
		galleryMargin: 25,
		item: 1,
		slideMove:1,
		pager: false,
		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////

		speed: 400, //ms'
		auto: true,
		loop: true,
		slideEndAnimation: true,
		pause: 10000,
	});

//products Slider  setting 404 page
		var productslider=$('#productslider').lightSlider({
		galleryMargin: 25,
		item: 2,
		slideMove:1,
		pager: false,
		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////
		speed: 400, //ms'
		auto: true,
		loop: true,
		slideEndAnimation: true,
		pause: 10000,
		responsive:[
				{
					breakpoint: 500,
					settings:
						{
							item:1.5,
							slideMove:1,
						}
				},
			],
	});
	// input-mask
	$('input[type="tel"]').inputmask('+7(999)999-99-99');
	// end input-mask
		///add to fav
		$('.product-item__add-to-fav').click(function(e){
			e.preventDefault();
			$(this).toggleClass('active');
		})
	// filters carusel

		// $('.filter__block__params').hide();
		$('.filter__block__name').click(function() {
			var $answer = $(this).siblings('.filter__block__params');
				if ($answer.is(':hidden')) {
					$answer.slideDown();
					// $(this).css('margin-bottom', '20px')
					$(this).addClass('close');
					$(this).siblings('.filter__block__arrow').addClass('open');
				} else {
					$answer.slideUp();
					$(this).removeClass('close');
					// $(this).css('margin-bottom', '0px')
					$(this).siblings('.filter__block__arrow').removeClass('open');
				}
			});

	//show-hide filters
		$('#show-filter-mobile').click(function(){
			$(".filters").addClass('filters_active');
			$('.backdrop').toggleClass('on');
			$('body').toggleClass('no-scroll');
		})
		$('.filters__close-btn').click(function(){
			$(".filters").removeClass('filters_active');
			$('.backdrop').toggleClass('on');
			$('body').toggleClass('no-scroll');
		})
	// end show-hide filters
});