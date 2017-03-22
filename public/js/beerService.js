app.factory('beerService', function($http){
    
    var calcBeer = function (fee, tlvBeer){
      console.log(fee);
      console.log(tlvBeer);
      var monthAmount = fee / tlvBeer;
      console.log(monthAmount);
      var weekAmount = monthAmount / 5;
      console.log(weekAmount);
      var dayAmount = weekAmount / 10 //10 is max beers per day
      console.log(dayAmount);
    };

    return {calcBeer:calcBeer}
});
