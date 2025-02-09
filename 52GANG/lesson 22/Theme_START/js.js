$(".themeButton").on("click", function(){
    $("section, header, img, nav, footer").toggleClass("dark")
    $("body").toggleClass("darkBody")
    if(isDark){
        $(".themeButton").html('<i class="fa-solid fa-moon"></i>')
    }else{
        $(".themeButton").html('<i class="fa-solid fa-sun"></i>')
    }
    isDark = !isDark
})