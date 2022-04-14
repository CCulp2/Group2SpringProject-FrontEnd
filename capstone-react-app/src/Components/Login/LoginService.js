import { API_URL_BASE } from "../APIUrlBase"
import { storeJWT } from "./JWTService";


const LOGIN_BASE = API_URL_BASE + '/customer/login'
const abort = new AbortController();

export async function LoginSubmit(username, password) {
    return fetch(LOGIN_BASE + "?username=" + username + "&password=" + password, {
        method: "post",
        headers: { 'Content-Type': 'application/json'},
        body: {
        "username": username,
        "password": password
    }
    }).then(res => //storeJWT(res));
    console.log(res.json()));
    
}