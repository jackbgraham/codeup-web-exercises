console.log("test");
//////////////////////
//let flavor = prompt("Welcome to Flavortown! What flavor of ice cream would you like?");

//let flavor = prompt("pick and ice cream flavor...");
//flavor = flavor.toLowerCase();

//if (flavor === "choclate"){
//    alert("One chocolate coming up!");
//} else if (flavor === "vanilla"){
//    alert("One vanilla coming up!");
//} else {
//    alert("We do not have that flavor. Do you want chocolate?");
//}

//switch (flavor){
//    case("choclate"):
//        alert("one chocolate coming up!");
//        break;
//    case("vanilla"):
//        alert("one vanilla coming up!");
//        break;
//    case("strawberry"):
//        alert("one strawberry coming up!");
//        break;
//    default:
//        alert("we ain't got none son, pick again");
//        break;
//}

//let decision = confirm("Are you sure you want to close this page?");
//alert(decision);

//if(decision){
//    alert("Ok fine, closing the page");
//} else {
//    alert("Ok, keeping page open");
//}
//(decision)alert("closing the page"):alert("keeping page open");
//this is the ternary operator version

//function to check if a number is divisible by 5

//function divisibleByFive(number){
//   if (number % 5 == 0){
//       alert("That number is divisible by 5");
//   } else {
//       alert("That number is not divisible by 5");
//   }
//}

//ternary operator version of same function below

function divisibleByFive(number){
    alert(number % 5 === 0 ? "that is divisible by 5" : "that is not divisible by 5");
}

divisibleByFive(prompt("enter a number:"));