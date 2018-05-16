$(window).on('load resize click', function () {
    $('#lighting').height( $('#case').height()*0.63);
});

//$('dropdown-content button').click(function(a){
//    $(a).attr('src',this.src);
//});

function changeCase(a){document.getElementById("case").src=a;}
function changeMotherboard(a){document.getElementById("motherboard").src=a;}
function changeCpu(a){document.getElementById("cpu").src=a;}
function changeCooling(a){document.getElementById("cooling").src=a;}
function changeGpu(a){document.getElementById("gpu").src=a;}
function changePsu(a){document.getElementById("psu").src=a;}

//document.getElementById("min-btn").addEventListener("click", function (e) {
//    var window = remote.getCurrentWindow();
//    window.minimize(); 
//});
//document.getElementById("max-btn").addEventListener("click", function (e) {
//    var window = remote.getCurrentWindow();
//    if (!window.isMaximized()) {
//       window.maximize();          
//    } else {
//        window.unmaximize();
//    }
//});
//document.getElementById("close-btn").addEventListener("click", function (e) {
//    var window = remote.getCurrentWindow();
//    window.close();
//}); 

//$('#close-btn').on('click', function(){
//    window.close();
//});
//function loadMenu(){
//    var cases=[
//        ['SilentiumPC rg4t','img/cases/spcrg4t.png'],
//        ['SilentiumPC Gladius m35w','img/cases/spcgladiusm35w']
//    ]
//    $('.dropdown-content cases').load(function(){
//        $(this).append('<button><img src="'+cases[0]+'></button>')
//    });
//}
//loadMenu();