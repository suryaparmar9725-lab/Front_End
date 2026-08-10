// Import functions from utils.js
import { 
    formatPrice, 
    getDiscountedPrice 
} from "./utils.js";


// Cart items
const cartItems = [
    {
        name: "Shoes",
        price: 1999,
        discount: 10
    },
    {
        name: "Watch",
        price: 2999,
        discount: 15
    },
    {
        name: "Headphones",
        price: 4999,
        discount: 20
    }
];

// Import default export and named export
import getDiscountedPrice, { formatPrice } from "./utils.js";


// Cart items
const cartItems = [
    {
        name: "Shoes",
        price: 1999,
        discount: 10
    },
    {
        name: "Watch",
        price: 2999,
        discount: 15
    },
    {
        name: "Headphones",
        price: 4999,
        discount: 20
    }
];


// Display price details
cartItems.forEach(item => {

    const finalPrice = getDiscountedPrice(
        item.price,
        item.discount
    );


    console.log("Product:", item.name);

    console.log(
        "Original Price:",
        formatPrice(item.price)
    );

    console.log(
        "Discounted Price:",
        formatPrice(finalPrice)
    );

    console.log("-------------------");

});

// Display original and discounted prices
cartItems.forEach(item => {

    const discountedPrice = getDiscountedPrice(
        item.price,
        item.discount
    );


    console.log("Product:", item.name);

    console.log(
        "Original Price:",
        formatPrice(item.price)
    );

    console.log(
        "Discounted Price:",
        formatPrice(discountedPrice)
    );

    console.log("----------------------");

});
