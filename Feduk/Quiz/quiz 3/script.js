$(".dropDown .body").slideUp(0);

$(".dropDown .head").click(function () {
    $(".dropDown .body").slideToggle("fast");
});

let time;

if(localStorage.getItem("timer")!=null){
    time = localStorage.getItem("timer")
    time = parseInt(time)
}else{
    time = 300;
    localStorage.setItem("timer", time)
}
let clock;
$(".start").on("click", ()=>{
    $(".start").css("display", "none")
    $(".gameBoard").css("display", "grid")
    clock = setInterval(()=>{
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
        name: "C++",
        img: "images/cpp.png",
        id: 1
    },
    {
        name: "C#",
        img: "images/cs.png",
        id: 2
    },
    {
        name: "C",
        img: "images/1.svg",
        id: 3
    },
    {
        name: "Java",
        img: "images/Логотип_Java.png",
        id: 4
    },
    {
        name: "JavaScript",
        img: "images/Unofficial_JavaScript_logo_2.svg.png",
        id: 5
    },
    {
        name: "TypeScript",
        img: "images/Typescript_logo_2020.svg.png",
        id: 6
    },
    {
        name: "Rust",
        img: "images/Rust_programming_language_black_logo.svg.png",
        id: 7
    },
    {
        name: "Swift",
        img: "images/swift-og.png",
        id: 8
    },
    {
        name: "PHP",
        img: "images/PHP-logo.svg.png",
        id: 9
    },
    {
        name: "Go",
        img: "images/images.png",
        id: 10
    },
    {
        name: "R",
        img: "images/Rlogo.png",
        id: 11
    },
    {
        name: "Asembler",
        img: "images/25a85d9e5057430d82273a3c75e73014.jpg",
        id: 12
    },
];

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
    readOnly: true,
});

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
    readOnly: true,
});

let activeRebus = 0;
let was = [];

function startRebus() {
    do {
        activeRebus = Math.floor(Math.random() * answers.length);
    } while (was.includes(activeRebus))
    $(".quiz audio").attr("src", `sounds/${activeRebus}.mp3`);
}

startRebus();

let score = 0;


function fillBoard(){
    let board = shuffle([...answers, ...answers])
    $(".gameBoard").empty()
    board.forEach((card)=>{
        $(".gameBoard").append(`
            <div class="card" data-id="${card.id}" >
                <div class="front">🤕</div>
                <div class="back">
                    <img src="${card.img}" alt="">
                </div>
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

function cardCliked(event){
    if($(this).hasClass("matched") || $(this).hasClass("flip"))return
    if(!firstCard){
        firstCard = $(this)
        firstCard.addClass("flip")
        return
    }
    if(firstCard && !secondCard){
        secondCard = $(this)
        secondCard.addClass("flip")
        if(firstCard.attr("data-id") == secondCard.attr('data-id')){
            firstCard.addClass("matched")
            secondCard.addClass("matched")
            firstCard = null
            secondCard = null
            score++
            $(".progress input").val(score).trigger("change")
            if (score >= 12){
                $(".win").css("display", 'flex')
                clearInterval(clock)
                localStorage.removeItem("timer")
            }
        }else{
            setTimeout(()=>{
                firstCard.removeClass('flip')
                secondCard.removeClass('flip')
                firstCard = null
                secondCard = null
            },600)
        }
    }
}

$(document).on("click", ".card", cardCliked)