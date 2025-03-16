const controller = new ScrollMagic.Controller();

let anim = new TimelineMax()
.fromTo("section:nth-child(2)", {x: "-100%"}, {x: "0%", ease: Linear.easeNode})
.fromTo("section:nth-child(3)", {x: "100%"}, {x: "0%", ease: Linear.easeNode})
.fromTo("section:nth-child(4)", {y: "-100%"}, {y: "0%", ease: Linear.easeNode})

$("section").each(function(i){
    new ScrollMagic.Scene({
        triggerElement: "#main",
        triggerHook: "onLeave",
        duration: "300%"
    }).addIndicators()
    .setPin("#main")
    .setTween(anim)
    .addTo(controller)
})