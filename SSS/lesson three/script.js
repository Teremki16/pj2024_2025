let url = "https://pokeapi.co/api/v2/pokemon/"

document.getElementById("searchBtn").addEventListener("click", () => {
    let question = document.getElementById("search").value
    question = question.toLowerCase()
    document.getElementById("search").value = ""
    console.log(question)

    fetch(url + question)
        .then(async (res) => {
            let data = await res.json()
            console.log(data)
            document.querySelector(".wrapper").innerHTML = `
            <div class="wrapper">
            <div class="pokemon">
                <div class="id">id: #${data.id}</div>
                <h1>${data.name}</h1>
                <img src="${data.sprites.front_default}" alt="">
                <ul>
                    ${data.types.map(t => `<li>${t.type.name}</li>`).join("")}
                </ul>
            </div>
        </div>

            `
        })
        .catch((err) => {
            console.log(err)
            document.querySelector(".wrapper").innerHTML = `
            <div class="wrapper">
                <h1>There is no such pokemon</h1>
            </div>
            `
        })

})




