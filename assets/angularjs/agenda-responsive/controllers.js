define(function (require) {
   
  var angular = require('angular'),
  Controllers = angular.module('controllers', []);
   
  Controllers.controller('ExpedientesController', require('controllers/ExpedientesController'));
  Controllers.controller('UsuariosController', require('controllers/UsuariosController'));
  Controllers.controller('ContactoController', require('controllers/ContactoController'));
  Controllers.controller('DocumentosController', require('controllers/DocumentosController'));
  return Controllers;
   
});