let url = "https://raw.githubusercontent.com/MamboDancer/WebMiddleCyberween/main/task.json"



fetch(url).then(async result => {
    let data = await result.json()
    console.log(data)
    document.querySelector(".title").innerHTML = data.event
    data.guests.forEach((p) => {
        document.querySelector(".guests").innerHTML += `
            <h1> ${p.name}</h1>
            <p>${p.about}</p>
            <img src="${p.photo_url}">
            `
    })


})