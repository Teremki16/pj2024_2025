let magicCat = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0e0208-8cb8-4809-8bfb-bf938dc5fb70/dig5p5m-b860c4db-4116-47d1-9527-ce0e7a470d7a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMGUwMjA4LThjYjgtNDgwOS04YmZiLWJmOTM4ZGM1ZmI3MFwvZGlnNXA1bS1iODYwYzRkYi00MTE2LTQ3ZDEtOTUyNy1jZTBlN2E0NzBkN2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Hq_Ofn2OzuU6zM5YlPqCX9f9UAexCHvI6kgm3wCYnzw"



let cat = "https://assets.petco.com/petco/image/upload/f_auto,q_auto/21-413474_AdobeStock_179815747_RLS"

$("img").attr("src", magicCat)
$("img").fadeOut(0)

$("button").on("click", function () {
    let spell = $("input").val()
    $("input").val("")
    if (spell == "leviosa") {
        $(this).css("position", "relative")
        $(this).animate({ top: "-100px" }, 1000)
        $(this).animate({ top: "0px" }, 1000)
    } else if (spell = "robocatito") {
        $("img").fadeIn(3000, () => { $("img").fadeOut(3000) })
    } else if (spell == "transformio") {
        if ($("img").attr("src") == magicCat) {
            $("img").attr("src", cat)
        } else {
            $("img").attr("src", magicCat)
        }
    }
})