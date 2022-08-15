"use strict";
console.log("test");

/*
 * TO DO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

//function analyzeColor(str){
//    if (str === 'red'){
//        console.log('red is the color of blood');
//    } else if (str === 'orange') {
//        console.log('orange is the color of sunset');
//    } else if (str === 'yellow') {
//        console.log('yellow is lemon sunshine');
//    } else if (str === 'green') {
//        console.log('green is the pigmentation of chlorophyll');
//    } else if (str === 'blue') {
//        console.log('blue is the color of irradiated nitrogen');
//    } else if (str === 'indigo') {
//        console.log('indigo is a plant used to dye clothing');
//    } else if (str === 'violet') {
//        console.log('violet is like purple, but fancier');
//    } else {
//        console.log(`I don't know anything about ${str}`);
//        return `I don't know anything about ${str}`
//    }
//}
//console.log(analyzeColor('red'));
//console.log(analyzeColor('orange'));
//console.log(analyzeColor('yellow'));
//console.log(analyzeColor('green'));
//console.log(analyzeColor('blue'));
//console.log(analyzeColor('indigo'));
//console.log(analyzeColor('violet'));
//console.log(analyzeColor('cyan'));


/*
 * TO DO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor) + ' (this is the random color) ');

/*
 * TO DO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


//function analyzeColor(color) {
//     switch (color) {
//         case("red") :
//             return "red is the color of stop signs";
//         case("orange"):
//             return "orange is the default flavor of Hi-C";
//         case("yellow"):
//             return "yellow the color of my cup while I'm writing this";
//         case("green"):
//             return "green is the color of my cup after I'm done";
//         case("blue"):
//             return "blue is the default flavor of powerade";
//         case("indigo"):
//             return "indigo is pretty much blue, let's be honest with ourselves";
//         case("violet"):
//             return "violet is the name of a smol flower";
//         case(color):
//             return `I don't know anything about ${color}`;
//     }
// }

//console.log(analyzeColor(randomColor) + ' (this is the random color) ');
//console.log(analyzeColor('red'));
//console.log(analyzeColor('orange'));
//console.log(analyzeColor('yellow'));
//console.log(analyzeColor('green'));
//console.log(analyzeColor('blue'));
//console.log(analyzeColor('indigo'));
//console.log(analyzeColor('violet'));
//console.log(analyzeColor('cyan'));

/*
 * TO DO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//let color = prompt("enter the name of a color");
//alert (analyzeColor(color));

/*
 * TO DO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function luckyNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log("your lucky number is... " + luckyNum(0, 5));

let val = luckyNum(0, 5);
//console.log(val);

function calculateTotal(val, total){
    if (val === 0){
        return total;
    } else if (val === 1){
        return total - (total * 0.10);
    } else if (val === 2){
        return total - (total * 0.25);
    } else if (val === 3){
        return total - (total * 0.35);
    } else if (val === 4){
        return total - (total * 0.5);
    } else if (val === 5){
        return 0;
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));
//console.log(calculateTotal(val, 100) + ' (randomized) ');
/*
 * TO DO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);
//var price = prompt("Please enter your price to apply a random discount.");
//alert(`Your lucky number is: ${luckyNumber}. \n The total bill was $ ${price}. \n Your new total bill is $ ${calculateTotal(luckyNumber, price)}.`);

/*
 * TO DO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function oddOrEven(number){
    return number % 2 === 0 ? number + " is an even number." : number + " is an odd number.";
}
function plus100(number){
    return `${number} + 100 = ${(number + 100)}`;
}
function negOrPos(number){
    return number < 0 ? + " is a negative number." : number + " is a positive number.";
}

let wantsToEnterNumber = confirm(`Would you like to enter a number?`);
if (wantsToEnterNumber) {
    let pnum = parseFloat(prompt(`Please enter your number...`));
    alert(oddOrEven(pnum));
    alert(plus100(pnum));
    alert(negOrPos(pnum));
}

//    if(pnum % 2 === 0) {
//        alert(pnum + " is an even number.");
//    } else {
//        alert(pnum + " is an odd number.");
//    }
//    alert(pnum + ` + 100 = ` + (pnum + 100));
//   if (pnum > 0){
//        alert(pnum + ` is a positive number.`);
//    } else if (pnum < 0){
//        alert(pnum + ` is a negative number.`);
//    }



