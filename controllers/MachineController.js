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

//Affiche 1 machine par son id
machineController.show = function(req, res) {
    Machine.findOne({_id:req.params.id}).exec(function(err, machine){
        if(err){
            console.log('Error : ', err);
        }else{
            res.render("../views/machine/show",{machine:machine});
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

//edition d'une machine par son id
machineController.edit = function(req, res){
    var machine = new Machine(req.body);

    Machine.findOne({_id:req.params.id}).exec(function(err, legume){
        if(err){
            console.log("Error ", err);
        } else{
            res.render("../views/machine/edit",{machine: machine} );
        } 
    });
};

//gestion de l'edition d'une machine
machineController.update = function(req, res){
    Machine.findByIdAndUpdate(req.params.id,{ $set :{nom: req.body.nom, id: req.body.id} },{new: true}, function (err, machine){

        if (err){
            console.log(err);
            res.render("../views/machine/edit",{machine:req.body} );
        } 
        res.redirect("/machines/show/" + machine._id);
        
    });
};

//export du module
module.exports = machineController;