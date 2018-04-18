$('.open-menu').on('click', function() {
  openMenu();
});

$('.panel, .close-menu, #menu a').on('click', function() {
  closeMenu();
});

function openMenu() {
  $('#menu').addClass('is-open');
  $('.panel').addClass('is-open');
}

function closeMenu() {
  $('#menu').removeClass('is-open');
  $('.panel').removeClass('is-open');
}
