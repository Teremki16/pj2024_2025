$(document).ready(function () {
  //ScrollMagic controller init
  let controller = new ScrollMagic.Controller();

  // Write your code here
  new ScrollMagic.Scene({
    triggerElement: ".item1",
    
  })
  .setClassToggle(".item1 .content", "fade-right")
  .addIndicators()
  .addTo (controller);

  new ScrollMagic.Scene({
    triggerElement: ".item1",
    
  })
  .setClassToggle(".item1 .item-image", "fade-left")
  .addIndicators()
  .addTo (controller);


  new ScrollMagic.Scene({
    triggerElement: ".item2",
    
  })
  .setClassToggle(".item2 .content", "fade-left")
  .addIndicators()
  .addTo (controller);

  new ScrollMagic.Scene({
    triggerElement: ".item2",
    
  })
  .setClassToggle(".item2 .item-image", "fade-right")
  .addIndicators()
  .addTo (controller);

  new ScrollMagic.Scene({
    triggerElement: ".item1",
    
  })
  .setClassToggle(".item3 .content", "fade-right")
  .addIndicators()
  .addTo (controller);

  new ScrollMagic.Scene({
    triggerElement: ".item1",
    
  })
  .setClassToggle(".item3 .item-image", "fade-left")
  .addIndicators()
  .addTo (controller);
});
