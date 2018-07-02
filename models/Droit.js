var mongoose = require('mongoose');

var DroitSchema = new mongoose.Schema({
    idUtilisateur: String,
    idMachine: String,
    droit: String
});

module.exports = mongoose.model("Droit", DroitSchema);