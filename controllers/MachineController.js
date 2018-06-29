var mongoose = require('mongoose');

var Machine = require("../models/Machine");

var machineController = {};


//Liste les machines
machineController.list = function (req, res) {
    Machine.find({}).exec(function (err, machines) {
        if (err) {
            console.log('Error : ', err);
        } else {
            console.log(machines)
            res.render("../views/machine/index", { machines: machines });
        }
    });
};

//redirection à la page de creation de machine
machineController.create = function(req, res){
    res.render("../views/machine/create");
}; 

//enregistrement des machines
machineController.save = function(req, res){
    var machine = new Machine(req.body);

    machine.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/machine/create");
        } else{
            console.log("creation machine OK");
            res.redirect("/machines/show/" + machine._id);
        } 
    });
};


//export du module
module.exports = machineController;