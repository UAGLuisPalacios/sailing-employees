define(['angular','angular-cookies','ui-bootstrap','angular-ui-router','controllers'], function (angular) {
    'use strict';  
    var app =  angular.module('Dashboard', ['controllers','ui.bootstrap', 'ui.router', 'ngCookies']);
    
    angular.module('Dashboard').config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'sntsa-expedientes/dashboard'
        })
        .state('expedientes', {
            url: '/expedientes', 
            templateUrl: 'sntsa-expedientes/expedientes',
            controller: 'ExpedientesController'
        })
        .state('usuarios/:credencialid', {
            url: '/usuarios/:credencialid', 
            templateUrl: 'sntsa-expedientes/usuarios',
            controller: 'UsuariosController'
        })
        .state('contacto/:credencialid', {
            url: '/contacto/:credencialid', 
            templateUrl: 'sntsa-expedientes/contacto',
            controller: 'ContactoController'
        })
        .state('documentos/:credencialid', {
            url: '/documentos/:credencialid', 
            templateUrl: 'sntsa-expedientes/documentos',
            controller: 'DocumentosController'
        })
        .state('expediente_nuevo', {
            url: '/expediente_nuevo', 
            templateUrl: 'sntsa-expedientes/expediente_nuevo'
        })
        .state('editar_expediente/:credencialid', {
                url: '/editar_expediente/:credencialid', 
                templateUrl: 'sntsa-expedientes/editar_expediente',
                controller: 'Expediente_editarController'
        })
        .state('contacto_editar/:credencialid', {
                url: '/contacto_editar/:credencialid', 
                templateUrl: 'sntsa-expedientes/contacto_editar',
                controller: 'Contacto_editarController'
        })
        .state('buscar_expediente', {
                url: '/buscar_expediente', 
                templateUrl: 'sntsa-expedientes/buscar_expediente'
        })
        .state('foto_editar/:credencialid', {
                url: '/foto_editar/:credencialid', 
                templateUrl: 'sntsa-expedientes/foto_editar',
                controller: 'Foto_editarController'
        });
    }]);
    
    /**
 * Master Controller
 */
angular.module('Dashboard')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     *
     */
    var mobileView = 992;

    $scope.getWidth = function() { return window.innerWidth; };

    $scope.$watch($scope.getWidth, function(newValue, oldValue)
    {
        if(newValue >= mobileView)
        {
            if(angular.isDefined($cookieStore.get('toggle')))
            {
                if($cookieStore.get('toggle') == false)
                {
                    $scope.toggle = false;
                }            
                else
                {
                    $scope.toggle = true;
                }
            }
            else 
            {
                $scope.toggle = true;
            }
        }
        else
        {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() 
    {
        $scope.toggle = ! $scope.toggle;

        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() { $scope.$apply(); };
}

/**
 * Alerts Controller
 */
angular.module('Dashboard').controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {
    $scope.alerts = [
        { type: 'success', msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!' },
        { type: 'danger', msg: 'Found a bug? Create an issue with as many details as you can.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}
/**
 * Loading Directive
 * @see http://tobiasahlin.com/spinkit/
 */
angular.module('Dashboard').directive('rdLoading', rdLoading);

function rdLoading () {
    var directive = {
        restrict: 'AE',
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    };
    return directive;
};
    
    return app;
}); 