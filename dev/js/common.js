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

});