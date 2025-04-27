let controller = new ScrollMagic.Controller()

let scene = new ScrollMagic.Scene({
    triggerElement: ".paralax",
    triggerHook: 0.5,
    duration: "100%"
})
.setTween(".bg", {y: "100%", ease: Linear.easeNode})
.addIndicators()
.addTo(controller)