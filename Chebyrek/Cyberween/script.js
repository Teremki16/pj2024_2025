fetch ("https://raw.githubusercontent.com/MamboDancer/WebMiddleCyberween/main/task.json",{
    method:"get"
}).then(async (response)=>{
    let data = await response.json();
    console.log(data)
    document.querySelector(".title").innerHTML = data.event
    data.guests.forEach((el)=>{
        document.querySelector(".grid").innerHTML += `

        <div class="guest">
            <h1>${el.name}</h1>
            <p>${el.about}</p>
            <img src="${el.photo_url}" alt="">
        </div>
        `
        
    })


})


