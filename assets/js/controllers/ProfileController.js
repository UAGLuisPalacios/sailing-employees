define(function () {
    return ['$scope', '$http', '$log','$routeParams', function($scope, $http, $log, $routeParams) {
      //Store empnum in Controller
      $scope.profileid = $routeParams.profileid;
      //Initialist the employee Data
      $scope.employee={};
      //Initialise Error Handler
      $scope.notFound = false;
      //Do an API Call to findEmployeebyEmpnum with $routeParams.profileid
      $http.get("http://localhost:1337/employee/findEmployeebyPhonenum/"+$scope.profileid)
           .success(function(data){
              //On successful API CALL check whether empty data is returned or not
              if(data.notFound === true)
              {
                  //If employee not Found set error flag -- ng-show manages the rest 
                  $scope.notFound = true;
                  return;
              }
              //if employee found copy employee Data
              $scope.employee=data.userData;
              //Log the data
              $log.info(data);
           })
           .error(function(data){
              //Log error Data
              $log.info(data);
           });
    }];
});