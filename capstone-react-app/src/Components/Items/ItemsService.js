const PRODUCT_API_URL = 'http://127.0.0.1:8080/api/v1/product'

export async function getAllItems() {
    return fetch(PRODUCT_API_URL).then(res => {
        return res.json()
    }).then(data => {
        return data;
    })
};

export async function getItem(id) {
  return fetch(PRODUCT_API_URL + id)
  .then(res => {
      return res.json();
  })
  .then(data => {
      return data;
  });
}

export async function addItem(item) {
    return fetch(PRODUCT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: item.itemName,
            quantity_in_stock: item.quantityInStock,
            unit_price: item.price,
            productSize: item.size,
            gender: item.gender,
            product_img_url: item.imageUrl,
            description: item.description,
            product_type: item.type,
        })
    }).then((res) => {
        return res.json();
    });
}

export async function getItemsByGenderAndType(gender, type) {
    
  return fetch(PRODUCT_API_URL + "/search?gender="+ gender + "&type=" + type)
  .then(res => {
      return res.json();
      
  })
  .then(data => {
      return filterItemsForDisplay(data);
  })
  .catch(err => {
      console.log("No database connection available.");
      console.log(err);
  });
}

function filterItemsForDisplay(items) {
    var currentItem;
    var itemsArray = [];

    items.forEach(element => {
        if (element.name !== currentItem) {
            currentItem = element.name;
            itemsArray.push(element);
        } else {

        }
    });
    return itemsArray;    
}
