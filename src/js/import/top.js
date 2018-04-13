$('.top').on('click', function() {

  $('html, body').stop().animate({scrollTop:0}, 1000, 'swing');

});

$(window).scroll(function() {
  if ($(window).scrollTop() > 450) {
    $('.top').fadeIn();
  } else{
    $('.top').fadeOut();
  }
});
