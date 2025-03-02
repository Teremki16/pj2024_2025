// $(".alert").on("click", function() {
//    alertify.alert("Python death")
// })

// $(".confirm").on("click", function() {

// alertify.set({
//     labels: {
//         cancel: "No",
//         ok: "Yes"
//     }
// })
//    alertify.confirm("Python death", function(e){
//     if(e){
//         alertify.success("Python death")
//     }else{
//         alertify.error("Python death")
//     }
//    })
// })  


// $(".prompt").on("click", function() {
//     alertify.prompt("Python death", function(e, val){
//      if(e){
//         if(val == "Python death"){
//             alertify.success("Python death")
//         }else{
//             alertify.error("Python death")
//         }
//     }else{
//         alertify.error("Python death")
//     }
       
//     })
//  })

let questionCount = 10;

function exam(q){
    let a = Math.floor(Math.random() * 100)
    let b = Math.floor(Math.random() * 100)
    let answer = a + b

    alertify.prompt(`${a} + ${b} = ?`, function(e, val){
        if(e){
            if(parseInt(val) == answer){
                alertify.success("Python death")
            }else{
                alertify.error("Python death")
            }
        }else{
            return
        }
    })

}

$("button").on("click", function(){
exam(3)
startTime = $.now()
})