$(window).on('load resize', function() {
    $('#logo').css({
        'height': $('nav').height() * .9
    });
    $('nav ul').css({
        'margin-left': $('#logo').width(),
        'width': '100%'- $('nav ul').css('margin-left')
    });
});