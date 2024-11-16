$(document).ready(function(){
    $("#includedNav").load("nav.html"); 
    // Function to go back to the previous page
    
    goBack = function(){
        //e.preventDefault();
        window.history.back();
    };   
});


