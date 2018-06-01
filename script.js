//$('#logo').height( $('nav').height() - "1%");
//$(document).onresize(function () {
//    $('logo').css({
//        'height': $('nav').height() * 1.1
//    });
//})
$(window).on('load resize', function () {
    $('#logo').css({
        'height': $('nav').height() * .9
    });
});