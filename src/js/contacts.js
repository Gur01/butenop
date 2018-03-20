const css = require('../sass/style.sass');

$(document).ready(function(){

  $('header').find('.header-languages').removeClass('hide').addClass('show');
  $('#header-scroller').removeClass('hide').addClass('show');
  $('.header-links').removeClass('hide').addClass('show');

  //scroll down
  $('#header-scroller').click(function(){
    var offsetTop = $('.page .content').offset().top;
    $("body,html").animate({'scrollTop': offsetTop}, '300');
  });
  //header paralax
  $(window).on('scroll', function(){
    var scrollY = $(this).scrollTop();
    var pos = 'center ' +  (-scrollY/10) + 'px';

    $('header').css({'background-position': pos});
  });

  //multiply button
  $('.icon-multiply').click(function(){
    window.location.href = 'index.html';
  });
  
});