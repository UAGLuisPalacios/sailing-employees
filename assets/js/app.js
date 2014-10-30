define(['angular','angular-route','controllers'], function (angular) {
    'use strict';  
    var app =  angular.module('employee', ['controllers', 'ngRoute']);
    
    app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
                          templateUrl:'angularapp/home',
                          controller:'EmpController'
                  })
                  //.when adds new route definition to $route service
                 .when('/profile/:profileid',{
                          //Profile View Routing to profile.html and controller - ProfileController
                          templateUrl:'angularapp/profile',
                          controller:'ProfileController'
                  })
                  .otherwise({
                          //default routing
                          redirectTo:'/'
                  });
}]);
    
    return app;
}); 