import { API_URL_BASE } from "../APIUrlBase"

const LOGIN_BASE = API_URL_BASE + '/login'
const abort = new AbortController();

export async function Login(username, password) {
    return fetch(LOGIN_BASE, {
        method: "post",
        headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        username: username,
        password: password
    })
    }).then(res => res.json)
    
}