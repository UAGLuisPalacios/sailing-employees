/**
 * FotosController
 *
 * @description :: Server-side logic for managing fotos
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    findPhotobyCredencialnum:function(req,res)
      {
        var id = req.param('id');
        Fotos.findOne({credencial:id})
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
      Fotos.create(params, function(err, foto) {
      if (err) return next(err);
      res.status(201);
      return res.redirect('/sntsa-expedientes#/usuarios/'+ cred);
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

        Fotos.update(id, criteria, function (err, fotos) {
            
            //if(fotos.length === 0) return res.notFound();    
            if (err) return next(err);

            return res.redirect('/sntsa-expedientes#/usuarios/' + cred );

        });
    }
};

