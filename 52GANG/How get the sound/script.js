$(".sound").click(function () {
    diddy.play();
});

let diddy = new Audio()
diddy.src = "sound/diddy.mp3"