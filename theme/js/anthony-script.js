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
        $(".bouton1").animateCss("slideInUp");


        function animateWithDelay(element, animation, delay) {
            setTimeout(function () {
                $(element).animateCss(animation);
            }, delay);

        }
        animateWithDelay("#photoPresentation", "fadeInRight", 0);
        animateWithDelay("#aboutAnimate", "fadeInLeft", 0);

        animateWithDelay("#card1", "rollIn", 1000);
        animateWithDelay("#card2", "rollIn", 1200);
        animateWithDelay("#card3", "rollIn", 1400);

        animateWithDelay("#actu1", "fadeInDown", 2000);
        animateWithDelay("#actu2", "fadeInUp", 2000);
        animateWithDelay("#actu3", "fadeInDown", 2000);

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


