$(".dropDown .body").slideUp(0)

$(".dropDown .head").click(function(){
    $(".dropDown .body").slideToggle("fast")
})

let time;

if(localStorage.getItem("timer")!=null){
    time = localStorage.getItem("timer")
    time = parseInt(time)
}else{
    time=300
    localStorage.setItem("timer", time)
}

let clock;
$(".start").on("click", ()=>{
    $(".start").css("display", "none")
    $(".gameBoard").css("display","grid")
    setInterval(()=>{
        time = parseInt(localStorage.getItem("timer")) - 1
        $(".timer input").val(time).trigger("change")
        localStorage.setItem("timer",time)
        if(time <= 0){
            localStorage.removeItem("timer")
            location.assign("../quiz2/index.html")
        }
    },1000)
})

let answers = [
    {
        name:"",
        img: "images/1.png",
        id: 1
    },
    {
        name:"",
        img: "images/2.png",
        id: 2
    },
    {
        name:"",
        img: "images/3.png",
        id: 3
    },
    {
        name:"",
        img: "images/4.png",
        id: 4
    },
    {
        name:"",
        img: "images/5.png",
        id: 5
    },
    {
        name:"",
        img: "images/6.png",
        id: 6
    },
    {
        name:"",
        img: "images/7.png",
        id: 7
    },
    {
        name:"",
        img: "images/8.png",
        id: 8
    },
    {
        name:"",
        img: "images/9.png",
        id: 9
    },
    {
        name:"",
        img: "images/10.png",
        id: 10
    },
    {
        name:"",
        img: "images/11.png",
        id: 11
    },
    {
        name:"",
        img: "images/12.png",
        id: 12
    }
]

$(".progress input").knob({
    displayInput: false,
    angleArc:120,
    angleOffset: -60,
    thickness: 0.2,
    lineCap: "round",
    bgColor:"white",
    fgColor:"red",
    min:0,
    max:12,
    readOnly:true
})
$(".timer input").knob({
    displayInput: false,
    thickness: 0.3,
    lineCap: "round",
    bgColor:"white",
    fgColor:"red",
    min:0,
    max:300,
    width:100,
    height:100,
    readOnly:true
})

let activerebus = 0;
let was = []

function startRebus(){
    do{

    activerebus = Math.floor(Math.random() * answers.length )
    }while (was.includes(activerebus))
    $(".quiz audio").attr("src",`sounds/${activerebus}.mp3`)
}

startRebus()

let score = 0;


function fillBoard(){
    let board = shufle([...answers, ...answers])
    $(".gameBoard").empty()
    board.forEach((card)=>{
        $(".gameBoard").append(`
            <div class="card" data-id="${card.id}">
                <div class="front">😑</div>
                    <div class="back">
                        <img src="${card.img}" alt="">
            </div>
        </div>
        `)
    })
}

fillBoard()

function shufle(array){
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
            $(".win").ccss("display", "flex")
            clearInterval(clock)
            localStorage.removeItem("item")
         }
    }else{
            setTimeout(()=>{
                firstCard.removeClass("flip")
                secondCard.removeClass("flip")
                firstCard = null
                secondCard = null
            },400)
        }
    }
}

$(document).on("click",".card",cardClicked)