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
    fetch(PRODUCT_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
