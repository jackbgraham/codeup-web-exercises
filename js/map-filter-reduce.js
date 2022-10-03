// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

///////////////////////////////////////////////////
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.


console.log(users[0]);
console.log(users[0].languages.length);
console.log(users[1].languages.length);
console.log(users[2].languages.length);
console.log(users[3].languages.length);
console.log(users[4].languages.length);


var threeLang = [];
for (var i = 0; i < users.length; i +=1) {
    if (users[i].languages.length > 2) {
        threeLang.push(users[i]);
    }
}
console.log(threeLang);

let threeLangFilter = users.filter(function(user){
    return user.languages.length > 2;
});
console.log(threeLangFilter);

///////////////////////////////////////////////////
// Use .map to create an array of strings where each element is a user's email address



///////////////////////////////////////////////////
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
let avgExp = totalExp / users.length;
console.log(avgExp);


///////////////////////////////////////////////////
// Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((currentLongest, user) => {
   if (currentLongest.length > user.email.length) {
       return currentLongest;
   } else {
       return user.email
   }
   // return currentLongest.length > user.email.length ? currentLongest : user.email;
});
console.log(longestEmail);

///////////////////////////////////////////////////
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userNames = users.reduce((list, user) => {
    return list += (user.name + ', ')
}, "Your instructors are: ");
console.log(userNames);

let userNamesBetter = users.reduce((pre, user, index, usersArray) => {
    return pre + `${pre ? ', ' : 'Your instructors are: '}${user.name}${ (index == (usersArray.length - 1)) ? '.' : '' }`
}, "");
console.log(userNamesBetter);

///////////////////////////////////////////////////
// Bonus
// Use .reduce to get the unique list of languages from the list of users.

let uniqueLanguages = users.reduce((accum, user) => {
    user.languages.forEach(function(language){
        if(!accum.includes(language)){
            accum.push(language);
        }
    });
    return accum;
}, []);
console.log(uniqueLanguages)