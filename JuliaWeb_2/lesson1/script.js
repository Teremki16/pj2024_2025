let form=document.querySelector("form")
let orderList=[]
localStorage.setItem("orderList",JSON.stringify(orderList))
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let dish=e.target["dish"].value
    let time=e.target["time"].value
    let address=e.target["address"].value
    let telephone=e.target["telephone"].value
    console.log(dish,time,address,telephone)

    let order={
        dish, time, address, telephone
    }
    orderList.push(order)
    e.target.reset()
    drawOrder()
})

function drawOrder(){
    let table=document.querySelector("table")
    table.innerHTML=""
    table.innerHTML+=`
        <tr>
            <th>Dish</th>
            <th>Time</th>
            <th>Address</th>
            <th>Telephone</th>
            <th>Link</th>
        </tr>`
        orderList.forEach((el)=>{
            table.innerHTML+=`
        <tr>
            <td>${el.dish}</td>
            <td>${el.time}</td>
            <td>${el.address}</td>
            <td>${el.telephone}</td>
            <td><a href="data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(el))}" download="order.json">Dowload</a></td>
        </tr>`
        })
}

let a=`
<order>
    <dish>tea</dish>
    <time>12:12</time>
    <address>Golosivska 45</address>
    <telephone>8 800 5353535</telephone>
</order>`

let parser=new DOMParser()
let data=parser.parseFromString(a,"application/xml")
console.log(data)
console.log({
    dish: data.getElementsByTagName("dish")[0].childNodes[0].nodeValue,
    time: data.getElementsByTagName("time")[0].childNodes[0].nodeValue,
    address: data.getElementsByTagName("address")[0].childNodes[0].nodeValue,
    telephone: data.getElementsByTagName("telephone")[0].childNodes[0].nodeValue
})