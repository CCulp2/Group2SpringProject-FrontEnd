export function addToShoppingCart(item) {
    if (localStorage.getItem('cart') === null) {
        cartSetUp();
        let currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        currentCart.push(item);
        localStorage.setItem('cart', JSON.stringify(currentCart));
    } else {
        let a = [];
        a = JSON.parse(localStorage.getItem('cart')) || [];
        a.push(item);
        localStorage.setItem('cart', JSON.stringify(a));
    }    
}

export function removeFromShoppingCart(item) {
        let currentCart = JSON.parse(localStorage.getItem('cart'));
        let products = currentCart.filter(incartItem => incartItem.id !== item.id );
        localStorage.setItem('cart', JSON.stringify(products));
}

export function getShoppingCartItems() {
    let a = [];
    a = JSON.parse(localStorage.getItem('cart')) || [];
    return a;
}

export function priceOfAllCartItems() {
    var sum = 0;
    let cart = getShoppingCartItems();
    for(var item in cart) {
        sum += item.unit_price;
    }
    return sum;
}

export function calculateTax(totalPrice) {
    return priceOfAllCartItems() * 0.07;
}

export function cartSetUp() {
    var a = [];
    a.push(JSON.parse(localStorage.getItem('cart')));
    localStorage.setItem('cart', JSON.stringify(a));
}