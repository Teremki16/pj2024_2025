let url = "https://pokeapi.co/api/v2/pokemon?limit=227"

let pokemons = []
let Promises = []
let Data
let order = 1

fetch(url).then(async (res) => {
    let data = await res.json()
    console.log(data)
    data.results.forEach((el) => {
        let promis = new Promise((res, rej) => {
            fetch(el.url).then(async e => {
                if (e.status == 200) {
                    res(await e.json())
                } else {
                    rej(e.status)
                }
                let info = await e.json()
                pokemons.push(info)
            }).catch(err => rej(err))
        })
        Promises.push(promis)
    })
    Promise.all(Promises).then((result) => {
        pokemons = result
        console.log(pokemons)
        drawList()
    })
})

function drawList() {
    let list = document.querySelector(".list")
    list.innerHTML = ""
    pokemons.forEach(pok => {
        list.innerHTML += `
        <div class="pokemon">
            <div class="id">id: #${pok.id}</div>
            <h1>${pok.name}</h1>
            <img src="${pok.sprites.front_default}" alt="">
            <ul>
                ${pok.types.map(t => `<li>${t.type.name}</li>`).join("")}
            </ul>
        </div>
        `

    })
}


document.querySelector("#sort-form").addEventListener("change", SF(e))
    let SF =(e) => {
    let Sort = e.target.value
    if (Sort == "id") {
        pokemons.sort(function (a, b) {
            if (a.id > b.id) {
                return order
            } else if (a.id < b.id) {
                return -order
            } else {
                return 0
            }
        })
    } else if (Sort == "name") {
        pokemons.sort(function (a, b) {
            if (a.name > b.name) {
                return order
            } else if (a.name < b.name) {
                return -order
            } else {
                return 0
            }
        })
    }
    drawList()
}

document.querySelector("#war-form").addEventListener("change", WR(e))
    let WR = (e) => {
    let Sort = e.target.value
    if (Sort == "hp") {
        pokemons.sort(function (a, b) {
            return b.stats[0].base_stat - a.stats[0].base_stat;
        })
    } else if (Sort == "attack") {
        pokemons.sort(function (a, b) {
            return b.stats[1].base_stat - a.stats[1].base_stat;
        })
    }   else if (Sort == "defense") {
        pokemons.sort(function (a, b) {
            return b.stats[2].base_stat - a.stats[2].base_stat;
        })
    }
    drawList()
}

document.querySelector("#dir-form").addEventListener("change", function(e){
    order = e.target.value == "s" ? 1 : -1
})


document.querySelector("#dir-form").addEventListener("change", (e) => {
    order = e.target.value == "s" ? 1 : -1
    SF()
    WR()
})