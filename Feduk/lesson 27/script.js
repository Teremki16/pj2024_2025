let controller = new ScrollMagic.Controller()

// let scene1 = new ScrollMagic.Scene({
//     triggerElement: ".scene1",
//     offset: 500,
//     triggerHook: 0.8
// })
// .setClassToggle(".scene1 img", "abracadabra")
// .addTo(controller)
// .addIndicators()


// let scene2 = new ScrollMagic.Scene({
//     triggerElement: ".scene2",
//     offset: 500,
//     triggerHook: 0.8
// })
// .setClassToggle(".scene2 img", "abracadabra")
// .addTo(controller)
// .addIndicators()


$("div").each(function(){
    new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0,
        
     })//.setClassToggle(this,"abracadabra")
    .setPin(this,{pushFollowers: false})
    .addIndicators()
    .addTo(controller)
})