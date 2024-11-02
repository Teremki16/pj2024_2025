let url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

let data;
fetch(url, {method: "get"}).then(async(response)=>{
    let data = await response.json()
    console.log(data)
    document.querySelector(".title").innerHTML = data.squadName
    document.querySelector(".homeTown").innerHTML = "home Town: " + data.homeTown + "// Formed:" + data.formed
    data.members.forEach(el => {
        document.querySelector(".members").innerHTML +=`
        <div class="mem">
        <h1>${el.name}</h1>
        <p>${el.secretIdentity}</p>
        <p> Age: ${el.age}</p>
        <p>Super powers</p>
        <ul>
${el.powers.map(sp=>`<li>${sp}</li>`),join("")}
        </ul>
        </div>
        `
    })
})

fetch("https://raw.githubusercontent.com/RobocodeSchool/web/master/historycats.json").then(async( res)=>{
    let data = await res.json()
     data.forEach((el)=>{
        document.querySelector("a").innerHTML +=`
        <p>${el.name}</p>
        <p>${el.description}</P>
        <img src="${el.img}">`
    })

}).catch((err)=>{
    console.log(err)
})




  
