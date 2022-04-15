import { API_URL_BASE } from "../APIUrlBase"

const CUSTOMER_API = API_URL_BASE + '/customer/'

export async function getCustomerById(id) {
    return fetch(CUSTOMER_API + id).then((res) => {
        return res.json();
    }).then((data) => {
        return data.json();
    })
}

export function setLoggedInCustomer(id) {
    if (customerIsLoggedIn()) {
        localStorage.removeItem('customerId');
    }
    localStorage.setItem('customerId', JSON.stringify(id));
}

export function customerIsLoggedIn() {
    return (!localStorage.getItem('customerId') === null);
}

export function currentLoggedInCustomer() {
    if (customerIsLoggedIn) {
        return localStorage.getItem('customerId');
    } else {
        return null;
    }
}