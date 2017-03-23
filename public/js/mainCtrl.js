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
  //select
  $scope.calander; //select ng-model
  var month = $scope.total / 30;
  var week = month / 5;
  var day = week / 5;

//yes/no buttons phase
$scope.no = function(){
  console.log("no");
  alert("looooooser"); //maybe change to ng-hide of gif
};

$scope.yes = function(){
  console.log("yes");
  $scope.setAlert = false;
  $scope.result = true;

};





});
