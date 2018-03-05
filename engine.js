$(window).on('load resize click', function () {
    $('#lighting').height( $('#case').height()*0.63);
});
function changeCase(a){document.getElementById("case").src=a;}
function changeMotherboard(a){document.getElementById("motherboard").src=a;}
function changeCpu(a){document.getElementById("cpu").src=a;}
function changeCooling(a){document.getElementById("cooling").src=a;}
function changeGpu(a){document.getElementById("gpu").src=a;}
function changePsu(a){document.getElementById("psu").src=a;}