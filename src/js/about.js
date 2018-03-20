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

  //fast links
  $('.header-links').find('a').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $("body,html").animate({'scrollTop': top}, '300');

    if( $(window).width()<768 ) {
      $('.header-links').hide();
    } else {
      $('.header-links').show();      
    }
  });

  //header paralax
  $(window).on('scroll', function(){
    var scrollY = $(this).scrollTop();
    var pos = 'center ' +  (-scrollY/10) + 'px';

    $('header').css({'background-position': pos});
  });


  //multiply button
  $('.icon-multiply').click(function(){
    var height;
    var width = $(window).width();
    $(this).addClass('animated push-multiply');
    if(width>=768) {
      height = 62;
    } else if(width <=520) {
      height = 30;
    } else {
      height = 50;
    }

    $('header').find('.header-languages').css('transition', 'opacity .8s ease').removeClass('show').addClass('hide');
    $('.header-links, #header-scroller').css('transition', 'opacity .8s ease').removeClass('show').addClass('hide');
    //$('.header-links').css('transition', 'opacity .1s ease').removeClass('show').addClass('hide');    

    setTimeout(function(){
      $('header').animate({height: height + 'vh'},500)
    }, 500)
    setTimeout(function(){
      window.location.href = 'index.html#aboutId';
    }, 1000)
  });
});
