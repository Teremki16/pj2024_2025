let url = "https://pokeapi.co/api/v2/pokemon"
let limit = 20
let data;
function drawList(link){
    fetch(link).then(async result =>{
        data = await result.json()
        console.log(data)
        let res = data.results.map(el=>`<li><button onclick="dp('${el.url}')">${el.name}</button></li>`)
        document.querySelector("ul").innerHTML = res.join("")
        document.querySelector("ul").innerHTML += `
        <button onclick="drawList('${data.previous}')">Previous</button>
        <button onclick="drawList('${data.next}')">Next</button>
        `

    })
}

drawList(url + "?limit=" + limit)

function dp(link){
    fetch(link).then(async result=>{
        let info = await result.json()
        document.querySelector("ul").innerHTML = `
        <h2> ID #${info.id}</h2>
        <h1>${info.name}</h1>
        <img src="${info.sprites.front_default}">
        `
    })
}