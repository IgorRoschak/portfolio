$(document).ready(function() {

    var owl = $("#owl");

    $("#oneOwl").owlCarousel({
        loop:true,
        items: 3,
        center:true,
        margin: 20,
        smartSpeed: 800,
        nav:true,
        URLhashListener:true,
        startPosition: 'URLHash',
        responsiveClass:true,
        responsive:{
            240:{
                items:1
            },
            1200:{
                items:1
            },
            1250:{
                items:3
            }
        }
    });

    $(".plus").click(function() {
        var item = $(this).closest(".plusminusunit").find("input");
        item.val(Number(item.val()) + 1);
    });
    $(".minus").click(function() {
        var item = $(this).closest(".plusminusunit").find("input");
        item.val(Number(item.val()) - 1);
    });

});

$(function() {
    $('#datetimepicker1').datetimepicker({
        language: 'pt-BR'
    });
});