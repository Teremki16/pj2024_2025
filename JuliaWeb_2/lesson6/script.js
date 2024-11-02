let url="https://pokeapi.co/api/v2/pokemon?limit=127";

let pokemons=[];
let Promises=[];

let order=1

fetch(url).then(async res=>{
    let data = await res.json();
    console.log(data)
    data.results.forEach(el=>{
        let promis=new Promise((res,rej)=>{
            fetch(el.url).then(async e=>{
                if(e.status==200){
                    res(await e.json())
                }else{
                    rej(e.status)
                }
            }).catch((err)=>rej(err))
                
        })
        Promises.push(promis)
    })
    Promise.all(Promises).then(result=>{
        pokemons=result
        console.log(pokemons)
        drawList()
    })
})


function drawList(){
    let list=document.querySelector(".list")
    list.innerHTML=""
    pokemons.forEach(pok=>{
        list.innerHTML+=`
        <div class="pokemon">
            <div class="id">id: ${pok.id}</div>
            <h1>${pok.name}</h1>
            <img src="${pok.sprites.front_default}" alt="">
            <div class="bar">
                <div class="section">
                    <i class="fa-solid fa-heart"></i> ${pok.stats[0].base_stat}
                </div>
                <div class="section">
                    <i class="fa-solid fa-gun"></i> ${pok.stats[1].base_stat}
                </div>
                <div class="section">
                    <i class="fa-solid fa-shield-halved"></i> ${pok.stats[2].base_stat}
                </div>
            </div>
        </div>
        `
        }
    )
}



let SF = (e)=>{
    let Sort=document.querySelector("#sort-form")["sort"].value
    console.log(Sort)
    if(Sort=="id"){
        pokemons.sort(function(a,b){
            if(a.id>b.id){
                return order
            }
            else if(a.id<b.id){
                return -order;
            }
            else{
                return 0;
            }
        })
    }else if(Sort=="name"){
        pokemons.sort(function(a,b){
            if(a.name>b.name){
                return order
            }
            else if(a.name<b.name){
                return -order;
            }
            else{
                return 0;
            }
        })
    }
    drawList()
}
document.querySelector("#sort-form").addEventListener("change", SF)
    let WF = (e)=>{
    let Sort=document.querySelector("#war-form")["war"].value
    console.log(Sort)
    if(Sort=="hp"){
        pokemons.sort(function(a,b){
            if(a.stats[0].base_stat>b.stats[0].base_stat){
                return order
            }
            else if(a.stats[0].base_stat<b.stats[0].base_stat){
                return -order;
            }
            else{
                return 0;
            }
        })
    }else if(Sort=="attack"){
        pokemons.sort(function(a,b){
            if(a.stats[1].base_stat>b.stats[1].base_stat){
                return order
            }
            else if(a.stats[1].base_stat<b.stats[1].base_stat){
                return -order;
            }
            else{
                return 0;
            }
        })
    }else if(Sort=="defense"){
        pokemons.sort(function(a,b){
            if(a.stats[2].base_stat>b.stats[2].base_stat){
                return order
            }
            else if(a.stats[2].base_stat<b.stats[2].base_stat){
                return -order;
            }
            else{
                return 0;
            }
        })
    }
    drawList()
}
document.querySelector("#war-form").addEventListener("change", WF)

document.querySelector("#dir-form").addEventListener("change", function(e){
    order=e.target.value=="s" ? -1 : 1
    SF()
    WF()
})