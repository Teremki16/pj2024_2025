$(".dropDown .body").slideUp(0)


$(".dropDown .head").click(function(){
    $(".dropDown .body").slideToggle("fast")
})

let answers = [
    "піца",
    "їжа",
    "код",
    "лев",
    "транскрипція",
    "неокласицизм",
    "гіперболізація",
    "нафта",
    "перрендикуляр",
    "автоматизація"
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
    max:5,
    readOnly:true
})

let activerebus = 0;
let was = []

function startRebus(){
    do{

    activerebus = Math.floor(Math.random() * answers.length )
    }while (was.includes(activerebus))
    $(".quiz img").attr("src",`images/${activerebus}.png`)
}

startRebus()

let score = 0;

$("#go").on("click",()=>{
    let answ = $(".form input").val().toLowerCase()
    $(".form input").val("")
    if(answ == answers[activerebus]){
        alertify.success("correct")
        score++
        $(".progress input").val(score).trigger("change")
        was.push(activerebus)
        if(score >= 5){
            $(".quiz, .progress").css("display", "none")
            $(".next").css("display", "block")
        }
        startRebus()
    }else{
        alertify.error("Wrong, try again")
    }
})
