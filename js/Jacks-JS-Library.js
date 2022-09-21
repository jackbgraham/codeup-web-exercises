console.log('test');

//sortNumArray() takes in a numerical array and returns it in numerical order
function sortNumArray(array){
    return array.sort(function(a, b){return a - b;});
}
//the same thing, but not as a function
// let testArray = [5, 6, 1, 2, 3, 4];
// testArray = testArray.sort(function(a, b){return a - b;});
// outputs [1, 2, 3, 4, 5, 6]