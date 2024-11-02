let url = "https://pokeapi.co/api/v2/pokemon?limit=127"

let Pokemons = []
let promises = []

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
                    <i class="fa-regular fa-heart"></i> ${el.stats[0].base_stat}
                </div>
                <div class="el">
                    <i class="fa-solid fa-hand-fist"></i> ${el.stats[1].base_stat}
                </div>
                <div class="el">
                    <i class="fa-solid fa-shield-heart"></i> ${el.stats[2].base_stat}
                </div>
            </div>
        </div>
        `
    ).join("")
}
