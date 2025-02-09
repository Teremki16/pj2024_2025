let isDark = false;

$(".themeButton").on("click",function(){
    $("section,header,nav,footer").toggleClass("dark")
    $("body").toggleClass("darkBody")
    if(!isDark){
        $(".themeButton").html('<i class="fa-solid fa-moon"></i>')
    }else{
        $(".themeButton").html('<i class="fa-solid  fa-sun"></i>')
    }
    isDark = !isDark
})