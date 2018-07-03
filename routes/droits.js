var express = require('express');
var router = express.Router();

var droit = require("../controllers/DroitController");

//recuperer les droits
router.get("/", droit.list);

//voir un droit par son id
router.get("/show/:id", droit.show);

//cree un droit
router.get("/create", droit.create);

//sauvegarder un droit. /!\ cest un POST 
router.post("/save", droit.save);

//editer une droit
router.get("/edit/:id", droit.edit);

//edit update.  /!\ cest un POST 
router.post("/update/:id", droit.update);
//export du module router
module.exports = router;
