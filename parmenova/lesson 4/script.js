let url = "https://pokeapi.co/api/v2/pokemon/"

document.querySelector(".form button").addEventListener("click", ()=>{
    let query = document.querySelector(".form input").value
    document.querySelector(".form input").value = ""
    fetch(url + query.toLowerCase()).then(async (res)=>{
        let data = await res.json()
        console.log(data)
        document.querySelector(".wrapper").innerHTML = `
            <div class="wrapper"> 
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
})