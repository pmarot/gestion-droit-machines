var mongoose = require('mongoose');

var Droit = require("../models/Droit");

var droitController = {};

//Liste les droits
droitController.list = function (req, res) {
    Droit.find({}).exec(function (err, droits) {
        if (err) {
            console.log('Error : ', err);
        } else {
            console.log(droits)
            res.render("../views/droit/index", { droits: droits });
        }
    });
};



//export du module
module.exports = droitController;


