// $("#a").knob({
    // 'min': 1,
    // 'max': 52,
//     "step": 0.01,
//     "angleOffset": 45,
//     "angleArc": 260,
//     "readOnly": false,
//     "rotations": "anticlockwise",
//     "thickness": 0.2,
//     "lineCap": "round",
//     "width": 300,
//     "height": 300,
//     "displayInput": true,
    // "fgColor": "blue",
//     "bgColor": "yellow",
//     "inputColor": "blue"
// })

$("#h").knob({
    "width":500,
    "height":500,
    "displayInput": false,
    "bgColor": "#333",
    "fgColor": "yellow",
    'max': 12,
    "readOnly": true,
})

$("#m").knob({
    "width":318,
    "height":318,
    "displayInput": false,
    "bgColor": "#333",
    "fgColor": "lightblue",
    'max': 60,
    "readOnly": true,
})

$("#s").knob({
    "displayInput": false,
    "bgColor": "#333",
    "fgColor": "lightgreen",
    'max': 60,
    "readOnly": true,
})

setInterval(()=>{
    let data = new Date()
    let hour = data.getHours()
    $(".h").text(hour)
    hour = hour > 11 ? hour - 12 : hour
    let minutes = data.getMinutes()
    let seconds = data.getSeconds()
    $("#h").val(hour).trigger("change")
    $("#m").val(minutes).trigger("change")
    $("#s").val(seconds).trigger("change")
    $(".m").text(minutes)
    $(".s").text(seconds)
},1000)