// $(".Alert").on("click", function(){
//     alertify.alert("Bohdan likes Python")
// })
// $(".Confirm").on("click", function(){
//     alertify.confirm("Bohdan likes Python",function(e){
//         alertify.set({
//             labels: {
//                 cancel: "i dont like Python",
//                 ok: "Yes I am smart human!"
//             },
//             buttonFocus:"true",
//             buttonReverse: true
//         })
//         if(e){
//             alertify.success("You right, Bohdan likes Python")
//         }else{
//             alertify.success("You Bohdan!")
//         }
//     })
// })
// $(".Prompt").on("click", function(){
//     alertify.prompt("What programming language likes Bohdan",function(e, val){
//         if(e){
//             if(val == "Python"){
//                 alertify.success("You right!Bohdan likes Python")
//             }else{
//                 alertify.error("You Bohdan!")
//             }
//         }else{
//             alertify.error("You Bohdan!")
//         }
//     })
// })

// $(".Log").on("click", function(){
//     alertify.log("Just Bohdan likes Python")
// })

// $(".Succes").on("click", function(){
//     alertify.success("Just Bohdan likes Python")
// })

// $(".Error").on("click", function(){
//     alertify.error(" Bohdan dont likes Python")
// })



let questionCount = 3;
let startTime;

function exam(q){
    let a = Math.floor(Math.random() * 100)
    let b = Math.floor(Math.random() * 100)
    let answer = a+b

    alertify.prompt(`${a} + ${b} = ?`, function(e, val){
        if(e){
            if(parseInt(val) == answer){
                alertify.success("Correct!")
                q--
                
            }else{
                alertify.error("Wrong!")
            }
            if(q <= 0){
                alertify.alert(`U spend ${($.now() - startTime)/1000} seconds`)
            }
            exam(q)
        }else{
            return
        }
    })
}

$("button").on("click", function(){
    exam(3)
    startTime = $.now()
})