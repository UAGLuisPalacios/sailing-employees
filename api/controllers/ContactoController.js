/**
 * ContactoController
 *
 * @description :: Server-side logic for managing contactoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var path = require('path');
module.exports = {
    count:function(req,res)
      {
        Contacto.count(function (err, num) {
        if(err) {
           return console.log(err);
        }
        console.log(num);
        });
      },
    
	findContactobyCredencialnum:function(req,res)
      {
        var id = req.param('id');
        Contacto.findOne({credencial:id})
            .exec(function(err,user){

              if(err)
                res.json({error:err});
              if(user === undefined)
                res.json({notFound:true});
              else
                res.json({notFound:false,userData:user});
            });
      },
    
    create: function(req, res) {
      var params = req.params.all();
      var cred = req.param('credencial');
      Contacto.create(params, function(err, sleep) {
      if (err) return next(err);
      res.status(201);
      return res.redirect('/fotos/create?credencial='+ cred + '&version=0');
    });
    },
    
    update: function (req, res, next) {

        var criteria = {};
        var cred = req.param('credencial');

        criteria = _.merge({}, req.params.all(), req.body);

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id provided.');
        }

        Contacto.update(id, criteria, function (err, contacto) {

            if(contacto.length === 0) return res.notFound();

            if (err) return next(err);

            return res.redirect('/sntsa-expedientes#/contacto/' + cred );

        });
    }
};

