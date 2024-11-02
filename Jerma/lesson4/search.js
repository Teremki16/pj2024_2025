let url = "https://pokeapi.co/api/v2/pokemon"
let state;
let lastLink = "https://pokeapi.co/api/v2/pokemon"

function getList(link){
    lastLink = link
    fetch(link).then(async function(res){
        state = await res.json()
        console.log(state)
        drawList()
    }).catch((err)=>console.log(err))

}
getList(url)

function drawList(){
    let list = document.querySelector(".results")
    list.innerHTML = ""
    state.results.forEach(el => {
        list.innerHTML += `<li><a onclick="drawPokemon('${el.url}')">${el.name}</a></li>`

        
    });
    list.innerHTML += `
      <li class="nav">
            <button onclick="getList('${state.previous}')">Prev</button>
            <button onclick="getList('${state.next}')">Next</button>
        </li>
    `
}

function drawPokemon(link){
    document.querySelector(".results").innerHTML = ""

    fetch(link).then(async (response) => {
        let data = await response.json()
        console.log(data)
        document.querySelector(".results").innerHTML = `
       <div class="pokemon">
       <button onclick="drawList('${lastLink}')">Go back >:(</button>
         <div class="id">id: #${data.id}</div>
    <h1>${data.name}</h1>
    <img src="${data.sprites.front_default}" alt="">
    <ul>
        ${data.types.map(t => "<li>" + t.type.name + "</li>").join("")}
    </ul>
        </div>

    
    `
    }).catch(err => {
        document.querySelector(".results").innerHTML = `
       <div class="pokemon">
       <h1>pokemon nor found</h1>
       </div>
`
    })
}