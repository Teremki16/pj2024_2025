var settings = {
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "675ed4b1f01ba31d40c106d8",
        "cache-control": "no-cache"
    }
}
let url = "https://dididi-ceb2.restdb.io/rest/products"

let products = []

fetch(url, settings).then(res=>res.json()).then((data)=>{
    console.log(data)
    products = data
    draw()
})

function draw (){
    products.forEach(p=>{
        let cart = document.createElement("a")
        cart.classList.add("product")
        cart.innerHTML = `
        <img src="${p.photo_url}">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p>${p.prise}$</p>
        `
        document.querySelector("main").append(cart)
    })
}