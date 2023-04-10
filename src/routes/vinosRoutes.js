var express = require("express");
var router = express.Router();
var vinosController = require("../controllers/vinosController");


router.get("/", vinosController.list);


module.exports = router; 