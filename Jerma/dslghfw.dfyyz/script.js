let url = "https://raw.githubusercontent.com/RobocodeSchool/web/master/songs.json"

fetch(url).then(async (res)=>{
    let data = await res.text()
    data= JSON.parse(data)
    console.log(data)

    data.forEach(e=>{

        document.body.innerHTML +=`
        <div class="box">
      <h3>${e.name}</h3>
      <img src="${e.img}">
      <a href="data:text/plain;charset=utf-8, ${encodeURIComponent(JSON.stringify(e))}" download="order.json">LINK</a>
        </div>
        `
    })

  let xmltext = `
  <audio>
    <name>${data[0].name}<name>
    <img>${data[0].img}</img>
    <autor>${data[0].autor}</autor>
    <details>${data[0].details}</details>
  </audio>
  `
console.log(xmltext)
let xml = new DOMParser().parseFromString(xmltext, "application/xml")
console.log(xml)
let obj = {
    name: xml.querySelector("name").innerHTML,
    ing: xml.querySelector("img").innerHTML,
    autor: xml.querySelector("autor").innerHTML,
    details: xml.querySelector("details").innerHTML,

}
console.log(obj)



let serializer = new XMLSerializer().serializeToString(xml)
console.log(serializer)
})