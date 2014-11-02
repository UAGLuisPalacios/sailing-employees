define(function () {
    return ['$scope', '$http', '$log','$stateParams','$window', function($scope, $http, $log, $stateParams,$window) {
      //Store empnum in Controller
      $scope.credencialid = $stateParams.credencialid;
      //Initialist the employee Data
      $scope.employee={};
      $scope.$window = $window;
      //Initialise Error Handler
      $scope.notFound = false;
      //Do an API Call to findEmployeebyEmpnum with $stateParams.profileid
      $http.get("http://localhost:1337/contacto/findContactobyCredencialnum/"+$scope.credencialid)
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
        
    $scope.saveItem = function () {
        console.log("angularContacto");
        var emp = $scope.employee;
        window.location = "sntsa-expedientes#/contacto/"+$scope.credencialid;
        //$http.get('/contacto/updateContactobyCredencial/?credencial=' + emp.credencial + '&email=' +  emp.email + '&telefono=' +  emp.telefono + '&celular=' +  emp.celular).success(function(data) {
                //}).
        error(function(data, status, headers, config) {
            alert(data.summary);
        }); 
    };
        
    }];
});