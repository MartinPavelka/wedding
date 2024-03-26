if( document.cookie.indexOf("language=") < 0) {
  document.cookie = "language=cz";
}

$(window).scroll(function() {
  var hiddenNavBar = $(".navbar.navbar-hidden-top");

  if (hiddenNavBar.length) {
    if (hiddenNavBar.offset().top > 50) {
        $(".fixed-top").addClass("top-nav-collapse", 1000, "easeOutBounce" );
    } else {
        $(".fixed-top").removeClass("top-nav-collapse", 1000, "easeOutBounce" );
    }  
  }
});

$(function() {
// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
});