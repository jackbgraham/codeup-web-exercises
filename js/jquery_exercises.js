"use strict";
console.log("test");
$(function(){

// $('#1').css('color', '#FDA687');
// $('#2').css('color', '#FC895F');
// $('#3').css('color', '#FB6B37');
// $('#4').css('color', '#FA4E0F');
// $('#5').css('color', '#DC3E04');
// $('#6').css('color', '#B43304');
// $('#7').css('color', '#8C2703');
// $('#8').css('color', '#641C02');
// $('#9').css('color', '#3C1101');
//
// $('.codeup').css({'border': '1px solid red', 'width': 'fit-content'});
//
// $('li').css('font-size', '20px');
//
// $('h1, p, li').css({'background-color': '#FFFF00'});

    $('h1').click(function() {
        $(this).css('font-style', 'italic');
        $(this).css('background-color', '#FFFF00')
    });

    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });

    $('li').hover(
        function() {
            $(this).css('color', '#ff0000');
        },
        function() {
            $(this).css('color', '#000000');
        }
    );





});