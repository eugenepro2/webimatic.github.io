import './import/form.js';
import './import/top.js';
import jqueryModal from 'jquery-modal';

$('a[rel]').click(function(event) {
  $(this).modal({
    fadeDuration: 250
  });
  return false;
});
