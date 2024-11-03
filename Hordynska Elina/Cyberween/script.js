let url = "https://raw.githubusercontent.com/MamboDancer/WebMiddleCyberween/main/task.json"

let data;
fetch(url, {method: "get"}).then(async (response)=>{
    let data = await response.json()
    console.log(data)
    document.querySelector("h1").innerHTML = data.event
    data.guests.forEach(el => {
        document.querySelector(".guests").innerHTML += `
        <div class='guest'>
        <h2>${el.name}</h2>
        <p>About: ${el.about}</p>
        <img src="${el.photo_url}">
        </div>`
    });
})