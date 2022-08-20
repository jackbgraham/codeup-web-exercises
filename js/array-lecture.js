"use strict";
//console.log("test");
//declaring an array literal:
//each item in an array is called an element

let groceryList = [`bread`, `eggs`, `butter`, `milk`];

for(let i = 0; i < groceryList.length; i++ ){
    if (i === groceryList.length - 1){
        console.log("I have to buy " + groceryList[i] + ".")
    } else {
        console.log("I have to buy " + groceryList[i] + " and ");
    }
}



let texasCities = [`San Antonio`, `Houston`, `Dallas`, `El Paso`];
//logs every other city as odd
for(let i = 0; i < texasCities.length; i++){
    if (i % 2 === 1) {
        console.log(texasCities[i] + " is and odd city");
    } else {
        console.log(texasCities[i]);
    }
}
//takes in an array and logs the elements in order
function outputArray(array){
    for (let i = 0; i < array.length; i ++){
        console.log(array[i]);
    }
}

outputArray(texasCities);

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//forEach() takes a function as a parameter
//forEach() is made for arrays
//to get the item number to start at 1, instead of 0: parentheses (index + 1)
//forEach takes up to three parameters
//parameter 1 - elements of the array
//parameter 2 - optional: represents the element index
//parameter 3 - optional: represents the array itself
//in anonymous functions (unnamed) we can use arrow functions

prices.forEach(function(price, index){
    console.log(`item number ` + (index + 1) + ` costs ` + price);
});
//forEach with arrow function
prices.forEach(price => {
    console.log(price)
});

//adding stuff to the grocery list
//groceryList.push(`potatoes`); //.push(whatever) adds potatoes to the end of the array
//console.log(groceryList);
//groceryList.pop();            //.pop() removes the last element of the array
//console.log(groceryList);
//groceryList.unshift("cheese");   //.unshift("cheese") inserts cheese at index 0
//groceryList.shift():             //.shift() removes the element at index 0
let indexOfButter = groceryList.indexOf("butter");    //
//groceryList[indexOfButter] = "margarine";           //replaces an element at specified position
//groceryList[2] = "country crock";

let firstHalf = groceryList.slice(0, 2); // returns element 0 and 1 in the array
let secondHalf = groceryList.slice(2);   // returns element 2 until the end of the array

firstHalf.push("spaghetti");
groceryList = firstHalf.concat(secondHalf);
console.log(groceryList);
//this splits grocery list into two arrays, inserts spaghetti at position 2, and then recombines them

//groceryList.sort()    // this will sort it alphabetically, capitalized words, then non-capitalized words

groceryList.forEach((item, index, array) => {
    array[index] = item.toUpperCase();
})
console.log(groceryList);
/////////////////////////////////////////
let quote = "That's a spicy meat-a ball";
let quoteArray = quote.split(" ");
let meatballA = quoteArray.slice(0, 2);
let meatballB = quoteArray.slice(2);
meatballA.push("very");
quoteArray = meatballA.concat(meatballB);
quoteArray.push("and spaghetti!");
quote = quoteArray.join(" ").toUpperCase();
console.log(quote);
////////////////////////////////////////