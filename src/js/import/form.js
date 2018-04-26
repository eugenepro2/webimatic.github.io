$('form input[type="file"]').change(function() {
  var text = '';
  var n = this.files.length;
  if(n < 2) {
    text = 'файл';
  } else if(n >= 2 && n < 5) {
    text = 'файла';
  } else if(n >= 5 && n < 20) {
    text = 'файлов';
  }
  $('form .file p').text(n + ' ' + text);
});

$('form').submit(function(e) {
  e.preventDefault();
  let form = $(this);

  let checkbox = form.find('.checkbox input');
  if (checkbox.is(':checked')) {
    form.find('.label').css('border', '1px solid #e3e3e3');
    ajaxMail(form);
  } else{
    form.find('.label').css('border', '1px solid #cf0f0d');
  }
});


function ajaxMail(form) {
  $.ajax({
    type: form.attr('method'),
    url: form.attr('action'),
    data: form.serialize()
  }).done(function() {
    let height = form.outerHeight();
    form.css('height', height);
    form.find('.form__block').fadeOut(300);
    form[0].reset();
    let input = $('#file');
    input.replaceWith(input.val('').clone(true));
    $('.file p').text('Прекрепить резюме');
    form.find('.form__thank').delay(300).fadeIn();
    form.find('.form__thank').delay(1500).fadeOut();
    form.find('.form__block').delay(2200).fadeIn(300);
  }).fail(function() {
    alert('Что-то пошло не так. Попробуйте еще раз.');
  });
}
