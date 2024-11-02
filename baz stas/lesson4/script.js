let url = 'https://pokeapi.co/api/v2/pokemon/'

document.querySelector(".form button").addEventListener("click",()=>{
    let query = document.querySelector(".form input ").value 
    document.querySelector(".form input").value= ""
    fetch(url + query.toLowerCase()).then(async (res)=>{
        let data =await res .json()
        console.log(data)
        document.querySelector(".wrapper").innerHTML =`
          <div class="wrapper">
            <div class="pakemon">
<div class="id">id: 2</div>
<h1>${data.name}</h1>
<img src = ""
<ul>
    <li>energy</li>
</ul>
 </div>
 </div>`
    })
})