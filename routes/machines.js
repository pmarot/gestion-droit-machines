var express = require('express');
var router = express.Router();

var machine = require("../controllers/MachineController");

//recuperer les machines
router.get("/", machine.list);



//cree un machine
router.get("/create", machine.create);

//sauvegarder un machine. /!\ cest un POST 
router.post("/save", machine.save);

//editer une machine
router.get("/edit/:id", machine.edit);

//edit update.  /!\ cest un POST 
router.post("/update/:id", machine.update);

//export du module router
module.exports = router;