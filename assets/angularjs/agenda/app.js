define(['angular','angular-route','controllers'], function (angular) {
    'use strict';  
    var app =  angular.module('agenda', ['controllers', 'ngRoute']);
    
    app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
                          templateUrl:'agenda-app/home',
                          controller:'HomeController'
                  })
                  //.when adds new route definition to $route service
                 .when('/expediente/:credencialid',{
                          //Profile View Routing to profile.html and controller - ProfileController
                          templateUrl:'agenda-app/expediente',
                          controller:'ExpController'
                  })
                 .when('/contacto/:credencialid',{
                          //Profile View Routing to profile.html and controller - ProfileController
                          templateUrl:'agenda-app/contacto',
                          controller:'ContactController'
                  })
                  .when('/docs/:credencialid',{
                          //Profile View Routing to profile.html and controller - ProfileController
                          templateUrl:'agenda-app/addDocument',
                          controller:'addDocumentController'
                  })
                  .otherwise({
                          //default routing
                          redirectTo:'/'
                  });
}]);
    
    return app;
}); 