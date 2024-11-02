let data

fetch("https://raw.githubusercontent.com/RobocodeSchool/web/master/historycats.json").then(async(response)=>{
    let data=await response.json()
    data.forEach(el=>{
        document.querySelector(".a").innerHTML+=`
        <h1>${el.name}</h1>
        <p>${el.description}</p>
        <img src="${el.img}">`
    })
}).catch(err=>{console.log(err)})