$(function() {
  window.onscroll = function() {navBg()};

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function navBg() {
    if ($(document).scrollTop() >= 150) {
      navbar.classList.remove("nav-top")
      navbar.classList.add("nav-scroll")
    } else {
      navbar.classList.remove("nav-scroll");
      navbar.classList.add("nav-top")
    }
  }

});
