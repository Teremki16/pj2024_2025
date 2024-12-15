var settings = {
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "675da0817aaf617de0b53c2b",
        "cache-control": "no-cache"
    }
} // alth shift f

let products = []

let main = document.querySelector("main")

fetch("https://basement-42c4.restdb.io/rest/products", settings)
.then(d => d.json())
    .then(d => {
        console.log(d)
        products = d
        draw()
    })

    function draw() {
        main.innerHTML = ""
        products.forEach(({meatgrinder, desc, photo_url, price, _id})=>{
            let card = document.createElement("div")
            card.className = "product"
            card.innerHTML = `
              <p>${name}</p>
              <p>${desc}</p>
              <img src= "${photo_url}">
              <p>${price}$</p>
            `
            main.appendChild(card)


        })

    }