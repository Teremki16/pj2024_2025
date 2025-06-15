
let t
let t2
function setup(){
    createCanvas(512,512, WEBGL)
    t = loadImage("https://thumbs.dreamstime.com/b/%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D0%B0-%D0%BC%D0%BE%D1%80%D0%BE%D0%B6%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B0%D0%BD%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D1%84%D0%BE%D0%BD-%D0%B2%D0%B8%D0%B4-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83-163503703.jpg")
    t2 = loadImage("https://st.depositphotos.com/2016173/2284/i/450/depositphotos_22842902-stock-photo-structure-of-a-baked-golden.jpg")
}

function draw(){
    background("blue")
    noStroke()
    texture(t)
    sphere(90)
    translate(0, 110, 0)
    texture(t2)
    cone(100, 200);


}