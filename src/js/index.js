const css = require('../sass/style.sass');

//change header of publications
changeHeader();
$(window).resize(function(){
  changeHeader();
});
function changeHeader(){
  if($(window).width() < 1100 ) {
    $('.publications').children('a').text('publications');
  } else {
    $('.publications').children('a').text('publications, reviwes, interviews');
  }
  if($(window).width() < 320 ) {
    $('.artist').children('a').text('artist');
  } else {
    $('.artist').children('a').text('artist statement');
  }

}

//scroll down
$('#header-scroller').click(function(){
  var offsetTop = $('nav.main-nav').offset().top;
  $("body,html").animate({'scrollTop': offsetTop}, '300');
});
// $('#header-scroller').mouseenter(function(){
//   $(this).children('span').addClass('animated hover-arrow');
// });
// $('#header-scroller').mouseleave(function(){
//   $(this).children('span').removeClass('animated hover-arrow');
// });

//hover links

$('nav').find('a').on('click', function(e){
  //if($(window).width()>768) {
    e.preventDefault();
    var windowHeight = $(window).height(),
        $this = $(this).parent('li'),
        elemHeight = $this.height(),
        centerOffset = (windowHeight-elemHeight)/2;
        offsetTop = $this.offset().top,
        a = $this.children('a'),
        link = a.attr('href');

    $("body,html").animate({'scrollTop': offsetTop-centerOffset}, 300);
    
    setTimeout(function(){
      $("body,html").animate({'scrollTop': offsetTop}, 600);
      $this.animate({'height': '100vh'}, 600);
     }, 300);

    setTimeout(function(){
      window.location.href = link;
      return false;
    }, 900);
  //}
});