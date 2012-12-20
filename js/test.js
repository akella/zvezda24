$('.filter').each(function() {
	var method = 'linear',
      topMenu = $('.filter'),
      activeMenu = $('.active',topMenu),
      mainlevel = $('a',topMenu),
      animMenu = $('.filter__die')
  
  var animFunc = function(el) {
      var menuWidth = el.outerWidth();
      var menuLeft = el.position().left;
      animMenu.stop(true).animate({
          left: menuLeft,
          width: menuWidth
      }, 1000, method);
  }  
	// если есть активный пункт меню, то позиционируем двигающуюся плашку на нем
	animFunc(activeMenu);
	// поведение движущейся плашки при наведении на любой пункт меню. Все тоже самое, что и при наличии активного пункта, только позиция плашки определяется относительно пункта, на который произошло наведение курсора мыши
	mainlevel.on('mouseenter',function() {
    animFunc($(this));
  })
   
	// поведение плашки при окончании события наведения мыши на пункт меню (выход курсора мыши на пределы блока, в котором содержится меню)
	topMenu.on('mouseleave',function() {
	  // иначе, если есть активный пункт меню – возвращаем плашку на него
	  if (activeMenu.length) {
      animFunc(activeMenu);
    }
	  // если активного пункта нет, то перемещаем плашку за границу экрана
	  else {
      animMenu.stop(true).animate({
        left: '0px',
        width: '30px'
      }, 2000, method);
    }
  })
})



///////
$('.filter').each(function() {
  var method = 'linear',
      topMenu = $('.filter'),
      activeMenu = $('.active',topMenu),
      mainlevel = $('a',topMenu),
      animMenu = $('.filter__die')
  
  var animFunc = function(el) {
  var menuWidth = el.outerWidth();
  var menuLeft = el.position().left;
  animMenu.stop(true).animate({
      left: menuLeft,
      width: menuWidth
  }, 1000, method);
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