app.controller('mainCtrl', function($scope, beerService) {
$scope.resultPannel = false;
$scope.tlvBeer = 30;
$scope.fee;
$scope.freeBeer = $scope.fee / $scope.tlvBeer;

console.log(freeBeer);
console.log(tlvBeer);


$scope.resultPannel =! $scope.resultPannel;

});
