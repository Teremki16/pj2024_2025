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
    $(this).hide(1000, ()=> alert("Я здесь притаілся!!!"))
})

$(".box:nth-child(5)").click(function(){
    $(".box").show("fast")
})

$(".dropHead").clikc(function(){
    $(".dropBody").toggle("fast")
})