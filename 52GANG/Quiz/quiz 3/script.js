$(".dropDown .body").slideUp(0)

$(".dropDown .head").click(function () {
    $(".dropDown .body").slideToggle("fast")
})

let time;
if (localStorage.getItem("timer") != null) {
    time = localStorage.getItem("timer")
    time = parseInt(time)
} else {
    time = 300;
    localStorage.setItem("timer", time)
}

$(".start").on("click", () => {
    $(".start").css("display", "none")
    $(".gameBoard").css("display", "grid    ")
    clock = setInterval(() => {
        time = parseInt(localStorage.getItem("timer")) - 1
        $(".timer input").val(time).trigger("change")
        localStorage.setItem("timer", time)
        if (time <= 0) {
            localStorage.removeItem("timer")
            location.assign("../quiz 2/index.html")
        }
    }, 1000)
})
let answers = [
    {
        name: "1",
        img: "images/1.jpg",
        id: 1
    },
    {
        name: "",
        img: "images/2.jpg",
        id: 2
    },
    {
        name: "",
        img: "images/3.jpg",
        id: 3
    },
    {
        name: "",
        img: "images/4.jpg",
        id: 4
    },
    {
        name: "",
        img: "images/5.jpg",
        id: 5
    },
    {
        name: "",
        img: "images/6.jpg",
        id: 6
    },
    {
        name: "",
        img: "images/7.jpg",
        id: 7
    },
    {
        name: "",
        img: "images/8.jpg",
        id: 8
    },
    {
        name: "",
        img: "images/9.jpg",
        id: 9
    },
    {
        name: "",
        img: "images/10.jpg",
        id: 10
    },
    {
        name: "",
        img: "images/11.jpg",
        id: 11
    },
    {
        name: "",
        img: "images/12.jpg",
        id: 12
    },
];

$(".progres input").knob({
    displayInput: false,
    angleArc: 120,
    angleOffset: -60,
    thickness: 0.2,
    lineCap: "round",
    bgColor: "red",
    fgColor: "orange",
    min: 0,
    max: 12,
    readyOnly: true,
});

$(".timer input").knob({
    displayInput: false,
    thickness: 0.1,
    lineCap: "round",
    bgColor: "orange",
    fgColor: "black",
    min: 0,
    max: 300,
    width: 100,
    height: 100,
    readyOnly: true,

});
let score = 0
let activeRebus = 0;
let was = []

function startRebus() {
    do {
        activeRebus = Math.floor(Math.random() * answers.length)
    } while (was.includes(activeRebus));
    $(".quiz audio").attr("src", `sounds/${activeRebus}.mp3`)
}

startRebus()

function fillBoard() {
    let board = shuffle([...answers, ...answers])
    $(".gameBoard").empty()
    board.forEach((card) => {
        $(".gameBoard").append(`
                    <div class="card" data-id="${card.id}">
            <div class="front">🥵</div>
            <div class="back">
                <img src="${card.img}" alt="">
            </div>
        </div>
            `)
    })
}

fillBoard()

function shuffle(array) {
    let counter = array.length
    let temp;
    let index;
    while (counter > 0) {
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

function cardClicked(event) {
    if ($(this).hasClass("matched") || $(this).hasClass("flip")) return
    if (!firstCard) {
        firstCard = $(this)
        firstCard.addClass("flip")
        return
    }
    if (firstCard && !secondCard) {
        secondCard = $(this)
        secondCard.addClass("flip")
        if (firstCard.attr("data-id") == secondCard.attr("data-id")) {
            firstCard.addClass("matched")
            secondCard.addClass("matched")
            firstCard = null
            secondCard = null
            score++
            $(".progress input").val(score).trigger("change")
            if(score>=12){
                $(".win").css("display", "flex")
                clearInterval(clock)
                clearInterval.removeItem("timer")
            }
        } else {
            setTimeout(() => {
                firstCard.removeClass("flip")
                secondCard.removeClass("flip")
                firstCard = null
                secondCard = null
            }, 600)
        }
    }
}

$(document).on("click", ".card", cardClicked)