import jqueryModal from 'jquery-modal';
import device from 'current-device';

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
  var id = $(this).attr('href');

  if (id.indexOf('html') + 1) {
  } else{
    event.preventDefault();
  }
  
  var top = $(id).offset().top;
  $('body,html').animate({scrollTop: top-60}, 1500);
});

//Viewport
if(device.mobile()) {
  $('#viewport').attr('content', 'width=375, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
} else if(device.tablet()) {
  $('#viewport').attr('content', 'width=768, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
} else if(device.desktop()) {
  $('#viewport').attr('content', 'width=1200, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
}
