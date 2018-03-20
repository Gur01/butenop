'use strict';
const css = require('../sass/style.sass');

// $('#headerLanguagesId').addClass('hide');
// $('#header-scroller').addClass('hide');
// $('#side_scroller').addClass('hide');

$(document).ready(function(){

  $('header').find('.header-languages').removeClass('hide').addClass('show');
  $('#header-scroller').removeClass('hide').addClass('show');
  $('#side_scroller').removeClass('hide').addClass('show');
  //scroll down
  $('#header-scroller').click(function(){
    var offsetTop = $('section.current-project').offset().top;
    $("body,html").animate({'scrollTop': offsetTop}, '300');
    // console.log('ok');
  });

  //header paralax
  $(window).on('scroll', function(){
    var scrollY = $(this).scrollTop();
    var pos = 'center ' +  (-scrollY/10) + 'px';

    $('header').css({'background-position': pos});
  });

  //side-scroller
    var dotsNumber = 8;
    var pos = $(window).scrollTop();
    var scrollH = scrollHeight();
    dots(dotsNumber); //dinamicaly adding dots
    if(pos==0) $('#up_arrow+span').addClass('active'); //add first active button
    scrollSidebar(dotsNumber); //change active dot
    clickSidebar(); //events on click on dots
    arrowsClick(); //events on click on arrows

    if( $(window).width()<768 ) {
      $('#side_scroller').hide();
    }
    
    $(window).on('resize', function(){
      if($(window).width()<768) {
        $('#side_scroller').hide();
      } else {
        $('#side_scroller').show();
      }

    });

    $(window).on('scroll', function(){
      scrollSidebar(dotsNumber);
    }); 
  
  function scrollHeight(){
    return $(document).height() - window.innerHeight;
  }
  function dots(dotsNum){
    var str = "<div class='side-scroller hide' id='side_scroller' style='transition:opacity 2s ease;' ><div data-dir='prev' class='arrow icon-down-arrow' id='up_arrow'></div><div data-dir='next' class='arrow icon-down-arrow' id='down_arrow'></div></div>";
    $('header').append(str);
    var resStr = ''
    for(var i=1; i<=dotsNum;i++) {
      var spanStr="<span data-dot='" + i + "' id='dotId" + i +"' class='dot" + i +"'></span>";
      resStr+=spanStr
    }
    
    $('#up_arrow').after(resStr);
    $('#side_scroller').animate({'transition': 'opacity 2s ease'}, 800).removeClass('hide');
  }
  function scrollSidebar(dotsNumber){
    var pos = $(window).scrollTop();
    for (var i = 0; i<dotsNumber; i++) {
      if ( pos > scrollH * (i/dotsNumber)  && pos < scrollH * (i+1/dotsNumber) ) {
        var id = '#dotId' + (i+1);
        $(id).addClass('active').siblings('span').removeClass('active');
      }
    }
  }
  
  function clickSidebar(){
    $('#side_scroller').children('span').on('click', function(){
      var elem = $(this).data('dot');

      $("body,html").animate({'scrollTop': scrollH * ((elem-1)/dotsNumber)+1}, '300');
  });

}
  function arrowsClick(){
    $('#side_scroller>.arrow').on('click', function(){

      var dir = $(this).data('dir');
      var activeNum = $('#side_scroller').find('.active').data('dot');
      var elem;

      if(dir == 'prev') {
        elem = activeNum-1;
      } else {
        elem = activeNum+1;
      }

      if(elem>dotsNumber) elem = 1;
      if(elem == 0) elem = dotsNumber;

      $("body,html").animate({'scrollTop': scrollH * ((elem-1)/dotsNumber)+1}, '300');

    });

  }

  //multiply button
  $('.icon-multiply').click(function(){
    window.location.href = 'index.html';
  });

  




});


