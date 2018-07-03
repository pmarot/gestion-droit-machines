var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DroitSchema = new mongoose.Schema({
    id_utilisateur: [{ type:Schema.Types.ObjectId, ref: 'Utilisateur' }],
    id_machine: [{ type: Schema.Types.ObjectId, ref: 'Machine' }],

});

module.exports = mongoose.model("Droit", DroitSchema);