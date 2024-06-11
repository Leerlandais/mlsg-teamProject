$(document).ready(function(){

$(".img404").css("opacity", 0);


$("#img404-1").animate({left : "-=200px"});
$("#img404-2").animate({top : "-=200px"});
$("#img404-3").animate({left : "+=200px"});

setTimeout(() => {
    
    $(".img404").fadeTo(2000,1)
}, 3000);



}); // end ready