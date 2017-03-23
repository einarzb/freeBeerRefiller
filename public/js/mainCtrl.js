app.controller('mainCtrl', function($scope, beerService) {
//toggling view
$scope.intro = false;
$scope.result = true;
$scope.alertStart = true;
//intialize global vars
$scope.total = 0;
var jemsCup = 9;
//user input
$scope.fee;

//calculation function #intro
$scope.calcBeer = function(fee){
  //toggle to hide #intro and reveal #result view
  $scope.intro = true;
  $scope.result = false;
  //calculate total
  $scope.total = (fee / jemsCup);
  console.log($scope.total);
};

});
