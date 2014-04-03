// A $( document ).ready() block.
  $(function() {
    // Create Horizontal Scroll for each project
    var $thingToSize = $('.scroller');
    $thingToSize.each(function(i, scroller) {
      var $boxesInThing = $(scroller).find('.tl-node'),
          totalWidth = 200; // add any additional space here
      $boxesInThing.each(function(i, box) {
          totalWidth += $(box).outerWidth(true);
          //Finish width sizing

      // $obj = $(this).parent().parent().parent();
      // $obj2 = $('.shadow');

      // var setHue = Math.round( Math.random() * 360 );
      // var setSat = Math.round( Math.random() * 100 + 2 );
      // var setLight = Math.round( Math.random() * 120 + 1 );

      // var newColor = "hsl(" + setHue + ", " + setSat + "%, " + setLight + "%)";
      // var shadowColor = "hsl(" + setHue + ", " + setSat + "%, " + (setLight - 10)+ "%)";

      // $obj.css({ "background-color": newColor });
      // $obj2.css({ "color": shadowColor });

    }); // End Each loop
    $(scroller).css('width', totalWidth);



  });
});