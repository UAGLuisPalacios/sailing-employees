/**
* Contacto.js
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
      email:{
        type:"email",
        required:false
      },
      telefono:{
        type:"string",
        required:false
      },    
      celular:{
        type:"string",
        required:false
      }
  }
};

