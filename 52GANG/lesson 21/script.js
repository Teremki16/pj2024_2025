$(".form button").on("click", function(){
    let text = $(".form input").val()
    $(".form input").val("")
    $("ul").append(`<li>${text}</li>`)
})

$("html").on("click", "li", function(){
    $(this).fadeOut("slow", function(){
        $(this).remove
    })
})