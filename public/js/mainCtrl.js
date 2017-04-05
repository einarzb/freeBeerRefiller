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
$scope.happyHour;

//calculation function
$scope.calcBeer = function(fee){
  if ($scope.fee > 0) {
      //toggle to hide #intro and reveal #result view
      $scope.intro = true;
      $scope.result = false;
      //calculate total
      $scope.total = Math.round((fee / jemsCup));
      console.log($scope.total);
      //calculate daily consumption in between (200 (min) - 2400)
      $scope.dayAmount = Math.round(($scope.total / 30));
      console.log($scope.dayAmount);
    }
     else {
      alert("please fill in an amount");
    };
    //day amount
    if ($scope.dayAmount === 1 ) {
      console.log("1 cup a day");
      $scope.pluralSingle = "";
    } else {
      console.log("cups in plural");
      $scope.pluralSingle = "s";
    }
  //AA alert - change it to switches
 //    if ($scope.dayAmount > 1){
 //      $scope.pluralSingle = "s";
 // else {
 //
 // }
 //    };
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


$scope.setBeerAlert = function(happyHour){
  $scope.alertStart = false;
  $scope.setAlert = true;

  var dateString = $scope.happyHour;
  var dateString = dateString.split(' ').slice(0, 3).join(' ');
  console.log(dateString);
};
//todo: if total < 100 its not good. must be starting from 200
//if total > 1000. 1500 = 6 beers a day . 2400 - 9 cups AA
// if total > 2400 then calculate month consupmtion and week and day



});
