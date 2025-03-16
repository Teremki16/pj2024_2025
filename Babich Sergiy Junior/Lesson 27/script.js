
let controller = new ScrollMagic.Controller();

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