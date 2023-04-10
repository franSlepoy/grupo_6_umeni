var express = require("express");
var router = express.Router();
var vinosController = require("../controllers/vinosController");


router.get("/", vinosController.list);
router.get("/:id", vinosController.detail);

module.exports = router; 