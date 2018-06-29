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


//export du module
module.exports = machineController;