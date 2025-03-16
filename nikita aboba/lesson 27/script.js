
const controller = new ScrollMagic.Controller();

$("section").each(function(i){
    new SCrollMagic.Scene({
        triggerElement: this
    }).addIndicators
    .setClassToggle("section:nth-child("+ (i +2) + ") .box","active")
    .addTo(controller)
})
