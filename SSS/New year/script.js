let url = "http://www.omdbapi.com/?s=christmas&apikey=b12ba7b4"


fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.Search)
        let images = data.Search
        images.forEach(el => {
            document.querySelector(".container").innerHTML += `
            <div class="movie">
                <img src="${el.Poster}" alt="">
                <p>${el.Title}</p>
                <p>${el.Year}</p>
            </div>
            `
        })
    })

    