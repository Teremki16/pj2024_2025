let url = "https://raw.githubusercontent.com/MamboDancer/WebMiddleCyberween/main/task.json"

fetch(url).then(async (res)=>{
    let data = await res.json()
    console.log(data)
    document.querySelector("h1").innerHTML = data.event

    data.guests.forEach(element => {
        document.querySelector(".guests").innerHTML += `
        <div class="guest">
            <h2>${element.name}</h2>
            <h4>${element.about}</h4>
            <img src="${element.photo_url}" alt="">
        </div>
        `
    });

})