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

  //side-scroller
  var scrollHeight = $(document).height() - window.innerHeight;
  
  $(window).on('resize', function(){
    scrollHeight = $(document).height() - window.innerHeight;
  });

  $(window).scroll(function(){
    scrollSidebar();
  });

  clickSidebar();
  //console.log($('#side_scroller').find('span').length)

  function scrollSidebar(){
    var pos = $(window).scrollTop();
    // var scrollBar = document.getElementById('side_scroller');
    // var dots = scrollBar.getElementsByTagName('span');
    // var dotsLength = dots.length;
    // for(var key in dots) {
    //   console.log(dots[key]);
    // }

    var i = 0;
    if ( pos > 0 && pos < scrollHeight * (1/8) ) {
      $('#one').addClass('active').siblings('span').removeClass();
    }
    if ( pos > scrollHeight * (1/8) && pos < scrollHeight * (2/8) ) {
      $('#two').addClass('active').siblings('span').removeClass();
    }
    if ( pos > scrollHeight * (2/8) && pos < scrollHeight * (3/8) ) {
      $('#three').addClass('active').siblings('span').removeClass();
    }
    if ( pos > scrollHeight * (3/8) && pos < scrollHeight * (4/8) ) {
      $('#four').addClass('active').siblings('span').removeClass();
    }
    if ( pos > scrollHeight * (4/8) && pos < scrollHeight * (5/8) ) {
      $('#five').addClass('active').siblings('span').removeClass();
    }
    if ( pos > scrollHeight * (5/8) && pos < scrollHeight * (6/8) ) {
      $('#six').addClass('active').siblings('span').removeClass();
    }
    if ( pos > scrollHeight * (6/8) && pos < scrollHeight * (7/8) ) {
      $('#seven').addClass('active').siblings('span').removeClass();
    }
    if ( pos > scrollHeight * (7/8) && pos < scrollHeight ) {
      $('#eight').addClass('active').siblings('span').removeClass();
    }
  }
  
function clickSidebar(){
  $('#side_scroller').children('span').on('click', function(){
  
    var elem = $(this).data('page');
    if(elem == 'one') {
      $("body,html").animate({'scrollTop': 0}, '300');
    }    
    if(elem == 'two') {
      $("body,html").animate({'scrollTop': scrollHeight * (1/8)+1}, '300');
    }
    if(elem == 'three') {
      $("body,html").animate({'scrollTop': scrollHeight * (2/8)+1}, '300');
    }
    if(elem == 'four') {
      $("body,html").animate({'scrollTop': scrollHeight * (3/8)+1}, '300');
    }
    if(elem == 'five') {
      $("body,html").animate({'scrollTop': scrollHeight * (4/8)+1}, '300');
    }
    if(elem == 'six') {
      $("body,html").animate({'scrollTop': scrollHeight * (5/8)+1}, '300');
    }
    if(elem == 'seven') {
      $("body,html").animate({'scrollTop': scrollHeight * (6/8)+1}, '300');
    }
    if(elem == 'eight') {
      $("body,html").animate({'scrollTop': scrollHeight+1 }, '300');
    }
});

}

  $('#up_arrow').on('click', function(){

      var elem = $('#side_scroller').find('.active').data('page');

      if(elem == 'one') {
        $("body,html").animate({'scrollTop': scrollHeight}, '300');
      }    
      if(elem == 'two') {
        $("body,html").animate({'scrollTop': scrollHeight * (1/8)}, '300');
      }
      if(elem == 'three') {
        $("body,html").animate({'scrollTop': scrollHeight * (2/8)}, '300');
      }
      if(elem == 'four') {
        $("body,html").animate({'scrollTop': scrollHeight * (3/8)}, '300');
      }
      if(elem == 'five') {
        $("body,html").animate({'scrollTop': scrollHeight * (4/8)}, '300');
      }
      if(elem == 'six') {
        $("body,html").animate({'scrollTop': scrollHeight * (5/8)}, '300');
      }
      if(elem == 'seven') {
        $("body,html").animate({'scrollTop': scrollHeight * (6/8)}, '300');
      }
      if(elem == 'eight') {
        $("body,html").animate({'scrollTop': scrollHeight * (7/8)}, '300');
      }
      scrollingSidebar();

    // }
  });

})


