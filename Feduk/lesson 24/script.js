$(".box").on("click",function() {
    $(".top").animate({top:"-90px"},500)
    $(".bottom").animate({top:"420px"},500)
    $("p").animate({opacity: 1})
})
