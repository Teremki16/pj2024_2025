let url = "http://pokeapi.co/api/v2/pokemon?limit=127"

let pokemons = []
let Promises = []

fetch(url).then(async res=>{
    let data = await res.json()
    console.log(data)
    data.results.forEach(el => {
        let promis = new Promise((res, rej)=>{
            fetch(el.url)
            .then(async e => {
                if(e.status == 200){
                    res(await e.json())
                }else{
                    rej(e.status)
                }
            })
            .catch(err => rej(err))
        })
        Promises.push(promis)
    });
    Promise.all(Promises).then((result) => {
        pokemons = result;
        console.log(pokemons)
        drawList()
    });
});


function drawList(){
    let list = document.querySelector(".list")
    list.innerHTML = ""
    pokemons.forEach(pok=>{
        list.innerHTML += `
                <div class="pokemon">
            <div class="id">id: #${pok.id}</div>
            <h1>${pok.name}</h1>
            <img src="${pok.sprites.front_default}" alt="">
            <div class="bar">
                <div class="section">
                    <i class="fa-solid fa-heart"></i> ${pok.stats[0].base_stat}
                </div>
                <div class="section">
                    <i class="fa-solid fa-seedling"></i> ${pok.stats[1].base_stat}
                </div>
                <div class="section">
                    <i class="fa-solid fa-shield-halved"></i> ${pok.stats[2].base_stat}
                </div>
            </div>
        </div>
        `
    })
}
