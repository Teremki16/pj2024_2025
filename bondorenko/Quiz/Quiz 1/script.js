$(".dropDown .body").slideUp(0)


$(".dropDown .head").click(function(){
    $(".dropDown .body").slideToggle("fast")
})

let answers = [
    "Ласка",
    "Тепло",
    "Мрія",
    "Сонце",
    "Надія",
    "Вишня",
    "Ранок",
    "Світло",
    "матиматика",
    "говно пайтан"
]

$(".progress input" ).knob({
    displayInput: false,
    angleArc: 120,
    angleOffset: -60,
    thickness: 0.2,
    lineCap:"round",
    bgColor: "pink",
    fgColor: "white",
    min: 0,
    max: 5,
    readOnly: true
})

let activerebus = 0;
let was = []

function starsRebus(){
    do{
        activerebus =Math.floor(Math.random() * answers.length);
    }while (was.includes(activerebus))
    activerebus = Math.floor(Math.random() * answers.length)
    $(".quiz img").attr("src", `img/${activerebus}.png`)
}

starsRebus()

let score = 0;

$("#go").on("click", ()=>{
    let answ = $(".form input").val().toLowerCase()
    $(".form input").val("")
    if(answ == answers[activerebus]){
        alertify.success("correct")
        score++
        $(".progrees input").val(score).trigger("change")
        was.push(activerebus)
        if(score >= 5){
            $(".quiz, .progress").css("display", "none")
            $(".next").css("display", "block")
        }
        starsRebus()
    }else{
        alertify.error("Wrong, try again!")
        
    }
})