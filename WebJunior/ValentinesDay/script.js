let state = false
$(".box").on("click", function(){
    if(state){
        $(".top").animate({top: "-50px"}, 500)
        $(".bottom").animate({bottom: "-40px"}, 500)
        $("h1, p").animate({opacity: "1"}, 1500)
    }else{
        $(".top").animate({top: "40px"}, 500)
        $(".bottom").animate({bottom: "70px"}, 500)
        $("h1, p").animate({opacity: "0"}, 100)
    }
    state = !state
})