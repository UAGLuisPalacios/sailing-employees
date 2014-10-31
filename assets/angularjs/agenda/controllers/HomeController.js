define(function () {
    return ['$scope', '$http', '$log', function($scope, $http,$log) {

//$log is used for console log in Angular js
  //$http is used to communicate with the server 
  //$scope defines the scope of controller
  $scope.empList=[];
  $http.get("http://localhost:1337/expediente/")
       .success(function(data){
        
  
          $log.info(data);
          $scope.empList=data;
          console.log("olo");
          //Update empList with data
          $log.info($scope.empList);
       });
    }];
});