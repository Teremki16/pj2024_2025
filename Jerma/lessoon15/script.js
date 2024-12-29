fetch("https://www.omdbapi.com/?s=christmas&apikey=b0b94363")
    .then(async (res) => {
        let data = await res.json()
        console.log(data)
        data.Search.forEach(ee => {
            document.querySelector(".list").innerHTML += `
        <div class="mama">
        <div class="title">
            <h2>${ee.Title}</h2>
            </div>
            <div class="img">
            <img src="${ee.Poster}">
            </div>
            <div class="types">
            <p>Type: ${ee.Type}</p>
            </div>
            <div class="maa">
            <p>Year: ${ee.Year}</p>
            </div>
        </div>
      `

        })



    })