$(function() {

  var showIframe = function(id) {
    $('#home, #news, #slides, #book, #hackpad, #term, #jenkins, #chat, #survey').hide();
    $(id).show();
    var frame = $('iframe', $(id));
    if (frame.attr('src') == 'static/blank.html') {
      frame.attr('src', frame.data('src'));
    }
  };

  $('a.nav-link, .navbar-brand').click(function() {
    showIframe($(this).attr('href'));
  });

  if (window.location.hash == '') {
    showIframe('#home');
  }
  else {
    showIframe(window.location.hash);
  }

  $("img.lazy").lazyload();
});

