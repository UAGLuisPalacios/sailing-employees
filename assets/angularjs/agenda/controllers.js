define(function (require) {
   
  var angular = require('angular'),
  Controllers = angular.module('controllers', []);
   
  Controllers.controller('addExpController', require('controllers/addExpController'));
  Controllers.controller('HomeController', require('controllers/HomeController'));
  Controllers.controller('ExpController', require('controllers/ExpController'));
  return Controllers;
   
});