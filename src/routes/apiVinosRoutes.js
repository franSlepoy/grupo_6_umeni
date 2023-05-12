const express= require("express");
var router = express.Router();

const apiVinosController = require("../controllers/apiVinos");

router.get("/", apiVinosController.list);
router.get("/detalle/:id", apiVinosController.show)
router.get("/totalCepa/:cepas_idCepa", apiVinosController.cepaList)
router.get("/listadoCepas", apiVinosController.listadoCepas)


module.exports = router