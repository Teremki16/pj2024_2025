//let time = $.now()

//$(document).ready(function(){
   // alert($.now()- time)
//})

//$("h1").click(function(){
//    alert("This is Heading!")
//})
//$("p").click(function(){
    //alert("This is patagraph")
//})


$("h1, a, p").click(function(){
    alert($(this).html())
})


$(".hide").click(function(){
    $("img").hide("fast")
})
$(".show").click(function(){
    $("img").show("slow")
})
