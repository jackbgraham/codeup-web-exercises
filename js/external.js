"use strict";
console.log('Hello from external JavaScript!');

alert("Welcome to my Website!");

let favColor = prompt("What is your favorite color?");
console.log(favColor);

alert("Great, " + favColor + " is my favorite color too!");

/*
You have rented some movies for your kids:
The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
 */

alert("You have rented some movies for your kids:");
let mermaid = parseFloat(prompt("How many days will you rent The Little Mermaid?"));
let brother = parseFloat(prompt("How many days will you rent Brother Bear?"));
let hercules = parseFloat(prompt("How many days will you rent Hercules?"));
let totalDays = mermaid + brother + hercules;
let rentalPrice = totalDays * 3;
alert("the total number of rental days is " + totalDays + ". At a rate of $3 per day, your rental cost will be $" + rentalPrice + ".");

/*
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour.
Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week?
You worked 10 hours for Facebook,
6 hours for Google and
4 hours for Amazon.
 */
alert("You are now a contractor working for Google, Amazon, and Facebook. We will now calculate this week's pay based on your input.");
let google = 400 * prompt("How many hours did you work at Google this week?");
let amazon = 380 * prompt("How many hours did you work at Amazon this week?");
let facebook = 350 * prompt("How many hours did you work at Facebook this week?");
let totalValue = google + amazon + facebook;
alert("Your total pay this week will be $" + totalValue + ".");

/*
A student can be enrolled in a class only if
the class is not full
and the class schedule does not conflict with her current schedule.
 */

alert("You're a student now.");
let classFull = confirm("Is the class full?");
let schedule = confirm("Do you have a schedule conflict?");
let greenLight = !classFull && !schedule;
if (greenLight) {
    alert("You can enroll!")
    }else {
    alert("You cannot enroll...")
    }

/*
A product offer can be applied only if a person buys more than 2 items,
and the offer has not expired.
Premium members do not need to buy a specific amount of products.
 */

let itemN = confirm("Has the customer purchased more than two items?");
let expired = confirm("Has the offer expired?");
let premium = confirm("Is the customer a premium member?");

let productOffer = 