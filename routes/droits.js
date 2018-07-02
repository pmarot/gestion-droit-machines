var express = require('express');
var router = express.Router();

var droit = require("../controllers/DroitController");

//recuperer les droits
router.get("/", droit.list);


//export du module router
module.exports = router;
