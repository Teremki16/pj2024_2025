let films = []

fetch("http://www.omdbapi.com/?s=christmas&apikey=b6b1d03a").then(a=>a.json()).then(data=>{
    console.log(data)
    films = data.Search
    draw()
})


function draw(){
    let list = document.querySelector(".list")
    films.forEach(one=>{
        list.innerHTML += `
        <div class="xmas">
                <h1 class="head">${one.Title}</h1>
                <img src="${one.Poster}" alt="">
                <div class="year">Year: ${one.Year}</div>
        </div>
        `
    })
}