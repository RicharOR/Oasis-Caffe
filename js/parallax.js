$(document).ready(function () {
  $(window).scroll(function () {
    const windowWidth = $(window).width();

    if (windowWidth > 800) {
      let scroll = $(window).scrollTop();

      $('header .textos').css({
        transform: `translate(0px, ${scroll / 2.5}%)`,
      });
      $('.acerca-de article').css({
        transform: `translate(0px, -${scroll / 10}%)`,
      });
    }
  });
  $(window).resize(function () {
    const windowWidth = $(window).width();
    if (windowWidth < 800) {
      $('header .textos').css({
        transform: `translate(0px, 0px)`,
      });
      $('.acerca-de article').css({
        transform: `translate(0px, 0px)`,
      });
    }
  });
});
