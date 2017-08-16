$(document).ready(function() {
//SLIDERS
    var owl = $("#owl");

    $("#oneOwl").owlCarousel({
        loop:true,
        items: 1,
        nav:false,
        center:true,
        margin: 0,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        smartSpeed: 1600,
        URLhashListener:true,
        startPosition: 'URLHash'
    });

    $("#twoOwl").owlCarousel({
        loop:true,
        items: 7,
        nav:false,
        center:false,
        margin: 30,
        autoWidth:true,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        smartSpeed: 2400,
        URLhashListener:true,
        startPosition: 'URLHash',
        responsiveClass:true
        //responsive:{
        //    240:{
        //        items:1
        //    },
        //    1050:{
        //        items:4
        //    },
        //    1220:{
        //        items:5,
        //        autoWidth:false
        //    },
        //    1350:{
        //        items:7
        //    }
        //}
    });
});

//GOOGLE-MAPS-FOOTER
var map;
var egglabs = new google.maps.LatLng(55.778710, 37.632858);
var mapCoordinates = new google.maps.LatLng(55.778710, 37.632858);
var marker;

function initialize() {
    var mapOptions = {
        zoom: 16,
        disableDefaultUI: true,
        center: mapCoordinates,
        draggingCursor: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "stylers": [
                    { "saturation": -100 }
                ]
            }
        ]
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    var marker = new google.maps.Marker({
        position: mapCoordinates,
        map: map,
        title:"Hello World!"
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.addDomListener(document.getElementById('map-canvas'), 'mouseover', function () {
    map.set('styles', [
        {
            "stylers": [
                { "saturation": 0 }
            ]
        }
    ]);
});


google.maps.event.addDomListener(document.getElementById('map-canvas'), 'mouseout', function () {
    map.set('styles', [
        {
            "stylers": [
                { "saturation": -100 }
            ]
        }
    ]);
});

