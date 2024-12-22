var settings = {
    method: "GET",
    headers: {
        "content-type": "application/json",
        "x-apikey": "675da07b7aaf61a1bfb53c2a",
        "cache-control": "no-cache",
    },
};

let products = []
let main = document.querySelector("main")

let cart = JSON.parse(localStorage.getItem("cart_items")) || []

fetch("https://sb179-b5ad.restdb.io/rest/products", settings)
    .then(d=>d.json())
    .then(d=>{
        console.log(d)
        products = d
        draw()
    })

function draw() {
    main.innerHTML = ""
    products.forEach(({name, desc, photo_url, price, _id})=>{
        let card = document.createElement("div")
        card.className = "product"
        card.innerHTML = `
        <p>${name}</p>
        <p>${desc}</p>
        <img src="${photo_url}">
        <p>${price}$</p>
        <button onclick="Add('${_id}')>Add to cart</button>
        `
        main.appendChild(card)
    })
}

function Add(id){
    let item = products.find(el=>el.id == id)
    cart.push(item)
    localStorage.setItem("cart_items", JSON.stringify(cart)) 
}

function drawCart(){
    let a = cart.map((el)=>`<li>${el.name} | ${el.price} $</li>`).join("")
    document.querySelector(".cartItems").innerHTML = a
}

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    let body = {
        cart: JSON.stringify(cart),
        address: e.target["address"].value,
        Telephone: e.target["Telephone"].value,
        FirstName: e.target["FirstName"].value,
    }
    e.reset()
})