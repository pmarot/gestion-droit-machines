var express = require('express');
var router = express.Router();

var machine = require("../controllers/MachineController");

//recuperer les machines
router.get("/", machine.list);









//export du module router
module.exports = router;