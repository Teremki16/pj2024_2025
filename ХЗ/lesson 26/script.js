// $("#a").knob({
//     'min': 10,
//     'max': 99,
//     "step": 5,
//     "angleOffset": 45,
//     "angleArc": 260,
//     "readOnly": false,
//     "rotation": "anticlockwise",
//     "thickness": 0.2,
//     "lineCap": "round",
//     "width": 500,
//     "height": 500,
//     "displayInput": true,
//     "fgColor": "black",
//     "bgColor": "green",
//     "inputColor": "black"
// })

$("#h").knob({        
    "width": 500,
    "height": 500,
    "displayInput": false,
    "bgColor": "#333",
    "fgColor": "green",
    "max": 12
})

$("#m").knob({        
    "width": 318,
    "height": 318,
    "displayInput": false,
    "bgColor": "#333",
    "fgColor": "lightgreen",
    "max": 60
})

$("#s").knob({        
    "displayInput": false,  
    "bgColor": "#333",
    "fgColor": "lightyellow",
    "max": 60
})

setInterval(()=>{
    let data = new Date()
    let hour = data.getHours()
    hour = hour > 11 ? hour - 12 : hour
    let minutes = data.getMinutes()
    let seconds = data.getSeconds()
    $("#h").val(hour).trigger("change")
    $("#m").val(minutes).trigger("change")
    $("#s").val(seconds).trigger("change")
    $(".h").text(hour)
    $(".m").text(minutes)
    $(".s").text(seconds)
}, 100)