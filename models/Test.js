var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var testSchema = Schema({
    idMachine: [{ type: Schema.Types.ObjectId, ref: 'Machine' }],
    idUtilisateur: [{ type: Schema.Types.ObjectId, ref: 'Utilisateur' }],
    droit: String,
});

var Story = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', testSchema);