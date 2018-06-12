$(function(){
	var review_slider=$('#review-slider').lightSlider({
		item: 1,
		controls: true,
		pager: false
	});
	var icon_review_slider_prev = $("icon_review_slider_prev");
	
	function review_slider_pager(){
		var allNumber = $('#review-slider>li').length;
		var index = $(".active")
		var curentIndex =  $('li.lslide').index(index) +1;
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
});