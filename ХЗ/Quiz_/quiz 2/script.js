$(".dropDown .body").slideUp(0)

$(".dropDown .head").click(function(){
    $(".dropDown .body").slideToggle("fast")
})

let time;

if(localStorage.getItem("timer")!=null){
    time = localStorage.getItem("timer")
    time = parseInt(time)
}else{
    time = 300;
    localStorage.setItem("timer", time)
}

$(".start").on("click", ()=>{
   $(".start").css("display", "none") 
   $("audio").css("display", "block")
   setInterval(()=>{
    time = parseInt(localStorage.getItem("timer")) - 1
    $(".timer input").val(time).trigger("change")
    localStorage.setItem("timer", time)
   },1000)
})

let answers = [
    ["хз", "не знаю"],
    ["крипипаста", "страшно"],
    ["хоррор", "страшний"],
    ["хелловін", "страшилки"],
    ["трілер", "звук"],
    ["фільм", "звіки з фільму"],
    ["мультфільм", "страшний"],
    ["тілі бом", "пісня"],
    ["страшний звук", "страшно"],
    ["ужастік", "крики"]

]

$(".progress input").knob({
    displayInput: false,
    angleArc: 120,
    angleOffset: -60,
    thickness: 0.2,
    lineCap: "round",
    bgColor: "white",
    fgColor: "brown",
    min: 0,
    max: 5,
    readOnly: true
})

$(".timer input").knob({
    displayInput: false,
    thickness: 0.3,
    lineCap: "round",
    bgColor: "white",
    fgColor: "brown",
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
    } while (was.includes(activeRebus))
    $(".quiz img").attr("src", `images/${activeRebus}.png`)
}

startRebus()

let score = 0;

$("#go").on("click", ()=>{
    let answ = $(".form input").val().toLowerCase()
    $(".form input").val("")
    if(answ == answers[activeRebus]){
        alertify.success("correct")
        score++
        $(".progress input").val(score).trigger("change")
        was.push(activeRebus);
        if(score >= 5){
            $(".quiz, .progress").css("display", "none")
            $(".next").css("display", "block")
        }
        startRebus()
    }else{
        alertify.error("Wrong, try again!")
    }
})