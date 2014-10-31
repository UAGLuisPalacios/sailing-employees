/**
* Expediente.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      credencial:{
        type:"int",
        required:true,
        unique: true
      },
      nombre:{
        type:"string",
        required:true
      },    
      apellidop:{
        type:"string",
        required:true
      }, 
      apellidom:{
        type:"string",
        required:true
      }, 
      turno:{
        type:"string",
        required:true
      }, 
      codigo:{
        type:"string",
        required:true
      }
  }
};