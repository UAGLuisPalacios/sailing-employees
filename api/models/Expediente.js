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
        minLength: 5
      },      
      status:{
        type:"int",
        required:"false"
      }

  }
};

