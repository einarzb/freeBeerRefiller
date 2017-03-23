app.controller('mainCtrl', function($scope, beerService) {
//toggling view
$scope.intro = false;
$scope.result = true;
$scope.alertStart = true;
//intialize storage
$scope.total = 0;
//user input
$scope.fee;

//calculation function #intro
$scope.calcBeer = function(fee){
  //toggle to hide #intro and reveal #result view
  $scope.intro = true;
  $scope.result = false;
};

});
