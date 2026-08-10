// Import default export
import formatFollowers from "./instaHelpers.js";


// Instagram users
const users = [
    {
        username: "surendra",
        followers: 1200
    },
    {
        username: "developer",
        followers: 2500000
    },
    {
        username: "photographer",
        followers: 850
    }
];


// Display formatted followers
users.forEach(user => {

    console.log(
        user.username + " : " + 
        formatFollowers(user.followers) + 
        " followers"
    );

});