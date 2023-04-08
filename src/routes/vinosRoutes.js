var express = require("express");
var router = express.Router();
var vinosController = require("../controllers/vinosController");


router.get("/vinos", vinosController.list);

module.exports = router; 