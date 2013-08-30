var start = function() {
  $('#save').click(function() {
    window.open(document.getElementById('c').toDataURL());
  });
};

$(document).ready(start);