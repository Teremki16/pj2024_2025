/*let url="https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

fetch(url, {method:"get"}).then(async(response)=>{
    let data=await response.json()
    console.log(data)
})

let heroJSON=`{
    "name":"Hero",
    "age":20,
    "power":"flying"
}`

let hero=JSON.parse(heroJSON)
document.body.innerHTML=`
<h1>${hero.name}</h1>
<p>${hero.age}</p>
<h2>${hero.power}</h2>`*/


let url="https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

let data;

fetch(url, {method:"get"}).then(async(response)=>{
    let data=await response.json()
    console.log(data)
    document.querySelector(".title").innerHTML=data.squadName
    document.querySelector(".homeTown").innerHTML="Home Town"+data.homeTown+" // Formed: "+data.formed
    data.members.forEach(el=>{
        document.querySelector(".members").innerHTML+=`
        <div class="memb">
        <h1>${el.name}</h1>
        <p>Secret Identity: ${el.secretIdentity}</p>
        <p>Age: ${el.age}</p>
        <p>Super Powers: ${el.powers}</p>
        <ul>
          ${el.powers.map(sp=>`<li>${sp}</li>`).join("")}/*ставить замість розділових знаків ' '*/
        
        </ul>
        </div>
        `/*join(" ") ставить замість розділових знаків ' '*/
    })
})
