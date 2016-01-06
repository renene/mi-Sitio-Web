$(document).ready(function () {
    $('.section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('.js--rw-1').waypoint(function () {
        $('.js--rw-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    var animationName = 'animated shake';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend oanimationend';
    $('h1').on('click', function () {
        $('.logo').addClass(animationName).one(animationEnd, function () {
            $(this).removeClass(animationName);
        });
    });


   new GMaps({
  div: '#map',
  lat: -12.043333,
  lng: -77.028333
});

});