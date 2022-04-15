export function addToShoppingCart(item) {
    item.cartId = generateCartID()
    if (localStorage.getItem('cart') === null) {
        cartSetUp();
        let currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        currentCart.push(item);
        localStorage.setItem('cart', JSON.stringify(currentCart));
    } else {
        let a = JSON.parse(localStorage.getItem('cart')) || [];
        a.push(item);
        localStorage.setItem('cart', JSON.stringify(a));
    }    
}

export function removeFromShoppingCart(cartIdToRemove) {
        let currentCart = JSON.parse(localStorage.getItem('cart'));
        let products = currentCart.filter(incartItem => incartItem.cartId !== cartIdToRemove);
        localStorage.setItem('cart', JSON.stringify(products));
}

export function getShoppingCartItems() {
    let a = JSON.parse(localStorage.getItem('cart')) || [];
    return a;
}

export function priceOfAllCartItems() {
    var sum = 0;    
    let cart = getShoppingCartItems();
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].unit_price;
    }
    return sum;
}

export function calculateTax(price) {
    let sum =  price * 0.07;
    return sum;
}

export function pricePlusTax(price, tax) {
    let sum = price + tax;
    return sum;
}

export function formatTotals(price) {
    return formatter.format(price);
}

export function formatTax(tax) {
    return formatter.format(tax);
}

export function cartSetUp() {
    // let a = []
    // a.push(JSON.parse(localStorage.getItem('cart')));
    localStorage.setItem('cart', JSON.stringify([]));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateCartID() {
    let id = getRandomInt(300000);
    return id;
}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
