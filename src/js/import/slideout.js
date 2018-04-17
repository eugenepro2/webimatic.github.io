$('.open-menu').on('click', function() {
  $('#menu').addClass('is-open');
  $('.panel').addClass('is-open');
});

$('.panel').on('click', function() {
  $('.panel').removeClass('is-open');
  $('#menu').removeClass('is-open');
});

$('.close-menu').on('click', function() {
  $('#menu').removeClass('is-open');
  $('.panel').removeClass('is-open');
});

