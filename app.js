(function () {
  'user strict';
  angular.module('AngularApp', [])

  .controller('control', control);

  control.$inject = ['$scope'];

  function control($scope) {
    $scope.output = "";
    $scope.showMessage = function() {
      arr = $scope.name;
      if (arr !== undefined) {
        arr = $scope.name.split(",");
        console.log(arr.length);
        if (arr.length <= 3) {
          $scope.output = "Enjoy!";
        } else if (arr.length > 3){
          $scope.output = "This is too much!";
        }
      } else {
        $scope.output = "Please enter data!";
      }
    };
  }
})();
