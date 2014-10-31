/**
 * FotosController
 *
 * @description :: Server-side logic for managing fotos
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	fotos: function (req, res) {
    res.view('sailing-diary/index', {
        title: "Agenda-app"
    });
    },
};

