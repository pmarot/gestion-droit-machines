var mongoose = require('mongoose');

var Droit = require("../models/Droit");

var droitController = {};

//Liste les droits
droitController.list = function (req, res) {
    Droit.find({})
    .populate("id_utilisateur")
    .populate("id_machine")
    .exec(function (err, droits) {
        if (err) {
            console.log('Error : ', err);
        } else {
            console.log(droits)
            res.render("../views/droit/index", { droits: droits });
        }
    });
};

//Affiche 1 droit par son id
droitController.show = function(req, res) {
    Droit.findOne({_id:req.params.id}).exec(function(err, droit){
        if(err){
            console.log('Error : ', err);
        }else{
            res.render("../views/droit/show",{droit:droit});
        } 
    });
};


//redirection à la page de creation de droit
droitController.create = function(req, res){
    res.render("../views/droit/create");
}; 

//enregistrement des droits
droitController.save = function(req, res){
    var droit = new Droit(req.body);
    droit.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/droit/create");
        } else{
            console.log("creation droit OK");
            res.redirect("/droits/show/" + droit._id);
        } 
    });
};

//edition d'un droit par son id
droitController.edit = function(req, res){
    var droit = new Droit(req.body);

    Droit.findOne({_id:req.params.id}).exec(function(err, droit){
        if(err){
            console.log("Error ", err);
        } else{
            res.render("../views/droit/edit",{droit: droit} );
        } 
    });
};

//gestion de l'edition d'un droit
droitController.update = function(req, res){
    Droit.findByIdAndUpdate(req.params.id,{ $set :{id_utilisateur: req.body.nom, id_machine: req.body.id} },{new: true}, function (err, droit){

        if (err){
            console.log(err);
            res.render("../views/droit/edit",{droit:req.body} );
        } 
        res.redirect("/droits");
        
    });
};


//export du module
module.exports = droitController;


