var express = require('express');
var router = express.Router();

var utilisateur = require("../controllers/UtilisateurController");

//recuperer les utilisateur
router.get("/", utilisateur.list);

//voir un utilisateur par son id
router.get("/show/:id", utilisateur.show);

//crée un utilisateur
router.get("/create", utilisateur.create);

//sauvegarder un utilisateur.  /!\ cest un POST 
router.post("/save", utilisateur.save);

// editer un utilisateur
router.get("/edit/:id", utilisateur.edit);

//edit update.  /!\ cest un POST 
router.post("/update/:id", utilisateur.update);

//export du module router
module.exports = router;