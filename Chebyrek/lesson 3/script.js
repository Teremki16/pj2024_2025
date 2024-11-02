fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",{
    method:"get"
}).then(async (response)=>{
    let data = await response.json();
    console.log(data)
    document.querySelector(".title").innerHTML = data.squadName
    document.querySelector(".hometown").innerHTML = `Hometown: ${data.homeTown}// formed: ${data.formed}`

    data.members.forEach((el)=>{
        document.querySelector(".members").innerHTML += `
        <div class="mem">
            <h1>${el.name}</h1>
            <p>Secret identity ${el.secretIdentity}</p>
            <p>Age: ${el.age}</p>
            <p>Super powers: ${el.powers}</p>
            <ul>
                ${el.powers.map(i=>`<li>${i}</li>`).join("")}
            </ul>
        </div>
        `
    })
})

fetch("https://raw.githubusercontent.com/RobocodeSchool/web/master/historycats.json",{
    method:"get"
}).then(async (response)=>{
    let data = await response.json();
    data.forEach(el=>{
        document.querySelector(".cats").innerHTML +=`
        <div class="cats">
            <h1>${el.name}</h1>
            <img src="${el.img}" alt="">
            <p>${el.desc}</p>
        </div>
        `
    })
}).catch (err=>{
    console.log(err)
})