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

//validator form
$('.form-for-order').validate({
  rules : {
    name: {required : true, minlength: 2},
    surname: {required : true, /*number: true,*/ minlength: 2},
    patronymic: {required : true, minlength: 2},
    comment: {required : true},
    email: {required : true, email: true},
    email1: {required : true, email: true},
    fio: {required : true},
    skype: {required : true},
    phone: {required : true}
  },
  messages: {
    name: {
      required: "Введите ваше имя!",
      minlength: "Введите не менее, чем 2 символа!"
    },
    surname: {
      required: "Введите вашу фамилию!",
      //number: "Фамилия недолжна содержать цифр!",
      minlength: "Введите не менее, чем 2 символа!"
    },
    patronymic: {
      required: "Введите ваше отчество!",
      minlength: "Введите не менее, чем 2 символа!"
    },
    comment: {
      required: "Введите комментарий!"
    },
    email: {
      required: "Вы неуказали email для отправки!",
      email: "Введите правильный email адрес!"
    },
    email1: {
      required: "Вы неуказали ваш email!",
      email: "Введите правильный email адрес!"
    },
    fio: {
      required: "Вы неуказали ваше ФИО!"
    },
    skype: {
      required: "Вы неуказали ваш skype!"
    },
    phone: {
      required: "Введите 10 значный номер телефона!"
    }
  },
  invalidHandler: function() {
    $('.form-field input').each(function() {
      if ($(this).hasClass('error')) {
        var order_liefd = $(this).parent().attr('id');
        $(window).scrollTo('#' + order_liefd, 800);
        return false;
      };      
    });    
  }
});
//phone mask
$('.form-field_phone').mask("(999) 999-99-99");

});