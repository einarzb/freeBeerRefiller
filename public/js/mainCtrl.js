app.controller('mainCtrl', function($scope, beerService) {
//toggling view
$scope.intro = false;
$scope.result = true;
$scope.setAlert = true;
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
  $scope.total = Math.round((fee / jemsCup));
  console.log($scope.total);
  $scope.dayAmount = Math.round(($scope.total / 30));
  console.log($scope.dayAmount);
};

//yes/no buttons phase
$scope.no = function(){
  console.log("no");
  alert("looooooser"); //maybe change to ng-hide of gif
};

$scope.yes = function(){
  console.log("yes");
  //toggeling views
  $scope.setAlert = false;
  $scope.result = true;
};

//todo: if total < 100 its not good. must be starting from 200
//if total > 1000. 1500 = 6 beers a day . 2400 - 9 cups AA
// if total > 2400 then calculate month consupmtion and week and day



});
