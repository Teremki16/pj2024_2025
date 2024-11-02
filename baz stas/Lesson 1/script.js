let form = document.querySelector("form")

let orderLIST = [];
form.addEventListener("submit",(event)=>{
    event.preventDefault( )
        let order = {
        dish: event.target["dish"]. value,
        time: event.target["time"]. value,
        address: event.target["address"].value,
        tel:event.target ["telephone"]. value,
    }
    orderLIST.push( order)
    event.target.reset()
    drawTable()
})

function drawTable(){
    let table = document.querySelector("table")
    table.innerHTML =`
         <tr>
            <th>Dish</th>
            <th>Time</th>
            <th>Address</th>
            <th>telephone</th>
            <th>Link</th>
        </tr>`

    orderLIST.forEach((el)=>{
        table.innerHTML +=`      <tr>
       
        <td>${el.dish}</td>
        <td>${el.time}</td>
        <td>${el.address}</td>
        <td>${el.telephone}</td>
        <td><a href="data:text/plain;charset=UTF-8,${encodeURIComponent(JSON.stringify(el))}" download="order.json">Download</a></td>
      
    </tr>`
        


    })
}


let xm10rder = `
<order>
    <dish>рос немовля</dish>
    <time> 9.11  </time>
    <address>drftyui </address>
    <tel>0914488y775 </tel>
</order>`


let data = new DOMParser().parseFromString(xm10rder, "application/xml")
console.log(data)
let newDate = {
  dish: data.getElementsByTagName ("dish")[0].innerHTML,
  time: data.getElementsByTagName ("time")[0].innerHTML,
  address: data.getElementsByTagName ("address")[0].innerHTML,
  tel: data.getElementsByTagName ("tel")[0].innerHTML,
}
console.log(newDate)

let xmlText = new XMLSerializer().serializeToString(data)
console.log(xmlText);