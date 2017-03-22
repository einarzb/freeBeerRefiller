app.controller('mainCtrl', function($scope, beerService) {
$scope.check = false;
$scope.resultPannel = true;
$scope.fee;
$scope.amountMonth;
$scope.amountDay;

$scope.calcBeer = function (fee, tlvBeer) {
  tlvBeer = 30;
  console.log(fee);
  console.log(tlvBeer);
  beerService.calcBeer(fee, tlvBeer);
  $scope.check = false;
  $scope.resultPannel =! $scope.resultPannel;
};


});