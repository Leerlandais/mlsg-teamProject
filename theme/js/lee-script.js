$(document).ready(function() {


  
  $('.ourCopyrightNames').on('mouseenter', function () {
    $(this).css("color", '#E30056');
   // $(this).animate({color : 'grey'},1000);
    
    $('.ourCopyrightNames').on('mouseleave', function () {  
      $(this).removeAttr("style");
    });
  });

  $('.colourChange').on('mouseenter', function() {
      $(this).css("color", '#7E2C5C');
    $('.colourChange').on('mouseleave', function() {
      $(this).removeAttr("style");
    });
  });
    
  
  // TOUT POUR LE CAROUSEL EST ICI

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
        $('.item1.active img').animateCss('slideInDown');
        $('.item1.active h2').animateCss('zoomIn');
        $('.item1.active p').animateCss('fadeIn');
  
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
  
        $('.item1 img').animateCss('slideInDown');
        $('.item1 h2').animateCss('zoomIn');
        $('.item1 p').animateCss('fadeIn');
  
        $('.item2 img').animateCss('zoomIn');
        $('.item2 h2').animateCss('swing');
        $('.item2 p').animateCss('fadeIn');
  
        $('.item3 img').animateCss('fadeInLeft');
        $('#item3').animateCss('swing');
        $('#paraItem3').animateCss('swing');
    });
  });

  // FIN DU CAROUSEL
  
  
  
  
  
  
  
  
  
  /*
    $('#nameBA').hover(function(e) {
        $('div#pop-upBA').show();
      }, function() {
        $('div#pop-upBA').hide();
      });


      $('#nameAA').hover(function(e) {
        $('div#pop-upAA').show();
      }, function() {
        $('div#pop-upAA').hide();
      });
      
    $('#nameRB').hover(function(e) {
        $('div#pop-upRB').show();
      }, function() {
        $('div#pop-upRB').hide();
      });
      
    $('#nameLB').hover(function(e) {
        $('div#pop-upLB').show();
      }, function() {
        $('div#pop-upLB').hide();
      });

        function tagOurNames() {
            // nice - this is the jQ for removeEventListener
            $('.ourCopyrightNames').off('mouseenter');
            $('.ourCopyrightNames').one('mouseenter', function() {
                console.log($(this).text() + ' activated');
                $(this).replaceWith('<span class="current-year"><a href="https://leerlandais.com">Hi there</a></span>')
               // $(this).text("works")      
                // allows me to prevent them being clicked twice in a row
                $('.ourCopyrightNames').removeClass("active");
                $(this).addClass('active');
                // another find! Take all except this (should also work for named elements, I think)
                $(".ourCopyrightNames").not(this).one('mouseenter', function() {
                    console.log($(this).text() + ' activated again');
                    $('.ourCopyrightNames').removeClass('active');
                    $(this).addClass('active');
                });
            });
        }      
        tagOurNames();
  */

  /*         function tagOurNames() {
   
    $('.current-year').on('mouseenter', function() {
        console.log($(this).text() + ' activated');
        $textHolder = $(this).html();
         console.log($textHolder);
        $(this).html('<span class="ourCopyrightLinks current-year"><a href="https://leerlandais.com">Hi there</a></span>')             
    });  
}
$(".ourCopyrightLinks").on("mouseleave", function () {
    console.log("hi there again");
    $(this).html($textHolder);
});
tagOurNames();
*/

}); // end ready