import sayHello from './lib/sayHello.js';

sayHello();

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
