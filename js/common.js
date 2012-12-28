$(document).ready(function() {

//fixed menu
$(window).scroll(function() {
	var nav_height = $('.menu').height();
	var top_height = $('.top-wrap').height();
	var header_height = $('.header').height();
	var height = top_height + header_height;
  if ($(window).scrollTop() > height) {
  	$('.menu').addClass('menu_fixed');
  	$('.catalog').css('padding-top', nav_height + 20);
  }
  else {
  	$('.menu').removeClass('menu_fixed');
  	$('.catalog').css('padding-top', '20px');
  }
});

//filter
$('.filter a').click(function() {
  $('.catalog').hide();
	var catalog = $(this).attr('href');
	$('.'+catalog).fadeIn(300);  
	return false;
});
//
$('.filter').each(function() {
  var method = 'easeInExpo',
      topMenu = $('.filter'),
      activeMenu = $('.active',topMenu),
      mainlevel = $('a',topMenu),
      animMenu = $('.filter__die');
  
  var animFunc = function(el) {
  	var menuWidth = el.outerWidth();
  	var menuLeft = el.position().left;
  	animMenu.stop(true).animate({
  	  left: menuLeft,
  	  width: menuWidth
  	}, 300, method);
  }  
  // если есть активный пункт меню, то позиционируем двигающуюся плашку на нем
  animFunc(activeMenu);
  // поведение движущейся плашки при наведении на любой пункт меню. Все тоже самое, что и при наличии активного пункта, только позиция плашки определяется относительно пункта, на который произошло наведение курсора мыши
  mainlevel.click(function() {
    mainlevel.removeClass('active');    
    animFunc($(this));
    $(this).delay(300).queue(function(next){
      $(this).addClass("active");
      next();
    });
    return false;
  })    
})
//
$('.nav').each(function() {
  var method = 'easeInExpo',
      topMenu = $('.nav'),
      activeMenu = $('.active',topMenu),
      mainlevel = $('a',topMenu),
      animMenu = $('.nav__die');
  
  var animFunc = function(el) {
    var menuWidth = el.outerWidth();
    var menuLeft = el.position().left;
    animMenu.stop(true).animate({
      left: menuLeft,
      width: menuWidth
    }, 300, method);
  }  
  // если есть активный пункт меню, то позиционируем двигающуюся плашку на нем
  animFunc(activeMenu);
  // поведение движущейся плашки при наведении на любой пункт меню. Все тоже самое, что и при наличии активного пункта, только позиция плашки определяется относительно пункта, на который произошло наведение курсора мыши
  mainlevel.click(function() {
    mainlevel.removeClass('active');    
    animFunc($(this));
    $(this).delay(300).queue(function(next){
      $(this).addClass("active");
      next();
    });
    return false;
  })    
})

//video
$('.open-video').click(function() {
	$('.video, .opacity').fadeIn();
	return false;
});
$('.video__close, .opacity').click(function() {
	$('.video, .opacity').fadeOut();
  //example_video_1
  _V_("example_video_1").pause();
  //alert('pause');
  
});

//datepicker
$('.datepicker span').click(function() {
	$('.datepicker span').removeClass('active');
	$(this).addClass('active');  
});

//order types
$('.order__type a').click(function() {
  var order_type = $(this).attr('href');
	$('.order__type a').removeClass('active');
  $('.order__victim').hide();
	$(this).addClass('active');
  $('.'+order_type).show();
  return false;
});

//validator form
$('.form-for-order').validate({
    messages: {
      birthday_phone: {
        required: "Введите 10 значный номер телефона"
      },
      weddings_phone: {
        required: "Введите 10 значный номер телефона"
      },
      company_phone: {
        required: "Введите 10 значный номер телефона"
      },
      child_phone: {
        required: "Введите 10 значный номер телефона"
      },
      another_phone: {
        required: "Введите 10 значный номер телефона"
      },
      customer_phone: {
        required: "Введите 10 значный номер телефона"
      }
    }
});
jQuery.extend(jQuery.validator.messages, {
  required: "Заполните поле",
  email: "Введите правильный email адрес" 
});
//phone mask
$('.form-field_phone').mask("(999) 999-99-99");

});