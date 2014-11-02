/**
 * FileController
 *
 * @description :: Server-side logic for managing Files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var path = require('path');
var fs = require('fs');

module.exports = {
	upload: function  (req, res) {
      if(req.method === 'GET')
          return res.json({'status':'GET not allowed'});                       // Call to /upload via GET is error
        
      var uploadOptions = {
        dirname: sails.config.appPath + '/assets/images',
        saveAs: function (__newFileStream,cb) { cb(null, req.param('title')+path.extname(__newFileStream.filename)); },
        maxBytes: 20 * 1000 * 1000
      }
      
      req.file('uploadFile').upload(uploadOptions,function onUploadComplete (err,files){
        if(err){
            return res.serverError(err);
        }
        else{
            return res.redirect('sntsa-expedientes#/foto_editar/' + req.param('title'));
        }
      });
  },
  
    docload: function  (req, res) {
      if(req.method === 'GET')
          return res.json({'status':'GET not allowed'});                       // Call to /upload via GET is error
      var uploadOptions = {
        dirname: sails.config.appPath + '/assets/documentos/'+req.param('credencialid'),
        saveAs: function (__newFileStream,cb) { cb(null, req.param('title')+path.extname(__newFileStream.filename)); },
        maxBytes: 20 * 1000 * 1000
      }
      req.file('uploadFile').upload(uploadOptions,function onUploadComplete (err,files){
        if(err){
            return res.serverError(err);
        }
        else{
            console.log(files[0].filename);
          //res.json({status:200,file:files});
          return res.redirect('/docs/create?credencial=' +  req.param('credencialid') + '&filename=' +  req.param('title') + '&url=/assets/documentos/'+ req.param('credencialid') + '&extension=' + path.extname(files[0].filename));
        }
      });
  },
    
    downloadImagebyCredencialnum: function(req,res)
      {
        var id = req.param('id');
        Expediente.findOne({credencial:id})
            .exec(function(err,user){

              if(err)
                res.json({error:err});
              else{
               var file = sails.config.appPath + '/assets/images/' + id + '.jpg';
               res.download(file);}
            });
      },
    
    downloadFilebyurl: function(req,res)
      {   
               var url = req.query.url;
               var file = sails.config.appPath + '/' + url;
               res.download(file);
      },
    
    deleteFilebyurl: function(req,res)
      {   
          var url = req.query.url;
          var cred = req.query.credencial;
          var filename = req.query.filename;
          var file = sails.config.appPath + '/' + url;
          fs.unlink(file, function() {
                return res.redirect('/docs/deleteDocsbyFilename/?filename=' +  filename + '&credencial=' + cred)   
          });
      }
};

