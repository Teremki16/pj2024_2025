let url = "https://pokeapi.co/api/v2/pokemon"
let data;
let limit = 10;
let list = document.querySelector(".list")
let LastLink = ""

function drawList(link){
    LastLink = link
    fetch(link).then(async (res)=>{
        data = await res.json();
        console.log(data)
        list.innerHTML = ""
        data.results.forEach(el => {
            list.innerHTML +=`<button onclick= "drawPokemon('${el.url}')">${el.name}</button>`
        });
        list.innerHTML += `
            <nav>
        <button onclick = "drawList('${data.previous}')" ${data.previous == null? "disabled" : ""}>&lt;Prev</button>
        <button onclick = "drawList('${data.next}')" ${data.enxt ==null ? "disabled" : ""}>Next&gt;</button>
    </nav>
        `
    })
}

drawList(url + "?limit=" + limit)

function drawPokemon(link){
 list.innerHTML = ""
    fetch(link).then(async (res)=>{
        let data = await res.json()
        console.log(data)
           list.innerHTML = `
            <div class="pokemon"> 
            <button onclick= "drawList('${LastLink}')">BACK</button>
        <div class="покемон"></div>
        <div class="iid"> id: ${data.id}</div>
        <h1>${data.name}</h1>
        <img src="${data.sprites.front_default}" alt="">
        <ul>
        ${data.types.map(i=>`<li>${i.type.name}</li>`).join}
        </ul>
    </div>
        `
    })
}

