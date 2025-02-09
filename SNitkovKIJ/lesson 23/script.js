//$(".catch").on("mouseenter", function(){
//    let pos={
//        left: (Math.random() * 100) + "vw",
//         top: (Math.random() * 100) + "vh",
//         background: `rgb(${rnd()}, ${rnd()}, ${rnd()})`
//    }
//    $(this).css(pos)
//})
//
//function rnd(){
//    return Math.floor(Math.random() * 255)
//}
//
let pos = {
    left: 0,
    top: 0
}

$(".right").on("click", function(){
   pos.left += 50
   $(".catch").css(pos)
}
)
$(".left").on("click", function(){
    pos.left -= 50
    $(".catch").css(pos)
 }
 )
 $(".up").on("click", function(){
    pos.top -= 50
    $(".catch").css(pos)
 }
 )
 $(".down").on("click", function(){
    pos.top += 50
    $(".catch").css(pos)
 }
 )

