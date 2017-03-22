app.controller('mainCtrl', function($scope, beerService) {
$scope.check = false;
$scope.resultPannel = true;
$scope.tlvBeer = 30;
$scope.fee;
$scope.amountMonth;
$scope.amountDay;

$scope.calcBeer = function (fee) {
  alert("im pressed");
  beerService.calcBeer(fee);
  $scope.check = false;
  $scope.resultPannel =! $scope.resultPannel;
};


});