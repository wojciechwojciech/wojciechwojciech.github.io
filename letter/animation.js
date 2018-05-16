$(window).on('load',function() {
    $("#middle, #top").width( $('#letter').width() -  400 );
    $("#letter").animate({
        opacity: 1,
        bottom: "+=100%",
    }, 2000, function() {
        card();
    });
});

$(window).resize(function(){
    location.reload();

//    $("#middle, #top").width( $('#letter').width() -  400 );
//
//    $("#letter").animate({
//        opacity: 1,
//        bottom: "+=100%",
//    }, 2000, function() {
//    
//    });
});

function card(){
    $("#top").css({'z-index':'1'});
    $("#content").animate({
        index: "5",
        bottom: "+=90%",
        boxShadow: "10px 10px 40px 1px #808080"
    }, 1000, function() {
        $("#content").css({'z-index':'6'});
        $("#letter > :not(#content)").animate({
        opacity: 0,
        left: "-=100%",
        }, 2000, function() {
            console.log('Animation Complete');
        });
    });
}
