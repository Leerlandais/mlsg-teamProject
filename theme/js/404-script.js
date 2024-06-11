$(document).ready(function(){

 $(".img404").css("opacity", 0);


$("#img404-1").animate({left : "-=200px"});
$("#img404-2").animate({top : "-=200px"});
$("#img404-3").animate({left : "+=200px"});

setTimeout(() => {
    
    $("#img404-1, #img404-3").fadeTo(2000,1);
    $("#img404-1").animate({left : "+=275px"},1000);
    $("#img404-3").animate({left : "-=275px"},1000);
    nextStep();
}, 3000);

function nextStep() {
    setTimeout(() => {
        $('#img404-2').fadeTo(1000,1);
    }, 4000);
    setTimeout(() => {
        $("#img404-2").animate({top : "+=200px"},1000);
        $("#img404-1").animate({left : "-=75px"},500);
        $("#img404-3").animate({left : "+=75px"},500);
  
    }, 5000);
}


}); // end ready