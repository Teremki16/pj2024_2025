$(".sound").click(function () {
    goblin.play();
});

let goblin = new Audio()
goblin.src = "sound/goblin.mp3"


$(".container").hslider({
    navBar: true,
    auto: true,
    delay: 100
})

alertify.console.log(("aaaaaaaa 52"));
alertify.console.success(("aaaa 42"));
alertify.console.eror(("32??"));
alertify.console.promt(("nooo 22s"));


