import { API_URL_BASE } from "../APIUrlBase";

const PRODUCT_API = API_URL_BASE + "/product/";

export async function getAllItems() {
  return fetch(PRODUCT_API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}

export async function getItem(id) {
  return fetch(PRODUCT_API + id)
  .then((res => {
      return res.json();
  }))
  .then((data) => {
      return data;
  });
}

export async function addItem(item) {
    return fetch(PRODUCT_API, {
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