// Import named exports
import { 
    formatSongTitle, 
    getSongDurationInMinutes 
} from "./spotifyUtils.js";


// Sample song details
const song = {
    title: "believer imagine dragons",
    duration: 244
};

// Import cart functions from cartUtils.js
import { 
    addToCart, 
    removeFromCart, 
    calculateTotal 
} from "./cartUtils.js";


// Flipkart-style cart
let cart = [
    {
        name: "Mobile",
        price: 20000
    },
    {
        name: "Headphones",
        price: 3000
    }
];


// Add product
cart = addToCart(cart, {
    name: "Laptop",
    price: 55000
});

console.log("After Adding:", cart);


// Remove product
cart = removeFromCart(cart, "Headphones");

console.log("After Removing:", cart);


// Calculate total
const total = calculateTotal(cart);

console.log("Total Price: ₹" + total);

// Format song details
const formattedTitle = formatSongTitle(song.title);

const formattedDuration = getSongDurationInMinutes(song.duration);


// Display output
console.log("Song Title:", formattedTitle);

console.log("Duration:", formattedDuration);