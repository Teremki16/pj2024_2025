let url = "https://pokeapi.co/api/v2/pokemon/ditto"

document.querySelector(".form input").addEventListener("click", ()=>{
    let query = document.querySelector(".form input").value
    document.querySelector(".form input").value = ""
    fetch(url + query.toLowerCase()).then(async (res)=>{
        let data = await res.json()
        console.log(data)
        document.querySelector(".wrapper").innerHTML = `
        <div class="pokemon">
            <div class="id">id: ${data.id}</div>
            <h1>${data.name}</h1>
            <img src="${data.sprites.front_default}" alt="">
            <ul>
                <li>energy</li>
            </ul>
        </div>
        `
    })
})