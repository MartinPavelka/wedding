$(window).scroll(function() {
  var hiddenNavBar = $("#navbar");

  if (hiddenNavBar.length) {
    if (hiddenNavBar.offset().top > 50) {
        $(".navbar-expand-lg").addClass("top-nav-collapse", 1000, "easeOutBounce" );
    } else {
        $(".navbar-expand-lg").removeClass("top-nav-collapse", 1000, "easeOutBounce" );
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