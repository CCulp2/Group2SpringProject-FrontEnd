const PRODUCT_API_URL = "http://127.0.0.1:8080/api/v1/product/";

export async function getAllItems() {
  return fetch(PRODUCT_API_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}

export async function getItem(id) {
  return fetch(PRODUCT_API_URL + id)
  .then((res => {
      return res.json();
  }))
  .then((data) => {
      return data;
  });
}

export async function addItem(item) {
    return fetch(PRODUCT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            product_name: item.itemName,
            product_type: item.type,
            quantity_in_stock: item.quantityInStock,
            unit_price: item.price,
            gender: item.gender,
            productSize: item.size,
            product_img_url: item.imageUrl
        })
    }).then((res) => {
        return res.json();
    });
}