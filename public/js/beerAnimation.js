$('.calc').on("click", function() {
  $('.pour') //Pour Me Another Drink, Bartender!
    .delay(200)
    .animate({
      top:'10px',
      height: '360px'
    }, 1000)
    .delay(1600)
    .slideUp(500);

  $('#liquid') // I Said Fill 'Er Up!
    .delay(400)
    .animate({
      height: '170px'
    }, 2500);

  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(400)
    .animate({
      bottom: '200px'
      }, 2500);
  });
