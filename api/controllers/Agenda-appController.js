/**
 * Agenda-appController
 *
 * @description :: Server-side logic for managing agenda-apps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req, res) {
    res.view('sailing-diary/index', {
        title: "Agenda-app"
    });
    },
    home: function (req, res) {
    res.view('sailing-diary/home', {
        title: "Agenda-app"
    });
    },
    expediente: function (req, res) {
    res.view('sailing-diary/expediente', {
        title: "Agenda-app"
    });
    }
};

