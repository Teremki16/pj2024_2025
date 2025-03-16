let controller = new ScrollMagic.Controller();

$("div").each(function () {
    new ScrollMagic.Scene({
        triggerElement: this,
       
    })
    // .setClassToggle(this, "abracadabra")
    .setPin(this, {
        pushFollowers: false})
    .addIndicators()
    .addTo(controller)
        

})