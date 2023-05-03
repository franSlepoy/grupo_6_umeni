const express= require("express");
var router = express.Router();

const apiVinosController = require("../controllers/apiVinos");

router.get("/", apiVinosController.list);
router.get("/detalle/:id", apiVinosController.show)


module.exports = router