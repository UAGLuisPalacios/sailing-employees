/**
 * ExpedienteController
 *
 * @description :: Server-side logic for managing expedientes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
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
    }
};

