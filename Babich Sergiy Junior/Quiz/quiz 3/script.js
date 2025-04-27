$(".dropDown .body").slideUp(0)


$(".dropDown .head").click(function(){
    $(".dropDown .body").slideToggle("fast")
})

    let time;

if(localStorage.getItem("timer") !=null){
    time = localStorage.getItem("timer")
    time = parseInt(time)
}else{
    time = 300;
    localStorage.setItem("timer", time)
}

$(".start").on("click", ()=> {
    $(".start").css("display", "none")
    $(".gameBoard").css("display", "grid")
    setInterval(()=>{
        time = parseInt(localStorage.getItem("timer")) - 1
        $(".timer input").val(time).trigger("change")
        localStorage.setItem("timer", time)
        if(time <= 0){
            localStorage.removeItem("timer")
            location.assign("../quiz 2/index.html")
        }
    },1000)
})

let answers = [
   {
    name: "Wave",
    img: "images/1.webp",
    id: 1
   },
   {
    name: "Attribute Shift",
    img: "images/2.jpg",
    id: 2
   },
   {
    name: "Morph",
    img: "images/3.webp",
    id: 3
   },
   {
    name: "Morfling",
    img: "images/4.webp",
    id: 4
   },
   {
    name: "мактрахер",
    img: "images/5.jpg",
    id: 5
   },
   {
    name: "Aegis",
    img: "images/6.jpg",
    id: 6
   },
   {
    name: "Timbersaw",
    img: "images/7.jpg",
    id: 7
   },
   {
    name: "Whirling Death",
    img: "images/8.webp",
    id: 8
   },
   {
    name: "Timber Chain",
    img: "images/9.webp",
    id: 9
   },
   {
    name: "Reactive Armor",
    img: "images/10.jpg",
    id: 10
   },
   {
    name: "Chakram",
    img: "images/11.jpg",
    id: 11
   },
   {
    name: "Manta",
    img: "images/12.jpg",
    id: 12
   },
]



$(".progress input").knob({
    displayInput: false,
    angleArc: 120,
    angleOffset: -60,
    thickness: 0.2,
    lineCap: "round",
    bgColor: "white",
    fgColor: "red", 
    min: 0,
    max: 12,
    readOnly: true
})
$(".timer input").knob({
    displayInput: false,
    thickness: 0.3,
    lineCap: "round",
    bgColor: "white",
    fgColor: "red", 
    min: 0,
    max: 300,
    width: 100,
    height: 100,
    readOnly: true
})

let activeRebus = 0;
let was = []

function startRebus(){
    do{
    activeRebus = Math.floor(Math.random() * answers.length)
    }while (was.includes(activeRebus))
    $(".quiz audio").attr("src", `sounds/${activeRebus}.mp3`)
}


startRebus()

let score = 0;




function fillBoard(){
    let Board = shuffle([...answers, ...answers])
    $(".gameBoard").empty()
    Board.forEach((card)=>{
        $(".gameBoard").append(`
            <div class="card" data-id="${card.id}" >
            <div class="front">😢</div>
            <div class="back">
                <img src="${card.img}" alt="">
            </div>    
            `)
    })
}

fillBoard()


function shuffle(array){
    let counter = array.length
    let temp;
    let index;
    while(counter > 0){
        index = Math.floor(Math.random() * counter)
        counter--
        temp = array[counter]
        array[counter] = array[index]
        array[index] = temp
    }
    return array
}

let firstCard;
let secondCard;

function cardClicked(event){
    if($(this).hasClass("matched") || $(this).hasClass("flip")) return
    if(!firstCard){
        firstCard = $(this)
        firstCard.addClass("flip")
        return;
    }
    if(firstCard && !secondCard){
        secondCard = $(this)
        secondCard.addClass("flip")
        if(firstCard.attr("data-id") == secondCard.attr("data-id")){
            firstCard.addClass("matched")
            secondCard.addClass("matched")
            firstCard = null
            secondCard = null
            score++
            $(".progress input").val(score).trigger("change")
            if(score >= 12){
                $("win").css("display", "flex")
                clearInterval(clock)
                localStorage.removeItem("timer")
            }
        }else{
            setTimeout(()=>{
                firstCard.removeClass("flip")
                secondCard.removeClass("flip")
                firstCard = null
                secondCard = null
            }, 700)
        }
    }
}

$(document).on("click", ".card", cardClicked)