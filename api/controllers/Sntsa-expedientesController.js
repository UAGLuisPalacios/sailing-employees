/**
 * Sntsa-expedientesController
 *
 * @description :: Server-side logic for managing sntsa-expedientes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req, res) {
    res.view('responsive-sailors/index', {
        title: "Agenda-app"
    });
    },
    dashboard: function (req, res) {
    res.view('responsive-sailors/dashboard', {
        title: "Agenda-app"
    });
    },
    expedientes: function (req, res) {
    res.view('responsive-sailors/expedientes', {
        title: "Agenda-app"
    });
    },
    usuarios: function (req, res) {
    res.view('responsive-sailors/usuarios', {
        title: "Agenda-app"
    });
    },
    contacto: function (req, res) {
    res.view('responsive-sailors/contacto', {
        title: "Agenda-app"
    });
    },
    documentos: function (req, res) {
    res.view('responsive-sailors/documentos', {
        title: "Agenda-app"
    });
    }
};

