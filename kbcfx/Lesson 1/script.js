let form = document.querySelector("form");

let orderList = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let order = {
        dish: e.target["dish"].value,
        time: e.target["time"].value,
        address: e.target["address"].value,
        tel: e.target["telephone"].value
    }
    orderList.push(order);
    event.target.reset();
    drawTable();
})

function drawTable() {
    let table = document.querySelector("table");
    table.innerHTML = `
        <tr>
            <th>Dish</th>
            <th>Time</th>
            <th>Adderess</th>
            <th>Telephone</th>
            <th>Link</th>
        </tr>
    `
    orderList.forEach((el)=>{
        table.innerHTML += `
        <tr>
            <td>${el.dish}</td>
            <td>${el.time}</td>
            <td>${el.address}</td>
            <td>${el.tel}</td>
            <td><a href="data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(el))}" download="order.json">Download</a></td>
        </tr>
        `
    })
}



let xmlOrder =`
<Order>
    <dish>fish</dish>
    <time>12:00</time>
    <address>123 Main St</address>
    <telephone>123-456-7890</telephone>
</Order>
`

let data = new DOMParser().parseFromString(xmlOrder, "text/xml")
console.log(data)

let newData = {
    dish: data.getElementsByTagName("dish")[0].textContent,
    time: data.getElementsByTagName("time")[0].textContent,
    address: data.getElementsByTagName("address")[0].textContent,
    tel: data.getElementsByTagName("telephone")[0].textContent
}
console.log(newData)

let xmlText = new XMLSerializer().serializeToString(data)
console.log(xmlText)