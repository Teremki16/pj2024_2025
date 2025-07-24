let magicCat = "https://images.sftcdn.net/images/t_app-icon-m/p/ae9bc4e7-aa56-4b84-83f0-d084bd536f0d/2216849017/magic-cat-academy-logo"
let simpleCat = "https://www.thenoahcenter.org/wp-content/uploads/2023/06/2.png"

$("img").attr("src", magicCat)
$("img").fadeOut(0);


$("button").on("click", function () {
    let spell = $("input").val();
    $("input").val("");
    if (spell == "leviosa") {
        $(this).css("position", "relative");
        $(this).animate({ top: "-100px" }, 1000);
        $(this).animate({ top: "0px" }, 1000);
    } else if (spell == "robocatitio") {
        $("img").fadeIn(3000, () => {
            $("img").fadeOut(3000);
        });
    } else if(spell == "transformio"){
        console.log($("img").attr("src"))
        if($("img").attr("src") == magicCat){
            $("img").attr("src", simpleCat)
        }else{
            $("img").attr("src", magicCat)
        }
    }
});
