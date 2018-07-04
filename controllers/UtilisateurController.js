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

//Liste les utilisateurs pour l'integrer au droit
utilisateurController.listgetutilisateurs = function (req, res) {
    Utilisateur.find({}).exec(function (err, utilisateurs) {
        if (err) {
            console.log('Error : ', err);
        } else {
            console.log(utilisateurs)
            res.render("../views/utilisateur/getutilisateurs.ejs", { utilisateurs : utilisateurs });
        }
    });
};

//Affiche 1 utilisateur par son id
utilisateurController.show = function(req, res) {
    Utilisateur.findOne({_id:req.params.id}).exec(function(err, utilisateur){
        if(err){
            console.log('Error : ', err);
        }else{
            res.render("../views/utilisateur/show",{utilisateur:utilisateur});
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
            res.redirect("/utilisateurs/show/" + utilisateur._id);
        } 
    });
};

//edition d'un utilisateur par son id
utilisateurController.edit = function(req, res){
    var utilisateur = new Utilisateur(req.body);

    Utilisateur.findOne({_id:req.params.id}).exec(function(err, utilisateur){
        if(err){
            console.log("Error ", err);
        } else{
            res.render("../views/utilisateur/edit",{utilisateur: utilisateur} );
        } 
    });
};

//gestion de l'edition d'un utilisateur
utilisateurController.update = function(req, res){
    Utilisateur.findByIdAndUpdate(req.params.id,{ $set :{nom: req.body.nom, prenom: req.body.prenom} },{new: true}, function (err, utilisateur){

        if (err){
            console.log(err);
            res.render("../views/utilisateur/edit",{utilisateur:req.body} );
        } 
        res.redirect("/utilisateurs/show/" + utilisateur._id);
        
    });
};



//export du module
module.exports = utilisateurController;