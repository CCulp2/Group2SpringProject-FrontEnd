function removeCardIdBeforeOrder(items) {
    let itemsForOrder = [...items]
    itemsForOrder.map(item => {
        return delete item.cartId;
    });
    return itemsForOrder;
}

