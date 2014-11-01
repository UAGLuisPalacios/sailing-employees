define(function (require) {
   
  var angular = require('angular'),
  Controllers = angular.module('controllers', []);
   
  Controllers.controller('HomeController', require('controllers/HomeController'));
  Controllers.controller('ExpController', require('controllers/ExpController'));
  Controllers.controller('ContactController', require('controllers/ContactController'));
  Controllers.controller('addDocumentController', require('controllers/addDocumentController'));
  return Controllers;
   
});