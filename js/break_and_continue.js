"use strict";
//console.log("test");
//let entry = prompt("Please enter an odd number between 1 and 50...");


while (true){
    let entry = prompt("Please enter an odd number between 1 and 50...");
    if(entry % 2 === 1 && entry >= 1 && entry <= 50){
        for(let i = 1; i <=50; i += 2){
            if(i == entry){
                console.log(`Yikes! Skipping number: ${entry}`);
                continue;
            } else {
                console.log(`Here is an odd number: ${i}`);
            }
        }
        break;
    }
}

//for (let i = 1; i <= 50; i++){
//    if (i = entry) {
//        console.log(`Yikes! Skipping number: ${i}`);
//    } else if (i % 2 !== 0) {
//        console.log(`Here is an odd number: ${i}`);
//    }
//}


//while (count < 50) {
//    console.log(count)
//    if (entry % 2 === 0) { break + prompt("Please enter an odd number between 1 and 50...") }
//}


//for (let count = 1; count < 50; count += 2) {
//    if (count === entry) { break; }
//    text += "The number is " + i + "<br>";
//}
//while (entry % 2 === 0){
//    if (entry % 2 !== 0){
//        break;
//    }
//    entry = prompt("That was an even number, please enter an odd number between 1 and 50...");
//}

//while (count <= 50){
//        if (count == entry){
//        console.log(`Yikes! Skipping number: ${count}`);
//    } else {
//        console.log(`Here is an odd number: ${count}`);
//    }
//    count = count + 2;
//}

//let string = "";
//for (let i = 0; i < 8; i++){
//    let word = prompt("potato!");
//    string += " " + word;
//    console.log("Your sentence is: " + string);
//    if (word === "curses"){
//        console.log("That word is not allowed");
//        break;
//    }
//}

//Create a file named break_and_continue.js in the js directory.
//    Prompt the user for an odd number between 1 and 50.
//    Use a loop and a break statement to continue prompting the user if they enter invalid input.
//    Use a loop and the continue statement to output all the odd numbers between 1 and 50,
//    except for the number the user entered.
//    Your output should look like this:


//Number to skip is: 27

//Here is an odd number: 1
//Here is an odd number: 3
//Here is an odd number: 5
//Here is an odd number: 7
//Here is an odd number: 9
//Here is an odd number: 11
//Here is an odd number: 13
//Here is an odd number: 15
//Here is an odd number: 17
//Here is an odd number: 19
//Here is an odd number: 21
//Here is an odd number: 23
//Here is an odd number: 25
//Yikes! Skipping number: 27
//Here is an odd number: 29
//Here is an odd number: 31
//Here is an odd number: 33
//Here is an odd number: 35
//Here is an odd number: 37
//Here is an odd number: 39
//Here is an odd number: 41
//Here is an odd number: 43
//Here is an odd number: 45
//Here is an odd number: 47
//Here is an odd number: 49
