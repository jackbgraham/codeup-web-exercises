"use strict";
//console.log("test");

//Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication table for that number
// (just multiply by the numbers 1 through 10)

let multiple = 1
function showMultiplicationTable(number){
    while (multiple < 11){
       let product = number * multiple;
       console.log(`${number} x ${multiple} = ${product}`);
       multiple = multiple + 1;
    }
}
showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
//and output to the console whether each number is odd or even.
let reps = 0

for (reps; reps < 10; reps++){
    let a = getRandomInt()
    console.log(a + getOddOrEven(a));
}
function getRandomInt(){
    let min = Math.ceil(20);
    let max = Math.floor(201);
    return Math.floor(Math.random() * (max - min) + min);
}
function getOddOrEven(num){
    if (num % 2 == 0){
        return " is an even number";
    } else {
        return " is an odd number";
    }
}
//Create a for loop that uses console.log to create the output shown below.
//1
//22
//333
//4444
//55555
//666666
//7777777
//88888888
//999999999

let pyramid = 1;
for (pyramid; pyramid < 10; pyramid++){
    let obelisk = pyramid.toString();
    console.log(obelisk.repeat(pyramid));
}

//^ teacher solution #1
//for (let i = 1; i <= 9; i++){
//    console.log(i.toString().repeat(i));
//}
//^ teacher solution #2
//for (let i = 1; i <= 9; i++){
//    let intaj = "";
//    for (let aded = 0; aded < 1; aded++){
//        intaj = intaj + 1;
//        aded++
//    }
//    console.log(intaj);
//}
//Create a for loop that uses console.log to create the output shown below.
//100
//95
//90
//85
//80
//75
//70
//65
//60
//55
//50
//45
//40
//35
//30
//25
//20
//15
//10
//5
let cent = 100;
for (cent; cent > 0; cent -= 5){
    console.log(cent);
}