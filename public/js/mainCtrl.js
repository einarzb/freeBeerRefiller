app.controller('mainCtrl', function($scope, beerService) {
//toggling view
$scope.intro = false;
$scope.result = true;
$scope.setAlert = true;
$scope.alertStart = true;
$scope.smallAmount = false;
$scope.bigAmount = true

//intialize global vars
$scope.total = 0;
var jemsCup = 9;


//user input
$scope.fee;
$scope.time = {
  selectedTime: new Date()
};

//calculation function
$scope.calcBeer = function(fee){
  if ($scope.fee > 0) {
      //toggle to hide #intro and reveal #result view
      $scope.intro =! $scope.intro;
      $scope.result =! $scope.result;
      //calculate total
      $scope.total = Math.round((fee / jemsCup));
      console.log($scope.total);
      //calculate daily consumption
      $scope.dayAmount = Math.round(($scope.total / 30));
      console.log($scope.dayAmount);
      //calculate weekly consumption
      $scope.weekAmount =  Math.round(($scope.total / 7));
      console.log($scope.weekAmount + " beers a week");
    }
     else {
      alert("please fill in an amount");
    };

    //day amount equal to 1 cup then its not plural
    if ($scope.dayAmount === 1 ) {
      console.log("1 cup a day");
      $scope.pluralSingle = "";
    //if day amount is smaller then 0 cup per day then it shows only total
    } else if ($scope.dayAmount === 0) {
      $scope.smallAmount =! $scope.smallAmount;
      console.log("small amount for daily suggestion");
   } else if ($scope.dayAmount > 8) {
      console.log("too much beers for one day");
      $scope.pluralSingle = "s";
      $scope.smallAmount =! $scope.smallAmount;
      $scope.bigAmount =! $scope.bigAmount;

    //if day amount bigger than 1 cup a day than it turn into cups
    } else {
      console.log("cups in plural");
      $scope.pluralSingle = "s";
    }

};

//yes/no buttons phase
$scope.no = function(){
  console.log("no");
  alert("looooooser"); //maybe change to ng-hide of gif
};

$scope.yes = function(){
  console.log("yes");
  //toggeling views
  $scope.setAlert =! $scope.setAlert;
  $scope.result =! $scope.result;
};

//setting happyhour and refill
$scope.setBeerAlert = function(){
  console.log($scope.time.selectedTime);
  $scope.alertStart =! $scope.alertStart;
  $scope.setAlert =! $scope.setAlert;

};
//setting first alert
$scope.start = function (time, refill) {
  //needs to get the dayAmount
  confirm("you need to drink " + $scope.dayAmount + " beers a Day" );
}


//todo: if total < 100 its not good. must be starting from 200
//if total > 1000. 1500 = 6 beers a day . 2400 - 9 cups AA
// if total > 2400 then calculate month consupmtion and week and day



});
