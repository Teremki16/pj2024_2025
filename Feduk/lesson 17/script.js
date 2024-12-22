$(".box:nth-child(1)").click(function(){
    $(this).hide(100)
})

$(".box:nth-child(2)").click(function(){
    $(this).hide("slow")
})

$(".box:nth-child(3)").click(function(){
    $(this).hide(3001)
})

$(".box:nth-child(4)").click(function(){
    $(this).hide(1001, ()=> alert("Я здесь притаілса!!"))
})

$(".box:nth-child(5)").click(function(){
    $(".box").show("fast")
})

$(".dropHead").click(function(){
    $(".dropBody").fadeToggle("fast")
})


