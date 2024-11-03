let url = "https://raw.githubusercontent.com/MamboDancer/WebMiddleCyberween/main/task.json"

let data;
fetch(url)
    .then(async (res) => {
        let data = await res.json()
        console.log(data)
        document.querySelector("h1").innerHTML = data.event
        
        data.guests.forEach((el) => {
            document.querySelector(".guests").innerHTML += `
            <div>
            <p>${el.name}</p>
            <p>${el.about}</p>
            <img src="${el.photo_url}">
            </div>
        `
        })
    }).catch((err) => {
        console.log(err)
    })
