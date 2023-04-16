var express = require("express");
var router = express.Router();
var vinosController = require("../controllers/vinosController");


router.get("/", vinosController.list);
router.get("/detalleVino/:id", vinosController.detail);

router.get("/add", vinosController.add);
router.post("/add", vinosController.create);

router.get("/edit/:id", vinosController.edit);
router.post("/edit/:id",vinosController.update );

router.post("/delete/:id", vinosController.delete)

router.get("/cepas", vinosController.cepasList);



module.exports = router; 