$(".box").click(function(){
    $(this).fadeOut(2000, ()=>$(".box").fadeIn("fast"))
})


$(".head").click(function(){
   $(this).parent().children(".body").slideToggle("fast")
})