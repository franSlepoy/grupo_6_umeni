const express= require("express");
var router = express.Router();

const apiVinosController = require("../controllers/apiVinos");

router.get("/", apiVinosController.list)

module.exports = router