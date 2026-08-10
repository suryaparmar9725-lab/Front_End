    // Import wishlist functions from wishlistUtils.js
import { 
    addToWishlist,
    removeFromWishlist,
    listWishlist
} from "./wishlistUtils.js";


// Flipkart-style wishlist array
let wishlist = [
    {
        name: "iPhone 15",
        price: 69999
    },
    {
        name: "Boat Headphones",
        price: 1999
    }
];


// Add new product
wishlist = addToWishlist(wishlist, {
    name: "HP Laptop",
    price: 55000
});

console.log("After Adding:");
listWishlist(wishlist);


// Remove product
wishlist = removeFromWishlist(
    wishlist,
    "Boat Headphones"
);

console.log("After Removing:");
listWishlist(wishlist);