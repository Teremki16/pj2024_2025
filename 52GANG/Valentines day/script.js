let state = false
$(".heart").on("click", function () {
    $(".top").animate({top:"-50px"}, 500)
    $(".bottom").animate({bottom:"-20px"}, 500)
    $("h1, p").animate({opacity:"1"},1500)
})