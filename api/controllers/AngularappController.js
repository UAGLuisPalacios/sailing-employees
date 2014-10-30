/**
 * AngularappController
 *
 * @description :: Server-side logic for managing angularapps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req, res) {
    res.view('angularapp/index', {
        title: "Angularapp"
    });
    },
    home: function (req, res) {
    res.view('angularapp/home', {
        title: "Angularapp"
    });
    },
    profile: function (req, res) {
    res.view('angularapp/profile', {
        title: "Angularapp"
    });
    }
};

