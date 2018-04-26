import jqueryModal from 'jquery-modal';
import device from 'current-device';

if (window.location.hash) {
  $('html, body').animate({
    scrollTop: $(window.location.hash).offset().top
  }, 1000);
}


//Модальные онка
$('a[rel]').click(function(event) {
  $(this).modal({
    fadeDuration: 250,
    closeClass: 'icon-close icon',
    closeText: ''
  });
  return false;
});

 
//Плавный скролл
$('nav, #menu').on('click','a', function(event) {
  let id = $(this).attr('href');

  if (id.indexOf('#')) {
  } else if(id.indexOf('#') + 1 && !$('#menu-item-28').hasClass('active')) {
    let url = location.hostname;
    location.href = 'http://' + url + id;
  } else{
    event.preventDefault();
    let top = $(id).offset().top;
    $('body,html').animate({scrollTop: top-60}, 1500);
  }
  
});

//Viewport
if(device.mobile()) {
  $('#viewport').attr('content', 'width=375, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
} else if(device.tablet()) {
  $('#viewport').attr('content', 'width=768, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
} else if(device.desktop()) {
  $('#viewport').attr('content', 'width=1200, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
}

//Lang
$('.header__lang').on('click', function() {
  $('.header__lang__list').fadeToggle();
});

$('.panel').on('click', function() {
  $('.header__lang__list').fadeOut();
});


