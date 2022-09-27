console.log('test');

//sortNumArray() takes in a numerical array and returns it in numerical order
function sortNumArray(array){
    return array.sort(function(a, b){return a - b;});
}
//the same thing, but not as a function
// let testArray = [5, 6, 1, 2, 3, 4];
// testArray = testArray.sort(function(a, b){return a - b;});
// outputs [1, 2, 3, 4, 5, 6]

//removeX(array, x) takes in an array, and an element from the array, then returns a new array with that element removed
function removeX(array, x){
    return array.filter(element => {
       return element !==x;
    });
}

//takes in a multi-word string and splits it into an array
function stringToArray(str){
    return {
        firstWord: string.split(' ')[0],
        secondWord: string.split(' ')[1]
    }
}

// this is the spread operator [...str], it converts back and forth between strings and arrays, str here is a placeholder


