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
    }
};

