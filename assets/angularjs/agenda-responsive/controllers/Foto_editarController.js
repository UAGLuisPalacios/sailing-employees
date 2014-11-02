define(function () {
    return ['$scope', '$http', '$log','$stateParams','$timeout', function($scope, $http, $log, $stateParams,$timeout)
            {
      //Store empnum in Controller
      $scope.credencialid = $stateParams.credencialid;
      $timeout(function(){
            $scope.decachedImageUrl = 'images/' + $stateParams.credencialid + '.jpg?decache=' + Math.random();
                           }, 1000);
    }];
});