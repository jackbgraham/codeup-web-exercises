console.log('test');

// fetch('https://github.com/jackbgraham', {headers: {
//     `Authorization`: `token ${GITHUB_TOKEN}`
//     }})
//     .then((response) => response.json())
//     .then((data) => console.log(data));

function getUsersLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`
        }
    }).then(response => response.json())
        .then(events => {
            console.log(events)
            console.log(events[0].created_at)})
        .catch(error => console.error(error));
}

getUsersLastCommit('jackbgraham');

//async functions, you can use "await" to do the same thing as then, but with different syntax
// let response = await fetch('url')
//let event = await response