// $(".Alert").on("click", function(){
//     alertify.alert("Swaga tyt?")
// })
// $(".Confirm").on("click", function(){
//     alertify.set({
//         labels: {
//             cancel: "I like amd",
//             ok: "Yes i smart human"
//         }, 
//         buttonFocus: "cancel",
//         buttonReverse: true,
        
//     })

//     alertify.confirm("Swaga tyt?", function(e){
//         if(e){
//             alertify.success("есть свага")
//         }else{
//             alertify.error("где свага")
//         }
//     })
// })
// $(".Prompt").on("click", function(){


//     alertify.prompt("нужно кушать халяль и верить в алаха?????", function(e, val){
//         if(e){
//             if(val == "да"){
//                 alertify.success("u pig")
//             }else{
//                 alertify.error("u krytoi chuvak real")
//             }

//         }
//     })
// })

// $(".Success").on("click", function(){
//     alertify.success("koroche mne len pridumovat")
// })
// $(".log").on("click", function(){
//     alertify.log("koroche mne len pridumovat")
// })
// $(".Error").on("click", function(){
//     alertify.error("koroche mne len pridumovat")
// })


let questionCount = 3;
let startTime;


function exam(q){
    let a = Math.floor(Math.random()*1000 )
    let b = Math.floor(Math.random()*1000 )
    let answer = a + b
    alertify.prompt(`${a} + ${b} = ?` , function(e, val){
        if(e){
            if(parseInt(val) == answer){
                alertify.success("Correct!")
                q--
            
            }else{
                alertify.error("Wrong, try again!")
            }
            if(q <= 0){
                alertify.prompt(`U spend ${($.now() - startTime) / 1000} seconds, pls write your name?`, function
                (e, name){
                    if(e){
                        $("body").after(`<p>- ${name} : ${($.now() - startTime) / 1000} s</p>`)
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