// Add item to wishlist
export function addToWishlist(wishlist, item) {

    wishlist.push(item);

    return wishlist;

}


// Remove item from wishlist
export function removeFromWishlist(wishlist, itemName) {

    return wishlist.filter(
        item => item.name !== itemName
    );

}


// List all wishlist items
export function listWishlist(wishlist) {

    if (wishlist.length === 0) {

        console.log("Wishlist is empty");

        return;

    }


    wishlist.forEach(item => {

        console.log(
            `${item.name} - ₹${item.price}`
        );

    });

}