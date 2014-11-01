require.config({
urlArgs: "bust=" + (new Date()).getTime(),
paths: {
'angular': '../../vendor/angular/angular',
'angular-cookies': '../../vendor/angular-cookies/angular-cookies',
'angular-ui-router': '../../vendor/angular-ui-router/angular-ui-router',
'ui-bootstrap': '../../vendor/angular-bootstrap/ui-bootstrap-tpls',
'jquery': '../../vendor/jquery/jquery'
},
/**
* for libs that either do not support AMD out of the box, or
* require some fine tuning to dependency mgt'
*/
shim: {
'bootstrapJs': ['jquery'],
'angular': {'exports': 'angular'},
'angular-cookies': ['angular'],
'angular-ui-router': ['angular'],
'ui-bootstrap': ['angular']
},
    priority:
    ['angular']
});
window.name = "NG_DEFER_BOOTSTRAP!";
require([
'angular',
'app'
], function(angular, app) {
'use strict';
var $html = angular.element(document.getElementsByTagName('html')[0]);
angular.element().ready(function() {
angular.resumeBootstrap([app['name']]);
});



}
);