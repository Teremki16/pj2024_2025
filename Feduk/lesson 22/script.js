let isStyled = false

$(".changeStyle").on("click", function(){
    if(isStyled){
        $("h1, h2, p").removeClass("cursive")
    }else{
        $("h1, h2, p").addClass("cursive")
    }
    isStyled = !isStyled
 })