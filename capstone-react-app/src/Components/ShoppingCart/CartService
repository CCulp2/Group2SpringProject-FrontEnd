export function addToShoppingCart(item) {
    if (!cartExists()) {
        localStorage.setItem("cart", JSON.stringify(item));
    } else {
        let currentCart = JSON.parse(localStorage.getItem("cart"));
        currentCart.push(item);
        localStorage.setItem('cart', JSON.stringify(item));
    }    
}

export function removeFromShoppingCart(item) {
    if (cartExists) {
        let currentCart = JSON.parse(localStorage.getItem('cart'));
        let products = currentCart.filter(incartItem => incartItem.id !== item.id );
        localStorage.setItem('cart', JSON.stringify(products));
    }
}

export function getShoppingCartJSON() {
    if (cartExists()) {
        return JSON.parse(localStorage.getItem('cart'));
    }
}

export function cartExists() {
    if (localStorage.getItem("cart") === null) {
        return false;
    } else {
        return true;
    }    
}