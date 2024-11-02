let url = "https://pokeapi.co/api/v2/pokemon"
let state;

function getList(link){
    fetch(link).then(async function (res) {
        state = await res.json()
        console.log(state)
        drawList()
    }).catch((err) => console.error(err))
}
getList(url)


function drawList() {
    let list = document.querySelector(".results")
    list.innerHTML = ""
    state.results.forEach(el => {
        list.innerHTML += `<li><a href="${el.url}" onclick="event.preventDefault(); drawPokemon('${el.name}')">${el.name}</a></li>`
    })
    list.innerHTML +=`
     <li class="nav">
         <button onclick="getList('${state.previous}')">Prev</button>
         <button onclick="getList('${state.next}')">Next</button>
    </li>
    `
}

function drawPokemon(question){
    document.getElementById("search").value = ""
    console.log(question)

    fetch(url + "/" + question)
        .then(async (res) => {
            let data = await res.json()
            console.log(data)
            document.querySelector(".results").innerHTML = `
            <div class="results">
            <div class="pokemon">
                <div class="id">id: #${data.id}</div>
                <h1>${data.name}</h1>
                <img src="${data.sprites.front_default}" alt="">
                <ul>
                    ${data.types.map(t => `<li>${t.type.name}</li>`).join("")}
                </ul>
                <p>Height: ${data.height}</p>
                <p>Weight: ${data.weight}</p>
            </div>
        </div>

            `
        })
        .catch((err) => {
            console.log(err)
            document.querySelector(".results").innerHTML = `
            <div class="results">
                <h1>There is no such pokemon</h1>
            </div>
            `
        })

}
