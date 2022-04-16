import { currentLoggedInCustomer } from "../Customer/CustomerService";
import { getShoppingCartItems } from "../ShoppingCart/CartService";

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
    
    console.log(order);
}

