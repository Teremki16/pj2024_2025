let form = document.querySelector("form")

let orderList = []

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let order = {
        dish: event.target["dish"].value,
        time: event.target["time"].value,
        address: event.target["address"].value,
        tel: event.target["telephone"].value,
    }
    orderList.push(order)
    event.target.reset()
    drawTable()
})

function drawTable(){
    let table = document.querySelector("table")
    table.innerHTML = `
        <tr>
            <th>Dish</th>
            <th>Time</th>
            <th>Address</th>
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

let xmlOrder = `
<order>
    <dish>Fish</dish>
    <time>12:00</time>
    <address>Vilyamsa 72</address>
    <tel>7 456 287 21 23</tel>
</order>
`

let data = new DOMParser().parseFromString(xmlOrder, "application/xml")
console.log(data)
let newData = {
    dish: data.getElementsByTagName("dish")[0].innerHTML,
    time: data.getElementsByTagName("time")[0].innerHTML,
    address: data.getElementsByTagName("address")[0].innerHTML,
    tel: data.getElementsByTagName("tel")[0].innerHTML,
}
console.log(newData)

let xmlText = new XMLSerializer().serializeToString(data)
console.log(xmlText)