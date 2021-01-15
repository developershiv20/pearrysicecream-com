$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:4,
        loop:true,
        margin:30,
        nav:false,
        autoplay: true,

        slideTransition: 'linear',
        autoplayTimeout:2200,
        autoplaySpeed:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});


$(window).on('scroll', function(){
   if ($(window).scrollTop() > 0) {
     $('header').addClass('fixed-header');
      }
   else {
     $('header').removeClass('fixed-header');
   };
});





jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
       var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
            }
    });

    };
  
  // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});








