import { currentLoggedInCustomer } from "../Customer/CustomerService";
import { getShoppingCartItems } from "../ShoppingCart/CartService";
import { API_URL_BASE } from '../../Components/APIUrlBase'

const ORDERS_API = API_URL_BASE + "/orders"

function removeCartIdBeforeOrder(items) {
    let itemsForOrder = [...items]
    itemsForOrder.map(item => {
        return delete item.cartId;
    });
    return itemsForOrder;
}

export function prepareOrder(orders) {
    let currentCustomer = currentLoggedInCustomer();
    let cart = getShoppingCartItems();
    removeCartIdBeforeOrder(cart);
    
    let order = {
        customerId: currentCustomer[0].id,
        productsToAdd: [...cart]
    }
    
    sendOrder(order);
}

async function sendOrder(order) {
    const connection = await fetch(ORDERS_API, {
        method: 'post',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(order)
    });

    const response = await connection.json();

    console.log(response);
}
