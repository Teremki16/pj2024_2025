let hola = new Audio()
hola.src = "audio/ia-v-parizhe.mp3"

$(".box:nth-child(1)").click(function(){
    $(this).hide("fast")
})
$(".box:nth-child(2)").click(function(){
    $(this).hide("slow")
})
$(".box:nth-child(3)").click(function(){
    $(this).hide(3000)
})
$(".box:nth-child(4)").click(function(){
    $(this).hide(1000), alert("Я в париже (заграла музика)"), hola.play()
})
$(".box:nth-child(5)").click(function(){
    $(".box").show("fast")
})

$(".drospBody").click(function(){
    $(".dropBody").fadeToggle("fast")
})