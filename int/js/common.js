$(document).ready(function () {

    /*=======================================
     FIXED-MENU
     =======================================*/
    $('body').on('click', 'a.anchor-link', function (e) {
        e.preventDefault();

        var $a = $(this),
            $target = $($a.attr('href'));

        if ($target.length < 1) return;

        $('html, body').animate({scrollTop: $target.offset().top}, 1000);
        return false;
    });

    var toggleHeaderFloating = function () {
        // Floating Header
        if ($(window).scrollTop() > 0) {
            $('.navbar-fixed-top').addClass('floating');
        } else {
            $('.navbar-fixed-top').removeClass('floating');
        }
        ;
    };

    $(window).on('scroll', toggleHeaderFloating);
    toggleHeaderFloating();
    /*==========================================
     ACTIVE SCROLLSPY MENU
     * =======================================*/
    $('body').scrollspy({
        target: '#responsive-menu-header',
        offset: 110
    });
    /* =======================================
      SCROLLSPY
      =======================================*/
    $('.nav li a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        });
    });
    /*=======================================
     ANIMATION
     ========================================*/
    wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        }
    );
    wow.init();

    var opacity_effect = $('.title-effect');

    //=========================================
    //  ЗАГРУЗКА SLIDER ПО ШИРИНЕ ОКНА (767px)
    //=========================================
    function sizeWindow() {

        if ($(window).width() > 767) {
            $(window).on('scroll', function () {
                var st = $(this).scrollTop();
                opacity_effect.css({'opacity': (1 - st / 350)});
            });
        } else {
            $(window).on('scroll', function () {
                var st = $(this).scrollTop();
                opacity_effect.css({'opacity': (1 - st / 250)});
            });
        }
    }

    $(window).resize(function () {
        sizeWindow();
    });

    sizeWindow();

    //========================================
    //                WORK
    //========================================
    $(".show-work").click(function (event) {
        event.preventDefault();
        $('.popup-work iframe').attr('src', $(this).attr('href'));
        $(".popup-work").fadeIn("400");
        $('body').css('overflow', 'hidden');

        ga('send', 'event', 'show', 'work', $(this).attr('href'));
    });
    //========================================
    //            CLOSE-MODAL
    //========================================
    $(".close-popup").on('click', function (event) {
        event.preventDefault();
        $(".overlay").fadeOut(400);
        $(".popup-form").fadeOut(400, function () {
            $('.callback-form').hide();
            $('.contact-form').show();
        });
        $(".popup-work").fadeOut(400);
        $("body").css("overflow", "visible");

    });

});