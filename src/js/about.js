const css = require('../sass/style.sass');
$(document).ready(function(){

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



  });

});
