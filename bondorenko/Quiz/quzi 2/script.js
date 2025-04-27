$(".dropDown .body").slideUp(0)


$(".dropDown .head").click(function(){
    $(".dropDown .body").slideToggle("fast")
})

let time;

if (localStorage.getItem("timer")!=null){
    time = localStorage.getItem("timer")
    time = parseInt(time)
}else{
    time = 300;
    localStorage.setItem("timer", time)
    clock = setInterval (()=>{
    setInterval =>{
        time = parseInt(localStorage.getItem("timer")) - 1
        $(".timer input").val(time).trigger("change")
        localStorage.setItem("timer", time)
    }
    },1000)
}

$(".start").on("click", ()=>{
    console.log("edfs")
    $(".start").css("display", "none")
    $("audio").css("display", "block")

    setInterval(()=>{
        time = parseInt(localStorage.getItem("timer")) - 1
        $(".timer input").val(time).trigger("change")
        localStorage.setItem("timer", time)
        if(time <= 0){
            localStorage.removeItem("timer")
            locationassign("../quiz 1/index.html")
        }
    },1000)
    
})

let answers = [
    ["мисливці"," мисливці на приводі"],
    ["гарі", "гаррі", "гарррі поттер"],
    ["губка боб", "спандж боб", "губка"],
    ["пірати", "джек"],
    ["сімпсони", "брат"],
    ["імперський", "стар варс"],
    ["король лев", "лев"],
    ["крижене", "фрозен"],
    ["шрек", "фіона"],
    ["рокі", "сталове"],
    ["індіана", "скаби"],
    ["один вдома", "сам удома"],
    ["термінатор", "алл бі бек"],
    ["назад в майбутнє", "макфлай"]
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

$(".timer input" ).knob({
    displayInput: false,
    thickness: 0.1,
    lineCap:"round",
    bgColor: "pink",
    fgColor: "white",
    min: 0,
    max: 300,
    width: 100,
    height: 100,
    readOnly: true
})

let activerebus = 0;
let was = []

function starsRebus(){
    do{
        activerebus =Math.floor(Math.random() * answers.length);
    }while (was.includes(activerebus))
    activerebus = Math.floor(Math.random() * answers.length)
    $(".quiz audio").attr("src", `sounds/${activerebus}.mp3`)
}


starsRebus()

let score = 0;

$("#go").on("click", ()=>{
    let answ = $(".form input").val().toLowerCase()
    $(".form input").val("")
    if( answers[activerebus].includes(answ)){
        alertify.success("correct")
        score++
        $(".progrees input").val(score).trigger("change")
        was.push(activerebus)
        if(score >= 5){
            $(".quiz, .progress").css("display", "none")
            $(".next").css("display", "block")
            localStorage.removeItem("timer")
          
        }
        starsRebus()
    }else{
        alertify.error("Wrong, try again!")
        
    }
})