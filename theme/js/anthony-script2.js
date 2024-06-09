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


//animated  carousel start

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





    const target = document.querySelector('#thisSpanIsNotHere');

    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) {
                console.log("<span> Index n'est pas visible");            
            } else {
                console.log('<span> Index est  visible'); 
                function animateWithDelay(element, animation, delay) {
                    setTimeout(function () {
                        $(element).animateCss(animation);
                    }, delay);
                }
             
        animateWithDelay("#card1", "rollIn", 10);
        animateWithDelay("#card2", "rollIn", 20);
        animateWithDelay("#card3", "rollIn", 40);

        animateWithDelay("#actu1", "fadeInDown", 200);
        animateWithDelay("#actu2", "fadeInUp", 200);
        animateWithDelay("#actu3", "fadeInDown", 200);

              $("#thisSpanIsNotHere").remove();
  
            }
        });
    });
  
    observer.observe(target);
  
  


});
