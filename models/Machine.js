var mongoose = require('mongoose');

var MachineSchema = new mongoose.Schema({
    nom: String
});

module.exports = mongoose.model("Machine", MachineSchema);