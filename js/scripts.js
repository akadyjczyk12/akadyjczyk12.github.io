$(function(){
      $(".typed-text").typed({
        strings: ["AKORDEONY", "GITARY", "KEYBOARDY"],
         typeSpeed: 90,
         loop: true,         
         backDelay: 2000
      });
 });

//smooth scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  particlesJS.load('image', '../js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});