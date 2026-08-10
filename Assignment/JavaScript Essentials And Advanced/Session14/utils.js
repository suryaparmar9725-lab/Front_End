// Function to generate random 8-character order ID
export function generateOrderId() {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let orderId = "";

    for (let i = 0; i < 8; i++) {

        orderId += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );

    }

    return orderId;
}
// Function to format price in Indian currency format
export function formatPrice(price) {

    return `₹${price.toFixed(2)}`;

}

// Format price function
export function formatPrice(price) {
    return `₹${price.toFixed(2)}`;
}

// Named export
export function formatPrice(price) {

    return `₹${price.toFixed(2)}`;

}


// Default export
export default function getDiscountedPrice(price, discount) {

    return price - (price * discount / 100);

}

// Calculate discounted price function
export function getDiscountedPrice(price, discount) {

    return price - (price * discount / 100);

}

// Function to calculate discounted price
export function getDiscountedPrice(price, discount) {

    const discountedAmount = price - (price * discount / 100);

    return discountedAmount;

}