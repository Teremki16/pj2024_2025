$(".errorBar div").hide()

$("#password").change(function () {
    let value = $(this).val()

    if (!value.match(/[A-Z]/)) {
        $("#upperError").show()
    } else {
        $("#upperError").hide()
    }

    if (!value.match(/[A-Za-z]/)) {
        $("#letterError").show()
    } else {
        $("#letterError").hide()
    }

    if (!value.match(/[0-9]/)) {
        $("#digitsError").show()
    } else {
        $("#digitsError").hide()
    }

    if (value.length < 8) {
        $("#lengthError").show()
    } else {
        $("#lengthError").hide()
    }

   
})

$("#email").change(function(){
    let value = $(this).val() 
    if (!value.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm)) {
        $("#emailError").show()
    } else {
        $("#emailError").hide()
    }
})