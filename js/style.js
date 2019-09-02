
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.top_nav').css('visibility','visible');
  } else {
    $('.top_nav').css('visibility','hidden');
  }
});