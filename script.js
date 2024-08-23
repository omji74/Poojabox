$(document).ready(function() {
    // Example: Show/Hide top bar on scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.top-bar').fadeOut();
      } else {
        $('.top-bar').fadeIn();
      }
    });
  
    // Add more jQuery animations or interactions as needed
  });
  