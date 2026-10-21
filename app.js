// Minimal, deferred script: accessible form feedback (no libraries)
(function () {
  var form = document.querySelector('form');
  var status = document.getElementById('form-status');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var invalid = form.querySelector(':invalid');
    if (invalid) {
      status.textContent = 'Please fill in the required field: ' + form.querySelector('label[for="' + invalid.id + '"]').textContent.replace('*', '').trim() + '.';
      invalid.focus();
      return;
    }
    status.textContent = 'Thank you! Your message has been sent.';
    form.reset();
  });
})();
