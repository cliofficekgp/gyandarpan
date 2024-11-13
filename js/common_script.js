$(document).ready(function(){
    $("#includedNav").load("nav.html"); 
});

$(".hBack").on("click", function(e){
    e.preventDefault();
    window.history.back();
});