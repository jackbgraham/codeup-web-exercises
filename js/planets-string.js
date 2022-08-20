"use strict";

var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
var planetsArray = planetsString.split("|");

// /**
//  * TODO:
//  * Convert planetsString to an array, and save it in a variable named
//  * planetsArray.
//  * console.log planetsArray to check your work
//  */

console.log(planetsArray);

// /**
//  * TODO:
//  * Create a string with <br> tags between each planet. console.log() your results. Why might this be useful?
//  *
let planetsWithBreaks =planetsArray.join(`<br>`);
console.log(planetsWithBreaks);
let planetsDiv = document.getElementById("planets");
planetsDiv.innerHTML = planetsWithBreaks;

let planetsList = planetsArray.join("</li><li>");
planetsList = "<ul><li>" + planetsList + "</ul></li>"
//I messed something up here, there's supposed to be a bulleted list under the first list

//  * BONUS:
//  * Create another string that would display your planets in an undordered
//  * list. You will need an opening AND closing <ul> tags around the entire
//  * string, and <li> tags around each planet.
//  */
