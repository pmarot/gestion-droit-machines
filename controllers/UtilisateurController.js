var mongoose = require('mongoose');

var Utilisateur = require("../models/Utilisateur");

var utilisateurController = {};


//Liste les utilisateurs
utilisateurController.list = function (req, res) {
    Utilisateur.find({}).exec(function (err, utilisateurs) {
        if (err) {
            console.log('Error : ', err);
        } else {
            console.log(utilisateurs)
            res.render("../views/utilisateur/index", { utilisateurs : utilisateurs });
        }
    });
};

// redirige vers le formulaire ajouter nouvel utilisateur
utilisateurController.create = function(req, res){
    res.render("../views/utilisateur/create");
}; 

//  enregistre le nouvel utilisateur
utilisateurController.save = function(req, res){
    var utilisateur = new Utilisateur(req.body);

    utilisateur.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/utilisateur/create");
        } else{
            console.log("creation nouvel utilisateur  OK");
            res.redirect("/utilisateur/show/" + utilisateur._id);
        } 
    });
};

// affiche un seul utilisateur
utilisateurController.show = function(req, res) {
    Utilisateur.findOne({_id:req.params.id, nom:req.params.nom, prenom:req.params.prenom }).exec(function(err, utilisateur){
        if(err){
            console.log('Error : ', err);
        }else{
            res.render("../views/utilisateur/show",{utilisateur:utilisateur});
        } 
    });
};




//export du module
module.exports = utilisateurController;