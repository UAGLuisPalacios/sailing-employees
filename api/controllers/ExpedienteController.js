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
      }
};

