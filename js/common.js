$(document).ready(function() {

//fixed menu
$(window).scroll(function() {
	var nav_height = $('.menu').height();
	var top_height = $('.top-wrap').height();
	var header_height = $('.header').height();
	var height = top_height + header_height;
  if ($('body').scrollTop() > height) {
  	$('.menu').addClass('menu_fixed');
  	$('.catalog').css('padding-top', nav_height + 20);
  }
  else {
  	$('.menu').removeClass('menu_fixed');
  	$('.catalog').css('padding-top', '20px');
  }
});

//filter
// $('.filter a').click(function() {
// 	$('.filter a').removeClass('active');
// 	$(this).addClass('active');
// 	return false;
// });
$('.filter').each(function() {
  var method = 'linear',
      topMenu = $('.filter'),
      activeMenu = $('.active',topMenu),
      mainlevel = $('li',topMenu),
      animMenu = $('.filter__die')
  
  var animFunc = function(el) {
  	var menuWidth = el.outerWidth();
  	var menuLeft = el.position().left;
  	animMenu.stop(true).animate({
  	  left: menuLeft,
  	  width: menuWidth
  	}, 500, method);
  }  
  // если есть активный пункт меню, то позиционируем двигающуюся плашку на нем
  animFunc(activeMenu);
  // поведение движущейся плашки при наведении на любой пункт меню. Все тоже самое, что и при наличии активного пункта, только позиция плашки определяется относительно пункта, на который произошло наведение курсора мыши
  mainlevel.click(function() {
    mainlevel.removeClass('active');    
    animFunc($(this));
    $(this).addClass('active');
  })    
})

//video
$('.open-video').click(function() {
	$('.video').fadeIn();
	return false;
});
$('.video__close').click(function() {
	$('.video').fadeOut();
});

//datepicker
$('.datepicker span').click(function() {
	$('.datepicker span').removeClass('active');
	$(this).addClass('active');
});

//order types
$('.order__type li').click(function() {
	$('.order__type li').removeClass('active');
	$(this).addClass('active');
});

});