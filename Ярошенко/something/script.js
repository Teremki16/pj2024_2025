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
       `
       document.querySelector("main").append(card)
    })
}
