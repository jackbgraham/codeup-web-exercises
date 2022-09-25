"use strict";
console.log("test");
$(function(){

    $('dt').css({
        'margin-to': '30px',
        'margin-left': '80px'
    });

    $('button').css({
        'background-color': '#4CAF50',
        'border': 'none',
        'border-radius': '10px',
        'color': 'white',
        'padding': '10px 5px',
        'text-align': 'center',
        'text-decoration': 'none',
        'display': 'inline-block',
        'font-size': '16px',
        'margin': '5px'
    });

    $( "button" ).hover(
        function() {
            $( this ).css({
                'background-color': 'white',
                'border': '3px solid #4CAF50',
                'border-radius': '10px',
                'color': '#4CAF50',
                'padding': '5px 5px',
                'text-align': 'center',
                'text-decoration': 'none',
                'display': 'inline-block',
                'font-size': '16px',
                'margin': '5px'
            });
        }, function() {
            $( this ).css({
                'background-color': '#4CAF50',
                'border': 'none',
                'border-radius': '10px',
                'color': 'white',
                'padding': '10px 5px',
                'text-align': 'center',
                'text-decoration': 'none',
                'display': 'inline-block',
                'font-size': '16px',
                'margin': '5px'
            });
        }
    );

    $( "button" ).hover(
        function() {
            $( this ).append( $( "<span> &#9759;</span>" ) );
        }, function() {
            $( this ).find( "span" ).last().remove();
        }
    );

    $('#toggle1').hide();
    $("#clickMe1").on(
        'click', function(){
        // alert('You clicked me');
        $('#toggle1').toggle();
    });

    $('#toggle2').hide();
    $("#clickMe2").on(
        'click', function(){
            // alert('You clicked me');
            $('#toggle2').toggle();
        });

    $('#toggle3').hide();
    $("#clickMe3").on(
        'click', function(){
            // alert('You clicked me');
            $('#toggle3').toggle();
        });

    $('#toggle4').hide();
    $("#clickMe4").on(
        'click', function(){
            // alert('You clicked me');
            $('#toggle4').toggle();
        });

    $('#toggle5').hide();
    $("#clickMe5").on(
        'click', function(){
            // alert('You clicked me');
            $('#toggle5').toggle();
        });

    $('#toggle6').hide();
    $("#clickMe6").on(
        'click', function(){
            // alert('You clicked me');
            $('#toggle6').toggle();
        });

    $('#toggle7').hide();
    $("#clickMe7").on(
        'click', function(){
            // alert('You clicked me');
            $('#toggle7').toggle();
        });

    $('#toggle8').hide();
    $("#clickMe8").on(
        'click', function(){
            // alert('You clicked me');
            $('#toggle8').toggle();
        });

    $('#toggle9').hide();
    $("#clickMe9").on(
        'click', function(){
            // alert('You clicked me');
            $('#toggle9').toggle();
        });

    $('#toggle10').hide();
    $("#clickMe10").on(
        'click', function(){
            // alert('You clicked me');
            $('#toggle10').toggle();
        });

    $("#hN").on(
        'click', function(){
            // alert('You clicked me');
            $('#nP1').children().last().css('background-color', '#FF0');
            $('#nP2').children().last().css('background-color', '#FF0');
            $('#nP3').children().last().css('background-color', '#FF0');
        });

    $("#h").on(
        'click', function(){
            // alert('You clicked me');
            $('#np1').children().css('font-weight', 'bold');

        });


    // $("#clickMe").on(
    //     'click', function(){
    //     // alert('You clicked me');
    //     $('#toggle1').style('display': 'none')
    // });

    // this breaks it for some reason

    // let admiralAccVar = $('#collapse').prev('h3');
    // $("#accordion").accordion('option', 'active', admiralAccVar);

    //accordion just stays white, which I think means it doesn't work anymore?


});


