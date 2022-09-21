// console.log("test");

$(function(){
   const $ref = $("#library");

   let li3text = $ref.text();
   $ref.text(li3text + "");

   $(".framework").css({
      'border': '1px solid black',
      'width': 'fit-content'
   });
});

const selector = "p, li";

$("p, li").text("uh oh spaghettios").css("color", "hotpink");