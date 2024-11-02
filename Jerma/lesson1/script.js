let form = document.querySelector("form")
let orderList = []
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let dish = e.target["dish"].value
    let time = e.target["time"].value
    let address = e.target["address"].value
    let telephone = e.target["telephone"].value

    let order = {
        dish, time, address, telephone
    }
    orderList.push(order)
    e.target.reset();
    drawOrder()

})

function drawOrder() {
    let table = document.querySelector("table")
    table.innerHTML = ""
    table.innerHTML += `<tr>
            <th>Dishes</th>
            <th>Time</th>
            <th>Adress</th>
            <th>Telephone</th>
            <th>Link</th>
        </tr>`
    orderList.forEach((el) => {
        table.innerHTML += `
            
              <tr>
            <td>${el.dish}</td>
            <td>${el.time}<</td>
            <td>${el.address}<</td>
            <td>${el.telephone}<</td>
            <td>       <td><a href="data:text/plan;carset=utf-8,${encodeURIComponent(JSON.stringify(el))}" download="order.json">Download</a></td></td>
        </tr>`
    })
}


let a = `<order>
<div>Rose</div>
<time>17:06</time>
<address>jerm 123<address>
<telephone>8 800 555 35 35<telephone>
<order>`

let parser = new DOMParser()
let data = parser.parseFromString(a, "application/xml")
console.log({
    dish: data.getElementryByTagName("dish")[0].childNodes[0].NodeValue,
    time: data.getElementryByTagName("time")[0].childNodes[0].NodeValue,
    address: data.getElementryByTagName("address")[0].childNodes[0].NodeValue,
    telephone: data.getElementryByTagName("telephone")[0].childNodes[0].NodeValue
})