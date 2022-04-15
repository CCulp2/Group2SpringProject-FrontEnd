import { API_URL_BASE } from "../APIUrlBase";
import { setLoggedInCustomer } from "../Customer/CustomerService";

const LOGIN_BASE = API_URL_BASE + "/customer/login";
const abort = new AbortController();

export async function LoginSubmit(username, password) {
    const login = await fetch(LOGIN_BASE, {
        method: "post",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({username: username, password: password})
    });
    const result = await login.json();
    
    if (result.id !== null) {
        setLoggedInCustomer(result.id);
    }
}
