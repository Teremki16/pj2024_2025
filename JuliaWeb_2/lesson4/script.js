let url ="https://pokeapi.co/api/v2/pokemon/"

document.getElementById("searchBtn").addEventListener("click",()=>{
    let question=document.getElementById("search").value
    question=question.toLowerCase()
    document.getElementById("search").value=""

    fetch(url+question).then(async(res)=>{
        let data=await res.json()
        console.log(data)
        document.querySelector(".wrapper").innerHTML=`
        <div class="pokemon">
            <div class="id">id: #1${data.id}</div>
            <h1>${data.name}</h1>
            <img src="${data.sprites.front_default}" alt="">
            <ul>
                ${data.types.map(t=>"<li>"+t.type.name+"</li>").join("")}
            </ul>
        </div>
        `
    }).catch(err=>{
        document.querySelector(".wrapper").innerHTML=`
        <div class="pokemon">
            <h1>Pokemon not found</h1>
        </div>
        `
})
})