const PRODUCT_API_URL = 'http://127.0.0.1:8080/api/v1/product'

export async function getAllItems() {
    fetch(PRODUCT_API_URL).then(res => {
        return res.json()
    }).then(data => {
        return data;
    })
};