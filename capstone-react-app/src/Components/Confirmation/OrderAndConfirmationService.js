import { currentLoggedInCustomer } from "../Customer/CustomerService";
import { getShoppingCartItems, cartSetUp } from "../ShoppingCart/CartService";
import { API_URL_BASE } from '../../Components/APIUrlBase'

const ORDERS_API = API_URL_BASE + "/orders"

export function submitOrder(cartOrder) {
    let orderToSend = prepareOrder(cartOrder);
    let result = sendOrder(orderToSend);

    if (result === 0) {

    } else {
        return result;
    }
}

function removeCartIdBeforeOrder(items) {
    let itemsForOrder = [...items]
    itemsForOrder.map(item => {
        return delete item.cartId;
    });
    return itemsForOrder;
}

function prepareOrder() {
    let currentCustomer = currentLoggedInCustomer();
    let cart = getShoppingCartItems();
    removeCartIdBeforeOrder(cart);
    
    let order = {
        customerId: currentCustomer[0].id,
        productsToAdd: [...cart]
    }

    return order;
}

async function sendOrder(order) {
    const connection = await fetch(ORDERS_API, {
        method: 'post',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(order)
    });

    const response = await connection.json();
    if (response.orderId !== null) {
        cartSetUp();
        return response;
    } else {
        console.log("Error.");
        return 0;
    }

}
