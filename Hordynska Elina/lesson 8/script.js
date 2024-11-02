let url = "https://bored.api.lewagon.com/api/activity"
let types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

$.each(types, (i, t)=>{
    $(".radios").append(`
        <label for="${t}">${t}</label>
        <input type="radio" name="type" value="${t}" id="${t}">
        `)
})

$(".activity").hide()

$(".randomize").on("click", ()=>{
    let query = $("form").serializeArray().reduce((obj, item)=>{
        obj[item.name] = item.value
        return obj
    });
    query.minprice = query.min,
    query.maxprice = query.max,
    $.ajax(url, {
        data: query,
        dataType: "json",
        success: function(result){
            $(".activity").show()
            $(".activity").html(`
                <p>${result.activity}</p>
                <p>Type: ${result.type}</p>
                <p>Price: ${result.price}</p>
                <p>Participants: ${result.participants}</p>
                `)
        },
        error: function(err){
            $(".activity").html(JSON.stringify(err))
        }
    })
})