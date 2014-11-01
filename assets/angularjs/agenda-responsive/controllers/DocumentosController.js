define(function () {
    return ['$scope', '$http', '$log','$stateParams', function($scope, $http, $log, $stateParams) {
      $scope.docsList=[];
      $scope.credencialid = $stateParams.credencialid;
      //Initialise Error Handler
      $scope.notFound = false;
      //Do an API Call to findEmployeebyEmpnum with $stateParams.profileid
      $http.get("http://localhost:1337/docs/findDocsbyCredencialnum/"+$scope.credencialid)
           .success(function(data){
              //On successful API CALL check whether empty data is returned or not
              if(data.notFound === true)
              {
                  //If employee not Found set error flag -- ng-show manages the rest 
                  $scope.notFound = true;
                  return;
              }
              $log.info(data);
              console.log("docum");
              $scope.docsList=data.userData;
              //Update empList with data
              $log.info($scope.docsList);
           })
           .error(function(data){
              //Log error Data
              $log.info(data);
           });
      
 
function resetItem(){
   $scope.employee = {
      credencial : '',
      url : '',
      filename : ''
   };              
   $scope.displayForm = '';
   
}
resetItem();
 
 $scope.addItem = function () {
   resetItem();
   $scope.displayForm = true;
 }
 
 
$scope.saveItem = function () {
  var emp = $scope.employee;
      if (emp.id.length == 0){
            $http.get('/employee/create?credencial=' + emp.credencial + '&filename=' +  emp.filename + '&url=' +  emp.url).success(function(data) {
              $scope.items.push(data);
              $scope.displayForm = '';
              removeModal();
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });
          }
          else{
            $http.get('/docs/update/'+ emp.id +'?credencial=' + emp.credencial + '&filename=' +  emp.filename + '&url=' +  emp.url).success(function(data) {
              $scope.displayForm = '';
              removeModal();
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });
          }
        };
 
$scope.editItem = function (data) {       
        $scope.employee = data;
        $scope.displayForm = true;
}
 
        $scope.removeItem = function (data) {
          if (confirm('Do you really want to delete?')){
            $http['delete']('/docs/' + data.id).success(function() {
              $scope.items.splice($scope.items.indexOf(data), 1);
            });
          }
        };
 
        function removeModal(){
          $('.modal').modal('hide');          
      }
 
    }];
});