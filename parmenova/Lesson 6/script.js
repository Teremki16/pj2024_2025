let url = "https://pokeapi.co/api/v2/pokemon?limit=127"

let Pockemons = []
let promises = []

fetch(url).then(async result => {
    let data = await result.json()
    console.log(data)
    data.results.forEach((p) => {
        let prom = new Promise((reslove, reject)=> {
            fetch(p.url).then(async res => {
                if (res.status == 200) {
                    let info = await res.json()
                    reslove(info)
                } else {
                    reject(res.status)
                }

            }).catch((err) => reject(err))
        })
        promises.push(prom);
    })
    Promise.all(promises).then((result) => {
        Pockemons = result;
        console.log(Pockemons)

    })
})

function draw(){
    document.querySelector(".grid").innerHTML = Pockemons.map(el=> `
        <div class="pokemon">
            <div class="id">ID #3</div>
            <h1>Pikachu</h1>
            <img src="" alt="">
            <div class="bar">
                <div class="el">
                    <i class="fa-solid fa-heart" style="color: #ff709b;"></i>
                </div>
                <div class="el">
                    <i class="fa-solid fa-utensils"></i>
                </div>
                <div class="el">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
            </div>

        </div>
        `).join("")
}