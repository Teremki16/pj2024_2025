let controller = new ScrollMagic.Controller()

let scene = new ScrollMagic.Scene({
    triggerElement: ".paralax",
    triggerHook: 0.5,
    duration: "200%"
})
.setTween(".bg", {y:"100%", ease: Linear.easeNode

})
.addIndicators()
.addTo(controller)