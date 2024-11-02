let form = document.querySelector("form")
let orderlist = []
form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    let dish = e.target["dish"].value
    let time = e.target["time"].value
    let address = e.target["address"].value
    let telephone = e.target["telephone"].value
    console.log(dish, time, address, telephone)


    let order = {
        dish, time, address, telephone
    }
    orderlist.push(order)
    e.target.reset ()
    drawOrder()
})

function drawOrder(){
    let table = document.querySelector("table")
    table.innerHTML = ""
    table.innerHTML +=`<tr>
            <th>Dish</th>
            <th>Time</th>
            <th>Address</th>
            <th>Telephone</th>
            <th>Link</th>
        </tr>`
        orderlist.forEach((el=>{
            table.innerHTML +=`
            <tr>
            <td>${el.dish}</td>
            <td>${el.time}</td>
            <td>${el.address}</td>
            <td>${el.telephone}</td>
            <td><a href="data:text/plain;charset=uft-8,${encodeURIComponent(JSON.stringify(el))}" download="order.json">download</a></td>
        </tr>
            `
        }))
}

let a=`
<order>
<dish>rose</dish>
<time>00:01</time>
<address>Vilyamsa 72</address>
<telephone>0939311662</telephone>
</order>
`

let parser = new DOMParser()
let data = parser.parseFromString(a, "text/xml")
console.log(data)
console.log({
    dish: data.getElementsByName("dish")[0].childNodes[0].nodeValue,
    time: data.getElementsByName("time")[0].childNodes[0].nodeValue,
    address: data.getElementsByName("address")[0].childNodes[0].nodeValue,
    telephone: data.getElementsByName("telephone")[0].childNodes[0].nodeValue,
})
