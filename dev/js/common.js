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


	//fasad Slider (promo) setting
		var fasadslider=$('#fasadslider').lightSlider({
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


// progressbars config

	$( ".progressbar_01" ).progressbar({
      value: 100,
      complete: function( event, ui ) {
      	 $('.progressbar-label_01').text('Готово')
      	 $('.progressbar-label_01').css("margin-left", "-10px")
      	 $('.progressbar-label_01').css("color", "#fff")
      }
    });
    var val01 = $( ".progressbar_01" ).progressbar( "value" );
    if(val01<100){
    	$('.progressbar-label_01').text(val01+'%')
    }
  

   $( ".progressbar_02" ).progressbar({
      value: 75,
      complete: function( event, ui ) {
      	 $('.progressbar-label_02').text('Готово')
      }
    });
    var val02 = $( ".progressbar_02" ).progressbar( "value" );
    if(val02<100){
    	$('.progressbar-label_02').text(val02+'%')
    }


    progressbar03=$( ".progressbar_03" ).progressbar({
      value: 50
    });
    $('.progressbar-label_03').text(progressbar03.progressbar('value')+'%')


    progressbar04=$( ".progressbar_04" ).progressbar({
      value: 25
    });
    $('.progressbar-label_04').text(progressbar04.progressbar('value')+'%')


    progressbar05=$( ".progressbar_05" ).progressbar({
      value: 0
    });
    $('.progressbar-label_05').text(progressbar05.progressbar('value')+'%')


    progressbar06=$( ".progressbar_06" ).progressbar({
      value: 0
    });
    $('.progressbar-label_06').text(progressbar06.progressbar('value')+'%')


    progressbar07=$( ".progressbar_07" ).progressbar({
      value: 0
    });
    $('.progressbar-label_07').text(progressbar07.progressbar('value')+'%')


    progressbar08=$( ".progressbar_08" ).progressbar({
      value: 0
    });
    $('.progressbar-label_08').text(progressbar08.progressbar('value')+'%')

//

	
	
	//for congiguration page
	$(".package-config").click(function(){
		$(".package-config .package-config__img").removeClass("active");
		$(this).children('.package-config__img').addClass("active");
		$(this).children('.package-config__name').children("input").prop( "checked", true );
	});
	$(".config-shape input").click(function(){
		var cls = ".chosen-shape__";
		var enter;
		$(".chosen-shape").children().removeClass("active");
		if ($(this).is(':checked')){
			enter = cls + $(this).val();
			$(enter).addClass("active")
		}
	});
	$(".wrap-shape").click(function(){
		var position = $(this)[0].getBoundingClientRect().top;
		console.log(position)
	});
	
	$('.remember a.btn').click(function(e){
		
		var val_1 = $(this).parent().siblings('.remember__param').children('input').val();
		var val_2 = $(this).parent().siblings('.remember__param').children('input')[1].value;
		$(this).parent().parent().parent().removeClass('active');
		console.dir(val_1);
		console.dir(val_2);
		e.preventDefault();
		
	})
	$(".option-config__list label").click(function(e){
		var elem = $(this)[0].getBoundingClientRect();
		var obj = $(this).next();
		$(".remember").removeClass("active remember_left remember_right");
		if(elem.left < 150){
			obj.addClass("remember_left");
		} else if( elem.rigth < 150){
			obj.addClass("remember_right");
		} else{ }
		$(this).next().addClass('active');
		
		
	})
	var host_pathname = '/taras/zorini/app/configuration.html';
	$(window).scroll(function(){
		if (window.location.pathname== host_pathname || window.location.pathname== '/configuration.html' ||  window.location.pathname== '/product_card.html'){
			var delta_top = 150;
			var delta_bottom = 750;
			var scrollTop = $('body').scrollTop();
			var pos_top = $('.configuration').offset().top + delta_top;
			var height_elem = $('.configuration').height();

			var pos_bottom = pos_top + height_elem - delta_bottom;


			if( scrollTop< pos_top){
				$(".column-label .label").css({
					'position' : 'relative',
					'top' : '',
					'align-self' : 'flex-start'
				})
			}
			else if( scrollTop >= pos_top && scrollTop<= pos_bottom){
				$(".column-label .label").css({
					'position' : 'fixed',
					'top' : '35%'

				})
			} else {
				$(".column-label .label").css({
					'position' : 'relative',
					'top' : '',
					'align-self' : 'flex-end'
				})
			}
		} else return;
	});
	//end configuration page
	//close modal window
	$(".fixed-overlay__modal .icon_remove-item").click(function(){
		$(".fixed-overlay").removeClass('active');
	});
	$(".fixed-overlay__modal input[type='submit']").click(function(){
		$(".fixed-overlay").removeClass('active');
	});
	//open modal window
	$("a.btn_write-us").click(function(){
		$(".fixed-overlay.write-us").addClass('active');
	});
	$("a.btn_call-us").click(function(){
		$(".fixed-overlay.callback").addClass('active');
	});
	$("a.btn_calc").click(function(){
		$(".fixed-overlay.call-measure").addClass('active');
	});
	
	// hide modal window when click another place
	$(".fixed-overlay").click(function(e){
		var elem = $(".modal");
			if (!elem.is(e.target) && elem.has(e.target).length === 0) elem.parent().removeClass('active');
	});

});
function initMap() {

	var uluru = {lat:55.640684, lng:37.8277893};
	
	var mark_in_map = new google.maps.LatLng({lat:55.640684, lng:37.8277893});
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom:16,
		center: uluru,
		mapTypeControl: false,
		fullscreenControl:false,
		streetViewControl: false
	});
	var marker = new google.maps.Marker({
		position: mark_in_map,
		map: map,
		animation: google.maps.Animation.DROP,
		icon:{
			url: "http://circle.dvatest.in.ua/taras/building-company/app/images/pin.png",
			
		}
	});
}