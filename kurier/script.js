$(window).on('load resize', function () {
    $('#logo').css({
        'height': $('nav').height() * .9
    });
});