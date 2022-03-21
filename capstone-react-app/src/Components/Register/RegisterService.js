
export async function addCustomer(values) {
    return fetch("http://localhost:8080/api/v1/customer", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: values.username,
      password: values.password,
      firstName: values.first_name,
      lastName: values.last_name,
      address: values.address,
      city: values.city,
      state: values.state,
    })
    }).then((res) => {
        return res.json();
    })
}