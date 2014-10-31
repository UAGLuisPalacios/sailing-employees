/**
 * ContactoController
 *
 * @description :: Server-side logic for managing contactoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
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
      }
};

