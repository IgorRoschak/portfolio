//$('.grid').masonry({
//    // options
//    itemSelector: '.grid-item'
//});

//******MASONRY*****
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item'
});

//******TOOLTIP*****
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

//*****CAROUSEL*****
$(document).ready(function() {

    $("#oneOwl").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        center: false,
        margin: 10,
        smartSpeed: 1600,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        //animateOut: 'fadeOut',
        URLhashListener: true,
        startPosition: 'URLHash'
    });
});

