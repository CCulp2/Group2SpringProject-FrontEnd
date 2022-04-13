export default function AuthHeader() {
    const customer = JSON.parse(localStorage.getItem('customer'));
    if (customer && customer.accessToken) {
        return { Authorization: 'Bearer' + customer.accessToken};
    } else {
        console.log("User not logged in.");
    }
}