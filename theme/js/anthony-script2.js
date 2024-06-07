$(document).ready(function () {
    // invoke the carousel
    $('#myCarousel').carousel({
        interval: 6000
    });
    // scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function (e) {

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('next');
            getNextHeader();
        }

    });

});
//animated  carousel start

    //to add  start animation on load for first slide 
    $(function () {  // petit note : $(function ().... est la même chose que $(document).ready(function() {})
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass(animationName);
                });
            }
        });
        $('#logoMlsg').animateCss('flipInX');
        $('.item1.active h2').animateCss('zoomIn');
        $('.item1.active p').animateCss('fadeIn');

    
    //to start animation on  mousescroll , click and swipe 
    $("#myCarousel").on('slide.bs.carousel', function () {
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass(animationName);
            });
        }
    });

// add animation type  from animate.css on the element which you want to animate


$('.item2 h2').animateCss('swing');
$('#item3').animateCss('swing');

});
    });

function getNextHeader() {
    console.log("hi");
    let myFuckingThing = $("#thisFuckingThing");
    console.log(myFuckingThing);
    setTimeout(() => {
        $('.item2 h2').animateCss('swing');
        $('#item3').animateCss('swing');
  
    }, 650);  // Pour raison du timing, < 650ms ne marche pas
}

/*
$('.item1 h2').animateCss('zoomIn');
$('.item1 p').animateCss('fadeIn');

$('.item2 img').animateCss('zoomIn');
$('.item2 p').animateCss('fadeIn');

$('.item3 img').animateCss('fadeInLeft');
$('#paraItem3').animateCss('swing');  // paraItem3 n'existe pas ici

*/