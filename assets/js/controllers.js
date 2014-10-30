define(function (require) {
   
  var angular = require('angular'),
  Controllers = angular.module('controllers', []);
   
  Controllers.controller('angEmpController', require('controllers/angEmployeeController'));
  Controllers.controller('EmpController', require('controllers/EmpController'));
  Controllers.controller('ProfileController', require('controllers/ProfileController'));
  return Controllers;
   
});