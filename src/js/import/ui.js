import jqueryModal from 'jquery-modal';

$('a[rel]').click(function(event) {
  $(this).modal({
    fadeDuration: 250,
    closeClass: 'icon-close icon',
    closeText: ''
  });
  return false;
});

 

$('nav').on('click','a', function(event) {
  var id = $(this).attr('href');

  if (id.indexOf('html') + 1) {
  } else{
    event.preventDefault();
  }
  
  var top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});

