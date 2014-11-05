/**
 * DocsController
 *
 * @description :: Server-side logic for managing docs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var path = require('path');

module.exports = {
    count:function(req,res)
      {
        Docs.count(function (err, num) {
        if(err) {
           return console.log(err);
        }
        console.log(num);
        });
      },
    
	findDocsbyCredencialnum:function(req,res)
      {
        var id = req.param('id');
        Docs.find({credencial:id})
            .exec(function(err,user){

              if(err)
                res.json({error:err});
              if(user === undefined)
                res.json({notFound:true});
              else
                res.json({notFound:false,userData:user});
            });
      },
    
    deleteDocsbyFilename:function(req,res)
      {
        var cred = req.query.credencial;
        var filen = req.query.filename;
        Docs.findOne({filename:filen})
            .exec(function(err,user){
              if(err)
                res.json({error:err});
              if(user === undefined)
                res.json({notFound:true});
              else{ 
                    Docs.destroy(user.id, function (err) {
                        if (err) return next (err);
                        return res.redirect('/sntsa-expedientes#/documentos/'+ cred)
                     });
                 }
             });
      },
    
    create: function(req, res, next) {
      var params = req.params.all();
      var cred = req.param('credencial');
      Docs.create(params, function(err, sleep) {
      if (err) return next(err);
      res.status(201);
      return res.redirect('/sntsa-expedientes#/documentos/'+ cred);
    });
    }
};

