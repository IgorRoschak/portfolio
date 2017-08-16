$(document).ready(function() {

    var owl = $("#owl");

    $("#oneOwl").owlCarousel({
        loop:true,
        items: 1,
        nav:false,
        center:false,
        margin:0,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        smartSpeed: 1600,
        URLhashListener:true,
        startPosition: 'URLHash'
    });

    $("#twoOwl").owlCarousel({
        loop:false,
        items: 1,
        nav:false,
        center:true,
        margin:10,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        smartSpeed: 1,
        URLhashListener:true,
        startPosition: 'URLHash'
    });

    var twoOwl = $('.twoOwl');
    twoOwl.owlCarousel();
    // Go to the next item
    $('.next').click(function() {
        twoOwl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        twoOwl.trigger('prev.owl.carousel', [1]);
    });

    $("#threeOwl").owlCarousel({
        loop:false,
        items: 1,
        nav:false,
        center:false,
        margin:10,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        smartSpeed: 1,
        URLhashListener:true,
        startPosition: 'URLHash'
    });

    $("#fourOwl").owlCarousel({
        loop:true,
        items: 1,
        nav:false,
        center:false,
        margin:10,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        smartSpeed: 1,
        URLhashListener:true,
        startPosition: 'URLHash'
    });

    var fourOwl = $('.fourOwl');
    fourOwl.owlCarousel();
    // Go to the next item
    $('.next2').click(function() {
        fourOwl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.prev2').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        fourOwl.trigger('prev.owl.carousel', [1]);
    });

    $('.form').validator()

});

//PARALLAX
$(window).scroll(function() {

    var st = $(this).scrollTop();

    $(".background-image-01").css({
        "transform" : "translate(0%, -" + st /70 + "%"
    });

    $(".background-image-02").css({
        "transform" : "translate(0%, -" + st /80 + "%"
    });

});

//GOOGLE-MAPS-FOOTER
var map;
var egglabs = new google.maps.LatLng(50.436496, 30.451394);
var mapCoordinates = new google.maps.LatLng(50.436496, 30.451394);
var marker;

function initialize() {
    var mapOptions = {
        zoom: 16,
        disableDefaultUI: true,
        center: mapCoordinates,
        draggingCursor: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
//        styles: [
//            {
//                "stylers": [
//                    { "saturation": 0 }
//                ]
//            }
//        ]
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    var marker = new google.maps.Marker({
        position: mapCoordinates,
        map: map,
        title:"Hello World!"
    });
}
google.maps.event.addDomListener(window, 'load', initialize);


//
//$(document).ready(function () {
//
//    var carousel = $("#owl-demo");
//
//    carousel.owlCarousel({
//        itemsCustom: [
//            [0,3]
//        ],
//        afterAction: function(el){
//            //remove class active
//            this
//                .$owlItems
//                .removeClass('active')
//
//            //add class active
//            this
//                .$owlItems //owl internal $ object containing items
//                .eq(this.currentItem + 1)
//                .addClass('active')
//
//        }
//
//    });
//
//
//
//});