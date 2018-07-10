var mongoose = require('mongoose');

var User = require("../models/user");

var userController = {};


//nouveau administrateur
userController.list = function (req, res) {
    User.find({}).exec(function (err, users) {
        if (err) {
            console.log('Error : ', err);
        } else {
            console.log(users)
            res.render("../views/utilisateur/index", { users : users });
        }
    });
};

//  enregistre le nouvel administrateur
userController.save = function(req, res){
    var user = new User(req.body);

    user.save(function(err){
        if(err){
            console.log(err);
            res.render("user/register");
        } else{
            console.log("creation nouveau admin  OK");
            res.redirect("/");
        } 
    });
};

//export du module
module.exports = userController;