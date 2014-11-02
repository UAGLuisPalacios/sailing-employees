define(function () {
    return ['$scope', '$http', '$log','$stateParams', function($scope, $http, $log, $stateParams) {
      //Store empnum in Controller
      $scope.credencialid = $stateParams.credencialid;
      $scope.decachedImageUrl = 'images/' + $stateParams.credencialid + '.jpg?decache=' + Math.random();
    }];
});