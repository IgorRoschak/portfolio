//SCROLLSPY
$('a[href=#slide-two],a[href=#top],a[href=#work],a[href=#contact]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 0
            }, 1000);
            return true;
        }
    }
});

//PLAY VIDEO MODAL
$('#mediaModal').on('show.bs.modal', function () {
    var video = document.getElementsByTagName('video');
    for (var i = 0; i < video.length; i++) {
        video[i].play();
    }
});

//PAUSE VIDEO MODAL
$('#mediaModal').on('hide.bs.modal', function () {
    var video = document.getElementsByTagName('video');
    for (var i = 0; i < video.length; i++) {
        video[i].pause();
    }
});

//ANIMATION TOP SLIDE
var main = $("#home");
function setPageSize(){
    var w = $(window).width();
    var h = $(window).height();


    main.css({
        "height":h
    });
}
$(document).on("ready",function(){
    setPageSize();
});
$(window).on("resize",function(){
    setPageSize();
});

//$("body").on("click",".action-show",function(){
//    var h = main.height();
//    main.css({
//        "top":-h
//    });
//
//    return false;
//});

