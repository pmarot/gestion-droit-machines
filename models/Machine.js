var mongoose = require('mongoose');

var MachineSchema = new mongoose.Schema({
    id: String,
    nom: String
});

module.exports = mongoose.model("Machine", MachineSchema);