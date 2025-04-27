$(document).ready(function () {
  let controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: ".item1",
})
    .setClassToggle(".item1 .content", "fade-right")
    .addIndicators()
    .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: ".item1",
})
    .setClassToggle(".item1 .item-image", "fade-left")
    .addIndicators()
    .addTo(controller)

    new ScrollMagic.Scene({
      triggerElement: ".item2",
})
  .setClassToggle(".item2 .content", "fade-left")
  .addIndicators()
  .addTo(controller)

  new ScrollMagic.Scene({
      triggerElement: ".item2",
})
  .setClassToggle(".item2 .item-image", "fade-right")
  .addIndicators()
  .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: ".item3",
})
.setClassToggle(".item3 .content", "fade-right")
.addIndicators()
.addTo(controller)

new ScrollMagic.Scene({
    triggerElement: ".item3",
})
.setClassToggle(".item3 .item-image", "fade-left")
.addIndicators()
.addTo(controller)

});




