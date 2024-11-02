let url = "https://pokeapi.co/api/v2/pokemon?limit=127"


let pokemons = []

let Promises = []

let Data;
let o = 1;

fetch(url).then(async res=>{
    let data = await res.json()
    console.log(data)
    data.results.forEach(el=>{
        let promis = new Promise((res, rej)=>{ 
        fetch(el.url).then(async e=> {
            if(e.status == 200){
                res(await e.json())
            }else{
                rej(e.status)
            }
            })
            .catch((err)=> rej(err));
        })
        Promises.push(promis)
    });
    Promise.all(Promises).then((result) => {
        pokemons = result;
        console.log(pokemons)
        drawList()
    })
})


function drawList(){
    let list = document.querySelector(".list")
    list.innerHTML = ""
    pokemons.forEach(pok=>{
        list.innerHTML +=`
        <div class="pokemon">
            <div class="id">id:${pok.id}</div>
            <h1>${pok.name}</h1>
            <img src="${pok.sprites.front_default}" alt="">
            <div class="bar">
                <div class="section">
                    <i class="fa-solid fa-heart"></i> ${pok.stats[0].base_stat}
                </div>
                <div class="section">
                    <i class="fa-solid fa-shield-halved"></i> ${pok.stats[1].base_stat}
                </div>
                <div class="section">
                    <i class="fa-brands fa-wordpress"></i> ${pok.stats[2].base_stat}
                </div>
            </div>
        </div>
        `
    })
}



let sortform = document.querySelector("#sort-form")
sortform.addEventListener("change", SF)
function SF(){
    let order = sortform["order"].value
    o = order == 'fs'? 1 : -1

    let value = sortform["sort"].value
    console.log(value)
    switch(value){
        case"id":
              pokemons.sort((a, b)=>{
                if(a.id > b.id){
                    return o
                }else if(a.id < b.id){
                    return -o
                }else{
                    return 0
                }
              })
              break;
    
        case"name":
              pokemons.sort((a, b)=>{
                if(a.name > b.name){
                    return o
                }else if(a.name < b.name){
                    return -o
                }else{
                    return 0
                }
              })
              break;
        case"hp":
              pokemons.sort((a, b)=>{
                if(a.stats[0].base_stat > b.stats[0].base_stat){
                    return o
                }else if(a.stats[0].base_stat < b.stats[0].base_stat){
                    return -o
                }else{
                    return 0
                }
              })
              break;
        case"attack":
              pokemons.sort((a, b)=>{
                if(a.stats[1].base_stat > b.stats[1].base_stat){
                    return o
                }else if(a.stats[1].base_stat < b.stats[1].base_stat){
                    return -o
                }else{
                    return 0
                }
              })
              break;
        case"defense":
              pokemons.sort((a, b)=>{
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
    
    drawList()
}

document.querySelector("button").addEventListener("click", (e)=>{
    e.preventDefault()
    let search = sortform["search"].value
    pokemons = pokemons.filter( p => p.name.includes(search) != -1)
    drawList()
})