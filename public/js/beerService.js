app.factory('beerService', function($http){
    
    var calcBeer = function (fee, tlvBeer){
      console.log(fee);
      console.log(tlvBeer);
      var calcAmount = fee / tlvBeer;
      console.log(calcAmount);
    };

    return {calcBeer:calcBeer}
});
