import { API_URL_BASE } from "../APIUrlBase"

const CUSTOMER_API = API_URL_BASE + '/customer/'

export async function getCustomerById(id) {
    return fetch(CUSTOMER_API + id).then((res) => {
        return res.json();
    }).then((data) => {
        return data.json();
    })
}