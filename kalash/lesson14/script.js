var settings = {
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "675da0b97aaf6180d1b53c2e",
        "cache-control": "no-cache"
    }
}

let products = []
let main = document.querySelector("main")

fetch("https://market-9649.restdb.io/rest/products", settings)
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
        <img src="${photo_url}"
        <p>${price}$</p>
        `
        main.appendChild(card)
    })
}