let url = "https://bored.api.lewagon.com/api/activity"

$("button").click(()=>{
    $.ajax(url, {
        dataType: "json",
        success: function(result){
            $(".activity").html(JSON.stringify(result))
        }
    })
})
