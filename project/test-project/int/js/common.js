/**
 * =======================================
 * SCROLLSPY
 * =======================================
 */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 0
            }, 1000);
            return false;
        }
    }
});
/**
 * =======================================
 * SCROLL_UP
 * =======================================
 */
jQuery( document ).ready(function() {
    jQuery('.scroll-up').mouseover( function(){
        jQuery( this ).animate({opacity: 1},100);
    }).mouseout( function(){
        jQuery( this ).animate({opacity: 1},100);
    })

    jQuery(window).scroll(function(){
        if ( jQuery(document).scrollTop() > 0 ) {
            jQuery('.scroll-up').fadeIn('fast');
        } else {
            jQuery('.scroll-up').fadeOut('fast');
        }
    });
});