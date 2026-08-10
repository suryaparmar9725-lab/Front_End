// Import named export from utils.js
import { generateOrderId } from "./utils.js";


// Generate and display new order ID
const newOrderId = generateOrderId();

console.log("New Order ID:", newOrderId);

import { formatPrice, getDiscountedPrice } from "./utils.js";


const productPrice = 199;
const discount = 10;


const finalPrice = getDiscountedPrice(
    productPrice,
    discount
);


console.log("Original Price:", formatPrice(productPrice));

console.log(
    "Discounted Price:",
    formatPrice(finalPrice)
);