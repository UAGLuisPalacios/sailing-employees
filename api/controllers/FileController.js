/**
 * FileController
 *
 * @description :: Server-side logic for managing Files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var path = require('path');
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
          console.log(files);
          res.json({status:200,file:files});
        }
      });
  },
  
    docload: function  (req, res) {
      if(req.method === 'GET')
          return res.json({'status':'GET not allowed'});                       // Call to /upload via GET is error
        
      var uploadOptions = {
        dirname: sails.config.appPath + '/assets/documentos/'+req.param('title'),
        saveAs: function (__newFileStream,cb) { cb(null, req.param('title')+path.extname(__newFileStream.filename)); },
        maxBytes: 20 * 1000 * 1000
      }
      
      req.file('uploadFile').upload(uploadOptions,function onUploadComplete (err,files){
        if(err){
            return res.serverError(err);
        }
        else{
          console.log(files);
          res.json({status:200,file:files});
        }
      });
  }
};

