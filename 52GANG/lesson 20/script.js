$(".sound").click(function () {
    diddy.play();
});

let diddy = new Audio()
diddy.src = "sound/diddy.mp3"





$(".text").click(function () {
    let text = $("p").text()
    alert(text)
})

$(".html").click(function () {
    let text = $("p").html()
    alert(text)
})
$(".link").click(function () {
    let link = $("a").attr(href)
    alert(link)
})

$(".linkButton").click(function () {
    let text = $(".linkText").val()
    $(".linkText").val("")
    $(".Link").attr("href", "http://" + text)
})

let r = 150
let g = 150
let b = 150

$(".r input[type=\"range\"]").on("input", function () {
    r = $(this).val()
    $(".r input[type=\"text\"]").val(r)
    $("body").css("background-color", `rgb(${r}, ${g}, ${b})`)
})

$(".g input[type=\"range\"]").on("input", function () {
    g = $(this).val()
    $(".g input[type=\"text\"]").val(g)
    $("body").css("background-color", `rgb(${r}, ${g}, ${b})`)
})

$(".b input[type=\"range\"]").on("input", function () {
    b = $(this).val()
    $(".b input[type=\"text\"]").val(b)
    $("body").css("background-color", `rgb(${r}, ${g}, ${b})`)
})

$(".r input[type=\"text\"]").on("input", function () {
    r = $(this).val()
    $(".r input[type=\"range\"]").val(r)
    $("body").css("background-color", `rgb(${r}, ${g}, ${b})`)
})

$(".g input[type=\"text\"]").on("input", function () {
    g = $(this).val()
    $(".g input[type=\"renge\"]").val(g)
    $("body").css("background-color", `rgb(${r}, ${g}, ${b})`)
})

$(".b input[type=\"text\"]").on("input", function () {
    b = $(this).val()
    $(".b input[type=\"range\"]").val(b)
    $("body").css("background-color", `rgb(${r}, ${g}, ${b})`)
})
