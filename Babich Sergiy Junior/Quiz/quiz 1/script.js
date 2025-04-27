$(".dropDown .body").slideUp(0)


$(".dropDown .head").click(function(){
    $(".dropDown .body").slideToggle("fast")
})

let answers = [
    "сірія",
    "бомба",
    "бабах",
    "негр",
    "чурка",
    "хач",
    "дота",
    "морфлінг",
    "отчім",
    "два"
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

let activeRebus = 0;
let was = []

function startRebus(){
    do{
    activeRebus = Math.floor(Math.random() * answers.length)
    }while (was.includes(activeRebus))
    $(".quiz img").attr("src", `images/${activeRebus}.png`)
}


startRebus()

let score = 0;

$("#go").on("click", ()=>{
    let answ = $(".form input").val().toLowerCase()
    $(".form input").val("")
    if(answ == answers[activeRebus]){
        alertify.success("corect")
        score++
        $(".progress input").val(score).trigger("change")
        was.push(activeRebus)
        if(score >= 5){
            $(".quiz, .progress").css("display", "none")
            $(".next").css("display", "block")
        }
        startRebus();
    }else{
        alertify.error("Wrong, try again!")
    }
})