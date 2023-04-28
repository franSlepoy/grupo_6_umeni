var express = require("express");
var router = express.Router();
const path = require("path");
var vinosController = require("../controllers/vinosController");


const { body } = require("express-validator");
const { throws } = require("assert");

const upload = require('../middlewares/multerVinos');
const validations = require("../middlewares/validateCrearVino");

router.get("/", vinosController.list);
router.get("/detalleVino/:id", vinosController.detail);

router.get("/add", vinosController.add);
router.post("/add", upload.single("imagen"),validations, vinosController.create);

router.get("/edit/:id", vinosController.edit);
router.post("/edit/:id",upload.single("imagen"),vinosController.update );

router.get("/delete/:id", vinosController.delete);
router.delete("/delete/:id", vinosController.destroy);


router.get("/cepas", vinosController.cepasList);
router.get("/tintos", vinosController.tintosList);
router.get("/blancos", vinosController.blancosList);
router.get("/espumantes", vinosController.espumantesList);
router.get("/especiales", vinosController.especialesList);





module.exports = router; 