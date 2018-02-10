const css = require('../sass/style.sass');

$(document).ready(function(){

  //scroll down
  $('#header-scroller').click(function(){
    var offsetTop = $('.page .content').offset().top;
    $("body,html").animate({'scrollTop': offsetTop}, '300');
  });
});
