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
let clock;
$(".start").on("click", ()=> {
    $(".start").css("display", "none")
    $("audio").css("display", "block")
    clock = setInterval(()=>{
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
    ["алахадбар"],
    ["каневский"],
    ["янукович"],
    ["зеленский"],
    ["крокодил"],
    ["наталия морская пехота"],
    ["терминатор"],
    ["пираты карибского моря"],
    ["гитлер"],
    ["гимн"]
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
    max: 5,
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

$("#go").on("click", ()=>{
    let answ = $(".form input").val().toLowerCase()
    $(".form input").val("")
    if(answers[activeRebus].includes(answ)){
        alertify.success("corect")
        score++
        $(".progress input").val(score).trigger("change")
        was.push(activeRebus)
        if(score >= 5){
            $(".quiz, .progress").css("display", "none")
            $(".next").css("display", "block")
            clearInterval(clock)
            localStorage.removeItem("timer")
        }
        startRebus();
    }else{
        alertify.error("Wrong, try again!")
    }
})