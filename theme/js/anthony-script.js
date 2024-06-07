$(document).ready(function () {
    // invoke the carousel
    $('#myCarousel').carousel({
        interval: 6000
    });
    // scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function (e) {

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('next');
        }

    });

});
//animated  carousel start
$(document).ready(function () {
    //to add  start animation on load for first slide 
    $(function () {
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass(animationName);
                });
            }
        });
        $('#logoMlsg').animateCss('flipInX');
        $('.item1.active h2').animateCss('zoomIn');
        $('.item.active h2').animateCss('zoomIn');
        $(".bouton1").animateCss("flipInX");
       
        
        

    });

    //to start animation on  mousescroll , click and swipe 
    $("#myCarousel").on('slide.bs.carousel', function () {
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass(animationName);
                });
            }
        });

        // add animation type  from animate.css on the element which you want to animate


        
       

       
       
        $('.item2 h2').animateCss('swing');

       
        $('#item3').animateCss('swing');
        $('titreSlide3').animateCss('swing');
    });
});

$(function () {

   
});
