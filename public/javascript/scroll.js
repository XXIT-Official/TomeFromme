$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $("header").removeClass("header-top");
        $("header").addClass("header-scroll");
      }
      else {
        $("header").removeClass("header-scroll");
        $("header").addClass("header-top");
      }
    });
  });