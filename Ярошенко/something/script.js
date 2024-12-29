var settings = {
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "675ed49ff01ba3afc6c106d3",
        "cache-control": "no-cache"
    },
};


let url = "https://nd141-1b38.restdb.io/rest/products"

let products = []

fetch(url, settings).then(res=>res.json()).then((data)=>{
    console.log(data)
    products = data
    draw()
})


function draw(){
    products.forEach(p=>{
       let card = document.createElement("a")
       card.classList.add("product")
       card.innerHTML = `
            <img src= "${p.photo_url}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <p>${p.price}</p>
            <button onclick="add('${p._id}')"> Add to cart<button/>
       `
       document.querySelector("main").append(card)
    })
}


let cart = []

function add(id){
    let product = products.find(el=>el._id == id)
    cart.push(product)
    console.log(cart)
    cartDraw()
}

function cartDraw(){
    document.querySelector(".cart ul").innerHTML = cart.map(el=>`<li>${el.name},${el.price}$<li/>`).join("")
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
    let body = {
        name: event.target["name"].value,
        phone_number: event.target["name"].value,
        products: JSON.stringify(cart)
    
    }
    var settings = {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "675ed49ff01ba3afc6c106d3",
            "cache-control": "no-cache"
        },
        body: JSON.stringify(body)
    };


    let url = "https://nd141-1b38.restdb.io/rest/orders"

    let products = []

    fetch(url, settings).then(res => res.json()).then((data) => {
        console.log(data)
        event.target.reset()
        cart = []
        cartDraw()
    })
})