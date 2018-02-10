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
}

//scroll down
$('#header-scroller').click(function(){
  var offsetTop = $('nav.main-nav').offset().top;
  $("body,html").animate({'scrollTop': offsetTop}, '300');
});

//hover links

$('nav').find('a').on('click', function(e){
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
});