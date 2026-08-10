// Add item to cart
export function addToCart(cart, item) {

    cart.push(item);

    return cart;

}


// Remove item from cart
export function removeFromCart(cart, itemName) {

    return cart.filter(item => item.name !== itemName);

}


// Calculate total cart price
export function calculateTotal(cart) {

    return cart.reduce(
        (total, item) => total + item.price,
        0
    );

}