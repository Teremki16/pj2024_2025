let aaa = false

$(".heart").on("click",()=>{
    if(aaa)
    $(".top").animate({top:"-10px"},500)
    $(".botom").animate({top:"320px"},500)
    $("h2").css("color","black")
    $(".heart").on("click",()=>{
    })
})