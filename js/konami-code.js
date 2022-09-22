// console.log("test");
"use strict";
console.log("test");
$(function(){


    $('#konami').css('max-width', '25%');
    $('body').css({
        'background-color': 'black',
        'color': 'white',

    });
    $('h1, #loading').css({
        'display': 'flex',
        'justify-content': 'center'
    });

    let code = "3838404037393739666513"
    let userEntry = "";

    $(document).keyup(function(event){
        userEntry += event.keyCode;
        if(userEntry === code) {
            alert('You have added 30 lives!')
        }
        console.log(event.keyCode);

    });

});