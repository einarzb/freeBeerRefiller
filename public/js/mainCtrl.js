app.controller('mainCtrl', function($scope, beerService) {
//toggling view
$scope.intro = false;
$scope.resultPannel = true;
$scope.alertStart = true;
//intialize storage
$scope.total = 0;
//user input
$scope.fee;

//calculation function
$scope.calcBeer = function(fee){
  alert("im calc button" + fee);
};

});
