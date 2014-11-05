/**
 * ExpedienteController
 *
 * @description :: Server-side logic for managing expedientes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    count:function(req,res)
      {
        Expediente.count(function (err, num) {
        if(err) {
           return console.log(err);
        }
        console.log(num);
        });
      },

	findExpedientebyCredencialnum:function(req,res)
      {
        var id = req.param('id');
        Expediente.findOne({credencial:id})
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
      Expediente.create(params, function(err, sleep) {
      if (err) return next(err);
      res.status(201);
      return res.redirect('/contacto/create?credencial='+ cred + '&email=email@example.com&telefono=telefono&celular=celular');
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

        Expediente.update(id, criteria, function (err, expediente) {

            if(expediente.length === 0) return res.notFound();

            if (err) return next(err);

            return res.redirect('/sntsa-expedientes#/usuarios/' + cred );

        });
    }
};

