/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    nuevo: function (req, res) {
    res.view('employee/index', {
        title: "Employee"
    });
    },
    
    findEmployeebyPhonenum:function(req,res)
      {
        var id = req.param('id');
        Employee.findOne({phone:id})
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