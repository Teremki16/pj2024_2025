let controller = new ScrollMagic.Controller();

// let scene1 = new ScrollMagic.Scene({
//     triggerElement: ".scene1",
//     offset: 500,
//     triggerHook: 0.7
// })
// .setClassToggle(".scene1 img", "abracadabra")
// .addIndicators()
// .addTo(controller)

// let scene2 = new ScrollMagic.Scene({
//     triggerElement: ".scene2",
//     offset: 500,
//     triggerHook: 0.7
// })
// .setClassToggle(".scene2 img", "abracadabra")
// .addIndicators()
// .addTo(controller)

$("div").each(function(){
    new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0,
    })
    // .setClassToggle(this, "abracadabra")
    .setPin(this, {pushFollowers: false})
    .addIndicators()
    .addTo(controller)
})