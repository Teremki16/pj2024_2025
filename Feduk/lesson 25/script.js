// $(".Alert").on("click", function() {
//     alertify.alert("Python is boolshit")
// })

// $(".Confirm").on("click", function() {
//     alertify.set({
//         labels: {
//             cancel: "I like Python",
//             ok: "Yes i am smart human!"
//         },
//         buttonFocus : "cancel",
//         buttonReverse : true,
//     })
//     alertify.confirm("Python is boolshit", function(e){
//         if(e){
//             alertify.success("You right!")
//         }else{
//             alertify.error("You are Nikita!")
//         }
//     })
// })

// $(".Prompt").on("click", function() {
//     alertify.prompt("Witch programing language is boolshit", function(e, val){
//         if(e){
//             if (val == "Python"){
//                 alertify.success("You 100 right!")
//             }else{
//                 alertify.error("Python is the worstED in the whole world!")
//             }
//         }else{
//             alertify.error("You are Nikita!")
//         }
//     })
// })

// $(".log").on("click", function(){
//     alertify.log("Just python is not programing language")
// })

// $(".Success").on("click", function(){
//     alertify.success("Just python is bad")
// })

// $(".Error").on("click", function(){
//     alertify.error("Just python is bad")
// })


let questionCount = 3
let startTime
function exam(q){
    let a = Math.floor(Math.random()* 100) 
    let b = Math.floor(Math.random()* 100) 
    let answer = a + b

    alertify.prompt(`${a}+${b} = ?`, function(e, val){
        if(e){
            if(parseInt(val) == answer){
                alertify.success("Correct")
                q--
                
            }else{
                alertify.error("Wrong, try again")
            }
            if(q <= 0 ){
                alertify.prompt(`U spend ${($.now()-startTime)/1000} seconds, what is your name? `, function
                (e, name){
                    if(e){
                        $("body").after(` <p>-${name}: ${($.now()-startTime)/1000} s</p>`)
                    }
                })
                return
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