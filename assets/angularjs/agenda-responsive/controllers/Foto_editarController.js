define(function () {
    return ['$scope', '$http', '$log','$stateParams','$timeout', function($scope, $http, $log, $stateParams,$timeout)
            {
      //Store empnum in Controller
      $scope.credencialid = $stateParams.credencialid;
      $scope.version = 0;
      $scope.id = -1;
      $http.get("http://localhost:1337/fotos/findPhotobyCredencialnum/"+$scope.credencialid)
           .success(function(data){
              //On successful API CALL check whether empty data is returned or not
              if(data.notFound === true)
              {
                  //If employee not Found set error flag -- ng-show manages the rest 
                  $scope.notFound = true;
                  return;
              }
                var a = parseInt(data.userData.version);
                $scope.version = a;
                $scope.id = data.userData.id;
                
            $scope.decachedImageUrl = 'images/' + $stateParams.credencialid + $scope.version + '.jpg?decache=' + Math.random();
                //$scope.employee=data.userData;
           })
           .error(function(data){
              //Log error Data
              $log.info(data);
           });
                
      //$timeout(function(){
                           //}, 1000);
    }];
});