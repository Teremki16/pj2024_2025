let url = "https://pokeapi.co/api/v2/pokemon?limit=127"

let Pokemons = [];
let promises = [];
let o = 1;
fetch(url).then(async result => {
    let data = await result.json()
    console.log(data)
    data.results.forEach((p) => {
        let prom = new Promise((reslove, reject) => {
            fetch(p.url).then(async res => {
                if (res.status == 200) {
                    let info = await res.json()
                    reslove(info)
                } else {
                    reject(res.status)
                }
            }).catch((err) => reject(err))
        })
        promises.push(prom)
    })
    Promise.all(promises).then(result => {
        Pokemons = result;
        console.log(Pokemons) 
        draw()
    })
}) 

function draw(){
    document.querySelector(".grid").innerHTML = Pokemons.map(el=>`
        <div class="pokemon">
            <div class="id">ID #${el.id}</div>
            <h1>${el.name}</h1>
            <img src="${el.sprites.front_default}" alt="">
            <div class="bar">
                <div class="el">
                    <i class="fa-solid fa-heart"></i> ${el.stats[0].base_stat}
                </div>
                <div class="el">
                    <i class="fa-solid fa-bolt"></i> ${el.stats[1].base_stat}
                </div>
                <div class="el">
                    <i class="fa-solid fa-shield"></i> ${el.stats[2].base_stat}
                </div>
            </div>
        </div>
        `).join("")
}

let sortform = document.querySelector("#sort-form")
sortform.addEventListener("change", SF)
function SF(){
    let order = sortform["order"].value
    o = order == 'fs'? 1 : -1

    let value = sortform["sort"].value
    console.log(value)
    switch(value){
        case "id":
            Pokemons.sort((a, b)=>{
                if(a.id > b.id){
                    return o
                }else if(a.id < b.id){
                    return -o
                }else{
                    return 0
                }
            })
            break;
        case "name":
            Pokemons.sort((a, b)=>{
                if(a.name > b.name){
                    return o
                }else if(a.name < b.name){
                    return -o
                }else{
                    return 0
                }
            })
            break;
        case "hp":
            Pokemons.sort((a, b)=>{
                if(a.stats[0].base_stat > b.stats[0].base_stat){
                    return o
                }else if(a.stats[0].base_stat < b.stats[0].base_stat){
                    return -o
                }else{
                    return 0
                }
            })
            break;
        case "attack":
            Pokemons.sort((a, b)=>{
                if(a.stats[1].base_stat > b.stats[1].base_stat){
                    return o
                }else if(a.stats[1].base_stat < b.stats[1].base_stat){
                    return -o
                }else{
                    return 0
                }
            })
            break;
        case "defense":
            Pokemons.sort((a, b)=>{
                if(a.stats[2].base_stat > b.stats[2].base_stat){
                    return o
                }else if(a.stats[2].base_stat < b.stats[2].base_stat){
                    return -o
                }else{
                    return 0
                }
            })
            break;
    }
    
    draw();
}

document.querySelector("button").addEventListener("click", (e)=>{
    e.preventDefault()
    let search = sortform["search"].value
    Pokemons = Pokemons.filter((p) => p.name.includes(search) != -1)
    draw();
})