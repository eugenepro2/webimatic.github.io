$(window).scroll(function() {
  if ($(window).scrollTop() > 700) {
    $('.header').addClass('fixed');
  } else{
    $('.header').removeClass('fixed');
  }
});
