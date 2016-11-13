$(function() {

  $(document).keypress("I", function(e) {
    if (e.ctrlKey && e.keyCode == 48) {
      $('.del').removeClass('hide');
    }
  });
  $(document).keypress("I", function(e) {
    if (e.ctrlKey && e.keyCode == 49) {
      $.get("http://ipinfo.io", function(response) {
        alert(response.ip);
      }, "jsonp");
    }
  });

  // $(document).keypress("Y", function(e) {
  //   if (e.ctrlKey && e.keyCode == 57) {
  //     $('.del').removeClass('hide');
  //   }
  // });

  $('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

  });
});
