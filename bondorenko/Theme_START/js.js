let isDark = false;

$(".themeButton").on("click", function(){
    $("section, header, nav, footer").toggleClass("dark")
    $("body").toggleClass("darkBody")
    if(!isDark){
        $(".themeButton").html('<i class="fa-soild  fa-moon"></i>')
        }else{
        $(".themeButton").html('<i class="fa-soild  fa-sun"></i>')
        }
        isDark = !isDark
    })