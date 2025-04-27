let controller = new ScrollMagic.Controller()

let scene = new ScrollMagic.Scene({
    triggerElement: ".paralax",
    triggerHook: 1,
    duration: "170%",
})
.setTween(".bg", {y: "-50%" , ease: Linear.easeNode})
.addIndicators()
.addTo(controller)