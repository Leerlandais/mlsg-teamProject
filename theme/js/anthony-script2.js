$(document).ready(function () {
    // invoke the carousel
    $('#myCarousel').carousel({
        interval: 6000
    });
    // scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function (e) {

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {     
            $(this).carousel('next');
            getNextHeader();    // un ajout impertinent au code car je ne connais pas les méthodes de AnimateCSS comme cela dessous
        }

    });

});
//animated  carousel start

    //to add  start animation on load for first slide 

    $(function () {  // petit note : $(function (){}) est la même chose que $(document).ready(function() {}) - jQuery aime bien reduire de plus en plus le code

        $.fn.extend({       // ceci est particulaire de AnimateCSS, donc je ne touche pas ()
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

// attention au nomenclature des elements.... parfois des classe, parfois des ID, 
/*
$('.item2 h2').animateCss('swing');
$('#item3').animateCss('swing');
*/
// mieux d'utiliser un class général pour ça 
$('.titSlide').animateCss('swing');     // je n'ai vraiment AUCUNE idée pourquoi ceci ne fonctionnes pas si outre que 'swing'!
});
    });
    

function getNextHeader() {          
//    console.log("hi"); // petit test pour assurer que ma fonction est appelé
    $myFuckingThing = $("#thisFuckingThing");        // oui, moi aussi, ça me rendre dingue :)
    console.log("here it fucking is : ", $myFuckingThing);            // être sur que le putain de chose est là où il le faut
    setTimeout(() => {                      // un peu de JS car j'en ai plus envie de me casser la tête

                    // tout autre animation, effet désirée ici
                    // .queue() permis (SI il fonctionne avec le code de Animate.... c'est bien possible qu'ils ont leur propre méthodes pour faire des queue (comme leur animate-delay-3s)
        $('.titSlide').animateCss('swing');             
        
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