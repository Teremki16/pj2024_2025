let controller = new ScrollMagic.Controller();

$("section").each(function (i) {
    let anim = new TimelineMax()
    .fromTo(`section:nth-child(${i + 2}) img`, {
        x: -200,
    },{
        x: 200,
        ease: Linear.easeNode
    })
    .fromTo(`section:nth-child(${i + 2}) img`, {
        x: 200,
    },{
        x: -200,
        ease: Linear.easeNode
    })
    .fromTo(`section:nth-child(${i + 2}) img`, {
        transform: "rotate(0deg)",
    },{
        transform: "rotate(180deg)",
        ease: Linear.easeNode
    })

    new ScrollMagic.Scene({
        triggerElement: `section:nth-child(${i + 2})`,
        triggerHook: 0.8,
        duration: "100%"
    })
        .setTween(anim)
        .addIndicators()
        .addTo(controller);
});
