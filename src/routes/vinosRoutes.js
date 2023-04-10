var express = require("express");
var router = express.Router();
var vinosController = require("../controllers/vinosController");


router.get("/", vinosController.list);
router.get("/vinos/:id", vinosController.detail);

router.get("/cepas", vinosController.cepasList);



module.exports = router; 