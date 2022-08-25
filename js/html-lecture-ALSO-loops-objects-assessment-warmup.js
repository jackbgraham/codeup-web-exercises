"use strict"
//console.log("test");

//write a function that accepts an array of numbers and returns it's average.
//bonus: if there are non-numeric values in the array, return false. numeric strings count as numeric values.

function isNumeric(n){
    return !(isNaN(n) || typeof n === "boolean" || typeof n === "null");
}

// console.log(isNumeric(1));
// console.log(isNumeric("2"));
// console.log(isNumeric("test"));

// function arrayAvg(array){
//     let a = eval(array.join("+"))/array.length;
//         if(!isNumeric(a) || typeof a !== "number"){     //I think this is redundant, but it's not clearing the error for console log #4
//             return false;
//         } else {
//             return a;
//         }
//
// }

// function arrayAvg(array){
//     let total = 0; //accumulator variable, you must define this first, or the loop won't work right
//     array.forEach(number => {total += number});
//     let ans = total/array.length
//
//     if(typeof ans !== "number"){
//         return false
//     } else {
//         return ans;
//     }
// }

function arrayAvg(array){
    let total = 0;
    for(let i = 0; i <array.length; i++){
        if(!isNumeric(array[i])){
            return false;
        }
        total += array[i];
    }
    return total/array.length;
}


console.log(arrayAvg([1, 2, 3]));
console.log(arrayAvg([5, 10, 15]));
console.log(arrayAvg(["3", "8", "35"])); //this one does not work
console.log(arrayAvg(["potato", "hamster", "grenades"]));


//Write a function that accepts an array of strings and returns the longest string.
//If there are two strings of equal length, it returns the one with the lowest index.
//bonus: if there are any values that are not strings, return false.



function longestString(array){
    let longest = ""; //accumulator
    for (let i = 0; i < array.length; i++){
        if (array[i].length > longest.length) longest = array[i];
    }
    return longest;
}

let stringArray = ["potato", "hamster", "grenades"]

console.log(longestString(["potato", "hamster", "grenades"]));
console.log(longestString(stringArray));