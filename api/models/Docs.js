/**
* Docs.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      credencial:{
        type:"int",
        required:true,
        unique: false
      },
      filename:{
        type:"string",
        required:true,
        unique: true
      },
      extension:{
        type:"string",
        required:true,
        unique: false
      },
      url:{
        type:"string",
        required:true
      }
  }
    /*,
    afterCreate: function(values, next){
        var viewPath = '/responsive-sailors/documentos';
        sails.renderView(viewPath, { title: 'Express' }, next);
        next();
    }*/
};

