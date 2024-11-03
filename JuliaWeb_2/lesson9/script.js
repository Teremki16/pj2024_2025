let url = "https://raw.githubusercontent.com/MamboDancer/WebMiddleCyberween/main/task.json"

fetch(url).then(async (res) => {
    let data = await res.json()
    console.log(data)
    document.querySelector("header").innerHTML = data.event
    data.guests.forEach(function (el) {
        document.querySelector(".syte").innerHTML += `
        <div class="guest">    
            <h1>${el.name}</h1>
            <h3>${el.about}</h2>
            <img src="${el.photo_url}" alt="">
        </div>
     `
    })
}).catch(err => {
    document.querySelector(".syte").innerHTML = `
    <div class="guests">
        <h1>problems with syte</h1>
    </div>
    `
})
