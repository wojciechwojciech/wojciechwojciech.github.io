$(window).on('load resize', function() {
    $('#logo').css({
        'height': $('nav').height() * .9
    });
    $('nav ul').css({
        'margin-left': $('#logo').width(),
        'width': '100%'- $('nav ul').css('margin-left')
    });
});
//window.scroll({
//  top: 0, 
//  left: 0, 
//  behavior: 'smooth' 
//});

//window.scrollBy({ 
//  top: 300, // could be negative value
//  left: 0, 
//  behavior: 'smooth' 
//});

// Scroll to a certain element
//document.querySelector('footer').scrollIntoView({ 
//    behavior: 'smooth' 
//});

$('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
}, 500, 'linear');