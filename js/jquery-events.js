"use strict";
$(function(){

    $("#clickMe").on('click', function(){
        alert('You clicked me');
    });

    $("#create-an-element").on('click', function(){
        $(this).after("<button class='will-this-work'>Click Me</button>");
    });

    // this won't work because we are trying to
    // register an event handler with an element
    // that doesn't exist yet
    // $(".will-this-work").on('click', function(){
    //    alert(":( This won't work");
    // });

    // this will work
    // delegated event
    $("#dynamic-content").on('click', '.will-this-work', function(){
        alert("oooooohhh yeeeeaaaahhh");
    });

    $(".box").hover(function(){
            $(this).addClass("hotpink");
        },
        function(){
            $(this).removeClass("hotpink");
        });

    $(document).keydown(function(e){
        // alert("you just pressed a key down");
        console.log(e.originalEvent.key);
    })

});