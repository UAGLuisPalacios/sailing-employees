/**
 * ExpedienteController
 *
 * @description :: Server-side logic for managing expedientes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req, res) {
    res.view(null, {
        title: "Expediente"
    });
    }
};

