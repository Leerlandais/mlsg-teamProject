$(function(){

    $('.hiddenContact').css('opacity', '0');

$latitude = 50.824792507592014;
$longtitude = 4.348834446014973;
$zoomcarte = 19;

let map = L.map('map').setView([$latitude, $longtitude], $zoomcarte);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

    $mapIcon = L.icon({
    iconUrl: 'images/logo-mlsg/logoPrincipal.png',
    iconSize:     [60, 95], 
    shadowSize:   [50, 64], 
    iconAnchor:   [0, 20], 
    shadowAnchor: [4, 62],  
    popupAnchor:  [0, 6]
    });

    $marker = L.marker([$latitude, $longtitude], {icon:$mapIcon}).addTo(map);
    
    $marker.bindPopup(`<span class = "text-center"><a href = "https://mlsg.be/" target="_blank"><h4>Maison Local Saint Gilles</h4></a></span>`);



$(".contactBlocks").css("opacity", 0);
$("#blockAddr").animate({left : "-=100px"},1000);
$("#blockTele").animate({left : "+=100px"},1000);


$("#blockEmail").queue(function(next){
    $('#blockEmail').fadeTo(2000,1);
    
    
    next();
    }).queue(function(next){
        $("#blockAddr").fadeTo(2500,1);
        $("#blockAddr").animate({left : "-=50px"},1000);
        $("#blockAddr").animate({left : "+=150px"},1000);
        next();
        }).queue(function(next){
            $("#blockTele").fadeTo(2500,1);
            $("#blockTele").animate({left : "+=50px"},1000);
            $("#blockTele").animate({left : "-=150px"},1000);
        next();
        }).delay(3700).queue(function(next){
            $(".hiddenContact").fadeTo(2000,1);
            next();
            contactFun();
        });


        function contactFun() {
            for (let i = 0; i < $('.contactFunSpan').length; i++) {
                for (let j = -1; j < $('.contactFunSpan').length; j++){
                setTimeout(() => {
                    $(`.contactFunSpan${i}`).css("color", '#E30056');
                    if (i > 0) {
                        $(`.contactFunSpan${i - 1}`).css("color", '#7E2C5C');
                    }
                    if (i > 1) {
                        $(`.contactFunSpan${i - j}`).css("color", '#00A89F');
                    }
                    if (i === 5) {
                        $(`.contactFunSpan${1}`).css("color", '#7E2C5C');
                    }
                    if (i === 6) {
                        $(`.contactFunSpan${0}`).css("color", '#7E2C5C');
                    }
                }, 500 * i); // Ça m'a pris une heure pour capter qu'il doivent être échelonner !!!
            }
            setTimeout(() => {
                $(".contactFunSpan").animate({color : "black"},3000)
            }, 3000);
        }
        }
        
















})  // end ready