"use strict";
//The parts of a function
//1- function keyword
//2- name of the function
//3- parentheses with 0 or more parameters
//4- if there is more than one parameter, the list is coma seperated
//5- curly braces contain the function body
//6- the function body contains the code that runs when the function is invoked
//7- optional, but commonly found is the return statement

//function sayHello(greeting, name) {
//    return `${greeting}, ${name}`;
}

//let number = 15;
//this is a function declaration
//function localOrGlobal(){
//    let number = 20;
//    consol.log(number);
//}
//what happens in the function stays in the function
//this is "local scope"

//global variables can be called throughout the script, and have "global scope"
//localOrGlobal();
//console.log(number);
//this will return the local variable "number" and also the global variable "number on the next line
//20
//15

//if you don't put let/var to define a variable inside a function, it becomes global for some reason

//this is a function expression
//let bark = function(){
//    console.log("barkbarkbark!");

//declarations will get hoisted, i.e. you can call them at the beginning of the document
//expressions will not be hoisted
//expressions can be called to pass data into arguments

//arrow functions = lambda function in java
//arrow functions do not get hoisted, only declarations
const add = (num1, num2) => num1 + num2;
//arrow functions can also use multi-line curly braces after the arrow