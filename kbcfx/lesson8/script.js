let url = "https://bored.api.lewagon.com/api/activity"
let types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

$(".activity").hide()

$.each(types, function(i, t) {
    $("form").append(`
        <label for="${t}">${t}</label>
        <input type="radio" name="type" id="${t}" value="${t}">`)
})

$("button").click(()=>{
    let query = $("form").serializeArray().reduce((obj, i)=>{
        obj[i.name] = i.value
        return obj
    })
    console.log(query)
    $(".activity").show()
    $.ajax(url, {
        data:query,
        dataType: "json",
        success: function(result){
            $(".activity").html(`
                <h2>${result.activity}</h2>
                <p>Type: ${result.type}</p>
                <p>Price: ${result.price}</p>
                `)
        }
    })
})
