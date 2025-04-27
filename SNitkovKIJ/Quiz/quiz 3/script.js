$(".dropDown .body").slideUp(0);

$(".dropDown .head").click(function () {
    $(".dropDown .body").slideToggle("fast");
});

let time;

if(localStorage.getItem("timer") != null){
    time = localStorage.getItem("timer");
    time = parseInt(time);
}else{
    time = 300;
    localStorage.setItem("timer", time)
}




$(".start").on("click", ()=> {
        $(".start").css("display", "none")
        $("audio").css("display", "block")
        setInterval(() => {
            time = parseInt(localStorage.getItem("timer")) - 1
            $(".timer input").val(time).trigger("change")
            localStorage.setItem("timer", time)
            if(time <= 0){
                localStorage.removeItem("timer")
                location.assign("../quiz 1/index.html")
            }
        },1000)
})
    



let answers = [
    {
        name: "box1",
        Img: "images/1.png",
        id:1
    },
    {
        name: "box2",
        Img: "images/2.png",
        id:2
    },
    {
        name: "box3",
        Img: "images/3.png",
        id:3
    },
    {
        name: "box4",
        Img: "images/4.png",
        id:4
    },
    {
        name: "box5",
        Img: "images/5.png",
        id:5
    },
    {
        name: "box6",
        Img: "images/6.png",
        id:6
    },
    {
        name: "box7",
        Img: "images/7.png",
        id:7
    },
    {
        name: "box8",
        Img: "images/8.png",
        id:8
    },
    {
        name: "box9",
        Img: "images/9.png",
        id:9
    },
    {
        name: "box10",
        Img: "images/10.png",
        id:10
    },
    {
        name: "box11",
        Img: "images/11.png",
        id:11
    },
    {
        name: "box12",
        Img: "images/12.png",
        id:12
    }
    
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
    max: 5,
    readOnly: true,
});
$(".timer input").knob({
    displayInput: false,
    thickness: 0.2,
    lineCap: "round",
    bgColor: "white",
    fgColor: "red",
    min: 0,
    max: 300,
    width:100,
    height:100,
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

$("#go").on("click", () => {
    let answ = $(".form input").val().toLowerCase();
    $(".form input").val("");
    if (answers[activeRebus].includes(answ)) {
        alertify.success("correct");
        score++;
        $(".progress input").val(score).trigger("change");
        was.push(activeRebus);
        if(score >= 5){
            $(".quiz, .progress").css("displey", "none")
            $(".next").css("display", "block")
        }
        startRebus();
    } else {
        alertify.error("Wrong, try again!");
    }
});


function fillBoard(){
    let board = shuffle([...answers, ...answers])
    $(".gameBoard").empty()
    board.forEach((card)=>{
        $(".gameBoard").append(`
            <div class="card">
        <div class="front">IOX</div>
        <div class="back">
            <img src="${card.Img}" alt="">
        </div>
    </div>
           
            `)
    })
}

fillBoard()


function shuffle(array) {
    let counter = array.length;
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