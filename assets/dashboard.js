$(function() {

  var showIframe = function(id) {
    $('#home, #slide, #book, #term, #jenkins, #chat, #survey').hide();
    $(id).show();
    var frame = $('iframe', $(id));
    if (frame.attr('src') == 'static/blank.html') {
      frame.attr('src', frame.data('src'));
    }
  };

  $('a.nav-link, .navbar-brand').click(function() {
    showIframe($(this).attr('href'));
  });

  showIframe(window.location.hash);
});

