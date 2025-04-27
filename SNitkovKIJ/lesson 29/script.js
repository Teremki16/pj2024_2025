let controller = new ScrollMagic.Controller();

let Scene = new ScrollMagic.Scene({
    triggerElement: "div",
    triggerHook: 1 ,
    duration: "200%"
})
    .setTween(".bg", {y: "-50%", ease: Linear.easeNone})
    .setIndicators()
    .addTo(controller);