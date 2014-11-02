/**
 * ContactoController
 *
 * @description :: Server-side logic for managing contactoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var path = require('path');
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
      },
    updateContactobyCredencial:function(req,res)
      {
        var cred = req.query.credencial;
        console.log("holi");
        Contacto.findOne({credencial:cred})
            .exec(function(err,user){
              if(err)
                res.json({error:err});
              if(user === undefined)
                res.json({notFound:true});
              else{ 
                  console.log("findone")
                    Contacto.update(user.id, function (err) {
                        if (err) return next (err);
                        console.log("redirect")
                        return res.redirect('/sntsa-expedientes#/usuarios/' + cred );
                     });
                 }
             });
      },
    
    create: function(req, res) {
      var params = req.params.all();
      var cred = req.param('credencial');
      Contacto.create(params, function(err, sleep) {
      if (err) return next(err);
      res.status(201);
      return res.redirect('/sntsa-expedientes#/usuarios/'+ cred);
    });
    }
};

